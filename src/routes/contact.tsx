import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SectionEyebrow } from "@/components/site/SectionEyebrow";
import { GlassCard } from "@/components/site/GlassCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Heart, Building2, LifeBuoy } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — SelfProtect" },
      {
        name: "description",
        content:
          "Reach out for early access, partnerships, the volunteer responder program or general support.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Message received", {
        description: "We'll respond within 48 hours.",
      });
    }, 700);
  };

  const cards = [
    {
      icon: Building2,
      title: "Emergency Partnerships",
      body: "Police, hospitals, NGOs and verified community organizations.",
    },
    {
      icon: Heart,
      title: "Volunteer Program",
      body: "Become a verified responder in your neighborhood.",
    },
    {
      icon: LifeBuoy,
      title: "Support Center",
      body: "Account, devices, billing and general questions.",
    },
  ];

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-6 pt-24 pb-20 space-y-12">
        <div className="space-y-4 max-w-2xl">
          <SectionEyebrow>Speak with the guardians</SectionEyebrow>
          <h1 className="font-display text-4xl sm:text-5xl">Contact SelfProtect</h1>
          <p className="text-muted-foreground text-lg">
            Whether you want early access, a partnership, or to volunteer — your
            message reaches a real person.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <form
            onSubmit={onSubmit}
            className="glass-panel rounded-2xl p-8 space-y-5 lg:col-span-3"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" required placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" name="subject" placeholder="Early access, partnership…" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                required
                rows={6}
                placeholder="Tell us how we can help."
              />
            </div>
            <Button
              type="submit"
              disabled={sending}
              className="bg-gradient-gold text-accent-foreground shadow-glow-gold"
            >
              {sending ? "Sending…" : "Send Message"}
            </Button>
          </form>

          <div className="lg:col-span-2 space-y-5">
            {cards.map((c) => (
              <GlassCard key={c.title}>
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 border border-primary/30">
                    <c.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg">{c.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                      {c.body}
                    </p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
