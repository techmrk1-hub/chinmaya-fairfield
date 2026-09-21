import { promises as fs } from "fs";
import path from "path";
import { fetchSheetItems, type SheetItem } from "@/lib/sheet";
import { slugify } from "@/lib/slug";

export type FlyerRecord = {
  slug: string;
  title: string;
  date?: string;
  dateLabel?: string;
  place?: string;
  file?: string;
  href?: string;
  summary?: string;
  featured?: boolean;
  page?: string;
};

export type Flyer = {
  slug: string;
  title: string;
  date?: string;
  dateLabel?: string;
  place?: string;
  image?: string;
  href?: string;
  summary?: string;
  featured?: boolean;
  page: string;
  isPdf: boolean;
  source: "sheet" | "catalog" | "folder";
};

const CATALOG = path.join(process.cwd(), "content", "flyers.json");
const FLYERS_DIR = path.join(process.cwd(), "public", "flyers");
const IMAGE_EXT = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif"]);
const PDF_EXT = new Set([".pdf"]);
const ALLOWED = new Set([...IMAGE_EXT, ...PDF_EXT]);

export { slugify };
export function flyersDir() {
  return FLYERS_DIR;
}

function formatDateLabel(iso?: string) {
  if (!iso) return undefined;
  const parts = iso.split("-").map(Number);
  const date = new Date(Date.UTC(parts[0], (parts[1] || 1) - 1, parts[2] || 1));
  if (Number.isNaN(date.getTime())) return iso;
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: parts[2] ? "numeric" : undefined,
    year: "numeric",
    timeZone: "UTC",
  });
}

function titleFromFilename(filename: string) {
  const base = filename.replace(/\.[a-z0-9]+$/i, "");
  const withoutDate = base.replace(/^\d{4}[-_]\d{2}([-_]\d{2})?[-_]?/, "");
  return (
    withoutDate
      .replace(/[-_]+/g, " ")
      .replace(/\s+/g, " ")
      .trim()
      .replace(/\b\w/g, (letter) => letter.toUpperCase()) || filename
  );
}

function dateFromFilename(filename: string) {
  return filename.match(/^(\d{4}-\d{2}(?:-\d{2})?)/)?.[1];
}

function fromSheet(item: SheetItem): Flyer {
  return {
    slug: item.slug,
    title: item.title,
    date: item.date,
    dateLabel: item.dateLabel || formatDateLabel(item.date) || "Date to be announced",
    place: item.place,
    image: item.isPdf ? undefined : item.image,
    href: item.href || item.image,
    summary: item.summary,
    featured: item.featured,
    page: item.page,
    isPdf: item.isPdf,
    source: "sheet",
  };
}

function fromCatalog(record: FlyerRecord): Flyer {
  const file = record.file || "";
  const ext = path.extname(file).toLowerCase();
  const isPdf = PDF_EXT.has(ext);
  const local = file.startsWith("/") || file.startsWith("http") ? file : file ? `/flyers/${file}` : undefined;
  return {
    slug: record.slug,
    title: record.title,
    date: record.date,
    dateLabel: record.dateLabel || formatDateLabel(record.date) || "Date to be announced",
    place: record.place,
    image: isPdf ? undefined : local,
    href: record.href || local,
    summary: record.summary,
    featured: Boolean(record.featured),
    page: record.page || "events",
    isPdf,
    source: "catalog",
  };
}

async function readCatalog(): Promise<FlyerRecord[]> {
  try {
    const raw = await fs.readFile(CATALOG, "utf8");
    const parsed = JSON.parse(raw) as FlyerRecord[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

async function localFlyers(): Promise<Flyer[]> {
  const catalog = await readCatalog();
  let files: string[] = [];
  try {
    files = (await fs.readdir(FLYERS_DIR)).filter(
      (name) => ALLOWED.has(path.extname(name).toLowerCase()) && !name.startsWith(".")
    );
  } catch {
    files = [];
  }
  const listed = new Set(catalog.map((item) => item.file));
  const fromJson = catalog.map(fromCatalog);
  const fromFolder = files
    .filter((file) => !listed.has(file))
    .map((file) =>
      fromCatalog({
        slug: slugify(file),
        title: titleFromFilename(file),
        date: dateFromFilename(file),
        file,
        summary: "Imported from the flyers folder.",
        featured: false,
        page: "events",
      })
    );
  return [...fromJson, ...fromFolder];
}

function sortFlyers(items: Flyer[]) {
  return [...items].sort((a, b) => {
    const da = a.date || "";
    const db = b.date || "";
    if (da !== db) return db.localeCompare(da);
    return a.title.localeCompare(b.title);
  });
}

export async function getSheetStatus() {
  return fetchSheetItems();
}

export async function getAllSheetAndLocal(): Promise<Flyer[]> {
  const sheet = await fetchSheetItems();
  if (sheet.configured && !sheet.error) {
    return sortFlyers(sheet.items.map(fromSheet));
  }
  return sortFlyers(await localFlyers());
}

function matchesPage(flyer: Flyer, page: string) {
  if (flyer.page === "all") return true;
  if (page === "events") return flyer.page === "events" || flyer.page === "home" || !flyer.page;
  if (page === "home") return flyer.featured || flyer.page === "home";
  return flyer.page === page;
}

export async function getFlyers(page = "events") {
  const all = await getAllSheetAndLocal();
  return all.filter((flyer) => matchesPage(flyer, page));
}

export async function getFeaturedFlyers(limit = 3) {
  const all = await getAllSheetAndLocal();
  const featured = all.filter((flyer) => flyer.featured || flyer.page === "home");
  const pool = featured.length ? featured : all.filter((flyer) => flyer.page === "events");
  return pool.slice(0, limit);
}

export async function getPageMedia(page: string) {
  return getFlyers(page);
}

export async function writeCatalog(records: FlyerRecord[]) {
  await fs.mkdir(path.dirname(CATALOG), { recursive: true });
  await fs.writeFile(CATALOG, `${JSON.stringify(records, null, 2)}\n`, "utf8");
}

export async function upsertFlyer(record: FlyerRecord) {
  const catalog = await readCatalog();
  const index = catalog.findIndex((item) => item.slug === record.slug || item.file === record.file);
  if (index >= 0) catalog[index] = { ...catalog[index], ...record };
  else catalog.unshift(record);
  await writeCatalog(catalog);
  return record;
}

export function isAllowedFlyerFile(filename: string) {
  return ALLOWED.has(path.extname(filename).toLowerCase());
}
