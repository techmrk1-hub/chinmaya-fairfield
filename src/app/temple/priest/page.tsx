import Image from "next/image";
import { Eyebrow, PageHero, Section } from "@/components/page-hero";
import { withBase } from "@/lib/paths";
import { contacts } from "@/lib/site";

export const metadata = {
  title: "Our Priest",
};

export default function PriestPage() {
  return (
    <>
      <PageHero
        eyebrow="Temple & Ashram"
        title={contacts.priest}
        description="Vedic and Shastric training in the Smartha tradition — daily worship, family samskaras, and the living rhythm of the ashram."
      />
      <Section>
        <div className="grid items-start gap-10 lg:grid-cols-12">
          <Image
            src={withBase("/images/priest.jpg")}
            alt={contacts.priest}
            width={720}
            height={900}
            className="rounded-2xl gold-frame lg:col-span-5"
          />
          <div className="lg:col-span-7">
            <Eyebrow>Mahankali Ravikiran Sharma</Eyebrow>
            <h2 className="text-3xl">A learned Brahmana in service of the shrine.</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Priest Mahankali Ravikiran Sharma is proficient in Vedic and
              Shastric studies. He learned Brahmana and Aranyaka portions of
              Krishna Yajur Veda as well as both Apastamba and Bharadwaja
              Sutras, and trained in Shodasa Karmas of the Smartha tradition
              under the guidance of Sringeri Sharada Peetham.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              He is advancing studies in Sanskrit Vyakarana and Pancha Maha
              Kavyas under Brahmasri Dendukuri Narayana Sastry Garu, Tarka
              Shastra under Acharya Manish Kumar Garu, and Vyakarana under Dr.
              Jagadeesh Bhat Garu.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              He has over a decade of expertise in Vedic rituals and served nine
              years conducting daily Ganapati Homam at the Sringeri Peetham
              Ganesh Temple in Hyderabad.
            </p>
            <p className="mt-6 text-sm">
              Office{" "}
              <a className="text-primary underline-offset-4 hover:underline" href={contacts.officeHref}>
                {contacts.office}
              </a>
              · Cell{" "}
              <a className="text-primary underline-offset-4 hover:underline" href={contacts.priestCellHref}>
                {contacts.priestCell}
              </a>
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
