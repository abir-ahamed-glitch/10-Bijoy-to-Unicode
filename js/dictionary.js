/**
 * Bengali Word Dictionary Engine for Bijoy <-> Unicode
 * Provides O(1) exact word lookup to eliminate broken word errors for dictionary vocabulary.
 */

(function (exports) {
  'use strict';

  // Key-value store of exact Bijoy ASCII word -> Unicode Bengali word
  const WORD_DICT_B2U = {
    // Highly frequent & commonly broken words
    "evsjv‡`k": "বাংলাদেশ",
    "evsjv": "বাংলা",
    "gvbyl": "মানুষ",
    "†`‡ki": "দেশের",
    "†`k": "দেশ",
    "we‡`ªvn": "বিদ্রোহ",
    "ew³MZ": "ব্যক্তিগত",
    "ew³": "ব্যক্তি", "ew³e‡M©i": "ব্যক্তিবর্গের",
    "‡Z¨i": "ত্যের", "‡a¨B": "ধ্যেই", "‡Z¨": "ত্যে", "‡a¨": "ধ্যে",
    "‡cªwZ": "প্রতি", "‰`N¨©": "দৈর্ঘ্য", "‰ewPZ¨©": "বৈচিত্র্য",
    "‡mŠnv`¨©": "সৌহার্দ্য", "EaŸ©": "ঊর্ধ্ব", "wMª": "গ্রি",
    "‡R¨ô": "জ্যেষ্ঠ", "†R¨ô": "জ্যেষ্ঠ", "‡R¨": "জ্যে", "†R¨": "জ্যে",
    "cvÛzwjwc": "পাণ্ডুলিপি", "AuZiZË¡": "আঁতরতত্ত্ব", "AuZ‡ii": "আঁতরের",
    "gKeੁj": "মকবুল", "gKeuj": "মকবুল",
    "AuZi": "আঁতর", "¯ªóv": "স্রষ্টা", "¯Í": "স্ত", "¯‘": "স্থ",
    "wm›`yK": "সিন্দুক", "m‡½": "সঙ্গে", "‡½": "ঙ্গে", "BwÛqv": "ইন্ডিয়া",
    "MYnZ¨v": "গণহত্যা", "cvK-Avwg©‡K": "পাক-আর্মিকে", "Avwg©": "আর্মি",
    "ïiæ": "শুরু", "gv‡P©i": "মার্চের", "gyw³hy×": "মুক্তিযুদ্ধ",
    "wewfbœ": "বিভিন্ন", "cuwP‡k": "পঁচিশে", "µ¨vKWByb": "ক্র্যাকডাউন",
    "†mbvevwnbx": "সেনাবাহিনী", "bg:ky": "নমঃশু", "cÖZ¨¶`k©x": "প্রত্যক্ষদর্শী",
    "g~Zz¨": "মৃত্যু", "g„Zz¨": "মৃত্যু", "c_hvÎx": "পথযাত্রী",
    "mv`v": "সাদা", "‡mKv`vi": "সিকান্দার", "Avðh©": "আশ্চর্য",
    "mn‡hvwhZv": "সহযোগিতা", "Av‡jvKwbcvZ": "আলোকনিপাত", "cÖeÜ": "প্রবন্ধ",
    "cvVok": "পাঠক", "we‡kl": "বিশেষ", "¯^vaxbZv": "স্বাধীনতা",
    "g~j¨": "মূল্য", "cÖKvk": "প্রকাশ", "ms¯‹iণ": "সংস্করণ",
    "ms¯‹iY": "সংস্করণ", "Aaxb": "অধীন", "fvlv": "ভাষা",
    "wkw¶Z": "শিক্ষিত", "mgvR": "সমাজ", "RvwZ": "জাতি",
    "mvs¯‹„wZK": "সাংস্কৃতিক", "Av‡›`vjb": "আন্দোলন", "Awfgb": "অভিমান",
    "nZ¨vKvÛ": "হত্যাকাণ্ড", "kwn`": "শহীদ", "স্ম„wZ": "স্মৃতি",
    "‡fvi": "ভোর", "mKvj": "সকাল", "mÜ¨v": "সন্ধ্যা", "ivZ": "রাত"
  };

  // Reverse mapping Unicode -> Bijoy ASCII
  const WORD_DICT_U2B = {};
  for (const [b, u] of Object.entries(WORD_DICT_B2U)) {
    if (!WORD_DICT_U2B[u]) {
      WORD_DICT_U2B[u] = b;
    }
  }

  /**
   * Exact Word Lookup for Bijoy -> Unicode
   */
  function lookupB2U(word) {
    if (!word) return null;
    return WORD_DICT_B2U[word] || null;
  }

  /**
   * Exact Word Lookup for Unicode -> Bijoy
   */
  function lookupU2B(word) {
    if (!word) return null;
    return WORD_DICT_U2B[word] || null;
  }

  /**
   * Add dynamic word mapping to dictionary (e.g. from user overrides)
   */
  function addWordMapping(bijoyWord, unicodeWord) {
    if (!bijoyWord || !unicodeWord) return;
    WORD_DICT_B2U[bijoyWord] = unicodeWord;
    WORD_DICT_U2B[unicodeWord] = bijoyWord;
  }

  exports.lookupB2U = lookupB2U;
  exports.lookupU2B = lookupU2B;
  exports.addWordMapping = addWordMapping;

})(typeof exports !== 'undefined' ? exports : (window.BijoyDict = {}));
