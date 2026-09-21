"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronDown, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LotusMark } from "@/components/ornament";
import { withBase } from "@/lib/paths";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-1.5 text-[11px] uppercase tracking-wide sm:text-xs">
          <p className="whitespace-nowrap text-gold-soft">
            Chinmaya Saraswati Ashram · Orange, Connecticut
          </p>
          <p className="hidden whitespace-nowrap text-primary-foreground/70 xl:block">
            ॐ · {site.motto}
          </p>
        </div>
      </div>
      <div className="border-b border-gold/30 bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-2">
          <Link href="/" className="flex shrink-0 items-center gap-3">
            <Image
              src={withBase("/images/logo.jpg")}
              alt="Chinmaya Mission emblem"
              width={72}
              height={72}
              className="size-16 rounded-full object-cover ring-1 ring-gold/50"
            />
            <span>
              <span className="block whitespace-nowrap font-serif text-lg leading-tight text-primary md:text-xl">
                Chinmaya Mission
              </span>
              <span className="block whitespace-nowrap text-xs uppercase tracking-[0.16em] text-muted-foreground">
                Fairfield–New Haven
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {nav.map((item) =>
              item.children ? (
                <div key={item.label} className="group relative">
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-1 whitespace-nowrap px-2 py-1.5 text-sm font-medium text-foreground/80 transition-colors hover:text-primary",
                      isActive(pathname, item.href) && "text-primary"
                    )}
                  >
                    {item.label}
                    <ChevronDown className="h-3.5 w-3.5 opacity-60" />
                  </Link>
                  <div className="invisible absolute left-0 top-full z-50 min-w-52 translate-y-1 rounded-lg border border-gold/25 bg-card p-2 opacity-0 shadow-lg transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={cn(
                          "block whitespace-nowrap rounded-md px-3 py-2 text-sm text-foreground/80 hover:bg-secondary hover:text-primary",
                          pathname === child.href && "bg-secondary text-primary"
                        )}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "whitespace-nowrap px-2 py-1.5 text-sm font-medium text-foreground/80 transition-colors hover:text-primary",
                    isActive(pathname, item.href) && "text-primary"
                  )}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="flex items-center gap-2">
            <Button nativeButton={false} render={<Link href="/donate" />} className="hidden sm:inline-flex">
              Donate
            </Button>
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger
                render={
                  <Button variant="outline" size="icon" className="lg:hidden" aria-label="Open menu" />
                }
              >
                <Menu className="h-4 w-4" />
              </SheetTrigger>
              <SheetContent side="right" className="w-[86vw] max-w-sm bg-background">
                <SheetHeader>
                  <SheetTitle className="flex items-center gap-2 font-serif text-primary">
                    <LotusMark className="h-5 w-5 text-gold" />
                    Menu
                  </SheetTitle>
                </SheetHeader>
                <nav className="mt-6 flex flex-col gap-1 px-4 pb-8">
                  {nav.map((item) => (
                    <div key={item.label} className="border-b border-border/70 py-2">
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="block py-1 text-base font-medium text-primary"
                      >
                        {item.label}
                      </Link>
                      {item.children ? (
                        <div className="mt-1 flex flex-col">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setOpen(false)}
                              className="py-1.5 text-sm text-muted-foreground hover:text-primary"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  ))}
                  <Button nativeButton={false} render={<Link href="/donate" />} className="mt-4" onClick={() => setOpen(false)}>
                    Donate
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
