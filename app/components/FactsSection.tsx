"use client";

import type { ComponentType } from "react";
import { ShieldCheck, Truck, Users2 } from "lucide-react";
import { useInView } from "./useInView";

export type FactItem = {
  value: string;
  label: string;
  icon: ComponentType<{ size?: number; className?: string }>;
  tone: string;
};

type FactsSectionProps = {
  title?: string;
  intro?: string;
  facts?: FactItem[];
  eyebrow?: string;
};

export const defaultFacts: FactItem[] = [
  { value: "100+", label: "Happy customers", icon: Users2, tone: "bg-blue-600" },
  { value: "100%", label: "Safe delivery focus", icon: ShieldCheck, tone: "bg-orange-600" },
  { value: "Pan-India", label: "Relocation support", icon: Truck, tone: "bg-slate-900" },
];

export default function FactsSection({
  title = "Facts about our moving service",
  intro = "We keep the moving process simple, transparent, and reliable. Every move gets proper planning, trained handling, and communication that helps you stay relaxed while we do the heavy lifting.",
  facts = defaultFacts,
  eyebrow = "Our impact",
}: FactsSectionProps) {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <section ref={ref} className="animate-gradient-shift bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 py-16 text-white md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div
            className={`transition-all duration-1000 ease-out ${isInView ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-300">{eyebrow}</p>
            <h2 className="mt-4 max-w-md text-4xl font-black leading-tight text-white md:text-5xl">{title}</h2>
            <div className="mt-6 h-1 w-24 rounded-full bg-orange-500" />
            <p className="mt-6 max-w-lg text-lg leading-8 text-slate-200">{intro}</p>
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            {facts.map((item, idx) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.label}
                  className={`rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center shadow-sm transition-all duration-1000 ease-out ${
                    isInView ? "translate-y-0 scale-100 opacity-100" : "translate-y-10 scale-[0.94] opacity-0"
                  }`}
                  style={{ transitionDelay: `${160 + idx * 140}ms` }}
                >
                  <div className={`mx-auto mb-5 grid h-16 w-16 place-items-center rounded-2xl text-white shadow-lg shadow-slate-900/15 ${item.tone}`}>
                    <Icon size={24} />
                  </div>
                  <p className="text-4xl font-black text-slate-950">{item.value}</p>
                  <p className="mt-2 text-base text-slate-600">{item.label}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
