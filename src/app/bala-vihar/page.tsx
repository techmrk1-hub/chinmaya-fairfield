import Link from "next/link";
import { PagePhotoGrid } from "@/components/flyer-card";
import { SheetImage } from "@/components/sheet-image";
import { Eyebrow, PageHero, Section, TextLink } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getPageMedia } from "@/lib/flyers";
import { site } from "@/lib/site";

export const metadata = {
  title: "Bala Vihar",
};

export default async function BalaViharPage() {
  const photos = await getPageMedia("bala-vihar");
  const hero = photos[0];
  return (
    <>
      <PageHero
        eyebrow="Children & youth"
        title="Bala Vihar"
        description="India’s spiritual heritage, taught with stories, drama, arts, and discussion — from kindergarten through Grade 12, with parents in satsang at the same hour."
      />
      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Eyebrow>What it is</Eyebrow>
            <h2 className="text-3xl">A classroom for values, not a drop-off.</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              In Bala Vihar, the cultural heritage of India — including its
              teachings on moral values — is offered to children and youth at
              their own level. Children also learn popular bhajans and shlokas.
              Classes are organized to match the child’s school grade.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Teachers are volunteers who devote their time to a Mission-wide
              syllabus. Parents are expected to join an adult study group;
              Bala Vihar is not childcare. Parents do not sit with children in
              class.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {site.cmtcNote}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button nativeButton={false} render={<Link href="/bala-vihar/registration" />}>
                Register
              </Button>
              <Button nativeButton={false} variant="outline" render={<Link href="/bala-vihar/curriculum" />}>
                Curriculum
              </Button>
              <Button nativeButton={false} variant="outline" render={<Link href="/bala-vihar/schedule" />}>
                Sunday schedule
              </Button>
            </div>
          </div>
          <SheetImage
            src={hero?.image || "/images/bala-vihar-flyer.jpg"}
            alt={hero?.title || "Bala Vihar 2026-27 flyer"}
            width={791}
            height={1024}
            className="mx-auto max-h-[540px] w-auto rounded-xl gold-frame lg:col-span-5"
          />
        </div>
      </Section>
      <section className="border-y border-gold/20 bg-card">
        <Section className="py-16 md:py-16">
          <div className="grid gap-5 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="font-serif text-2xl">Weather cancellations</CardTitle>
              </CardHeader>
              <CardContent className="text-sm leading-relaxed text-muted-foreground">
                If Bala Vihar is cancelled for weather, a notice is posted here
                on or before 7:00 AM. Please check before leaving home. Keep a
                printed volunteer list for outages, or email{" "}
                <TextLink href={`mailto:${site.websevakEmail}`}>
                  {site.websevakEmail}
                </TextLink>
                .
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="font-serif text-2xl">Two locations</CardTitle>
              </CardHeader>
              <CardContent className="text-sm leading-relaxed text-muted-foreground">
                Orange: Chinmaya Saraswati Ashram, 393 Derby Avenue. Stamford:
                University of Connecticut, One University Place.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="font-serif text-2xl">Membership</CardTitle>
              </CardHeader>
              <CardContent className="text-sm leading-relaxed text-muted-foreground">
                $500 per family annually (tax-deductible). Adults without
                children: $300. Chinmaya Parivar monthly donors of $100+ have
                Bala Vihar / Satsang fees waived.
              </CardContent>
            </Card>
          </div>
        </Section>
      </section>
      {photos.length > 1 ? (
        <Section>
          <Eyebrow>Class photographs</Eyebrow>
          <h2 className="mb-6 text-3xl">From our classrooms</h2>
          <PagePhotoGrid items={photos.slice(1)} />
        </Section>
      ) : null}
    </>
  );
}
