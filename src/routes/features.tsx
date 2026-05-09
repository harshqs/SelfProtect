import { createFileRoute } from "@tanstack/react-router";
import { SectionEyebrow } from "@/components/site/SectionEyebrow";
import { GlassCard } from "@/components/site/GlassCard";
import {
  Watch,
  Headphones,
  Smartphone,
  Users,
  Route as RouteIcon,
  Mic,
} from "lucide-react";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "Features — SelfProtect Ecosystem" },
      {
        name: "description",
        content:
          "Smart watch, earbuds, mobile command, community network, safe-route AI and audio evidence — the full SelfProtect ecosystem.",
      },
    ],
  }),
  component: Features,
});

const items = [
  {
    icon: Watch,
    title: "Smart Safety Watch",
    points: [
      "Hidden SOS trigger",
      "Heart-rate & motion monitoring",
      "Fall & impact detection",
      "GPS tracking",
      "Silent vibration alerts",
      "Audio recording activation",
      "Low-light flashlight mode",
    ],
  },
  {
    icon: Headphones,
    title: "Smart Earbuds",
    points: [
      "Triple-tap silent SOS",
      "Panic phrase recognition",
      "Audio evidence recording",
      "Hands-free emergency activation",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile Command",
    points: [
      "Emergency dashboard",
      "Live tracking",
      "Responder coordination",
      "Encrypted cloud evidence",
    ],
  },
  {
    icon: Users,
    title: "Community Network",
    points: [
      "Nearby alerts within 100–500m",
      "Verified volunteers & safe zones",
      "Partnered cafés, pharmacies & security",
      "Faster intervention through awareness",
    ],
  },
  {
    icon: RouteIcon,
    title: "Safe Route AI",
    points: [
      "Crowd density analysis",
      "Lighting condition mapping",
      "Reported incident awareness",
      "Active safe-zone routing",
      "Police proximity weighting",
    ],
  },
  {
    icon: Mic,
    title: "Smart Audio Protection",
    points: [
      "Auto-activated microphone",
      "Encrypted cloud storage",
      "Tamper-resistant evidence",
      "Useful for legal reporting",
    ],
  },
];

function Features() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 pt-24 pb-20">
        <div className="max-w-2xl space-y-4">
          <SectionEyebrow>Ecosystem</SectionEyebrow>
          <h1 className="font-display text-4xl sm:text-5xl">
            Six instruments. One unbroken shield.
          </h1>
          <p className="text-muted-foreground text-lg">
            Each component of SelfProtect operates alone — together, they form
            an ecosystem that detects, verifies, alerts and protects in seconds.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <GlassCard key={it.title}>
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 border border-primary/30">
                    <it.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-display text-xl">{it.title}</h3>
                </div>
                <ul className="space-y-2">
                  {it.points.map((p) => (
                    <li
                      key={p}
                      className="flex gap-3 text-sm text-muted-foreground"
                    >
                      <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
