import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import PageHeroBanner from "../components/PageHeroBanner";
import QuoteForm from "../components/QuoteForm";

const cities = [
  "Ranchi",
  "Dhanbad",
  "Jamshedpur",
  "Bokaro",
  "Hazaribagh",
  "Deoghar",
  "Giridih",
  "Ramgarh",
  "Dumka",
  "Chaibasa",
  "Koderma",
  "Lohardaga",
  "Pakur",
  "Godda",
  "Chatra",
];

export default function ContactPage() {
  return (
    <>
      <PageHeroBanner
        title="Contact Soni Packers and Movers"
        subtitle="Get quick support, a free quote, and location help for your next move."
        breadcrumb="Contact"
        backgroundImage="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-stretch gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="flex h-full flex-col rounded-3xl bg-slate-950 p-6 text-white shadow-2xl shadow-slate-950/15">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-300">Office Info</p>
              <h2 className="mt-3 text-3xl font-black md:text-4xl">Reach us for booking and support</h2>
              <p className="mt-4 text-slate-300">
                We are available for household shifting, office relocation, vehicle transport, loading, and storage support.
              </p>

              <div className="mt-8 space-y-4">
                <p className="flex gap-3 rounded-2xl bg-white/5 px-4 py-4 text-slate-100">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-orange-400" />
                  Shop no- 302 Anmol plaza Ratu road Ranchi opposite Nirvachan bhawan.
                </p>
                <p className="flex gap-3 rounded-2xl bg-white/5 px-4 py-4 text-slate-100">
                  <Phone size={18} className="mt-0.5 shrink-0 text-orange-400" />
                  +91 6209280901
                </p>
                <p className="flex gap-3 rounded-2xl bg-white/5 px-4 py-4 text-slate-100">
                  <FaWhatsapp size={18} className="mt-0.5 shrink-0 text-green-400" />
                  +91 9835983331
                </p>
                <p className="flex gap-3 rounded-2xl bg-white/5 px-4 py-4 text-slate-100">
                  <Mail size={18} className="mt-0.5 shrink-0 text-orange-400" />
                  info@sonipackers.com
                </p>
                <p className="flex gap-3 rounded-2xl bg-white/5 px-4 py-4 text-slate-100">
                  <Clock size={18} className="mt-0.5 shrink-0 text-orange-400" />
                  Mon-Sun, 24x7 Support
                </p>
              </div>
            </div>

            <div className="h-full rounded-3xl bg-slate-50 p-4 shadow-sm md:p-6">
              <QuoteForm />
            </div>
          </div>

          <section className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h3 className="text-2xl font-black text-slate-950">Cities We Serve in Jharkhand</h3>
            <div className="mt-5 flex flex-wrap gap-3">
              {cities.map((city) => (
                <span
                  key={city}
                  className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 transition-colors hover:bg-blue-100"
                >
                  {city}
                </span>
              ))}
            </div>
            <p className="mt-5 text-slate-500">+ all 24 districts of Jharkhand and pan-India intercity routes</p>
          </section>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-600">Find Us On Map</p>
            <h2 className="mt-3 text-3xl font-black text-slate-950 md:text-4xl">Visit our Ranchi office location</h2>
            <p className="mt-3 text-slate-600">
              You can use the map below to see our office spot and reach us easily from Ratu Road and nearby areas.
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_10px_40px_rgba(15,23,42,0.08)]">
            <iframe
              src="https://www.google.com/maps?q=Shop%20no-%20302%20Anmol%20plaza%20Ratu%20road%20Ranchi%20opposite%20Nirvachan%20bhawan&output=embed"
              title="Soni Packers and Movers Location"
              className="h-[420px] w-full border-0 md:h-[520px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
