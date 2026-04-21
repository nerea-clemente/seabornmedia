import { Container } from "@/components/ui/Container";
import { estilo } from "@/lib/content";
import { cn } from "@/lib/cn";

const accents: Record<string, string> = {
  ink: "border-ink",
  coral: "border-coral",
  teal: "border-teal",
};

export function Estilo() {
  return (
    <section id="estilo" className="relative bg-paper py-24 sm:py-32">
      <Container>
        <p className="mb-8 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-teal">
          <span className="h-px w-7 bg-teal" />
          {estilo.eyebrow}
        </p>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.05] tracking-tight text-ink max-w-[22ch]">
          {estilo.title}
        </h2>

        <div className="mt-14 grid gap-8 sm:gap-10 lg:grid-cols-3">
          {estilo.cards.map((c) => (
            <div
              key={c.title}
              className={cn(
                "border-t-[3px] pt-6",
                accents[c.accent] ?? "border-ink",
              )}
            >
              <h3 className="font-display text-xl sm:text-2xl font-extrabold tracking-tight leading-tight text-ink">
                {c.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-ink/75 max-w-[38ch]">
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
