import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { WhatsAppBookingBanner } from "@/components/WhatsAppBookingBanner";
import { TrattamentiContent } from "./TrattamentiContent";

export const metadata: Metadata = {
  title: "Trattamenti & Servizi | Soleluna Centro Estetico Ferrara",
  description:
    "Scopri il listino completo dei trattamenti viso, corpo, massaggi relax, epilazione e semipermanente del Centro Estetico Soleluna a San Martino, Ferrara. Prenota su WhatsApp.",
};

export default function TrattamentiPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f5]">
      <Header />
      <main className="flex-1">
        <TrattamentiContent />
        <WhatsAppBookingBanner />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

