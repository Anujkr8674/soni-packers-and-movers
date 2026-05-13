"use client";

import PageHeroBanner from "../components/PageHeroBanner";
import { useInView } from "../components/useInView";
import { FaWhatsapp } from "react-icons/fa";
import { ArrowRight, CheckCircle2, MapPin, Truck } from "lucide-react";
import FactsSection from "../components/FactsSection";

const highlights = [
  "Dedicated and professional movers",
  "Transparent pricing with no hidden charges",
  "Careful packing, secure transport, and on-time delivery",
];

const zones = [
  "Ranchi",
  "Jamshedpur",
  "Dhanbad",
  "Bokaro",
  "Hazaribagh",
  "Ramgarh",
  "Deoghar",
  "Giridih",
  "Medininagar",
  "Dumka",
  "Jamtara",
  "Khunti",
];

const collageImages = [
  { src: "/media/hero-1.svg", alt: "Soni Packers and Movers service collage" },
  { src: "/media/hero-2.svg", alt: "Safe moving and relocation service" },
  { src: "/media/about-3.svg", alt: "Packing and moving brand visual" },
];

export default function AboutPage() {
  const { ref: whoRef, isInView: whoInView } = useInView<HTMLDivElement>();
  const { ref: zonesRef, isInView: zonesInView } = useInView<HTMLDivElement>();

  return (
    <main className="overflow-x-clip bg-white">
      <PageHeroBanner
        title="About Us"
        subtitle="When you call us, you can rest assured that we'll take care of every detail of your move."
        breadcrumb="About Us"
        backgroundImage="https://www.adarshindiapackers.com/wp-content/uploads/2026/03/young-happy-delivery-man-with-cardboard-boxes-looking-at-camera-.jpg"
        heightClassName="min-h-[72vh]"
      />

      <section ref={whoRef} className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div
              className={`grid gap-4 transition-all duration-1000 ease-out sm:grid-cols-2 ${whoInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
            >
              <div className="space-y-4">
                <div className="group overflow-hidden rounded-2xl bg-slate-900 shadow-2xl shadow-slate-900/15">
                  <img
                    src={collageImages[0].src}
                    alt={collageImages[0].alt}
                    className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl bg-orange-600 p-6 text-white shadow-lg shadow-orange-500/20 transition-transform duration-700 hover:-translate-y-1">
                  <div className="flex items-center gap-3">
                    <div className="grid h-12 w-12 place-items-center rounded-xl bg-white/15">
                      <Truck size={24} />
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-[0.24em] text-orange-100">Ranchi based</p>
                      <p className="text-xl font-semibold">Trusted packing and moving support</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-0 space-y-4 sm:mt-12">
                <div className="overflow-hidden rounded-2xl bg-slate-900 shadow-2xl shadow-slate-900/15 transition-transform duration-700 hover:-translate-y-1">
                  <img
                    src={collageImages[1].src}
                    alt={collageImages[1].alt}
                    className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
                  />
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-700 hover:-translate-y-1 hover:shadow-lg">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-600">What we do</p>
                  <p className="mt-2 text-slate-600">
                    From careful packing to safe transport and smooth unloading, we keep every move organized and stress-free.
                  </p>
                </div>
                <div className="overflow-hidden rounded-2xl bg-slate-900 shadow-2xl shadow-slate-900/15 transition-transform duration-700 hover:-translate-y-1">
                  <img
                    src={collageImages[2].src}
                    alt={collageImages[2].alt}
                    className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
                  />
                </div>
              </div>
            </div>

            <div
              className={`flex flex-col justify-center transition-all duration-1000 ease-out ${whoInView ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
                }`}
            >
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-green-700">Who We Are</p>
              <h2 className="max-w-2xl text-4xl font-black leading-tight text-slate-950 md:text-6xl">
                Welcome To Soni Packers and Movers in Ranchi
              </h2>

              <div className="mt-6 flex items-start gap-4 rounded-2xl border-l-4 border-orange-500 bg-slate-50 p-5 shadow-sm">
                <div className="mt-1 text-orange-600">
                  <MapPin size={22} />
                </div>
                <p className="text-lg leading-8 text-slate-600">
                  Our trusted packers and movers service in Ranchi ensures safe, smooth, and hassle-free relocation every time.
                </p>
              </div>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Soni Packers and Movers offers reliable, affordable, and secure relocation services for homes, offices, vehicles,
                and storage needs across Jharkhand. We focus on professional packing, timely delivery, and complete customer
                satisfaction from the first call to final unloading.
              </p>

              <div className="mt-8 space-y-3">
                {highlights.map((item, idx) => (
                  <div
                    key={item}
                    className={`flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition-all duration-700 ease-out ${whoInView ? "translate-x-0 opacity-100" : idx % 2 === 0 ? "-translate-x-6 opacity-0" : "translate-x-6 opacity-0"
                      }`}
                    style={{ transitionDelay: `${180 + idx * 120}ms` }}
                  >
                    <CheckCircle2 size={18} className="text-orange-600" />
                    <span className="font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-orange-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-700 hover:shadow-lg hover:shadow-orange-500/25"
                >
                  Get in touch
                  <ArrowRight size={18} />
                </a>
               

                <a
                  href="https://wa.me/918674823125"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-green-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-600"
                >
                  <FaWhatsapp className="text-xl" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FactsSection />

      <section ref={zonesRef} className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
            <div
              className={`rounded-3xl bg-slate-900 p-6 text-white shadow-2xl shadow-slate-900/15 transition-all duration-1000 ease-out ${zonesInView ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
                }`}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-300">Where We Operate in Jharkhand</p>
              <h2 className="mt-3 text-3xl font-black leading-tight md:text-4xl">
                Reliable packing and moving support across key Jharkhand cities
              </h2>
              <p className="mt-4 max-w-xl text-slate-300">
                Based in Ranchi, we support local and intercity relocations across major Jharkhand locations with the same care,
                planning, and timely execution.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {zones.map((city, idx) => (
                  <div
                    key={city}
                    className={`flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm transition-all duration-1000 ease-out ${zonesInView ? "translate-x-0 opacity-100" : idx % 2 === 0 ? "-translate-x-8 opacity-0" : "translate-x-8 opacity-0"
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
              className={`rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-1000 ease-out ${zonesInView ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
                }`}
            >
              <h3 className="text-2xl font-bold text-slate-950">Service coverage snapshot</h3>
              <p className="mt-3 leading-7 text-slate-600">
                From Ranchi and nearby localities to cities like Jamshedpur, Dhanbad, Bokaro, and Deoghar, we help families and
                businesses relocate without the usual stress.
              </p>

              <div className="mt-6 grid gap-4">
                <div className="rounded-2xl bg-orange-50 p-5 transition-transform duration-500 hover:-translate-y-1">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-700">Local moves</p>
                  <p className="mt-2 text-slate-700">
                    Ranchi city, Ratu Road, Lalpur, Doranda, Harmu, Booty More, Kanke, and surrounding areas.
                  </p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-5 transition-transform duration-500 hover:-translate-y-1">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-700">Intercity routes</p>
                  <p className="mt-2 text-slate-700">
                    Jamshedpur, Dhanbad, Bokaro, Hazaribagh, Ramgarh, Giridih, Deoghar, Dumka, and Medininagar.
                  </p>
                </div>
                <div className="rounded-2xl bg-slate-900 p-5 text-white transition-transform duration-500 hover:-translate-y-1">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-300">Support promise</p>
                  <p className="mt-2 text-slate-200">
                    Packing guidance, route coordination, loading support, and delivery follow-up with a customer-first approach.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
