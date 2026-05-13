import { PhoneCall } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const whatsappNumber = "919835983331";
const phoneNumber = "6209280901";

export default function FloatingContactButtons() {
  return (
    <div className="fixed bottom-5 right-4 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      <a
        href={`tel:${phoneNumber}`}
        aria-label="Call Soni Packers and Movers"
        className="group relative flex h-16 w-16 items-center justify-center rounded-full border border-white/80 bg-[#1d74ff] text-white shadow-[0_18px_40px_rgba(29,116,255,0.35)] transition duration-300 ease-out animate-float-slow hover:scale-110 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-300/70"
      >
        <span className="absolute inset-[-7px] rounded-full border border-white/50 opacity-40 animate-pulse" />
        <span className="absolute inset-[6px] rounded-full border border-white/25 opacity-70" />
        <PhoneCall className="relative h-8 w-8 -rotate-12 drop-shadow-[0_1px_1px_rgba(0,0,0,0.18)] transition-transform duration-300 group-hover:scale-110" />
      </a>

      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex h-16 w-16 items-center justify-center rounded-full border border-white/80 bg-[#22c55e] text-white shadow-[0_18px_40px_rgba(34,197,94,0.35)] transition duration-300 ease-out animate-float-slow hover:scale-110 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-green-300/70"
        style={{ animationDelay: "0.9s" }}
      >
        <span className="absolute inset-[-7px] rounded-full border border-white/50 opacity-40 animate-pulse" />
        <span className="absolute inset-[6px] rounded-full border border-white/25 opacity-70" />
        <FaWhatsapp className="relative text-[2.05rem] drop-shadow-[0_1px_1px_rgba(0,0,0,0.18)] transition-transform duration-300 group-hover:scale-110" />
      </a>
    </div>
  );
}
