import { cn } from "@/lib/cn";

type Tone = "navy" | "cream" | "paper" | "navy-darker";

const tones: Record<Tone, string> = {
  navy: "bg-navy-deep text-paper border border-paper/10",
  "navy-darker": "bg-navy-darker text-paper border border-paper/10",
  cream: "bg-cream text-ink border border-ink/5",
  paper: "bg-paper text-ink border border-ink/10",
};

export function Card({
  children,
  tone = "navy-darker",
  className,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
  as?: React.ElementType;
}) {
  return (
    <Tag
      className={cn(
        "rounded-3xl p-7 sm:p-8 transition-transform duration-300 ease-out",
        tones[tone],
        className,
      )}
    >
      {children}
    </Tag>
  );
}
