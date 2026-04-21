/**
 * Inline SVG icons for service cards. Line style, 1.5 stroke, no fills.
 * Strictly geometric — no fish, no waves, no anchors.
 */

type IconKey = "feed" | "pen" | "spark" | "compass" | "talk" | "grid";

const props = {
  width: 28,
  height: 28,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function ServiceIcon({ name, className }: { name: IconKey; className?: string }) {
  return (
    <svg {...props} className={className}>
      {name === "feed" && (
        <>
          <rect x="3" y="3" width="18" height="18" rx="4" />
          <path d="M3 9h18" />
          <circle cx="6.5" cy="6" r="0.6" fill="currentColor" />
          <circle cx="9" cy="6" r="0.6" fill="currentColor" />
          <path d="M7 13h10M7 16.5h6" />
        </>
      )}
      {name === "pen" && (
        <>
          <path d="M4 20l3.5-1 11-11a2.1 2.1 0 0 0-3-3l-11 11L4 20z" />
          <path d="M14 6l4 4" />
        </>
      )}
      {name === "spark" && (
        <>
          <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
          <circle cx="12" cy="12" r="2.5" />
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
          <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v8A2.5 2.5 0 0 1 17.5 17H10l-4 3v-3H6.5A2.5 2.5 0 0 1 4 14.5z" />
          <path d="M8 9h8M8 12h5" />
        </>
      )}
      {name === "grid" && (
        <>
          <rect x="3" y="3" width="7" height="7" rx="2" />
          <rect x="14" y="3" width="7" height="7" rx="2" />
          <rect x="3" y="14" width="7" height="7" rx="2" />
          <rect x="14" y="14" width="7" height="7" rx="2" />
        </>
      )}
    </svg>
  );
}

export type { IconKey };
