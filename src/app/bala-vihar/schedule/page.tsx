import { Eyebrow, PageHero, Section } from "@/components/page-hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { orangeSchedule, stamfordSchedule } from "@/lib/site";

export const metadata = {
  title: "Class Schedule",
};

export default function SchedulePage() {
  return (
    <>
      <PageHero
        eyebrow="Bala Vihar"
        title="Sunday class schedule"
        description="Classes meet on designated Sundays unless cancelled for Mission events, weather, or major U.S. holidays. Please arrive on time — late entry disturbs the class."
      />
      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <p className="text-xs uppercase tracking-[0.16em] text-primary">Orange</p>
              <CardTitle className="font-serif text-2xl">Chinmaya Saraswati Ashram</CardTitle>
              <p className="text-sm text-muted-foreground">393 Derby Avenue, Orange, CT</p>
            </CardHeader>
            <CardContent>
              <ul className="divide-y divide-border">
                {orangeSchedule.map((row) => (
                  <li key={row.time} className="flex flex-col gap-1 py-3 sm:flex-row sm:justify-between">
                    <span className="text-sm font-medium text-foreground">{row.time}</span>
                    <span className="text-sm text-muted-foreground sm:max-w-[60%] sm:text-right">
                      {row.item}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <p className="text-xs uppercase tracking-[0.16em] text-primary">Stamford</p>
              <CardTitle className="font-serif text-2xl">University of Connecticut</CardTitle>
              <p className="text-sm text-muted-foreground">One University Place, Stamford, CT</p>
            </CardHeader>
            <CardContent>
              <ul className="divide-y divide-border">
                {stamfordSchedule.map((row) => (
                  <li key={row.time} className="flex flex-col gap-1 py-3 sm:flex-row sm:justify-between">
                    <span className="text-sm font-medium text-foreground">{row.time}</span>
                    <span className="text-sm text-muted-foreground sm:max-w-[60%] sm:text-right">
                      {row.item}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
        <p className="mt-8 text-sm text-muted-foreground">
          <Eyebrow>Punctuality</Eyebrow>
          Coming in late disturbs Bala Vihar. Please plan to be seated for assembly.
        </p>
      </Section>
    </>
  );
}
