import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Servicios } from "@/components/Servicios";
import { Hablamos } from "@/components/Hablamos";
import { Metodo } from "@/components/Metodo";
import { Proyectos } from "@/components/Proyectos";
import { Estudio } from "@/components/Estudio";
import { Cta } from "@/components/Cta";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Servicios />
        <Hablamos />
        <Metodo />
        <Proyectos />
        <Estudio />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
