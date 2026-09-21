import { PageHero, Section, TextLink } from "@/components/page-hero";
import { RegistrationForm } from "@/components/registration-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { membershipBenefits, site } from "@/lib/site";

export const metadata = {
  title: "Registration",
};

export default function RegistrationPage() {
  return (
    <>
      <PageHero
        eyebrow="2026–27 session"
        title="Register for Shishu Vihar, Bala Vihar & Satsanga"
        description="Complete the form so the board has your family on file, then pay the annual fee by PayPal, credit card, cash, or check payable to Chinmaya Mission."
      />
      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <RegistrationForm />
          </div>
          <div className="space-y-5 lg:col-span-5">
            <Card>
              <CardHeader>
                <CardTitle className="font-serif text-2xl">Fees</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                <p>Family (with children): $500 per year, tax-deductible.</p>
                <p>Adults with no children: $300 per year.</p>
                <p>
                  Chinmaya Parivar members giving $100 or more each month have
                  annual Bala Vihar / Satsang membership waived.{" "}
                  <TextLink href="/donate">Become a Parivar donor</TextLink>.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="font-serif text-2xl">For children</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc space-y-1 pl-4 text-sm text-muted-foreground">
                  {membershipBenefits.children.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="font-serif text-2xl">For adults</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc space-y-1 pl-4 text-sm text-muted-foreground">
                  {membershipBenefits.adults.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <p className="text-sm text-muted-foreground">
              Questions:{" "}
              <TextLink href={`mailto:${site.boardEmail}`}>{site.boardEmail}</TextLink>
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
