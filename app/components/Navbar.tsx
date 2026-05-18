"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { createPortal } from "react-dom";
import { ChevronDown, Menu, X, Phone, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { topLocationLinks } from "../packers-movers-jharkhand/locationData";
import { topBiharLocationLinks } from "../packers-movers-bihar/locationData";
import { siteAssets } from "@/lib/site-assets";

type LocationLink = { label: string; href: string };

function LocationLinkList({
  title,
  links,
  pathname,
  onNavigate,
}: {
  title: string;
  links: readonly LocationLink[];
  pathname: string;
  onNavigate: () => void;
}) {
  return (
    <div>
      <div className="border-b border-slate-100 px-4 py-3 text-xs font-bold uppercase tracking-[0.24em] text-slate-500">
        {title}
      </div>
      <div className="p-2">
        {links.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className={`flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium transition ${
              pathname === item.href || pathname.startsWith(`${item.href}/`)
                ? "bg-orange-50 text-orange-700"
                : "text-slate-700 hover:bg-slate-50 hover:text-orange-700"
            }`}
          >
            <span className="min-w-0 flex-1">{item.label}</span>
            <MapPin size={14} className="text-orange-500" />
          </Link>
        ))}
      </div>
    </div>
  );
}

const LOGO_SRC = siteAssets.logo;

const linksBeforeLocation = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services/household" },
  { label: "Gallery", href: "/gallery" },
];

const contactLink = { label: "Contact", href: "/contact" };
const aboutLink = { label: "About", href: "/about" };

const linkHoverClass =
  "transition-colors hover:bg-orange-50 hover:text-orange-600 active:bg-orange-50 active:text-orange-600";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isMobileLocationOpen, setIsMobileLocationOpen] = useState(false);
  const pathname = usePathname();
  const locationCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const closeMobileMenu = () => {
    setIsOpen(false);
    setIsMobileLocationOpen(false);
  };

  const isActiveLink = (href: string, label: string) => {
    if (href === "/") return pathname === "/";
    if (label === "Services") return pathname === "/services" || pathname.startsWith("/services/");
    if (label === "Location") {
      return pathname.startsWith("/packers-movers-jharkhand") || pathname.startsWith("/packers-movers-bihar");
    }
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

    const scrollY = window.scrollY;
    const html = document.documentElement;
    const body = document.body;

    const prevHtmlOverflow = html.style.overflow;
    const prevBodyOverflow = body.style.overflow;
    const prevBodyPosition = body.style.position;
    const prevBodyTop = body.style.top;
    const prevBodyLeft = body.style.left;
    const prevBodyRight = body.style.right;
    const prevBodyWidth = body.style.width;

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";

    return () => {
      html.style.overflow = prevHtmlOverflow;
      body.style.overflow = prevBodyOverflow;
      body.style.position = prevBodyPosition;
      body.style.top = prevBodyTop;
      body.style.left = prevBodyLeft;
      body.style.right = prevBodyRight;
      body.style.width = prevBodyWidth;
      window.scrollTo(0, scrollY);
    };
  }, [isOpen]);

  const mobileDrawer =
    isOpen ? (
      <div className="fixed inset-0 z-[200] lg:hidden" role="dialog" aria-modal="true" aria-label="Mobile menu">
        <button
          type="button"
          aria-label="Close menu overlay"
          className="absolute inset-0 touch-none bg-slate-900/45 transition-opacity duration-300"
          onClick={closeMobileMenu}
        />
        <aside className="fixed right-0 top-0 flex h-[100dvh] w-[86%] max-w-sm flex-col overscroll-contain bg-white shadow-2xl">
          <div
            className="pointer-events-none absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${siteAssets.pages.admin.mobileDrawerBackdrop})`,
            }}
          />
          <div className="pointer-events-none absolute inset-0 bg-white/72 backdrop-blur-[1px]" />

          <div className="relative z-10 flex shrink-0 items-center justify-between border-b border-slate-100 px-4 py-4">
            <Link href="/" onClick={closeMobileMenu} className="flex items-center">
              <div className="relative h-14 w-44 overflow-hidden bg-transparent sm:h-16 sm:w-52">
                <Image src={LOGO_SRC} alt="Sony Packers & Movers" fill className="object-contain" priority unoptimized />
              </div>
            </Link>
            <button
              type="button"
              onClick={closeMobileMenu}
              className="relative z-10 rounded-md p-1 text-slate-700"
              aria-label="Close navigation"
            >
              <X size={28} />
            </button>
          </div>

          <div className="relative z-10 flex min-h-0 flex-1 flex-col overflow-hidden px-4 py-4">
            <div className="flex shrink-0 flex-col gap-2">
              {linksBeforeLocation.slice(0, 1).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className={`rounded-md px-3 py-2.5 font-medium ${linkHoverClass} ${
                    isActiveLink(link.href, link.label) ? "bg-orange-50 text-orange-600" : "text-slate-700"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className={`mt-3 flex min-h-0 flex-col overflow-hidden rounded-xl border border-slate-200 bg-slate-50 ${
              isMobileLocationOpen ? "flex-1" : "shrink-0"
            }`}>
              <button
                type="button"
                onClick={() => setIsMobileLocationOpen((prev) => !prev)}
                className={`flex w-full shrink-0 items-center justify-between px-3 py-2.5 text-left font-semibold transition-colors ${linkHoverClass} ${
                  isActiveLink("/packers-movers-jharkhand", "Location") ||
                  pathname.startsWith("/packers-movers-bihar")
                    ? "text-orange-600"
                    : "text-slate-700"
                }`}
                aria-expanded={isMobileLocationOpen}
                aria-controls="mobile-location-list"
                id="mobile-location-trigger"
              >
                Location
                <ChevronDown
                  size={18}
                  className={`shrink-0 text-slate-600 transition-transform duration-200 ${isMobileLocationOpen ? "rotate-180" : ""}`}
                  aria-hidden
                />
              </button>
              {isMobileLocationOpen ? (
                <div
                  id="mobile-location-list"
                  role="region"
                  aria-labelledby="mobile-location-trigger"
                  className="min-h-0 flex-1 overflow-y-auto overscroll-y-contain border-t border-slate-200 px-2 py-2 [-webkit-overflow-scrolling:touch]"
                >
                  <div className="space-y-4 pb-1">
                    <LocationLinkList
                      title="Jharkhand locations"
                      links={topLocationLinks}
                      pathname={pathname}
                      onNavigate={closeMobileMenu}
                    />
                    <LocationLinkList
                      title="Bihar locations"
                      links={topBiharLocationLinks}
                      pathname={pathname}
                      onNavigate={closeMobileMenu}
                    />
                  </div>
                </div>
              ) : null}
            </div>

            {linksBeforeLocation.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMobileMenu}
                className={`mt-3 block rounded-md px-3 py-2.5 font-medium ${linkHoverClass} ${
                  isActiveLink(link.href, link.label) ? "bg-orange-50 text-orange-600" : "text-slate-700"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="mt-3 shrink-0">
              <Link
                href={contactLink.href}
                onClick={closeMobileMenu}
                className={`block rounded-md px-3 py-2.5 font-medium ${linkHoverClass} ${
                  isActiveLink(contactLink.href, contactLink.label) ? "bg-orange-50 text-orange-600" : "text-slate-700"
                }`}
              >
                {contactLink.label}
              </Link>
            </div>

            <div className="mt-3 shrink-0">
              <Link
                href={aboutLink.href}
                onClick={closeMobileMenu}
                className={`block rounded-md px-3 py-2.5 font-medium ${linkHoverClass} ${
                  isActiveLink(aboutLink.href, aboutLink.label) ? "bg-orange-50 text-orange-600" : "text-slate-700"
                }`}
              >
                {aboutLink.label}
              </Link>
            </div>
          </div>

          <div className="relative z-10 shrink-0 space-y-3 border-t border-white/60 bg-white/90 px-4 py-4 backdrop-blur-sm">
            <p className="flex items-start gap-2 text-sm text-slate-700">
              <MapPin size={16} className="mt-0.5 shrink-0 text-orange-600" />
              Ranchi, Ratu Road, R.R Tower
            </p>
            <p className="flex items-center gap-2 text-sm font-medium text-slate-700">
              <Phone size={16} className="shrink-0 text-orange-600" />
              +91 9835983331
            </p>
            <div className="grid grid-cols-2 gap-2">
              <a
                href="https://wa.me/919835983331?text=Hello%21%20I%20need%20a%20shifting%20quote."
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-green-500 px-3 py-2 text-center text-sm font-semibold text-white transition hover:bg-green-600 active:bg-green-700"
              >
                WhatsApp
              </a>
              <a
                href="tel:+919835983331"
                className="rounded-lg bg-orange-600 px-3 py-2 text-center text-sm font-semibold text-white transition hover:bg-orange-700 active:bg-orange-800"
              >
                Contact
              </a>
            </div>
          </div>
        </aside>
      </div>
    ) : null;

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

          <div className="flex items-center gap-3 text-white">
            <span className="text-xs md:text-xs">WhatsApp Support 24x7</span>

            <a
              href="https://wa.me/919835983331?text=Hello%21%20I%20need%20a%20shifting%20quote."
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
          <Link href="/" onClick={() => setIsLocationOpen(false)} className="flex items-center">
            <div className="relative h-14 w-44 overflow-hidden bg-transparent sm:h-16 sm:w-56">
              <Image src={LOGO_SRC} alt="Sony Packers & Movers" fill className="object-contain" priority unoptimized />
            </div>
          </Link>

          <div className="hidden items-center gap-6 lg:flex">
            {linksBeforeLocation.slice(0, 1).map((link) => (
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

            <div className="relative w-fit" onMouseEnter={openLocationMenu} onMouseLeave={closeLocationMenu}>
              <button
                type="button"
                onClick={() => setIsLocationOpen((prev) => !prev)}
                onFocus={openLocationMenu}
                className={`inline-flex items-center gap-0.5 font-semibold transition-colors ${
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
                // <div
                //   className="absolute right-0 top-full z-50 mt-2 w-[min(100vw-1rem,32rem)] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl"
                //   onMouseEnter={openLocationMenu}
                //   onMouseLeave={closeLocationMenu}
                // >
                <div
  className="absolute left-1/2 top-full z-50 mt-2 w-[min(100vw-1rem,32rem)] -translate-x-1/2 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl"
  onMouseEnter={openLocationMenu}
  onMouseLeave={closeLocationMenu}
>
                  <div className="grid grid-cols-1 divide-y divide-slate-100 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
                    <LocationLinkList
                      title="Jharkhand locations"
                      links={topLocationLinks}
                      pathname={pathname}
                      onNavigate={() => setIsLocationOpen(false)}
                    />
                    <LocationLinkList
                      title="Bihar locations"
                      links={topBiharLocationLinks}
                      pathname={pathname}
                      onNavigate={() => setIsLocationOpen(false)}
                    />
                  </div>
                </div>
              )}
            </div>

            {linksBeforeLocation.slice(1).map((link) => (
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

            <Link
              href={contactLink.href}
              onClick={() => setIsLocationOpen(false)}
              className={`font-semibold transition-colors ${
                isActiveLink(contactLink.href, contactLink.label) ? "text-orange-600" : "text-slate-700 hover:text-orange-600"
              }`}
            >
              {contactLink.label}
            </Link>

            <Link
              href={aboutLink.href}
              onClick={() => setIsLocationOpen(false)}
              className={`font-semibold transition-colors ${
                isActiveLink(aboutLink.href, aboutLink.label) ? "text-orange-600" : "text-slate-700 hover:text-orange-600"
              }`}
            >
              {aboutLink.label}
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="rounded-md p-1 text-slate-700 lg:hidden"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {mobileDrawer && typeof document !== "undefined" ? createPortal(mobileDrawer, document.body) : null}
    </>
  );
}
