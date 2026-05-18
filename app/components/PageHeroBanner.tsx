"use client";

import { useInView } from "./useInView";

type PageHeroBannerProps = {
  title: string;
  subtitle: string;
  backgroundImage: string;
  breadcrumb?: string;
  heightClassName?: string;
};

export default function PageHeroBanner({
  title,
  subtitle,
  backgroundImage,
  breadcrumb,
  heightClassName = "min-h-[72vh]",
}: PageHeroBannerProps) {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <section ref={ref} className={`relative overflow-hidden bg-slate-950 ${heightClassName}`}>
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-35"
        style={{ backgroundImage: backgroundImage ? `url("${encodeURI(backgroundImage)}")` : undefined }}
      />
      <div className="pointer-events-none absolute inset-0 bg-blue-950/65" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-blue-950/70 via-blue-950/45 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:28px_28px] opacity-20" />

      <div className="relative z-10 mx-auto flex min-h-[inherit] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
        <div
          className={`max-w-2xl transition-all duration-1000 ease-out ${
            isInView ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
          }`}
        >
          {breadcrumb ? (
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.28em] text-white backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-orange-500" />
              {breadcrumb}
            </div>
          ) : null}
          <h1 className="text-5xl font-black leading-tight text-white md:text-7xl">{title}</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-100 md:text-2xl">{subtitle}</p>
        </div>
      </div>
    </section>
  );
}
