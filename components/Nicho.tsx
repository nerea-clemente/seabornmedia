import { Container } from "@/components/ui/Container";
import { CrescentShape } from "@/components/ui/CrescentShape";
import { nicho } from "@/lib/content";

export function Nicho() {
  return (
    <section
      id="nicho"
      className="relative isolate overflow-hidden bg-cream py-24 sm:py-32"
    >
      <CrescentShape
        variant="fluke"
        tone="coral"
        opacity={0.2}
        className="-right-[15%] -top-[10%] h-[80%] w-[55%]"
      />

      <Container className="relative z-10">
        <p className="mb-8 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-ink/70">
          <span className="h-px w-7 bg-ink/40" />
          {nicho.eyebrow}
        </p>

        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-20">
          <h2 className="h-display text-ink">
            {nicho.title.map((line, i) => (
              <span key={i}>
                {line.text}
                <em className="not-italic border-b-[0.18em] border-ink pb-[0.05em]">
                  {line.em}
                </em>
              </span>
            ))}
          </h2>

          <div className="max-w-[46ch] space-y-4">
            {nicho.body.map((p, i) => (
              <p key={i} className="text-base sm:text-lg leading-relaxed text-ink/80">
                {p}
              </p>
            ))}
            <p className="pt-2">
              <strong className="inline-block rounded-md bg-ink px-2 py-0.5 text-paper font-semibold">
                {nicho.punchline}
              </strong>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
