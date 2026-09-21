"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { site } from "@/lib/site";

const subjects = [
  "Feedback",
  "Mailing list",
  "Bala Vihar",
  "Temple / puja",
  "Volunteering",
  "Donation question",
  "Other",
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");
  const [error, setError] = useState("");

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    if (!name || !email || !message) {
      setStatus("error");
      setError("Name, email, and a message are required.");
      return;
    }
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${data.get("phone") || "—"}`,
      `Subject: ${data.get("subject")}`,
      "",
      message,
    ].join("\n");
    window.location.href = `mailto:${site.boardEmail}?subject=${encodeURIComponent(
      String(data.get("subject") || "Ashram inquiry")
    )}&body=${encodeURIComponent(body)}`;
    setStatus("success");
    setError("");
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-gold/30 bg-card p-6">
        <h3 className="font-serif text-2xl text-primary">Message ready to send</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Your email application should open addressed to {site.boardEmail}. If
          nothing opens, please write that address directly.
        </p>
        <Button className="mt-4" onClick={() => setStatus("idle")}>
          Write another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      {status === "error" ? (
        <p className="rounded-md bg-destructive/10 px-3 py-2 text-sm text-destructive">{error}</p>
      ) : null}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Your name</Label>
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
          <Input id="phone" name="phone" placeholder="Optional" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="subject">Subject</Label>
          <select
            id="subject"
            name="subject"
            className="h-8 w-full rounded-lg border border-input bg-transparent px-2.5 text-sm"
            defaultValue="Feedback"
          >
            {subjects.map((subject) => (
              <option key={subject}>{subject}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" required rows={6} placeholder="How can the ashram help?" />
      </div>
      <Button type="submit" className="h-10 px-4">
        Open email to the board
      </Button>
    </form>
  );
}
