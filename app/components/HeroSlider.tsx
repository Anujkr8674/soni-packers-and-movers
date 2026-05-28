"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ChevronLeft, ChevronRight, Clock3, MapPin, Shield } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { siteAssets } from "@/lib/site-assets";

type MediaItem = {
  type: "image" | "video";
  src: string;
  title: string;
  subtitle: string;
  mobileObjectPosition?: string;
};

const slides: MediaItem[] = [
  {
    type: "video",
    src: siteAssets.sections.heroSlider.video,
    title: "Professional Team and Modern Moving Fleet",
    subtitle: "Well-trained staff and managed logistics for stress-free relocation.",
    mobileObjectPosition: "object-center",
  },
  
  {
    type: "image",
    src: siteAssets.sections.heroSlider.slideOne,
    title: "Trusted Packers and Movers in Ranchi",
    subtitle: "Safe packing, fast shifting, and transparent pricing from start to finish.",
    mobileObjectPosition: "object-[58%_center]",
  },
 
  {
    type: "image",
    src: siteAssets.sections.heroSlider.slideTwo,
    title: "Household, Office and Vehicle Relocation",
    subtitle: "End-to-end support from Ratu Road, Ranchi to anywhere in India.",
    mobileObjectPosition: "object-[70%_center]",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCurrent((prev) => (prev + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative h-[84vh] min-h-[615px] overflow-hidden bg-slate-900">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(249,115,22,0.16),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.12),_transparent_24%)]" />
      <div className="pointer-events-none absolute -left-20 top-20 h-56 w-56 rounded-full bg-orange-500/20 blur-3xl animate-float-slow" />
      <div className="pointer-events-none absolute right-0 top-16 h-44 w-44 rounded-full bg-white/10 blur-3xl animate-float-slow" />

      {slides.map((slide, idx) => (
        <div
          key={slide.title}
          className={`absolute inset-0 transition-opacity duration-700 ${
            idx === current ? "z-10 opacity-100 pointer-events-auto" : "z-0 opacity-0 pointer-events-none"
          }`}
        >
          {slide.type === "image" ? (
            <Image
              src={slide.src}
              alt={slide.title}
              fill
              priority={idx === current}
              sizes="100vw"
              className={`object-cover transition-transform duration-700 ${slide.mobileObjectPosition ?? "object-center"} sm:object-center md:scale-[1.03]`}
            />
          ) : (
            <video src={slide.src} className="h-full w-full object-cover object-center md:scale-[1.03]" autoPlay muted loop playsInline />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/58 to-black/35" />
          <div className="absolute inset-0 mx-auto flex max-w-7xl items-center px-4 pb-24 pt-20 sm:px-6 sm:pb-28 md:pt-0 lg:px-8">
            <div className="max-w-3xl text-white">
              <p className="animate-fade-up mb-3 inline-block rounded-full bg-orange-600/90 px-4 py-1 text-sm font-semibold uppercase tracking-wide shadow-lg shadow-orange-950/30 animate-glow-shift">
                Sony Packers and Movers
              </p>
              <h1 className="animate-fade-up mb-5 text-4xl font-extrabold leading-tight md:text-6xl" style={{ animationDelay: "120ms" }}>
                {slide.title}
              </h1>
              <p className="animate-fade-up mb-8 max-w-2xl text-lg text-slate-200 md:text-xl" style={{ animationDelay: "220ms" }}>
                {slide.subtitle}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/get-quote"
                  className="rounded-lg bg-orange-600 px-7 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-700 hover:shadow-lg hover:shadow-orange-500/30"
                >
                  Get Free Quote
                </Link>
                <Link
                  href="https://wa.me/8674823125?text=Hello%21%20I%20need%20a%20shifting%20quote."
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-xl bg-green-500 px-5 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-600 hover:shadow-lg hover:shadow-green-500/30"
                >
                  <FaWhatsapp className="text-xl" />
                  WhatsApp Us
                </Link>
                <Link
                  href="/services/household"
                  className="rounded-lg border border-white/70 px-7 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-slate-900"
                >
                  Explore Services
                </Link>
              </div>
              <div className="mt-5 mb-3 grid w-full max-w-md grid-cols-3 gap-2 sm:mt-8 sm:mb-4 sm:max-w-xl sm:gap-4">
                <div className="animate-fade-up" style={{ animationDelay: "320ms" }}>
                  <p className="text-[1rem] font-extrabold leading-none text-orange-500 sm:text-4xl">100+</p>
                  <p className="mt-1 text-[11px] font-semibold uppercase leading-tight tracking-wide text-slate-300 sm:text-sm">
                    Happy Customers
                  </p>
                </div>
                <div className="animate-fade-up" style={{ animationDelay: "420ms" }}>
                  <p className="text-[1rem] font-extrabold leading-none text-orange-500 sm:text-4xl">100%</p>
                  <p className="mt-1 text-[11px] font-semibold uppercase leading-tight tracking-wide text-slate-300 sm:text-sm">
                    Safe Delivery
                  </p>
                </div>
                <div className="animate-fade-up" style={{ animationDelay: "520ms" }}>
                  <p className="text-[1rem] font-extrabold leading-none text-orange-500 sm:text-4xl">Pan-India</p>
                  <p className="mt-1 text-[11px] font-semibold uppercase leading-tight tracking-wide text-slate-300 sm:text-sm">
                    Coverage
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white hover:bg-white/40"
        onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
        aria-label="Previous slide"
      >
        <ChevronLeft />
      </button>
      <button
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white hover:bg-white/40"
        onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
        aria-label="Next slide"
      >
        <ChevronRight />
      </button>

      <div className="absolute bottom-14 left-1/2 z-20 flex -translate-x-1/2 gap-2 sm:bottom-16">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-2.5 rounded-full transition-all ${idx === current ? "w-8 bg-orange-500" : "w-2.5 bg-white/60"}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-20 bg-orange-500 py-1 text-white sm:py-3">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-4 text-xs font-semibold sm:text-sm">
          <p className="flex items-center gap-2">
            <Check size={14} />
            No Hidden Charges
          </p>
          <p className="flex items-center gap-2">
            <Shield size={14} />
            Transit Insurance Available
          </p>
          <p className="flex items-center gap-2">
            <MapPin size={14} />
            GPS-Tracked Vehicles
          </p>
          <p className="flex items-center gap-2">
            <Clock3 size={14} />
            On-Time Delivery
          </p>
        </div>
      </div>
    </section>
  );
}
