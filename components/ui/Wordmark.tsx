import { site } from "@/lib/content";
import { BrandMark } from "@/components/ui/BrandMark";
import { cn } from "@/lib/cn";

const sizes = {
  sm: { font: "text-xl", logo: 32 },
  md: { font: "text-2xl", logo: 40 },
  lg: { font: "text-3xl", logo: 52 },
};

/**
 * Full brand lockup: circular mark + "SeaBorn" with coral "media"
 * superscript, matching the Canva corporate deck.
 */
export function Wordmark({
  size = "md",
  className,
  tone = "light",
}: {
  size?: keyof typeof sizes;
  className?: string;
  tone?: "light" | "dark";
}) {
  const s = sizes[size];
  const text = tone === "light" ? "text-sky" : "text-ink";
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <BrandMark size={s.logo} />
      <span
        className={cn(
          "font-display font-extrabold leading-none tracking-tight",
          s.font,
          text,
        )}
      >
        <span className="font-light">{site.wordmark.soft}</span>
        <span>{site.wordmark.bold}</span>
        <sup className="ml-0.5 align-super text-[0.42em] font-semibold text-coral">
          {site.wordmark.super}
        </sup>
      </span>
    </span>
  );
}
