import { useEffect, useState } from "react";
import { Activity, MapPin, Users, Bell } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

const events = [
  {
    icon: Activity,
    text: "Distress pattern detected - verifying biometric signal",
  },
  { icon: MapPin, text: "Live location shared with 3 trusted contacts" },
  { icon: Users, text: "12 community responders alerted within 300m" },
  { icon: Bell, text: "Audio evidence encrypted to secure cloud" },
  {
    icon: Activity,
    text: "Safe route recalculated - 2 min to nearest safe zone",
  },
];

export function LiveAlertTicker() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % events.length), 2800);
    return () => clearInterval(t);
  }, []);

  const E = events[i].icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 240, damping: 24 }}
      className="glass-panel-red mx-auto flex max-w-full items-center gap-3 overflow-hidden rounded-full px-4 py-3 sm:max-w-md sm:px-5"
    >
      <span className="relative flex h-2.5 w-2.5 shrink-0">
        <span className="absolute inset-0 rounded-full bg-red-500 animate-pulse-ring" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500" />
      </span>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={`icon-${i}`}
          initial={{ opacity: 0, rotate: -18, scale: 0.82 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 18, scale: 0.82 }}
          transition={{ duration: 0.22 }}
        >
          <E className="h-4 w-4 shrink-0 text-red-400" />
        </motion.div>
      </AnimatePresence>
      <AnimatePresence mode="wait" initial={false}>
        <motion.p
          key={i}
          initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -12, filter: "blur(6px)" }}
          transition={{ duration: 0.28 }}
          className="min-w-0 truncate text-xs text-foreground/90 sm:text-sm"
        >
          {events[i].text}
        </motion.p>
      </AnimatePresence>
    </motion.div>
  );
}
