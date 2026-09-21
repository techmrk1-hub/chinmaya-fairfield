import { PageHero, Section, TextLink } from "@/components/page-hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { resources } from "@/lib/site";

export const metadata = {
  title: "Resources",
};

const groups = ["Geeta Chanting", "Study"] as const;

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Study materials"
        title="Resources & downloads"
        description="Chanting tools, Gita Panchamrit, and Amrit Mahotsav. Temple forms can be requested from the priest or the board."
      />
      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {groups.map((group) => (
            <Card key={group}>
              <CardHeader>
                <CardTitle className="font-serif text-2xl">{group}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  {resources
                    .filter((item) => item.group === group)
                    .map((item) => (
                      <li key={item.title}>
                        <TextLink href={item.href}>{item.title}</TextLink>
                      </li>
                    ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="font-serif text-2xl">Temple forms</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Puja and samskara requests are arranged with the priest. There are
            no additional public form downloads at this time.
          </CardContent>
        </Card>
      </Section>
    </>
  );
}
