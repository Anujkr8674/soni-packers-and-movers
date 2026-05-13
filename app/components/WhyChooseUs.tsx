"use client";

import { Clock, ShieldCheck, Users, BadgeCheck } from "lucide-react";
import { useInView } from "./useInView";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Safe and Secure Handling",
    desc: "Premium packing materials and careful loading for every item.",
    image:
      "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?auto=format&fit=crop&w=900&q=80",
    points: ["Damage-prevention packing", "Handled by trained movers", "Secure transit process"],
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    desc: "Structured move plans with timely pickup and promised delivery.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80",
    points: ["Fast response team", "Live move coordination", "Strict time commitment"],
  },
  {
    icon: Users,
    title: "Trained Professionals",
    desc: "Experienced relocation crew for residential and office moves.",
    image:
      "https://images.unsplash.com/photo-1595079676339-1534801ad6cf?auto=format&fit=crop&w=900&q=80",
    points: ["Background verified staff", "Skilled lifting & handling", "Polite support team"],
  },
  {
    icon: BadgeCheck,
    title: "Transparent Pricing",
    desc: "No hidden charges and complete quote clarity before booking.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80",
    points: ["Written final quote", "No surprise add-ons", "Best value plans"],
  },
];

export default function WhyChooseUs() {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <section ref={ref} className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          className={`mb-12 text-center text-4xl font-bold text-slate-900 transition-all duration-1000 ease-out md:text-5xl ${
            isInView ? "translate-y-0 opacity-100 blur-0" : "translate-y-10 opacity-0 blur-[2px]"
          }`}
        >
          Why Choose Soni Packers and Movers?
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className={`group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-1000 ease-out hover:-translate-y-1 hover:shadow-xl ${
                  isInView ? "translate-y-0 scale-100 opacity-100 blur-0" : "translate-y-10 scale-[0.96] opacity-0 blur-[2px]"
                }`}
                style={{ transitionDelay: `${220 + idx * 150}ms` }}
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                </div>
                <div className="p-5">
                  <div className="mb-4 inline-flex rounded-lg bg-orange-600 p-3 text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-slate-900">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-slate-600">{item.desc}</p>
                  <ul className="mt-4 space-y-1.5 text-sm text-slate-600">
                    {item.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-orange-500" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
