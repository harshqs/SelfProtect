import { Shield } from "lucide-react";

export function PulseShield() {
  return (
    <div className="relative mx-auto h-[340px] w-[340px] sm:h-[420px] sm:w-[420px] flex items-center justify-center">
      {/* Aurora wash */}
      <div className="absolute inset-0 rounded-full bg-gradient-pulse blur-3xl animate-aurora" />

      {/* Concentric rings (community radius) */}
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="absolute inset-0 rounded-full border border-primary/30"
          style={{
            animation: `pulse-ring 3.6s cubic-bezier(0.4,0,0.6,1) ${i * 1.2}s infinite`,
          }}
        />
      ))}

      {/* Outer laurel */}
      <svg
        viewBox="0 0 200 200"
        className="absolute inset-0 h-full w-full text-accent/70"
        fill="none"
      >
        <circle
          cx="100"
          cy="100"
          r="92"
          stroke="currentColor"
          strokeWidth="0.6"
          strokeDasharray="2 6"
        />
        <circle
          cx="100"
          cy="100"
          r="78"
          stroke="currentColor"
          strokeWidth="0.4"
        />
        {/* laurel leaves on left/right */}
        {Array.from({ length: 14 }).map((_, i) => {
          const angle = (i / 14) * Math.PI;
          const x1 = 100 + Math.cos(angle + Math.PI / 2) * 78;
          const y1 = 100 + Math.sin(angle + Math.PI / 2) * 78;
          const x2 = 100 + Math.cos(angle + Math.PI / 2) * 88;
          const y2 = 100 + Math.sin(angle + Math.PI / 2) * 88;
          return (
            <g key={`l-${i}`}>
              <ellipse
                cx={(x1 + x2) / 2}
                cy={(y1 + y2) / 2}
                rx="5"
                ry="2"
                fill="currentColor"
                opacity="0.55"
                transform={`rotate(${(angle * 180) / Math.PI + 90} ${(x1 + x2) / 2} ${(y1 + y2) / 2})`}
              />
              <ellipse
                cx={200 - (x1 + x2) / 2}
                cy={(y1 + y2) / 2}
                rx="5"
                ry="2"
                fill="currentColor"
                opacity="0.55"
                transform={`rotate(${-((angle * 180) / Math.PI + 90)} ${200 - (x1 + x2) / 2} ${(y1 + y2) / 2})`}
              />
            </g>
          );
        })}
      </svg>

      {/* Core shield */}
      <div className="relative z-10 flex h-40 w-40 sm:h-52 sm:w-52 items-center justify-center rounded-full glass-panel shadow-glow-cyan animate-float-slow">
        <div className="absolute inset-2 rounded-full border border-accent/40" />
        <Shield className="h-16 w-16 sm:h-20 sm:w-20 text-primary" strokeWidth={1.2} />
      </div>
    </div>
  );
}
