export default {
  meta: {
    title: "TERMOgas Meran: Klimaanlagen & Heizungsservice",
    description:
      "Installation von Klimaanlagen, Heizungswartung und direkter Service in Meran und im Burggrafenamt.",
    canonical: "/de/",
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
    eyebrow: "Meran · Burggrafenamt",
    title: "Klimaanlagen und Heizungsservice in Meran",
    subtitle:
      "Ein Ansprechpartner fuer Montage, Wartung und Service. Saubere Ausfuehrung, klare Rueckmeldung und kurze Wege vor Ort.",
    ctaPrimary: { label: "Anfrage senden", href: "#anfrage" },
    ctaSecondary: { label: "Jetzt anrufen", href: "tel:+39…" },
    highlights: [
      { title: "Vor Ort", text: "Meran und Umgebung" },
      { title: "Klare Angebote", text: "Ohne Umwege" },
      { title: "Saubere Arbeit", text: "Montage und Wartung" },
      { title: "Einfach erreichbar", text: "Telefonisch und per Formular" },
    ],
  },

  services: [
    {
      title: "Klimaanlagen Installation",
      points: ["Split- und Multisplit-Loesungen", "Auslegung passend zum Raum", "Saubere Montage und Inbetriebnahme"],
    },
    {
      title: "Klimaanlagen Wartung",
      points: ["Filter- und Verdampferreinigung", "Hygiene und Geruchspraevention", "Pruefung von Leistung und Zustand"],
    },
    {
      title: "Heizungswartung",
      points: ["Regelmaessige Kontrolle", "Sicherheits- und Effizienzcheck", "Klare Empfehlung fuer die naechsten Schritte"],
    },
  ],

  process: [
    { title: "Kurze Anfrage", text: "Du schilderst kurz Anlage, Objekt oder Problem." },
    { title: "Rueckmeldung", text: "Wir klaeren telefonisch die relevanten Details und den sinnvollen naechsten Schritt." },
    { title: "Umsetzung", text: "Montage, Wartung oder Vor-Ort-Termin mit klarer Rueckmeldung." },
  ],

  areas: {
    title: "Einsatzgebiet",
    text: "Meran, Algund, Dorf Tirol, Schenna, Marling, Lana, Tscherms, Naturns und Umgebung.",
  },

  faq: [
    { q: "Arbeitet ihr nur in Meran?", a: "Nein. Wir sind im gesamten Burggrafenamt und in der naeheren Umgebung unterwegs." },
    { q: "Bietet ihr sowohl Klima als auch Heizung an?", a: "Ja. Die Seite deckt beide Bereiche ab: Klimaanlagen und Heizungsservice." },
    { q: "Kann ich auch nur eine Wartung anfragen?", a: "Ja, sowohl fuer Klimaanlagen als auch fuer Heizsysteme." },
  ],

  cta: {
    id: "anfrage",
    title: "TERMOgas kontaktieren",
    text: "Beschreibe kurz dein Anliegen. Wir melden uns mit einer klaren Rueckmeldung und dem passenden naechsten Schritt.",
    primary: { label: "Anfrage senden", href: "#anfrage" },
    secondary: { label: "Direkt anrufen", href: "tel:+39…" },
  },
};
