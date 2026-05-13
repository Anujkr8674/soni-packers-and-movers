"use client";

import { useEffect, useState } from "react";
import { useInView } from "./useInView";

const steps = [
  { no: "1", title: "Free Survey", desc: "We assess your move and suggest the best relocation plan for your timeline." },
  { no: "2", title: "Packing & Labeling", desc: "Our team packs and labels each item with strong protective materials." },
  { no: "3", title: "Transport & Tracking", desc: "Goods are dispatched with route planning and active movement updates." },
  { no: "4", title: "Delivery & Setup", desc: "On-time unloading with final placement support at your destination." },
];

const processSlides = [
  "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1577415124269-fc1140a69e91?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
];

export default function Process() {
  const [activeSlide, setActiveSlide] = useState(0);
  const { ref, isInView } = useInView<HTMLDivElement>();

  useEffect(() => {
    const id = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % processSlides.length);
    }, 3500);
    return () => clearInterval(id);
  }, []);

  return (
    <section ref={ref} className="bg-orange-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          className={`mb-12 text-center text-4xl font-bold text-slate-900 transition-all duration-1000 ease-out md:text-5xl ${
            isInView ? "translate-y-0 opacity-100 blur-0" : "translate-y-10 opacity-0 blur-[2px]"
          }`}
        >
          How We Work
        </h2>
        <div className="grid items-start gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div
            className={`relative h-[360px] overflow-hidden rounded-2xl bg-slate-900 shadow-xl transition-all duration-1000 ease-out md:h-[450px] ${
              isInView ? "translate-x-0 scale-100 opacity-100 blur-0" : "-translate-x-8 scale-[0.98] opacity-0 blur-[2px]"
            }`}
          >
            {processSlides.map((image, idx) => (
              <img
                key={image}
                src={image}
                alt={`Process slide ${idx + 1}`}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                  idx === activeSlide ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5">
              <p className="text-sm uppercase tracking-wide text-orange-200">Auto carousel</p>
              <p className="text-lg font-semibold text-white">Packing and moving operations in action</p>
            </div>
            <div className="absolute bottom-4 right-4 flex gap-2">
              {processSlides.map((_, idx) => (
                <span
                  key={idx}
                  className={`h-2.5 rounded-full transition-all ${idx === activeSlide ? "w-7 bg-orange-500" : "w-2.5 bg-white/70"}`}
                />
              ))}
            </div>
          </div>

          <div
            className={`relative overflow-x-clip pl-8 transition-all duration-1000 ease-out ${
              isInView ? "translate-x-0 opacity-100 blur-0" : "translate-x-8 opacity-0 blur-[2px]"
            }`}
            style={{ transitionDelay: "240ms" }}
          >
            <span className="absolute left-7 top-3 h-[88%] w-0.5 bg-slate-300" />
            <div className="space-y-5">
              {steps.map((step, idx) => (
                <article
                  key={step.no}
                  className={`group relative rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-1000 ease-out hover:-translate-y-0.5 hover:border-orange-300 hover:shadow-xl ${
                    idx % 2 === 1 ? "ml-3" : ""
                  } ${isInView ? "translate-x-0 opacity-100 blur-0" : `${idx % 2 === 0 ? "-translate-x-8" : "translate-x-8"} opacity-0 blur-[2px]`}`}
                  style={{ transitionDelay: `${260 + idx * 170}ms` }}
                >
                  <span className="absolute left-0 top-5 z-10 grid h-9 w-9 -translate-x-1/2 place-items-center rounded-full border-2 border-white bg-orange-600 text-sm font-bold text-white shadow animate-glow-shift">
                    {step.no}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 transition-colors duration-300 group-hover:text-orange-600">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-slate-600">{step.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
