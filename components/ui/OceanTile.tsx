import { cn } from "@/lib/cn";

/**
 * Rich SVG compositions that stand in for real seafood/sea photos.
 * They use the brand palette so sections feel finished even without
 * stock imagery. Swap for real .jpg/.webp assets in /public/images
 * later by replacing the <OceanTile> with <img>.
 */

type Variant = "underwater" | "shoal" | "fjord" | "surface";

type Props = {
  variant?: Variant;
  className?: string;
};

export function OceanTile({ variant = "underwater", className }: Props) {
  // Deterministic "fish" positions for the shoal.
  const fish = Array.from({ length: 42 }, (_, i) => {
    const seed = (i * 2654435761) >>> 0;
    const x = (seed % 1000) / 1000;
    const y = ((seed >> 10) % 1000) / 1000;
    const s = 0.35 + ((seed >> 20) % 100) / 100;
    return { x, y, s };
  });

  const rays = [0, 1, 2, 3, 4];

  return (
    <svg
      viewBox="0 0 800 1000"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      className={cn("block h-full w-full", className)}
    >
      <defs>
        <linearGradient id={`ot-${variant}-bg`} x1="0" y1="0" x2="0" y2="1">
          {variant === "underwater" && (
            <>
              <stop offset="0" stopColor="#5A89B8" />
              <stop offset="0.45" stopColor="#2D4A6B" />
              <stop offset="1" stopColor="#1a2b40" />
            </>
          )}
          {variant === "shoal" && (
            <>
              <stop offset="0" stopColor="#4A7DAE" />
              <stop offset="0.6" stopColor="#1E3B5B" />
              <stop offset="1" stopColor="#102235" />
            </>
          )}
          {variant === "fjord" && (
            <>
              <stop offset="0" stopColor="#CFE0F4" />
              <stop offset="0.35" stopColor="#9DB8E8" />
              <stop offset="0.55" stopColor="#4A6C8E" />
              <stop offset="1" stopColor="#1a2b40" />
            </>
          )}
          {variant === "surface" && (
            <>
              <stop offset="0" stopColor="#9DB8E8" />
              <stop offset="0.5" stopColor="#4F7AA8" />
              <stop offset="1" stopColor="#2D4A6B" />
            </>
          )}
        </linearGradient>

        <radialGradient id={`ot-${variant}-sun`} cx="0.4" cy="0.05" r="0.6">
          <stop offset="0" stopColor="#FCE8DF" stopOpacity="0.7" />
          <stop offset="0.5" stopColor="#F2A087" stopOpacity="0.15" />
          <stop offset="1" stopColor="#2D4A6B" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Base gradient */}
      <rect width="800" height="1000" fill={`url(#ot-${variant}-bg)`} />

      {/* Sun / top glow */}
      <rect width="800" height="1000" fill={`url(#ot-${variant}-sun)`} />

      {variant === "underwater" && (
        <>
          {/* Light rays from the surface */}
          {rays.map((r) => (
            <path
              key={r}
              d={`M${120 + r * 140},0 L${260 + r * 140},1000 L${340 + r * 140},1000 L${200 + r * 140},0 Z`}
              fill="#CFE0F4"
              opacity="0.07"
            />
          ))}
          {/* Horizon shimmer line */}
          <rect y="90" width="800" height="2" fill="#CFE0F4" opacity="0.25" />
          {/* Fish silhouettes */}
          {fish.map((f, i) => (
            <ellipse
              key={i}
              cx={60 + f.x * 680}
              cy={180 + f.y * 760}
              rx={14 * f.s}
              ry={3.5 * f.s}
              fill="#0C1F32"
              opacity={0.55}
            />
          ))}
        </>
      )}

      {variant === "shoal" && (
        <>
          {/* Dense shoal of elongated fish */}
          {fish.map((f, i) => (
            <g
              key={i}
              transform={`translate(${40 + f.x * 720},${80 + f.y * 820}) rotate(${(f.s - 0.6) * 25})`}
            >
              <ellipse rx={18 * f.s} ry={4.5 * f.s} fill="#9DB8E8" opacity={0.7} />
              <path
                d={`M${18 * f.s},0 L${26 * f.s},${-5 * f.s} L${26 * f.s},${5 * f.s} Z`}
                fill="#9DB8E8"
                opacity={0.6}
              />
            </g>
          ))}
          {/* Overlay deepen on bottom */}
          <rect y="700" width="800" height="300" fill="#102235" opacity="0.35" />
        </>
      )}

      {variant === "fjord" && (
        <>
          {/* Distant mountains */}
          <path
            d="M0,500 L120,340 L220,420 L330,300 L450,400 L560,320 L680,420 L800,360 L800,560 L0,560 Z"
            fill="#2D4A6B"
            opacity="0.75"
          />
          <path
            d="M0,560 L160,440 L280,520 L400,420 L520,500 L640,440 L800,500 L800,620 L0,620 Z"
            fill="#1a2b40"
            opacity="0.85"
          />
          {/* Water surface line */}
          <rect y="620" width="800" height="2" fill="#CFE0F4" opacity="0.5" />
          {/* Water reflection */}
          <rect y="620" width="800" height="380" fill="#1a2b40" opacity="0.4" />
          {/* Reflection shimmer */}
          {[0, 1, 2, 3].map((i) => (
            <ellipse
              key={i}
              cx={100 + i * 220}
              cy={700 + i * 60}
              rx={160}
              ry={3}
              fill="#9DB8E8"
              opacity={0.2}
            />
          ))}
        </>
      )}

      {variant === "surface" && (
        <>
          {/* Ripples */}
          {Array.from({ length: 14 }).map((_, i) => (
            <ellipse
              key={i}
              cx={40 + ((i * 73) % 760)}
              cy={120 + ((i * 173) % 820)}
              rx={120 + (i % 5) * 30}
              ry={2}
              fill="#CFE0F4"
              opacity={0.12}
            />
          ))}
        </>
      )}
    </svg>
  );
}
