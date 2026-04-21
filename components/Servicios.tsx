import { Container } from "@/components/ui/Container";
import { CrescentShape } from "@/components/ui/CrescentShape";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceIcon, type IconKey } from "@/components/ServiceIcon";
import { servicios } from "@/lib/content";

export function Servicios() {
  return (
    <section
      id="servicios"
      className="relative isolate overflow-hidden bg-navy-deep py-24 sm:py-32 text-paper"
    >
      <CrescentShape
        variant="crescent"
        tone="navy"
        opacity={0.5}
        className="-right-[20%] -top-[15%] h-[100%] w-[70%]"
        rotate={45}
      />
      <CrescentShape
        variant="fluke"
        tone="paper"
        opacity={0.05}
        mirror
        className="left-[5%] bottom-[-30%] h-[80%] w-[60%]"
      />

      <Container className="relative z-10">
        <SectionHeading
          eyebrow={servicios.eyebrow}
          title={servicios.title}
          subtitle={servicios.subtitle}
          tone="light"
        />

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {servicios.items.map((s) => (
            <li
              key={s.title}
              className="group rounded-3xl bg-navy-darker/80 p-7 ring-1 ring-paper/10 transition-all duration-300 hover:ring-coral/60 hover:-translate-y-1"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-paper/5 text-coral ring-1 ring-paper/10">
                <ServiceIcon name={s.icon as IconKey} />
              </span>
              <h3 className="mt-6 font-display text-xl font-extrabold tracking-tight text-paper">
                {s.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-sky">{s.body}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
