"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useInView } from "./useInView";

const reviews = [
  {
    name: "Rahul Kumar",
    role: "Home Shifting - Ranchi",
    image: "https://api.dicebear.com/9.x/adventurer/svg?seed=Rahul",
    text: "Very professional team. They shifted my 2BHK safely from Ranchi to Jamshedpur without damage.",
  },
  {
    name: "Priya Singh",
    role: "Office Relocation",
    image: "https://api.dicebear.com/9.x/adventurer/svg?seed=Priya",
    text: "Quick response, fair quotation, and very polite staff. One of the best moving experiences I had.",
  },
  {
    name: "Amit Verma",
    role: "Intercity Move",
    image: "https://api.dicebear.com/9.x/adventurer/svg?seed=Amit",
    text: "Office relocation completed smoothly over the weekend. Great planning and execution.",
  },
  {
    name: "Sneha Das",
    role: "Warehouse Support Client",
    image: "https://api.dicebear.com/9.x/adventurer/svg?seed=Sneha",
    text: "I used their temporary storage and shifting service together. Team support was responsive and very helpful.",
  },
  {
    name: "Vivek Mishra",
    role: "Bike Transport",
    image: "https://api.dicebear.com/9.x/adventurer/svg?seed=Vivek",
    text: "My bike was delivered on time and without even a small scratch. The coordination was excellent.",
  },
  {
    name: "Anjali Roy",
    role: "Local Household Move",
    image: "https://api.dicebear.com/9.x/adventurer/svg?seed=Anjali",
    text: "Packing, loading, and unloading were all handled professionally. The team made the move stress-free.",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);
  const { ref, isInView } = useInView<HTMLDivElement>();

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCount(3);
        return;
      }

      if (window.innerWidth >= 768) {
        setVisibleCount(2);
        return;
      }

      setVisibleCount(1);
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  useEffect(() => {
    const maxIndex = Math.max(reviews.length - visibleCount, 0);
    const id = window.setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4500);

    return () => window.clearInterval(id);
  }, [visibleCount]);

  const maxIndex = Math.max(reviews.length - visibleCount, 0);
  const displayIndex = Math.min(currentIndex, maxIndex);
  const translatePercent = displayIndex * (100 / visibleCount);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex ? maxIndex : 0 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section ref={ref} className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col items-center gap-4 text-center md:mb-12">
          <h2
            className={`text-4xl font-bold text-slate-900 transition-all duration-1000 ease-out md:text-5xl ${
              isInView ? "translate-y-0 opacity-100 blur-0" : "translate-y-10 opacity-0 blur-[2px]"
            }`}
          >
            What Our Customers Say
          </h2>
          <p
            className={`max-w-2xl text-slate-600 transition-all duration-1000 ease-out ${
              isInView ? "translate-y-0 opacity-100 blur-0" : "translate-y-10 opacity-0 blur-[2px]"
            }`}
            style={{ transitionDelay: "220ms" }}
          >
            Real feedback from families and businesses who trusted us with their moves.
          </p>
        </div>

        <div className="relative">
          <div className="absolute -left-3 top-1/2 z-10 hidden -translate-y-1/2 md:block">
            <button
              type="button"
              onClick={goToPrevious}
              className="grid h-11 w-11 place-items-center rounded-full bg-slate-900 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-orange-600 hover:shadow-orange-500/30"
              aria-label="Previous testimonials"
            >
              <ChevronLeft size={22} />
            </button>
          </div>

          <div className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 md:block">
            <button
              type="button"
              onClick={goToNext}
              className="grid h-11 w-11 place-items-center rounded-full bg-slate-900 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-orange-600 hover:shadow-orange-500/30"
              aria-label="Next testimonials"
            >
              <ChevronRight size={22} />
            </button>
          </div>

          <div className="overflow-hidden rounded-3xl bg-slate-50 p-2 shadow-[0_10px_40px_rgba(15,23,42,0.08)]">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{
                transform: `translateX(-${translatePercent}%)`,
              }}
            >
              {reviews.map((review, idx) => (
                <div
                  key={review.name}
                  className={`shrink-0 basis-full px-2 py-2 transition-all duration-1000 ease-out md:basis-1/2 lg:basis-1/3 ${
                    isInView ? "translate-y-0 scale-100 opacity-100 blur-0" : "translate-y-10 scale-[0.96] opacity-0 blur-[2px]"
                  }`}
                  style={{ transitionDelay: `${180 + idx * 120}ms` }}
                >
                  <article className="h-full rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
                    <div className="mb-4 flex items-center gap-3">
                      <img
                        src={review.image}
                        alt={review.name}
                        className="h-12 w-12 rounded-full border border-slate-200 bg-slate-100"
                      />
                      <div>
                        <p className="font-semibold text-slate-900">{review.name}</p>
                        <p className="text-xs text-slate-500">{review.role}</p>
                      </div>
                    </div>
                    <div className="mb-3 flex gap-1 text-yellow-500">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} size={18} className="fill-yellow-500" />
                      ))}
                    </div>
                    <p className="text-slate-600">&quot;{review.text}&quot;</p>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  idx === displayIndex ? "w-8 bg-orange-600" : "w-2.5 bg-slate-300"
                }`}
                aria-label={`Go to testimonial slide ${idx + 1}`}
              />
            ))}
          </div>

          <div className="mt-5 flex justify-center gap-3 md:hidden">
            <button
              type="button"
              onClick={goToPrevious}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm"
            >
              <ChevronLeft size={18} />
              Prev
            </button>
            <button
              type="button"
              onClick={goToNext}
              className="inline-flex items-center gap-2 rounded-full bg-orange-600 px-4 py-2 text-sm font-semibold text-white shadow-sm"
            >
              Next
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
