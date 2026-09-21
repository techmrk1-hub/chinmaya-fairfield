import { Eyebrow, PageHero, Section } from "@/components/page-hero";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { curriculum } from "@/lib/site";

export const metadata = {
  title: "Bala Vihar Curriculum",
};

export default function CurriculumPage() {
  return (
    <>
      <PageHero
        eyebrow="Bala Vihar"
        title="A graded curriculum from scripture"
        description="From Alphabet Safari to Self-Unfoldment, every grade trains the mind — the way a gym trains the body — on the bedrock of Hindu scripture."
      />
      <Section>
        <Eyebrow>Kindergarten to Grade 12</Eyebrow>
        <h2 className="max-w-2xl text-3xl">The same emphasis in every year: a healthy, happy, peaceful mind.</h2>
        <Accordion className="mt-10 rounded-xl border border-gold/25 bg-card px-4">
          {curriculum.map((item) => (
            <AccordionItem key={item.grade} value={item.grade}>
              <AccordionTrigger className="font-serif text-lg hover:no-underline">
                <span>
                  <span className="mr-3 text-xs font-sans font-semibold uppercase tracking-[0.16em] text-primary">
                    Grade {item.grade}
                  </span>
                  {item.title}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {item.body}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>
    </>
  );
}
