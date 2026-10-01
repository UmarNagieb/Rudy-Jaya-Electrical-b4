import { FaWhatsapp } from "react-icons/fa";
import { waLink } from "@/lib/siteData";

export default function FloatingWhatsApp() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hubungi via WhatsApp"
      className="group fixed bottom-5 right-5 z-40 grid place-items-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-green-900/25 transition-all duration-200 ease-out hover:-translate-y-1 hover:scale-105 hover:bg-[#1ebe5d] hover:shadow-xl hover:shadow-green-900/30 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
    >
      <FaWhatsapp className="w-7 h-7 transition-transform duration-200 group-hover:scale-110" aria-hidden="true" />
      <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-md bg-onyx px-3 py-2 text-xs font-semibold text-white opacity-0 shadow-lg transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 translate-x-1">
        Hubungi via WhatsApp
      </span>
    </a>
  );
}