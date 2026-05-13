"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { useInView } from "./useInView";
import { defaultServiceSlug, getServiceBySlug, services } from "./serviceData";

type ServiceShowcaseProps = {
  activeSlug?: string;
};

export default function ServiceShowcase({ activeSlug = defaultServiceSlug }: ServiceShowcaseProps) {
  const { ref, isInView } = useInView<HTMLDivElement>();
  const [activeSlide, setActiveSlide] = useState(0);
  const activeService = getServiceBySlug(activeSlug) ?? getServiceBySlug(defaultServiceSlug) ?? services[0];
  const showcaseImages = useMemo(() => activeService.faqImages.slice(0, 3), [activeService]);

  useEffect(() => {
    if (showcaseImages.length <= 1) {
      return;
    }

    const id = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % showcaseImages.length);
    }, 3500);

    return () => window.clearInterval(id);
  }, [showcaseImages.length]);

  return (
    <section ref={ref} className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`mb-10 max-w-3xl transition-all duration-1000 ease-out ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl font-black text-slate-950 md:text-5xl">Choose the service you need</h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Tap a service tile below to switch the route and see the matching details, coverage, FAQs, and quote info.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            const isActive = service.slug === activeService.slug;

            return (
              <Link
                key={service.title}
                href={`/services/${service.slug}`}
                className={`group relative overflow-hidden rounded-xl border p-5 text-left transition-all duration-500 ${
                  isActive
                    ? "border-transparent bg-sky-600 text-white shadow-lg shadow-sky-500/20"
                    : "border-slate-200 bg-white text-slate-900 hover:-translate-y-1 hover:shadow-lg"
                } ${isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
                style={{ transitionDelay: `${120 + idx * 80}ms` }}
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-all duration-700 ease-out group-hover:opacity-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-slate-950/55" />
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-950/70 via-slate-950/30 to-transparent" />
                </div>

                <div
                  className={`relative z-10 mb-5 inline-flex rounded-xl p-3 text-white transition-all duration-300 ${
                    isActive ? "bg-white/15" : `${service.accent} group-hover:scale-110 group-hover:bg-white/15`
                  }`}
                >
                  <Icon size={24} />
                </div>
                <p className="relative z-10 text-xl font-semibold leading-tight">{service.shortTitle}</p>
                <div className={`relative z-10 mt-6 h-1 w-14 rounded-full ${isActive ? "bg-white" : "bg-orange-500"}`} />
              </Link>
            );
          })}
        </div>

        <div
          className={`mt-14 grid gap-8 overflow-hidden rounded-[2rem] bg-white p-4 shadow-[0_10px_40px_rgba(15,23,42,0.08)] transition-all duration-1000 ease-out lg:grid-cols-[1fr_1.05fr] lg:p-6 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="relative overflow-hidden rounded-[1.5rem] bg-slate-900">
            {showcaseImages.map((image, idx) => (
              <img
                key={`${image}-${idx}`}
                src={image}
                alt={`${activeService.title} ${idx + 1}`}
                className={`absolute inset-0 h-full min-h-[320px] w-full object-cover transition-all duration-700 ${
                  idx === activeSlide ? "scale-100 opacity-100" : "scale-105 opacity-0"
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-slate-950/35" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
              {showcaseImages.map((_, idx) => (
                <span
                  key={idx}
                  className={`h-2.5 rounded-full transition-all ${idx === activeSlide ? "w-7 bg-orange-500" : "w-2.5 bg-white/75"}`}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center p-2 sm:p-4">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-600">Service details</p>
            <h3 className="mt-3 text-3xl font-black text-slate-950 md:text-4xl">{activeService.title}</h3>
            <p className="mt-4 text-lg leading-8 text-slate-600">{activeService.description}</p>

            <div className="mt-8 space-y-3">
              {activeService.details.map((item, idx) => (
                <div
                  key={item}
                  className={`flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 transition-all duration-500 ${
                    isInView ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"
                  }`}
                  style={{ transitionDelay: `${200 + idx * 110}ms` }}
                >
                  <CheckCircle2 size={18} className="text-orange-600" />
                  <span className="font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-orange-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-700 hover:shadow-lg hover:shadow-orange-500/30"
              >
                Request this service
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
