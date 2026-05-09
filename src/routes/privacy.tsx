import { createFileRoute } from "@tanstack/react-router";
import { SectionEyebrow } from "@/components/site/SectionEyebrow";
import { GlassCard } from "@/components/site/GlassCard";
import { Lock, Clock, Trash2, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy — SelfProtect" },
      {
        name: "description",
        content:
          "End-to-end encryption, ephemeral location sharing, automatic data deletion and consent-based controls.",
      },
    ],
  }),
  component: Privacy,
});

const pillars = [
  {
    icon: Lock,
    title: "End-to-End Encryption",
    body: "Only trusted users can access emergency data. Nothing in plaintext, ever.",
  },
  {
    icon: Clock,
    title: "Temporary Location Sharing",
    body: "Location is shared only during active emergencies — never in the background.",
  },
  {
    icon: Trash2,
    title: "Automatic Data Deletion",
    body: "Sensitive recordings auto-delete after a set window unless you choose to save them.",
  },
  {
    icon: ShieldCheck,
    title: "Consent-Based Features",
    body: "Alerts, recordings and tracking permissions are fully under your control.",
  },
];

function Privacy() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-5xl px-6 pt-24 pb-20 space-y-12">
        <div className="space-y-5">
          <SectionEyebrow>The Privacy Vow</SectionEyebrow>
          <h1 className="font-display text-4xl sm:text-5xl">
            Guarded like a temple. Released like a whisper.
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Privacy is not a setting in SelfProtect — it is the foundation
            beneath every feature, signal and stored byte.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {pillars.map((p) => (
            <GlassCard key={p.title}>
              <div className="flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 border border-accent/40">
                  <p.icon className="h-5 w-5 text-accent" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-display text-xl">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {p.body}
                  </p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        <div className="glass-panel rounded-2xl p-8 space-y-4 text-sm text-muted-foreground leading-relaxed">
          <h2 className="font-display text-2xl text-foreground">Policy Summary</h2>
          <p>
            SelfProtect collects only the data necessary to detect distress,
            verify emergencies, and reach responders. Biometric and motion
            signals are processed on-device wherever technically possible.
          </p>
          <p>
            Live location is shared exclusively during an active alert and is
            revoked automatically once the alert is closed. Emergency audio
            evidence is encrypted client-side before upload and accessible only
            to you and the contacts you explicitly designate.
          </p>
          <p>
            We do not sell, rent, or commercialize personal data. We do not run
            third-party advertising trackers. You can export or permanently
            delete your data at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
