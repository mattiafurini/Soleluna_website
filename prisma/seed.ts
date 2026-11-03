import { PrismaClient } from "@prisma/client";
import { SERVICES } from "../src/data/salon";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Inizio popolamento servizi SoleLuna...");

  for (const s of SERVICES) {
    const durationNum = parseInt(s.duration.replace(/\D/g, ""), 10) || 45;
    await prisma.service.upsert({
      where: { slug: s.id },
      update: {
        name: s.name,
        category: s.category,
        description: s.description,
        durationMinutes: durationNum,
        price: s.price || "Su richiesta",
        isPopular: s.popular || false,
      },
      create: {
        slug: s.id,
        name: s.name,
        category: s.category,
        description: s.description,
        durationMinutes: durationNum,
        price: s.price || "Su richiesta",
        isPopular: s.popular || false,
      },
    });
  }

  console.log(`✅ ${SERVICES.length} servizi inseriti/aggiornati con successo nel database.`);
}

main()
  .catch((e) => {
    console.error("Errore durante il seed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

