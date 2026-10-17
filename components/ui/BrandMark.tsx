import { cn } from "@/lib/cn";

/**
 * Circular brand mark. Coral filled circle with an abstract fluke
 * silhouette in a darker tone. Scales with font-size.
 */
export function BrandMark({
  className,
  size = 36,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      aria-hidden="true"
      className={cn("shrink-0", className)}
    >
      <circle cx="50" cy="50" r="48" fill="var(--color-coral)" />
      {/* Abstract wing / fluke shape — darker, inset */}
      <path
        d="M22 54
           C 34 42, 48 40, 58 46
           L 78 32
           L 72 54
           L 78 76
           L 58 62
           C 48 68, 34 66, 22 54 Z"
        fill="var(--color-navy-darker)"
      />
    </svg>
  );
}
