import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export function GlassCard({
  className,
  children,
  delay = 0,
}: {
  className?: string;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, rotateX: -6 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        type: "spring",
        stiffness: 160,
        damping: 22,
        delay,
      }}
      whileHover={{
        y: -8,
        rotateX: 4,
        rotateY: -4,
        scale: 1.02,
      }}
      className={cn(
        "glass-panel rounded-2xl p-6 transition-shadow duration-500 hover:shadow-glow-cyan group will-change-transform",
        className,
      )}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </motion.div>
  );
}
