"use client";

import { useState, useEffect } from "react";
import { SERVICES, SALON_INFO } from "@/data/salon";
import { Calendar, Clock, MessageCircle, Send, CheckCircle2, User, Phone, Sparkles } from "lucide-react";

export function BookingFormSection() {
  const [selectedService, setSelectedService] = useState(SERVICES[0].name);
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredSlot, setPreferredSlot] = useState("pomeriggio");
  const [specificTime, setSpecificTime] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [clientNotes, setClientNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Set default minimum date to tomorrow
  const [minDate, setMinDate] = useState("");

  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const yyyy = tomorrow.getFullYear();
    const mm = String(tomorrow.getMonth() + 1).padStart(2, "0");
    const dd = String(tomorrow.getDate()).padStart(2, "0");
    setMinDate(`${yyyy}-${mm}-${dd}`);
    setPreferredDate(`${yyyy}-${mm}-${dd}`);

    const handleSelectService = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        setSelectedService(customEvent.detail);
      }
    };

    window.addEventListener("select-service-booking", handleSelectService);
    return () => window.removeEventListener("select-service-booking", handleSelectService);
  }, []);

  const generateWhatsAppMessage = () => {
    const slotLabel =
      preferredSlot === "mattina"
        ? "Mattina (09:00 - 13:00)"
        : preferredSlot === "pomeriggio"
        ? "Pomeriggio (14:30 - 19:00)"
        : `Orario indicativo: ${specificTime || "da concordare"}`;

    return `Ciao Soleluna! ✨
Vorrei richiedere una disponibilità per un appuntamento:

• Trattamento: ${selectedService}
• Data preferita: ${preferredDate || "Da concordare"}
• Fascia oraria: ${slotLabel}
• Nome e Cognome: ${clientName || "Non specificato"}
• Telefono: ${clientPhone || "Non specificato"}${clientNotes ? `\n• Note speciali: ${clientNotes}` : ""}

Potete farmi sapere se avete disponibilità? Grazie!`;
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = generateWhatsAppMessage();
    const url = `https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  const handleOnlineSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send to API route
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service: selectedService,
          date: preferredDate,
          slot: preferredSlot === "specifico" ? specificTime : preferredSlot,
          name: clientName,
          phone: clientPhone,
          notes: clientNotes,
        }),
      });

      if (res.ok || res.status === 200 || res.status === 201) {
        setSubmitted(true);
      } else {
        // Fallback to WhatsApp if API is not yet wired to a live DB
        const msg = generateWhatsAppMessage();
        window.open(`https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`, "_blank");
        setSubmitted(true);
      }
    } catch {
      // In case of network error, fallback to WhatsApp
      const msg = generateWhatsAppMessage();
      window.open(`https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`, "_blank");
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="prenota" className="py-20 bg-gradient-to-b from-[#faf8f5] to-[#f4eee7] scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#ebdcd0] shadow-md">
          {/* Header */}
          <div className="text-center max-w-xl mx-auto space-y-2 mb-8">
            <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-semibold text-[#9c7545] bg-[#faf3eb] px-3 py-1 rounded-full border border-[#edd7c4]">
              <Sparkles className="w-3.5 h-3.5" />
              Prenotazione Semplice
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2b2523]">
              Richiedi il tuo appuntamento
            </h2>
            <p className="text-xs sm:text-sm text-[#665a52]">
              Scegli il trattamento e la fascia oraria che preferisci. Verificheremo l&apos;agenda e ti confermeremo l&apos;orario esatto.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-12 px-4 space-y-4 bg-[#f8f5f1] rounded-2xl border border-[#ebdcd0]">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#e8f5e9] text-[#2e7d32] flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl text-[#2b2523] font-semibold">
                Richiesta Inviata con Successo!
              </h3>
              <p className="text-sm text-[#594d45] max-w-md mx-auto">
                Grazie <strong>{clientName || "per la tua richiesta"}</strong>! Ti risponderemo su WhatsApp o al telefono entro breve per darti conferma dell&apos;orario migliore per te.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2.5 text-xs font-semibold rounded-full bg-[#b38b59] text-white hover:bg-[#9c7545] transition-colors"
              >
                Invia un&apos;altra richiesta
              </button>
            </div>
          ) : (
            <form onSubmit={handleOnlineSubmit} className="space-y-6">
              {/* Row 1: Service selection */}
              <div>
                <label className="block text-xs font-semibold text-[#403630] uppercase tracking-wider mb-2">
                  1. Seleziona il Trattamento Desiderato
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-[#d8c8b8] bg-[#faf8f5] text-[#2b2523] text-sm focus:outline-none focus:ring-2 focus:ring-[#b38b59]/50 transition-all"
                  required
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.name}>
                      {s.name} ({s.duration})
                    </option>
                  ))}
                </select>
              </div>

              {/* Row 2: Date & Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#403630] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#9c7545]" />
                    2. Data Preferita
                  </label>
                  <input
                    type="date"
                    min={minDate}
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[#d8c8b8] bg-[#faf8f5] text-[#2b2523] text-sm focus:outline-none focus:ring-2 focus:ring-[#b38b59]/50"
                    required
                  />
                  <span className="text-[11px] text-[#8c7f76] mt-1 block">
                    Lunedì - Venerdì (Sabato e Domenica chiuso)
                  </span>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#403630] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#9c7545]" />
                    3. Fascia Oraria
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setPreferredSlot("mattina")}
                      className={`py-3 px-2 rounded-xl text-xs font-medium text-center border transition-all ${
                        preferredSlot === "mattina"
                          ? "bg-[#b38b59] text-white border-[#b38b59]"
                          : "bg-[#faf8f5] text-[#594d45] border-[#d8c8b8] hover:bg-[#f2e6d9]"
                      }`}
                    >
                      Mattina
                      <span className="block text-[10px] opacity-80 mt-0.5">09-13</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPreferredSlot("pomeriggio")}
                      className={`py-3 px-2 rounded-xl text-xs font-medium text-center border transition-all ${
                        preferredSlot === "pomeriggio"
                          ? "bg-[#b38b59] text-white border-[#b38b59]"
                          : "bg-[#faf8f5] text-[#594d45] border-[#d8c8b8] hover:bg-[#f2e6d9]"
                      }`}
                    >
                      Pomeriggio
                      <span className="block text-[10px] opacity-80 mt-0.5">14:30-19</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPreferredSlot("specifico")}
                      className={`py-3 px-2 rounded-xl text-xs font-medium text-center border transition-all ${
                        preferredSlot === "specifico"
                          ? "bg-[#b38b59] text-white border-[#b38b59]"
                          : "bg-[#faf8f5] text-[#594d45] border-[#d8c8b8] hover:bg-[#f2e6d9]"
                      }`}
                    >
                      Altro
                      <span className="block text-[10px] opacity-80 mt-0.5">Specifica</span>
                    </button>
                  </div>

                  {preferredSlot === "specifico" && (
                    <input
                      type="text"
                      placeholder="Es. verso le ore 17:15..."
                      value={specificTime}
                      onChange={(e) => setSpecificTime(e.target.value)}
                      className="mt-2 w-full px-3 py-2 rounded-lg border border-[#d8c8b8] bg-[#faf8f5] text-xs text-[#2b2523]"
                    />
                  )}
                </div>
              </div>

              {/* Row 3: Contacts */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#403630] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#9c7545]" />
                    Nome e Cognome
                  </label>
                  <input
                    type="text"
                    placeholder="Es. Maria Rossi"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[#d8c8b8] bg-[#faf8f5] text-[#2b2523] text-sm focus:outline-none focus:ring-2 focus:ring-[#b38b59]/50"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#403630] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#9c7545]" />
                    Telefono / WhatsApp
                  </label>
                  <input
                    type="tel"
                    placeholder="Es. 340 1234567"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[#d8c8b8] bg-[#faf8f5] text-[#2b2523] text-sm focus:outline-none focus:ring-2 focus:ring-[#b38b59]/50"
                    required
                  />
                </div>
              </div>

              {/* Row 4: Notes */}
              <div>
                <label className="block text-xs font-semibold text-[#403630] uppercase tracking-wider mb-2">
                  Note Speciali (Facoltativo)
                </label>
                <textarea
                  rows={2}
                  placeholder="Es. Ho la pelle molto sensibile, prima volta per questo trattamento..."
                  value={clientNotes}
                  onChange={(e) => setClientNotes(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#d8c8b8] bg-[#faf8f5] text-[#2b2523] text-sm focus:outline-none focus:ring-2 focus:ring-[#b38b59]/50"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:flex-1 py-3.5 px-6 rounded-full bg-[#b38b59] hover:bg-[#9c7545] text-white font-medium text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  {isSubmitting ? "Invio in corso..." : "Invia Richiesta di Prenotazione"}
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppSubmit}
                  className="w-full sm:w-auto py-3.5 px-6 rounded-full bg-white hover:bg-neutral-50 text-[#128C7E] border border-[#25D366] font-medium text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  Richiedi Direttamente via WhatsApp
                </button>
              </div>

              <p className="text-center text-[11px] text-[#7e6f65]">
                🔒 La richiesta non è vincolante: ti confermeremo l&apos;orario via messaggio o telefono in base all&apos;agenda del centro.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

