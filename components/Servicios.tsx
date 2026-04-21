import { Container } from "@/components/ui/Container";
import { CrescentShape } from "@/components/ui/CrescentShape";
import { servicios } from "@/lib/content";

export function Servicios() {
  return (
    <section
      id="servicios"
      className="relative isolate overflow-hidden bg-sky/40 py-24 sm:py-32"
    >
      <CrescentShape
        variant="crescent"
        tone="paper"
        opacity={0.35}
        className="-right-[15%] -top-[10%] h-[70%] w-[55%]"
      />

      <Container className="relative z-10">
        <p className="mb-8 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-ink">
          <span className="h-px w-7 bg-ink" />
          {servicios.eyebrow}
        </p>

        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.05] tracking-tight text-ink max-w-[22ch]">
          {servicios.title}
        </h2>

        <ul className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2">
          {servicios.items.map((s) => (
            <li key={s.title} className="border-t border-ink/25 pt-5">
              <h3 className="font-display text-xl sm:text-2xl font-extrabold tracking-tight leading-tight text-ink">
                {s.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-ink/75 max-w-[38ch]">
                {s.body}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
