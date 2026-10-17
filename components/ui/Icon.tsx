import { cn } from "@/lib/cn";

/**
 * Line-style SVG icons for the service cards and bullet lists.
 * Keep stroke 1.5, square caps rounded. Never emojis.
 */

export type IconKey =
  | "chart"
  | "pen"
  | "mega"
  | "leaf"
  | "waves"
  | "bulb"
  | "people"
  | "compass"
  | "talk";

const commonProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function Icon({
  name,
  size = 24,
  className,
}: {
  name: IconKey;
  size?: number;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      aria-hidden="true"
      {...commonProps}
      className={cn(className)}
    >
      {name === "chart" && (
        <>
          <path d="M4 20h16" />
          <rect x="6" y="12" width="3" height="6" rx="0.5" />
          <rect x="11" y="8" width="3" height="10" rx="0.5" />
          <rect x="16" y="4" width="3" height="14" rx="0.5" />
        </>
      )}
      {name === "pen" && (
        <>
          <path d="M4 20l3-1 11-11a2.1 2.1 0 0 0-3-3l-11 11-1 3z" />
          <path d="M14 6l4 4" />
        </>
      )}
      {name === "mega" && (
        <>
          <path d="M4 10v4a1 1 0 0 0 1 1h3l7 4V5l-7 4H5a1 1 0 0 0-1 1z" />
          <path d="M18 9c1.2 1 1.2 5 0 6" />
        </>
      )}
      {name === "leaf" && (
        <>
          <path d="M5 19C5 10 12 5 20 5c0 8-4 15-13 15a3 3 0 0 1-2-1z" />
          <path d="M5 19c3-5 6-8 10-10" />
        </>
      )}
      {name === "waves" && (
        <>
          <path d="M3 8c2-2 4-2 6 0s4 2 6 0 4-2 6 0" />
          <path d="M3 13c2-2 4-2 6 0s4 2 6 0 4-2 6 0" />
          <path d="M3 18c2-2 4-2 6 0s4 2 6 0 4-2 6 0" />
        </>
      )}
      {name === "bulb" && (
        <>
          <path d="M9 18h6" />
          <path d="M10 21h4" />
          <path d="M12 3a6 6 0 0 0-4 10.5c.8.9 1 1.6 1 2.5v2h6v-2c0-.9.2-1.6 1-2.5A6 6 0 0 0 12 3z" />
        </>
      )}
      {name === "people" && (
        <>
          <circle cx="9" cy="9" r="3" />
          <path d="M3 20c0-3 3-5 6-5s6 2 6 5" />
          <circle cx="17" cy="10" r="2.5" />
          <path d="M14 20c0-2 1.5-3.5 4-3.5s4 1.5 4 3.5" />
        </>
      )}
      {name === "compass" && (
        <>
          <circle cx="12" cy="12" r="9" />
          <path d="M14.5 9.5l-2 5-5 2 2-5z" />
        </>
      )}
      {name === "talk" && (
        <>
          <path d="M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-8l-4 3v-3H6a2 2 0 0 1-2-2z" />
          <path d="M8 10h8M8 13h5" />
        </>
      )}
    </svg>
  );
}

/**
 * Round pill with a filled brand-coloured background and the icon
 * centered inside. Used by service cards and bullets.
 */
const toneBg = {
  navy: "bg-navy-deep text-paper",
  coral: "bg-coral text-navy-deep",
  sky: "bg-sky text-navy-deep",
  teal: "bg-teal text-paper",
  cream: "bg-cream text-navy-deep",
  "navy-soft": "bg-paper/5 ring-1 ring-paper/15 text-coral",
} as const;

type IconTone = keyof typeof toneBg;

export function IconBubble({
  name,
  tone = "navy",
  size = "md",
  className,
}: {
  name: IconKey;
  tone?: IconTone;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const dim = size === "lg" ? "h-16 w-16" : size === "sm" ? "h-10 w-10" : "h-14 w-14";
  const icon = size === "lg" ? 28 : size === "sm" ? 18 : 24;
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-full",
        toneBg[tone],
        dim,
        className,
      )}
    >
      <Icon name={name} size={icon} />
    </span>
  );
}
