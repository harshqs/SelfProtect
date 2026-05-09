import { useEffect, useState } from "react";
import { Activity, MapPin, Users, Bell } from "lucide-react";

const events = [
  { icon: Activity, text: "Distress pattern detected · verifying biometric signal" },
  { icon: MapPin, text: "Live location shared with 3 trusted contacts" },
  { icon: Users, text: "12 community responders alerted within 300m" },
  { icon: Bell, text: "Audio evidence encrypted to secure cloud" },
  { icon: Activity, text: "Safe route recalculated · 2 min to nearest safe zone" },
];

export function LiveAlertTicker() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % events.length), 2800);
    return () => clearInterval(t);
  }, []);
  const E = events[i].icon;
  return (
    <div className="glass-panel rounded-full px-5 py-3 flex items-center gap-3 max-w-md mx-auto">
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inset-0 rounded-full bg-primary animate-pulse-ring" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
      </span>
      <E className="h-4 w-4 text-accent shrink-0" />
      <p key={i} className="text-xs sm:text-sm text-foreground/90 truncate animate-fade-up">
        {events[i].text}
      </p>
    </div>
  );
}
