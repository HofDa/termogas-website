export default {
  meta: {
    title: "Assistenza caldaie a Merano | TERMOgas",
    description:
      "Manutenzione e assistenza caldaie a Merano e in Burgraviato per sicurezza, continuita di esercizio ed efficienza.",
    canonical: "/it/assistenza-caldaie-merano/",
  },

  sections: [
    { type: "hero", key: "hero" },
    { type: "services", key: "services" },
    { type: "techDetails", key: "techDetails" },
    { type: "checklist", key: "checklist" },
    { type: "process", key: "process" },
    { type: "areas", key: "areas" },
    { type: "faq", key: "faq" },
    { type: "cta", key: "cta" },
  ],

  hero: {
    eyebrow: "Merano · Burgraviato",
    title: "Assistenza caldaie a Merano",
    subtitle:
      "Controlli periodici, verifica sicurezza e manutenzione per evitare guasti e mantenere la caldaia efficiente.",
    ctaPrimary: { label: "Richiedi manutenzione", href: "#richiesta" },
    ctaSecondary: { label: "Chiama ora", href: "tel:+39…" },
  },

  services: [
    {
      title: "Manutenzione periodica",
      points: ["Pulizia e controllo funzionale", "Riduzione del rischio guasti", "Maggiore continuita di esercizio"],
    },
    {
      title: "Verifica anomalie",
      points: ["Analisi dei sintomi segnalati", "Controlli pratici sul posto", "Indicazioni chiare sui passi successivi"],
    },
    {
      title: "Efficienza e sicurezza",
      points: ["Valutazione del rendimento", "Controllo visivo delle parti critiche", "Pianificazione corretta degli interventi"],
    },
  ],

  techDetails: {
    title: "Cosa conta davvero nella manutenzione",
    items: [
      { title: "Sicurezza", text: "Una manutenzione regolare riduce il rischio di fermo impianto proprio nei periodi piu freddi." },
      { title: "Consumi", text: "Una caldaia sporca o fuori regolazione lavora peggio e puo consumare di piu." },
      { title: "Prevenzione", text: "Intervenire prima evita chiamate urgenti e costi concentrati in piena stagione." },
    ],
  },

  checklist: {
    title: "Controlli tipici",
    bullets: [
      "Stato generale e pulizia delle parti rilevanti",
      "Rumori anomali, temperature e comportamento in esercizio",
      "Controllo visivo degli elementi critici per la sicurezza",
      "Indicazioni su frequenza e prossima manutenzione",
    ],
  },

  process: [
    { title: "Raccolta informazioni", text: "Capire modello impianto, storico manutentivo e sintomi principali." },
    { title: "Controllo sul posto", text: "Verifica tecnica della caldaia e valutazione dello stato generale dell'impianto." },
    { title: "Esito chiaro", text: "Ti indichiamo cosa fare subito e cosa pianificare con calma." },
  ],

  areas: {
    title: "Zona servita",
    text: "Merano, Lagundo, Tirolo, Scena, Marlengo, Lana, Cermes, Naturno e dintorni.",
  },

  faq: [
    { q: "Ogni quanto va fatta la manutenzione?", a: "Di norma una volta all'anno, per mantenere sicurezza, affidabilita ed efficienza." },
    { q: "Serve manutenzione anche se la caldaia funziona?", a: "Si, perche molte anomalie si sviluppano lentamente e si evitano con controlli regolari." },
    { q: "La manutenzione aiuta a consumare meno?", a: "Spesso si, specialmente quando sporco o regolazioni non corrette peggiorano il rendimento." },
  ],

  cta: {
    id: "richiesta",
    title: "Richiedi assistenza caldaie a Merano",
    text: "Scrivici due righe sull'impianto o sul problema. Ti richiamiamo con il passo successivo piu adatto.",
    primary: { label: "Invia richiesta", href: "#richiesta" },
    secondary: { label: "Chiama direttamente", href: "tel:+39…" },
  },
};
