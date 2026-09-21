import Link from "next/link";
import { LotusDivider } from "@/components/ornament";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-gold/25 bg-primary text-primary-foreground">
      <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_top_right,oklch(0.72_0.12_78/.55),transparent_42%)]" />
      <div className="relative mx-auto max-w-6xl px-5 py-16 md:py-20">
        {eyebrow ? (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-gold-soft">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="max-w-6xl text-4xl leading-tight md:text-5xl">{title}</h1>
        {description ? (
          <p className="mt-5 max-w-5xl text-base leading-relaxed text-primary-foreground/80 md:text-lg">
            {description}
          </p>
        ) : null}
        <div className="mt-8 max-w-xs opacity-80">
          <LotusDivider />
        </div>
      </div>
    </section>
  );
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`mx-auto max-w-6xl px-5 py-16 md:py-20 ${className}`}>
      {children}
    </section>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
      {children}
    </p>
  );
}

export function TextLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const external = href.startsWith("http") || href.startsWith("mailto") || href.startsWith("tel");
  const className =
    "font-medium text-primary underline decoration-gold/50 underline-offset-4 transition-colors hover:decoration-gold";
  if (external) {
    return (
      <a href={href} className={className} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
