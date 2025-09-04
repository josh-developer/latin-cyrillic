const alpha = [
  "A",
  "B",
  "V",
  "G",
  "D",
  "E",
  "Yo",
  "J",
  "Z",
  "I",
  "Y",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "R",
  "S",
  "T",
  "U",
  "F",
  "X",
  "Ts",
  "Ch",
  "Sh",
  "Sh",
  "'",
  "I",
  "",
  "E",
  "Yu",
  "Ya",
  "G'",
  "Q",
  "H",
  "O'",
  "a",
  "b",
  "v",
  "g",
  "d",
  "e",
  "yo",
  "j",
  "z",
  "i",
  "y",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "r",
  "s",
  "t",
  "u",
  "f",
  "x",
  "ts",
  "ch",
  "sh",
  "sh",
  "'",
  "i",
  "",
  "e",
  "yu",
  "ya",
  "g'",
  "q",
  "h",
  "o'",
];
const alphaLatin = [
  "A",
  "B",
  "V",
  "G",
  "D",
  "E",
  "‡",
  "J",
  "Z",
  "I",
  "Y",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "R",
  "S",
  "T",
  "U",
  "F",
  "X",
  "‡",
  "‡",
  "‡",
  "‡",
  "‡",
  "‡",
  "‡",
  "‡",
  "‡",
  "‡",
  "‡",
  "Q",
  "H",
  "‡",
  "a",
  "b",
  "v",
  "g",
  "d",
  "e",
  "‡",
  "j",
  "z",
  "i",
  "y",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "r",
  "s",
  "t",
  "u",
  "f",
  "x",
  "‡",
  "‡",
  "‡",
  "‡",
  "'",
  "‡",
  "‡",
  "‡",
  "‡",
  "‡",
  "‡",
  "q",
  "h",
  "‡",
];
const alphaRus = [
  "А",
  "Б",
  "В",
  "Г",
  "Д",
  "Е",
  "Ё",
  "Ж",
  "З",
  "И",
  "Й",
  "К",
  "Л",
  "М",
  "Н",
  "О",
  "П",
  "Р",
  "С",
  "Т",
  "У",
  "Ф",
  "Х",
  "Ц",
  "Ч",
  "Ш",
  "Щ",
  "Ъ",
  "Ы",
  "Ь",
  "Э",
  "Ю",
  "Я",
  "Ғ",
  "Қ",
  "Ҳ",
  "Ў",
  "а",
  "б",
  "в",
  "г",
  "д",
  "е",
  "ё",
  "ж",
  "з",
  "и",
  "й",
  "к",
  "л",
  "м",
  "н",
  "о",
  "п",
  "р",
  "с",
  "т",
  "у",
  "ф",
  "х",
  "ц",
  "ч",
  "ш",
  "щ",
  "ъ",
  "ы",
  "ь",
  "э",
  "ю",
  "я",
  "ғ",
  "қ",
  "ҳ",
  "ў",
];

const Eliser = (currentWord: string): string => {
  if (currentWord[0] === "E") {
    return currentWord.replace(/E/i, "Э");
  } else if (currentWord[0] === "e") {
    return currentWord.replace(/e/i, "э");
  } else {
    return currentWord;
  }
};

const Eliser2 = (currentWord: string): string => {
  if (currentWord[0] === "Ц") {
    currentWord = currentWord.replace(/Ц/, "S");
  } else if (currentWord[0] === "ц") {
    currentWord = currentWord.replace(/ц/, "s");
  }
  for (let r = 0; r < currentWord.length; r++) {
    if (currentWord[r] === "Ё") {
      for (let z = r + 1; z < currentWord.length; z++) {
        if (
          currentWord.charCodeAt(z) >= 1040 &&
          currentWord.charCodeAt(z) <= 1071
        ) {
          currentWord = currentWord.replace(/Ё/i, "YO");
        }
      }
    } else if (currentWord[r] === "Ц") {
      if (
        currentWord.charCodeAt(r - 1) !== 1040 &&
        currentWord.charCodeAt(r - 1) !== 1045 &&
        currentWord.charCodeAt(r - 1) !== 1048 &&
        currentWord.charCodeAt(r - 1) !== 1054 &&
        currentWord.charCodeAt(r - 1) !== 1059 &&
        currentWord.charCodeAt(r - 1) !== 1069 &&
        currentWord.charCodeAt(r - 1) !== 1070 &&
        currentWord.charCodeAt(r - 1) !== 1071 &&
        currentWord.charCodeAt(r - 1) !== 1072 &&
        currentWord.charCodeAt(r - 1) !== 1077 &&
        currentWord.charCodeAt(r - 1) !== 1080 &&
        currentWord.charCodeAt(r - 1) !== 1086 &&
        currentWord.charCodeAt(r - 1) !== 1091 &&
        currentWord.charCodeAt(r - 1) !== 1101 &&
        currentWord.charCodeAt(r - 1) !== 1102 &&
        currentWord.charCodeAt(r - 1) !== 1103
      ) {
        currentWord = currentWord.replace(/Ц/i, "S");
      }
      for (let z = r + 1; z < currentWord.length; z++) {
        if (
          currentWord.charCodeAt(z) >= 1040 &&
          currentWord.charCodeAt(z) <= 1071
        ) {
          currentWord = currentWord.replace(/Ц/i, "TS");
        }
      }
    } else if (currentWord[r] === "ц") {
      if (
        currentWord.charCodeAt(r - 1) !== 1040 &&
        currentWord.charCodeAt(r - 1) !== 1045 &&
        currentWord.charCodeAt(r - 1) !== 1048 &&
        currentWord.charCodeAt(r - 1) !== 1054 &&
        currentWord.charCodeAt(r - 1) !== 1059 &&
        currentWord.charCodeAt(r - 1) !== 1069 &&
        currentWord.charCodeAt(r - 1) !== 1070 &&
        currentWord.charCodeAt(r - 1) !== 1071 &&
        currentWord.charCodeAt(r - 1) !== 1072 &&
        currentWord.charCodeAt(r - 1) !== 1077 &&
        currentWord.charCodeAt(r - 1) !== 1080 &&
        currentWord.charCodeAt(r - 1) !== 1086 &&
        currentWord.charCodeAt(r - 1) !== 1091 &&
        currentWord.charCodeAt(r - 1) !== 1101 &&
        currentWord.charCodeAt(r - 1) !== 1102 &&
        currentWord.charCodeAt(r - 1) !== 1103
      ) {
        currentWord = currentWord.replace(/ц/i, "s");
      }
    } else if (currentWord[r] === "Ч") {
      for (let z = r + 1; z < currentWord.length; z++) {
        if (
          currentWord.charCodeAt(z) >= 1040 &&
          currentWord.charCodeAt(z) <= 1071
        ) {
          currentWord = currentWord.replace(/Ч/i, "CH");
        }
      }
    } else if (currentWord[r] === "Ш") {
      for (let z = r + 1; z < currentWord.length; z++) {
        if (
          currentWord.charCodeAt(z) >= 1040 &&
          currentWord.charCodeAt(z) <= 1071
        ) {
          currentWord = currentWord.replace(/Ш/i, "SH");
        }
      }
    } else if (currentWord[r] === "Ю") {
      for (let z = r + 1; z < currentWord.length; z++) {
        if (
          currentWord.charCodeAt(z) >= 1040 &&
          currentWord.charCodeAt(z) <= 1071
        ) {
          currentWord = currentWord.replace(/Ю/i, "YU");
        }
      }
    } else if (currentWord[r] === "Я") {
      for (let z = r + 1; z < currentWord.length; z++) {
        if (
          currentWord.charCodeAt(z) >= 1040 &&
          currentWord.charCodeAt(z) <= 1071
        ) {
          currentWord = currentWord.replace(/Я/i, "YA");
        }
      }
    }
  }

  if (currentWord[0] === "Е") {
    for (let z = 1; z < currentWord.length; z++) {
      if (
        currentWord.charCodeAt(z) >= 1040 &&
        currentWord.charCodeAt(z) <= 1071
      ) {
        return currentWord.replace(/Е/i, "YE");
      } else {
        return currentWord.replace(/Е/i, "Ye");
      }
    }
  } else if (currentWord[0] === "е") {
    return currentWord.replace(/е/i, "ye");
  } else {
    return currentWord;
  }

  return currentWord;
};

export const latinToCyrillic = (originalMessage: string): string => {
  let CyrillicTranslated = "";
  originalMessage = originalMessage.replace(/`/g, "ʻ");
  originalMessage = originalMessage.replace(/ʹ/g, "ʻ");
  originalMessage = originalMessage.replace(/ʻ/g, "ʻ");
  originalMessage = originalMessage.replace(/ʼ/g, "ʻ");
  originalMessage = originalMessage.replace(/ʽ/g, "ʻ");
  originalMessage = originalMessage.replace(/ˊ/g, "ʻ");
  originalMessage = originalMessage.replace(/ˋ/g, "ʻ");
  originalMessage = originalMessage.replace(/‘/g, "ʻ");
  originalMessage = originalMessage.replace(/Ye/g, "Е");
  originalMessage = originalMessage.replace(/YE/g, "Е");
  originalMessage = originalMessage.replace(/Yo/g, "Ё");
  originalMessage = originalMessage.replace(/YO/g, "Ё");
  originalMessage = originalMessage.replace(/Ch/g, "Ч");
  originalMessage = originalMessage.replace(/CH/g, "Ч");
  originalMessage = originalMessage.replace(/Sh/g, "Ш");
  originalMessage = originalMessage.replace(/SH/g, "Ш");
  originalMessage = originalMessage.replace(/Yu/g, "Ю");
  originalMessage = originalMessage.replace(/YU/g, "Ю");
  originalMessage = originalMessage.replace(/Ya/g, "Я");
  originalMessage = originalMessage.replace(/YA/g, "Я");
  originalMessage = originalMessage.replace(/Ts/g, "Ц");
  originalMessage = originalMessage.replace(/TS/g, "Ц");

  originalMessage = originalMessage.replace(/G\'/g, "Ғ");
  originalMessage = originalMessage.replace(/O\'/g, "Ў");

  originalMessage = originalMessage.replace(/ye/g, "е");
  originalMessage = originalMessage.replace(/yo/g, "ё");
  originalMessage = originalMessage.replace(/ch/g, "ч");
  originalMessage = originalMessage.replace(/sh/g, "ш");
  originalMessage = originalMessage.replace(/yu/g, "ю");
  originalMessage = originalMessage.replace(/ya/g, "я");
  originalMessage = originalMessage.replace(/ts/g, "ц");
  originalMessage = originalMessage.replace(/g\'/g, "ғ");
  originalMessage = originalMessage.replace(/o\'/g, "ў");
  originalMessage = originalMessage.split(" ").map(Eliser).join(" ");

  for (let i = 0; i < originalMessage.length; i++) {
    for (let j = 0; j < alphaLatin.length; j++) {
      if (originalMessage[i] === alphaLatin[j]) {
        CyrillicTranslated += alphaRus[j];
        break;
      } else if (
        (originalMessage.charCodeAt(i) >= 9 &&
          originalMessage.charCodeAt(i) <= 11) ||
        (originalMessage.charCodeAt(i) > 32 &&
          originalMessage.charCodeAt(i) < 39) ||
        (originalMessage.charCodeAt(i) > 39 &&
          originalMessage.charCodeAt(i) <= 64) ||
        (originalMessage.charCodeAt(i) >= 91 &&
          originalMessage.charCodeAt(i) < 96) ||
        (originalMessage.charCodeAt(i) >= 123 &&
          originalMessage.charCodeAt(i) <= 1300)
      ) {
        CyrillicTranslated += originalMessage[i];
        break;
      } else if (originalMessage.charCodeAt(i) === 32) {
        CyrillicTranslated += " ";
        break;
      }
    }
  }
  return CyrillicTranslated;
};

export const cyrillicToLatin = (CyrillicMessage: string): string => {
  let LatinTranslated = "";
  CyrillicMessage = CyrillicMessage.split(" ").map(Eliser2).join(" ");

  for (let i = 0; i < CyrillicMessage.length; i++) {
    for (let j = 0; j < alphaRus.length; j++) {
      if (CyrillicMessage[i] === alphaRus[j]) {
        LatinTranslated += alpha[j];
      } else if (
        (CyrillicMessage.charCodeAt(i) >= 9 &&
          CyrillicMessage.charCodeAt(i) <= 11) ||
        (CyrillicMessage.charCodeAt(i) > 32 &&
          CyrillicMessage.charCodeAt(i) < 1000) ||
        CyrillicMessage.charCodeAt(i) > 1300
      ) {
        LatinTranslated += CyrillicMessage[i];
        break;
      } else if (CyrillicMessage.charCodeAt(i) === 32) {
        LatinTranslated += " ";
        break;
      }
    }
  }
  return LatinTranslated;
};
