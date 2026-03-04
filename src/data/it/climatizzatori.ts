export default {
  meta: {
    title: "Installazione climatizzatori a Merano | TERMOgas",
    description:
      "Installazione di climatizzatori split e multisplit a Merano e in Burgraviato. Soluzioni silenziose, efficienti e pulite.",
    canonical: "/it/climatizzatori-merano/",
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
    title: "Installazione climatizzatori a Merano",
    subtitle:
      "Split e multisplit dimensionati correttamente, montati con cura e pensati per comfort, silenzio ed efficienza.",
    ctaPrimary: { label: "Richiedi un preventivo", href: "#richiesta" },
    ctaSecondary: { label: "Chiama ora", href: "tel:+39…" },
  },

  services: [
    {
      title: "Montaggio split e multisplit",
      points: ["Appartamenti, case e uffici", "Percorsi tubazioni ordinati", "Avviamento e spiegazione d'uso"],
    },
    {
      title: "Consulenza e dimensionamento",
      points: ["Potenza adatta agli ambienti", "SEER e SCOP spiegati in modo chiaro", "Scelta macchina in base all'uso"],
    },
    {
      title: "Manutenzione e igiene",
      points: ["Pulizia filtri ed evaporatore", "Prevenzione odori e muffe", "Verifica resa ed efficienza"],
    },
  ],

  techDetails: {
    title: "Dettagli tecnici che fanno la differenza",
    items: [
      { title: "Dimensionamento", text: "Un impianto sovradimensionato consuma di piu, fa piu rumore e lavora peggio." },
      { title: "Silenziosita", text: "Posizionamento e antivibranti contano quanto la macchina scelta." },
      { title: "Efficienza", text: "La tecnologia inverter rende bene solo se installazione e utilizzo sono corretti." },
    ],
  },

  checklist: {
    title: "Checklist di montaggio",
    bullets: [
      "Foratura e scarico condensa eseguiti correttamente",
      "Collegamenti e tenuta controllati",
      "Unita esterna posizionata per ridurre vibrazioni e rumore",
      "Spiegazione finale su uso, pulizia filtri e manutenzione",
    ],
  },

  process: [
    { title: "Primo contatto", text: "Capire ambienti, utilizzo previsto e priorita: comfort, deumidifica, rumore, budget." },
    { title: "Sopralluogo se serve", text: "Verifica posizioni, passaggi impianto, scarico condensa e vincoli del sito." },
    { title: "Installazione e avviamento", text: "Montaggio pulito, test finale e consegna dell'impianto pronto all'uso." },
  ],

  areas: {
    title: "Zona servita",
    text: "Merano, Lagundo, Tirolo, Scena, Marlengo, Lana, Cermes, Naturno e dintorni.",
  },

  faq: [
    { q: "Meglio split o multisplit?", a: "Lo split e adatto al singolo ambiente; il multisplit quando devi servire piu stanze con una sola unita esterna." },
    { q: "Ogni quanto va fatta la manutenzione?", a: "In genere una volta all'anno, soprattutto per igiene, resa e prevenzione dei cattivi odori." },
    { q: "Perche il dimensionamento e cosi importante?", a: "Se la macchina non e adatta agli ambienti aumenta consumo, rumore e usura." },
  ],

  cta: {
    id: "richiesta",
    title: "Vuoi installare un climatizzatore a Merano?",
    text: "Mandaci le informazioni principali e ti ricontattiamo con una proposta chiara e adatta agli ambienti.",
    primary: { label: "Invia richiesta", href: "#richiesta" },
    secondary: { label: "Chiama direttamente", href: "tel:+39…" },
  },
};
