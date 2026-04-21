import { Container } from "@/components/ui/Container";
import { CrescentShape } from "@/components/ui/CrescentShape";
import { hero } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-navy-deep text-paper pt-28 pb-24 sm:pt-36 sm:pb-32 lg:min-h-[92vh] lg:flex lg:items-center"
    >
      <CrescentShape
        variant="fluke"
        tone="navy"
        opacity={0.55}
        className="-left-[20%] -top-[10%] h-[120%] w-[80%]"
      />
      <CrescentShape
        variant="crescent"
        tone="coral"
        opacity={0.09}
        mirror
        className="-right-[20%] top-[15%] h-[90%] w-[70%]"
      />

      <Container className="relative z-10">
        <p className="mb-10 inline-flex flex-wrap items-center gap-3 text-xs sm:text-[13px] font-medium uppercase tracking-[0.2em] text-coral">
          <span className="h-px w-8 bg-coral" />
          {hero.eyebrow}
        </p>

        <h1 className="h-display max-w-[22ch] text-paper">
          {hero.titleLines.map((line, i) => (
            <span key={i} className="block">
              {line.text}
              <em className="not-italic text-coral">{line.em}</em>
            </span>
          ))}
        </h1>

        <div className="mt-12 grid max-w-4xl gap-8 sm:gap-12 border-t border-paper/15 pt-8 sm:grid-cols-2">
          <p className="text-base sm:text-lg leading-relaxed text-paper">
            {hero.body[0]}
          </p>
          <p className="text-base sm:text-lg leading-relaxed text-sky">
            {hero.body[1]}
          </p>
        </div>
      </Container>
    </section>
  );
}
