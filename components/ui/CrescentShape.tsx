import { cn } from "@/lib/cn";

/**
 * Abstract organic crescent / fluke shape used as ambient decoration.
 * Three variants give us enough variety to compose backgrounds without
 * looking repetitive. All shapes are stroked-curve based — abstract, not
 * literal sea iconography.
 */

type Variant = "crescent" | "fluke" | "wave";
type Tone = "coral" | "sky" | "teal" | "cream" | "paper" | "navy" | "current";

const tones: Record<Tone, string> = {
  coral: "text-coral",
  sky: "text-sky",
  teal: "text-teal",
  cream: "text-cream",
  paper: "text-paper",
  navy: "text-navy-darker",
  current: "text-current",
};

type Props = {
  variant?: Variant;
  tone?: Tone;
  className?: string;
  /** 0..1 — applied as inline opacity. Defaults to 0.10. */
  opacity?: number;
  /** flip horizontally */
  mirror?: boolean;
  rotate?: number;
};

export function CrescentShape({
  variant = "crescent",
  tone = "coral",
  className,
  opacity = 0.1,
  mirror = false,
  rotate = 0,
}: Props) {
  const transform = [
    mirror ? "scaleX(-1)" : null,
    rotate ? `rotate(${rotate}deg)` : null,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <svg
      viewBox="0 0 600 600"
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute select-none",
        tones[tone],
        className,
      )}
      style={{ opacity, transform: transform || undefined }}
    >
      {variant === "crescent" && (
        <path
          fill="currentColor"
          d="M300 30c149 0 270 121 270 270S449 570 300 570c-86 0-163-40-213-103 76 25 162 9 220-49 60-60 73-150 41-228 36 41 56 95 56 153 0-149-121-270-270-270 50-26 113-43 166-43z"
        />
      )}
      {variant === "fluke" && (
        // Stylized whale-tail / fluke — abstract, no literal fish features
        <path
          fill="currentColor"
          d="M80 320c40-110 170-170 290-110 60-160 200-110 150 30-30 90-130 110-200 70 30 100-30 200-140 200-90 0-150-90-100-190z"
        />
      )}
      {variant === "wave" && (
        <path
          fill="currentColor"
          d="M0 300c80-90 160-90 240 0s160 90 240 0 160-90 240 0v300H0z"
        />
      )}
    </svg>
  );
}
