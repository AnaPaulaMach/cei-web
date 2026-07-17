"use client";

import { useState } from "react";
import { XPWindow } from "@/components/cei-os/XPWindow";
import { OpportunityCard } from "@/components/opportunities/OpportunityCard";
import { Badge } from "@/components/ui/Badge";
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
        <XPWindow title="oportunidades/destacada.alert">
          <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="space-y-3">
              <div className="flex flex-wrap gap-2">
                <Badge>Destacada</Badge>
                <Badge>{featured.category}</Badge>
                {featured.isExternal || featured.href?.startsWith("http") ? <Badge>Externo</Badge> : null}
              </div>
              <h2 className="text-3xl font-black text-cei-shadow">{featured.title}</h2>
              <p className="max-w-3xl leading-7 text-slate-800">{featured.description}</p>
              <p className="font-mono text-sm font-bold text-cei-shadow">
                Fuente: {featured.source}
                {featured.deadline ? ` / Límite: ${featured.deadline}` : ""}
              </p>
            </div>
            {featured.href ? (
              <Button href={featured.href}>Abrir destacada</Button>
            ) : (
              <span className="rounded-sm border-2 border-dashed border-cei-shadow bg-white px-4 py-2 font-mono text-sm font-black text-cei-shadow">
                Link pendiente
              </span>
            )}
          </div>
        </XPWindow>
      ) : null}

      <XPWindow title="desktop/Oportunidades">
        <div className="mb-5 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="terminal-text text-sm font-bold uppercase">folder/oportunidades</p>
            <h1 className="text-3xl font-black text-cei-shadow sm:text-4xl">Oportunidades</h1>
            <p className="mt-2 max-w-2xl leading-7 text-slate-800">
              Filtrá por tipo de archivo para encontrar cursos, trabajos, prácticas y becas.
            </p>
          </div>
          <div className="rounded-sm border-2 border-cei-shadow bg-white px-3 py-2 font-mono text-xs font-black text-cei-shadow shadow-pixel">
            {filteredOpportunities.length} elementos
          </div>
        </div>

        <div className="mb-6 flex gap-2 overflow-x-auto pb-2">
          {categories.map((category) => {
            const isActive = category === activeCategory;

            return (
              <button
                className={`shrink-0 rounded-sm border-2 border-cei-shadow px-3 py-2 font-mono text-xs font-black uppercase shadow-pixel transition ${
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
          <div className="rounded-sm border-2 border-dashed border-cei-shadow bg-white p-6 text-center font-mono font-bold text-cei-shadow">
            No hay oportunidades cargadas en esta categoría por ahora.
          </div>
        )}
      </XPWindow>
    </div>
  );
}
