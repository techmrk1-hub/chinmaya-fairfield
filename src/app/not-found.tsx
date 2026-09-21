import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-5 py-20 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
        404
      </p>
      <h1 className="mt-3 font-serif text-4xl">This page is not at the ashram.</h1>
      <p className="mt-4 text-muted-foreground">
        The path you followed is empty. Return home, or open temple hours and
        Sunday programs.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button nativeButton={false} render={<Link href="/" />}>
          Home
        </Button>
        <Button nativeButton={false} variant="outline" render={<Link href="/temple" />}>
          Temple hours
        </Button>
      </div>
    </section>
  );
}
