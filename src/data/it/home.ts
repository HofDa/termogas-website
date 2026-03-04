export default {
  meta: {
    title: "TERMOgas Merano: Climatizzatori e Assistenza Caldaie",
    description:
      "Installazione climatizzatori, manutenzione e assistenza caldaie a Merano e in Burgraviato.",
    canonical: "/it/",
  },

  sections: [
    { type: "hero", key: "hero" },
    { type: "services", key: "services" },
    { type: "process", key: "process" },
    { type: "areas", key: "areas" },
    { type: "faq", key: "faq" },
    { type: "cta", key: "cta" },
  ],

  hero: {
    eyebrow: "Merano · Burgraviato",
    title: "Climatizzatori e assistenza caldaie a Merano",
    subtitle:
      "Un unico riferimento per installazione, manutenzione e assistenza. Interventi chiari, ordinati e vicini al territorio.",
    ctaPrimary: { label: "Invia richiesta", href: "#richiesta" },
    ctaSecondary: { label: "Chiama ora", href: "tel:+39…" },
    highlights: [
      { title: "Zona servita", text: "Merano e dintorni" },
      { title: "Proposte chiare", text: "Senza giri inutili" },
      { title: "Lavoro pulito", text: "Installazione e manutenzione" },
      { title: "Contatto diretto", text: "Telefono e modulo" },
    ],
  },

  services: [
    {
      title: "Installazione climatizzatori",
      points: ["Split e multisplit", "Dimensionamento adatto agli ambienti", "Montaggio e avviamento accurati"],
    },
    {
      title: "Manutenzione climatizzatori",
      points: ["Pulizia filtri ed evaporatore", "Igiene e prevenzione odori", "Controllo resa e stato dell'impianto"],
    },
    {
      title: "Assistenza caldaie",
      points: ["Controlli periodici", "Verifica sicurezza ed efficienza", "Indicazioni chiare sui passi successivi"],
    },
  ],

  process: [
    { title: "Richiesta veloce", text: "Ci descrivi impianto, esigenza o problema in poche righe." },
    { title: "Ricontatto", text: "Chiariamo per telefono i dettagli utili e definiamo il passo giusto." },
    { title: "Intervento", text: "Installazione, manutenzione o sopralluogo con risposta concreta." },
  ],

  areas: {
    title: "Zona servita",
    text: "Merano, Lagundo, Tirolo, Scena, Marlengo, Lana, Cermes, Naturno e dintorni.",
  },

  faq: [
    { q: "Lavorate solo a Merano?", a: "No. Operiamo in Burgraviato e nelle zone vicine." },
    { q: "Seguite sia climatizzatori sia caldaie?", a: "Si. Il sito copre entrambi i servizi principali." },
    { q: "Posso richiedere solo la manutenzione?", a: "Si, sia per climatizzatori sia per caldaie." },
  ],

  cta: {
    id: "richiesta",
    title: "Contatta TERMOgas",
    text: "Scrivici il servizio che ti serve. Ti richiamiamo con una risposta chiara e il passo successivo corretto.",
    primary: { label: "Invia richiesta", href: "#richiesta" },
    secondary: { label: "Chiama direttamente", href: "tel:+39…" },
  },
};
