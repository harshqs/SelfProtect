import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PulseShield } from "@/components/site/PulseShield";
import { LiveAlertTicker } from "@/components/site/LiveAlertTicker";
import { SectionEyebrow } from "@/components/site/SectionEyebrow";
import { GlassCard } from "@/components/site/GlassCard";
import { LaurelDivider } from "@/components/site/LaurelDivider";
import { motion } from "motion/react";
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
      { title: "SelfProtect - Protection That Reacts Before It's Too Late" },
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
    body: "Silent SOS, live GPS, encrypted audio evidence - triggered in under a second.",
  },
  {
    icon: Users,
    title: "Community Response",
    body: "Verified responders within 100-500m receive an instant nearby-distress alert.",
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
    body: "Verified volunteers, safe zones and partner pharmacies, cafes and security teams.",
  },
];

const heroCopy = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
  },
};

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-aurora opacity-60 animate-aurora"
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-4 pt-14 pb-20 sm:px-6 sm:pt-20 sm:pb-24 lg:pt-28 lg:pb-32">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <motion.div
              className="space-y-6 sm:space-y-8"
              variants={heroCopy}
              initial="hidden"
              animate="show"
            >
              <motion.div variants={heroItem}>
                <SectionEyebrow>
                  An ancient vow - A modern shield
                </SectionEyebrow>
              </motion.div>
              <motion.h1
                variants={heroItem}
                className="font-display text-[clamp(2.5rem,13vw,4rem)] leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
              >
                Protection that{" "}
                <span className="text-red-400 drop-shadow-[0_0_22px_rgba(248,113,113,0.35)]">
                  reacts
                </span>
                <br />
                before it's{" "}
                <em className="not-italic text-primary">too late.</em>
              </motion.h1>
              <motion.p
                variants={heroItem}
                className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
              >
                SelfProtect is an AI-powered safety ecosystem for women -
                combining smart wearables, instant emergency response and a
                verified community network. Automatic. Instant. Trusted.
              </motion.p>
              <motion.div
                variants={heroItem}
                className="flex flex-col gap-3 sm:flex-row sm:flex-wrap"
              >
                <Button
                  size="lg"
                  className="magnetic-hover w-full bg-red-600 text-white shadow-glow-red hover:bg-red-500 sm:w-auto"
                  asChild
                >
                  <Link to="/features">
                    Explore the Ecosystem{" "}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="magnetic-hover w-full border-red-500/40 bg-black/30 text-foreground hover:bg-red-500/10 sm:w-auto"
                  asChild
                >
                  <Link to="/why-we">Why Trust SelfProtect</Link>
                </Button>
              </motion.div>
              <motion.div variants={heroItem} className="pt-4">
                <LiveAlertTicker />
              </motion.div>
            </motion.div>
            <div className="relative mx-auto w-full max-w-[420px] lg:max-w-none">
              <PulseShield />
            </div>
          </div>
        </div>
        <div className="greek-key-border" />
      </section>

      {/* FEATURES */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            className="max-w-2xl space-y-4"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <SectionEyebrow>Sanctum I - Capabilities</SectionEyebrow>
            <h2 className="font-display text-3xl sm:text-4xl">
              Inscribed for the moments that matter most
            </h2>
            <p className="text-muted-foreground">
              Every signal - biometric, motion, voice, location - is woven into
              one quiet sentinel that wakes the instant something is wrong.
            </p>
          </motion.div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <GlassCard
                key={f.title}
                delay={i * 0.08}
                className={
                  f.title === "Emergency Alerts"
                    ? "border-red-500/35 bg-black/65 shadow-glow-red"
                    : undefined
                }
              >
                <div className="space-y-4">
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
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            className="text-center space-y-4 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <SectionEyebrow>Sanctum II - Ecosystem</SectionEyebrow>
            <h2 className="font-display text-3xl sm:text-4xl">
              A pantheon of devices, one guardian
            </h2>
            <p className="text-muted-foreground">
              Wearables, mobile and a verified community network - composed into
              a single living shield.
            </p>
          </motion.div>
          <LaurelDivider className="my-12" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {ecosystem.map((e, i) => (
              <GlassCard key={e.name} delay={i * 0.08}>
                <div className="space-y-5">
                  <motion.div
                    className="relative flex h-20 w-20 items-center justify-center rounded-full border border-accent/40 bg-background/40 mx-auto shadow-glow-gold"
                    animate={{ rotateY: [0, 14, 0, -14, 0], y: [0, -5, 0] }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.25,
                    }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <e.icon className="h-8 w-8 text-accent" strokeWidth={1.3} />
                    <span className="absolute inset-0 rounded-full border border-primary/30 animate-pulse-ring" />
                  </motion.div>
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
      <section className="relative overflow-hidden border-y border-red-500/20 bg-black py-12 sm:py-16">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap font-display text-xl uppercase tracking-[0.2em] text-muted-foreground sm:gap-16 sm:text-3xl">
          {Array.from({ length: 2 }).map((_, n) => (
            <div key={n} className="flex gap-16 px-8">
              <span>- Detect</span>
              <span className="text-red-400">- Verify</span>
              <span>- Activate</span>
              <span className="text-primary">- Protect</span>
              <span>- Connect</span>
              <span className="text-red-400">- Endure</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28">
        <motion.div
          className="mx-auto max-w-4xl px-4 text-center space-y-8 sm:px-6"
          initial={{ opacity: 0, y: 36, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionEyebrow>Join the early circle</SectionEyebrow>
          <h2 className="font-display text-3xl sm:text-5xl">
            Safety should never wait for help.
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Be among the first to wear, test and shape the SelfProtect
            ecosystem.
          </p>
          <div className="flex justify-center gap-3 flex-wrap">
            <Button
              size="lg"
              className="magnetic-hover bg-red-600 text-white shadow-glow-red hover:bg-red-500"
              asChild
            >
              <Link to="/contact">Request Early Access</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/privacy">Read our Privacy Vow</Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </>
  );
}
