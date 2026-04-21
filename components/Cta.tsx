import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { cta } from "@/lib/content";

export function Cta() {
  return (
    <section
      id="contacto"
      className="relative bg-coral py-24 sm:py-32 text-ink"
    >
      <Container>
        <div className="max-w-[26ch]">
          <p className="mb-8 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-ink">
            <span className="h-px w-7 bg-ink" />
            {cta.eyebrow}
          </p>

          <h2 className="h-display text-ink">{cta.title}</h2>

          <p className="mt-8 max-w-[46ch] text-base sm:text-lg leading-relaxed text-ink/80">
            {cta.subtitle}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Button href={`mailto:${cta.emailLabel}`} variant="primary" size="lg" className="bg-ink text-paper hover:bg-ink/90">
              {cta.emailLabel}
            </Button>
            <a
              href="tel:+34635369915"
              className="border-b border-ink pb-1 text-base font-medium text-ink hover:opacity-70 transition-opacity"
            >
              {cta.telLabel}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
