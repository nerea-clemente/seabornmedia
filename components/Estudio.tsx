import { Container } from "@/components/ui/Container";
import { CrescentShape } from "@/components/ui/CrescentShape";
import { estudio } from "@/lib/content";

export function Estudio() {
  return (
    <section
      id="estudio"
      className="relative isolate overflow-hidden bg-navy-deep text-paper py-24 sm:py-32"
    >
      <CrescentShape
        variant="fluke"
        tone="navy"
        opacity={0.4}
        className="left-[30%] -top-[25%] h-[90%] w-[60%]"
      />

      <Container className="relative z-10">
        <p className="mb-8 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-coral">
          <span className="h-px w-7 bg-coral" />
          {estudio.eyebrow}
        </p>

        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:gap-16">
          {/* Portrait placeholder — abstract gradient, no stock photo */}
          <div
            className="relative aspect-[4/5] overflow-hidden rounded-3xl"
            aria-hidden
            style={{
              background: `
                radial-gradient(circle at 35% 30%, var(--color-coral), transparent 55%),
                radial-gradient(circle at 75% 75%, var(--color-teal), transparent 50%),
                linear-gradient(160deg, var(--color-sky), #7ba6b8)
              `,
            }}
          >
            <span className="absolute bottom-5 right-5 text-xs font-semibold tracking-[0.2em] text-ink">
              {estudio.initials}
            </span>
          </div>

          <div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-[2.6rem] font-extrabold leading-[1.15] tracking-tight text-paper max-w-[30ch]">
              {estudio.title}
            </h2>
            <div className="mt-8 space-y-4 max-w-[50ch]">
              {estudio.body.map((p, i) => (
                <p key={i} className="text-base sm:text-lg leading-relaxed text-sky">
                  {p}
                </p>
              ))}
            </div>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.22em] text-coral">
              {estudio.signature}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
