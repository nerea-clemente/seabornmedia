import { Container } from "@/components/ui/Container";
import { CrescentShape } from "@/components/ui/CrescentShape";
import { porQueNicho } from "@/lib/content";

export function PorQueNicho() {
  return (
    <section
      id="por-que-nicho"
      className="relative isolate overflow-hidden bg-paper py-24 sm:py-32"
    >
      <CrescentShape
        variant="fluke"
        tone="teal"
        opacity={0.08}
        className="-right-[15%] top-[5%] h-[70%] w-[50%]"
      />

      <Container className="relative z-10">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-teal">
              <span className="h-px w-7 bg-teal" />
              {porQueNicho.eyebrow}
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.05] tracking-tight text-ink">
              {porQueNicho.title}
            </h2>
            <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-ink/75">
              {porQueNicho.pitch}
            </p>
          </div>

          <ul className="flex flex-col gap-4 self-center">
            {porQueNicho.bullets.map((b, i) => (
              <li
                key={b.title}
                className="rounded-3xl border border-ink/10 bg-cream/50 p-6 sm:p-7"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-sm font-semibold text-coral tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-xl font-extrabold tracking-tight text-ink">
                    {b.title}
                  </h3>
                </div>
                <p className="mt-2 pl-9 text-sm sm:text-base leading-relaxed text-ink/75">
                  {b.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
