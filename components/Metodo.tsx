import { Container } from "@/components/ui/Container";
import { metodo } from "@/lib/content";
import { cn } from "@/lib/cn";

const toneBg = {
  navy: "bg-navy-deep text-paper",
  coral: "bg-coral text-navy-deep",
  sky: "bg-sky text-navy-deep",
  teal: "bg-teal text-paper",
} as const;

export function Metodo() {
  return (
    <section id="metodo" className="relative bg-cream py-24 sm:py-32">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:gap-16 mb-16">
          <div>
            <p className="mb-6 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-ink/60">
              <span className="h-px w-7 bg-ink/40" />
              {metodo.eyebrow}
            </p>
            <h2 className="font-display font-extrabold leading-[1.05] tracking-tight text-ink text-3xl sm:text-4xl lg:text-5xl max-w-[18ch]">
              {metodo.title.map((l, i) => (
                <span key={i}>
                  {l.text}
                  {l.em && <em className="not-italic text-coral">{l.em}</em>}
                </span>
              ))}
            </h2>
          </div>
          <div className="lg:pb-3">
            <p className="text-base sm:text-lg leading-relaxed text-ink/70 max-w-[46ch]">
              {metodo.intro}
            </p>
          </div>
        </div>

        <ol className="relative grid gap-12 lg:grid-cols-4 lg:gap-8">
          {/* Dotted connector line, desktop only */}
          <span
            aria-hidden
            className="absolute left-0 right-0 top-7 hidden h-px border-t border-dashed border-ink/25 lg:block"
          />
          {metodo.steps.map((step) => (
            <li key={step.n} className="relative">
              <div className="flex items-center gap-5 lg:block">
                <span
                  className={cn(
                    "relative z-10 inline-flex h-14 w-14 items-center justify-center rounded-full font-display text-base font-extrabold ring-4 ring-cream",
                    toneBg[step.tone],
                  )}
                >
                  {step.n}
                </span>
                <h3 className="font-display text-lg sm:text-xl font-extrabold tracking-tight text-ink lg:mt-6">
                  {step.title}
                </h3>
              </div>
              <p className="mt-3 max-w-[26ch] text-sm leading-relaxed text-ink/70">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
