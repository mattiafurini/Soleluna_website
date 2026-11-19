"use client";

import { SALON_INFO } from "@/data/salon";
import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";

export function FloatingWhatsApp() {
  const whatsappUrl = `https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(
    "Ciao Soleluna! ✨ Vorrei informazioni su un trattamento o verificare una disponibilità."
  )}`;

  return (
    <motion.aside
      aria-label="Contatto rapido WhatsApp"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-[calc(4.5rem+env(safe-area-inset-bottom,0px))] sm:bottom-6 right-4 sm:right-6 z-40 flex items-center gap-3 transform-gpu"
    >
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

        {/* Hover tooltip */}
        <span className="hidden sm:inline-block absolute right-16 bg-[#2b2523] text-white text-xs font-medium px-3 py-1.5 rounded-xl shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          Scrivici su WhatsApp
        </span>
      </a>
    </motion.aside>
  );
}
