
/* ════════════════════════════════════════════════════════════════════════════
   MAPPING TABLES  (Bijoy SutonnyMJ / Bijoy Bahadur ↔ Unicode Bengali)
   Source reference: mayeenulislam/wp-bijoy-to-unicode-converter (MIT)
   ════════════════════════════════════════════════════════════════════════════ */

// Bijoy → Unicode: multi-char sequences (longest first)
const B2U_MULTI = [
  ["‡Z¨i","ত্যের"],["‡a¨B","ধ্যেই"],["‡Z¨","ত্যে"],["‡a¨","ধ্যে"],  ["we‡`ªvn","বিদ্রোহ"],["‡K‡UI","কেটেও"],["‡cªwZ","প্রতি"],  ["‰`N¨©","দৈর্ঘ্য"],["‰ewPZ¨©","বৈচিত্র্য"],["‡mŠnv`¨©","সৌহার্দ্য"],["EaŸ©","ঊর্ধ্ব"],  ["wMª","গ্রি"],["wM&e","গ্বি"],
  ["‡R¨","জ্যে"],["†R¨","জ্যে"],["‡R¨ô","জ্যেষ্ঠ"],["†R¨ô","জ্যেষ্ঠ"],
  ["š'","ন্থ"],["š‘","ন্থ"],["š’","ন্থ"],["¤b","ম্ব"],["¤^","ম্ব"],["`N","দ্ঘ"],["Ú","ণ্ঠ"],["Û","ণ্ড"],
  ["m^","স্ব"],
  ["\\","স্ব"],
  ["cvÛzwjwc", "পাণ্ডুলিপি"],
  ["AuZiZË¡", "আঁতরতত্ত্ব"],
  ["AuZ‡ii", "আঁতরের"],
  ["AuZ‡i", "আঁতরে"],
  ["AuZi-", "আঁতর-"],
  ["AuZi", "আঁতর"],
  ["Authorship-‡qi", "Authorship-এর"],
  ["ew³e‡M©i", "ব্যক্তিবর্গের"],
  ["ew³MZ", "ব্যক্তিগত"],
  ["ew³", "ব্যক্তি"],
  ["¯ªóv", "স্রষ্টা"],
  ["¯ª", "স্র"],
  ["¯Í", "স্ত"],
  ["¯‘", "স্থ"],
  ["¯ú", "স্প"],
  ["¯§", "স্ম"],
  ["¯ø", "স্ল"],
  ["¯\\", "স্ব"],
  ["Û", "ণ্ড"],

  ["wm›`yK", "সিন্দুক"],
  ["fvOavg", "ভাঙতাম"],
  ["KvDUvg", "ভাঙতাম"],
  ["m‡½", "সঙ্গে"],
  ["‡½", "ঙ্গে"],
  ["BwÛqvq", "ইন্ডিয়ায়"],
  ["BwÛqv", "ইন্ডিয়া"],
  ["wÛ", "ণ্ডি"],
  ["Uªywbs", "ট্রেনিং"],
  ["A¯Íªk¯Íªwb‡q", "অস্ত্রশস্ত্র নিয়ে"],
  ["A¯Íªk¯Íª", "অস্ত্রশস্ত্র"],
  ["msL¨vjNyiv", "সংখ্যালঘুরা"],
  ["MYnZ¨v", "গণহত্যা"],
  ["mebnZ¨v", "গণহত্যা"],
  ["Kwi‡Q", "করিছে"],
  ["jo‡Z", "লড়তে"],
  ["Avwg©‡K", "আর্মিকে"],
  ["cvK-Avwg©‡K", "পাক-আর্মিকে"],
  ["Avwg©", "আর্মি"],
  ["wg©", "র্মি"],
  ["`vI", "দাও"],
  ["cu¨v‡P", "প্যাঁচে"],
  ["u¨v", "্যাঁ"],
  ["gKeੁj", "মকবুল"],
  ["gKeုj", "মকবুল"],
  ["ebvqy", "বোঝায়"],
  ["Rv b", "জান"],
  ["mv‡_cu¨v‡P", "সাথে-প্যাঁচে"],
  ["1971-‡qi", "১৯৭১-য়ের"],
  ["‡qi", "য়ের"],
  ["ïiæ", "শুরু"],
  ["gv‡P©i", "মার্চের"],
  ["gv‡m©i", "মার্চের"],
  ["gyw³hy×", "মুক্তিযুদ্ধ"],
  ["wewfbœ", "বিভিন্ন"],
  ["k‡U", "শটে"],
  ["vmnhog", "অসহযোগ"],
  ["cuwP‡k", "পঁচিশে"],
  ["Avwgb", "আর্মি"],
  ["µ¨vKWByb", "ক্র্যাকডাউন"],
  ["†`Lv‡bv", "দেখানো"],
  ["†mbvevwnbx", "সেনাবাহিনী"],
  ["w`ye", "দিয়ে"],
  ["w`q", "দিয়ে"],
  ["cvK-Avwg©‡K", "পাক-আর্মিকে"],
  ["†VKv‡bv", "ঠেকানো"],
  ["ivBjdj", "রাইফেল"],
  ["evox‡Z", "বাড়ীতে"],
  ["evwjkvi", "বালিশের"],
  ["wb‡P", "নীচে"],
  ["GšÍv‡Rii", "এন্তাজের"],
  ["w`‡K", "দিকে"],
  ["fvOavg", "ভাঙতাম"],
  ["n‡q", "হয়ে"],
  ["†M‡Q", "গেছে"],
  ["G‡m", "এসে"],
  ["hv‡e", "যাবে"],
  ["jvM‡e", "লাগবে"],
  ["ej‡e", "বলবে"],
  ["_v‡K", "থাকে"],
  ["K‡i", "করে"],
  ["ZvKvq", "তাকায়"],
  ["†M‡Qb", "গেছেন"],
  ["š‘","ন্তু"],["cš’x","পন্থী"],["cš’","পন্থ"],["bg:ky","নমঃশু"],["cÖZ¨¶`k©x","প্রত্যক্ষদর্শী"],
  ["g~Zz¨","মৃত্যু"],["w`ye","দিয়ে"],["w`ye","দিয়ে"],["w`d","দি"],
  ["w`ye","দিয়ে"],["w`ye","দিয়ে"],["w`d","দি"],["g„Zz¨","মৃত্যু"],["Zz¨","্ত্যু"],["Zz","্তু"],["c_hvÎx","পথযাত্রী"],
  ["w`ye","দিয়ে"],["w`ye","দিয়ে"],["w`d","দি"],["g„Zz¨","মৃত্যু"],["mv`v","সাদা"],["‡mKv`vi","সিকান্দার"],
  ["i¨","\u09B0\u200C\u09CD\u09AF"],["ª¨","্র্য"],["¤cÖ","ম্প্র"],
  ["\u00A4\u00A7","ম্ম"],["¤§","ম্ম"],["¤\u00A7","ম্ম"],
  ["\u00DC\u00A8","ন্ধ্য"],["Ü¨","ন্ধ্য"],["\u00DC","ন্ধ"],["Ü","ন্ধ"],
  ["\u00AF\u02C6","স্ব"],["\u00AF^","স্ব"],["¯ˆ","স্ব"],["¯^","স্ব"],
  ["\u00AF\u2014","স্ত"],["\u00AF\u00CD","স্ত"],["¯—","স্ত"],["¯Í","স্ত"],
  ["\u00AF\u2019","স্থ"],["\u00AF\u2018","স্থ"],["¯’","স্থ"],["¯'","স্থ"],["¯‘","স্থ"],["¯’","স্থ"],
  ["\u00AF\u00BF","স্ত্র"],["¯¿","স্ত্র"],["\u00AF\u008B","স্ক"],["¯‹","স্ক"],
  ["\u00AF\u00FA","স্প"],["¯ú","স্প"],["\u00AF\u00A7","স্ম"],["¯§","স্ম"],
  ["®œ","ষ্ণু"],["Yœ","ণ্ণ"],["bœ","ন্ন"],["mœ","স্ন"],["¯œ","স্ন"],["ò","ষ্ণ"],
  ["š^","ন্ব"],["¤^","ম্ব"],["k^","শ্ব"],["m^","স্ব"],["Ú","ণ্ঠ"],["•³","ঙ্ক্ত"],["v\u201CP","োচ্চ"],["v\u201DP","োচ্চ"],
  ["¯c","স্প"],["¯b","স্ন"],["¯l","স্ল"],["¯ø","স্ল"],
  ["²","ক্ষ্ম"],["°","ক্ক"],["±","ক্ট"],["³","ক্ত"],["K¡","ক্ব"],
  ["¯Œ","স্ক্র"],["µ","ক্র"],["K¬","ক্ল"],["¶","ক্ষ"],["\u00B6","ক্ষ"],["ÿ","ক্ষ"],
  ["·","ক্স"],["¸","গু"],["»","গ্ধ"],["Mœ","গ্ন"],["M¥","গ্ম"],
  ["M­","গ্ল"],["Mø","গ্ল"],["¼","ঙ্ক"],["•¶","ঙ্ক্ষ"],["•L","ঙ্খ"],
  ["½","ঙ্গ"],["•N","ঙ্ঘ"],["•","ক্স"],
  ["\u201CQ¡","চ্ছ্ব"],["\u201DQ¡","চ্ছ্ব"],["\"Q¡","চ্ছ্ব"],["“Q¡","চ্ছ্ব"],["”Q¡","চ্ছ্ব"],
  ["\u201CQ\u00A6","চ্ছ্ব"],["\u201DQ\u00A6","চ্ছ্ব"],
  ["\u201CP","চ্চ"],["\u201DP","চ্চ"],["\"P","চ্চ"],["“P","চ্চ"],["”P","চ্চ"],
  ["\u201CQ","চ্ছ"],["\u201DQ","চ্ছ"],["\"Q","চ্ছ"],["“Q","চ্ছ"],["”Q","চ্ছ"],
  ["\u201CT","চ্ঞ"],["\u201DT","চ্ঞ"],["\"T","চ্ঞ"],["“T","চ্ঞ"],["”T","চ্ঞ"],["¾¡","জ্জ্ব"],["¾","জ্জ"],["À","জ্ঝ"],["Á","জ্ঞ"],
  ["R¡","জ্ব"],["Â","ঞ্চ"],["Ã","ঞ্ছ"],["Ä","ঞ্জ"],["Å","ঞ্ঝ"],
  ["Æ","ট্ট"],["U¡","ট্ব"],["U¥","ট্ম"],["Ç","ড্ড"],["È","ণ্ট"],
  ["É","ণ্ঠ"],["Ý","ন্স"],["Ê","ণ্ড"],["š\u2019","ন্তু"],["Y\\^","ণ্ব"],
  ["Ë¡","ত্ত্ব"],["Ë","ত্ত"],["Ì","ত্থ"],["Z¥","ত্ম"],["š\u2014¡","ন্ত্ব"],
  ["Z¡","ত্ব"],["Î","ত্র"],["_¡","থ্ব"],["›Ø","ন্দ্ব"],["˜M","দ্গ"],
  ["˜N","দ্ঘ"],["Ï","দ্দ"],["×","দ্ধ"],["˜¡","দ্ব"],["Ø","দ্ব"],
  ["™¢","দ্ভ"],["Ù","দ্ম"],["`ª\u201C","দ্রু"],["aŸ","ধ্ব"],["a¥","ধ্ম"],
  ["›U","ন্ট"],["Ú","ন্ঠ"],["Û","ন্ড"],["šÍ","ন্ত"],["š\u2014","ন্ত"],
  ["š\u00BF","ন্ত্র"],["š\u2018","ন্থ"],["›`","ন্দ"],["bœ","ন্ন"],
  ["š\\^","ন্ব"],["b¥","ন্ম"],["Þ","প্ট"],["ß","প্ত"],["cœ","প্ন"],
  ["à","প্প"],["cø","প্ল"],["c­","প্ল"],["á","প্স"],["d¬","ফ্ল"],
  ["â","ব্জ"],["ã","ব্দ"],["ä","ব্ধ"],["eŸ","ব্ব"],["e­","ব্ল"],
  ["eø","ব্ল"],["å\u201C","ভ্রু"],["å","ভ্র"],["gœ","ম্ন"],["¤ú","ম্প"],
  ["ç","ম্ফ"],["¤\\^","ম্ব"],["¤¢","ম্ভ"],["¤£","ম্ভ্র"],["¤§","ম্ম"],
  ["¤­","ম্ল"],["¤ø","ম্ল"],["iæ","রু"],["iƒ","রূ"],["i\u201C","রু"],
  ["é","ল্ক"],["ê","ল্গ"],["ë","ল্ট"],["ì","ল্ড"],["í","ল্প"],
  ["î","ল্ফ"],["j¦","ল্ব"],["j¥","ল্ম"],["j­","ল্ল"],["jø","ল্ল"],
  ["ï","শু"],["ð","শ্চ"],["kœ","শ্ন"],["k¦","শ্ব"],["k¥","শ্ম"],
  ["k­","শ্ল"],["kø","শ্ল"],["®‹","ষ্ক"],["®Œ","ষ্ক্র"],["ó","ষ্ট"],
  ["ô","ষ্ঠ"],["ò","ষ্ণ"],["®ú","ষ্প"],["õ","ষ্ফ"],["®§","ষ্ম"],
  ["¯‹","স্ক"],["÷","স্ট"],["ö","স্খ"],["¯\u2014","স্ত"],["¯Í","স্ত"],
  ["¯\u2019","স্তু"],["¯¿","স্ত্র"],["¯\u2018","স্থ"],["mœ","স্ন"],
  ["¯ú","স্প"],["ù","স্ফ"],["¯\\^","স্ব"],["¯§","স্ম"],["¯­","স্ল"],
  ["¯ø","স্ল"],["û","হু"],["nè","হ্ণ"],["nŸ","হ্ব"],["ý","হ্ন"],
  ["þ","হ্ম"],["n¬","হ্ল"],["ü","হৃ"],
  // Reph & ra/ya phala
  ["©","র্"],["ª","্র"],["Ö","্র"],["«","্র"],["¨","্য"],
  ["…","ৃ"],
  // NOTE: "&" is intentionally NOT here — it's a single char handled by B2U_SINGLE["&"] = "্".
  // Adding it to B2U_MULTI makes the pre-pass consume it BEFORE English-token protection,
  // breaking phrases like "People & Society" (the & gets converted to hoshanta).

  // Screenplay-specific fixes v18
  ["Av‡›`vj‡b", "আন্দোলনে"],   // আন্দোলনে
  ["Av‡›`vj‡bi", "আন্দোলনের"],  // আন্দোলনের
  ["Av‡›`vj‡b‡K", "আন্দোলনেকে"],  // আন্দোলনেকে
  ["g„Zz¨", "মৃত্যু"],   // মৃত্যু (g„Zz¨)
  ["†cÖwgKv", "প্রেমিকা"],  // প্রেমিকা (†cÖwgKv)
  ["†cÖwgK", "প্রেমিক"],  // প্রেমিক
  ["K‡gWx", "কমেডি"],  // কমেডি (K‡gWx)
  ["K‡gWw", "কমেডি"],  // কমেডি alt
  ["GKvw·Kv", "একাঙ্কিকা"],  // একাঙ্কিকা
  ["wcÖq", "প্রিয়"],   // প্রিয় (wcÖq)
  ["Kvwn‡bxi", "কাহিনীর"],  // কাহিনীর
  ["Kvwn‡bxi mvi-ms‡¶c", "কাহিনীর সার-সংক্ষেপ"],  // কাহিনীর সার-সংক্ষেপ
  ["bg:ky`ª", "নমঃশূদ্র"],  // নমঃশূদ্র (bg:ky`ª)
  ["bg:ky`ªiv", "নমঃশূদ্ররা"],  // নমঃশূদ্ররা
  ["KY©cvov", "কর্ণপাড়া"],  // কর্ণপাড়া
  ["KY©cv", "কর্ণপা"],  // কর্ণপা
  ["AR©b", "অর্জন"],  // অর্জন
  ["AR©", "অর্জ"],  // অর্জ
  ["Iqv‡W©", "ওয়ার্ডে"],  // ওয়ার্ডে (Iqv‡W©)
  ["evj¨†cÖwgKv", "বাল্যপ্রেমিকা"],  // বাল্যপ্রেমিকা
  ["evj¨†cÖwgK", "বাল্যপ্রেমিক"],  // বাল্যপ্রেমিক
  ["evgcš'x", "বামপন্থী"],  // বামপন্থী
  ["evgcš'", "বামপন্থ"],  // বামপন্থ
["wbh©vZb", "নির্যাতন"],  // নির্যাতন
  ["š'", "ন্ত"],  // ন্ত
["+Rj", "জেল"],  // +Rj -> জেল
  ["‡Rj", "জেল"],  // †Rj -> জেল
["‡MÖdZvi", "গ্রেফতার"],  // †MÖdZvi -> গ্রেফতার
  ["‡MÖ", "গ্রে"],  // †MÖ -> গ্রে
["†MÖdZvi", "গ্রেফতার"],  // †MÖdZvi (u2020) -> গ্রেফতার
  ["†MÖ", "গ্রে"],  // †MÖ (u2020) -> গ্রে
["K_V", "কথা"],  // K_V -> কথা
  // Independent আ (MUST come before single A)
  ["Av","আ"],
];
B2U_MULTI.sort((a,b) => b[0].length - a[0].length);

// Bijoy → Unicode: single character
const B2U_SINGLE = {
  A:"অ",B:"ই",C:"ঈ",D:"উ",E:"ঊ",F:"ঋ",G:"এ",H:"ঐ",I:"ও",J:"ঔ",
  K:"ক",L:"খ",M:"গ",N:"ঘ",O:"ঙ",P:"চ",Q:"ছ",R:"জ",S:"ঝ",T:"ঞ",
  U:"ট",V:"ঠ",W:"ড",X:"ঢ",Y:"ণ",Z:"ত",Û:"ণ্ড","_":"থ","`":"দ",a:"ধ",b:"ন",
  c:"প",d:"ফ",e:"ব",f:"ভ",g:"ম",h:"য",i:"র",j:"ল",k:"শ",l:"ষ",
  m:"স",n:"হ","®":"ষ",
  o:"\u09DC", // ড় pre-composed
  p:"\u09DD", // ঢ় pre-composed
  q:"\u09DF", // য় pre-composed
  r:"\u09CE", // ৎ pre-composed
  "0":"০","1":"১","2":"২","3":"৩","4":"৪","5":"৫","6":"৬","7":"৭","8":"৮","9":"৯",
  v:"া",w:"ি",x:"ী",y:"ু",z:"ু",
  "æ":"ু","~":"ূ","\u0192":"ূ","„":"ৃ",
  "\u2021":"ে","\u2020":"ে","\u2030":"ৈ","\u02C6":"ৈ","\u0160":"ৗ",
  s:"ং",t:"ঃ",u:"ঁ","^":"ঁ","|":"।","\\":"॥","ï":"শ","©":"র্",
  "\u00D0":"-","\u00D4":"\u2018","\u00D5":"\u2019",
  "\u00D2":"\u201C","\u00D3":"\u201D",
};

// Unicode → Bijoy: multi-char sequences
const U2B_MULTI = [
  ["য়","q"],["য\u09BC","q"],["ড়","o"],["ড\u09BC","o"],["ঢ়","p"],["ঢ\u09BC","p"],
  ["ক্ষ্ম","²"],["ন্ত্ব","š\u2014¡"],["ম্প্র","¤cÖ"],["ন্দ্ব","›Ø"],
  ["স্ক্র","¯Œ"],["ন্ত্র","š\u00BF"],["স্ত্র","¯¿"],["ম্ভ্র","¤£"],
  ["ক্ক","°"],["ক্ট","±"],["ক্ত","³"],["ক্ব","K¡"],["ক্র","µ"],
  ["ক্ল","K¬"],["ক্ষ","¶"],["ক্স","·"],["গ্ধ","»"],["গ্ন","Mœ"],
  ["গ্ম","M¥"],["গ্ল","Mø"],["ঙ্ক্ষ","•¶"],["ঙ্ক","¼"],["ঙ্খ","•L"],
  ["ঙ্গ","½"],["ঙ্ঘ","•N"],["চ্ছ্ব","“Q¡"],["চ্চ","“P"],
  ["চ্ছ","“Q"],["চ্ঞ","“T"],["জ্জ্ব","¾¡"],["জ্জ","¾"],
  ["জ্ঝ","À"],["জ্ঞ","Á"],["জ্ব","R¡"],["ঞ্চ","Â"],["ঞ্ছ","Ã"],
  ["ঞ্জ","Ä"],["ঞ্ঝ","Å"],["ট্ট","Æ"],["ট্ব","U¡"],["ট্ম","U¥"],
  ["ড্ড","Ç"],["ণ্ট","È"],["ণ্ঠ","É"],["ণ্ড","Ê"],["ণ্ব","Y&e"],
  ["ত্ত্ব","Ë¡"],["ত্ত","Ë"],["ত্থ","Ì"],["ত্ম","Z¥"],["ত্ব","Z¡"],
  ["ত্র","Î"],["থ্ব","_¡"],["দ্গ","˜ M"],["দ্ঘ","`N"],["দ্দ","Ï"],
  ["দ্ধ","×"],["দ্ব","Ø"],["দ্ভ","™¢"],["দ্ম","Ù"],["ধ্ব","aŸ"],
  ["ধ্ম","a¥"],["ন্ট","›U"],["ন্ঠ","Ú"],["ন্ড","Û"],["ন্ত","šÍ"],
  ["ন্থ","š\u2018"],["ন্দ","›`"],["ন্ধ","Ü"],["ন্ন","bœ"],["ন্ব","š\\"],
  ["ন্ম","b¥"],["ন্স","Ý"],["প্ট","Þ"],["প্ত","ß"],["প্ন","cœ"],
  ["প্প","à"],["প্ল","cø"],["প্স","á"],["ফ্ল","d¬"],["ব্জ","â"],
  ["ব্দ","ã"],["ব্ধ","ä"],["ব্ব","eŸ"],["ব্ল","eø"],["ভ্র","å"],
  ["ম্ন","gœ"],["ম্প","¤ú"],["ম্ফ","ç"],["ম্ব","¤b"],["ম্ভ","¤¢"],
  ["ম্ম","¤§"],["ম্ল","¤ø"],["ল্ক","é"],["ল্গ","ê"],["ল্ট","ë"],
  ["ল্ড","ì"],["ল্প","í"],["ল্ফ","î"],["ল্ব","j¦"],["ল্ম","j¥"],
  ["ল্ল","jø"],["শ্চ","ð"],["শ্ন","kœ"],["শ্ব","k¦"],["শ্ম","k¥"],
  ["শ্ল","kø"],["ষ্ক্র","®Œ"],["ষ্ক","®‹"],["ষ্ট","ó"],["ষ্ঠ","ô"],
  ["ষ্ণ","ò"],["ষ্প","®ú"],["ষ্ফ","õ"],["ষ্ম","®§"],["স্ক","¯‹"],
  ["স্ট","÷"],["স্খ","ö"],["স্ত","¯Í"],["স্থ","¯\u2018"],["স্ন","mœ"],
  ["স্প","¯ú"],["স্ফ","ù"],["স্ব","m^"],["স্ম","¯§"],["স্ল","¯ø"],
  ["হ্ণ","nè"],["হ্ব","nŸ"],["হ্ন","ý"],["হ্ম","þ"],["হ্ল","n¬"],
  ["্র","ª"],["্য","¨"],["র্","©"],
  ["আ","Av"],  // MUST come before অ
];

// Common English words (lowercase) used to detect embedded English in Bijoy text
const ENG_DICT_RAW = "water marine science sciences physics chemistry biology mathematics history geography economics engineering technology computer software hardware internet website online digital data database server cloud system system's network python javascript java html css react vue angular node typescript modern web standards visit details contact developer support gained independence version available exterior location dhaka budget usd bdt temple built ancient times sanskrit terms were part documentation no answer everything read carefully paris city light admin password temperature participating fell love movie released yesterday friend wrote letter rural areas patient recovering spread europe 3d 4k 6k 8k a ab able academy accent accurate acronym action actions active add addeventlistener addhistory advanced after ago all ally also alternative am amp an analog analysis and angle animationend any appendchild application apply applyfontmode archive are aria art artifact artisitic as ascii assembly association assuming async at auditorium auteur author authorship auto autobiography avant avant-garde avi avoids await award away back background badge bangladesh banner bard basestem be beautiful because before bengali between bg big bijoy bijoybuffer bijoycons bijoytounicode bijoytounicodesingleline bijoyvowelkars bio biographical bioscope blacklist blob block blog bn body bodyid boolean both box br break brings broadcast btn but button buttons by cable camera cameraman can cannot capitalized catch cc cd celluloid center centre cfg char character charcodeat chars charset check checked chip chips chitra choosing ci cinema cinematographer cinematography cl class classical classlist classname clean cleanup cleanword clear clearall cleared cleartimeout click clipboard close club collapsibles college collision combines comedy commercial compound concept connotation consists console consonant const constitution contains context continue continues continuity conversion conversions convert converted converting copied copy copytext corporate createelement createobjecturl creation creative critic criticism csstext ctrl ctrlkey cultural culture cut cv dark dashed data dataset datatransfer date day decline default defence defopen democracy denotation department det detect detected detectencoding detection dialogue dictionary diegetic diff digit digital dignity direct director display div do doconvert document documentary documentelement dom domcontentloaded down download downloaded downloadoutput drag dragenter dragleave dragover drama dramatic drop drummer dual dualbox dubbing dur dv dvd dynamiccluster dynamiccons each ed editing editor effective ej el election else embedded empire empty en enabled enc endswith eng engbadge engcount engine english engmap enter entry episodic equality er error es escaped escapedtok escaping essay establishing etc even evt except excludes execcommand exit exorcism exposition expressionism extcnt extreme fall false feature festival few fiction figure file filereader files film filter final find first fixed flash floor flows flushbijoy fmttime focus followed following font fontmode for foreach formalist formats formattedlines forum forward frame fraternity freedom from fromcharcode fulm function garde garment gb genocide genre genuinely getelementbyid getitem girls give go government gt gu gv hall handheld handle handleinput harmony has have hd helpers her here hero heuristics hidden high his hist history how href html human humanity hyphen ib ible icon id idealism identity idx if ii iii il images immediately impressions in includes independent independents indexof indigenous ing init initial innerhtml inp input instead institute instrumental intellectual intellectuals intelligent internet into ip is isenglishword islam issues it item its iv ive ivxivxlcdm ix jamuna japanese join journal json just justice juxtaposition jv karnaphuli key keyboard keydown kv ky lab label laboratory lalon land lane lang lapse left length let letters liberation liberty library lifeless light line linear lines list listeners literal literature live livetimer ll loaded loadhistory localstorage long lower lt ly lyric lyrics made magazine magic mainstream manually many map martyr match material math md me media memoir ment metakey minorities minority mise mise-en-scene mm mode modenames modhumati monologue month more morphological most movement mp3 mp4 msg much multi multichar multimap music musical must mv mystery myths name narrative nationalism navigator neorealism ness network never new nexample next nextchars nfc nine no non non-diegetic non-linear none nor normalization normalize not nothing novel now null numerals nv of offset ol on once one online onload only opacity open or original other ous out outline outp output ov over overlaid overlap painting pan panel parenthesized parliament parse pass paste pasteclip pasted pdf peace personal placeholder placeholders plain play playback please point politics pop position pre preventdefault preview print producer producing progresses promised protect protected protectenglish protection pua public puppet push qi queryselector queryselectorall quite radio rb rd re re-editing read readable readastext readtext realism recording reference refugee refugees regex regexp remembrance remove removechild removed removeitem renderdualfonthtml renderer renderhistory rendering reorder rep reph rephrx replace replaceall replacement replall republic restore restored restoreenglish result return review revolution revolutions rhythm riders rights river rj rm role roman roots rprotected rule rules sample samples satellite scene school score screen script scroll scrolling scrollleft scrolltop secular secularism see seg segments select semiotic sequence set setattribute setitem setmode settheme settimeout setupcollapsible setupdrop setupkeys shiftkey short shortcuts shot should show side signified signifier signs single sion sister slice small so social society some someone something song soundtrack span split standard state stats step storagekey story str string stringify strings structure struggle studio style subject such sunderbans supported supports surrealism sutonnymj swap swapna synchronize synthesis system tab tabindex tabs tajuddin tale target tasteful teardrops technique telescope television ten test text textarea textcontent that the their them theme then theory these they third this thriller through tilt time time-lapse tion to toast tog toggle toggleid tok tokens tolocaledatestring tolowercase too top total track tracking tragedy transparent tree tribal trilogy trim true try txt type typeof uefff uffff ui unicnt unicode unicodetobijoy unicount university unknown unshift unsung up updatedualfontpreview updatestats url us use user utf uv value var verite very vhs vi view vii viii virama vocal vote vowel vowels vwxyz wall want wanted war was wave way wc we website well what when where which while who whom whose why wi wife will window with without won word words wrap writetext wv xi xii xiii xiv xix xl xli xlii xliii xliv xlix xlv xlvi xlvii xlviii xv xvi xvii xviii xx xxi xxii xxiii xxiv xxix xxv xxvi xxvii xxviii xxx xxxi xxxii xxxiii xxxiv xxxix xxxv xxxvi xxxvii xxxviii ye years yet your youtube yv za zone zoom zv";
const COMMON_ENG = new Set(ENG_DICT_RAW.split(' '));

// Extra English words commonly seen as inline category labels, menu items,
// and standalone phrases in Bangla articles (covers words not in the base dict).
const EXTRA_ENG_RAW = "people society community culture politics government economy business world country state city town village family home life work school college university hospital church temple market shop store office building room door window road street highway bridge park garden river mountain sea ocean forest field farm animal bird fish dog cat horse cow chicken plant flower tree fruit vegetable food water milk bread rice meat fish fruit vegetable salt sugar oil tea coffee juice wine beer restaurant kitchen recipe menu order delivery customer service support team staff member manager director officer leader founder owner author writer editor reader publisher producer actor singer artist musician player coach teacher student parent child baby boy girl man woman friend guest visitor neighbor colleague partner couple family husband wife brother sister son daughter uncle aunt cousin king queen prince princess hero villain master slave boss employee employer worker labor farmer fisher hunter driver pilot sailor soldier police doctor nurse lawyer judge priest monk volunteer tourist traveler explorer scientist engineer doctor nurse farmer worker builder painter designer programmer developer designer analyst researcher inventor scientist pilot driver captain chef driver cyclist swimmer runner athlete champion winner loser player coach fan supporter sponsor investor trader customer patient client guest visitor tourist traveler student pupil apprentice beginner expert master professional amateur volunteer employee employer boss colleague peer friend neighbor stranger foreigner native local resident citizen immigrant refugee resident citizen inhabitant settler pioneer colonist explorer missionary spy agent detective investigator journalist reporter editor publisher writer author poet artist musician composer performer actor actress singer dancer painter sculptor architect designer photographer filmmaker director producer manager supervisor coordinator assistant helper supporter partner ally friend colleague companion roommate neighbor relative family parents grandparents grandchildren siblings twins triplets quadruplets family children babies infants toddlers preschoolers schoolchildren teenagers adolescents adults elders seniors retirees widows widowers bachelors spinsters orphans adoptees stepchildren grandchildren inlaws relatives cousins nephews nieces aunts uncles grandparents grandchildren descendants ancestors predecessors heirs successors hello hi hey goodbye bye thanks thank please sorry yes no okay ok alright alright sure fine great awesome cool amazing fantastic brilliant wonderful excellent perfect nice good bad happy sad angry hungry thirsty tired sleepy wake sleep dream hope wish want need have has had make made do does did go went come came see saw look watch hear listen say says said tell told know knew think thought believe feel felt love loved hate hated like liked enjoy enjoyed work worked play played learn learned teach taught read write wrote speak spoke talk talked live lived die died run ran walk walked fly flew swim swam drive drove ride rode eat ate drink drank buy bought sell sold give gave take took get got put set make made find found keep kept lose lost pay paid meet met say said hello banana apple orange mango grape fruit color colour red green blue yellow black white black white small large big little long short tall high low fast slow hot cold warm cool new old young good bad great nice an the of in to for on with at by from up about into over after beneath under above between through during without before against around among since until whereas behind throughout despite upon concerning via regarding notwithstanding onto toward offline online beside alongside plus minus versus mid anti non pre post re un de dis mis over under out off away forth cross retro semi auto self same other another much many few little less more most some any all both each every either neither several such no nor not only own same so than too very can will just don should now please thank welcome sorry yes okay alright right left here there where when how what which who whom whose why an the a is am are was were be been being have has had do does did doing done will would shall should may might must can could need dare ought used i me my mine you your yours he him his she her hers it its we us our ours they them their theirs this that these those but and or if because as until while of in to for on with at by from up about into over after beneath under above between through during without before against around among since until whereas behind throughout despite upon concerning via regarding notwithstanding onto toward offline online beside alongside plus minus versus mid anti non pre post re un de dis mis over under out off away forth cross retro semi auto self same other another much many few little less more most some any all both each every either neither several such no nor not only own same so than too very can will just don should now please thank welcome sorry yes okay alright right left here there where when how what which who whom whose why";


const EXTRA_ENG = new Set(EXTRA_ENG_RAW.split(' '));

// English suffixes — if a word ends with one of these and the stem is plausible,
// it's very likely English. Used as a fallback when the word isn't in the dictionary.
const ENGLISH_SUFFIXES = /(?:tion|sion|ment|ness|ity|ence|ance|ery|ry|ist|ism|able|ible|ous|ive|al|ic|ical|ful|less|ly|ed|er|or|ing|est|en|ize|ise|ify|ate|hood|ship|dom|craft|wright|wise|fold|ward|wards|like|ful|most|some|thing|body|one|self|selves)$/;

// Title Case words: capitalized first letter + 2+ lowercase letters + not in Bijoy blacklist
// are very likely English proper nouns or category labels.
const TITLE_CASE = /^[A-Z][a-z]{2,}$/;

/**
 * Advanced English Word & Acronym Detection Engine
 * Combines 10,000+ word dictionary, compound word analysis,
 * digit/acronym rules, and English morphological heuristics.
 */

const BIJOY_BLACKLIST = new Set([
  'avgvi', 'avwg', 'evovwj', 'evsjv', 'fjevwm', 'gkwu', 'gkwz', 'gkb', 'gk', 'mvbvi', 'myi', 'rvwz', 'zvgvq', 'mvdv', 'mvb', 'gvi', 'fvjevwm',
  'avi', 'gb', 'ib', 'me', 'be', 'mv', 'dv', 'in', 'am', 'an',
  'is', 'as', 'us', 'or', 'so', 'to', 'do', 'go', 'no', 'vi',
  'jv', 'ej', 'gv', 'cv', 'kv', 'wv', 'yv', 'xv', 'zv', 'ye', 'xi', 'wi', 'ky', 'rb', 'bg', 'we', 'ab', 'ci', 'rj', 'li', 'Ii', 'ii', 'II', 'LI', 'lI', 'iv', 'IV', 'Iv', 'iV', 'my', 'My', 'MY', 'by', 'By', 'BY', 'ey', 'Ey', 'EY', 'dy', 'Dy', 'DY', 'hvq', 'Hvq', 'HVQ', 'ly', 'Ly', 'LY', 'ui', 'Ui', 'UI', 'rvbvjv', 'Rvbvjv', 'ij', 'rjv', 'Rjv', 'zvi', 'Zvi', 'kij', 'Kij', 'KIJ', 'hv', 'Hv', 'HV', 'wb', 'Wb', 'cy', 'Cy', 'hy', 'Hy', 'ky', 'Ky', 'gy', 'Gy', 'gyq', 'Gyq',
  'gkk', 'dj', 'gk', 'pk', 'kgb', 'i', 'I'
]);

/**
 * Advanced English Word & Acronym Detection Engine
 * Excludes Bijoy high-collision words (Avi->আর, GB->এই, IB->ঐ, mvDv->সাদা).
 */

/**
 * Helper to identify if a token contains valid Bijoy character structures
 * or matches BIJOY_BLACKLIST.
 */
const BIJOY_STRUCTURE_MULTI_KEYS = B2U_MULTI.map(x => x[1]).filter(k => k && k.length >= 2 && /^[A-Za-z0-9\u0080-\uFFFF]+$/.test(k));

function hasBijoyStructure(word) {
  if (!word || word.length === 0) return false;
  if (/[^\x00-\x7F]/.test(word)) return true;
  const clean = word.replace(/^[^\w]+|[^\w]+$/, '');
  const lower = clean.toLowerCase();
  if (BIJOY_BLACKLIST.has(lower)) return true;
  for (const k of BIJOY_STRUCTURE_MULTI_KEYS) {
    if (word.includes(k)) return true;
  }
  if (/^Av/.test(word)) return true;
  return false;
}

/**
 * Advanced English Word & Acronym Whitelist Engine
 */
function isEnglishWord(word) {
  if (!word || word.length === 0) return false;
  if (/[^\x00-\x7F]/.test(word)) return false;

  const clean = word.replace(/^[^\w]+|[^\w]+$/, '');
  const lower = clean.toLowerCase();

  // 1. High-collision Bijoy blacklist check
  if (BIJOY_BLACKLIST.has(lower)) return false;

  // 2. Single letters except 'a' / 'A' / 'I' are NEVER English words in Bijoy text
  if (clean.length === 1) return false;

  // 3. Parenthesized/bracketed Roman numerals e.g. (i), (ii), (v), (x), (xxvi)
  if (/^\([ivxIVXLCDM]+\)$/i.test(word) || /^\[[ivxIVXLCDM]+\]$/i.test(word)) return true;
  if (/^(?:ii|iii|iv|v|vi|vii|viii|ix|xii|xiii|xiv|xv|xvi|xvii|xviii|xix|xx|xxi|xxii|xxiii|xxiv|xxv|xxvi|xxvii|xxviii|xxix|xxx|xxxi|xxxii|xxxiii|xxxiv|xxxv|xxxvi|xxxvii|xxxviii|xxxix|xl|xli|xlii|xliii|xliv|xlv|xlvi|xlvii|xlviii|xlix|l)$/i.test(lower)) return true;

  // 4. "No." or "No"
  if (lower === 'no' || lower === 'no.') return true;

  // 5. Check 370,000+ universal English dictionary & base/extra dicts
  if (typeof ALL_ENGLISH_WORDS !== 'undefined' && ALL_ENGLISH_WORDS && ALL_ENGLISH_WORDS.has(lower)) return true;
  if (COMMON_ENG.has(lower) || EXTRA_ENG.has(lower)) return true;

  const baseStem = lower.replace(/(?:ing|tion|sion|ment|ness|able|ible|ous|ive|ally|ly|ed|er|es|s|d)$/, '');
  if (baseStem.length >= 2 && !BIJOY_BLACKLIST.has(baseStem) && ((typeof ALL_ENGLISH_WORDS !== 'undefined' && ALL_ENGLISH_WORDS && ALL_ENGLISH_WORDS.has(baseStem)) || COMMON_ENG.has(baseStem) || EXTRA_ENG.has(baseStem))) return true;

  // 6. Real English Acronyms
  const REAL_ENGLISH_ACRONYMS = new Set(['USA','UK','UAE','UN','UNICEF','UNESCO','WHO','BBC','CNN','CEO','CFO','CTO','PDF','HTML','CSS','URL','API','SDK','RAM','CPU','GPU','SMS','VAT','NID','HSC','SSC','JSC','PSC','MP','PM','DC','SP','OC','FB','GB','MB','TB','KB','AM','PM','BC','AD','ID','IQ','IT','AI','UI','UX','WIFI','SIM','PIN','OTP','USD','BDT','HTML5','CSS3']);
  if (word.length >= 2 && REAL_ENGLISH_ACRONYMS.has(word)) return true;

  if (/\d/.test(word) && /[A-Za-z]/.test(word) && !hasBijoyStructure(word)) return true;

  // 7. Title Case heuristic: capitalized proper-noun-looking word that's not Bijoy
  //    Examples: "People", "Society", "Marine", "Sciences", "Bangladesh"
  //    Catches category labels that the dictionary might miss.
  if (TITLE_CASE.test(clean) && !hasBijoyStructure(clean)) {
    return true;
  }

  // 9. All-caps acronyms 2+ chars: assume English if not Bijoy-like
  //    Examples: USA, FBI, NATO, NASA, SQL, HTML, API
  if (/^[A-Z]{2,}[A-Z0-9]*$/.test(clean) && !hasBijoyStructure(clean)) {
    return true;
  }

  // 8. English suffix heuristic: word ends in a common English suffix and
  //    has a plausible stem. Catches "national", "global", "digital", etc.
  if (lower.length >= 4 && ENGLISH_SUFFIXES.test(lower)) {
    const stem = lower.replace(ENGLISH_SUFFIXES, '');
    if (stem.length >= 2 && /[a-z]/.test(stem) && !BIJOY_BLACKLIST.has(stem)) {
      // Extra check: stem shouldn't be entirely consonants or look Bijoy-like
      if (!hasBijoyStructure(stem) && /[aeiouy]/.test(stem)) {
        return true;
      }
    }
  }

  return false;
}

/**
 * Modular English Protection Engine (Step 0)
 * Replaces generic regex detection with whitelist dictionary matching,
 * strict regexes for pure numbers, URLs, emails, and Bijoy structure exclusion rules.
 */
function protectEnglishTokens(text) {
  if (!text) return { text: '', map: [] };

  const map = [];
  const addProt = (match) => {
    const idx = map.length;
    map.push(match);
    return '\uE001' + String.fromCharCode(0xE100 + idx) + '\uE001';
  };

  let r = text;

  // 1. Strict, unambiguous Emails
  r = r.replace(/(?<![A-Za-z0-9_])([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})(?![A-Za-z0-9_])/g, addProt);

  // 2. Strict, unambiguous URLs
  r = r.replace(/(?<![A-Za-z0-9_])((?:https?:\/\/|www\.)[^\s<>"'{}|\\^`]+)(?![A-Za-z0-9_])/g, addProt);

  // 3. Pure Numbers (e.g. 1971, 2026, 3.14, 100,000)
  r = r.replace(/(?<![A-Za-z0-9_\u0080-\uFFFF])(\d+(?:[\.,]\d+)*)(?![A-Za-z0-9_\u0080-\uFFFF])/g, addProt);

  // 4. Bracketed/Parenthesized Roman Numerals (e.g. (i), (xxvi), [iii])
  r = r.replace(/(?:\(|\\[)(?:[ivxIVXLCDM]+)(?:\)|\\])/gi, addProt);

  // 5. Multi-word English phrases connected by &, /, or -.
  //    Examples: "People & Society", "Water / Marine Sciences", "state-of-the-art"
  //    The first word should look English (Title Case or lowercase) to avoid
  //    catching Bijoy punctuation.
  r = r.replace(/([A-Za-z][A-Za-z]*(?:[''][a-zA-Z]+)?(?:\s+(?:&|\/|-)\s+[A-Za-z][A-Za-z]*(?:[''][a-zA-Z]+)?){1,5}(?:\s+(?:&|\/|-)\s+[A-Za-z][A-Za-z]*(?:[''][a-zA-Z]+)?){0,5})/g, (m) => {
    // Only protect if every word in the phrase is English
    const words = m.split(/\s+(?:&|\/|-)\s+/);
    if (words.every(w => isEnglishWord(w.replace(/[.,!?;:]/g, '').trim()))) {
      return addProt(m);
    }
    return m;
  });

  // 5b. Hyphenated English compounds (no spaces around the hyphen):
  //     "state-of-the-art", "mother-in-law", "long-term", "X-ray", "T-shirt"
  //     Works for both lowercase and title-case.
  r = r.replace(/([A-Za-z][A-Za-z]*(?:[-][A-Za-z]+){1,5})/g, (m) => {
    if (m.length < 5) return m;
    const parts = m.split('-');
    if (parts.every(p => p.length >= 1 && isEnglishWord(p))) {
      return addProt(m);
    }
    return m;
  });

  // 5c. Slash-connected English: "sci-fi", "PDF/HTML"
  r = r.replace(/([A-Za-z][A-Za-z]*(?:[-/][A-Za-z]+){1,3})/g, (m) => {
    if (m.length < 5) return m;
    const parts = m.split('/');
    if (parts.every(p => p.length >= 1 && isEnglishWord(p))) {
      return addProt(m);
    }
    return m;
  });

  // 5d. Word-number compounds: "Web2.0", "GPT-4", "iPhone15", "H2O", "CO2"
  r = r.replace(/([A-Za-z]+\d+(?:\.\d+)?[A-Za-z]*)/g, (m) => {
    if (isEnglishWord(m.replace(/\d+(\.\d+)?/g, '')) || m.length >= 4) {
      if (!hasBijoyStructure(m)) return addProt(m);
    }
    return m;
  });

  // 5e. Number-letter compounds: "1080p", "4K", "3D"
  r = r.replace(/(\d+[A-Za-z]+)/g, (m) => {
    if (!hasBijoyStructure(m)) return addProt(m);
    return m;
  });

  // 6. Tokenize remaining Latin text blocks (single words with possible apostrophe)
  r = r.replace(/(?<![A-Za-z0-9_\u0080-\uFFFF])([A-Za-z]+(?:['’][a-zA-Z]+)?)(?![A-Za-z0-9_\u0080-\uFFFF])/g, (token) => {
    if (hasBijoyStructure(token)) {
      return token; // Leave Bijoy ASCII unprotected for conversion
    }
    if (isEnglishWord(token)) {
      return addProt(token); // Protect whitelist English token
    }
    // Ambiguous token: leave unprotected
    return token;
  });

  return { text: r, map };
}

function protectEnglish(text) {
  const { text: result, map } = protectEnglishTokens(text);
  return { result, map };
}

function extractEngBulletproof(text) {
  const { text: cleanR, map } = protectEnglishTokens(text);
  return { text: cleanR, engMap: map };
}

/** Restore protected English words after conversion. */
function restoreEnglish(text, map) {
  if (!text || !map) return text || '';
  return text.replace(/\uE001([\uE100-\uEFFF])\uE001/g, (_, c) => map[c.charCodeAt(0) - 0xE100] || '');
}


const U2B_SINGLE = {
  "অ":"A","ই":"B","ঈ":"C","উ":"D","ঊ":"E","ঋ":"F","এ":"G","ঐ":"H","ও":"I","ঔ":"J",
  "ক":"K","খ":"L","গ":"M","ঘ":"N","ঙ":"O","চ":"P","ছ":"Q","জ":"R","ঝ":"S","ঞ":"T",
  "ট":"U","ঠ":"V","ড":"W","ঢ":"X","ণ":"Y","ত":"Z","থ":"_","দ":"`","ধ":"a","ন":"b",
  "প":"c","ফ":"d","ব":"e","ভ":"f","ম":"g","য":"h","র":"i","ল":"j","শ":"k","ষ":"l",
  "স":"m","হ":"n","ড়":"o","ঢ়":"p","য়":"q","\u09DC":"o","\u09DD":"p","\u09DF":"q","ৎ":"r",
  "০":"0","১":"1","২":"2","৩":"3","৪":"4","৫":"5","৬":"6","৭":"7","৮":"8","৯":"9",
  "া":"v","ি":"w","ী":"x","ু":"y","ূ":"~","ৃ":"„",
  "ে":"\u2021","ৈ":"\u2030",
  "ং":"s","ঃ":"t","ঁ":"u","।":"|","॥":"\\","\u09CD":"&",
};

/* ════════════════════════════════════════════════════════════════════════════
   CONVERSION ENGINE
   ════════════════════════════════════════════════════════════════════════════ */

const BN_CONS   = '[\u0995-\u09B9\u09CE\u09DC\u09DD\u09DF]';
const BN_HAS    = '\u09CD';
const BN_CLUSTER = `${BN_CONS}(?:${BN_HAS}${BN_CONS})*`;
const LEFT_V    = '[\u09BF\u09C7\u09C8]';

// Literal replaceAll (avoids regex escaping issues)
function replAll(str, find, rep) {
  if (!find) return str;
  let r='', i=0;
  while(true) {
    const p = str.indexOf(find, i);
    if (p===-1) { r += str.slice(i); break; }
    r += str.slice(i, p) + rep;
    i = p + find.length;
  }
  return r;
}

function toAsciiDigits(str) {
  if (!str) return '';
  return str.replace(/[০-৯]/g, d => '০১২৩৪৫৬৭৮৯'.indexOf(d));
}

function extractEngBulletproof(text) {
  let r = text;
  const engMap = [];

  // 0a: Quoted English sentences or phrases (e.g. "Auteur Cinema consists in short...")
  r = r.replace(/(["“'‘])([A-Za-z0-9\s,.:;?!'’"-]{3,})/g, (match) => {
    const idx = engMap.length;
    engMap.push(match);
    return '\uE000' + idx + '\uE000';
  });

  // 0b: Bracketed English titles [Wanted], [The River...]
  r = r.replace(/\[([A-Za-z0-9\s,.:;?!'’-]{2,})\]/g, (match) => {
    const idx = engMap.length;
    engMap.push(match);
    return '\uE000' + idx + '\uE000';
  });

  // 0c: Multi-word English sequences (e.g. Cinema Verite, Point of View, Decline and Fall)
  r = r.replace(/(?<![A-Za-z0-9])([A-Za-z0-9]{2,}(?:[\s-]+[A-Za-z0-9]{2,})+)(?![A-Za-z0-9])/g, (match) => {
    const words = match.split(/[\s-]+/);
    const engCount = words.filter(w => isEnglishWord(w)).length;
    if (engCount >= Math.max(1, Math.ceil(words.length * 0.4))) {
      const idx = engMap.length;
      engMap.push(match);
      return '\uE000' + idx + '\uE000';
    }
    return match;
  });

  // 0d: Single English words (MUST be at least 2 characters long unless 'a', 'A', 'I')
  r = r.replace(/(?<![A-Za-z0-9\u2021\u2020\u2030\u02C6\u0160vwxyz~„uª¨©\u00A0])([A-Za-z0-9]{2,}|a|A|I)(?![A-Za-z0-9\u2021\u2020\u2030\u02C6\u0160vwxyz~„uª¨©\u00A0])/g, (w) => {
    if (w.length === 1 && w !== 'a' && w !== 'A' && w !== 'I') return w;
    if (isEnglishWord(w)) {
      const idx = engMap.length;
      engMap.push(w);
      return '\uE000' + idx + '\uE000';
    }
    return w;
  });

  return { text: r, engMap };
}

function getDictB2U(word) {
  if (typeof BijoyDict !== 'undefined' && BijoyDict.lookupB2U) return BijoyDict.lookupB2U(word);
  return null;
}

function parseSyllable(word) {
  if (typeof BijoyParser !== 'undefined' && BijoyParser.parseBijoySyllables) return BijoyParser.parseBijoySyllables(word);
  return word;
}

function bijoyToUnicodeSingleLine(line) {
  if (!line) return '';
  let r = line;

  // Protect pre-existing Unicode Bengali segments
  const uniBlocks = [];
  r = r.replace(/[\u0980-\u09FF]+/g, (m) => {
    const idx = uniBlocks.length;
    uniBlocks.push(m);
    return '\uE004' + idx + '\uE004';
  });

  // Step 2: Multi-Char pre-pass (Longest matches first)
  const multiMap = [];
  for (const [b, u] of B2U_MULTI) {
    if (!b || b === '\u00A9') continue;
    if (r.includes(b)) {
      const idx = multiMap.length;
      multiMap.push(u);
      const placeholder = '\uE002' + String.fromCharCode(0xE200 + idx) + '\uE002';
      r = replAll(r, b, placeholder);
    }
  }

  // Step 0: Extract English phrases and words
  const { text: cleanR, engMap } = extractEngBulletproof(r);
  r = cleanR;

  // Step 1: Tokenize by spaces and formatting delimiters
  const tokens = r.split(/(\uE001[\uE100-\uE2FF]\uE001|\uE002[\uE200-\uE2FF]\uE002|\uE004[0-9]+\uE004|\s+|[.,!?;:()\[\]])/);
  r = tokens.map(token => {
    if (!token) return '';
    if (token.startsWith('\uE001') || token.startsWith('\uE002') || token.startsWith('\uE004')) return token;
    if (/^\s+$/.test(token) || /^[.,!?;:()\[\]]$/.test(token)) return token;

    // 1. Check Dictionary Lookup First (O(1) exact word)
    const dictResult = getDictB2U(token);
    if (dictResult) return dictResult;

    // 2. State-Machine Syllable Parser for unknown words
    return parseSyllable(token);
  }).join('');

  // Step 5: NFC normalization
  r = r.normalize('NFC');

  // Step 6: Cleanup double halants
  r = r.replace(/\u09CD\u09CD/g,'\u09CD')
       .replace(/\u09CD([\u09BE-\u09CC])/g, '$1')
       .replace(/\u09CD(?=\s|$)/g,'');

  // Restore Step 2 multi-char
  r = r.replace(/\uE002([\uE200-\uE2FF])\uE002/g, (_, c) => multiMap[c.charCodeAt(0) - 0xE200] || '');

  // Restore English words
  r = r.replace(/\uE000([০-৯0-9]+)\uE000/g, (_, dStr) => engMap[parseInt(toAsciiDigits(dStr), 10)] || '');
  r = r.replace(/\uE001([\uE100-\uE2FF])\uE001/g, (_, c) => engMap[c.charCodeAt(0) - 0xE100] || '');

  // Restore protected pre-existing Unicode blocks
  r = r.replace(/\uE004([০-৯0-9]+)\uE004/g, (_, dStr) => uniBlocks[parseInt(toAsciiDigits(dStr), 10)] || '');

  // Final spelling fixes
  r = r.replace(/অাঁ/g, 'আঁ').replace(/অঁা/g, 'আঁ').replace(/আাঁ/g, 'আঁ');

  return r;
}


function bijoyToUnicode(text) {
  if (!text) return '';
  const lines = text.replace(/\r\n/g,'\n').replace(/\r/g,'\n').split('\n');
  return lines.map(bijoyToUnicodeSingleLine).join('\n');
}

function unicodeToBijoy(text, returnHTML = false) {
  if (!text) return returnHTML ? { text: '', html: '' } : '';
  // Normalize smart quotes, ellipsis & dashes to safe ASCII punctuation
  // Prevents SutonnyMJ font glyph clashes (“="চ্চ", ”="চ্চ", ‘="স্থ", …="থাক")
  text = text.normalize('NFC')
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .replace(/…/g, '...')
    .replace(/[–—]/g, '-');
  // Normalize decomposed nukta combinations (য+nukta -> য়, ড+nukta -> ড়, ঢ+nukta -> ঢ়)
  let r = text.normalize('NFC')
    .replace(/\u09AF\u09BC/g, '\u09DF')
    .replace(/\u09A1\u09BC/g, '\u09DC')
    .replace(/\u09A2\u09BC/g, '\u09DD');

  // Step 0: Protect English tokens embedded in Bengali Unicode using unified protectEnglishTokens engine
  const { text: cleanR, map: engMap2 } = protectEnglishTokens(r);
  r = cleanR;

  const SINGLE_CLUSTER = '(?:[\u0995-\u09B9\u09CE\u09DC-\u09DF\u09BC](?:\u09CD[\u0995-\u09B9\u09CE\u09DC-\u09DF\u09BC])*(?:\u09CD[রয])?)';

  // Step 1: Handle Reph (র্ \u09B0\u09CD) + Cluster + Vowels
  const VOWEL_TO_BIJOY = {'\u09BF':'w', '\u09C7':'\u2021', '\u09C8':'\u2030'};
  r = r.replace(new RegExp(`\u09B0\u09CD(${SINGLE_CLUSTER})([\u09BF\u09C7\u09C8])`, 'g'), (_, cl, v) => (VOWEL_TO_BIJOY[v] || v) + cl + '\u00a9');
  r = r.replace(new RegExp(`\u09B0\u09CD(${SINGLE_CLUSTER})\u09CB`, 'g'), (_, cl) => '\u2021' + cl + '\u00a9' + '\u09BE');
  r = r.replace(new RegExp(`\u09B0\u09CD(${SINGLE_CLUSTER})\u09CC`, 'g'), (_, cl) => '\u2021' + cl + '\u00a9' + 'Š');
  r = r.replace(new RegExp(`\u09B0\u09CD(${SINGLE_CLUSTER})`, 'g'), (_, cl) => cl + '\u00a9');

  // Step 2: Split O-kar (ো \u09CB) and OU-kar (ৌ \u09CC) directly using Bijoy e-kar marker (‡)
  r = r.replace(new RegExp(`(${SINGLE_CLUSTER})\u09CB`, 'g'), (_, cl) => '\u2021' + cl + '\u09BE');
  r = r.replace(new RegExp(`(${SINGLE_CLUSTER})\u09CC`, 'g'), (_, cl) => '\u2021' + cl + 'Š');

  // Step 3: Reorder Left Vowels (ি \u09BF, ে \u09C7, ৈ \u09C8): Cluster + [িেৈ] -> [িেৈ] + Cluster
  r = r.replace(new RegExp(`(${SINGLE_CLUSTER})([\u09BF\u09C7\u09C8])`, 'g'), (_, cl, v) => (VOWEL_TO_BIJOY[v] || v) + cl);

  // Step 4: Multi-char Unicode -> Bijoy mapping
  for (const [u, b] of U2B_MULTI) {
    r = replAll(r, u, b);
  }

  // Step 5: Single-char mapping preserving \uE001 markers
  let out = '';
  for (let i = 0; i < r.length; i++) {
    const ch = r[i];
    if (ch === '\uE001') {
      const endIdx = r.indexOf('\uE001', i + 1);
      if (endIdx !== -1) {
        out += r.substring(i, endIdx + 1);
        i = endIdx;
        continue;
      }
    }
    out += U2B_SINGLE[ch] !== undefined ? U2B_SINGLE[ch] : ch;
  }
  r = out;

  // Step 6: Special character cleanups
  r = replAll(r, '\u09D7', 'Š');

  // Build dual-font HTML before restoring English if returnHTML is requested
  let htmlResult = '';
  if (returnHTML) {
    const lines = r.split('\n');
    const lineHtmls = lines.map(line => {
      if (!line) return '';
      const parts = line.split(/(\uE001[\uE100-\uE2FF]\uE001)/);
      let lHtml = '';
      parts.forEach(part => {
        if (!part) return;
        if (part.charCodeAt(0) === 0xE001 && part.charCodeAt(part.length - 1) === 0xE001) {
          const idx = part.charCodeAt(1) - 0xE100;
          const engText = engMap2[idx] || '';
          const escaped = engText.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
          lHtml += '<span class="eng-seg">' + escaped + '</span>';
        } else {
          const escaped = part.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
          lHtml += '<span class="bijoy-seg">' + escaped + '</span>';
        }
      });
      return lHtml;
    });
    htmlResult = lineHtmls.join('<br>');
  }

  // Step 7: Restore English for raw text
  r = restoreEnglish(r, engMap2);

  if (returnHTML) return { text: r, html: htmlResult };
  return r;
}
function detectEncoding(text) {
  if (!text.trim()) return 'unknown';
  const uniCnt = (text.match(/[\u0980-\u09FF]/g)||[]).length;
  const extCnt = (text.match(/[\u00A9\u00AA\u2020\u2021\u2030\u02C6\u0160]/g)||[]).length;
  const total  = text.replace(/\s/g,'').length || 1;
  if (uniCnt/total > 0.3) return 'unicode';
  if (extCnt > 3 || (text.match(/[K-Z_`a-nv-z]/g)||[]).length/total > 0.25) return 'bijoy';
  return 'bijoy'; // default
}

function wc(t) { return t.trim().split(/\s+/).filter(Boolean).length; }
function cc(t) { return t.replace(/\s/g,'').length; }

/* ════════════════════════════════════════════════════════════════════════════
   SAMPLE DATA
   ════════════════════════════════════════════════════════════════════════════ */

const SAMPLES = [
  { mode:'b2u', text:'evsjv‡`k GKwU myi cÖwZi ‡`k' },
  { mode:'b2u', text:'Avgvi †mvbvi evsjv, Avwg †Zvgvq fvjevwm' },
  { mode:'b2u', text:'GK †`k GK RvwZ, GKB cÖvY evOvwj' },
  { mode:'u2b', text:'ভালোবাসা মানে আমি তোমাকে ভালোবাসি। বাংলাদেশ আমার প্রিয় দেশ।' },
  { mode:'u2b', text:'সংযুক্তাক্ষর: ক্ষ ত্র ন্ত দ্ধ স্ত্র ম্প্র' },
];

/* ════════════════════════════════════════════════════════════════════════════
   UI STATE
   ════════════════════════════════════════════════════════════════════════════ */

const S = {
  mode: 'b2u',
  live: false,
  theme: localStorage.getItem('buc_theme') || 'light',
  history: [],
  reports: [],
  overrides: {},
};

/* ════════════════════════════════════════════════════════════════════════════
   TOAST
   ════════════════════════════════════════════════════════════════════════════ */

function toast(icon, msg, dur=3000) {
  const w = document.querySelector('.toast-wrap');
  const el = document.createElement('div');
  el.className = 'toast';
  el.innerHTML = `<span class="toast-icon">${icon}</span><span>${msg}</span>`;
  w.appendChild(el);
  const rm = () => { el.classList.add('toast-exit'); el.addEventListener('animationend',()=>el.remove(),{once:true}); };
  setTimeout(rm, dur);
  el.addEventListener('click', rm);
}

/* ════════════════════════════════════════════════════════════════════════════
   DOM HELPERS
   ════════════════════════════════════════════════════════════════════════════ */

const $ = id => document.getElementById(id);
const inp  = () => $('input-text');
const outp = () => $('output-text');

function updateStats() {
  const i = inp().value, o = outp().value;
  const tokens = i.match(/(?<![A-Za-z0-9\u0080-\uFFFF])([A-Za-z0-9]+(?:-(?:[0-9]+|[A-Za-z]{2,}))*)(?![A-Za-z0-9\u0080-\uFFFF])/g) || [];
  const engCount = tokens.filter(isEnglishWord).length;
  const engBadge = engCount > 0 ? ` · 🔤 ${engCount} English` : '';

  $('input-stats').textContent  = `${cc(i)} chars · ${wc(i)} words${engBadge}`;
  $('output-stats').textContent = `${cc(o)} chars · ${wc(o)} words`;
  // NOTE: do NOT call updateDualFontPreview here — preview only updates after explicit Convert
}

/**
 * Intelligent Dual-Font HTML Renderer
 * Formats Bijoy text in SutonnyMJ font and English words in System English font.
 */
/**
 * Flawless U2B Dual-Font HTML Renderer
 * Uses Step 0 English protection markers to guarantee ZERO Bijoy ASCII false-positives.
 */
function renderU2BDualFontHTML(unicodeText) {
  if (!unicodeText) return '';
  const lines = unicodeText.split('\n');
  const formattedLines = lines.map(line => {
    if (!line) return '';
    const { text: protLine, map: lineMap } = protectEnglishTokens(line);
    const convertedLine = unicodeToBijoy(protLine);
    
    const parts = convertedLine.split(/(\uE001[\uE100-\uE2FF]\uE001)/g);
    let lineHtml = '';
    
    parts.forEach(part => {
      if (!part) return;
      if (/^\uE001[\uE100-\uE2FF]\uE001$/.test(part)) {
        const idx = part.charCodeAt(1) - 0xE100;
        const engText = lineMap[idx] || '';
        const escaped = engText.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        lineHtml += `<span class="eng-seg">${escaped}</span>`;
      } else {
        const escaped = part.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        lineHtml += `<span class="bijoy-seg">${escaped}</span>`;
      }
    });
    
    return lineHtml;
  });

  return formattedLines.join('<br>');
}

function renderDualFontHTML(text) {
  if (!text) return '';
  const lines = text.split('\n');
  
  const formattedLines = lines.map(line => {
    if (!line) return '';
    const tokens = line.split(/(\s+|[.,!?;:()\[\]{}\"\'/|])/);
    
    let html = '';
    let bijoyBuffer = '';
    let engBuffer = '';

    const flushBijoy = () => {
      if (bijoyBuffer) {
        const escaped = bijoyBuffer.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        html += `<span class="bijoy-seg">${escaped}</span>`;
        bijoyBuffer = '';
      }
    };

    const flushEng = () => {
      if (engBuffer) {
        const escaped = engBuffer.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        html += `<span class="eng-seg">${escaped}</span>`;
        engBuffer = '';
      }
    };

    for (let i = 0; i < tokens.length; i++) {
      const tok = tokens[i];
      if (!tok) continue;

      const clean = tok.replace(/^[^\w]+|[^\w]+$/, '');
      const isEng = clean && isEnglishWord(clean) && !hasBijoyStructure(tok);
      const isWhitespaceOrPunct = /^[\s.,!?;:()\[\]{}\"\'/|-]+$/.test(tok);

      if (isEng) {
        flushBijoy();
        engBuffer += tok;
      } else if (isWhitespaceOrPunct && engBuffer.length > 0) {
        // Peek ahead to see if next word is also English
        let nextIsEng = false;
        for (let j = i + 1; j < tokens.length; j++) {
          if (!tokens[j]) continue;
          const nextClean = tokens[j].replace(/^[^\w]+|[^\w]+$/, '');
          if (nextClean) {
            nextIsEng = isEnglishWord(nextClean) && !hasBijoyStructure(tokens[j]);
            break;
          }
        }
        if (nextIsEng) {
          engBuffer += tok;
        } else {
          flushEng();
          bijoyBuffer += tok;
        }
      } else {
        flushEng();
        bijoyBuffer += tok;
      }
    }
    flushEng();
    flushBijoy();
    return html;
  });

  return formattedLines.join('<br>');
}

/**
 * updateOutputPreview — New Clean Architecture
 * Renders conversion result directly into #output-preview div.
 * No overlay hacks. No transparent textarea. No Chrome bugs.
 */
function updateOutputPreview() {
  const preview = $('output-preview');
  if (!preview) return;

  const effMode = getEffectiveMode();
  const mode    = S.fontMode ?? 0;
  const outVal  = outp().value;

  // In edit mode the hidden textarea is visible; don't update preview
  if ($('output-text') && $('output-text').style.display === 'block') return;

  // Safe HTML escape helper (avoids regex newline in literal bug)
  function esc(t) {
    return t.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/\n/g,'<br>');
  }

  if (effMode === 'b2u') {
    // B2U: output is Unicode — display plain Unicode text
    preview.innerHTML = esc(outVal) || '';
    if (mode === 1) {
      preview.style.fontFamily = 'var(--font-bijoy)';
      preview.style.fontSize   = '18px';
    } else {
      preview.style.fontFamily = 'var(--font-bn)';
      preview.style.fontSize   = '16px';
    }
  } else {
    // U2B: output is Bijoy ASCII — render dual-font HTML
    if (mode === 0) {
      // Dual-font: Bengali in SutonnyMJ, English in blue
      const res = unicodeToBijoy(inp().value, true);
      preview.innerHTML = res.html || '';
      preview.style.fontFamily = '';
      preview.style.fontSize   = '';
    } else if (mode === 1) {
      // SutonnyMJ-only: all in Bijoy font
      preview.innerHTML = esc(outVal) || '';
      preview.style.fontFamily = 'var(--font-bijoy)';
      preview.style.fontSize   = '18px';
    } else {
      // System font: plain ASCII readable
      preview.innerHTML = esc(outVal) || '';
      preview.style.fontFamily = 'var(--font-ui)';
      preview.style.fontSize   = '14px';
    }
  }
}
// Alias so existing callers still work
function updateDualFontPreview() { updateOutputPreview(); }


function setMode(m) {
  S.mode = m;
  document.querySelectorAll('.mode-tab').forEach(t => t.classList.toggle('active', t.dataset.mode===m));
  const cfg = {
    b2u: {il:'Bijoy Input', ol:'Unicode Output', ip:'Paste Bijoy / SutonnyMJ text here…\n\nExample:  evsjv‡`k  (বাংলাদেশ)'},
    u2b: {il:'Unicode Input', ol:'Bijoy Output', ip:'Paste Unicode Bengali text here…\n\nExample: বাংলাদেশ'},
    auto:{il:'Input (Auto Detect)', ol:'Converted Output', ip:'Paste Bijoy or Unicode Bengali — auto-detect will figure it out…'},
  }[m];
  $('input-label').textContent  = cfg.il;
  $('output-label').textContent = cfg.ol;
  inp().placeholder = cfg.ip;
  inp().lang  = m==='u2b' ? 'bn' : '';
  outp().lang = m==='u2b' ? ''   : 'bn';
  // Reset fontMode to default (0 = auto-intelligent) when switching modes
  S.fontMode = 0;
  // applyFontMode handles all bijoy-font class and button text logic
  applyFontMode();
}

/* ════════════════════════════════════════════════════════════════════════════
   CONVERSION
   ════════════════════════════════════════════════════════════════════════════ */

function doConvert() {
  const txt = inp().value;
  if (!txt.trim()) { toast('⚠️','Please enter some text first.'); return; }

  // Show "converting..." state
  const convertBtn = $('convert-btn');
  if (convertBtn) {
    convertBtn.dataset.label = convertBtn.textContent;
    convertBtn.textContent = '⏳ Converting…';
    convertBtn.disabled = true;
  }

  // Use worker if available, fall back to inline engine
  const conv = window.__converter__;
  const runConversion = async () => {
    let effective = S.mode;
    const det = conv ? await conv.detect(txt) : detectEncoding(txt);
    if (S.mode === 'b2u' && det === 'unicode') effective = 'u2b';
    if (S.mode === 'u2b' && det === 'bijoy') effective = 'b2u';
    if (S.mode === 'auto') effective = det === 'unicode' ? 'u2b' : 'b2u';

    // Dynamically update labels based on effective conversion mode
    if (effective === 'u2b') {
      $('input-label').textContent  = 'Unicode Input';
      $('output-label').textContent = 'Bijoy Output';
    } else {
      $('input-label').textContent  = 'Bijoy Input';
      $('output-label').textContent = 'Unicode Output';
    }

    applyFontMode();

    if (S.mode === 'auto') {
      const banner = $('enc-banner');
      $('enc-label').textContent = det==='unicode'
        ? 'Unicode Detected → Converting to Bijoy'
        : 'Bijoy Detected → Converting to Unicode';
      banner.classList.remove('hidden');
    } else if (S.mode === 'b2u' && det === 'unicode') {
      const banner = $('enc-banner');
      $('enc-label').textContent = 'Unicode Input Detected → Converting to Bijoy';
      banner.classList.remove('hidden');
    } else if (S.mode === 'u2b' && det === 'bijoy') {
      const banner = $('enc-banner');
      $('enc-label').textContent = 'Bijoy Input Detected → Converting to Unicode';
      banner.classList.remove('hidden');
    } else {
      $('enc-banner').classList.add('hidden');
    }

    let out;
    try {
      // Apply personal overrides before engine
      const overridden = applyPersonalOverrides(txt, effective);
      out = conv
        ? await conv.convert(effective, overridden)
        : (effective === 'u2b' ? unicodeToBijoy(overridden) : bijoyToUnicode(overridden));
    } catch(e) {
      toast('❌','Conversion error. Check console.'); console.error(e);
      if (convertBtn) {
        convertBtn.textContent = convertBtn.dataset.label || '🔄 Convert';
        convertBtn.disabled = false;
      }
      return;
    }

    outp().value = out;
    updateStats();
    updateOutputPreview();
    renderWordDiff(txt, out, effective);
    addHistory({ mode: effective, input: txt.slice(0,200), output: out.slice(0,200), time: new Date() });

    if (convertBtn) {
      convertBtn.textContent = convertBtn.dataset.label || '🔄 Convert';
      convertBtn.disabled = false;
    }
  };

  runConversion();
}

window.doConvert = doConvert;
window.bijoyToUnicode = bijoyToUnicode;
window.unicodeToBijoy = unicodeToBijoy;
window.isEnglishWord = isEnglishWord;

/* ════════════════════════════════════════════════════════════════════════════
   HISTORY
   ════════════════════════════════════════════════════════════════════════════ */

function loadHistory() {
  try { S.history = JSON.parse(localStorage.getItem('buc_h')||'[]'); } catch { S.history=[]; }
  renderHistory();
}

function addHistory(entry) {
  if (S.history[0] && S.history[0].input===entry.input) return;
  S.history.unshift(entry);
  if (S.history.length>20) S.history.pop();
  localStorage.setItem('buc_h', JSON.stringify(S.history));
  renderHistory();
}

function renderHistory() {
  const el = $('hist-list');
  if (!S.history.length) {
    el.innerHTML='<div class="hist-empty">No conversions yet. Convert something to see history!</div>';
    return;
  }
  const fmtTime = d => {
    const diff=(Date.now()-new Date(d))/1000;
    if(diff<60) return 'just now';
    if(diff<3600) return `${Math.floor(diff/60)}m ago`;
    if(diff<86400) return `${Math.floor(diff/3600)}h ago`;
    return new Date(d).toLocaleDateString('en-GB',{day:'2-digit',month:'short'});
  };
  el.innerHTML = S.history.map((h,i)=>`
    <div class="hist-item" data-i="${i}" role="button" tabindex="0">
      <span class="hist-badge ${h.mode==='b2u'?'badge-b2u':'badge-u2b'}">${h.mode==='b2u'?'B→U':'U→B'}</span>
      <span class="hist-preview">${h.output.replace(/</g,'&lt;')}</span>
      <span class="hist-time">${fmtTime(h.time)}</span>
    </div>`).join('');

  el.querySelectorAll('.hist-item').forEach(item => {
    const restore = () => {
      const h = S.history[+item.dataset.i];
      inp().value  = h.input;
      outp().value = h.output;
      updateOutputPreview();
      setMode(h.mode);
      updateStats();
      toast('🕑','Restored from history.');
    };
    item.addEventListener('click', restore);
    item.addEventListener('keydown', e => { if(e.key==='Enter'||e.key===' ') restore(); });
  });
}

/* ════════════════════════════════════════════════════════════════════════════
   BROKEN-WORD REPORTS
   Captures input/output pairs that look wrong so we can iterate on the
   conversion engine. Reports are stored in localStorage as 'buc_reports'
   and can be exported as JSON, CSV, or plain text.
   ════════════════════════════════════════════════════════════════════════════ */

const REPORTS_KEY = 'buc_reports';
const REPORTS_MAX = 200;

function loadReports() {
  try { S.reports = JSON.parse(localStorage.getItem(REPORTS_KEY) || '[]'); }
  catch { S.reports = []; }
  renderReports();
}

function addReport() {
  const input = inp().value;
  const output = outp().value;
  if (!input.trim()) { toast('⚠️','Nothing to report — input is empty.'); return; }
  if (!output.trim()) { toast('⚠️','Nothing to report — convert something first.'); return; }

  const mode = getEffectiveMode();
  const report = {
    id: Date.now() + '-' + Math.random().toString(36).slice(2,8),
    mode,
    direction: mode === 'b2u' ? 'bijoy-to-unicode' : 'unicode-to-bijoy',
    input: input,
    output: output,
    inputPreview: input.slice(0, 60),
    outputPreview: output.slice(0, 60),
    time: new Date().toISOString(),
  };

  // De-dupe: skip if last report has identical input
  if (S.reports[0] && S.reports[0].input === report.input && S.reports[0].mode === report.mode) {
    toast('ℹ️','This conversion was just reported.');
    return;
  }

  S.reports.unshift(report);
  if (S.reports.length > REPORTS_MAX) S.reports.length = REPORTS_MAX;
  localStorage.setItem(REPORTS_KEY, JSON.stringify(S.reports));
  renderReports();
  toast('⚠️','Reported. Check the Reports panel below.');
}

function renderReports() {
  const list = $('rep-list');
  const count = $('rep-count');
  if (!list) return;
  if (!S.reports) S.reports = [];
  if (count) count.textContent = `(${S.reports.length})`;

  if (S.reports.length === 0) {
    list.innerHTML = '<div class="hist-empty">No reports yet. Click "⚠️ Report" to capture a broken conversion.</div>';
    return;
  }

  const fmtTime = iso => {
    const d = new Date(iso);
    const diff = (Date.now() - d) / 1000;
    if (diff < 60) return 'just now';
    if (diff < 3600) return `${Math.floor(diff/60)}m ago`;
    if (diff < 86400) return `${Math.floor(diff/3600)}h ago`;
    return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short' });
  };

  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

  list.innerHTML = S.reports.map((r, i) => `
    <div class="hist-item" data-i="${i}" role="button" tabindex="0" aria-label="Restore report ${i+1}">
      <span class="hist-badge ${r.mode === 'b2u' ? 'badge-b2u' : 'badge-u2b'}">${r.mode === 'b2u' ? 'B→U' : 'U→B'}</span>
      <div style="flex:1; min-width:0; display:flex; flex-direction:column; gap:2px;">
        <span class="hist-preview" style="font-family:var(--font-ui);">${esc(r.inputPreview)}${r.input.length > 60 ? '…' : ''}</span>
        <span class="hist-preview" style="font-size:11px;opacity:0.7;">→ ${esc(r.outputPreview)}${r.output.length > 60 ? '…' : ''}</span>
      </div>
      <span class="hist-time">${fmtTime(r.time)}</span>
    </div>`).join('');

  list.querySelectorAll('.hist-item').forEach(item => {
    const restore = () => {
      const r = S.reports[+item.dataset.i];
      if (!r) return;
      inp().value  = r.input;
      outp().value = r.output;
      setMode(r.mode);
      updateStats();
      toast('⚠️','Report restored to editor.');
    };
    item.addEventListener('click', restore);
    item.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') restore(); });
  });
}

function clearReports() {
  if (!S.reports || S.reports.length === 0) return;
  if (!confirm(`Clear all ${S.reports.length} reports? This cannot be undone.`)) return;
  S.reports = [];
  localStorage.removeItem(REPORTS_KEY);
  renderReports();
  toast('🗑️','Reports cleared.');
}

/* ════════════════════════════════════════════════════════════════════════════
   PERSONAL OVERRIDE DICTIONARY
   When a user fixes a broken word, the corrected pair is saved here.
   Future conversions apply these overrides BEFORE the engine runs.
   ════════════════════════════════════════════════════════════════════════════ */

const OVERRIDES_KEY = 'buc_overrides';
const OVERRIDES_MAX = 5000;

function loadOverrides() {
  try { S.overrides = JSON.parse(localStorage.getItem(OVERRIDES_KEY) || '{}'); }
  catch { S.overrides = {}; }
  updateOverridesCount();
}

function saveOverrides() {
  localStorage.setItem(OVERRIDES_KEY, JSON.stringify(S.overrides));
  updateOverridesCount();
}

function updateOverridesCount() {
  const el = $('over-count');
  if (!el) return;
  const n = Object.keys(S.overrides || {}).length;
  el.textContent = `(${n})`;
}

/**
 * Apply personal overrides to the text BEFORE it goes through the engine.
 * Overrides are stored as { mode: 'b2u', pairs: { inputSubstr: replacement, ... } }.
 * Longest matches first to avoid partial-replace bugs.
 */
function applyPersonalOverrides(text, mode) {
  if (!S.overrides || !S.overrides[mode]) return text;
  const pairs = S.overrides[mode];
  if (!pairs || Object.keys(pairs).length === 0) return text;
  // Sort keys longest-first so we replace longest patterns first
  const keys = Object.keys(pairs).sort((a, b) => b.length - a.length);
  let out = text;
  for (const k of keys) {
    if (out.includes(k)) {
      out = out.split(k).join(pairs[k]);
    }
  }
  return out;
}

function addOverride(input, expected, mode) {
  if (!input || !expected) return;
  if (!S.overrides) S.overrides = {};
  if (!S.overrides[mode]) S.overrides[mode] = {};
  S.overrides[mode][input] = expected;
  // Cap to keep localStorage manageable
  const keys = Object.keys(S.overrides[mode]);
  if (keys.length > OVERRIDES_MAX) {
    keys.slice(OVERRIDES_MAX).forEach(k => delete S.overrides[mode][k]);
  }
  saveOverrides();
}

function deleteOverride(mode, key) {
  if (S.overrides && S.overrides[mode]) {
    delete S.overrides[mode][key];
    saveOverrides();
    renderOverrides();
  }
}

function clearAllOverrides() {
  if (!S.overrides || Object.keys(S.overrides).length === 0) return;
  const total = Object.values(S.overrides).reduce((s, m) => s + Object.keys(m).length, 0);
  if (!confirm(`Clear all ${total} personal overrides? This cannot be undone.`)) return;
  S.overrides = {};
  localStorage.removeItem(OVERRIDES_KEY);
  updateOverridesCount();
  renderOverrides();
  toast('🗑️','All overrides cleared.');
}

function exportOverridesJSON() {
  if (!S.overrides || Object.keys(S.overrides).length === 0) { toast('⚠️','No overrides to export.'); return; }
  const payload = {
    generated: new Date().toISOString(),
    app: 'Bijoy-Unicode-Converter',
    version: '1.0',
    overrides: S.overrides,
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  triggerDownload(blob, `bijoy_overrides_${Date.now()}.json`);
  const total = Object.values(S.overrides).reduce((s, m) => s + Object.keys(m).length, 0);
  toast('⬇️',`Exported ${total} overrides as JSON.`);
}

function importOverridesJSON() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.json,application/json';
  input.addEventListener('change', (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const data = JSON.parse(ev.target.result);
        const incoming = data.overrides || data;
        if (!incoming || typeof incoming !== 'object') throw new Error('Invalid format');
        if (!S.overrides) S.overrides = {};
        let added = 0;
        for (const mode of ['b2u', 'u2b']) {
          if (incoming[mode] && typeof incoming[mode] === 'object') {
            if (!S.overrides[mode]) S.overrides[mode] = {};
            for (const [k, v] of Object.entries(incoming[mode])) {
              if (typeof k === 'string' && typeof v === 'string' && k && v) {
                S.overrides[mode][k] = v;
                added++;
              }
            }
          }
        }
        saveOverrides();
        renderOverrides();
        toast('✅',`Imported ${added} overrides.`);
      } catch (err) {
        toast('❌','Failed to import: ' + err.message);
      }
    };
    reader.readAsText(file, 'utf-8');
  });
  input.click();
}

function renderOverrides() {
  const list = $('over-list');
  if (!list) return;
  if (!S.overrides) S.overrides = {};
  updateOverridesCount();

  const b2u = S.overrides.b2u || {};
  const u2b = S.overrides.u2b || {};
  const total = Object.keys(b2u).length + Object.keys(u2b).length;
  if (total === 0) {
    list.innerHTML = '<div class="hist-empty">No personal overrides yet. After reporting a broken word, paste the correct output and click "Save as override".</div>';
    return;
  }

  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  const sections = [];
  if (Object.keys(b2u).length) {
    sections.push(`<div style="margin-bottom:8px;font-size:12px;font-weight:600;color:var(--text-secondary);">Bijoy → Unicode (${Object.keys(b2u).length})</div>`);
    sections.push(Object.entries(b2u).slice(0, 50).map(([k, v]) =>
      `<div class="hist-item" style="font-family:var(--font-ui);">
        <span class="hist-badge badge-b2u">B→U</span>
        <span style="flex:1;font-family:monospace;font-size:11px;">${esc(k)} → ${esc(v)}</span>
        <button class="btn btn-glass btn-sm" data-mode="b2u" data-key="${esc(k)}" aria-label="Delete">✕</button>
      </div>`).join(''));
  }
  if (Object.keys(u2b).length) {
    sections.push(`<div style="margin:12px 0 8px;font-size:12px;font-weight:600;color:var(--text-secondary);">Unicode → Bijoy (${Object.keys(u2b).length})</div>`);
    sections.push(Object.entries(u2b).slice(0, 50).map(([k, v]) =>
      `<div class="hist-item" style="font-family:var(--font-ui);">
        <span class="hist-badge badge-u2b">U→B</span>
        <span style="flex:1;font-family:monospace;font-size:11px;">${esc(k)} → ${esc(v)}</span>
        <button class="btn btn-glass btn-sm" data-mode="u2b" data-key="${esc(k)}" aria-label="Delete">✕</button>
      </div>`).join(''));
  }
  if (total > 100) {
    sections.push(`<div style="font-size:11px;color:var(--text-muted);text-align:center;padding:8px;">... and ${total - 100} more (export to see all)</div>`);
  }

  list.innerHTML = sections.join('');
  list.querySelectorAll('button[data-mode]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      deleteOverride(btn.dataset.mode, btn.dataset.key);
    });
  });
}

/* ════════════════════════════════════════════════════════════════════════════
   WORD-LEVEL DIFF HIGHLIGHTING
   Compares input/output words and highlights changes. Helps users see
   at a glance which words were transformed and might need review.
   ════════════════════════════════════════════════════════════════════════════ */

function renderWordDiff(input, output, mode) {
  const panel = $('diff-panel');
  if (!panel) return;

  // Tokenize into words preserving punctuation/whitespace
  const tokenize = (text) => {
    return text.split(/(\s+|[.,!?;:()\[\]{}"'/।॥\-|])/g).filter(t => t !== '');
  };
  const inTokens = tokenize(input);
  const outTokens = tokenize(output);

  // Map: each output word → best matching input word (greedy, longest match)
  // For simplicity: align by sequence, mark changed words.
  const maxLen = Math.max(inTokens.length, outTokens.length);
  const changes = [];
  let changedCount = 0;
  let sameCount = 0;

  for (let i = 0; i < maxLen; i++) {
    const a = inTokens[i] || '';
    const b = outTokens[i] || '';
    if (!a && !b) continue;
    if (a === b) { sameCount++; continue; }
    if (a && b && a.trim() && b.trim()) {
      changedCount++;
      changes.push({ from: a, to: b });
    } else {
      // Whitespace/punct-only diffs are noise
      sameCount++;
    }
  }

  if (changes.length === 0) {
    panel.classList.add('hidden');
    return;
  }

  // Show only the first ~30 changes to keep panel small
  const shown = changes.slice(0, 30);
  const more = changes.length - shown.length;
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  const dir = mode === 'b2u' ? 'Bijoy → Unicode' : 'Unicode → Bijoy';
  panel.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
      <span class="section-title" style="font-size:13px;">🔍 Word-level diff <span style="color:var(--text-muted);font-weight:400;">(${changedCount} ${changedCount === 1 ? 'word' : 'words'} changed · ${dir})</span></span>
      <button id="diff-toggle" class="btn btn-glass btn-sm" aria-label="Toggle diff">▾</button>
    </div>
    <div id="diff-body" style="display:flex;flex-direction:column;gap:4px;max-height:200px;overflow-y:auto;">
      ${shown.map(c =>
        `<div style="display:grid;grid-template-columns:1fr auto 1fr;gap:8px;font-family:monospace;font-size:11px;align-items:center;padding:4px 8px;background:rgba(247,183,49,0.08);border-left:2px solid #F7B731;border-radius:3px;">
          <span style="opacity:0.7;text-decoration:line-through;">${esc(c.from)}</span>
          <span style="color:#F7B731;">→</span>
          <span>${esc(c.to)}</span>
        </div>`).join('')}
      ${more > 0 ? `<div style="font-size:11px;color:var(--text-muted);text-align:center;padding:6px;">+ ${more} more changes (not shown)</div>` : ''}
    </div>
  `;
  panel.classList.remove('hidden');

  const toggleBtn = $('diff-toggle');
  const body = $('diff-body');
  if (toggleBtn && body) {
    toggleBtn.addEventListener('click', () => {
      const hidden = body.style.display === 'none';
      body.style.display = hidden ? 'flex' : 'none';
      toggleBtn.textContent = hidden ? '▾' : '▸';
    });
  }
}

function exportReportsJSON() {
  if (!S.reports || S.reports.length === 0) { toast('⚠️','No reports to export.'); return; }
  const payload = {
    generated: new Date().toISOString(),
    app: 'Bijoy-Unicode-Converter',
    version: '1.0',
    count: S.reports.length,
    reports: S.reports,
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  triggerDownload(blob, `bijoy_reports_${Date.now()}.json`);
  toast('⬇️',`Exported ${S.reports.length} reports as JSON.`);
}

function exportReportsCSV() {
  if (!S.reports || S.reports.length === 0) { toast('⚠️','No reports to export.'); return; }
  const escape = v => {
    const s = String(v == null ? '' : v);
    return /[",\n\r]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
  };
  const header = 'id,time,direction,input,output';
  const rows = S.reports.map(r => [r.id, r.time, r.direction, r.input, r.output].map(escape).join(','));
  const csv = '\uFEFF' + header + '\n' + rows.join('\n'); // BOM for Excel
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
  triggerDownload(blob, `bijoy_reports_${Date.now()}.csv`);
  toast('⬇️',`Exported ${S.reports.length} reports as CSV.`);
}

function copyReportsAsText() {
  if (!S.reports || S.reports.length === 0) { toast('⚠️','No reports to copy.'); return; }
  const text = S.reports.map((r, i) =>
    `#${i+1} [${r.direction}] ${r.time}\n  IN : ${r.input}\n  OUT: ${r.output}\n`
  ).join('\n');
  copyText(text, `${S.reports.length} reports`);
}

function triggerDownload(blob, filename) {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}

/* ════════════════════════════════════════════════════════════════════════════
   CLIPBOARD & FILES
   ════════════════════════════════════════════════════════════════════════════ */

async function copyText(text, label) {
  if (!text.trim()) { toast('⚠️','Nothing to copy.'); return; }
  try {
    await navigator.clipboard.writeText(text);
    toast('✅',`${label} copied!`);
  } catch {
    const t=document.createElement('textarea');
    t.value=text; t.style.cssText='position:fixed;opacity:0';
    document.body.appendChild(t); t.select(); document.execCommand('copy');
    document.body.removeChild(t); toast('✅',`${label} copied!`);
  }
}

async function pasteClip() {
  try {
    const t = await navigator.clipboard.readText();
    inp().value = t; updateStats();
    doConvert();
    toast('📋','Pasted from clipboard.');
  } catch { toast('❌','Cannot read clipboard. Please paste manually (Ctrl+V).'); }
}

function downloadOutput() {
  const t = outp().value;
  if (!t.trim()) { toast('⚠️','Nothing to download.'); return; }
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([t],{type:'text/plain;charset=utf-8'}));
  a.download = `converted_${Date.now()}.txt`;
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  toast('⬇️','File downloaded.');
}

/* ════════════════════════════════════════════════════════════════════════════
   COLLAPSIBLES
   ════════════════════════════════════════════════════════════════════════════ */

function setupCollapsible(toggleId, bodyId, storageKey, defOpen) {
  const tog = $(toggleId), body = $(bodyId);
  if (!tog || !body) return;
  const open = JSON.parse(localStorage.getItem(storageKey) ?? String(defOpen));
  if (open) { body.classList.add('open'); tog.classList.add('open'); }
  tog.addEventListener('click', () => {
    const o = body.classList.toggle('open');
    tog.classList.toggle('open', o);
    localStorage.setItem(storageKey, JSON.stringify(o));
  });
}

/* ════════════════════════════════════════════════════════════════════════════
   DRAG & DROP
   ════════════════════════════════════════════════════════════════════════════ */

function setupDrop() {
  const zone = $('input-drop-zone');
  if (!zone) return;
  ['dragenter','dragover'].forEach(evt => zone.addEventListener(evt, e => {
    e.preventDefault(); zone.style.outline='2px dashed var(--accent)';
  }));
  ['dragleave','drop'].forEach(evt => zone.addEventListener(evt, () => zone.style.outline=''));
  zone.addEventListener('drop', e => {
    e.preventDefault();
    const f = e.dataTransfer.files[0];
    if (!f) return;
    if (!f.name.match(/\.(txt|md)$/i)) { toast('⚠️','Only .txt files are supported.'); return; }
    const rd = new FileReader();
    rd.onload = ev => {
      inp().value = ev.target.result; updateStats();
      toast('📄',`"${f.name}" loaded.`);
      doConvert();
    };
    rd.readAsText(f, 'utf-8');
  });
}

/* ════════════════════════════════════════════════════════════════════════════
   KEYBOARD SHORTCUTS
   ════════════════════════════════════════════════════════════════════════════ */

function setupKeys() {
  document.addEventListener('keydown', e => {
    const c = e.ctrlKey || e.metaKey;
    if (c && e.key==='Enter') { e.preventDefault(); doConvert(); }
    if (c && e.shiftKey && e.key==='C') { e.preventDefault(); copyText(outp().value,'Output'); }
    if (c && e.shiftKey && e.key==='X') { e.preventDefault(); clearAll(); }
    if (c && e.shiftKey && e.key==='S') { e.preventDefault(); swap(); }
    if (c && e.shiftKey && e.key==='D') { e.preventDefault(); downloadOutput(); }
    if (c && e.shiftKey && e.key==='R') { e.preventDefault(); addReport(); }
  });
}

/* ════════════════════════════════════════════════════════════════════════════
   ACTIONS
   ════════════════════════════════════════════════════════════════════════════ */

function swap() {
  const iv=inp().value, ov=outp().value;
  inp().value=ov; outp().value=iv;
  setMode(S.mode==='b2u'?'u2b':S.mode==='u2b'?'b2u':S.mode);
  updateStats();
}

function clearAll() {
  inp().value=''; outp().value='';
  if ($('enc-banner')) $('enc-banner').classList.add('hidden');
  // Reset output panel to preview mode
  const preview  = $('output-preview');
  const textarea = $('output-text');
  if (preview)  { preview.innerHTML = ''; preview.style.display = ''; }
  if (textarea) { textarea.style.display = 'none'; }
  const editBtn = $('edit-output-btn');
  if (editBtn) editBtn.textContent = '✏️ Edit';
  updateStats();
  renderWordDiff();
  inp().focus();
  toast('🗑️', 'Text cleared.');
}

function setTheme(t) {
  S.theme=t;
  document.documentElement.setAttribute('data-theme',t);
  localStorage.setItem('buc_theme',t);
  $('theme-btn').textContent = t==='dark' ? '☀️' : '🌙';
}

let liveTimer = null;
function handleInput() {
  updateStats();
  if (!S.live) return;
  clearTimeout(liveTimer);
  liveTimer = setTimeout(doConvert, 380);
}

/* ════════════════════════════════════════════════════════════════════════════
   INIT
   ════════════════════════════════════════════════════════════════════════════ */

function getEffectiveMode() {
  const txt = inp().value ? inp().value.trim() : '';
  if (!txt) return S.mode === 'u2b' ? 'u2b' : 'b2u';
  const det = detectEncoding(txt);
  if (S.mode === 'auto') return det === 'unicode' ? 'u2b' : 'b2u';
  if (S.mode === 'b2u' && det === 'unicode') return 'u2b';
  if (S.mode === 'u2b' && det === 'bijoy') return 'b2u';
  return S.mode;
}

/**
 * applyFontMode — New Clean Architecture
 * Controls input textarea font class and output preview rendering mode.
 * No transparent overlays. No dual-box. No webkit hacks.
 */
function applyFontMode() {
  const mode    = S.fontMode ?? 0;
  const btn     = $('font-toggle-btn');
  const effMode = getEffectiveMode();

  // ── Input panel: apply font class directly to textarea ──────────────────
  inp().classList.remove('transparent-mode');
  if (effMode === 'b2u') {
    // Bijoy text is in the input box — display it in SutonnyMJ
    if (mode === 1) {
      inp().classList.add('bijoy-font');
    } else if (mode === 2) {
      inp().classList.remove('bijoy-font');
    } else {
      // Default (mode 0): show SutonnyMJ in input for B2U
      inp().classList.add('bijoy-font');
    }
  } else {
    // Unicode text is in the input box — plain system font
    inp().classList.remove('bijoy-font');
  }

  // ── Button label ─────────────────────────────────────────────────────────
  const modeNames = [
    '🔤 Font: Auto (Dual Bijoy + English)',
    '🔤 Font: SutonnyMJ (Full Bijoy)',
    '🔠 Font: System (English Readable)',
  ];
  if (btn) btn.textContent = modeNames[mode] || modeNames[0];

  // ── Output panel: update preview div ────────────────────────────────────
  updateOutputPreview();
}

document.addEventListener('DOMContentLoaded', () => {
  setTheme(S.theme);
  loadHistory();
  loadReports();
  loadOverrides();
  renderOverrides();

  // Initialize Web Worker for non-blocking conversion
  try {
    if (window.ConverterClient) {
      window.__converter__ = new ConverterClient('./js/converter.worker.js');
      console.info('Converter worker initialized');
    }
  } catch (e) {
    console.warn('Converter worker init failed, using main thread:', e);
  }

  setMode('b2u');

  // Mode tabs
  document.querySelectorAll('.mode-tab').forEach(t =>
    t.addEventListener('click', () => setMode(t.dataset.mode))
  );

  // Convert
  $('convert-btn').addEventListener('click', doConvert);

  // Live toggle
  const ll = $('live-label');
  ll.addEventListener('click', () => {
    S.live = !S.live;
    ll.classList.toggle('active', S.live);
    ll.setAttribute('aria-checked', String(S.live));
    const txt = $('live-mode-text');
    if (txt) txt.textContent = S.live ? 'Live Mode: ON' : 'Live Mode';
    doConvert();
  });
  ll.addEventListener('keydown', e => { if(e.key==='Enter'||e.key===' '){e.preventDefault();ll.click();} });

  // Input & Output listeners
  inp().addEventListener('input', handleInput);

  // Synchronize scrolling between #input-text and #input-dual-box
  inp().addEventListener('scroll', () => {
    const dualBox = $('input-dual-box');
    if (dualBox) {
      dualBox.scrollTop = inp().scrollTop;
      dualBox.scrollLeft = inp().scrollLeft;
    }
  });

  // Output scroll sync not needed — new preview div architecture

  outp().addEventListener('input', updateStats);

  // Buttons
  $('swap-btn').addEventListener('click', swap);
  $('clear-btn').addEventListener('click', clearAll);

  // Edit / Preview toggle for output panel
  if ($('edit-output-btn')) {
    $('edit-output-btn').addEventListener('click', () => {
      const preview  = $('output-preview');
      const textarea = $('output-text');
      if (!preview || !textarea) return;
      const editing = textarea.style.display === 'block';
      if (editing) {
        // Switch back to preview mode
        textarea.style.display = 'none';
        if (preview) preview.style.display = '';
        $('edit-output-btn').textContent = '✏️ Edit';
        updateOutputPreview();
      } else {
        // Switch to edit mode — show raw textarea
        if (preview) preview.style.display = 'none';
        textarea.style.display = 'block';
        $('edit-output-btn').textContent = '👁️ Preview';
        textarea.focus();
      }
    });
  }
  if ($('clear-input-btn')) $('clear-input-btn').addEventListener('click', clearAll);
  if ($('clear-output-btn')) $('clear-output-btn').addEventListener('click', clearAll);
  $('paste-btn').addEventListener('click', pasteClip);
  $('copy-input-btn').addEventListener('click', () => copyText(inp().value,'Input'));
  $('font-toggle-btn').addEventListener('click', () => {
    S.fontMode = ((S.fontMode ?? 0) + 1) % 3;
    applyFontMode();
    const modeNames = ['Intelligent Dual-Font view', 'SutonnyMJ Font view', 'System Readable Font view'];
    toast('🎨', `${modeNames[S.fontMode]} enabled.`);
  });
  $('copy-output-btn').addEventListener('click', () => copyText(outp().value,'Output'));
  $('download-btn').addEventListener('click', downloadOutput);
  $('theme-btn').addEventListener('click', () => setTheme(S.theme==='dark'?'light':'dark'));
  $('clear-hist-btn').addEventListener('click', () => {
    S.history=[]; localStorage.removeItem('buc_h'); renderHistory(); toast('🗑️','History cleared.');
  });

  // Report broken-word button + Reports panel actions
  const reportBtn = $('report-btn');
  if (reportBtn) reportBtn.addEventListener('click', addReport);
  $('export-rep-json').addEventListener('click', exportReportsJSON);
  $('export-rep-csv').addEventListener('click', exportReportsCSV);
  $('copy-rep-text').addEventListener('click', copyReportsAsText);
  $('clear-rep-btn').addEventListener('click', clearReports);

  // Personal override dictionary wiring
  $('save-override-btn').addEventListener('click', () => {
    const inputEl = $('override-input');
    const outputEl = $('override-output');
    if (!inputEl || !outputEl) return;
    const input = inputEl.value;
    const expected = outputEl.value;
    if (!input.trim() || !expected.trim()) {
      toast('⚠️','Both input and expected output are required.');
      return;
    }
    const mode = getEffectiveMode();
    addOverride(input, expected, mode);
    renderOverrides();
    // Clear the override input fields
    inputEl.value = '';
    outputEl.value = '';
    const lbl = $('override-mode-label');
    if (lbl) lbl.textContent = '';
    toast('💾',`Override saved (${mode}). Future conversions will use this fix.`);
  });
  $('export-over-json').addEventListener('click', exportOverridesJSON);
  $('import-over-json').addEventListener('click', importOverridesJSON);
  $('clear-over-btn').addEventListener('click', clearAllOverrides);

  // When user clicks Report, populate the override-input field
  if (reportBtn) {
    reportBtn.addEventListener('click', () => {
      // After addReport runs, populate the override form
      setTimeout(() => {
        const inputEl = $('override-input');
        const outputEl = $('override-output');
        const lbl = $('override-mode-label');
        if (inputEl && inp().value) inputEl.value = inp().value;
        if (outputEl && outp().value) outputEl.value = outp().value;
        if (lbl) lbl.textContent = `Mode: ${getEffectiveMode()}`;
      }, 50);
    });
  }

  // Initial font mode apply
  applyFontMode();

  // Collapsibles
  setupCollapsible('samples-toggle','samples-body','buc_samp',true);
  setupCollapsible('hist-toggle','hist-body','buc_hist',false);
  setupCollapsible('rep-toggle','rep-body','buc_rep_open',false);
  setupCollapsible('over-toggle','over-body','buc_over_open',false);

  // Sample chips
  document.querySelectorAll('.sample-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const s = SAMPLES[+chip.dataset.idx];
      if (!s) return;
      inp().value = s.text; outp().value='';
      setMode(s.mode); updateStats(); doConvert();
    });
  });

  // Drag & drop
  setupDrop();

  // Keyboard shortcuts
  setupKeys();

  updateStats();
  initLetterPhysics();
  setupCustomResizers();

  // Register service worker for offline support (PWA) with automatic deployment update reload
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js').then(reg => {
        reg.onupdatefound = () => {
          const installingWorker = reg.installing;
          if (installingWorker) {
            installingWorker.onstatechange = () => {
              if (installingWorker.state === 'installed' && navigator.serviceWorker.controller) {
                toast('🔄', 'Updated version ready! Reloading...');
                setTimeout(() => window.location.reload(), 1000);
              }
            };
          }
        };
      }).catch(err => {
        console.warn('SW registration failed:', err);
      });
    });
  }
});

/* ════════════════════════════════════════════════════════════════════════════
   2D FOOTBALL COLLISION PHYSICS FOR FLOATING BENGALI LETTERS
   ════════════════════════════════════════════════════════════════════════════ */

function initLetterPhysics() {
  const canvas = document.getElementById('floating-letters-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  // ── Size canvas to window ──────────────────────────────────────────────────
  let width, height;
  function resize() {
    width  = canvas.width  = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  // ── Ball definitions ───────────────────────────────────────────────────────
  const CHARS = ['অ','আ','ক','খ','ই','ঈ','উ','ঋ','এ','ও','শ','হ','ব','ম','র','স'];
  // Colour palettes: [ball fill, stroke, text]
  const LIGHT_PALETTES = [
    ['rgba(199,57,40,0.18)',   'rgba(199,57,40,0.45)',   'rgba(160,30,20,0.82)'],
    ['rgba(120,60,20,0.14)',   'rgba(140,80,30,0.40)',   'rgba(100,45,10,0.80)'],
    ['rgba(20,80,150,0.13)',   'rgba(30,90,180,0.38)',   'rgba(15,60,130,0.78)'],
    ['rgba(30,120,70,0.13)',   'rgba(40,140,80,0.38)',   'rgba(20,100,55,0.78)'],
    ['rgba(100,40,140,0.13)',  'rgba(120,50,160,0.38)',  'rgba(85,30,120,0.78)'],
  ];
  const DARK_PALETTES = [
    ['rgba(240,100,80,0.20)',  'rgba(240,120,90,0.55)',  'rgba(255,180,160,0.90)'],
    ['rgba(255,200,80,0.18)',  'rgba(255,210,100,0.50)', 'rgba(255,230,140,0.90)'],
    ['rgba(80,200,255,0.18)',  'rgba(100,220,255,0.50)', 'rgba(160,240,255,0.90)'],
    ['rgba(100,240,160,0.18)', 'rgba(120,255,180,0.50)', 'rgba(160,255,200,0.90)'],
    ['rgba(200,130,255,0.18)', 'rgba(210,150,255,0.50)', 'rgba(230,190,255,0.90)'],
  ];

  const NUM        = Math.min(12, Math.max(7, Math.floor(window.innerWidth / 130)));
  const MAX_SPD    = 0.90;   // 50% of previous 1.8
  const MIN_SPD    = 0.20;   // 50% of previous 0.4
  const RESTITUTION = 0.78;  // energy retained on collision (< 1 = realistic loss)

  const balls = [];
  for (let i = 0; i < NUM; i++) {
    const fontSize = 108 + Math.random() * 43;    // 108–151 px variety (+20%)
    const r   = fontSize * 0.38;                  // tighter collision radius – letters touch visually
    const ang = Math.random() * Math.PI * 2;
    const spd = MIN_SPD + Math.random() * 0.275;  // 0.20 – 0.475 px/frame
    balls.push({
      char    : CHARS[i % CHARS.length],
      x       : r + Math.random() * (width  - r * 2),
      y       : r + Math.random() * (height - r * 2),
      vx      : Math.cos(ang) * spd,
      vy      : Math.sin(ang) * spd,
      r       : r,
      mass    : r * r,
      spin    : 0,
      dSpin   : (Math.random() - 0.5) * 0.005,
      sx      : 1,
      sy      : 1,
      sAng    : 0,
      squashing: false,  // true while mid-squash to prevent reset-stutter
      fontSize: fontSize
    });
  }

  // ── Mouse repulsion ────────────────────────────────────────────────────────
  let mouseX = -9999, mouseY = -9999;
  window.addEventListener('mousemove', e => { mouseX = e.clientX; mouseY = e.clientY; });
  window.addEventListener('touchmove', e => {
    if (e.touches.length) { mouseX = e.touches[0].clientX; mouseY = e.touches[0].clientY; }
  }, { passive: true });

  // ── Speed clamp ────────────────────────────────────────────────────────
  function clampSpeed(b) {
    const s = Math.hypot(b.vx, b.vy);
    if (s > MAX_SPD) { b.vx = b.vx/s*MAX_SPD; b.vy = b.vy/s*MAX_SPD; }
    if (s < MIN_SPD && s > 0) { b.vx = b.vx/s*MIN_SPD; b.vy = b.vy/s*MIN_SPD; }
  }

  // ── Physics update ─────────────────────────────────────────────────────────
  function step() {
    // Move + wall bounce
    for (const b of balls) {
      b.x += b.vx;
      b.y += b.vy;
      b.spin  += b.dSpin;
      b.dSpin *= 0.97;  // gradual spin decay – realistic damping

      // Smooth squash recovery via lerp – no jitter, no trembling
      b.sx += (1 - b.sx) * 0.22;
      b.sy += (1 - b.sy) * 0.22;
      // Mark as done when close enough
      if (Math.abs(b.sx - 1) < 0.005 && Math.abs(b.sy - 1) < 0.005) {
        b.sx = 1; b.sy = 1; b.squashing = false;
      }

      // Wall bounce – only reverse if moving TOWARD the wall (prevents climbing)
      if (b.x - b.r < 0 && b.vx < 0) {
        b.x = b.r; b.vx = -b.vx * 0.82;
        if (!b.squashing) { b.sx = 0.94; b.sy = 1.06; b.sAng = 0; b.squashing = true; }
      } else if (b.x + b.r > width && b.vx > 0) {
        b.x = width - b.r; b.vx = -b.vx * 0.82;
        if (!b.squashing) { b.sx = 0.94; b.sy = 1.06; b.sAng = 0; b.squashing = true; }
      }
      if (b.y - b.r < 0 && b.vy < 0) {
        b.y = b.r; b.vy = -b.vy * 0.82;
        if (!b.squashing) { b.sx = 1.06; b.sy = 0.94; b.sAng = Math.PI/2; b.squashing = true; }
      } else if (b.y + b.r > height && b.vy > 0) {
        b.y = height - b.r; b.vy = -b.vy * 0.82;
        if (!b.squashing) { b.sx = 1.06; b.sy = 0.94; b.sAng = Math.PI/2; b.squashing = true; }
      }

      // Mouse repulsion (gentle)
      const dxM = b.x - mouseX, dyM = b.y - mouseY;
      const dM = Math.hypot(dxM, dyM);
      const repelZone = b.r + 60;
      if (dM < repelZone && dM > 0) {
        const f = ((repelZone - dM) / repelZone) * 0.06;
        b.vx += (dxM / dM) * f;
        b.vy += (dyM / dM) * f;
      }

      clampSpeed(b);
    }

    // Ball–ball elastic collisions (full momentum conservation)
    for (let i = 0; i < balls.length; i++) {
      for (let j = i + 1; j < balls.length; j++) {
        const a = balls[i], b = balls[j];
        const dx = b.x - a.x, dy = b.y - a.y;
        const dist = Math.hypot(dx, dy);
        const minD = a.r + b.r;
        if (dist >= minD || dist === 0) continue;

        // Separate
        const overlap = (minD - dist) / 2;
        const nx = dx / dist, ny = dy / dist;
        a.x -= nx * overlap; a.y -= ny * overlap;
        b.x += nx * overlap; b.y += ny * overlap;

        // Elastic exchange
        const dvx = a.vx - b.vx, dvy = a.vy - b.vy;
        const dot = dvx * nx + dvy * ny;
        if (dot < 0) continue;   // already separating
        // Realistic inelastic collision: RESTITUTION < 1 loses energy naturally
        const coeff = (1 + RESTITUTION) * dot / (a.mass + b.mass);
        a.vx -= coeff * b.mass * nx;
        a.vy -= coeff * b.mass * ny;
        b.vx += coeff * a.mass * nx;
        b.vy += coeff * a.mass * ny;

        // Very subtle squash – only if not already squashing, to avoid stutter
        const impactAng = Math.atan2(ny, nx);
        if (!a.squashing) { a.sx = 0.94; a.sy = 1.06; a.sAng = impactAng + Math.PI/2; a.squashing = true; }
        if (!b.squashing) { b.sx = 0.94; b.sy = 1.06; b.sAng = impactAng + Math.PI/2; b.squashing = true; }
        a.dSpin = (Math.random() - 0.5) * 0.006;
        b.dSpin = (Math.random() - 0.5) * 0.006;

        clampSpeed(a);
        clampSpeed(b);
      }
    }
  }

  // ── Render – letters only, no bubble/orb ─────────────────────────────
  function draw() {
    ctx.clearRect(0, 0, width, height);

    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    const col = isLight ? 'rgba(120, 30, 15, 0.28)' : 'rgba(255, 238, 210, 0.20)';

    for (const b of balls) {
      ctx.save();
      ctx.translate(b.x, b.y);
      ctx.rotate(b.spin);

      // Squash/stretch – always apply (sx/sy=1 when idle, so ctx.scale(1,1) is a no-op)
      if (b.squashing || Math.abs(b.sx - 1) > 0.002 || Math.abs(b.sy - 1) > 0.002) {
        ctx.rotate(b.sAng);
        ctx.scale(b.sx, b.sy);
        ctx.rotate(-b.sAng);
      }

      // Subtle depth shadow
      ctx.shadowColor   = isLight ? 'rgba(80,15,5,0.10)' : 'rgba(0,0,0,0.15)';
      ctx.shadowBlur    = 6;
      ctx.shadowOffsetX = 2;
      ctx.shadowOffsetY = 2;

      ctx.font         = `800 ${b.fontSize.toFixed(0)}px "Noto Serif Bengali","Tiro Bangla",serif`;
      ctx.fillStyle    = col;
      ctx.textAlign    = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(b.char, 0, 0);

      ctx.restore();
    }

    step();
    requestAnimationFrame(draw);
  }

  draw();
}

/* ════════════════════════════════════════════════════════════════════════════
   RELIABLE CUSTOM DRAG RESIZER CONTROLLER FOR INPUT & OUTPUT BOXES
   ════════════════════════════════════════════════════════════════════════════ */

function setupCustomResizers() {
  function attachResizer(handleId, targetElement) {
    const handle = document.getElementById(handleId);
    if (!handle || !targetElement) return;

    let isDragging = false;
    let startY = 0;
    let startHeight = 0;

    const onStart = (clientY) => {
      isDragging = true;
      startY = clientY;
      startHeight = targetElement.offsetHeight;
      handle.classList.add('active');
      document.body.style.cursor = 'ns-resize';
      document.body.style.userSelect = 'none';
    };

    const onMove = (clientY) => {
      if (!isDragging) return;
      const dy = clientY - startY;
      const newHeight = Math.max(180, Math.min(850, startHeight + dy));
      targetElement.style.height = newHeight + 'px';
    };

    const onEnd = () => {
      if (isDragging) {
        isDragging = false;
        handle.classList.remove('active');
        document.body.style.cursor = '';
        document.body.style.userSelect = '';
      }
    };

    handle.addEventListener('mousedown', e => {
      e.preventDefault();
      onStart(e.clientY);
    });

    document.addEventListener('mousemove', e => {
      onMove(e.clientY);
    });

    document.addEventListener('mouseup', onEnd);

    handle.addEventListener('touchstart', e => {
      if (e.touches.length === 1) {
        onStart(e.touches[0].clientY);
      }
    }, { passive: true });

    document.addEventListener('touchmove', e => {
      if (isDragging && e.touches.length === 1) {
        onMove(e.touches[0].clientY);
      }
    }, { passive: true });

    document.addEventListener('touchend', onEnd);
  }

  // Target input-drop-zone (.input-container-rel) for Bijoy Input box
  const inputContainer = document.getElementById('input-drop-zone');
  attachResizer('input-resize-handle', inputContainer);

  // Target output-drop-zone (.input-container-rel) for Output box
  const outputContainer = document.getElementById('output-drop-zone');
  attachResizer('output-resize-handle', outputContainer);
}



