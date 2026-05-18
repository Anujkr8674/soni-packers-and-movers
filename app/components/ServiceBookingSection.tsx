"use client";

import { useInView } from "./useInView";

type ServiceBookingSectionProps = {
  title: string;
  leftLabel: string;
  leftItems: string[];
  rightLabel: string;
  rightItems: string[];
};

export default function ServiceBookingSection({
  title,
  leftLabel,
  leftItems,
  rightLabel,
  rightItems,
}: ServiceBookingSectionProps) {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <section ref={ref} className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div
            className={`transition-all duration-1000 ease-out ${
              isInView ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            <p className="text-2xl font-black text-slate-950 md:text-3xl">{title}</p>
            <p className="mt-2 text-slate-600">{leftLabel}</p>
            <div className="mt-6 space-y-4">
              {leftItems.map((item, idx) => (
                <div
                  key={item}
                  className={`rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-slate-700 shadow-sm transition-all duration-1000 ease-out ${
                    isInView ? "translate-x-0 opacity-100" : "-translate-x-6 opacity-0"
                  }`}
                  style={{ transitionDelay: `${180 + idx * 90}ms` }}
                >
                  <p className="mt-1 text-base font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`rounded-[2rem] bg-blue-50 p-6 shadow-sm transition-all duration-1000 ease-out ${
              isInView ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
          >
            <h3 className="text-2xl font-black text-slate-950">Why book with Sony Packers and Movers?</h3>
            <p className="mt-2 text-slate-600">{rightLabel}</p>
            <div className="mt-5 space-y-3">
              {rightItems.map((item, idx) => (
                <div
                  key={item}
                  className={`flex items-start gap-3 rounded-2xl bg-white px-4 py-3 text-slate-700 shadow-sm transition-all duration-1000 ease-out ${
                    isInView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                  }`}
                  style={{ transitionDelay: `${220 + idx * 80}ms` }}
                >
                  <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-[11px] font-bold text-white">
                    ✓
                  </span>
                  <p className="mt-1">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
