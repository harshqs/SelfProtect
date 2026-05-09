export function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-8 bg-accent/60" />
      <span className="text-xs tracking-[0.4em] uppercase text-accent">
        {children}
      </span>
    </div>
  );
}
