import Link from "next/link";
import { SolelunaLogoIcon } from "@/components/SolelunaLogoIcon";
import { SALON_INFO } from "@/data/salon";
import { ArrowLeft, Sparkles, MessageCircle } from "lucide-react";

export default function NotFound() {
  const whatsappUrl = `https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(
    "Ciao Soleluna! ✨ Stavo visitando il sito ma non ho trovato la pagina che cercavo. Vorrei informazioni."
  )}`;

  return (
    <div className="min-h-screen bg-[#faf8f5] flex flex-col justify-between relative overflow-hidden text-[#2b2523] selection:bg-[#ecdccb]">
      {/* Background ambient orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#ecdccb]/40 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-10 -right-20 w-80 h-80 bg-[#d8b88d]/20 rounded-full blur-3xl pointer-events-none -z-0" />

      {/* Top minimal bar */}
      <header className="p-6 max-w-6xl mx-auto w-full flex items-center justify-between relative z-10">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#9c7545] to-[#d8b88d] flex items-center justify-center text-white shadow-xs">
            <SolelunaLogoIcon className="w-5 h-5 text-white" />
          </div>
          <span className="font-serif text-xl font-semibold tracking-wide text-[#2b2523]">
            Sole<span className="text-[#b38b59]">luna</span>
          </span>
        </Link>
      </header>

      {/* Center 404 message card */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 py-12 relative z-10">
        <div className="max-w-lg w-full text-center space-y-6 p-8 sm:p-12 rounded-[32px] bg-white/90 backdrop-blur-md border border-[#ebdccf] ring-1 ring-[#b38b59]/15 shadow-xl">
          <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#9c7545] to-[#d8b88d] text-white flex items-center justify-center mx-auto shadow-xs border-2 border-white">
            <SolelunaLogoIcon className="w-7 h-7 text-white" />
          </div>

          <div className="inline-block text-[11px] uppercase tracking-widest font-semibold text-[#9c7545] bg-[#faf3eb] px-3.5 py-1 rounded-full border border-[#edd7c4]">
            Errore 404 • Pagina Non Trovata
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl text-[#2b2523] leading-tight">
            Un momento di quiete <span className="italic font-normal text-[#9c7545]">non trovato</span>
          </h1>

          <p className="text-sm text-[#665a52] leading-relaxed max-w-md mx-auto">
            La pagina che stavi cercando non esiste o è stata spostata. Nessun problema: il tuo spazio intimo e raccolto a San Martino ti aspetta.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#2b2523] hover:bg-[#433834] text-white font-medium text-xs shadow-md transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Torna alla Home</span>
            </Link>

            <Link
              href="/trattamenti"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#faf6f1] hover:bg-[#f0e6dc] text-[#2b2523] border border-[#d8c8b8] font-medium text-xs shadow-2xs transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#b38b59]" />
              <span>Sfoglia i Trattamenti</span>
            </Link>
          </div>

          <div className="pt-4 border-t border-[#f0e4d7] text-xs text-[#8c7e75]">
            Serve aiuto immediato?{" "}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#128C7E] hover:underline inline-flex items-center gap-1"
            >
              <MessageCircle className="w-3 h-3 text-[#25D366]" />
              Scrivici su WhatsApp
            </a>
          </div>
        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="p-6 text-center text-xs text-[#9c897d] relative z-10">
        Soleluna Centro Estetico & Benessere • Via Chiesa 114/A, San Martino (FE)
      </footer>
    </div>
  );
}
