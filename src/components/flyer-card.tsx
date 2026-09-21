import Link from "next/link";
import type { Flyer } from "@/lib/flyers";
import { SheetImage } from "@/components/sheet-image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function FlyerLink({
  flyer,
  className,
  children,
}: {
  flyer: Flyer;
  className?: string;
  children: React.ReactNode;
}) {
  const href = flyer.href || flyer.image || "/events";
  const external = href.startsWith("http");
  if (external) {
    return (
      <a href={href} className={className} target="_blank" rel="noreferrer">
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

export function FlyerCard({ flyer }: { flyer: Flyer }) {
  return (
    <FlyerLink flyer={flyer} className="group block h-full">
      <Card className="h-full overflow-hidden pt-0">
        {flyer.image ? (
          <SheetImage
            src={flyer.image}
            alt={flyer.title}
            width={640}
            height={480}
            className="h-48 w-full object-cover object-top"
          />
        ) : (
          <div className="flex h-48 items-center justify-center bg-secondary text-sm text-muted-foreground">
            {flyer.isPdf ? "PDF flyer" : "No image yet"}
          </div>
        )}
        <CardHeader>
          <p className="text-xs uppercase tracking-[0.16em] text-primary">
            {flyer.dateLabel}
            {flyer.place ? ` · ${flyer.place}` : ""}
          </p>
          <CardTitle className="font-serif text-2xl group-hover:text-primary">
            {flyer.title}
          </CardTitle>
        </CardHeader>
        {flyer.summary ? (
          <CardContent className="text-sm text-muted-foreground">{flyer.summary}</CardContent>
        ) : null}
      </Card>
    </FlyerLink>
  );
}

export function FlyerArticle({ flyer }: { flyer: Flyer }) {
  const href = flyer.href || flyer.image || "/events";
  const external = href.startsWith("http");
  return (
    <article
      id={flyer.slug}
      className="grid items-start gap-8 rounded-2xl border border-gold/25 bg-card p-5 md:grid-cols-12 md:p-8"
    >
      {flyer.image ? (
        <SheetImage
          src={flyer.image}
          alt={flyer.title}
          width={640}
          height={800}
          className="max-h-80 w-full rounded-xl object-cover object-top md:col-span-4"
        />
      ) : (
        <div className="flex max-h-80 min-h-48 items-center justify-center rounded-xl bg-secondary text-sm text-muted-foreground md:col-span-4">
          {flyer.isPdf ? "PDF flyer" : "No image yet"}
        </div>
      )}
      <div className="md:col-span-8">
        <p className="text-xs uppercase tracking-[0.18em] text-primary">
          {flyer.dateLabel}
          {flyer.place ? ` · ${flyer.place}` : ""}
        </p>
        <h2 className="mt-2 font-serif text-3xl">{flyer.title}</h2>
        {flyer.summary ? (
          <p className="mt-4 leading-relaxed text-muted-foreground">{flyer.summary}</p>
        ) : null}
        <Button
          nativeButton={false}
          className="mt-6"
          render={
            external ? (
              <a href={href} target="_blank" rel="noreferrer" />
            ) : (
              <Link href={href} />
            )
          }
        >
          Open details
        </Button>
      </div>
    </article>
  );
}

export function PagePhotoGrid({ items }: { items: Flyer[] }) {
  if (items.length === 0) return null;
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <figure key={item.slug} className="overflow-hidden rounded-xl border border-gold/20 bg-card">
          {item.image ? (
            <SheetImage
              src={item.image}
              alt={item.title}
              className="h-56 w-full object-cover object-top"
            />
          ) : null}
          <figcaption className="px-4 py-3 text-sm text-muted-foreground">{item.title}</figcaption>
        </figure>
      ))}
    </div>
  );
}
