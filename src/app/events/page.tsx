import { FlyerArticle } from "@/components/flyer-card";
import { PageHero, Section } from "@/components/page-hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getFlyers } from "@/lib/flyers";
import { site } from "@/lib/site";

export const metadata = {
  title: "Events",
};

export default async function EventsPage() {
  const flyers = await getFlyers("events");

  return (
    <>
      <PageHero
        eyebrow="Calendar"
        title="Events at Chinmaya Saraswati"
        description="Upcoming utsavs, yajnas, and gatherings at the ashram."
      />
      <Section>
        {flyers.length === 0 ? (
          <Card>
            <CardHeader>
              <CardTitle className="font-serif text-2xl">No events posted yet</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Follow the ashram on{" "}
              <a className="text-primary underline-offset-4 hover:underline" href={site.facebook} target="_blank" rel="noreferrer">
                Facebook
              </a>{" "}
              for festival days.
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-8">
            {flyers.map((flyer) => (
              <FlyerArticle key={flyer.slug} flyer={flyer} />
            ))}
          </div>
        )}
      </Section>
    </>
  );
}
