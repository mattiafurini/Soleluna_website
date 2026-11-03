import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { service, date, slot, name, phone, email, notes } = body;

    // Validazione campi essenziali
    if (!name || !phone || !service) {
      return NextResponse.json(
        { error: "I campi Nome, Telefono e Trattamento sono obbligatori." },
        { status: 400 }
      );
    }

    const bookingDate = date ? new Date(date) : new Date();

    // Se DATABASE_URL è configurato, salviamo su PostgreSQL
    if (process.env.DATABASE_URL) {
      try {
        const savedBooking = await prisma.bookingRequest.create({
          data: {
            clientName: name,
            clientPhone: phone,
            clientEmail: email || null,
            serviceName: service,
            preferredDate: bookingDate,
            preferredSlot: slot || "pomeriggio",
            notes: notes || null,
            status: "PENDING",
          },
        });

        return NextResponse.json(
          {
            success: true,
            message: "Richiesta registrata con successo su database.",
            bookingId: savedBooking.id,
          },
          { status: 201 }
        );
      } catch (dbError) {
        console.warn("Avviso database (PostgreSQL non raggiungibile o non inizializzato):", dbError);
        // Fallback graceful: non blocchiamo la cliente
      }
    }

    // Modalità fallback o locale (log a console)
    console.log("[RICHIESTA PRENOTAZIONE SOLELUNA RICEVUTA]:", {
      name,
      phone,
      service,
      date: bookingDate.toISOString(),
      slot,
      notes,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Richiesta ricevuta. L'estetista ti ricontatterà a breve.",
        fallback: !process.env.DATABASE_URL,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Errore elaborazione richiesta booking:", error);
    return NextResponse.json(
      { error: "Si è verificato un errore durante l'invio della richiesta." },
      { status: 500 }
    );
  }
}

// Endpoint GET per consultare le richieste (predisposto per il pannello Admin)
export async function GET() {
  try {
    if (!process.env.DATABASE_URL) {
      return NextResponse.json({
        message: "Database non ancora collegato. Imposta DATABASE_URL nel file .env",
        bookings: [],
      });
    }

    const bookings = await prisma.bookingRequest.findMany({
      orderBy: { createdAt: "desc" },
      take: 50,
    });

    return NextResponse.json({ bookings });
  } catch (error) {
    console.error("Errore recupero richieste:", error);
    return NextResponse.json({ error: "Errore recupero richieste" }, { status: 500 });
  }
}
