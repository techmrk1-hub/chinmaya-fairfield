import { PagePhotoGrid } from "@/components/flyer-card";
import { SheetImage } from "@/components/sheet-image";
import { PageHero, Section } from "@/components/page-hero";
import { getPageMedia } from "@/lib/flyers";
import { gallery } from "@/lib/site";

export const metadata = {
  title: "Gallery",
};

export default async function GalleryPage() {
  const fromSheet = await getPageMedia("gallery");
  const hasPhotos = fromSheet.length + gallery.length > 0;

  return (
    <>
      <PageHero
        eyebrow="Album"
        title="Life at the ashram"
        description="Photographs from Chinmaya Saraswati — festivals, classes, and daily life at the ashram."
      />
      <Section>
        {!hasPhotos ? (
          <div className="rounded-xl border border-dashed border-gold/40 bg-card px-6 py-16 text-center">
            <p className="font-serif text-2xl text-primary">No photographs yet</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Photographs will appear here. Follow the ashram on Facebook.
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            <PagePhotoGrid items={fromSheet} />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {gallery.map((item) => (
                <figure
                  key={item.src}
                  className="overflow-hidden rounded-xl border border-gold/20 bg-card"
                >
                  <SheetImage
                    src={item.src}
                    alt={item.alt}
                    width={800}
                    height={600}
                    className="h-56 w-full object-cover object-top"
                  />
                  <figcaption className="px-4 py-3 text-sm text-muted-foreground">
                    {item.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        )}
      </Section>
    </>
  );
}
