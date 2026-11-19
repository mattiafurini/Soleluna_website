"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { SALON_INFO } from "@/data/salon";
import { Phone, MapPin, Clock, Menu, X, MessageCircle, ArrowRight } from "lucide-react";
import { SolelunaLogoIcon } from "@/components/SolelunaLogoIcon";
import { motion, AnimatePresence } from "motion/react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
    setMobileMenuOpen(false);
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
    { label: "Chi Siamo", id: "chi-siamo" },
    { label: "Trattamenti", href: "/trattamenti" },
    { label: "Perché Noi", id: "perche-noi" },
    { label: "Recensioni", id: "recensioni" },
    { label: "Dove Siamo", id: "dove-siamo" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#faf8f5]/90 backdrop-blur-xl border-b border-[#e5d5c5] shadow-xs"
          : "bg-[#faf8f5]/95 backdrop-blur-md border-b border-[#ebdcd0]"
      }`}
    >
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
      <div
        className={`max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between transition-all duration-300 ${
          scrolled ? "h-16 sm:h-18" : "h-20"
        }`}
      >
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#9c7545] to-[#d8b88d] flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform">
            <SolelunaLogoIcon className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="font-serif text-2xl tracking-wider font-semibold text-[#2b2523]">
              Sole<span className="text-[#b38b59]">luna</span>
            </div>
            <div className="text-[10px] tracking-widest uppercase text-[#73655c] -mt-1 font-medium">
              Centro Estetico & Benessere
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#4a403a]">
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

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent("Ciao Soleluna! Vorrei richiedere informazioni sulle disponibilità per un appuntamento.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-full bg-[#128C7E] hover:bg-[#0c6b60] text-white shadow-xs hover:shadow transition-all hover:-translate-y-0.5"
          >
            <MessageCircle className="w-4 h-4 text-white" />
            Prenota su WhatsApp
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl text-[#2b2523] hover:bg-[#eeddcc]/50 transition-colors"
          aria-label={mobileMenuOpen ? "Chiudi menu" : "Apri menu"}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Animated Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden border-t border-[#ebdcd0] bg-[#faf8f5]/98 backdrop-blur-2xl shadow-xl"
          >
            <div className="px-6 py-6 space-y-5">
              <nav className="flex flex-col space-y-1">
                {navLinks.map((item, idx) => {
                  if (item.href) {
                    return (
                      <Link
                        key={idx}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center justify-between py-2.5 border-b border-[#f0e4d8] text-base font-medium transition-colors ${
                          pathname === item.href ? "text-[#b38b59] font-semibold" : "text-[#4a403a]"
                        }`}
                      >
                        <span>{item.label}</span>
                        <ArrowRight className="w-4 h-4 text-[#b38b59]" />
                      </Link>
                    );
                  }

                  return (
                    <a
                      key={idx}
                      href={`#${item.id}`}
                      onClick={(e) => handleNavClick(e, item.id!)}
                      className="flex items-center justify-between py-2.5 border-b border-[#f0e4d8] text-base font-medium text-[#4a403a] hover:text-[#b38b59] transition-colors"
                    >
                      <span>{item.label}</span>
                      <ArrowRight className="w-4 h-4 text-[#c4b1a1]" />
                    </a>
                  );
                })}
              </nav>

              <div className="pt-2 flex flex-col gap-2.5">
                <a
                  href={`https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent("Ciao Soleluna! Vorrei richiedere disponibilità per un appuntamento.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3.5 text-sm font-semibold rounded-full bg-[#128C7E] text-white shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 text-white" />
                  Prenota via WhatsApp
                </a>
                <a
                  href={`tel:${SALON_INFO.phone.replace(/\s+/g, '')}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold rounded-full border border-[#d8c8b8] text-[#2b2523] bg-white shadow-2xs"
                >
                  <Phone className="w-4 h-4 text-[#b38b59]" />
                  Chiama in Salone: {SALON_INFO.phone}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
