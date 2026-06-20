import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Concept } from "@/components/site/Concept";
import { CaseStudy } from "@/components/site/CaseStudy";
import { Reflection, Sources, Footer } from "@/components/site/Reflection";
import { cases } from "@/components/site/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Neuropirámide de Romano — Análisis Estratégico: Vans & Starbucks" },
      {
        name: "description",
        content:
          "La Neuropirámide de Romano decodifica cómo los estímulos se transforman en decisiones. Análisis de neuromarketing aplicado a Vans y Starbucks a través de seis niveles.",
      },
      { property: "og:title", content: "Neuropirámide de Romano — Neuromarketing" },
      {
        property: "og:description",
        content:
          "Análisis estratégico de los seis niveles del neuromarketing aplicados a Vans y Starbucks.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Concept />
      {cases.map((c, i) => (
        <CaseStudy key={c.id} data={c} index={i} />
      ))}
      <Reflection />
      <Sources />
      <Footer />
    </main>
  );
}
