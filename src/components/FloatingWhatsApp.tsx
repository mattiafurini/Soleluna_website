"use client";

import { SALON_INFO } from "@/data/salon";
import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  const whatsappUrl = `https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(
    "Ciao Soleluna! Vorrei informazioni su un trattamento o verificare una disponibilità."
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contattaci su WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:scale-110 active:scale-95 transition-all duration-300"
      >
        {/* Pulse ripple */}
        <span className="absolute w-full h-full rounded-full bg-[#25D366] opacity-75 animate-ping -z-10" />

        <MessageCircle className="w-7 h-7 fill-white text-[#25D366]" />

        {/* Hover / persistent tooltip */}
        <span className="hidden sm:inline-block absolute right-16 bg-[#2b2523] text-white text-xs font-medium px-3 py-1.5 rounded-xl shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          Scrivici su WhatsApp
        </span>
      </a>
    </div>
  );
}

