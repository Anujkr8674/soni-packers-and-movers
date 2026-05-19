"use client";

import { useInView } from "./useInView";

export default function AboutCompany() {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-20 md:py-28"
    >
      {/* Background Blur Effects */}
      <div className="absolute left-0 top-10 h-72 w-72 rounded-full bg-orange-200/30 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <h2
            className={`text-2xl font-extrabold leading-tight tracking-tight text-slate-900 transition-all duration-1000 md:text-5xl ${
              isInView
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            Best Packers and Movers <br />
            Across All Over India
          </h2>

          <div
            className={`mx-auto mt-5 h-1.5 w-28 rounded-full bg-orange-500 transition-all duration-1000 ${
              isInView ? "scale-100 opacity-100" : "scale-50 opacity-0"
            }`}
            style={{ transitionDelay: "250ms" }}
          />
        </div>

        {/* Paragraph */}
        <div
          className={`mx-auto mt-10 max-w-5xl text-center transition-all duration-1000 ease-out ${
            isInView
              ? "translate-y-0 opacity-100 blur-0"
              : "translate-y-12 opacity-0 blur-sm"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
         <p className="text-lg leading-10 text-slate-600 md:text-[22px]">
  Looking for the{" "}
  <span className="font-bold text-slate-900">
    Best Packers and Movers in India
  </span>
  ?{" "}
  <span className="font-bold text-orange-600">
    Sony Packers and Movers
  </span>{" "}
  is one of the{" "}
  <span className="font-bold text-slate-900">
    Top Packers and Movers in India
  </span>{" "}
  offering trusted, affordable, and professional relocation services across
  all major cities and states. We specialize in{" "}
  <span className="font-semibold text-slate-900">
    Household Shifting
  </span>
  ,{" "}
  <span className="font-semibold text-slate-900">
    Home Shifting Services
  </span>
  ,{" "}
  <span className="font-semibold text-slate-900">
    Office Relocation
  </span>
  ,{" "}
  <span className="font-semibold text-slate-900">
    Local Shifting
  </span>
  ,{" "}
  <span className="font-semibold text-slate-900">
    Domestic Relocation
  </span>
  ,{" "}
  <span className="font-semibold text-slate-900">
    Bike Transport
  </span>
  ,{" "}
  <span className="font-semibold text-slate-900">
    Car Transport
  </span>
  ,{" "}
  <span className="font-semibold text-slate-900">
    Furniture Shifting
  </span>
  , and{" "}
  <span className="font-semibold text-slate-900">
    Loading and Unloading Services
  </span>{" "}
  with complete{" "}
  <span className="font-semibold text-slate-900">
    Professional Packing Services
  </span>
  and secure handling support.

  Our experienced team focuses on{" "}
  <span className="font-semibold text-slate-900">
    Safe Packing
  </span>
  ,{" "}
  <span className="font-semibold text-slate-900">
    Secure Transportation
  </span>
  ,{" "}
  <span className="font-semibold text-slate-900">
    Damage-Free Delivery
  </span>
  ,{" "}
  <span className="font-semibold text-slate-900">
    Warehouse Storage
  </span>
  , and{" "}
  <span className="font-semibold text-slate-900">
    Timely Delivery
  </span>{" "}
  to ensure smooth and stress-free relocation for families and businesses.

  Whether you are searching for{" "}
  <span className="font-bold text-slate-900">
    Best Movers and Packers Near Me
  </span>
  ,{" "}
  <span className="font-bold text-slate-900">
    Affordable Packers and Movers
  </span>
  ,{" "}
  <span className="font-bold text-slate-900">
    Trusted Relocation Services
  </span>
  , or{" "}
  <span className="font-bold text-slate-900">
    Intercity Packers and Movers
  </span>
  ,{" "}
  <span className="font-bold text-orange-600">
    Sony Packers and Movers
  </span>{" "}
  is committed to delivering{" "}
  <span className="font-bold text-slate-900">
    Hassle-Free Shifting Services Across India
  </span>
  .
</p>
        </div>
      </div>
    </section>
  );
}