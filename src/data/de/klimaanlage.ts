export default {
  meta: {
    title: "Klimaanlagen Installation in Meran | TERMOgas",
    description:
      "Fachgerechte Installation von Split- & Multisplit-Klimaanlagen in Meran und im Burggrafenamt. Effizient, leise, sauber montiert.",
    canonical: "/de/klimaanlage-meran/",
  },

  sections: [
    { type: "hero", key: "hero" },
    { type: "services", key: "services" },
    { type: "techDetails", key: "techDetails" },   // DE extra
    { type: "checklist", key: "checklist" },       // DE extra
    { type: "process", key: "process" },
    { type: "areas", key: "areas" },
    { type: "faq", key: "faq" },
    { type: "cta", key: "cta" },
  ],

  hero: {
    eyebrow: "Meran · Burggrafenamt",
    title: "Klimaanlagen Installation in Meran",
    subtitle:
      "Split- & Multisplitanlagen: korrekt dimensioniert, leise montiert, effizient im Betrieb. 🔥❄️",
    ctaPrimary: { label: "Angebot anfordern", href: "#anfrage" },
    ctaSecondary: { label: "Jetzt anrufen", href: "tel:+39…" },
  },

  services: [
    {
      title: "Split & Multisplit Montage",
      points: ["Wohnung, Haus, Büro", "Saubere Leitungsführung", "Inbetriebnahme & Einweisung"],
    },
    {
      title: "Auslegung & Beratung",
      points: ["Leistung passend zur Raumgröße", "SEER/SCOP verständlich erklärt", "Gerätewahl nach Bedarf"],
    },
    {
      title: "Wartung & Hygiene",
      points: ["Filter & Verdampfer-Reinigung", "Geruchs-/Schimmelprävention", "Effizienzcheck"],
    },
  ],

  techDetails: {
    title: "Technik, die zählt (ohne Marketing-Nebel)",
    items: [
      { title: "Dimensionierung", text: "Zu groß ≠ besser. Wir vermeiden Takten, Lärm und unnötigen Verbrauch." },
      { title: "Schallschutz", text: "Aufstellung, Entkopplung und Luftführung – damit Schlafzimmer wirklich ruhig bleiben." },
      { title: "Effizienz", text: "Inverter-Technik + sinnvoller Betrieb = Komfort bei kontrollierten Kosten." },
    ],
  },

  checklist: {
    title: "Qualitäts-Checkliste Montage",
    bullets: [
      "Saubere Kernbohrung & Kondensatführung",
      "Dichtheitsprüfung / sichere Verbindungen",
      "Vibrationsdämpfer & optimale Außengerät-Position",
      "Einweisung: Bedienung, Filterpflege, Wartungsintervalle",
    ],
  },

  process: [
    { title: "Kurzcheck", text: "Nutzung, Raumdaten, Wünsche (kühlen, entfeuchten, ggf. heizen)." },
    { title: "Sopralluogo (wenn nötig)", text: "Positionen, Leitungswege, Kondensat, Schall." },
    { title: "Montage & Inbetriebnahme", text: "Fachgerechte Installation + Testlauf." },
  ],

  areas: {
    title: "Einsatzgebiet",
    text: "Meran, Algund, Dorf Tirol, Schenna, Marling, Lana, Tscherms, Naturns und Umgebung.",
  },

  faq: [
    { q: "Split oder Multisplit?", a: "Split für einzelne Räume; Multisplit für mehrere Räume mit einem Außengerät." },
    { q: "Wie oft Wartung?", a: "Meist jährlich – für Hygiene, Leistung und Geruchsprävention." },
    { q: "Warum ist Dimensionierung so wichtig?", a: "Falsche Auslegung erhöht Verbrauch, Geräusch und Verschleiß." },
  ],

  cta: {
    id: "anfrage",
    title: "Klimaanlage in Meran installieren lassen?",
    text: "Wir melden uns zeitnah mit einem klaren Vorschlag – passend zu Raum, Budget und Anforderungen.",
    primary: { label: "Angebot anfordern", href: "#anfrage" },
    secondary: { label: "Direkt anrufen", href: "tel:+39…" },
  },
};
