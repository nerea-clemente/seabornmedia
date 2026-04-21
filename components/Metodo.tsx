import { Container } from "@/components/ui/Container";
import { metodo } from "@/lib/content";

export function Metodo() {
  return (
    <section
      id="metodo"
      className="relative bg-paper py-24 sm:py-32"
    >
      <Container>
        <p className="mb-8 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-coral">
          <span className="h-px w-7 bg-coral" />
          {metodo.eyebrow}
        </p>

        <div className="grid gap-10 lg:grid-cols-2 lg:items-end lg:gap-16 mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.05] tracking-tight text-ink max-w-[20ch]">
            {metodo.title}
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-ink/75 max-w-[44ch]">
            {metodo.intro}
          </p>
        </div>

        <ol className="border-t border-ink/15">
          {metodo.steps.map((step) => (
            <li
              key={step.n}
              className="group grid gap-y-3 gap-x-8 border-b border-ink/15 py-8 sm:grid-cols-[5rem_1fr_1.4fr] sm:items-baseline sm:py-10 transition-[padding] duration-300 hover:pl-3"
            >
              <span className="font-display text-sm font-semibold tracking-wider text-teal">
                {step.n}
              </span>
              <h3 className="font-display text-xl sm:text-2xl lg:text-[1.7rem] font-extrabold leading-tight tracking-tight text-ink">
                {step.title}
              </h3>
              <p className="text-base leading-relaxed text-ink/70 max-w-[48ch]">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
