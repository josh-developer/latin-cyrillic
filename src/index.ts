/**
 * Normalize all apostrophe-like characters to a single straight `'`
 */
function normalizeApostrophes(text: string): string {
  return text.replace(/[`‘’ʻʼʽˊˋˈ]/g, "'");
}

/**
 * Convert Uzbek Latin to Cyrillic
 */
export function latinToCyrillic(input: string): string {
  let text = normalizeApostrophes(input);

  // Handle digraphs first
  const digraphs: Record<string, string> = {
    sh: "ш", Sh: "Ш", SH: "Ш",
    ch: "ч", Ch: "Ч", CH: "Ч",
    yo: "ё", Yo: "Ё",
    yu: "ю", Yu: "Ю",
    ya: "я", Ya: "Я",
    ng: "нг", Ng: "Нг", NG: "НГ",
  };
  for (const [latin, cyr] of Object.entries(digraphs)) {
    text = text.replace(new RegExp(latin, "g"), cyr);
  }

  // Apostrophe rules
  text = text.replace(/G'/g, "Ғ").replace(/g'/g, "ғ");
  text = text.replace(/O'/g, "Ў").replace(/o'/g, "ў");
  // Remaining apostrophes → ъ
  text = text.replace(/'/g, "ъ");

  // Single letters map
  const map: Record<string, string> = {
    A: "А", a: "а",
    B: "Б", b: "б",
    D: "Д", d: "д",
    E: "Е", e: "е",
    F: "Ф", f: "ф",
    G: "Г", g: "г",
    H: "Ҳ", h: "ҳ",
    I: "И", i: "и",
    J: "Ж", j: "ж",
    K: "К", k: "к",
    L: "Л", l: "л",
    M: "М", m: "м",
    N: "Н", n: "н",
    O: "О", o: "о",
    P: "П", p: "п",
    Q: "Қ", q: "қ",
    R: "Р", r: "р",
    S: "С", s: "с",
    T: "Т", t: "т",
    U: "У", u: "у",
    V: "В", v: "в",
    X: "Х", x: "х",
    Y: "Й", y: "й",
    Z: "З", z: "з",
  };

  return text.split("").map(ch => map[ch] ?? ch).join("");
}

/**
 * Convert Uzbek Cyrillic to Latin (official standard)
 */
export function cyrillicToLatin(input: string): string {
  let text = input;

  // Digraphs
  const digraphs: Record<string, string> = {
    ш: "sh", Ш: "Sh",
    ч: "ch", Ч: "Ch",
    ё: "yo", Ё: "Yo",
    ю: "yu", Ю: "Yu",
    я: "ya", Я: "Ya",
  };
  for (const [cyr, latin] of Object.entries(digraphs)) {
    text = text.replace(new RegExp(cyr, "g"), latin);
  }

  // Apostrophes
  text = text.replace(/Ғ/g, "Gʻ").replace(/ғ/g, "gʻ"); // U+02BB
  text = text.replace(/Ў/g, "Oʻ").replace(/ў/g, "oʻ"); // U+02BB
  text = text.replace(/ъ/g, "ʼ"); // U+02BC

  // Single letters map
  const map: Record<string, string> = {
    А: "A", а: "a",
    Б: "B", б: "b",
    Д: "D", д: "d",
    Е: "E", е: "e",
    Ф: "F", ф: "f",
    Г: "G", г: "g",
    Ҳ: "H", ҳ: "h",
    И: "I", и: "i",
    Ж: "J", ж: "j",
    К: "K", к: "k",
    Л: "L", л: "l",
    М: "M", м: "m",
    Н: "N", н: "n",
    О: "O", о: "o",
    П: "P", п: "p",
    Қ: "Q", қ: "q",
    Р: "R", р: "r",
    С: "S", с: "s",
    Т: "T", т: "t",
    У: "U", у: "u",
    В: "V", в: "v",
    Х: "X", х: "x",
    Й: "Y", й: "y",
    З: "Z", з: "z",
  };

  return text.split("").map(ch => map[ch] ?? ch).join("");
}
