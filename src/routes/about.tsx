import { createFileRoute } from "@tanstack/react-router";
import { SectionEyebrow } from "@/components/site/SectionEyebrow";
import { LaurelDivider } from "@/components/site/LaurelDivider";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About SelfProtect — Mission & Philosophy" },
      {
        name: "description",
        content:
          "Why traditional safety apps fail and how SelfProtect builds automatic, instant, community-based protection.",
      },
    ],
  }),
  component: About,
});

const steps = [
  {
    n: "I",
    title: "Detect",
    body: "Heart-rate spikes, sudden motion, impact, panic voice patterns and hidden manual triggers are all monitored in real time.",
  },
  {
    n: "II",
    title: "Verify",
    body: "Vibration, gesture or voice confirmation reduces false alerts. No response activates the protocol automatically.",
  },
  {
    n: "III",
    title: "Activate",
    body: "Live GPS shared, contacts alerted, audio recording started, encrypted evidence stored, optional siren triggered.",
  },
  {
    n: "IV",
    title: "Connect",
    body: "Verified responders within 100–500m receive a nearby distress alert and can navigate to the user.",
  },
];

function About() {
  return (
    <>
      <section className="relative">
        <div className="mx-auto max-w-5xl px-6 pt-24 pb-12 space-y-8">
          <SectionEyebrow>About</SectionEyebrow>
          <h1 className="font-display text-4xl sm:text-5xl max-w-3xl">
            A guardian rebuilt for the way danger actually unfolds.
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
            Traditional safety apps fail because users panic, can't unlock
            phones, can't call quickly — and people nearby remain unaware.
            SelfProtect was created to dissolve every one of those delays.
          </p>
        </div>
      </section>

      <section className="relative py-12">
        <div className="mx-auto max-w-5xl px-6 grid md:grid-cols-2 gap-10">
          <div className="glass-panel rounded-2xl p-8 space-y-3">
            <h2 className="font-display text-2xl text-accent">The Problem</h2>
            <p className="text-muted-foreground leading-relaxed">
              Harassment, stalking, unsafe travel, assault attempts, medical
              emergencies — every second of delay multiplies harm. Phones lock,
              hands shake, voices go silent.
            </p>
          </div>
          <div className="glass-panel rounded-2xl p-8 space-y-3">
            <h2 className="font-display text-2xl text-primary">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              Automatic + Instant + Community-Based Protection. A system that
              does not wait to be unlocked, dialed or explained.
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center space-y-4">
            <SectionEyebrow>The four sanctums of response</SectionEyebrow>
            <h2 className="font-display text-3xl sm:text-4xl">How protection unfolds</h2>
          </div>
          <LaurelDivider className="my-10" />
          <ol className="grid md:grid-cols-2 gap-6">
            {steps.map((s) => (
              <li
                key={s.n}
                className="glass-panel rounded-2xl p-6 relative overflow-hidden"
              >
                <span className="absolute -top-4 -right-2 font-display text-7xl text-accent/15 select-none">
                  {s.n}
                </span>
                <p className="text-xs uppercase tracking-[0.4em] text-accent">
                  Step {s.n}
                </p>
                <h3 className="font-display text-2xl mt-2">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
