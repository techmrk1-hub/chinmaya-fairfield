import { PageHero, Section } from "@/components/page-hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { contacts, locations } from "@/lib/site";

export const metadata = {
  title: "Address & Directions",
};

export default function DirectionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Visit"
        title="Address & directions"
        description="The ashram sits on Derby Avenue in Orange. Stamford Bala Vihar meets at UConn Stamford."
      />
      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          {locations.map((place) => (
            <Card key={place.name}>
              <CardHeader>
                <CardTitle className="font-serif text-2xl">{place.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm leading-relaxed text-muted-foreground">
                <p>
                  {place.line1}
                  <br />
                  {place.city}
                </p>
                <p className="mt-3">{place.note}</p>
                <a
                  href={place.maps}
                  className="mt-4 inline-flex text-primary underline-offset-4 hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open in Google Maps
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-8 overflow-hidden rounded-2xl gold-frame">
          <iframe
            title="Map of Chinmaya Saraswati Ashram"
            src="https://maps.google.com/maps?q=393%20Derby%20Avenue%20Orange%20CT%2006477&t=&z=14&ie=UTF8&iwloc=&output=embed"
            className="h-80 w-full border-0"
            loading="lazy"
          />
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          Phone{" "}
          <a className="text-primary underline-offset-4 hover:underline" href={contacts.officeHref}>
            {contacts.office}
          </a>
        </p>
      </Section>
    </>
  );
}
