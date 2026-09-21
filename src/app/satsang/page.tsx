import { Eyebrow, PageHero, Section, TextLink } from "@/components/page-hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { site } from "@/lib/site";

export const metadata = {
  title: "Satsang",
};

const current = [
  {
    title: "Bhagavad Geeta Satsang",
    lead: "Dr. Seshan, Dr. Pramila, and Smt. Saroj Kapoor",
    when: "Bala Vihar Sundays, 10:00–11:00 AM, September–May",
    body: "Discussion on the Bhagavad Geeta, held while children are in class.",
  },
  {
    title: "Vedanta in Bhagavata",
    lead: "Vivek Gupta (online)",
    when: "Sundays 11:00 AM–12:00 noon, September–May",
    body: "A weekly online study of Vedanta through the Bhagavata.",
  },
];

const archive = [
  "Atma Bodha immersive study with Br. Shubhaniji — monthly Sunday sessions",
  "Tattvabodha immersive study with Br. Shubhaniji — foundation of Vedanta",
  "Gita Jnana Yajna by Br. Shubhaniji (November 2019)",
  "Self Unfoldment teachers and sevaks study group",
  "Satsang on Sanatana Dharma with Srinivas Mallapragada",
  "President’s Day weekend retreat on Shiva Sankalpa Suktam",
];

export default function SatsangPage() {
  return (
    <>
      <PageHero
        eyebrow="Adult study"
        title="Satsang at Chinmaya Saraswati"
        description="Vedanta is the science of inspired living. When understood and applied, it answers the problem of human suffering — offered here through Gita, Bhagavata, and the living Guruparampara."
      />
      <Section>
        <Eyebrow>Our Acharya</Eyebrow>
        <h2 className="max-w-3xl text-3xl">
          Under Swami Shantananda, in the line of Swami Tapovan Maharaj.
        </h2>
        <p className="mt-5 max-w-3xl leading-relaxed text-muted-foreground">
          Chinmaya Mission Fairfield–New Haven is under the guidance of Swami
          Shantananda, resident Acharya of Chinmaya Vrindavan, New Jersey.
          Visiting Acharya Brahmacharini Shubhani Chaitanya, resident Acharya of{" "}
          <TextLink href={site.visitingAcharyaUrl}>Chinmaya Mission New York</TextLink>
          , has led immersive study of Atma Bodha and Tattvabodha at this ashram.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {current.map((item) => (
            <Card key={item.title}>
              <CardHeader>
                <CardTitle className="font-serif text-2xl">{item.title}</CardTitle>
                <p className="text-sm text-primary">{item.lead}</p>
              </CardHeader>
              <CardContent className="text-sm leading-relaxed text-muted-foreground">
                <p>{item.when}</p>
                <p className="mt-3">{item.body}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
      <section className="border-t border-gold/20 bg-card">
        <Section className="py-16 md:py-16">
          <Eyebrow>Archive</Eyebrow>
          <h2 className="text-3xl">Past discourses kept for study</h2>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
            Video and audio from earlier yajnas remain a resource for sevaks.
            Tattvabodha defines the ideal student and asks who we really are —
            and what it means to be free.
          </p>
          <ul className="mt-6 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
            {archive.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Section>
      </section>
    </>
  );
}
