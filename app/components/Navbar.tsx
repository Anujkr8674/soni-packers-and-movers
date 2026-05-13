"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, Phone, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { topLocationLinks } from "../packers-movers-jharkhand/locationData";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services/household" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
  // { label: "Get Quote", href: "/get-quote" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const pathname = usePathname();
  const locationCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isActiveLink = (href: string, label: string) => {
    if (href === "/") return pathname === "/";
    if (label === "Services") return pathname === "/services" || pathname.startsWith("/services/");
    if (label === "Location") return pathname.startsWith("/packers-movers-jharkhand");
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const openLocationMenu = () => {
    if (locationCloseTimer.current) {
      clearTimeout(locationCloseTimer.current);
      locationCloseTimer.current = null;
    }
    setIsLocationOpen(true);
  };

  const closeLocationMenu = () => {
    if (locationCloseTimer.current) {
      clearTimeout(locationCloseTimer.current);
    }
    locationCloseTimer.current = setTimeout(() => {
      setIsLocationOpen(false);
      locationCloseTimer.current = null;
    }, 120);
  };

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  return (
    <>
      <div className="hidden bg-gradient-to-r from-orange-600 to-orange-500 py-2.5 text-sm text-white sm:block">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 sm:flex-row sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-5 text-xs">
            <a href="tel:+916209280901" className="flex items-center gap-2 hover:text-orange-100">
              <Phone size={15} />
              +91 6209280901
            </a>
            <span className="flex items-center gap-2 text-orange-100">
              <MapPin size={15} />
              Ranchi, Ratu Road, R.R Tower
            </span>
          </div>
          {/* <a
            href="https://wa.me/919835983331"
            target="_blank"
            rel="noopener noreferrer"
           
              className="inline-flex items-center gap-2 rounded-full bg-green-500 px-4 py-2 font-semibold text-white hover:bg-green-600 transition"
          >
            WhatsApp Support 24x7

            
          </a> */}
          

          <div className="flex items-center gap-3 text-white">
            
            
            <span className="text-xs md:text-xs">
              WhatsApp Support 24x7
            </span>

           
           <a
  href="https://wa.me/919835983331"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-green-600"
>
  <FaWhatsapp size={12} />
  WhatsApp
</a>

          </div>
        </div>
      </div>

      <nav className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 shadow-sm backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" onClick={() => setIsLocationOpen(false)} className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-orange-600 to-orange-500 font-bold text-white">
              SP
            </div>
            <div>
              <p className="text-lg font-bold leading-5 text-slate-900">Soni Packers</p>
              <p className="text-sm font-semibold text-orange-600">& Movers</p>
            </div>
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsLocationOpen(false)}
                className={`font-semibold transition-colors ${
                  isActiveLink(link.href, link.label) ? "text-orange-600" : "text-slate-700 hover:text-orange-600"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div
              className="relative"
              onMouseEnter={openLocationMenu}
              onMouseLeave={closeLocationMenu}
            >
              <button
                type="button"
                onClick={() => setIsLocationOpen((prev) => !prev)}
                onFocus={openLocationMenu}
                className={`inline-flex items-center gap-1 font-semibold transition-colors ${
                  isActiveLink("/packers-movers-jharkhand", "Location")
                    ? "text-orange-600"
                    : "text-slate-700 hover:text-orange-600"
                }`}
                aria-haspopup="menu"
                aria-expanded={isLocationOpen}
              >
                Location
                <ChevronDown size={16} className={`transition-transform ${isLocationOpen ? "rotate-180" : ""}`} />
              </button>
              

              {isLocationOpen && (
                <div
                  className="absolute right-0 top-full z-50 mt-3 w-56 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl"
                  onMouseEnter={openLocationMenu}
                  onMouseLeave={closeLocationMenu}
                >
                  <div className="border-b border-slate-100 px-4 py-3 text-xs font-bold uppercase tracking-[0.24em] text-slate-500">
                    Jharkhand locations
                  </div>
                  <div className="p-2">
                    {topLocationLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsLocationOpen(false)}
                        className={`flex items-center justify-between rounded-xl px-3 py-2 text-sm font-medium transition ${
                          pathname === item.href || pathname.startsWith(`${item.href}/`)
                            ? "bg-orange-50 text-orange-700"
                            : "text-slate-700 hover:bg-slate-50 hover:text-orange-700"
                        }`}
                      >
                        {item.label}
                        <MapPin size={14} className="text-orange-500" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="rounded-md p-1 text-slate-700 lg:hidden"
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isOpen && (
          <div className="fixed inset-0 z-[60] lg:hidden" aria-hidden={!isOpen}>
            <button
              aria-label="Close menu overlay"
              className="absolute inset-0 bg-slate-900/45 transition-opacity duration-300"
              onClick={() => setIsOpen(false)}
            />
            <aside className="absolute right-0 top-0 flex h-[100dvh] w-[86%] max-w-sm flex-col overflow-hidden bg-white shadow-2xl">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1600518464441-9154a4dea21b?auto=format&fit=crop&w=900&q=80')",
              }}
            />
            <div className="absolute inset-0 bg-white/72 backdrop-blur-[1px]" />

            <div className="relative z-10 flex items-center justify-between border-b border-slate-100 px-4 py-4">
              <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-orange-600 to-orange-500 font-bold text-white">
                  SP
                </div>
                <div>
                  <p className="text-lg font-bold leading-5 text-slate-900">Soni Packers</p>
                  <p className="text-sm font-semibold text-orange-600">& Movers</p>
                </div>
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="relative z-10 rounded-md p-1 text-slate-700"
                aria-label="Close navigation"
              >
                <X size={28} />
              </button>
            </div>

            <div className="relative z-10 min-h-0 flex-1 overflow-y-auto border-b border-slate-100 px-4 py-4">
              <div className="flex flex-col gap-2">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`rounded-md px-3 py-2.5 font-medium transition-colors ${
                      isActiveLink(link.href, link.label)
                        ? "bg-orange-50 text-orange-600"
                        : "text-slate-700 hover:bg-orange-50 hover:text-orange-600"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}

                <div className="mt-2 rounded-xl border border-slate-200 bg-slate-50 p-3">
                  <p className="px-1 pb-2 text-xs font-bold uppercase tracking-[0.24em] text-slate-500">Location</p>
                  <div className="grid gap-2">
                    {topLocationLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center justify-between rounded-lg px-3 py-2 font-medium transition-colors ${
                          pathname === item.href || pathname.startsWith(`${item.href}/`)
                            ? "bg-orange-50 text-orange-600"
                            : "text-slate-700 hover:bg-orange-50 hover:text-orange-600"
                        }`}
                      >
                        {item.label}
                        <MapPin size={15} className="text-orange-600" />
                      </Link>

                      
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-auto space-y-3 border-t border-white/60 bg-white/75 px-4 py-4 backdrop-blur-sm">
              <p className="flex items-start gap-2 text-sm text-slate-700">
                <MapPin size={16} className="mt-0.5 text-orange-600" />
                Ranchi, Ratu Road, R.R Tower
              </p>
              <p className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <Phone size={16} className="text-orange-600" />
                +91 9835983331
              </p>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="https://wa.me/919835983331"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-green-500 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-green-600"
                >
                  WhatsApp
                </a>
                <a
                  href="tel:+919835983331"
                  className="rounded-lg bg-orange-600 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-orange-700"
                >
                  Contact
                </a>
              </div>
            </div>
            </aside>
          </div>
        )}
      </nav>
    </>
  );
}
