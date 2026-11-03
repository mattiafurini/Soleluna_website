export interface ServiceItem {
  id: string;
  category: 'viso' | 'corpo' | 'massaggi' | 'epilazione' | 'mani-piedi';
  name: string;
  description: string;
  duration: string;
  price?: string;
  popular?: boolean;
}

export interface BusinessData {
  name: string;
  companyName: string;
  owner: string;
  piva: string;
  address: {
    street: string;
    city: string;
    province: string;
    cap: string;
    full: string;
  };
  phone: string;
  whatsappNumber: string; // formato internazionale senza spazi es. 393XXXXXXXXX
  email: string;
  googleMapsUrl: string;
  googleMapsEmbedUrl: string;
  geo: {
    lat: number;
    lng: number;
  };
  hours: { day: string; hours: string; closed?: boolean }[];
}

export const SALON_INFO: BusinessData = {
  name: "SoleLuna",
  companyName: "Soleluna S.a.s. di Pedone Annalisa & C.",
  owner: "Annalisa Pedone",
  piva: "01598440384",
  address: {
    street: "Via Chiesa 114/A",
    city: "Ferrara (San Martino)",
    province: "FE",
    cap: "44124",
    full: "Via Chiesa 114/A, 44124 San Martino, Ferrara (FE)",
  },
  phone: process.env.NEXT_PUBLIC_SALON_PHONE || "+39 340 000 0000",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "393400000000",
  email: process.env.NEXT_PUBLIC_SALON_EMAIL || "info@centroesteticosoleluna.it",
  googleMapsUrl: "https://maps.app.goo.gl/fXKpHtNyhXfv1vi69",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2836.793739726227!2d11.5905357!3d44.7818185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477e4eb5087d8e3d%3A0xc4f9ee1720f9ca68!2sSoleluna%20S.%20A.%20S.%20di%20Pedone%20Annalisa%20C.!5e0!3m2!1sit!2sit!4v1700000000000!5m2!1sit!2sit",
  geo: {
    lat: 44.7818185,
    lng: 11.5931106,
  },
  hours: [
    { day: "Lunedì", hours: "10:30 - 19:30" },
    { day: "Martedì", hours: "09:00 - 13:00 • 15:30 - 19:30" },
    { day: "Mercoledì", hours: "10:30 - 19:30" },
    { day: "Giovedì", hours: "09:00 - 13:00 • 15:30 - 19:30" },
    { day: "Venerdì", hours: "10:30 - 19:30" },
    { day: "Sabato", hours: "Chiuso", closed: true },
    { day: "Domenica", hours: "Chiuso", closed: true },
  ],
};

export const SERVICES: ServiceItem[] = [
  // VISO
  {
    id: "pulizia-viso",
    category: "viso",
    name: "Pulizia Viso Profonda & Rigenerante",
    description: "Detersione accurata, vaporizzazione con ozono, spremitura delicata, peeling enzimatico e maschera personalizzata in base al biotipo cutaneo.",
    duration: "60 min",
    popular: true,
  },
  {
    id: "anti-age-illuminante",
    category: "viso",
    name: "Trattamento Anti-Age & Effetto Glow",
    description: "Trattamento intensivo con sieri all'acido ialuronico puro e vitamine antiossidanti. Distende i tratti e dona luminosità immediata.",
    duration: "50 min",
  },
  {
    id: "pelli-sensibili",
    category: "viso",
    name: "Trattamento Lenitivo Pelli Delicate / Couperose",
    description: "Protocollo calmante ad azione vaso-protettrice con attivi naturali calmanti per ridurre rossori, infiammazioni e secchezza cutanea.",
    duration: "45 min",
  },

  // CORPO
  {
    id: "scrub-sali-marini",
    category: "corpo",
    name: "Scrub Esfoliante ai Sali Marini & Oli Essenziali",
    description: "Rinnovo cellulare profondo per una pelle setosa ed elastica, seguito da un massaggio nutriente con burro caldo.",
    duration: "45 min",
  },
  {
    id: "drenante-anticellulite",
    category: "corpo",
    name: "Trattamento Rimodellante & Drenante Intensivo",
    description: "Azione d'urto mirata contro ritenzione idrica e adiposità localizzate, con bendaggi osmotici ed estratti drenanti concentrati.",
    duration: "60 min",
    popular: true,
  },
  {
    id: "fangoterapia-tonificante",
    category: "corpo",
    name: "Trattamento con Fanghi Bio-Attivi Termali",
    description: "Impacco con argille termali remineralizzanti, ideale per stimolare la microcircolazione e tonificare i tessuti rilassati.",
    duration: "50 min",
  },

  // MASSAGGI
  {
    id: "massaggio-relax",
    category: "massaggi",
    name: "Massaggio Olistico Antistress",
    description: "Movimenti lenti e avvolgenti a lume di candela per sciogliere le tensioni mentali e fisiche con aromaterapia personalizzata.",
    duration: "50 min",
    popular: true,
  },
  {
    id: "decontratturante-schiena",
    category: "massaggi",
    name: "Massaggio Decontratturante Cervicale & Schiena",
    description: "Manovre profonde mirate a sciogliere contratture muscolari, rigidità posturali e fastidi da stress o lavoro sedentario.",
    duration: "40 min",
  },
  {
    id: "linfodrenaggio",
    category: "massaggi",
    name: "Linfodrenaggio Manuale Metodo Vodder",
    description: "Sfioramenti ritmici e delicati che favoriscono il deflusso dei liquidi ristagnanti, donando immediata leggerezza alle gambe.",
    duration: "50 min",
  },

  // EPILAZIONE
  {
    id: "epilazione-completa",
    category: "epilazione",
    name: "Epilazione Completa Gambe & Inguine",
    description: "Cera delicata al biossido di titanio adatta alle pelli più sensibili. Strappo dolce che rispetta il film idrolipidico.",
    duration: "45 min",
  },
  {
    id: "definizione-sopracciglia",
    category: "epilazione",
    name: "Architettura & Definizione Sopracciglia",
    description: "Studio della forma del viso, epilazione di precisione con pinzetta e valorizzazione dello sguardo.",
    duration: "20 min",
  },
  {
    id: "consulenza-laser",
    category: "epilazione",
    name: "Consulenza Gratuita Epilazione Laser Diodo",
    description: "Check-up cutaneo gratuito con anamnesi del fototipo e prova spot per iniziare un percorso di epilazione permanente progressiva.",
    duration: "25 min",
    popular: true,
  },

  // MANI & PIEDI
  {
    id: "semipermanente-mani",
    category: "mani-piedi",
    name: "Manicure & Smalto Semipermanente con Rinforzo",
    description: "Cura minuziosa delle cuticole, limatura anatomica, stesura con rinforzo e colore a scelta tra oltre 60 tonalità di tendenza.",
    duration: "50 min",
    popular: true,
  },
  {
    id: "pedicure-spa",
    category: "mani-piedi",
    name: "Pedicure Curativo & Estetico Spa",
    description: "Pediluvio rilassante con sali balsamici, rimozione callosità e ispessimenti, scrub rigenerante, massaggio e smalto.",
    duration: "50 min",
  },
  {
    id: "paraffina-nutriente",
    category: "mani-piedi",
    name: "Trattamento Intensivo Maschera alla Paraffina",
    description: "Bagno caldo alla paraffina per mani o piedi profondamente screpolati, secchi o disidratati. Risultato vellutato istantaneo.",
    duration: "30 min",
  },
];

export interface TestimonialItem {
  name: string;
  badge?: string;
  treatment?: string;
  quote: string;
  rating: number;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    name: "Noami Milan",
    badge: "Local Guide su Google",
    quote: "Professionalità, competenza, disponibilità e gentilezza, sono quattro dei tanti aggettivi positivi del centro estetico Soleluna. Annalisa, la titolare del centro estetico, ti accoglie sempre con il sorriso, oltre a metterti subito a tuo agio per concederti piccoli momenti di vere coccole!",
    rating: 5,
  },
  {
    name: "Morena Gallerani",
    badge: "Local Guide su Google",
    quote: "Una validissima professionista, una bellissima persona, due mani che fanno miracoli, fortunate le persone che hanno la fortuna di sperimentare i suoi trattamenti.",
    rating: 5,
  },
  {
    name: "Paola Montanari",
    badge: "Local Guide su Google",
    quote: "Bravissima estetista e non solo. Fantastici i massaggi.",
    rating: 5,
  },
];

