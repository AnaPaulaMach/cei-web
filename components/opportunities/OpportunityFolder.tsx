"use client";

import { useState } from "react";
import { OpportunityCard } from "@/components/opportunities/OpportunityCard";
import { Button } from "@/components/ui/Button";
import type { OpportunityItem } from "@/types/opportunities";

const categories = ["Todas", "Curso", "Trabajo", "Prácticas", "Becas"];

function matchesCategory(opportunityCategory: string, activeCategory: string) {
  if (activeCategory === "Todas") {
    return true;
  }

  const normalizedCategory = opportunityCategory.toLowerCase();

  if (activeCategory === "Prácticas") {
    return (
      normalizedCategory.includes("práctica") ||
      normalizedCategory.includes("practica") ||
      normalizedCategory.includes("pasant")
    );
  }

  if (activeCategory === "Becas") {
    return normalizedCategory.includes("beca");
  }

  return opportunityCategory === activeCategory;
}

type OpportunityFolderProps = {
  opportunities: OpportunityItem[];
};

export function OpportunityFolder({ opportunities }: OpportunityFolderProps) {
  const [activeCategory, setActiveCategory] = useState("Todas");
  const featured = opportunities.find((opportunity) => opportunity.highlighted);

  const filteredOpportunities =
    activeCategory === "Todas"
      ? opportunities
      : opportunities.filter((opportunity) => matchesCategory(opportunity.category, activeCategory));

  return (
    <div className="space-y-6">
      {featured ? (
        <section className="rounded-sm bg-[#fff7c2] p-4 sm:p-6">
          <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="font-mono text-xs font-black uppercase text-cei-shadow">{featured.category} destacada</p>
              <h2 className="mt-2 font-mono text-2xl font-black text-cei-shadow sm:text-3xl">{featured.title}</h2>
              <p className="mt-3 max-w-3xl leading-7 text-slate-800">{featured.description}</p>
              <p className="mt-3 font-mono text-xs font-bold text-cei-shadow/80">
                Fuente: {featured.source}
                {featured.deadline ? ` · Límite: ${featured.deadline}` : ""}
              </p>
            </div>
            {featured.href ? (
              <Button href={featured.href}>Abrir oportunidad</Button>
            ) : (
              <span className="w-fit rounded-sm bg-white px-4 py-2 font-mono text-sm font-black text-cei-shadow">
                Link pendiente
              </span>
            )}
          </div>
        </section>
      ) : null}

      <section className="rounded-sm bg-cei-window/95 p-4 sm:p-6">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-mono text-2xl font-black text-cei-shadow sm:text-3xl">Todas las oportunidades</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-700">
              Filtrá por cursos, trabajos, prácticas o becas.
            </p>
          </div>
          <p className="font-mono text-xs font-black text-cei-shadow/70">{filteredOpportunities.length} resultados</p>
        </div>

        <div className="mb-6 flex gap-2 overflow-x-auto pb-2">
          {categories.map((category) => {
            const isActive = category === activeCategory;

            return (
              <button
                className={`min-h-10 shrink-0 rounded-sm border border-cei-shadow/35 px-3 py-2 font-mono text-xs font-black uppercase transition ${
                  isActive ? "bg-cei-alert text-cei-shadow" : "bg-white text-cei-shadow hover:bg-cei-window"
                }`}
                key={category}
                onClick={() => setActiveCategory(category)}
                type="button"
              >
                {category}
              </button>
            );
          })}
        </div>

        {filteredOpportunities.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {filteredOpportunities.map((opportunity) => (
              <OpportunityCard key={opportunity.id} opportunity={opportunity} />
            ))}
          </div>
        ) : (
          <div className="rounded-sm bg-white p-6 text-center font-mono font-bold text-cei-shadow">
            No hay oportunidades cargadas en esta categoría por ahora.
          </div>
        )}
      </section>
    </div>
  );
}
