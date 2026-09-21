import { createHash } from "node:crypto";
import { promises as fs } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const MANIFEST_PATH = path.join(ROOT, "assets", "media", "manifest.json");
const BLOBS_DIR = path.join(ROOT, "assets", "media", "blobs");

async function exists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function readBlob(sha) {
  const single = path.join(BLOBS_DIR, `${sha}.b64`);
  if (await exists(single)) {
    return Buffer.from(await fs.readFile(single, "utf8"), "base64");
  }
  const dir = path.join(BLOBS_DIR, sha);
  const parts = (await fs.readdir(dir))
    .filter((name) => name.endsWith(".b64"))
    .sort();
  if (parts.length === 0) {
    throw new Error(`Missing media blob for ${sha}`);
  }
  const encoded = (
    await Promise.all(parts.map((name) => fs.readFile(path.join(dir, name), "utf8")))
  ).join("");
  return Buffer.from(encoded, "base64");
}

async function main() {
  const raw = await fs.readFile(MANIFEST_PATH, "utf8");
  const manifest = JSON.parse(raw);
  let restored = 0;
  let skipped = 0;

  for (const [relativePath, sha] of Object.entries(manifest)) {
    const dest = path.join(ROOT, relativePath);
    const bytes = await readBlob(sha);

    if (await exists(dest)) {
      const current = createHash("sha256").update(await fs.readFile(dest)).digest("hex");
      if (current === sha) {
        skipped += 1;
        continue;
      }
    }

    await fs.mkdir(path.dirname(dest), { recursive: true });
    await fs.writeFile(dest, bytes);
    restored += 1;
  }

  console.log(`Restored ${restored} image(s); ${skipped} already present.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
