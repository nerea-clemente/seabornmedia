import { Container } from "@/components/ui/Container";
import { CrescentShape } from "@/components/ui/CrescentShape";
import { Button } from "@/components/ui/Button";
import { contacto } from "@/lib/content";

export function Contacto() {
  return (
    <section
      id="contacto"
      className="relative isolate overflow-hidden bg-navy-deep py-24 sm:py-32 text-paper"
    >
      <CrescentShape
        variant="fluke"
        tone="coral"
        opacity={0.14}
        className="-right-[15%] -top-[20%] h-[80%] w-[55%]"
      />
      <CrescentShape
        variant="crescent"
        tone="navy"
        opacity={0.55}
        className="-left-[10%] bottom-[-30%] h-[80%] w-[55%]"
      />

      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-coral">
            <span className="h-px w-7 bg-coral" />
            {contacto.eyebrow}
          </p>
          <h2 className="h-display text-paper">{contacto.title}</h2>
          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-sky leading-relaxed">
            {contacto.subtitle}
          </p>

          <div className="mt-10 flex justify-center">
            <Button href={contacto.cta.href} variant="primary" size="lg">
              {contacto.cta.label}
            </Button>
          </div>
        </div>

        <ul className="mx-auto mt-16 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contacto.blocks.map((b) => (
            <li
              key={b.label}
              className="rounded-3xl border border-paper/15 bg-navy-darker/70 p-6 text-left transition-colors hover:border-coral/60"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-coral">
                {b.label}
              </p>
              <a
                href={b.href}
                className="mt-3 block break-words text-base font-medium text-paper hover:text-coral transition-colors"
                {...(b.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
              >
                {b.value}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
