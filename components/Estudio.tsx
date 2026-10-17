import { Container } from "@/components/ui/Container";
import { PhotoCrescent } from "@/components/ui/PhotoCrescent";
import { estudio } from "@/lib/content";

export function Estudio() {
  return (
    <section
      id="estudio"
      className="relative isolate overflow-hidden bg-cream py-24 sm:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[20%] top-[20%] h-[70%] w-[55%] rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, var(--color-sky), transparent 65%)",
        }}
      />

      <Container className="relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <PhotoCrescent variant={estudio.photo.variant} className="mx-auto max-w-[460px] lg:max-w-none" />

          <div>
            <p className="mb-6 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-teal">
              <span className="h-px w-7 bg-teal" />
              {estudio.eyebrow}
            </p>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-[2.6rem] font-extrabold leading-[1.15] tracking-tight text-ink max-w-[30ch]">
              {estudio.title}
            </h2>
            <div className="mt-7 max-w-[52ch] space-y-4">
              {estudio.body.map((p, i) => (
                <p key={i} className="text-base sm:text-lg leading-relaxed text-ink/75">
                  {p}
                </p>
              ))}
            </div>

            <dl className="mt-10 grid gap-y-3 gap-x-8 border-t border-ink/15 pt-6 sm:grid-cols-3">
              {estudio.meta.map((m) => (
                <div key={m.k}>
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/50">{m.k}</dt>
                  <dd className="mt-1 text-sm font-medium text-ink">{m.v}</dd>
                </div>
              ))}
            </dl>

            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.22em] text-coral">
              {estudio.signature}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
