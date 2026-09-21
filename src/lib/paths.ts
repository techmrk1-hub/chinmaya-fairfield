export function withBase(path: string) {
  if (!path.startsWith("/")) return path;
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  if (!base) return path;
  return `${base}${path}`;
}
