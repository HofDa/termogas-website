export const site = {
  brand: "TERMOgas",
  area: "Merano · Burgraviato",
  domain: "https://www.termogas.it",
  defaultLang: "it" as const,

  phoneDisplay: "+39 …",
  phoneHref: "tel:+39…",

  // ✅ Schema-relevante Stammdaten (Platzhalter)
  legalName: "TERMOgas (ragione sociale)",

  address: {
    streetAddress: "Via … 0",     // TODO
    addressLocality: "Merano",    // Meran/Merano
    addressRegion: "BZ",
    postalCode: "39012",
    addressCountry: "IT",
  },

  geo: {
    latitude: 46.668,  // TODO (Merano grob, später exakt)
    longitude: 11.159, // TODO
  },

  // Optional: Öffnungszeiten (als Schema OpeningHoursSpecification)
  openingHours: [
    // Beispiel:
    // { dayOfWeek: "Monday", opens: "08:00", closes: "12:00" },
  ],

  sameAs: [
    // z.B. Google Business Profile URL, Facebook, Instagram (optional)
  ],
};