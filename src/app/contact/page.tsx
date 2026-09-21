import { PageHero, Section } from "@/components/page-hero";
import { ContactForm } from "@/components/contact-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { contacts, locations, site } from "@/lib/site";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Write to us"
        title="Contact Chinmaya Saraswati"
        description="Use the form for feedback, the mailing list, or any other information. The board reads every note."
      />
      <Section>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
          <div className="space-y-5 lg:col-span-5">
            <Card>
              <CardHeader>
                <CardTitle className="font-serif text-2xl">Board</CardTitle>
              </CardHeader>
              <CardContent className="text-sm leading-relaxed text-muted-foreground">
                <p>
                  <a className="text-primary underline-offset-4 hover:underline" href={`mailto:${site.boardEmail}`}>
                    {site.boardEmail}
                  </a>
                </p>
                <p className="mt-3">
                  {locations[0].name}
                  <br />
                  {locations[0].line1}
                  <br />
                  {locations[0].city}
                </p>
                <p className="mt-3">
                  Phone{" "}
                  <a className="text-primary underline-offset-4 hover:underline" href={contacts.officeHref}>
                    {contacts.office}
                  </a>
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="font-serif text-2xl">Follow</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <a
                  href={site.facebook}
                  className="text-primary underline-offset-4 hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  facebook.com/chinmayasaraswati
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}
