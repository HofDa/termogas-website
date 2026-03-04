import { site } from "../content/site";

type Lang = "it" | "de";

type ServiceSchemaInput = {
  lang: Lang;
  name: string;
  description: string;
  areaServed?: string[];
  urlPath: string; // z.B. "/de/klimaanlage-meran/"
};

function toAbsoluteUrl(path: string) {
  return new URL(path, site.domain).toString();
}

function openingHoursToSchema() {
  // site.openingHours optional
  if (!site.openingHours?.length) return undefined;
  return site.openingHours.map((o: any) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: o.dayOfWeek,
    opens: o.opens,
    closes: o.closes,
  }));
}

export function buildLocalBusinessSchema(params: { lang: Lang }) {
  const url = toAbsoluteUrl(params.lang === "de" ? "/de/" : "/it/");

  const openingHoursSpecification = openingHoursToSchema();

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": url + "#localbusiness",
    name: site.brand,
    legalName: site.legalName,
    url,
    telephone: site.phoneHref.replace("tel:", ""),
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.streetAddress,
      addressLocality: site.address.addressLocality,
      addressRegion: site.address.addressRegion,
      postalCode: site.address.postalCode,
      addressCountry: site.address.addressCountry,
    },
    geo: site.geo?.latitude && site.geo?.longitude ? {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    } : undefined,
    areaServed: [
      "Merano",
      "Meran",
      "Burgraviato",
      "Südtirol",
      "Alto Adige",
    ],
    openingHoursSpecification,
    sameAs: site.sameAs?.length ? site.sameAs : undefined,
  };
}

export function buildServiceSchema(input: ServiceSchemaInput) {
  const pageUrl = toAbsoluteUrl(input.urlPath);
  const providerId =
    (input.lang === "de" ? toAbsoluteUrl("/de/") : toAbsoluteUrl("/it/")) + "#localbusiness";

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": pageUrl + "#service",
    name: input.name,
    description: input.description,
    provider: {
      "@id": providerId,
    },
    areaServed: (input.areaServed ?? ["Merano", "Burgraviato"]).map((a) => ({
      "@type": "AdministrativeArea",
      name: a,
    })),
    url: pageUrl,
  };
}

/**
 * Convenience: gibt ein Array zurück, das du als @graph einbinden kannst.
 */
export function buildSchemaGraph(params: {
  lang: Lang;
  service?: Omit<ServiceSchemaInput, "lang">;
}) {
  const nodes: any[] = [buildLocalBusinessSchema({ lang: params.lang })];

  if (params.service) {
    nodes.push(buildServiceSchema({ ...params.service, lang: params.lang }));
  }

  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}