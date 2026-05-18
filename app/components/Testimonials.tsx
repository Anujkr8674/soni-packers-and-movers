"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star, User } from "lucide-react";
import { useInView } from "./useInView";

type Review = {
  name: string;
  role: string;
  text: string;
};

const reviews: Review[] = [
  {
    name: "Lalit Prasad",
    role: "Home Shifting - Ranchi",
    text: "I had an excellent experience transporting my belongings from Ranchi to Delhi. The team was professional, the manager was responsible, and the packing materials were of top quality. The reasonable rates and smooth service made the entire process completely stress-free. I highly recommend!",
  },
  {
    name: "Biswajit Guchait",
    role: "Office Relocation",
    text: "A huge shoutout to the team for making my move from Hazaribagh to Kolkata so seamless. Their behavior was wonderful, and they explained the entire logistics process very clearly. The packing was perfect, and I loved that they kept me in the loop with regular updates. Truly an amazing service.",
  },
  {
    name: "Mukesh Patel",
    role: "Intercity Move",
    text: "Most reliable and efficient service I ever got, thankyou sony Packers and Movers for great service. I was worried about my household goods, especially about those items which are very delicate and expensive too. After all the things are moved and assembled perfectly, I can say that I have made a perfect choice by going after sony Packers and Movers services. Thank you sony Packers and movers and all staff.",
  },
  {
    name: "Vivek",
    role: "Warehouse Support Client",
    text: "It was a nice experience with SONY packers and movers. They were punctual and packed all my stuff carefully and timely. All my stuff were in good condition after delivery. They settled all my stuff as they said. Must try Sony packers and movers.",
  },
  {
    name: "K Kumar",
    role: "Bike Transport",
    text: "Outstanding service from start to finish. The team was incredibly professional efficient and courteous throughout the entire moving process from ranchi to patna. Thank you SONY packers and movers.",
  },
  {
    name: "Prakash Kumar",
    role: "Local Household Move",
    text: "I moved to Thane, Maharashtra 2 months back along with my family for settling there. I chose Sony packers for relocating my household goods and car there. I was worried about how to relocate goods safely, but Sony assistants were nice and dedicated towards their job. They packed each and every good with safety and also relocated them safely to my place.",
  },
  {
    name: "Priyanka Singh",
    role: "Local Household Move",
    text: "I'm very happy with the quality of services provided by Sony Packers and movers. A designated movement manager is assigned to each customer which makes the entire shifting process very convenient.",
  },
  {
    name: "Dewesh Shukla",
    role: "Local Household Move",
    text: "Professional packers, save time by providing effective services, including loading, packing, moving, and unloading. Good work",
  },
  {
    name: "Ankit Choubey",
    role: "Local Household Move",
    text: "Sony packers do fantastic work and their workers done work properly and all goods should be packed in good manner and transferred it safely",
  },
  {
    name: "30Bheem Besra",
    role: "Local Household Move",
    text: "The staff of SONY PACKERS & MOVERS are professional in handling all kinds of packing and moving services. Thank you team. I used the household shifting services to shift my residential goods.",
  },
  {
    name: "Utkarsh Lal",
    role: "Local Household Move",
    text: "Very nice service recieved, they shipped my scooty and household items safely. They have nice behaviour of staff too.",
  },
  {
    name: "Binti Kumar Khusi",
    role: "Local Household Move",
    text: "Sony Packers & Movers provides exceptional service. They are friendly and professional. The expert team helped me move my office supplies from Gumla to Delhi.",
  },
  {
    name: "Mukul Verma",
    role: "Local Household Move",
    text: "Sony packers and movers helped me move my entire household from Ranchi to Tata Motors. Their packing, loading, and transportation were excellent. My experience was quite satisfactory.",
  },
  {
    name: "Sunita Kumari",
    role: "Local Household Move",
    text: "Nice service. Manoj ji very-very nice. Thanks mera saman acche se aagya kuch bhi damage nahi hua hai.",
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
    const id = window.setInterval(() => {
      setCurrentIndex((prev) => (prev >= reviews.length - 1 ? 0 : prev + 1));
    }, 4500);

    return () => window.clearInterval(id);
  }, []);

  const maxIndex = reviews.length - 1;
  const displayIndex = Math.min(currentIndex, maxIndex);
  const translatePercent = displayIndex * (100 / visibleCount);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
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
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-orange-100 text-orange-600">
                        <User size={24} />
                      </div>

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
