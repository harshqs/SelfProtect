import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const links = [
  { to: "/", label: "Home" },
  { to: "/why-we", label: "Why We" },
  { to: "/about", label: "About" },
  { to: "/features", label: "Features" },
  { to: "/privacy", label: "Privacy" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  const authToast = (label: string) =>
    toast(`${label} coming soon`, {
      description: "Authentication will be available with the early-access launch.",
    });

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="glass-panel">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="relative flex h-9 w-9 items-center justify-center rounded-full border border-accent/40 bg-background/40 shadow-glow-gold">
              <Shield className="h-4 w-4 text-accent" />
              <span className="absolute inset-0 rounded-full border border-primary/40 animate-pulse-ring" />
            </span>
            <span className="font-display text-lg tracking-[0.18em] uppercase text-foreground">
              Self<span className="text-gradient-gold">Protect</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-7">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-sm tracking-wide text-muted-foreground transition-colors hover:text-foreground"
                activeProps={{ className: "text-foreground" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => authToast("Sign in")}
              className="text-muted-foreground hover:text-foreground"
            >
              Sign in
            </Button>
            <Button
              size="sm"
              onClick={() => authToast("Login")}
              className="bg-gradient-gold text-accent-foreground hover:opacity-90"
            >
              Login
            </Button>
          </div>

          <button
            className="md:hidden text-foreground"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-border px-4 py-4 space-y-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="block text-sm text-muted-foreground hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
            <div className="flex gap-2 pt-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => authToast("Sign in")}
                className="flex-1"
              >
                Sign in
              </Button>
              <Button
                size="sm"
                onClick={() => authToast("Login")}
                className="flex-1 bg-gradient-gold text-accent-foreground"
              >
                Login
              </Button>
            </div>
          </div>
        )}
      </div>
      <div className="greek-key-border" />
    </header>
  );
}
