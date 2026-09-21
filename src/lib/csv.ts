export function parseCsv(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let cell = "";
  let inQuotes = false;
  const src = text.replace(/^\uFEFF/, "");

  for (let i = 0; i < src.length; i += 1) {
    const char = src[i];
    const next = src[i + 1];
    if (inQuotes) {
      if (char === '"') {
        if (next === '"') {
          cell += '"';
          i += 1;
        } else {
          inQuotes = false;
        }
      } else {
        cell += char;
      }
      continue;
    }
    if (char === '"') {
      inQuotes = true;
      continue;
    }
    if (char === ",") {
      row.push(cell);
      cell = "";
      continue;
    }
    if (char === "\n" || char === "\r") {
      if (char === "\r" && next === "\n") i += 1;
      row.push(cell);
      cell = "";
      if (row.some((value) => value.trim())) rows.push(row);
      row = [];
      continue;
    }
    cell += char;
  }
  if (cell.length > 0 || row.length > 0) {
    row.push(cell);
    if (row.some((value) => value.trim())) rows.push(row);
  }
  return rows;
}

export function normalizeHeader(value: string) {
  return value.trim().toLowerCase().replace(/[^a-z0-9]+/g, "");
}

export function isTruthy(value: string | undefined) {
  const v = (value || "").trim().toLowerCase();
  return v === "true" || v === "yes" || v === "y" || v === "1" || v === "x";
}

export function driveShareToImageUrl(raw: string) {
  const value = raw.trim();
  if (!value) return "";
  const id =
    value.match(/\/d\/([a-zA-Z0-9_-]+)/)?.[1] ||
    value.match(/[?&]id=([a-zA-Z0-9_-]+)/)?.[1];
  if (id && /google\.com/.test(value)) {
    return `https://drive.google.com/uc?export=view&id=${id}`;
  }
  return value;
}
