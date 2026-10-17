import { cn } from "@/lib/cn";
import { OceanTile } from "@/components/ui/OceanTile";

type Variant = "underwater" | "shoal" | "fjord" | "surface";
type Mirror = boolean;

/**
 * Signature hero composition: two overlapping organic shapes (sky + coral)
 * behind a circular photo tile. Mirror flips it for sections where the
 * photo is on the left instead of the right.
 */
export function PhotoCrescent({
  variant = "underwater",
  mirror = false,
  className,
}: {
  variant?: Variant;
  mirror?: Mirror;
  className?: string;
}) {
  return (
    <div
      className={cn("relative isolate aspect-square", className)}
      style={mirror ? { transform: "scaleX(-1)" } : undefined}
    >
      {/* Decorative background crescents */}
      <svg
        viewBox="0 0 100 100"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Sky crescent, back */}
        <path
          d="M68 6 a44 44 0 1 0 0 88 a44 44 0 1 0 0 -88 Z
             M72 18 a32 32 0 1 1 0 64 a32 32 0 1 1 0 -64 Z"
          fillRule="evenodd"
          fill="var(--color-sky)"
          opacity="0.95"
        />
        {/* Coral crescent, offset */}
        <path
          d="M22 50 a42 42 0 1 0 0 .01 Z
             M28 56 a36 36 0 1 1 0 .01 Z"
          fillRule="evenodd"
          fill="var(--color-coral)"
          opacity="0.9"
        />
      </svg>

      {/* Photo tile inside a round mask, mirrored back if needed */}
      <div
        className="absolute inset-[6%] overflow-hidden rounded-full ring-1 ring-paper/20 shadow-[0_30px_60px_-20px_rgba(12,37,64,0.55)]"
        style={mirror ? { transform: "scaleX(-1)" } : undefined}
      >
        <OceanTile variant={variant} />
      </div>
    </div>
  );
}
