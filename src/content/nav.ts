export type Lang = "it" | "de";

export const nav = {
  it: {
    primary: [
      { label: "Climatizzatori", href: "/it/climatizzatori-merano/" },
      { label: "Assistenza caldaie", href: "/it/assistenza-caldaie-merano/" },
      { label: "Contatti", href: "/it/contatti/" },
    ],
    footerServices: [
      { label: "Installazione climatizzatori", href: "/it/climatizzatori-merano/" },
      { label: "Manutenzione climatizzatori", href: "/it/climatizzatori-merano/#manutenzione" },
      { label: "Assistenza caldaie", href: "/it/assistenza-caldaie-merano/" },
      { label: "Manutenzione caldaie", href: "/it/assistenza-caldaie-merano/#manutenzione" },
    ],
    legal: [
      { label: "Privacy", href: "/it/privacy/" },
      { label: "Cookie", href: "/it/cookies/" },
      { label: "Note legali", href: "/it/impressum/" },
    ],
  },

  de: {
    primary: [
      { label: "Klimaanlagen", href: "/de/klimaanlage-meran/" },
      { label: "Heizungswartung", href: "/de/heizungswartung-meran/" },
      { label: "Kontakt", href: "/de/kontakt/" },
    ],
    footerServices: [
      { label: "Klimaanlagen Installation", href: "/de/klimaanlage-meran/" },
      { label: "Klimaanlagen Wartung", href: "/de/klimaanlage-meran/#wartung" },
      { label: "Heizungsservice", href: "/de/heizungswartung-meran/" },
      { label: "Wartung & Sicherheit", href: "/de/heizungswartung-meran/#wartung" },
    ],
    legal: [
      { label: "Datenschutz", href: "/de/datenschutz/" },
      { label: "Cookies", href: "/de/cookies/" },
      { label: "Impressum", href: "/de/impressum/" },
    ],
  },
} as const;
