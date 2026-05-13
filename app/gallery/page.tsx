"use client";

import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import PageHeroBanner from "../components/PageHeroBanner";

type GalleryItem = {
  src: string;
  type: "Residential" | "Office" | "Packing" | "Vehicle" | "Warehouse" | "Intercity";
  title: string;
};

const categories = ["All", "Residential", "Office", "Packing", "Vehicle", "Warehouse", "Intercity"] as const;

const gallery: GalleryItem[] = [
  {
    src: "https://images.unsplash.com/photo-1556911220-bda9f7de1bc1?auto=format&fit=crop&w=1200&q=80",
    type: "Residential",
    title: "Home shifting setup",
  },
  {
    src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    type: "Office",
    title: "Office relocation",
  },
  {
    src: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=1200&q=80",
    type: "Packing",
    title: "Careful packing",
  },
  {
    src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    type: "Vehicle",
    title: "Vehicle transport",
  },
  {
    src: "https://images.unsplash.com/photo-1565891741441-64926e441838?auto=format&fit=crop&w=1200&q=80",
    type: "Warehouse",
    title: "Secure storage",
  },
  {
    src: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80",
    type: "Intercity",
    title: "Long-distance move",
  },
  {
    src: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=1200&q=80",
    type: "Residential",
    title: "Apartment move",
  },
  {
    src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
    type: "Office",
    title: "Workspace packing",
  },
  {
    src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    type: "Packing",
    title: "Loading assistance",
  },
  {
    src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    type: "Vehicle",
    title: "Bike transport",
  },
  {
    src: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
    type: "Warehouse",
    title: "Warehouse inventory",
  },
  {
    src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
    type: "Intercity",
    title: "City-to-city delivery",
  },
  {
    src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    type: "Residential",
    title: "Home loading team",
  },
  {
    src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&q=80",
    type: "Office",
    title: "Conference room shift",
  },
  {
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    type: "Packing",
    title: "Wrapping furniture",
  },
  {
    src: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80",
    type: "Vehicle",
    title: "Car carrier route",
  },
  {
    src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
    type: "Warehouse",
    title: "Storage aisle",
  },
  {
    src: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=80",
    type: "Intercity",
    title: "Intercity logistics",
  },
  {
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    type: "Residential",
    title: "Apartment furniture",
  },
  {
    src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
    type: "Office",
    title: "Office dispatch",
  },
  {
    src: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=1200&q=80",
    type: "Packing",
    title: "Safe cartons",
  },
  {
    src: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80",
    type: "Vehicle",
    title: "Two-wheeler load",
  },
  {
    src: "https://images.unsplash.com/photo-1565891741441-64926e441838?auto=format&fit=crop&w=1200&q=80",
    type: "Warehouse",
    title: "Secure shelving",
  },
  {
    src: "https://images.unsplash.com/photo-1501117716987-c8e1ecb2106e?auto=format&fit=crop&w=1200&q=80",
    type: "Intercity",
    title: "Route planning",
  },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const [page, setPage] = useState(1);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const filteredItems = useMemo(() => {
    return filter === "All" ? gallery : gallery.filter((item) => item.type === filter);
  }, [filter]);

  const totalPages = Math.max(1, Math.ceil(filteredItems.length / 12));
  const displayPage = Math.min(page, totalPages);
  const pagedItems = filteredItems.slice((displayPage - 1) * 12, displayPage * 12);

  const activeItem = activeIndex === null ? null : pagedItems[activeIndex] ?? null;

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (activeIndex === null) {
        return;
      }

      if (event.key === "Escape") {
        setActiveIndex(null);
      }

      if (event.key === "ArrowRight") {
        setActiveIndex((current) => {
          if (current === null) return current;
          return (current + 1) % pagedItems.length;
        });
      }

      if (event.key === "ArrowLeft") {
        setActiveIndex((current) => {
          if (current === null) return current;
          return (current - 1 + pagedItems.length) % pagedItems.length;
        });
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex, pagedItems.length]);

  return (
    <>
      <PageHeroBanner
        title="Gallery"
        subtitle="Visual highlights from recent residential, office, packing, and transport projects."
        breadcrumb="Gallery"
        backgroundImage="https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=1600&q=80"
        heightClassName="min-h-[58vh]"
      />

      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="sticky top-[88px] z-30 -mx-4 border-b border-slate-200 bg-white/95 px-4 py-4 backdrop-blur md:-mx-6 md:px-6 lg:-mx-8 lg:px-8">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setFilter(cat);
                    setPage(1);
                    setActiveIndex(null);
                  }}
                  className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                    filter === cat ? "bg-orange-600 text-white shadow-lg shadow-orange-500/20" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pagedItems.map((item, idx) => (
              <button
                key={`${item.src}-${idx}`}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <div className="p-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">{item.type}</p>
                  <h3 className="mt-2 text-lg font-bold text-slate-950">{item.title}</h3>
                </div>
              </button>
            ))}
          </div>

          {filteredItems.length > 12 ? (
            <div className="mt-10 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => setPage((current) => Math.max(1, current - 1))}
                disabled={displayPage === 1}
                className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition-all disabled:cursor-not-allowed disabled:opacity-40"
              >
                Prev
              </button>
              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }).map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setPage(idx + 1)}
                    className={`h-10 min-w-10 rounded-full px-3 text-sm font-semibold transition-all ${
                      displayPage === idx + 1 ? "bg-orange-600 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    {idx + 1}
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={() => setPage((current) => Math.min(totalPages, current + 1))}
                disabled={displayPage === totalPages}
                className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition-all disabled:cursor-not-allowed disabled:opacity-40"
              >
                Next
              </button>
            </div>
          ) : null}
        </div>
      </section>

      {activeItem ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-4">
          <div className="relative w-full max-w-6xl overflow-hidden rounded-3xl bg-black shadow-2xl">
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              className="absolute right-4 top-4 z-20 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
            >
              <X size={20} />
            </button>

            <button
              type="button"
              onClick={() =>
                setActiveIndex((current) => {
                  if (current === null) return current;
                  return (current - 1 + pagedItems.length) % pagedItems.length;
                })
              }
              className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              type="button"
              onClick={() =>
                setActiveIndex((current) => {
                  if (current === null) return current;
                  return (current + 1) % pagedItems.length;
                })
              }
              className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
            >
              <ChevronRight size={24} />
            </button>

            <img src={activeItem.src} alt={activeItem.title} className="max-h-[85vh] w-full object-contain" />
            <div className="border-t border-white/10 bg-black px-6 py-4 text-white">
              <p className="text-sm uppercase tracking-[0.22em] text-orange-300">{activeItem.type}</p>
              <h3 className="mt-1 text-xl font-bold">{activeItem.title}</h3>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
