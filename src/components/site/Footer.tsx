import { Link } from "@tanstack/react-router";
import { LaurelDivider } from "./LaurelDivider";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border/60 bg-gradient-marble">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <LaurelDivider />
        <div className="mt-10 grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-2xl tracking-[0.2em] uppercase">
              Self<span className="text-gradient-gold">Protect</span>
            </p>
            <p className="mt-3 text-sm text-muted-foreground max-w-xs">
              Protection That Reacts Before It's Too Late. An AI-powered safety
              ecosystem for women, built on speed, simplicity and privacy.
            </p>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <p className="text-xs uppercase tracking-[0.25em] text-accent mb-2">
              Navigate
            </p>
            <Link to="/" className="text-muted-foreground hover:text-foreground">Home</Link>
            <Link to="/why-we" className="text-muted-foreground hover:text-foreground">Why We</Link>
            <Link to="/about" className="text-muted-foreground hover:text-foreground">About</Link>
            <Link to="/features" className="text-muted-foreground hover:text-foreground">Features</Link>
            <Link to="/privacy" className="text-muted-foreground hover:text-foreground">Privacy</Link>
            <Link to="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-accent mb-2">
              Inscription
            </p>
            <p className="font-display text-lg leading-relaxed text-foreground/90">
              "Safety should never depend on luck."
            </p>
          </div>
        </div>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border/60 pt-6 text-xs text-muted-foreground">
          <p>SelfProtect © 2026 — All Rights Reserved</p>
          <p className="tracking-[0.3em] uppercase">Vigilantia · Celeritas · Fides</p>
        </div>
      </div>
    </footer>
  );
}
