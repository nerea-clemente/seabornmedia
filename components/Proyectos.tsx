import { Container } from "@/components/ui/Container";
import { proyectos } from "@/lib/content";

export function Proyectos() {
  return (
    <section
      id="proyectos"
      className="relative bg-paper py-24 sm:py-32"
    >
      <Container>
        <p className="mb-8 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-teal">
          <span className="h-px w-7 bg-teal" />
          {proyectos.eyebrow}
        </p>

        <div className="grid gap-10 lg:grid-cols-2 lg:items-end lg:gap-16 mb-14">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.05] tracking-tight text-ink max-w-[22ch]">
            {proyectos.title}
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-ink/75 max-w-[44ch]">
            {proyectos.subtitle}
          </p>
        </div>

        <ul className="border-t border-ink/15">
          {proyectos.items.map((p) => (
            <li
              key={p.n}
              className="group grid gap-x-8 gap-y-2 border-b border-ink/15 py-6 sm:grid-cols-[5.5rem_12rem_1fr_11rem] sm:items-baseline sm:py-7 transition-colors duration-300 hover:bg-cream/50"
            >
              <span className="font-display text-sm font-semibold tracking-wider text-teal">
                {p.n}
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-ink/60">
                {p.client}
              </span>
              <h3 className="font-display text-lg sm:text-xl font-extrabold leading-snug tracking-tight text-ink max-w-[52ch]">
                {p.title}
              </h3>
              <span className="text-sm text-ink/60 sm:text-right">
                {p.tag}
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
