export function LaurelDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <svg width="80" height="24" viewBox="0 0 80 24" fill="none" className="text-accent">
        <path
          d="M2 12h60"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="2 4"
        />
        <path
          d="M62 12c4-6 10-8 14-8M62 12c4 6 10 8 14 8"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
      <span className="text-accent text-xs tracking-[0.4em] uppercase animate-rune-flicker">
        ✦
      </span>
      <svg width="80" height="24" viewBox="0 0 80 24" fill="none" className="text-accent rotate-180">
        <path
          d="M2 12h60"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="2 4"
        />
        <path
          d="M62 12c4-6 10-8 14-8M62 12c4 6 10 8 14 8"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
