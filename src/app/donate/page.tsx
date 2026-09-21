import Image from "next/image";
import { PageHero, Section, TextLink } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { withBase } from "@/lib/paths";
import { matchingCompanies, site } from "@/lib/site";

export const metadata = {
  title: "Donate",
};

export default function DonatePage() {
  return (
    <>
      <PageHero
        eyebrow="Seva"
        title="Give toward the ashram"
        description={`${site.gurudevQuote} — ${site.gurudev}`}
      />
      <Section>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="leading-relaxed text-muted-foreground">
              Chinmaya Mission Fairfield New Haven is a registered nonprofit.
              Donations are tax-deductible (Tax ID {site.taxId}). Gifts maintain
              the facility and support Swami Chinmayananda’s vision.
            </p>
            <form
              action="https://www.paypal.com/cgi-bin/webscr"
              method="post"
              target="_blank"
              className="mt-8 rounded-2xl border border-gold/30 bg-card p-6"
            >
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input type="hidden" name="hosted_button_id" value={site.paypalHostedButtonId} />
              <h2 className="font-serif text-2xl text-primary">Give online</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                PayPal processes cards securely. All gifts to Chinmaya Mission
                are tax-deductible.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-6">
                <Button type="submit" className="h-14 px-5">
                  Donate with PayPal
                </Button>
                <Image
                  src={withBase("/images/paypal-qr.png")}
                  alt="PayPal QR code for Chinmaya Mission Fairfield–New Haven"
                  width={120}
                  height={120}
                />
              </div>
            </form>
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="font-serif text-2xl">Give by check</CardTitle>
              </CardHeader>
              <CardContent className="text-sm leading-relaxed text-muted-foreground">
                <p>Payable to Chinmaya Mission. Mail to:</p>
                <p className="mt-2 text-foreground">
                  Chinmaya Saraswati
                  <br />
                  393 Derby Avenue
                  <br />
                  Orange, CT 06477
                </p>
                <p className="mt-3">
                  After mailing, email Srikanth Vasudevan at{" "}
                  <TextLink href={`mailto:${site.donationContact}`}>
                    {site.donationContact}
                  </TextLink>
                  .
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="space-y-5 lg:col-span-5">
            <Card>
              <CardHeader>
                <CardTitle className="font-serif text-2xl">Chinmaya Parivar</CardTitle>
              </CardHeader>
              <CardContent className="text-sm leading-relaxed text-muted-foreground">
                Recurring gifts of $100 or more each month — up to $1,200 a year
                — join a circle of key supporters. Annual Bala Vihar / Satsang
                membership is waived for Parivar families.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="font-serif text-2xl">Corporate matching</CardTitle>
              </CardHeader>
              <CardContent className="text-sm leading-relaxed text-muted-foreground">
                <p>
                  Ask your employer to match. If they support social
                  development but not religious causes, consider CORD USA and
                  notify {site.donationContact} for tracking. Matching has come
                  from:
                </p>
                <p className="mt-3 text-foreground">{matchingCompanies.join(" · ")}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="font-serif text-2xl">Volunteer</CardTitle>
              </CardHeader>
              <CardContent className="text-sm leading-relaxed text-muted-foreground">
                Help with operations, events, Bala Vihar, and puja services.
                Write{" "}
                <TextLink href={`mailto:${site.volunteerEmail}`}>
                  {site.volunteerEmail}
                </TextLink>
                .
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}
