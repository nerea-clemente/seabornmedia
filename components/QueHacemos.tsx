import { Container } from "@/components/ui/Container";
import { queHacemos } from "@/lib/content";

export function QueHacemos() {
  return (
    <section
      id="que-hacemos"
      className="relative bg-paper py-24 sm:py-32"
    >
      <Container>
        <p className="mb-8 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-teal">
          <span className="h-px w-7 bg-teal" />
          {queHacemos.eyebrow}
        </p>

        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-end lg:gap-20">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1] tracking-tight text-ink max-w-[22ch]">
            {queHacemos.lede}
          </h2>
          <div className="space-y-4 max-w-[44ch]">
            {queHacemos.body.map((p, i) => (
              <p key={i} className="text-base sm:text-lg leading-relaxed text-ink/75">
                {p}
              </p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
