"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { useInView } from "./useInView";
import { siteAssets } from "@/lib/site-assets";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQSectionProps = {
  title?: string;
  subtitle?: string;
  faqs?: FAQItem[];
  images?: string[];
};

const defaultFaqs: FAQItem[] = [
  {
    question: "How early should I book Sony Packers and Movers?",
    answer:
      "For best slot availability, book at least 3-5 days in advance. For urgent moves, contact us directly and we will try to arrange same-day support.",
  },
  {
    question: "Do you provide packing materials and labor?",
    answer:
      "Yes. We provide complete packing materials like bubble wrap, boxes, stretch film, and trained staff for packing, loading, transport, and unloading.",
  },
  {
    question: "Can I track my goods during transit?",
    answer:
      "Yes, our team shares live movement updates, and for intercity moves we provide status tracking through our support team till delivery.",
  },
  {
    question: "Do you offer insurance for damage protection?",
    answer:
      "Yes, transit insurance options are available. Our team will explain coverage details clearly before final booking.",
  },
];

const defaultImages = [
  siteAssets.sections.faq.faqSlideOne,
  siteAssets.sections.faq.faqSlideTwo,
  siteAssets.sections.faq.faqSlideThree,
];

export default function FAQSection({
  title = "Frequently Asked Questions",
  subtitle = "Everything customers commonly ask before booking a move.",
  faqs = defaultFaqs,
  images = defaultImages,
}: FAQSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const { ref, isInView } = useInView<HTMLDivElement>();

  useEffect(() => {
    const id = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(id);
  }, [images.length]);

  return (
    <section ref={ref} className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2
            className={`text-4xl font-bold text-slate-900 transition-all duration-1000 ease-out md:text-5xl ${
              isInView ? "translate-y-0 opacity-100 blur-0" : "translate-y-10 opacity-0 blur-[2px]"
            }`}
          >
            {title}
          </h2>
          <p
            className={`mx-auto mt-3 max-w-2xl text-slate-600 transition-all duration-1000 ease-out ${
              isInView ? "translate-y-0 opacity-100 blur-0" : "translate-y-10 opacity-0 blur-[2px]"
            }`}
            style={{ transitionDelay: "220ms" }}
          >
            {subtitle}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_1fr] lg:items-start">
          <div
            className={`relative h-[330px] overflow-hidden rounded-2xl bg-slate-900 shadow-xl transition-all duration-1000 ease-out sm:h-[420px] ${
              isInView ? "translate-x-0 scale-100 opacity-100 blur-0" : "-translate-x-8 scale-[0.98] opacity-0 blur-[2px]"
            }`}
          >
            {images.map((image, idx) => (
              <img
                key={`${image}-${idx}`}
                src={image}
                alt={`FAQ slide ${idx + 1}`}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                  idx === activeSlide ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
              {images.map((_, idx) => (
                <span
                  key={idx}
                  className={`h-2.5 rounded-full transition-all ${idx === activeSlide ? "w-7 bg-orange-500" : "w-2.5 bg-white/75"}`}
                />
              ))}
            </div>
          </div>

          <div className="space-y-3">
            {faqs.map((item, idx) => {
              const isOpen = activeIndex === idx;
              return (
                <article
                  key={item.question}
                  className={`overflow-hidden rounded-xl border transition-all duration-1000 ease-out ${
                    isOpen ? "border-orange-200 bg-white shadow-md" : "border-slate-200 bg-white"
                  } ${isInView ? "translate-x-0 opacity-100 blur-0" : `${idx % 2 === 0 ? "-translate-x-6" : "translate-x-6"} opacity-0 blur-[2px]`}`}
                  style={{ transitionDelay: `${260 + idx * 150}ms` }}
                >
                  <button
                    onClick={() => setActiveIndex(idx)}
                    className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left sm:px-5"
                    aria-expanded={isOpen}
                  >
                    <span className="font-semibold text-slate-900">{item.question}</span>
                    <ChevronDown
                      size={18}
                      className={`flex-shrink-0 text-slate-500 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-orange-600" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] border-t border-slate-100" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-4 py-4 text-sm leading-7 text-slate-600 sm:px-5">{item.answer}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
