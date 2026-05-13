"use client";

import Link from "next/link";
import { useInView } from "./useInView";
import { services } from "./serviceData";

export default function Services() {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <section ref={ref} className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2
            className={`text-4xl font-bold text-slate-900 transition-all duration-1000 ease-out md:text-5xl ${
              isInView ? "translate-y-0 opacity-100 blur-0" : "translate-y-10 opacity-0 blur-[2px]"
            }`}
          >
            Our Core Services
          </h2>
          <p
            className={`mx-auto mt-4 max-w-3xl text-lg text-slate-600 transition-all duration-1000 ease-out ${
              isInView ? "translate-y-0 opacity-100 blur-0" : "translate-y-10 opacity-0 blur-[2px]"
            }`}
            style={{ transitionDelay: "220ms" }}
          >
            Premium moving support for household shifting, office relocation, loading, storage, and vehicle transport.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className={`group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-1000 ease-out hover:-translate-y-1 hover:shadow-xl ${
                  isInView ? "translate-y-0 scale-100 opacity-100 blur-0" : "translate-y-12 scale-[0.97] opacity-0 blur-[2px]"
                }`}
                style={{ transitionDelay: `${180 + idx * 140}ms` }}
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-all duration-700 ease-out group-hover:opacity-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-slate-950/65" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-slate-950/10" />
                </div>

                <div
                  className={`relative z-10 inline-flex rounded-xl p-3 text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-white/15 ${item.accent}`}
                >
                  <Icon size={24} />
                </div>
                <h3 className="relative z-10 mt-5 text-xl font-bold text-slate-900 transition-colors duration-500 group-hover:text-white">
                  {item.title}
                </h3>
                <p className="relative z-10 mt-3 text-slate-600 transition-colors duration-500 group-hover:text-slate-100">
                  {item.desc}
                </p>
                <div className="relative z-10 mt-6 h-1 w-16 rounded-full bg-orange-500 transition-colors duration-500 group-hover:bg-white" />
              </article>
            );
          })}
        </div>

        <div
          className={`mt-10 text-center transition-all duration-1000 ease-out ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "320ms" }}
        >
          <Link
            href="/services/household"
            className="rounded-lg bg-orange-600 px-8 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-700 hover:shadow-lg hover:shadow-orange-500/30"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
