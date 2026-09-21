import Image from "next/image";
import { PageHero, Section, TextLink } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { withBase } from "@/lib/paths";
import { site } from "@/lib/site";

export const metadata = {
  title: "Geeta Chanting Yajna",
};

export default function GeetaPage() {
  return (
    <>
      <PageHero
        eyebrow="April 26, 2026"
        title="Geeta Chanting Yajna"
        description="Connecticut regionals at UConn Stamford. All are welcome — including families who are not members of Chinmaya Mission."
      />
      <Section>
        <div className="grid items-start gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="leading-relaxed text-muted-foreground">
              Sign up to chant, to offer seva, or to bring potluck. Training
              materials for Chapter 17 and the evaluation criteria are published
              by Chinmaya Mission West. Weekly chanting also continues during
              Sunday Bala Vihar at both campuses.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button
                nativeButton={false}
                render={<a href={site.gitaRegistration} target="_blank" rel="noreferrer" />}
              >
                Register to chant
              </Button>
              <Button
                nativeButton={false}
                variant="outline"
                render={<a href={site.gitaSeva} target="_blank" rel="noreferrer" />}
              >
                Seva sign-up
              </Button>
              <Button
                nativeButton={false}
                variant="outline"
                render={<a href={site.gitaPotluck} target="_blank" rel="noreferrer" />}
              >
                Potluck
              </Button>
            </div>
            <ul className="mt-8 space-y-2 text-sm text-muted-foreground">
              <li>
                <TextLink href={site.gitaChantingWest}>Chinmaya Mission West — Gita Chanting resources</TextLink>
              </li>
              <li>
                <TextLink href={site.gitaPanchamrit}>Gita Panchamrit — five verses to memorize</TextLink>
              </li>
              <li>
                <TextLink href="/resources">Download documents for Bala Vihar chanting</TextLink>
              </li>
            </ul>
          </div>
          <Image
            src={withBase("/images/gita-flyer.jpg")}
            alt="2026 Geeta Chanting Yajna flyer"
            width={800}
            height={1100}
            className="mx-auto max-h-[560px] w-auto rounded-xl gold-frame lg:col-span-6"
          />
        </div>
      </Section>
    </>
  );
}
