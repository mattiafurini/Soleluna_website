"use client";

import Image from "next/image";
import { SALON_INFO } from "@/data/salon";
import { MessageCircle, Phone, Sparkles, Shield, Heart, ArrowDown, Star, MapPin } from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
  const scrollToTrattamenti = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById("trattamenti");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToRecensioni = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById("recensioni");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 bg-gradient-to-b from-[#faf8f5] via-[#f7f2ec] to-[#faf8f5]">
      {/* Decorative ambient glowing background orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-[#ecdccb]/45 via-[#d8b88d]/25 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 -right-24 w-96 h-96 bg-[#ecdccb]/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-[#d8b88d]/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          {/* Pill Badge at top with live pulse */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#ebdccf] text-xs font-medium text-[#7a6454] shadow-2xs hover:border-[#d9c4b1] transition-colors"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
            </span>
            <span className="tracking-wide">Centro Estetico & Benessere a San Martino (FE)</span>
          </motion.div>

          {/* Main editorial heading */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[66px] text-[#2b2523] tracking-tight leading-[1.12]"
          >
            Il tuo momento di{" "}
            <span className="relative inline-block italic font-normal text-[#9c7545]">
              benessere
              <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#b38b59]/50 to-transparent rounded-full" />
            </span>{" "}
            e autentica bellezza.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base sm:text-lg text-[#61554c] leading-relaxed max-w-2xl mx-auto font-normal"
          >
            Benvenuti a <strong className="font-semibold text-[#2b2523]">Soleluna</strong>. Uno spazio intimo e raccolto dove ogni trattamento è studiato sulle esigenze uniche della tua pelle. Niente fretta: solo cura autentica e risultati visibili.
          </motion.p>

          {/* Call to actions */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="pt-2 flex flex-col items-center justify-center gap-4"
          >
            {/* Direct contact buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
              <a
                href={`https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent("Ciao Soleluna! ✨ Vorrei verificare la disponibilità per un appuntamento in salone.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-[260px] h-12 inline-flex items-center justify-center gap-2.5 px-5 rounded-full bg-[#128C7E] hover:bg-[#0c6b60] text-white font-medium text-sm shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 text-center group cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-white shrink-0 group-hover:scale-110 transition-transform" />
                <span>Prenota su WhatsApp</span>
              </a>

              <a
                href={`tel:${SALON_INFO.phone.replace(/\s+/g, '')}`}
                className="w-full sm:w-[260px] h-12 inline-flex items-center justify-center gap-2.5 px-5 rounded-full bg-white hover:bg-[#faf6f1] text-[#2b2523] border border-[#d8c8b8] font-medium text-sm shadow-2xs hover:shadow transition-all text-center group"
              >
                <Phone className="w-4 h-4 text-[#b38b59] shrink-0 group-hover:scale-110 transition-transform" />
                <span>Chiama: {SALON_INFO.phone}</span>
              </a>
            </div>

            {/* Secondary navigation link */}
            <div>
              <a
                href="#trattamenti"
                onClick={scrollToTrattamenti}
                className="inline-flex items-center justify-center gap-1.5 px-5 py-2 text-xs sm:text-sm font-medium text-[#73655c] hover:text-[#2b2523] transition-colors cursor-pointer group"
              >
                <span>Scopri i Trattamenti</span>
                <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Social Proof & Location Mini-Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-2 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-[#73655c]"
          >
            <a
              href="#recensioni"
              onClick={scrollToRecensioni}
              className="inline-flex items-center gap-1.5 hover:text-[#2b2523] transition-colors"
            >
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-semibold text-[#2b2523]">5.0</span>
              <span className="text-[#8c7e75]">(Google Maps)</span>
            </a>

            <span className="hidden sm:inline text-[#d9c4b1]">•</span>

            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#9c7545]" />
              <span>Via Chiesa 114/A, San Martino</span>
            </span>

            <span className="hidden sm:inline text-[#d9c4b1]">•</span>

            <span className="inline-flex items-center gap-1.5 text-emerald-800 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Parcheggio gratuito di fronte</span>
            </span>
          </motion.div>
        </div>

        {/* Editorial Visual Centerpiece with Floating Glassmorphic Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 sm:mt-16 relative max-w-4xl mx-auto"
        >
          {/* Main frame */}
          <div className="relative h-[280px] sm:h-[400px] md:h-[460px] rounded-[32px] sm:rounded-[44px] overflow-hidden border border-[#e8d7c6] shadow-xl group">
            <Image
              src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1400&q=85"
              alt="Ambiente intimo e rilassante Soleluna a San Martino"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 896px"
              className="object-cover object-center transform group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
            {/* Warm gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#241e1b]/70 via-transparent to-black/15" />

            {/* Bottom title in frame */}
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
              <div>
                <span className="text-[11px] uppercase tracking-widest text-[#e8cbb0] font-semibold block mb-1">
                  Atmosfera Esclusiva • San Martino (FE)
                </span>
                <p className="font-serif text-2xl sm:text-3xl font-light tracking-wide drop-shadow-sm">
                  La quiete che cercavi, ad ogni appuntamento.
                </p>
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-xs font-medium text-white self-start sm:self-auto">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Ricevimento solo su appuntamento</span>
              </div>
            </div>
          </div>

          {/* Floating Badge 1: Top Left */}
          <div className="hidden md:flex absolute -top-5 -left-6 items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#ebdccf] shadow-lg text-left">
            <div className="w-9 h-9 rounded-xl bg-[#faf3eb] text-[#9c7545] flex items-center justify-center">
              <Shield className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-semibold text-[#2b2523]">Cabina Privata Singola</div>
              <div className="text-[10px] text-[#7a6454]">Zero condivisione o attese</div>
            </div>
          </div>

          {/* Floating Badge 2: Bottom Right */}
          <div className="hidden md:flex absolute -bottom-5 -right-6 items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#ebdccf] shadow-lg text-left">
            <div className="w-9 h-9 rounded-xl bg-[#faf3eb] text-[#b38b59] flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-semibold text-[#2b2523]">Percorsi Su Misura</div>
              <div className="text-[10px] text-[#7a6454]">Check-up cute sempre incluso</div>
            </div>
          </div>
        </motion.div>

        {/* 3 Pillars of Excellence - Elegant Highlight Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-14 sm:mt-18 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6"
        >
          <div className="bg-white/90 backdrop-blur-xs border border-[#ede2d6] rounded-2xl p-6 text-left shadow-2xs hover:shadow-md transition-all hover:-translate-y-1 group">
            <div className="w-11 h-11 rounded-xl bg-[#faf3eb] border border-[#ebdccf] flex items-center justify-center text-[#9c7545] mb-4 group-hover:bg-[#9c7545] group-hover:text-white transition-colors">
              <Heart className="w-5 h-5 transition-transform group-hover:scale-110" />
            </div>
            <h3 className="font-serif font-semibold text-lg text-[#2b2523] mb-1.5">
              Percorsi Su Misura
            </h3>
            <p className="text-xs sm:text-sm text-[#665a52] leading-relaxed">
              Dalla pulizia viso specifica ai massaggi olistici, ogni seduta è calibrata sulle esigenze stagionali della tua pelle.
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-xs border border-[#ede2d6] rounded-2xl p-6 text-left shadow-2xs hover:shadow-md transition-all hover:-translate-y-1 group">
            <div className="w-11 h-11 rounded-xl bg-[#faf3eb] border border-[#ebdccf] flex items-center justify-center text-[#9c7545] mb-4 group-hover:bg-[#9c7545] group-hover:text-white transition-colors">
              <Shield className="w-5 h-5 transition-transform group-hover:scale-110" />
            </div>
            <h3 className="font-serif font-semibold text-lg text-[#2b2523] mb-1.5">
              Privacy & Zero Attese
            </h3>
            <p className="text-xs sm:text-sm text-[#665a52] leading-relaxed">
              Cabina riservata e appuntamenti distanziati. Nessuna fretta o sovrapposizione: il tempo del salone è solo per te.
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-xs border border-[#ede2d6] rounded-2xl p-6 text-left shadow-2xs hover:shadow-md transition-all hover:-translate-y-1 group">
            <div className="w-11 h-11 rounded-xl bg-[#faf3eb] border border-[#ebdccf] flex items-center justify-center text-[#9c7545] mb-4 group-hover:bg-[#9c7545] group-hover:text-white transition-colors">
              <Sparkles className="w-5 h-5 transition-transform group-hover:scale-110" />
            </div>
            <h3 className="font-serif font-semibold text-lg text-[#2b2523] mb-1.5">
              Cosmetici Certificati
            </h3>
            <p className="text-xs sm:text-sm text-[#665a52] leading-relaxed">
              Formulazioni dermocompatibili senza parabeni né sostanze aggressive, adatte anche alle pelli più sensibili e reattive.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
