import { createFileRoute } from "@tanstack/react-router";
import { SectionEyebrow } from "@/components/site/SectionEyebrow";
import { LaurelDivider } from "@/components/site/LaurelDivider";
import { GlassCard } from "@/components/site/GlassCard";
import { Zap, Lock, Sparkles } from "lucide-react";

export const Route = createFileRoute("/why-we")({
  head: () => ({
    meta: [
      { title: "Why Trust SelfProtect — Our Vow" },
      {
        name: "description",
        content:
          "Trust is not claimed — it is earned. Why SelfProtect is built on simplicity, speed and privacy.",
      },
    ],
  }),
  component: WhyWe,
});

const pillars = [
  {
    icon: Sparkles,
    title: "Simplicity",
    body: "In moments of fear, no one reads a manual. Every interaction is reduced to a single, instinctive gesture.",
  },
  {
    icon: Zap,
    title: "Speed",
    body: "From signal to response in under a second. Detection, verification and alert run in parallel — never in queue.",
  },
  {
    icon: Lock,
    title: "Privacy",
    body: "End-to-end encryption, ephemeral location sharing, and consent at every layer. Your data is yours alone.",
  },
];

function WhyWe() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-4xl px-6 pt-24 pb-20 space-y-10">
        <div className="space-y-5 animate-fade-up">
          <SectionEyebrow>The Vow</SectionEyebrow>
          <h1 className="font-display text-4xl sm:text-5xl">
            Why trust <span className="text-gradient-gold">SelfProtect</span>?
          </h1>
        </div>

        <div className="space-y-6 text-lg leading-relaxed text-foreground/85 animate-fade-up">
          <p>
            Because safety should never depend on luck. SelfProtect was created
            with a simple mission — to make people feel <em className="text-accent not-italic">protected, heard, and connected</em>
            during dangerous situations.
          </p>
          <p>
            We understand that in moments of fear, people need something fast,
            reliable, and trustworthy. That is why our platform is designed to
            work with simplicity, speed, and privacy at its core.
          </p>
          <p>
            We believe technology should not just connect people. It should
            protect them. Every feature inside SelfProtect is built with one
            goal: <span className="text-primary">to help someone get support before it is too late.</span>
          </p>
          <p className="font-display text-2xl text-foreground/95">
            Trust is not claimed. It is earned through action, reliability, and
            responsibility. That is what SelfProtect stands for.
          </p>
        </div>

        <LaurelDivider className="py-6" />

        <div className="grid gap-6 md:grid-cols-3 pt-4">
          {pillars.map((p) => (
            <GlassCard key={p.title}>
              <div className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 border border-accent/40">
                  <p.icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="font-display text-xl">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {p.body}
                </p>
                <div className="greek-key-border opacity-60" />
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
