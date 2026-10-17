import { Container } from "@/components/ui/Container";
import { PhotoCrescent } from "@/components/ui/PhotoCrescent";
import { IconBubble, type IconKey } from "@/components/ui/Icon";
import { hablamos } from "@/lib/content";

export function Hablamos() {
  return (
    <section
      id="nosotras"
      className="relative isolate overflow-hidden bg-navy-deep py-24 sm:py-32 text-paper"
    >
      {/* ambient coral far right */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-[20%] top-[15%] h-[80%] w-[55%] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, var(--color-coral), transparent 65%)",
        }}
      />

      <Container className="relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          {/* Left: photo crescent (mirrored) */}
          <div className="order-last lg:order-first">
            <PhotoCrescent variant={hablamos.photo.variant} mirror className="mx-auto max-w-[520px] lg:max-w-none" />
          </div>

          {/* Right: text + bullets */}
          <div>
            <p className="mb-6 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-coral">
              <span className="h-px w-7 bg-coral" />
              {hablamos.eyebrow}
            </p>

            <h2 className="font-display font-extrabold leading-[1.08] tracking-tight text-paper text-3xl sm:text-4xl lg:text-5xl max-w-[18ch]">
              {hablamos.title.map((l, i) => (
                <span key={i}>
                  {l.text}
                  {l.em && <em className="not-italic text-coral">{l.em}</em>}
                </span>
              ))}
            </h2>

            <p className="mt-6 max-w-[48ch] text-base sm:text-lg leading-relaxed text-sky">
              {hablamos.body}
            </p>

            <ul className="mt-10 space-y-6">
              {hablamos.bullets.map((b) => (
                <li key={b.title} className="flex items-start gap-5">
                  <IconBubble name={b.icon as IconKey} tone="navy-soft" size="md" />
                  <div>
                    <h3 className="font-display text-base font-extrabold tracking-tight text-paper">
                      {b.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-sky max-w-[42ch]">
                      {b.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
