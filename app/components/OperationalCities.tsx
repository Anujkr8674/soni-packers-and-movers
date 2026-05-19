import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

import type { OperationalCity } from "@/lib/operational-cities";

type OperationalCitiesProps = {
  title?: string;
  subtitle?: string;
  cities: OperationalCity[];
};

export default function OperationalCities({
  title = "Operational Cities",
  subtitle = "Quick access to our most important service locations. Each city can open its own URL for SEO-friendly landing pages.",
  cities,
}: OperationalCitiesProps) {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-700">Location network</p>
          <h2 className="mt-3 text-3xl font-black text-slate-950 md:text-5xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">{subtitle}</p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cities.map((city, index) => (
            <Link
              key={city.slug}
              href={city.href}
              className="group flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-500/10"
              style={{ animationDelay: `${index * 45}ms` }}
            >
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-orange-50 text-orange-600 transition-colors group-hover:bg-orange-600 group-hover:text-white">
                  <MapPin size={18} />
                </span>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">Packers And Movers</p>
                  <h3 className="text-base font-semibold text-slate-950">{city.name}</h3>
                  <p className="text-sm text-slate-500">Pincode {city.pincode}</p>
                </div>
              </div>
              <ArrowRight size={18} className="text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-orange-600" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
