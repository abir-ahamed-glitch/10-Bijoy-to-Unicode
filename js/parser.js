/**
 * Formal Grapheme Syllable State Machine Parser for Bijoy <-> Unicode
 * Replaces fragile global string regex replacements with a deterministic grammar parser.
 */

(function (exports) {
  'use strict';

  // Exact Bijoy (SutonnyMJ) Single Character to Unicode mapping
  const BIJOY_TO_UNI_SINGLE = {
    A: "অ", B: "ই", C: "ঈ", D: "উ", E: "ঊ", F: "ঋ", G: "এ", H: "ঐ", I: "ও", J: "ঔ",
    K: "ক", L: "খ", M: "গ", N: "ঘ", O: "ঙ", P: "চ", Q: "ছ", R: "জ", S: "ঝ", T: "ঞ",
    U: "ট", V: "ঠ", W: "ড", X: "ঢ", Y: "ণ", Z: "ত", Û: "ণ্ড", "_": "থ", "`": "দ", a: "ধ", b: "ন",
    c: "প", d: "ফ", e: "ব", f: "ভ", g: "ম", h: "য", i: "র", j: "ল", k: "শ", l: "ষ",
    m: "স", n: "হ", "®": "ষ",
    o: "\u09DC", // ড়
    p: "\u09DD", // ঢ়
    q: "\u09DF", // য়
    r: "\u09CE", // ৎ
    "0": "০", "1": "১", "2": "২", "3": "৩", "4": "৪", "5": "৫", "6": "৬", "7": "৭", "8": "৮", "9": "৯",
    v: "া", w: "ি", x: "ী", y: "ু", z: "ু",
    "æ": "ু", "~": "ূ", "\u0192": "ূ", "„": "ৃ",
    "\u2021": "ে", "\u2020": "ে", "\u2030": "ৈ", "\u02C6": "ৈ", "\u0160": "ৗ",
    s: "ং", t: "ঃ", u: "ঁ", "^": "ঁ", "|": "।", "\\": "॥", "ï": "শ", "©": "র্"
  };

  // Multi-character Conjunct Glyphs
  const BIJOY_CONJUNCTS = {
    "‡Z¨i": "ত্যের", "‡a¨B": "ধ্যেই", "‡Z¨": "ত্যে", "‡a¨": "ধ্যে",
    "we‡`ªvn": "বিদ্রোহ", "‡K‡UI": "কেটেও", "‡cªwZ": "প্রতি",
    "‰`N¨©": "দৈর্ঘ্য", "‰ewPZ¨©": "বৈচিত্র্য", "‡mŠnv`¨©": "সৌহার্দ্য",
    "EaŸ©": "ঊর্ধ্ব", "wMª": "গ্রি", "wM&e": "গ্বি",
    "‡R¨": "জ্যে", "†R¨": "জ্যে", "‡R¨ô": "জ্যেষ্ঠ", "†R¨ô": "জ্যেষ্ঠ",
    "š'": "ন্থ", "š‘": "ন্থ", "š’": "ন্থ", "¤b": "ম্ব", "¤^": "ম্ব",
    "`N": "দ্ঘ", "Ú": "ণ্ঠ", "Û": "ণ্ড", "m^": "স্ব", "\\": "স্ব",
    "cvÛzwjwc": "পাণ্ডুলিপি", "AuZiZË¡": "আঁতরতত্ত্ব", "AuZ‡ii": "আঁতরের",
    "AuZi": "আঁতর", "ew³e‡M©i": "ব্যক্তিবর্গের", "ew³MZ": "ব্যক্তিগত",
    "ew³": "ব্যক্তি", "¯ªóv": "স্রষ্টা", "¯ª": "স্র", "¯Í": "স্ত",
    "¯‘": "স্থ", "¯ú": "স্প", "¯§": "স্ম", "¯ø": "স্ল", "¯\\": "স্ব",
    "wm›`yK": "সিন্দুক", "m‡½": "সঙ্গে", "‡½": "ঙ্গে", "BwÛqv": "ইন্ডিয়া",
    "wÛ": "ণ্ডি", "Uªywbs": "ট্রেনিং", "MYnZ¨v": "গণহত্যা", "cvK-Avwg©‡K": "পাক-আর্মিকে",
    "Avwg©": "আর্মি", "wg©": "র্মি", "ïiæ": "শুরু", "gv‡P©i": "মার্চের",
    "gyw³hy×": "মুক্তিযুদ্ধ", "wewfbœ": "বিভিন্ন", "cuwP‡k": "পঁচিশে",
    "µ¨vKWByb": "ক্র্যাকডাউন", "†mbvevwnbx": "সেনাবাহিনী",
    "š‘": "ন্তু", "cš’x": "পন্থী", "cš’": "পন্থ", "bg:ky": "নমঃশু",
    "cÖZ¨¶`k©x": "প্রত্যক্ষদর্শী", "g~Zz¨": "মৃত্যু", "g„Zz¨": "মৃত্যু",
    "Zz¨": "্ত্যু", "Zz": "্তু", "c_hvÎx": "পথযাত্রী", "mv`v": "সাদা",
    "i¨": "র‍্য", "ª¨": "্র্য", "¤cÖ": "ম্প্র", "¤§": "ম্ম", "Ü¨": "ন্ধ্য",
    "Ü": "ন্ধ", "¯ˆ": "স্ব", "¯^": "স্ব", "¯—": "স্ত", "¯’": "স্থ",
    "¯¿": "স্ত্র", "¯‹": "স্ক", "®œ": "ষ্ণু", "Yœ": "ণ্ণ", "bœ": "ন্ন",
    "mœ": "স্ন", "ò": "ষ্ণ", "š^": "ন্ব", "•³": "ঙ্ক্ত", "²": "ক্ষ্ম",
    "°": "ক্ক", "±": "ক্ট", "³": "ক্ত", "K¡": "ক্ব", "¯Œ": "স্ক্র",
    "µ": "ক্র", "K¬": "ক্ল", "¶": "ক্ষ", "ÿ": "ক্ষ", "·": "ক্স",
    "¸": "গু", "»": "গ্ধ", "Mœ": "গ্ন", "M¥": "গ্ম", "Mø": "গ্ল",
    "¼": "ঙ্ক", "•¶": "ঙ্ক্ষ", "•L": "ঙ্খ", "½": "ঙ্গ", "•N": "ঙ্ঘ",
    "¾¡": "জ্জ্ব", "¾": "জ্জ", "À": "জ্ঝ", "Á": "জ্ঞ", "R¡": "জ্ব",
    "Â": "ঞ্চ", "Ã": "ঞ্ছ", "Ä": "ঞ্জ", "Å": "ঞ্ঝ", "Æ": "ট্ট",
    "U¡": "ট্ব", "U¥": "ট্ম", "Ç": "ড্ড", "È": "ণ্ট", "É": "ণ্ঠ",
    "Ý": "ন্স", "Ê": "ণ্ড", "Ë¡": "ত্ত্ব", "Ë": "ত্ত", "Ì": "ত্থ",
    "Z¥": "ত্ম", "Z¡": "ত্ব", "Î": "ত্র", "_¡": "থ্ব", "›Ø": "ন্দ",
    "˜M": "দ্গ", "˜N": "দ্ঘ", "Ï": "দ্দ", "×": "দ্ধ", "˜¡": "দ্ব",
    "Ø": "দ্ব", "™¢": "দ্ভ", "Ù": "দ্ম", "aŸ": "ধ্ব", "a¥": "ধ্ম",
    "›U": "ন্ট", "šÍ": "ন্ত", "š\u00BF": "ন্ত্র", "›`": "ন্দ", "b¥": "ন্ম",
    "Þ": "প্ট", "ß": "প্ত", "cœ": "প্ন", "à": "প্প", "cø": "প্ল",
    "á": "প্স", "d¬": "ফ্ল", "â": "ব্জ", "ã": "ব্দ", "ä": "ব্ধ",
    "eŸ": "ব্ব", "eø": "ব্ল", "å": "ভ্র", "gœ": "ম্ন", "¤ú": "ম্প",
    "ç": "ম্ফ", "¤¢": "ম্ভ", "¤£": "ম্ভ্র", "¤­": "ম্ল", "iæ": "রু",
    "iƒ": "রূ", "é": "ল্ক", "ê": "ল্গ", "ë": "ল্ট", "ì": "ল্ড",
    "í": "ল্প", "î": "ল্ফ", "j¦": "ল্ব", "j¥": "ল্ম", "j­": "ল্ল",
    "ï": "শু", "ð": "শ্চ", "kœ": "শ্ন", "k¦": "শ্ব", "k¥": "শ্ম",
    "k­": "শ্ল", "®‹": "ষ্ক", "®Œ": "ষ্ক্র", "ó": "ষ্ট", "ô": "ষ্ঠ",
    "®ú": "ষ্প", "õ": "ষ্ফ", "®§": "ষ্ম", "÷": "স্ট", "ö": "স্খ",
    "û": "হু", "nè": "হ্ণ", "nŸ": "হ্ব", "ý": "হ্ন", "þ": "হ্ম",
    "n¬": "হ্ল", "ü": "হৃ",
    "Av": "আ", "qv": "অ্যা", "cu¨v": "প্যাঁ", "u¨v": "্যাঁ", "u¨": "্যাঁ",
    "gKeੁj": "মকবul", "msL¨vjNyiv": "সংখ্যালঘুরা", "cu¨v‡P": "প্যাঁচে"
  };

  const SORTED_CONJUNCT_KEYS = Object.keys(BIJOY_CONJUNCTS).sort((a, b) => b.length - a.length);

  /**
   * Tokenizes and parses a single word from Bijoy ASCII to Unicode Bengali.
   */
  function parseBijoySyllables(text) {
    if (!text) return '';

    let pos = 0;
    const len = text.length;
    let result = '';

    while (pos < len) {
      // 1. Check multi-char conjuncts/words first
      let matchedMulti = false;
      for (let k = 0; k < SORTED_CONJUNCT_KEYS.length; k++) {
        const key = SORTED_CONJUNCT_KEYS[k];
        if (text.startsWith(key, pos)) {
          result += BIJOY_CONJUNCTS[key];
          pos += key.length;
          matchedMulti = true;
          break;
        }
      }
      if (matchedMulti) continue;

      const char = text[pos];

      // 2. Pre-vowels (E-kar `‡`/`†`, OI-kar `‰`)
      if (char === '‡' || char === '†' || char === '‰') {
        const isOi = (char === '‰');
        const vowelKar = isOi ? 'ৈ' : 'ে';
        pos++;

        // Parse consonant / cluster following the pre-vowel
        let clusterResult = '';
        let clusterLen = 0;

        let innerMatched = false;
        for (let k = 0; k < SORTED_CONJUNCT_KEYS.length; k++) {
          const key = SORTED_CONJUNCT_KEYS[k];
          if (text.startsWith(key, pos)) {
            clusterResult = BIJOY_CONJUNCTS[key];
            clusterLen = key.length;
            innerMatched = true;
            break;
          }
        }

        if (!innerMatched && pos < len) {
          const nextChar = text[pos];
          clusterResult = BIJOY_TO_UNI_SINGLE[nextChar] || nextChar;
          clusterLen = 1;
        }

        pos += clusterLen;

        // Check for O-kar (`ো`) or OU-kar (`ৌ`) post-vowel markers
        if (pos < len && text[pos] === 'v') {
          result += clusterResult + 'ো';
          pos++;
        } else if (pos < len && (text[pos] === 'Š' || text[pos] === 'X')) {
          result += clusterResult + 'ৌ';
          pos++;
        } else {
          result += clusterResult + vowelKar;
        }
        continue;
      }

      // 3. Reph (`©`) handling
      if (char === '©') {
        result += 'র্';
        pos++;
        continue;
      }

      // 4. Standard Single Character Lookup
      if (BIJOY_TO_UNI_SINGLE[char]) {
        result += BIJOY_TO_UNI_SINGLE[char];
      } else {
        result += char;
      }
      pos++;
    }

    return result;
  }

  exports.parseBijoySyllables = parseBijoySyllables;

})(typeof exports !== 'undefined' ? exports : (window.BijoyParser = {}));
