import { BellRing, MapPin, Shield, Users, Watch } from "lucide-react";
import { motion } from "motion/react";

const orbitNodes = [
  {
    Icon: Watch,
    label: "wearable",
    className: "left-[7%] top-[14%] sm:left-[8%] sm:top-[16%]",
  },
  {
    Icon: BellRing,
    label: "sos",
    className: "right-[6%] top-[21%] sm:right-[8%] sm:top-[23%]",
  },
  {
    Icon: Users,
    label: "responders",
    className: "bottom-[16%] left-[13%] sm:bottom-[19%] sm:left-[15%]",
  },
  {
    Icon: MapPin,
    label: "safe route",
    className: "bottom-[12%] right-[13%] sm:bottom-[16%] sm:right-[15%]",
  },
];

const formatSvgNumber = (value: number) =>
  value.toFixed(4).replace(/\.?0+$/, "");

const laurelLeaves = Array.from({ length: 14 }).map((_, i) => {
  const angle = (i / 14) * Math.PI;
  const x1 = 100 + Math.cos(angle + Math.PI / 2) * 78;
  const y1 = 100 + Math.sin(angle + Math.PI / 2) * 78;
  const x2 = 100 + Math.cos(angle + Math.PI / 2) * 88;
  const y2 = 100 + Math.sin(angle + Math.PI / 2) * 88;
  const cx = formatSvgNumber((x1 + x2) / 2);
  const mirrorCx = formatSvgNumber(200 - (x1 + x2) / 2);
  const cy = formatSvgNumber((y1 + y2) / 2);
  const rotation = formatSvgNumber((angle * 180) / Math.PI + 90);
  const mirrorRotation = formatSvgNumber(-((angle * 180) / Math.PI + 90));

  return {
    cx,
    cy,
    mirrorCx,
    rotation,
    mirrorRotation,
    transform: `rotate(${rotation} ${cx} ${cy})`,
    mirrorTransform: `rotate(${mirrorRotation} ${mirrorCx} ${cy})`,
  };
});

export function PulseShield() {
  return (
    <motion.div
      className="relative mx-auto flex aspect-square w-full max-w-[min(86vw,420px)] items-center justify-center perspective-guardian"
      initial={{ opacity: 0, scale: 0.92, rotateX: 12 }}
      animate={{ opacity: 1, scale: 1, rotateX: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 18 }}
      whileHover={{ rotateX: 5, rotateY: -7, scale: 1.02 }}
    >
      {/* Aurora wash */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-pulse blur-3xl"
        animate={{ rotate: [0, 8, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Concentric rings (community radius) */}
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="absolute inset-0 rounded-full border border-red-500/35"
          animate={{
            scale: [0.62, 2.2],
            opacity: [0.85, 0],
            rotateX: [62, 62],
          }}
          transition={{
            duration: 3.6,
            delay: i * 1.2,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}

      <motion.div
        className="absolute inset-[10%] rounded-full border border-red-500/25"
        animate={{ rotateZ: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        style={{ transformStyle: "preserve-3d" }}
      />

      {/* Outer laurel */}
      <motion.svg
        viewBox="0 0 200 200"
        className="absolute inset-0 h-full w-full text-red-500/70"
        fill="none"
        animate={{ rotateZ: [0, 4, 0, -4, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
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
        {laurelLeaves.map((leaf, i) => {
          return (
            <g key={`l-${i}`}>
              <ellipse
                cx={leaf.cx}
                cy={leaf.cy}
                rx="5"
                ry="2"
                fill="currentColor"
                opacity="0.55"
                transform={leaf.transform}
              />
              <ellipse
                cx={leaf.mirrorCx}
                cy={leaf.cy}
                rx="5"
                ry="2"
                fill="currentColor"
                opacity="0.55"
                transform={leaf.mirrorTransform}
              />
            </g>
          );
        })}
      </motion.svg>

      {orbitNodes.map(({ Icon, label, className }, index) => (
        <motion.div
          key={label}
          className={`absolute ${className} z-20 flex h-10 w-10 items-center justify-center rounded-full border border-red-500/35 bg-black/70 shadow-glow-red backdrop-blur-md sm:h-12 sm:w-12`}
          initial={{ opacity: 0, scale: 0.6, z: -60 }}
          animate={{
            opacity: 1,
            scale: [1, 1.08, 1],
            y: [0, -8, 0],
            z: [0, 28, 0],
          }}
          transition={{
            opacity: { delay: 0.35 + index * 0.12, duration: 0.35 },
            scale: {
              delay: index * 0.22,
              duration: 3.4,
              repeat: Infinity,
              ease: "easeInOut",
            },
            y: {
              delay: index * 0.22,
              duration: 3.4,
              repeat: Infinity,
              ease: "easeInOut",
            },
            z: {
              delay: index * 0.22,
              duration: 3.4,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          aria-label={label}
        >
          <Icon
            className="h-4 w-4 text-red-400 sm:h-5 sm:w-5"
            strokeWidth={1.5}
          />
        </motion.div>
      ))}

      {/* Core shield */}
      <motion.div
        className="relative z-10 flex h-[42%] w-[42%] min-w-32 items-center justify-center rounded-full glass-panel-red shadow-glow-red sm:min-w-48"
        animate={{ y: [0, -10, 0], rotateY: [0, 8, 0, -8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <motion.div
          className="absolute inset-2 rounded-full border border-red-400/45"
          animate={{ rotateZ: -360 }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute h-24 w-24 rounded-full bg-red-500/15 blur-xl"
          animate={{ scale: [0.85, 1.22, 0.85], opacity: [0.35, 0.7, 0.35] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        />
        <Shield
          className="relative h-14 w-14 text-red-400 sm:h-20 sm:w-20"
          strokeWidth={1.2}
        />
      </motion.div>
    </motion.div>
  );
}
