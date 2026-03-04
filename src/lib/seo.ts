type Lang = "de" | "it";

type MetaInput = {
  title: string;
  description: string;
  canonicalPath: string;
  lang: Lang;
  schemaGraph?: Record<string, any> | null;
};

export function buildMeta(input: MetaInput) {
  return {
    title: input.title,
    description: input.description,
    canonicalPath: input.canonicalPath,
    lang: input.lang,
    schemaGraph: input.schemaGraph ?? null,
  };
}
