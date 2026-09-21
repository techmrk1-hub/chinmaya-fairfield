import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Clock3,
  MapPin,
  Sparkles,
  Users,
} from "lucide-react";
import { LotusDivider } from "@/components/ornament";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FlyerCard } from "@/components/flyer-card";
import { SheetImage } from "@/components/sheet-image";
import { getFeaturedFlyers, getFlyers } from "@/lib/flyers";
import { withBase } from "@/lib/paths";
import {
  contacts,
  hours,
  locations,
  site,
} from "@/lib/site";

const programs = [
  {
    href: "/bala-vihar",
    title: "Bala Vihar",
    copy: "A graded Vedanta curriculum for Pre-K through Grade 12 — stories, bhajans, values, and a parent satsang on the same Sunday.",
  },
  {
    href: "/satsang",
    title: "Satsang",
    copy: "Adult study of Gita, Vedanta, and Sanatana Dharma under the guidance of Swami Shantananda and visiting acharyas.",
  },
  {
    href: "/temple",
    title: "Temple & Ashram",
    copy: "Daily darshan of Saraswati Mata, tri-mata, swayambhu Shiva linga, and Hanumanji on five acres in Orange.",
  },
  {
    href: "/geeta-chanting",
    title: "Geeta Chanting",
    copy: "Annual yajna, weekly chanting, and Gita Panchamrit — five verses selected for every household to memorize.",
  },
];

export default async function HomePage() {
  const [featured, allFlyers] = await Promise.all([getFeaturedFlyers(3), getFlyers()]);
  const kumbha = allFlyers.find((flyer) => flyer.slug.includes("kumbha"));
  return (
    <>
      <section className="bg-ivory">
        <SheetImage
          src={site.heroFlyer}
          alt="Chinmaya Saraswati Ashram & Devi Temple, Orange, Connecticut"
          width={2048}
          height={1365}
          className="block h-[calc(100dvh-9.5rem)] w-full object-cover object-center"
        />
      </section>

      <section className="border-b border-gold/20 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-5 py-12 md:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-gold-soft">
            Chinmaya Mission Fairfield–New Haven
          </p>
          <h1 className="mt-4 max-w-6xl font-serif text-4xl leading-[1.12] md:text-5xl">
            A quiet house of Vedanta on the hills of Orange.
          </h1>
          <p className="mt-5 max-w-5xl text-base leading-relaxed text-primary-foreground/85 md:text-lg">
            Chinmaya Saraswati Ashram & Devi Temple — worship, children’s
            education, and the wisdom of the Gita, offered with a calm, civic
            welcome.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              nativeButton={false}
              size="lg"
              className="h-14 bg-gold px-5 text-primary hover:bg-gold/90"
              render={<Link href="/bala-vihar/registration" />}
            >
              Register for 2026–27
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button
              nativeButton={false}
              variant="outline"
              size="lg"
              className="h-14 border-primary-foreground/30 bg-transparent px-5 text-primary-foreground hover:bg-primary-foreground/10"
              render={<Link href="/temple" />}
            >
              Temple hours
            </Button>
          </div>
        </div>
      </section>

      <section className="border-b border-gold/20 bg-card">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-6 md:grid-cols-3">
          <div className="flex gap-3 text-sm">
            <Clock3 className="mt-0.5 h-4 w-4 text-primary" />
            <div>
              <p className="font-medium text-primary">Open daily</p>
              <p className="text-muted-foreground">
                Weekdays 9:00–11:30 AM & 5:30–8:00 PM
              </p>
            </div>
          </div>
          <div className="flex gap-3 text-sm">
            <MapPin className="mt-0.5 h-4 w-4 text-primary" />
            <div>
              <p className="font-medium text-primary">393 Derby Avenue</p>
              <p className="text-muted-foreground">Orange, CT 06477</p>
            </div>
          </div>
          <div className="flex gap-3 text-sm">
            <Users className="mt-0.5 h-4 w-4 text-primary" />
            <div>
              <p className="font-medium text-primary">Priest {contacts.priest}</p>
              <p className="text-muted-foreground">Samskaras at the ashram or at home</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              Mission
            </p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">
              Wisdom for a life that contributes.
            </h2>
            <div className="mt-6 max-w-xs">
              <LotusDivider />
            </div>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {site.purpose}
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/80">
              We follow the Guruparampara from H.H. Swami Tapovan Maharaj through
              Pujya Gurudev Swami Chinmayananda. This center is under the
              guidance of Swami Shantananda, resident Acharya of Chinmaya
              Vrindavan, New Jersey.
            </p>
            <Button
              nativeButton={false}
              variant="outline"
              className="mt-8 h-10 px-4"
              render={<Link href="/about" />}
            >
              Our story
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <figure className="lg:col-span-5">
            <div className="gold-frame overflow-hidden rounded-2xl bg-card">
              <Image
                src={withBase("/images/gurudev-full.jpg")}
                alt="Pujya Gurudev Swami Chinmayananda"
                width={480}
                height={520}
                className="h-72 w-full object-cover object-top md:h-80"
              />
              <figcaption className="px-5 py-4">
                <p className="font-serif text-xl text-primary">
                  “{site.gurudevQuote}”
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  — {site.gurudev}
                </p>
              </figcaption>
            </div>
          </figure>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-20">
          <div>
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-gold-soft">
              <Sparkles className="h-3.5 w-3.5" />
              July 22, 25 & 26, 2026
            </p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">
              Kumbhabhishekam — twelve years of Chinmaya Saraswati.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-primary-foreground/80">
              Traditionally held every twelve years, Kumbhabhishekam renews and
              rededicates a Hindu temple. Since consecration in 2014, this
              ceremony will reconsecrate the temple and its deities for the
              continued worship of the community.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                nativeButton={false}
                className="h-14 bg-gold px-5 text-primary hover:bg-gold/90"
                render={<a href={site.kumbhaForm} target="_blank" rel="noreferrer" />}
              >
                RSVP on the flyer form
              </Button>
              <Button
                nativeButton={false}
                variant="outline"
                className="h-14 border-primary-foreground/30 bg-transparent px-5 text-primary-foreground hover:bg-primary-foreground/10"
                render={<Link href="/events#kumbhabhishekam" />}
              >
                Ceremony details
              </Button>
            </div>
          </div>
          <SheetImage
            src={kumbha?.image || "/images/kumbhabhishekam.jpg"}
            alt="Kumbhabhishekam 2026 anniversary invitation"
            width={1810}
            height={2560}
            className="mx-auto max-h-[520px] w-auto rounded-xl object-contain gold-frame"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              Programs
            </p>
            <h2 className="mt-2 font-serif text-4xl">How the ashram serves</h2>
          </div>
          <LotusDivider />
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {programs.map((program) => (
            <Link key={program.href} href={program.href} className="group">
              <Card className="h-full transition-shadow group-hover:shadow-md">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl text-primary">
                    {program.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  {program.copy}
                  <span className="mt-4 flex items-center gap-1 text-sm font-medium text-primary">
                    Learn more
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-gold/20 bg-card">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              Darshan
            </p>
            <h2 className="mt-2 font-serif text-4xl">Temple timings</h2>
            <p className="mt-4 text-muted-foreground">
              Priest {contacts.priest}. Office {contacts.office}. Cell{" "}
              {contacts.priestCell}.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Weekdays</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  {hours.weekdays.map((slot) => (
                    <p key={slot.time}>
                      <span className="text-foreground">{slot.label}</span>
                      <br />
                      {slot.time}
                    </p>
                  ))}
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Weekends</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  {hours.weekends.map((slot) => (
                    <p key={slot.time}>
                      <span className="text-foreground">{slot.label}</span>
                      <br />
                      {slot.time}
                    </p>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              Two campuses
            </p>
            <h2 className="mt-2 font-serif text-4xl">Where we gather</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {locations.map((place) => (
                <Card key={place.name}>
                  <CardHeader>
                    <CardTitle className="font-serif text-xl">{place.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm leading-relaxed text-muted-foreground">
                    <p>
                      {place.line1}
                      <br />
                      {place.city}
                    </p>
                    <p className="mt-3">{place.note}</p>
                    <a
                      href={place.maps}
                      className="mt-4 inline-flex text-primary underline-offset-4 hover:underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Open in maps
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              Calendar
            </p>
            <h2 className="mt-2 font-serif text-4xl">Coming toward the ashram</h2>
          </div>
          <Button nativeButton={false} variant="outline" render={<Link href="/events" />}>
            All events
          </Button>
        </div>
        {featured.length === 0 ? (
          <p className="mt-10 text-sm text-muted-foreground">
            New events appear here as they are announced.
          </p>
        ) : (
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {featured.map((flyer) => (
              <FlyerCard key={flyer.slug} flyer={flyer} />
            ))}
          </div>
        )}
      </section>

      <section className="bg-secondary/60">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2">
          <Image
            src={withBase("/images/amrit-75.jpg")}
            alt="Chinmaya Amrit Mahotsav — 75 years of Chinmaya Mission"
            width={640}
            height={640}
            className="mx-auto max-h-80 w-auto rounded-xl gold-frame"
          />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              Chinmaya Amrit Mahotsav
            </p>
            <h2 className="mt-2 font-serif text-4xl">Seventy-five years of the Mission.</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Chinmaya Mission is celebrating 75 years this year. Join the
              worldwide offering — and keep Gita Panchamrit close: five verses
              selected by Pujya Guruji and Pujya Swami Swaroopananda for
              everyone to memorize.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button
                nativeButton={false}
                render={<a href={site.amritUrl} target="_blank" rel="noreferrer" />}
              >
                chinmaya75.org
              </Button>
              <Button
                nativeButton={false}
                variant="outline"
                render={<a href={site.gitaPanchamrit} target="_blank" rel="noreferrer" />}
              >
                Gita Panchamrit
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
