import { site } from "@/lib/content";
import { cn } from "@/lib/cn";

const sizes = {
  sm: "text-lg",
  md: "text-2xl",
  lg: "text-3xl",
};

export function Wordmark({
  size = "md",
  className,
  tone = "light",
}: {
  size?: keyof typeof sizes;
  className?: string;
  tone?: "light" | "dark";
}) {
  const onDark = tone === "light";
  return (
    <span
      className={cn(
        "inline-flex items-baseline font-display font-extrabold leading-none tracking-tight",
        sizes[size],
        onDark ? "text-paper" : "text-ink",
        className,
      )}
    >
      <span className="font-light">{site.wordmark.soft}</span>
      <span>{site.wordmark.bold}</span>
      <sup className="ml-1 text-[0.45em] font-medium text-coral align-super">
        {site.wordmark.super}
      </sup>
    </span>
  );
}
