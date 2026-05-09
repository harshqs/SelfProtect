import { cn } from "@/lib/utils";

export function GlassCard({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "glass-panel rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-glow-cyan group",
        className,
      )}
    >
      {children}
    </div>
  );
}
