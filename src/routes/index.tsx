import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PulseShield } from "@/components/site/PulseShield";
import { LiveAlertTicker } from "@/components/site/LiveAlertTicker";
import { SectionEyebrow } from "@/components/site/SectionEyebrow";
import { GlassCard } from "@/components/site/GlassCard";
import { LaurelDivider } from "@/components/site/LaurelDivider";
import {
  Activity,
  BellRing,
  Users,
  Route as RouteIcon,
  Watch,
  Headphones,
  Smartphone,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SelfProtect — Protection That Reacts Before It's Too Late" },
      {
        name: "description",
        content:
          "AI-powered women safety ecosystem with smart wearables, instant alerts and a community response network.",
      },
    ],
  }),
  component: Home,
});

const features = [
  {
    icon: Activity,
    title: "Smart Detection",
    body: "Biometrics, motion and panic patterns analyzed in real time to recognize danger early.",
  },
  {
    icon: BellRing,
    title: "Emergency Alerts",
    body: "Silent SOS, live GPS, encrypted audio evidence — triggered in under a second.",
  },
  {
    icon: Users,
    title: "Community Response",
    body: "Verified responders within 100–500m receive an instant nearby-distress alert.",
  },
  {
    icon: RouteIcon,
    title: "Safe Route AI",
    body: "Lighting, density, incident history and safe zones combined into the safest path.",
  },
];

const ecosystem = [
  {
    icon: Watch,
    name: "Smart Safety Watch",
    body: "Hidden SOS, heart-rate, fall detection, GPS, vibration alerts and audio recording.",
  },
  {
    icon: Headphones,
    name: "Smart Earbuds",
    body: "Secret tap gestures, panic phrase recognition and hands-free emergency activation.",
  },
  {
    icon: Smartphone,
    name: "Mobile Command",
    body: "Live tracking, responder dashboard and full control of every safety signal.",
  },
  {
    icon: ShieldCheck,
    name: "Responder Network",
    body: "Verified volunteers, safe zones and partner pharmacies, cafés and security teams.",
  },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-aurora opacity-60 animate-aurora" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-24 lg:pt-32 lg:pb-36">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-up">
              <SectionEyebrow>An ancient vow · A modern shield</SectionEyebrow>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
                Protection that <span className="text-gradient-gold">reacts</span><br />
                before it's <em className="not-italic text-primary">too late.</em>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                SelfProtect is an AI-powered safety ecosystem for women — combining
                smart wearables, instant emergency response and a verified
                community network. Automatic. Instant. Trusted.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  size="lg"
                  className="bg-gradient-gold text-accent-foreground hover:opacity-90 shadow-glow-gold"
                  asChild
                >
                  <Link to="/features">
                    Explore the Ecosystem <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary/40 text-foreground hover:bg-primary/10"
                  asChild
                >
                  <Link to="/why-we">Why Trust SelfProtect</Link>
                </Button>
              </div>
              <div className="pt-4">
                <LiveAlertTicker />
              </div>
            </div>
            <div className="relative">
              <PulseShield />
            </div>
          </div>
        </div>
        <div className="greek-key-border" />
      </section>

      {/* FEATURES */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl space-y-4 animate-fade-up">
            <SectionEyebrow>Sanctum I · Capabilities</SectionEyebrow>
            <h2 className="font-display text-3xl sm:text-4xl">
              Inscribed for the moments that matter most
            </h2>
            <p className="text-muted-foreground">
              Every signal — biometric, motion, voice, location — is woven into
              one quiet sentinel that wakes the instant something is wrong.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <GlassCard
                key={f.title}
                className="animate-fade-up"
                // staggered reveal via inline delay
              >
                <div
                  style={{ animationDelay: `${i * 120}ms` }}
                  className="space-y-4"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 border border-primary/30 group-hover:bg-primary/15 transition-colors">
                    <f.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-display text-xl">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {f.body}
                  </p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* ECOSYSTEM */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <SectionEyebrow>Sanctum II · Ecosystem</SectionEyebrow>
            <h2 className="font-display text-3xl sm:text-4xl">
              A pantheon of devices, one guardian
            </h2>
            <p className="text-muted-foreground">
              Wearables, mobile and a verified community network — composed into
              a single living shield.
            </p>
          </div>
          <LaurelDivider className="my-12" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {ecosystem.map((e) => (
              <GlassCard key={e.name}>
                <div className="space-y-5">
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-accent/40 bg-background/40 mx-auto shadow-glow-gold">
                    <e.icon className="h-8 w-8 text-accent" strokeWidth={1.3} />
                    <span className="absolute inset-0 rounded-full border border-primary/30 animate-pulse-ring" />
                  </div>
                  <h3 className="font-display text-lg text-center">{e.name}</h3>
                  <p className="text-sm text-muted-foreground text-center leading-relaxed">
                    {e.body}
                  </p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* STATS MARQUEE */}
      <section className="relative py-16 border-y border-border/60 overflow-hidden bg-gradient-marble">
        <div className="flex w-max animate-marquee gap-16 whitespace-nowrap text-2xl sm:text-3xl font-display tracking-[0.2em] uppercase text-muted-foreground">
          {Array.from({ length: 2 }).map((_, n) => (
            <div key={n} className="flex gap-16 px-8">
              <span>· Detect</span>
              <span className="text-accent">· Verify</span>
              <span>· Activate</span>
              <span className="text-primary">· Protect</span>
              <span>· Connect</span>
              <span className="text-accent">· Endure</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28">
        <div className="mx-auto max-w-4xl px-6 text-center space-y-8">
          <SectionEyebrow>Join the early circle</SectionEyebrow>
          <h2 className="font-display text-3xl sm:text-5xl">
            Safety should never wait for help.
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Be among the first to wear, test and shape the SelfProtect ecosystem.
          </p>
          <div className="flex justify-center gap-3 flex-wrap">
            <Button
              size="lg"
              className="bg-gradient-gold text-accent-foreground shadow-glow-gold"
              asChild
            >
              <Link to="/contact">Request Early Access</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/privacy">Read our Privacy Vow</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
