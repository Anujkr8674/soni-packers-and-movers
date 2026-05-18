"use client";

import Link from "next/link";
import {FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp,} from "react-icons/fa";

import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-xl font-bold text-white">Sony Packers and Movers</h3>
            <p className="text-sm leading-6 text-slate-400">
              Reliable and affordable packers and movers in Ranchi for household shifting, office moves, vehicle transport, and
              storage.
            </p>


              <div className="mt-5 flex items-center gap-3">
    
    <a
      href="https://www.facebook.com/sonypackersmovers"
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-white transition hover:bg-blue-600"
    >
      <FaFacebookF />
    </a>

    <a
      href="https://www.instagram.com/sonypackersmovers"
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-white transition hover:bg-pink-600"
    >
      <FaInstagram />
    </a>

   

    <a
      href="https://www.youtube.com/@SonyPackersandMovers"
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-white transition hover:bg-red-600"
    >
      <FaYoutube />
    </a>

  </div>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-white">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <p><Link href="/" className="hover:text-orange-400">Home</Link></p>
              <p><Link href="/about" className="hover:text-orange-400">About</Link></p>
              <p><Link href="/services/household" className="hover:text-orange-400">Services</Link></p>
              <p><Link href="/gallery" className="hover:text-orange-400">Gallery</Link></p>
              <p><Link href="/contact" className="hover:text-orange-400">Contact</Link></p>
            </div>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-white">Services</h4>
            <div className="space-y-2 text-sm ">
               <p><Link href="/services/household" className="hover:text-orange-400">Household Shifting</Link></p>
                <p><Link href="/services/office" className="hover:text-orange-400">Office Relocation</Link></p>
                <p><Link href="/services/vehicle" className="hover:text-orange-400">Vehicle Transport</Link></p>
                <p><Link href="/services/loading" className="hover:text-orange-400">Loading</Link></p>
                <p><Link href="/services/storage" className="hover:text-orange-400">Storage</Link></p>
                 <p><Link href="/services/domestic" className="hover:text-orange-400">Domestic</Link></p>



             
            </div>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-white">Contact</h4>
            <div className="space-y-3 text-sm">
              <p className="flex items-start gap-2"><MapPin size={20} className="mt-0.5 text-orange-400" />Shop no- 302 Anmol plaza Ratu road Ranchi opposite Nirvachan bhawan.</p>
              
              <p className="flex items-center gap-2"><Phone size={16} className="text-orange-400" />6209280901</p>
              <p className="flex items-center gap-2"><Phone size={16} className="text-orange-400" /> 6209580901</p>
               <p className="flex items-start gap-2"><FaWhatsapp size={20} className="mt-0.5 text-green-400" />9835983331</p>
              <p className="flex items-center gap-2"><Mail size={16} className="text-orange-400" />info@sonypackers.com</p>
              <p className="flex items-center gap-2"><Clock size={16} className="text-orange-400" />24x7 Support</p>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-slate-800 pt-6 text-center text-sm text-slate-400">
          &copy; {year} Sony Packers and Movers. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
