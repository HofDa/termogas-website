import { routeMap } from "../content/routeMap";
import { site } from "../content/site";

type Lang = "it" | "de";

function invertMap(map: Record<string, string>) {
  const inv: Record<string, string> = {};
  for (const [k, v] of Object.entries(map)) inv[v] = k;
  return inv;
}

const reverseMap = invertMap(routeMap);

export function getLocalizedPath(path: string, lang: Lang) {
  if (lang === "it") {
    if (path.startsWith("/it/")) return path;
    if (path.startsWith("/de/")) return reverseMap[path] ?? "/it/";
    return "/it/";
  }

  if (path.startsWith("/de/")) return path;
  if (path.startsWith("/it/")) return routeMap[path] ?? "/de/";
  return "/de/";
}

export function getAlternates(canonicalPath: string) {
  // canonicalPath MUSS mit "/" enden
  const itPath = getLocalizedPath(canonicalPath, "it");
  const dePath = getLocalizedPath(canonicalPath, "de");

  const alternates: Array<{ lang: Lang | "x-default"; href: string }> = [];

  if (itPath) alternates.push({ lang: "it", href: new URL(itPath, site.domain).toString() });
  if (dePath) alternates.push({ lang: "de", href: new URL(dePath, site.domain).toString() });

  // x-default auf IT, wenn vorhanden, sonst Fallback auf /it/
  const xDefaultPath = itPath ?? "/it/";
  alternates.push({ lang: "x-default", href: new URL(xDefaultPath, site.domain).toString() });

  return alternates;
}
