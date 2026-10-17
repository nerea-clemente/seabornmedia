import { Container } from "@/components/ui/Container";
import { IconBubble, type IconKey } from "@/components/ui/Icon";
import { servicios } from "@/lib/content";

export function Servicios() {
  return (
    <section id="servicios" className="relative bg-cream py-24 sm:py-32">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:gap-16 mb-16">
          <div>
            <p className="mb-6 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-ink/60">
              <span className="h-px w-7 bg-ink/40" />
              {servicios.eyebrow}
            </p>
            <h2 className="font-display font-extrabold leading-[1.05] tracking-tight text-ink text-3xl sm:text-4xl lg:text-5xl max-w-[22ch]">
              {servicios.title.map((l, i) => (
                <span key={i}>
                  {l.text}
                  {l.em && <em className="not-italic text-coral">{l.em}</em>}
                </span>
              ))}
            </h2>
          </div>
          <div className="lg:pb-3">
            <p className="text-base sm:text-lg leading-relaxed text-ink/75 max-w-[46ch]">
              {servicios.subtitle}
            </p>
          </div>
        </div>

        <ul className="grid gap-y-14 gap-x-10 sm:grid-cols-2 lg:grid-cols-4">
          {servicios.items.map((s) => (
            <li key={s.title} className="group">
              <IconBubble name={s.icon as IconKey} tone={s.tone} size="lg" />
              <h3 className="mt-6 font-display text-xl font-extrabold tracking-tight leading-tight text-ink">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/70 max-w-[26ch]">
                {s.body}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
