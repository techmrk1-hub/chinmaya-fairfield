import Image from "next/image";
import { Eyebrow, PageHero, Section } from "@/components/page-hero";
import { LotusDivider } from "@/components/ornament";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { withBase } from "@/lib/paths";
import { site } from "@/lib/site";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the center"
        title="Chinmaya Mission Fairfield–New Haven"
        description="A Connecticut home for Vedanta, children’s education, and Devi worship — rooted in Gurudev’s vision and offered with civic calm."
      />
      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Eyebrow>Purpose</Eyebrow>
            <h2 className="text-3xl md:text-4xl">For every background, a path of growth.</h2>
            <div className="mt-6 max-w-xs">
              <LotusDivider />
            </div>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {site.purpose}
            </p>
            <p className="mt-4 leading-relaxed text-foreground/85">
              Chinmaya Saraswati Ashram was inaugurated in July 2014 by Swami
              Tejomayananda on rolling hills spread over five acres in Orange.
              The Fairfield Bala Vihar is conducted under the Chinmaya Mission
              Tri-state Center, which maintains ashrams at Kedar (Langhorne, PA)
              and Vrindavan (Cranbury, NJ).
            </p>
            <p className="mt-4 leading-relaxed text-foreground/85">
              We follow the Guruparampara from H.H. Swami Tapovan Maharaj. This
              chapter is under the guidance of Swami Shantananda, resident
              Acharya of Chinmaya Vrindavan. Visiting Acharya Brahmacharini
              Shubhani Chaitanya, resident Acharya of Chinmaya Mission New York,
              has led immersive Vedanta study at the ashram.
            </p>
          </div>
          <Card className="lg:col-span-5">
            <CardHeader>
              <CardTitle className="font-serif text-2xl">At a glance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                <span className="block text-foreground">Consecrated</span>
                July 2014 — Saraswati Mata as pradhana murti
              </p>
              <p>
                <span className="block text-foreground">Hanuman pratishthapana</span>
                July 2016, with Swami Swaroopananda
              </p>
              <p>
                <span className="block text-foreground">Kumbhabhishekam</span>
                July 22, 25 & 26, 2026 — 12th anniversary
              </p>
              <p>
                <span className="block text-foreground">Nonprofit</span>
                501(c)(3) · Tax ID {site.taxId}
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>
      <section className="border-y border-gold/20 bg-card">
        <Section className="py-16 md:py-16">
          <blockquote className="mx-auto max-w-3xl text-center">
            <p className="font-serif text-3xl leading-snug text-primary md:text-4xl">
              “{site.shaktiQuote}”
            </p>
            <footer className="mt-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Swami Shantananda
            </footer>
          </blockquote>
        </Section>
      </section>
      <Section>
        <div className="grid items-center gap-10 md:grid-cols-2">
          <Image
            src={withBase("/images/temple.jpg")}
            alt="Chinmaya Saraswati Ashram landscape"
            width={1024}
            height={683}
            className="rounded-2xl gold-frame"
          />
          <div>
            <Eyebrow>The ashram</Eyebrow>
            <h2 className="text-3xl">Land set apart for study and prayer.</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              The shrine holds tri-mata — Saraswati Mata, Lakshmi Devi, and
              Durga Mata — a swayambhu Narmada Shiva linga, and Hanumanji. It is
              a place to learn Sanatana Dharma, to grow, and to pray.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
