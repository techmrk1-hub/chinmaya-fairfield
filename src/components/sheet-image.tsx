import Image from "next/image";
import { withBase } from "@/lib/paths";

export function SheetImage({
  src,
  alt,
  className,
  width = 800,
  height = 600,
}: {
  src?: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}) {
  if (!src) return null;
  if (src.startsWith("/")) {
    return <Image src={withBase(src)} alt={alt} width={width} height={height} className={className} />;
  }
  return (
    // Remote Drive / Sheets URLs often redirect; the Next optimizer cannot follow them.
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} className={className} />
  );
}
