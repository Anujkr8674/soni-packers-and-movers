"use client";

import { MapPin } from "lucide-react";
import { useInView } from "./useInView";

type ServiceCoverageSectionProps = {
  heading: string;
  intro: string;
  local: string[];
  intercity: string[];
  promise: string;
};

export default function ServiceCoverageSection({
  heading,
  intro,
  local,
  intercity,
  promise,
}: ServiceCoverageSectionProps) {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <section ref={ref} className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
          <div
            className={`rounded-3xl bg-slate-900 p-6 text-white shadow-2xl shadow-slate-900/15 transition-all duration-1000 ease-out ${
              isInView ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-300">Where We Operate in Jharkhand</p>
            <h2 className="mt-3 text-3xl font-black leading-tight md:text-4xl">{heading}</h2>
            <p className="mt-4 max-w-xl text-slate-300">{intro}</p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {local.map((city, idx) => (
                <div
                  key={city}
                  className={`flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm transition-all duration-1000 ease-out ${
                    isInView ? "translate-x-0 opacity-100" : idx % 2 === 0 ? "-translate-x-8 opacity-0" : "translate-x-8 opacity-0"
                  }`}
                  style={{ transitionDelay: `${180 + idx * 70}ms` }}
                >
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-orange-500 text-sm font-bold text-white">
                    <MapPin size={14} />
                  </span>
                  <span className="font-medium text-white">{city}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-1000 ease-out ${
              isInView ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
          >
            <h3 className="text-2xl font-bold text-slate-950">Service coverage snapshot</h3>
            <p className="mt-3 leading-7 text-slate-600">
              From Ranchi and nearby localities to key Jharkhand cities, we help families and businesses relocate with the
              same care and timing.
            </p>

            <div className="mt-6 grid gap-4">
              <div className="rounded-2xl bg-orange-50 p-5 transition-transform duration-500 hover:-translate-y-1">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-700">Local moves</p>
                <p className="mt-2 text-slate-700">{local.join(", ")}.</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 transition-transform duration-500 hover:-translate-y-1">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-700">Intercity routes</p>
                <p className="mt-2 text-slate-700">{intercity.join(", ")}.</p>
              </div>
              <div className="rounded-2xl bg-slate-900 p-5 text-white transition-transform duration-500 hover:-translate-y-1">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-300">Support promise</p>
                <p className="mt-2 text-slate-200">{promise}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
