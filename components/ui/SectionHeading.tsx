import { cn } from "@/lib/cn";

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  tone = "dark",
  className,
}: Props) {
  const onLight = tone === "dark";
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-5 text-xs font-semibold uppercase tracking-[0.18em]",
            onLight ? "text-coral" : "text-coral",
          )}
        >
          <span className="mr-3 inline-block h-px w-7 align-middle bg-current" />
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-display font-extrabold leading-[1.02] tracking-tight",
          "text-3xl sm:text-4xl lg:text-5xl",
          onLight ? "text-ink" : "text-paper",
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-5 text-base sm:text-lg leading-relaxed max-w-2xl",
            align === "center" && "mx-auto",
            onLight ? "text-ink/70" : "text-sky",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
