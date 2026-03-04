export default {
  meta: {
    title: "Heizungswartung in Meran | TERMOgas",
    description:
      "Heizungswartung, Sicherheitscheck und Service fuer Heizsysteme in Meran und im Burggrafenamt.",
    canonical: "/de/heizungswartung-meran/",
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
    eyebrow: "Meran · Burggrafenamt",
    title: "Heizungswartung in Meran",
    subtitle:
      "Regelmaessige Wartung fuer Sicherheit, Effizienz und einen ruhig laufenden Heizbetrieb im Winter.",
    ctaPrimary: { label: "Wartung anfragen", href: "#anfrage" },
    ctaSecondary: { label: "Jetzt anrufen", href: "tel:+39…" },
  },

  services: [
    {
      title: "Regelmaessige Wartung",
      points: ["Reinigung und Funktionskontrolle", "Verschleiss frueh erkennen", "Betriebssicherheit verbessern"],
    },
    {
      title: "Stoerungsanalyse",
      points: ["Auffaelligkeiten systematisch pruefen", "Praxisnahe Empfehlung zur Behebung", "Klare Aussage statt Ratespiel"],
    },
    {
      title: "Effizienz- und Sicherheitscheck",
      points: ["Verbrauch und Laufverhalten bewerten", "Sichtkontrolle sicherheitsrelevanter Bauteile", "Wartungsintervalle sinnvoll planen"],
    },
  ],

  techDetails: {
    title: "Worauf wir bei Heizungen achten",
    items: [
      { title: "Sicherheit", text: "Wartung reduziert das Risiko von Ausfaellen genau dann, wenn die Anlage gebraucht wird." },
      { title: "Effizienz", text: "Schon kleine Abweichungen bei Verschmutzung oder Einstellung koennen den Verbrauch hochtreiben." },
      { title: "Planbarkeit", text: "Regelmaessige Checks verhindern teure Notfaelle und machen Instandhaltung kalkulierbar." },
    ],
  },

  checklist: {
    title: "Was bei der Wartung geprueft wird",
    bullets: [
      "Zustand und Sauberkeit der relevanten Komponenten",
      "Auffaellige Geraeusche, Temperaturverhalten und Laufzeiten",
      "Sichtpruefung sicherheitsrelevanter Bauteile",
      "Hinweise zu naechsten Wartungsschritten und sinnvollen Intervallen",
    ],
  },

  process: [
    { title: "Anlage und Symptom aufnehmen", text: "Wir klaeren, welche Heizung verbaut ist und welche Auffaelligkeiten bestehen." },
    { title: "Pruefung vor Ort", text: "Sicht- und Funktionskontrolle der Anlage sowie Einordnung von Zustand und Wartungsbedarf." },
    { title: "Empfehlung und naechster Schritt", text: "Du bekommst eine klare Rueckmeldung, was sofort noetig ist und was geplant werden kann." },
  ],

  areas: {
    title: "Einsatzgebiet",
    text: "Meran, Algund, Dorf Tirol, Schenna, Marling, Lana, Tscherms, Naturns und Umgebung.",
  },

  faq: [
    { q: "Wie oft sollte eine Heizung gewartet werden?", a: "In der Regel jaehrlich, damit Sicherheit und Effizienz nicht schleichend schlechter werden." },
    { q: "Lohnt sich Wartung auch ohne Stoerung?", a: "Ja. Viele Probleme entstehen nicht ploetzlich, sondern kuendigen sich ueber Verschleiss oder Verschmutzung an." },
    { q: "Macht Wartung die Heizung sparsamer?", a: "Oft ja, weil verschmutzte oder schlecht eingestellte Anlagen unnoetig Energie verbrauchen." },
  ],

  cta: {
    id: "anfrage",
    title: "Heizungswartung in Meran anfragen",
    text: "Beschreibe kurz deine Anlage oder das Problem. Wir melden uns mit dem passenden naechsten Schritt.",
    primary: { label: "Wartung anfragen", href: "#anfrage" },
    secondary: { label: "Direkt anrufen", href: "tel:+39…" },
  },
};
