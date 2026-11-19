"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { SALON_INFO } from "@/data/salon";
import {
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  ShieldCheck,
  Star,
  Layers,
  Heart,
} from "lucide-react";
import { SolelunaLogoIcon } from "@/components/SolelunaLogoIcon";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (pathname === "/") {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push(`/#${id}`);
    }
  };

  const navLinks = [
    { label: "Chi Siamo", id: "chi-siamo", icon: Heart },
    { label: "Trattamenti", href: "/trattamenti", icon: Layers },
    { label: "Perché Noi", id: "perche-noi", icon: ShieldCheck },
    { label: "Recensioni", id: "recensioni", icon: Star },
    { label: "Dove Siamo", id: "dove-siamo", icon: MapPin },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#faf8f5]/92 backdrop-blur-xl border-b border-[#e5d5c5] shadow-xs"
            : "bg-[#faf8f5]/95 backdrop-blur-md border-b border-[#ebdcd0]"
        }`}
      >
        {/* Top bar info (Desktop only to keep mobile header clean & uncluttered) */}
        <div className="hidden sm:block bg-[#2b2523] text-[#f4ede4] text-xs py-2 px-4">
          <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-4 text-neutral-300">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#b38b59]" />
                <span>San Martino, Ferrara (FE)</span>
              </span>
              <span className="hidden md:flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#b38b59]" />
                <span>Lun - Ven (Fino alle 19:30)</span>
              </span>
            </div>

            <div className="flex items-center gap-4 ml-auto text-xs">
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

        {/* Main Navigation Row */}
        <div
          className={`max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between transition-all duration-300 ${
            scrolled ? "h-14 sm:h-16" : "h-16 sm:h-20"
          }`}
        >
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-[#9c7545] to-[#d8b88d] flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform shrink-0">
              <SolelunaLogoIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div>
              <div className="font-serif text-xl sm:text-2xl tracking-wider font-semibold text-[#2b2523] leading-none">
                Sole<span className="text-[#b38b59]">luna</span>
              </div>
              <div className="text-[9px] sm:text-[10px] tracking-widest uppercase text-[#73655c] font-medium mt-0.5">
                Centro Estetico & Benessere
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-8 text-sm font-medium text-[#4a403a]">
            <a
              href="#chi-siamo"
              onClick={(e) => handleNavClick(e, "chi-siamo")}
              className="hover:text-[#b38b59] transition-colors cursor-pointer"
            >
              Chi Siamo
            </a>
            <Link
              href="/trattamenti"
              className={`transition-colors cursor-pointer ${
                pathname === "/trattamenti" ? "text-[#b38b59] font-semibold" : "hover:text-[#b38b59]"
              }`}
            >
              Trattamenti
            </Link>
            <a
              href="#perche-noi"
              onClick={(e) => handleNavClick(e, "perche-noi")}
              className="hover:text-[#b38b59] transition-colors cursor-pointer"
            >
              Perché Noi
            </a>
            <a
              href="#recensioni"
              onClick={(e) => handleNavClick(e, "recensioni")}
              className="hover:text-[#b38b59] transition-colors cursor-pointer"
            >
              Recensioni
            </a>
            <a
              href="#dove-siamo"
              onClick={(e) => handleNavClick(e, "dove-siamo")}
              className="hover:text-[#b38b59] transition-colors cursor-pointer"
            >
              Dove Siamo
            </a>
          </nav>

          {/* Direct Actions on Right */}
          <div className="flex items-center gap-2">
            {/* Direct Phone button on mobile */}
            <a
              href={`tel:${SALON_INFO.phone.replace(/\s+/g, '')}`}
              aria-label="Chiama il salone"
              className="md:hidden w-8 h-8 rounded-full bg-white border border-[#ebdccf] text-[#9c7545] flex items-center justify-center shadow-2xs hover:bg-[#faf4ee] transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
            </a>

            {/* Direct WhatsApp button on mobile */}
            <a
              href={`https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent("Ciao Soleluna! ✨ Vorrei verificare la disponibilità per un appuntamento.")}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Scrivici su WhatsApp"
              className="md:hidden w-8 h-8 rounded-full bg-[#128C7E] text-white flex items-center justify-center shadow-2xs hover:bg-[#0c6b60] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            {/* Desktop CTA */}
            <a
              href={`https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent("Ciao Soleluna! Vorrei richiedere informazioni sulle disponibilità per un appuntamento.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-full bg-[#128C7E] hover:bg-[#0c6b60] text-white shadow-xs hover:shadow transition-all hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4 text-white" />
              Prenota su WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* ======================================================== */}
      {/* MOBILE PERSISTENT BOTTOM DOCK (App Style Navigation)     */}
      {/* ======================================================== */}
      <nav
        aria-label="Navigazione rapida mobile"
        className="md:hidden fixed bottom-3 left-3 right-3 max-w-md mx-auto z-40 bg-[#faf8f5]/95 backdrop-blur-2xl border border-[#ebdccf] shadow-2xl rounded-2xl p-1.5 flex items-center justify-around text-center"
      >
        {navLinks.map((item, idx) => {
          const Icon = item.icon;
          const isTrattamentiActive = item.href && pathname === item.href;

          if (item.href) {
            return (
              <Link
                key={idx}
                href={item.href}
                className={`flex flex-col items-center justify-center py-1.5 px-2.5 rounded-xl transition-all ${
                  isTrattamentiActive
                    ? "text-[#9c7545] font-semibold"
                    : "text-[#7a6d64] hover:text-[#2b2523]"
                }`}
              >
                <Icon className="w-4 h-4 mb-0.5" />
                <span className="text-[10px] leading-tight">{item.label}</span>
              </Link>
            );
          }

          return (
            <a
              key={idx}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id!)}
              className="flex flex-col items-center justify-center py-1.5 px-2.5 rounded-xl text-[#7a6d64] hover:text-[#9c7545] transition-all cursor-pointer"
            >
              <Icon className="w-4 h-4 mb-0.5" />
              <span className="text-[10px] leading-tight">{item.label}</span>
            </a>
          );
        })}
      </nav>
    </>
  );
}
