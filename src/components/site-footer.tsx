import Image from "next/image";
import Link from "next/link";
import { LotusDivider } from "@/components/ornament";
import { withBase } from "@/lib/paths";
import { contacts, locations, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-gold/25 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <Image
                src={withBase("/images/logo.jpg")}
                alt=""
                width={64}
                height={64}
                className="size-16 rounded-full object-cover"
              />
              <div>
                <p className="font-serif text-2xl leading-none">Chinmaya Saraswati</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-gold-soft">
                  Fairfield–New Haven
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-primary-foreground/75">
              {site.purpose}
            </p>
            <div className="mt-6 max-w-xs">
              <LotusDivider />
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-soft">
              Visit
            </p>
            <address className="mt-3 not-italic text-sm leading-relaxed text-primary-foreground/80">
              {locations[0].name}
              <br />
              {locations[0].line1}
              <br />
              {locations[0].city}
            </address>
            <p className="mt-3 text-sm">
              Office{" "}
              <a className="text-gold-soft hover:underline" href={contacts.officeHref}>
                {contacts.office}
              </a>
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-soft">
              Connect
            </p>
            <ul className="mt-3 space-y-2 text-sm text-primary-foreground/80">
              <li>
                <Link href="/bala-vihar/registration" className="hover:text-gold-soft">
                  Register for Bala Vihar
                </Link>
              </li>
              <li>
                <Link href="/donate" className="hover:text-gold-soft">
                  Donate
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold-soft">
                  Contact the board
                </Link>
              </li>
              <li>
                <a
                  href={site.facebook}
                  className="hover:text-gold-soft"
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a href={`mailto:${site.boardEmail}`} className="hover:text-gold-soft">
                  {site.boardEmail}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/55 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. A 501(c)(3) organization. Tax ID {site.taxId}.</p>
          <p>All donations are tax-deductible.</p>
        </div>
      </div>
    </footer>
  );
}
