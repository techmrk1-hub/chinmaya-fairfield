"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { site } from "@/lib/site";

const types = [
  { id: "family", label: "Family membership — $500" },
  { id: "adult", label: "Adult (no children) — $300" },
  { id: "parivar", label: "Chinmaya Parivar (monthly $100+)" },
];

const campuses = ["Orange ashram", "Stamford Bala Vihar", "Both"];

export function RegistrationForm() {
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");
  const [error, setError] = useState("");

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    if (!name || !email || !phone) {
      setStatus("error");
      setError("Please share your name, email, and phone so the ashram can complete registration.");
      return;
    }
    const body = [
      `Bala Vihar / Satsang registration`,
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Campus: ${data.get("campus")}`,
      `Membership: ${data.get("membership")}`,
      `Children: ${data.get("children")}`,
      `Notes: ${data.get("notes")}`,
    ].join("\n");
    window.location.href = `mailto:${site.boardEmail}?subject=${encodeURIComponent(
      "Bala Vihar 2026-27 registration"
    )}&body=${encodeURIComponent(body)}`;
    setStatus("success");
    setError("");
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-gold/30 bg-card p-6">
        <h3 className="font-serif text-2xl text-primary">Registration started</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Your mail app should open with the details for the ashram board. If it
          does not, write to {site.boardEmail}. Then complete payment by PayPal,
          check, or cash as described on this page.
        </p>
        <Button className="mt-4" onClick={() => setStatus("idle")}>
          Submit another family
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5 rounded-xl border border-gold/25 bg-card p-6">
      {status === "error" ? (
        <p className="rounded-md bg-destructive/10 px-3 py-2 text-sm text-destructive">{error}</p>
      ) : null}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Parent / member name</Label>
          <Input id="name" name="name" required placeholder="Full name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required placeholder="you@example.com" />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" required placeholder="203-…" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="campus">Campus</Label>
          <select
            id="campus"
            name="campus"
            className="h-8 w-full rounded-lg border border-input bg-transparent px-2.5 text-sm"
            defaultValue="Orange ashram"
          >
            {campuses.map((campus) => (
              <option key={campus}>{campus}</option>
            ))}
          </select>
        </div>
      </div>
      <fieldset className="space-y-2">
        <legend className="text-sm font-medium">Membership</legend>
        {types.map((type) => (
          <label key={type.id} className="flex items-center gap-2 text-sm text-muted-foreground">
            <input type="radio" name="membership" value={type.label} defaultChecked={type.id === "family"} />
            {type.label}
          </label>
        ))}
      </fieldset>
      <div className="space-y-2">
        <Label htmlFor="children">Children (names and grades)</Label>
        <Textarea id="children" name="children" placeholder="e.g. Ananya, Grade 3; Rohan, KG" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="notes">Notes</Label>
        <Textarea id="notes" name="notes" placeholder="New family, returning, or questions for the board" />
      </div>
      <Button type="submit" className="h-10 px-4">
        Email registration to the board
      </Button>
    </form>
  );
}
