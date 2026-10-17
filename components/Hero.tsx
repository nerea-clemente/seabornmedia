import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PhotoCrescent } from "@/components/ui/PhotoCrescent";
import { hero } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-navy-deep text-paper pt-28 pb-20 sm:pt-32 lg:pt-36 lg:pb-28"
    >
      {/* Soft ambient coral/sky swells, far behind */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[18%] -top-[18%] h-[120%] w-[70%] rounded-full opacity-25"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, var(--color-sky), transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[6%] bottom-[-25%] h-[70%] w-[55%] rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, var(--color-coral), transparent 65%)",
        }}
      />

      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-10">
          {/* Left: text */}
          <div>
            <p className="mb-7 inline-flex items-center gap-3 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-coral">
              <span className="h-px w-7 bg-coral" />
              {hero.eyebrow}
            </p>

            <h1 className="font-display font-extrabold leading-[0.96] tracking-tight text-paper text-[clamp(2.6rem,7.5vw,5.4rem)] max-w-[18ch]">
              {hero.titleLines.map((l, i) => (
                <span key={i} className="block">
                  {l.text}
                  <em className="not-italic text-coral">{l.em}</em>
                </span>
              ))}
            </h1>

            <p className="mt-7 max-w-[52ch] text-base sm:text-lg leading-relaxed text-sky">
              {hero.body}
            </p>

            <div className="mt-9">
              <Button href={hero.cta.href} variant="primary" size="lg">
                {hero.cta.label}
              </Button>
            </div>
          </div>

          {/* Right: photo crescent */}
          <div className="relative mx-auto w-full max-w-[520px] lg:max-w-none">
            <PhotoCrescent variant={hero.photo.variant} />
          </div>
        </div>

        {/* Bottom pill strip */}
        <ul className="mt-16 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-paper/15 pt-6 text-xs font-semibold uppercase tracking-[0.18em] text-sky lg:mt-24">
          {hero.pills.map((p, i) => (
            <li key={p} className="flex items-center gap-6">
              <span>{p}</span>
              {i < hero.pills.length - 1 && (
                <span aria-hidden className="hidden h-px w-6 bg-paper/25 sm:inline-block" />
              )}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
