# 🌿 SoleLuna — Centro Estetico & Benessere

Sito web moderno, veloce e ottimizzato per dispositivi mobili per il centro estetico **SoleLuna** a San Martino, Ferrara.

Progettato con un approccio *mobile-first* per ispirare fiducia, valorizzare i trattamenti e massimizzare le conversioni attraverso il contatto diretto via **WhatsApp** e **chiamata telefonica**, integrandosi perfettamente con la gestione tramite agenda fisica del salone.

---

## 🚀 Caratteristiche Principali

* **Design Rilassante & Mobile-First:** Palette cromatica calda (toni avorio, sabbia, oro delicato e terracotta), componenti touch-friendly per smartphone e zero scorrimento anomalo.
* **Prenotazioni Dirette via WhatsApp:** Ciascuna scheda trattamento include il pulsante *"Richiedi Info & Prenota"* che apre WhatsApp con il testo precompilato relativo al trattamento selezionato.
* **Integrazione Google Maps & Local SEO:** 
  * Indirizzo ufficiale: *Via Chiesa 114/A, 44124 San Martino, Ferrara (FE)*.
  * Tasto rapido *"Apri Navigatore Maps"* per aprire Google Maps o Apple Mappe con un tap.
  * Dati strutturati `LocalBusiness` / `BeautySalon` (Schema.org JSON-LD) per il posizionamento sui motori di ricerca.
* **Conformità Normativa Italiana (P.IVA & GDPR):**
  * Esposizione obbligatoria della Partita IVA in Home Page (Art. 35 D.P.R. 633/72).
  * Dati societari completi nel footer (Art. 2250 Codice Civile per società S.a.s.).
  * Nessun cookie di tracciamento o profilazione di terze parti (nessun cookie banner invasivo richiesto).
* **Architettura Predisposta per Database:** Modelli Prisma e API endpoint già configurati per PostgreSQL, pronti per l'attivazione futura di un sistema di prenotazione con database.

---

## 🛠️ Stack Tecnologico

* **Framework:** [Next.js](https://nextjs.org/) (App Router) + React 19
* **Linguaggio:** [TypeScript](https://www.typescriptlang.org/)
* **Stile:** [Tailwind CSS v4](https://tailwindcss.com/)
* **Icone:** [Lucide React](https://lucide.dev/)
* **ORM & Database:** [Prisma ORM](https://www.prisma.io/) + PostgreSQL

---

## 📁 Struttura del Progetto

```text
SoleLuna/
├── prisma/
│   ├── schema.prisma         # Schema database PostgreSQL (Servizi, Richieste, Admin)
│   └── seed.ts               # Script di popolamento iniziale del database
├── public/                   # Asset statici
├── src/
│   ├── app/
│   │   ├── api/bookings/     # API Route per gestione prenotazioni (GET / POST)
│   │   ├── globals.css       # Stili globali e variabili Tailwind
│   │   ├── layout.tsx        # Layout radice con font e Schema.org JSON-LD
│   │   └── page.tsx          # Homepage del salone
│   ├── components/
│   │   ├── Header.tsx        # Barra di navigazione desktop e menu drawer mobile
│   │   ├── Hero.tsx          # Sezione d'impatto con badge Google 5.0 e CTA
│   │   ├── AboutSection.tsx  # Filosofia e presentazione titolare
│   │   ├── ServicesSection.tsx # Catalogo trattamenti a schede con filtri
│   │   ├── TrustSection.tsx  # Recensioni clienti e 4 pilastri di qualità
│   │   ├── WhatsAppBookingBanner.tsx # Sezione invito prenotazione WhatsApp/Telefono
│   │   ├── LocationSection.tsx # Mappa interattiva, orari ufficiali e parcheggio
│   │   ├── Footer.tsx        # Footer con dati societari di legge e recapiti
│   │   ├── FloatingWhatsApp.tsx # Pulsante galleggiante WhatsApp sticky
│   │   └── BookingFormSection.tsx # (Opzionale) Modulo di prenotazione interattivo
│   ├── data/
│   │   └── salon.ts          # File unico con recapiti, orari ufficiali e catalogo servizi
│   └── lib/
│       └── prisma.ts         # Singleton client Prisma
├── .env.example              # Variabili d'ambiente di esempio
└── package.json
```

---

## 💻 Avvio in Locale

### 1. Prerequisiti
* Node.js v18+ o v20+
* npm

### 2. Installazione
```bash
# Clona il repository o entra nella cartella
cd SoleLuna

# Installa le dipendenze
npm install

# Genera il client Prisma
npx prisma generate
```

### 3. Avvio Server di Sviluppo
```bash
npm run dev
```
Apri il browser su [http://localhost:3000](http://localhost:3000).

Per testarlo dal tuo smartphone sotto la stessa rete Wi-Fi:
```bash
npm run dev -- -H 0.0.0.0
```
e visita `http://<IP_LOCALE_DEL_PC>:3000` dal telefono.

---

## ☁️ Deploy su Macchina Virtuale Azure (Linux)

### 1. Build di Produzione
Sulla macchina virtuale Azure:
```bash
npm install
npx prisma generate
npm run build
```

### 2. Esecuzione continua con PM2
```bash
sudo npm install -g pm2
pm2 start npm --name "soleluna" -- start -- -p 3000
pm2 startup
pm2 save
```

### 3. Configurazione Firewall Azure (Inbound Rule)
Nel portale Azure ➔ Macchina Virtuale ➔ **Networking**:
* Aggiungi una regola in ingresso (**Inbound port rule**):
  * **Porta:** `3000` (oppure `80` se utilizzi un reverse proxy Nginx)
  * **Protocollo:** TCP
  * **Azione:** Allow

Il sito sarà raggiungibile all'indirizzo:
```text
http://<IP_PUBBLICO_AZURE>:3000
```

---

## ⚙️ Personalizzazione Rapida

Tutti i dati dell'attività (orari, telefono, WhatsApp, indirizzo e lista trattamenti) sono centralizzati in:
👉 [`src/data/salon.ts`](src/data/salon.ts)

Modificando questo singolo file, le informazioni si aggiornano automaticamente in tutte le sezioni del sito, nei pulsanti WhatsApp e nei metadati SEO per Google.

---

## 📄 Licenza
Progetto ad uso esclusivo per **Soleluna S.a.s. di Pedone Annalisa & C.**
