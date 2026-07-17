"use client";

import { useState } from "react";
import { XPWindow } from "@/components/cei-os/XPWindow";
import { OpportunityCard } from "@/components/opportunities/OpportunityCard";
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
  const orderedOpportunities = [...opportunities].sort(
    (a, b) => Number(Boolean(b.highlighted)) - Number(Boolean(a.highlighted))
  );
  const filteredOpportunities =
    activeCategory === "Todas"
      ? orderedOpportunities
      : orderedOpportunities.filter((opportunity) => matchesCategory(opportunity.category, activeCategory));

  return (
    <XPWindow title="novedades/oportunidades">
      <div className="mb-5 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="terminal-text text-sm font-bold uppercase">Cursos y búsquedas</p>
          <h2 className="text-3xl font-black text-cei-shadow sm:text-4xl">Oportunidades</h2>
        </div>
        <div className="rounded-sm border border-cei-shadow/50 bg-white/80 px-3 py-2 font-mono text-xs font-black text-cei-shadow">
          {filteredOpportunities.length} elementos
        </div>
      </div>

      <div aria-label="Filtrar oportunidades" className="mb-6 flex gap-2 overflow-x-auto pb-2" role="group">
        {categories.map((category) => {
          const isActive = category === activeCategory;

          return (
            <button
              aria-pressed={isActive}
              className={`min-h-11 shrink-0 rounded-sm border border-cei-shadow/60 px-3 font-mono text-xs font-black uppercase transition ${
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
        <div className="rounded-sm border border-dashed border-cei-shadow bg-white p-6 text-center font-mono font-bold text-cei-shadow">
          No hay oportunidades cargadas en esta categoría por ahora.
        </div>
      )}
    </XPWindow>
  );
}
