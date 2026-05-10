import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronRight, Menu, X, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { AnimatePresence, motion } from "motion/react";

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
      description:
        "Authentication will be available with the early-access launch.",
    });

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="glass-panel">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <motion.div
            whileHover={{ scale: 1.04, x: 2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
          >
            <Link to="/" className="flex items-center gap-2 group">
              <span className="relative flex h-9 w-9 items-center justify-center rounded-full border border-red-500/45 bg-black/60 shadow-glow-red transition-transform duration-300 group-hover:rotate-6">
                <Shield className="h-4 w-4 text-red-400" />
                <span className="absolute inset-0 rounded-full border border-primary/40 animate-pulse-ring" />
              </span>
              <span className="font-display text-lg tracking-[0.18em] uppercase text-foreground">
                Self<span className="text-gradient-gold">Protect</span>
              </span>
            </Link>
          </motion.div>

          <nav className="hidden md:flex items-center gap-7">
            {links.map((l) => (
              <motion.div
                key={l.to}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 320, damping: 22 }}
              >
                <Link
                  to={l.to}
                  className="nav-hover-line text-sm tracking-wide text-muted-foreground transition-colors hover:text-foreground"
                  activeProps={{ className: "text-foreground" }}
                  activeOptions={{ exact: l.to === "/" }}
                >
                  {l.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => authToast("Sign in")}
              className="magnetic-hover text-muted-foreground hover:text-foreground"
            >
              Sign in
            </Button>
            <Button
              size="sm"
              onClick={() => authToast("Login")}
              className="magnetic-hover bg-red-600 text-white shadow-glow-red hover:bg-red-500"
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

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, height: 0, y: -8 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -8 }}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden overflow-hidden border-t border-red-500/20 px-4 py-4"
            >
              <div className="grid gap-2">
                {links.map((l, index) => (
                  <motion.div
                    key={l.to}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.035,
                      duration: 0.2,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <Link
                      to={l.to}
                      onClick={() => setOpen(false)}
                      className="mobile-nav-link group"
                      activeProps={{ className: "mobile-nav-link-active" }}
                      activeOptions={{ exact: l.to === "/" }}
                    >
                      <span>{l.label}</span>
                      <ChevronRight className="h-4 w-4 text-red-400/70 transition-transform group-hover:translate-x-1 group-hover:text-red-300" />
                    </Link>
                  </motion.div>
                ))}
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2 border-t border-red-500/15 pt-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => authToast("Sign in")}
                  className="magnetic-hover border-red-500/25 bg-black/40"
                >
                  Sign in
                </Button>
                <Button
                  size="sm"
                  onClick={() => authToast("Login")}
                  className="magnetic-hover bg-red-600 text-white"
                >
                  Login
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="greek-key-border" />
    </header>
  );
}
