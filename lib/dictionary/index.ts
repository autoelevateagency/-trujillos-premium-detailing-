import type { Dictionary, Locale } from "./types";
import { en } from "./en";
import { ur } from "./ur";

const dictionaries: Record<Locale, Dictionary> = {
  EN: en,
  UR: ur,
};

export const getDictionary = (locale: Locale = "EN"): Dictionary => {
  return dictionaries[locale] ?? en;
};

export type { Dictionary, Locale };
