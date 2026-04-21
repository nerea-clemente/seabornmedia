import { Container } from "@/components/ui/Container";
import { CrescentShape } from "@/components/ui/CrescentShape";
import { problema } from "@/lib/content";

export function Problema() {
  return (
    <section
      id="problema"
      className="relative isolate overflow-hidden bg-navy-deep text-paper py-24 sm:py-32"
    >
      <CrescentShape
        variant="fluke"
        tone="navy"
        opacity={0.5}
        mirror
        className="-right-[25%] bottom-[-30%] h-[100%] w-[70%]"
      />

      <Container className="relative z-10">
        <p className="mb-8 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-coral">
          <span className="h-px w-7 bg-coral" />
          {problema.eyebrow}
        </p>

        <h2 className="h-display max-w-[18ch] text-paper">
          {problema.title.map((line, i) => (
            <span key={i} className="block">
              {line.text}
              <em className="not-italic text-coral">{line.em}</em>
            </span>
          ))}
        </h2>

        <div className="mt-14 grid gap-10 border-t border-paper/15 pt-10 sm:gap-8 lg:grid-cols-3">
          {problema.items.map((item) => (
            <div key={item.n}>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-teal">
                {item.n} — {item.label}
              </p>
              <p className="text-base leading-relaxed text-sky">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
