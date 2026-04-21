import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { QueHacemos } from "@/components/QueHacemos";
import { Problema } from "@/components/Problema";
import { Metodo } from "@/components/Metodo";
import { Servicios } from "@/components/Servicios";
import { Proyectos } from "@/components/Proyectos";
import { Nicho } from "@/components/Nicho";
import { Estilo } from "@/components/Estilo";
import { Estudio } from "@/components/Estudio";
import { Cta } from "@/components/Cta";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <QueHacemos />
        <Problema />
        <Metodo />
        <Servicios />
        <Proyectos />
        <Nicho />
        <Estilo />
        <Estudio />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
