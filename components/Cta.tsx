import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { OceanTile } from "@/components/ui/OceanTile";
import { cta } from "@/lib/content";

export function Cta() {
  return (
    <section
      id="contacto"
      className="relative isolate overflow-hidden bg-navy-deep py-24 sm:py-32 text-paper"
    >
      {/* Ocean overlay */}
      <div aria-hidden className="absolute inset-0 opacity-40">
        <OceanTile variant="surface" />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy-deep via-navy-deep/80 to-navy-deep"
      />

      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-6 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-coral">
            <span className="h-px w-7 bg-coral" />
            {cta.eyebrow}
          </p>

          <h2 className="font-display font-extrabold leading-[1.02] tracking-tight text-paper text-[clamp(2.2rem,6vw,4.6rem)]">
            {cta.title.map((l, i) => (
              <span key={i}>
                {l.text}
                {l.em && <em className="not-italic text-coral">{l.em}</em>}
              </span>
            ))}
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-sky">
            {cta.subtitle}
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-8">
            <Button href={cta.cta.href} variant="primary" size="lg">
              {cta.cta.label}
            </Button>
            <a
              href={cta.secondary.href}
              className="text-sm text-sky underline-offset-4 hover:text-coral hover:underline transition-colors"
            >
              {cta.secondary.label}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
