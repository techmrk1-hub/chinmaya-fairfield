import { promises as fs } from "fs";
import path from "path";
import { driveShareToImageUrl, isTruthy, normalizeHeader, parseCsv } from "@/lib/csv";
import { slugify } from "@/lib/slug";

export type SheetItem = {
  slug: string;
  title: string;
  date?: string;
  dateLabel?: string;
  place?: string;
  image?: string;
  href?: string;
  summary?: string;
  featured: boolean;
  page: string;
  published: boolean;
  source: "sheet";
  isPdf: boolean;
};

type SheetConfig = {
  spreadsheetId?: string;
  tab?: string;
  csvUrl?: string;
  gid?: string;
  url?: string;
};

const CONFIG_PATH = path.join(process.cwd(), "content", "sheet.json");

export async function readSheetConfig(): Promise<SheetConfig> {
  const fromEnv: SheetConfig = {
    spreadsheetId: process.env.GOOGLE_SHEET_ID || undefined,
    tab: process.env.GOOGLE_SHEET_TAB || undefined,
    csvUrl: process.env.GOOGLE_SHEETS_CSV_URL || undefined,
  };
  try {
    const raw = await fs.readFile(CONFIG_PATH, "utf8");
    const file = JSON.parse(raw) as SheetConfig;
    return {
      spreadsheetId: fromEnv.spreadsheetId || file.spreadsheetId || undefined,
      tab: fromEnv.tab || file.tab || "Flyers",
      csvUrl: fromEnv.csvUrl || file.csvUrl || undefined,
      gid: file.gid || "0",
      url: file.url,
    };
  } catch {
    return { ...fromEnv, tab: fromEnv.tab || "Flyers", gid: "0" };
  }
}

export function sheetCsvUrl(config: SheetConfig & { gid?: string }) {
  const raw = config.csvUrl || "";
  if (raw) {
    if (raw.includes("/pubhtml")) {
      return raw.replace(/\/pubhtml.*$/, "/pub?output=csv");
    }
    if (raw.includes("/pub?") && !raw.includes("output=")) {
      return `${raw}&output=csv`;
    }
    return raw;
  }
  if (!config.spreadsheetId) return "";
  const gid = config.gid || "0";
  return `https://docs.google.com/spreadsheets/d/${config.spreadsheetId}/export?format=csv&gid=${gid}`;
}

function cell(row: Record<string, string>, ...keys: string[]) {
  for (const key of keys) {
    if (row[key]) return row[key];
  }
  return "";
}

function pageName(value: string) {
  const page = value.trim().toLowerCase().replace(/\s+/g, "-");
  if (!page) return "events";
  if (page === "event" || page === "flyer" || page === "flyers") return "events";
  if (page === "photos" || page === "photo" || page === "album") return "gallery";
  if (page === "balavihar") return "bala-vihar";
  return page;
}

export function rowsToItems(rows: string[][]): SheetItem[] {
  if (rows.length < 2) return [];
  const headers = rows[0].map(normalizeHeader);
  return rows
    .slice(1)
    .map((values) => {
      const record: Record<string, string> = {};
      headers.forEach((header, index) => {
        record[header] = (values[index] || "").trim();
      });
      const title = cell(record, "title", "name", "event");
      const imageRaw = cell(record, "image", "imageurl", "flyer", "photo", "file", "drive");
      const image = driveShareToImageUrl(imageRaw);
      const publishedRaw = cell(record, "published", "live", "show");
      return {
        slug: slugify(cell(record, "slug") || title || imageRaw),
        title: title || "Untitled flyer",
        date: cell(record, "date", "eventdate") || undefined,
        dateLabel: cell(record, "datelabel", "when", "displaydate") || undefined,
        place: cell(record, "place", "location", "venue") || undefined,
        image: image || undefined,
        href: cell(record, "link", "href", "url", "signup") || undefined,
        summary: cell(record, "summary", "description", "notes") || undefined,
        featured: isTruthy(cell(record, "featured", "home")),
        page: pageName(cell(record, "page", "section", "placeon")),
        published: publishedRaw ? isTruthy(publishedRaw) : true,
        source: "sheet" as const,
        isPdf: /\.pdf($|\?)/i.test(imageRaw) || imageRaw.toLowerCase().includes("pdf"),
      };
    })
    .filter((item) => item.published && (item.title || item.image));
}

export async function fetchSheetItems(): Promise<{
  configured: boolean;
  items: SheetItem[];
  error?: string;
  url?: string;
}> {
  const config = await readSheetConfig();
  const url = sheetCsvUrl(config);
  if (!url) return { configured: false, items: [] };

  try {
    const response = await fetch(url, {
      // Local `next start` refreshes about once a minute. GitHub Pages bakes
      // the CSV in at build time (see the daily workflow).
      next: { revalidate: 60 },
      cache: "force-cache",
      headers: { "User-Agent": "ChinmayaFairfieldWebsite/1.0" },
    });
    if (!response.ok) {
      return {
        configured: true,
        items: [],
        url,
        error: `Google Sheets returned ${response.status}. File → Share → Publish to web (CSV), then paste that link in content/sheet.json.`,
      };
    }
    const text = await response.text();
    if (text.trimStart().startsWith("<") || text.includes("google-visualization-query")) {
      return {
        configured: true,
        items: [],
        url,
        error: "Could not read the sheet as CSV. File → Share → Publish to web (CSV), and keep the first tab named Flyers.",
      };
    }
    return { configured: true, items: rowsToItems(parseCsv(text)), url };
  } catch (error) {
    return {
      configured: true,
      items: [],
      url,
      error: error instanceof Error ? error.message : "Could not reach Google Sheets.",
    };
  }
}
