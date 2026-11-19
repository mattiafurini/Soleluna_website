"use client";

import { useEffect, useState } from "react";

export function SalonStatusBadge({ className = "" }: { className?: string }) {
  const [status, setStatus] = useState<{
    isOpen: boolean;
    label: string;
  }>({
    isOpen: false,
    label: "Lun - Ven • Fino alle 19:30",
  });

  useEffect(() => {
    const checkStatus = () => {
      // Calcola l'ora nel fuso orario italiano
      const now = new Date();
      const romeDateStr = now.toLocaleString("en-US", { timeZone: "Europe/Rome" });
      const romeDate = new Date(romeDateStr);

      const day = romeDate.getDay(); // 0 = Sun, 1 = Mon, ..., 6 = Sat
      const hours = romeDate.getHours();
      const minutes = romeDate.getMinutes();
      const currentTime = hours * 60 + minutes;

      // Orari:
      // Lun (1), Mer (3), Ven (5): 10:30 (630) - 19:30 (1170)
      // Mar (2), Gio (4): 09:00 (540) - 13:00 (780) e 15:30 (930) - 19:30 (1170)
      // Sab (6), Dom (0): Chiuso

      if (day === 1 || day === 3 || day === 5) {
        if (currentTime >= 630 && currentTime < 1170) {
          return { isOpen: true, label: "Aperto ora • Fino alle 19:30" };
        } else if (currentTime < 630) {
          return { isOpen: false, label: "Apre oggi alle 10:30" };
        } else {
          const nextDayName = day === 5 ? "lunedì" : "domani";
          const nextHour = day === 5 ? "10:30" : "09:00";
          return { isOpen: false, label: `Chiuso • Riapre ${nextDayName} alle ${nextHour}` };
        }
      } else if (day === 2 || day === 4) {
        if (currentTime >= 540 && currentTime < 780) {
          return { isOpen: true, label: "Aperto ora • Fino alle 13:00 (poi 15:30)" };
        } else if (currentTime >= 780 && currentTime < 930) {
          return { isOpen: false, label: "Pausa pranzo • Riapre alle 15:30" };
        } else if (currentTime >= 930 && currentTime < 1170) {
          return { isOpen: true, label: "Aperto ora • Fino alle 19:30" };
        } else if (currentTime < 540) {
          return { isOpen: false, label: "Apre oggi alle 09:00" };
        } else {
          return { isOpen: false, label: "Chiuso • Riapre domani alle 10:30" };
        }
      } else {
        // Sabato o Domenica
        return { isOpen: false, label: "Chiuso nel weekend • Riapre lunedì alle 10:30" };
      }
    };

    setStatus(checkStatus());
    const interval = setInterval(() => {
      setStatus(checkStatus());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className={`inline-flex items-center gap-1.5 ${className}`}>
      <span className="relative flex h-2 w-2 shrink-0">
        {status.isOpen && (
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
        )}
        <span
          className={`relative inline-flex rounded-full h-2 w-2 ${
            status.isOpen ? "bg-emerald-500" : "bg-amber-400/80"
          }`}
        />
      </span>
      <span className="font-medium">{status.label}</span>
    </span>
  );
}
