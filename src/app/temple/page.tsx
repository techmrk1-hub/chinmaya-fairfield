import Link from "next/link";
import { PagePhotoGrid } from "@/components/flyer-card";
import { Eyebrow, PageHero, Section } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getPageMedia } from "@/lib/flyers";
import { contacts, hours } from "@/lib/site";

export const metadata = {
  title: "Temple & Ashram",
};

export default async function TemplePage() {
  const photos = await getPageMedia("temple");
  return (
    <>
      <PageHero
        eyebrow="Chinmaya Saraswati"
        title="Temple hours, priest, and samskaras"
        description="A Devi temple and Vedanta ashram on five acres in Orange — open morning and evening, with a priest available for family pujas at the shrine or in your home."
      />
      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="font-serif text-2xl">Weekdays</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-muted-foreground">
              {hours.weekdays.map((slot) => (
                <p key={slot.time}>
                  {slot.label}: {slot.time}
                </p>
              ))}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="font-serif text-2xl">Weekends</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-muted-foreground">
              {hours.weekends.map((slot) => (
                <p key={slot.time}>
                  {slot.label}: {slot.time}
                </p>
              ))}
            </CardContent>
          </Card>
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div>
            <Eyebrow>Priest</Eyebrow>
            <h2 className="text-3xl">{contacts.priest}</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Office{" "}
              <a className="text-primary underline-offset-4 hover:underline" href={contacts.officeHref}>
                {contacts.office}
              </a>
              . Cell{" "}
              <a className="text-primary underline-offset-4 hover:underline" href={contacts.priestCellHref}>
                {contacts.priestCell}
              </a>
              .
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Our priest is available for puja in your family name and for Hindu
              samskaras such as Annaprashana and Vidya Arambham, at the ashram
              or at home. Please contact him in person or by phone.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button nativeButton={false} render={<Link href="/temple/priest" />}>
                Full biography
              </Button>
              <Button nativeButton={false} variant="outline" render={<Link href="/temple/deities" />}>
                Our deities
              </Button>
              <Button nativeButton={false} variant="outline" render={<Link href="/temple/directions" />}>
                Directions
              </Button>
            </div>
          </div>
          <Card className="bg-secondary/50">
            <CardHeader>
              <CardTitle className="font-serif text-2xl">Plan a visit</CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-relaxed text-muted-foreground">
              Come for darshan during posted hours. For festival days and
              Kumbhabhishekam, see the events calendar. Dress modestly; remove
              shoes before entering the shrine.
            </CardContent>
          </Card>
        </div>
        {photos.length > 0 ? (
          <div className="mt-12">
            <Eyebrow>Photographs</Eyebrow>
            <h2 className="mb-6 text-3xl">Ashram photographs</h2>
            <PagePhotoGrid items={photos} />
          </div>
        ) : null}
      </Section>
    </>
  );
}
