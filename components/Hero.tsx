import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CrescentShape } from "@/components/ui/CrescentShape";
import { hero } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-navy-deep text-paper pt-28 pb-24 sm:pt-36 sm:pb-32 lg:min-h-[88vh] lg:flex lg:items-center"
    >
      {/* Ambient crescents */}
      <CrescentShape
        variant="crescent"
        tone="paper"
        opacity={0.07}
        className="-left-[20%] -top-[15%] h-[120%] w-[80%]"
      />
      <CrescentShape
        variant="fluke"
        tone="coral"
        opacity={0.12}
        mirror
        className="-right-[15%] top-[20%] h-[80%] w-[60%]"
      />
      <CrescentShape
        variant="crescent"
        tone="navy"
        opacity={0.5}
        rotate={180}
        className="-bottom-[40%] left-[30%] h-[70%] w-[50%]"
      />

      <Container className="relative z-10">
        <p className="mb-8 inline-flex items-center gap-3 text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-coral">
          <span className="h-px w-8 bg-coral" />
          {hero.eyebrow}
        </p>

        <h1 className="h-display max-w-[18ch] text-paper">
          {hero.title}
        </h1>

        <p className="mt-8 max-w-[52ch] text-lg sm:text-xl leading-relaxed text-sky">
          {hero.subtitle}
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Button href={hero.ctaPrimary.href} variant="primary" size="lg">
            {hero.ctaPrimary.label}
          </Button>
          <Button href={hero.ctaSecondary.href} variant="ghost-light" size="lg">
            {hero.ctaSecondary.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
