import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "ghost" | "ghost-light";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 ease-out whitespace-nowrap select-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-coral text-ink hover:bg-[#ed8c70] hover:-translate-y-0.5 shadow-[0_1px_0_rgba(0,0,0,0.04)]",
  ghost:
    "border border-ink/15 text-ink hover:border-ink/40 hover:bg-ink/[0.03]",
  "ghost-light":
    "border border-paper/30 text-paper hover:border-paper/70 hover:bg-paper/5",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  external?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  external,
}: Props) {
  const cls = cn(base, variants[variant], sizes[size], className);

  if (external || href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("http")) {
    return (
      <a href={href} className={cls} {...(external ? { target: "_blank", rel: "noreferrer" } : {})}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
