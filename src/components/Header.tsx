"use client";

import { useState } from "react";
import Link from "next/link";
import { SALON_INFO } from "@/data/salon";
import { Phone, MapPin, Clock, Menu, X, Sparkles, MessageCircle } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#faf8f5]/95 backdrop-blur-md border-b border-[#ebdcd0] transition-all">
      {/* Top bar info */}
      <div className="bg-[#2b2523] text-[#f4ede4] text-xs py-2 px-4">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 text-neutral-300">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#b38b59]" />
              <span className="hidden sm:inline">San Martino, Ferrara</span>
              <span className="sm:hidden">Ferrara</span>
            </span>
            <span className="hidden md:flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#b38b59]" />
              <span>Lun - Ven (Fino alle 19:30)</span>
            </span>
          </div>

          <div className="flex items-center gap-4 ml-auto text-xs">
            <a
              href={SALON_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-[#e0c4a4] transition-colors"
            >
              <span className="text-amber-400">★★★★★</span>
              <span className="hidden sm:inline font-medium">5.0 su Google</span>
            </a>
            <a
              href={`tel:${SALON_INFO.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 font-medium hover:text-[#e0c4a4] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#b38b59]" />
              <span>{SALON_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#9c7545] to-[#d8b88d] flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
            <Sparkles className="w-5 h-5 text-amber-100" />
          </div>
          <div>
            <div className="font-serif text-2xl tracking-wider font-semibold text-[#2b2523]">
              Sole<span className="text-[#b38b59]">Luna</span>
            </div>
            <div className="text-[10px] tracking-widest uppercase text-[#73655c] -mt-1 font-medium">
              Centro Estetico & Benessere
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#4a403a]">
          <Link href="#chi-siamo" className="hover:text-[#b38b59] transition-colors">
            Chi Siamo
          </Link>
          <Link href="#trattamenti" className="hover:text-[#b38b59] transition-colors">
            Trattamenti
          </Link>
          <Link href="#perche-noi" className="hover:text-[#b38b59] transition-colors">
            Perché Noi
          </Link>
          <Link href="#recensioni" className="hover:text-[#b38b59] transition-colors">
            Recensioni
          </Link>
          <Link href="#dove-siamo" className="hover:text-[#b38b59] transition-colors">
            Dove Siamo
          </Link>
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent("Ciao SoleLuna! Vorrei richiedere informazioni sulle disponibilità per un appuntamento.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-full bg-[#128C7E] hover:bg-[#0c6b60] text-white shadow-sm hover:shadow transition-all"
          >
            <MessageCircle className="w-4 h-4 text-white" />
            Prenota su WhatsApp
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-[#2b2523] hover:bg-[#eeddcc]/50 transition-colors"
          aria-label="Apri menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#ebdcd0] bg-[#faf8f5] px-6 py-6 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-3 text-base font-medium text-[#4a403a]">
            <Link
              href="#chi-siamo"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 border-b border-[#f0e4d8] hover:text-[#b38b59]"
            >
              Chi Siamo
            </Link>
            <Link
              href="#trattamenti"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 border-b border-[#f0e4d8] hover:text-[#b38b59]"
            >
              Trattamenti & Servizi
            </Link>
            <Link
              href="#perche-noi"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 border-b border-[#f0e4d8] hover:text-[#b38b59]"
            >
              Perché Noi
            </Link>
            <Link
              href="#recensioni"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 border-b border-[#f0e4d8] hover:text-[#b38b59]"
            >
              Recensioni Clienti
            </Link>
            <Link
              href="#dove-siamo"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 border-b border-[#f0e4d8] hover:text-[#b38b59]"
            >
              Orari & Posizione
            </Link>
          </nav>

          <div className="pt-2 flex flex-col gap-2.5">
            <a
              href={`https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent("Ciao SoleLuna! Vorrei richiedere disponibilità per un appuntamento.")}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold rounded-xl bg-[#128C7E] text-white shadow-sm"
            >
              <MessageCircle className="w-5 h-5 text-white" />
              Prenota su WhatsApp
            </a>
            <a
              href={`tel:${SALON_INFO.phone.replace(/\s+/g, '')}`}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold rounded-xl border border-[#d8c8b8] text-[#2b2523] bg-white"
            >
              <Phone className="w-4 h-4 text-[#b38b59]" />
              Chiama in Salone
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

