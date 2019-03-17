const disallowedEndings = [
  "are",
  "ere",
  "ire",
  "avi",
  "avano",
  "avate",
  "ava",
  "iva",
  "ivi",
  "asse",
  "assi",
  "assero",
  "ete",
  "anno",
  "avo",
  "assimo",
  "ammo",
  "amo",
  "emo",
  "ndo",
  "ano",
  "ero",
  "emmo",
  "immo",
  "cono",
  "arono",
  "gnino",
  "ostino",
  "isco",
  "orono",
  "eino",
  "ivo",
  "izzo",
  "izzavo",
  "izza",
  "izzi",
  "izzarono",
  "essimo",
  "essero",
  "issimo",
  "issero"
];

export function isNoun(word: string) {
  return (
    word.endsWith("o") &&
    word.length <= 10 &&
    !disallowedEndings.some(ending => word.endsWith(ending))
  );
}
