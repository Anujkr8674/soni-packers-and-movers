"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { useInView } from "./useInView";

type CallToActionProps = {
  title?: string;
  subtitle?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export default function CallToAction({
  title = "Ready to Move with Confidence?",
  subtitle = "Call Soni Packers and Movers now for a fast survey and transparent quote.",
  primaryHref = "/get-quote",
  primaryLabel = "Get Free Quote",
  secondaryHref = "https://wa.me/8674823125",
  secondaryLabel = "WhatsApp Us",
}: CallToActionProps) {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <section ref={ref} className="animate-gradient-shift bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 py-16 text-white md:py-24">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <h2
          className={`text-4xl font-bold transition-all duration-1000 ease-out md:text-5xl ${
            isInView ? "translate-y-0 scale-100 opacity-100 blur-0" : "translate-y-10 scale-[0.97] opacity-0 blur-[2px]"
          }`}
        >
          {title}
        </h2>
        <p
          className={`mx-auto mt-4 max-w-2xl text-lg text-slate-300 transition-all duration-1000 ease-out ${
            isInView ? "translate-y-0 scale-100 opacity-100 blur-0" : "translate-y-10 scale-[0.97] opacity-0 blur-[2px]"
          }`}
          style={{ transitionDelay: "220ms" }}
        >
          {subtitle}
        </p>
        <div
          className={`mt-8 flex flex-wrap justify-center gap-4 transition-all duration-1000 ease-out ${
            isInView ? "translate-y-0 scale-100 opacity-100 blur-0" : "translate-y-10 scale-[0.97] opacity-0 blur-[2px]"
          }`}
          style={{ transitionDelay: "340ms" }}
        >
          <Link
            href={primaryHref}
            className="rounded-lg bg-orange-600 px-8 py-3 font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-700 hover:shadow-lg hover:shadow-orange-500/30"
          >
            {primaryLabel}
          </Link>
          <a
            href={secondaryHref}
            target="_blank"
            className="inline-flex items-center gap-2 rounded-xl bg-green-500 px-5 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-600 hover:shadow-lg hover:shadow-green-500/30"
          >
            <FaWhatsapp className="text-xl" />
            {secondaryLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
