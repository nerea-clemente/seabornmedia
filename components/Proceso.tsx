import { Container } from "@/components/ui/Container";
import { CrescentShape } from "@/components/ui/CrescentShape";
import { proceso } from "@/lib/content";

export function Proceso() {
  return (
    <section
      id="proceso"
      className="relative isolate overflow-hidden bg-cream py-24 sm:py-32"
    >
      <CrescentShape
        variant="crescent"
        tone="coral"
        opacity={0.18}
        className="-left-[20%] -top-[20%] h-[70%] w-[55%]"
      />

      <Container className="relative z-10">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-teal">
            <span className="h-px w-7 bg-teal" />
            {proceso.eyebrow}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.05] tracking-tight text-ink">
            {proceso.title}
          </h2>
          <p className="mt-5 text-base sm:text-lg text-ink/70 leading-relaxed">
            {proceso.subtitle}
          </p>
        </div>

        {/* Desktop: horizontal timeline. Mobile: vertical stack. */}
        <ol className="relative mt-16 grid gap-10 lg:grid-cols-4 lg:gap-6">
          {/* connecting dotted line — desktop only */}
          <span
            aria-hidden
            className="hidden lg:block absolute left-0 right-0 top-6 h-px border-t border-dotted border-ink/25"
          />

          {proceso.steps.map((step) => (
            <li key={step.n} className="relative">
              <div className="flex items-center gap-4 lg:block">
                <span className="relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-full bg-coral font-display text-base font-extrabold text-ink ring-4 ring-cream">
                  {step.n}
                </span>
                <h3 className="font-display text-xl font-extrabold tracking-tight text-ink lg:mt-6">
                  {step.title}
                </h3>
              </div>
              <p className="mt-3 max-w-xs text-sm sm:text-base leading-relaxed text-ink/70 lg:pr-4">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
