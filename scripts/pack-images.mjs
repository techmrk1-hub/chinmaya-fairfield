import { createHash } from "node:crypto";
import { promises as fs } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const CHUNK = 80_000;
const FILES = [
  "public/images/amrit-75.jpg",
  "public/images/bala-vihar-flyer.jpg",
  "public/images/chinmaya75.png",
  "public/images/chinmaya-photo1.jpg",
  "public/images/favicon.jpg",
  "public/images/gita-flyer.jpg",
  "public/images/gurudev-full.jpg",
  "public/images/gurudev.jpg",
  "public/images/kumbhabhishekam.jpg",
  "public/images/logo.jpg",
  "public/images/paypal-qr.png",
  "public/images/priest.jpg",
  "public/images/temple-full.jpg",
  "public/images/temple.jpg",
  "public/flyers/bala-vihar-2026.jpg",
  "public/flyers/gita-chanting-2026.jpg",
  "public/flyers/kumbhabhishekam-2026.jpg",
  "src/app/icon.jpg",
];

async function main() {
  const blobsDir = path.join(ROOT, "assets", "media", "blobs");
  await fs.rm(blobsDir, { recursive: true, force: true });
  await fs.mkdir(blobsDir, { recursive: true });
  const manifest = {};

  for (const relativePath of FILES) {
    const bytes = await fs.readFile(path.join(ROOT, relativePath));
    const sha = createHash("sha256").update(bytes).digest("hex");
    const encoded = bytes.toString("base64");
    const destDir = path.join(blobsDir, sha);
    await fs.mkdir(destDir, { recursive: true });
    let part = 0;
    for (let offset = 0; offset < encoded.length; offset += CHUNK) {
      const chunk = encoded.slice(offset, offset + CHUNK);
      const name = `${String(part).padStart(3, "0")}.b64`;
      await fs.writeFile(path.join(destDir, name), chunk);
      part += 1;
    }
    manifest[relativePath] = sha;
  }

  await fs.writeFile(
    path.join(ROOT, "assets", "media", "manifest.json"),
    `${JSON.stringify(manifest, null, 2)}\n`,
    "utf8"
  );
  console.log(`Packed ${Object.keys(manifest).length} paths into chunked blobs`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
