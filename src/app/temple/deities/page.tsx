import { Eyebrow, PageHero, Section } from "@/components/page-hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { deities, site } from "@/lib/site";

export const metadata = {
  title: "Our Deities",
};

export default function DeitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="The shrine"
        title="Deities of Chinmaya Saraswati"
        description="Saraswati Mata as pradhana murti, accompanied by Lakshmi Devi and Durga Mata; a swayambhu Narmada Shiva linga; and Hanumanji."
      />
      <Section>
        <Eyebrow>Tri-mata</Eyebrow>
        <h2 className="max-w-3xl text-3xl">“{site.shaktiQuote}”</h2>
        <p className="mt-3 text-sm uppercase tracking-[0.18em] text-muted-foreground">
          Swami Shantananda
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {deities.map((deity) => (
            <Card key={deity.name}>
              <CardHeader>
                <p className="text-xs uppercase tracking-[0.16em] text-primary">{deity.role}</p>
                <CardTitle className="font-serif text-2xl">{deity.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm leading-relaxed text-muted-foreground">
                {deity.body}
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
