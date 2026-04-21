import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { ParaQuien } from "@/components/ParaQuien";
import { Servicios } from "@/components/Servicios";
import { PorQueNicho } from "@/components/PorQueNicho";
import { Proceso } from "@/components/Proceso";
import { Contacto } from "@/components/Contacto";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ParaQuien />
        <Servicios />
        <PorQueNicho />
        <Proceso />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
