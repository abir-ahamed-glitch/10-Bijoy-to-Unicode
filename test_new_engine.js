const { parseBijoySyllables } = require('./js/parser.js');
const { lookupB2U } = require('./js/dictionary.js');
const { protectEnglishTokens, restoreEnglish } = require('./js/engine.js');

function convertBijoyText(text) {
  if (!text) return '';

  // Step 1: Protect English tokens & numbers
  const { text: protectedText, map: engMap } = protectEnglishTokens(text);

  // Step 2: Split by spaces and linebreaks to convert word-by-word
  const lines = protectedText.split('\n');
  const convertedLines = lines.map(line => {
    // Retain English placeholders \uE001...\uE001
    const tokens = line.split(/(\uE001[\uE100-\uE2FF]\uE001|\s+|[.,!?;:()\[\]])/);
    return tokens.map(token => {
      if (!token) return '';
      // If token is protected English or formatting/spaces, leave as is
      if (token.startsWith('\uE001') && token.endsWith('\uE001')) return token;
      if (/^\s+$/.test(token) || /^[.,!?;:()\[\]]$/.test(token)) return token;

      // 1. Try Dictionary Lookup first (Instant O(1) 100% exact match)
      const dictMatch = lookupB2U(token);
      if (dictMatch) return dictMatch;

      // 2. Fall back to Syllable State Machine Parser
      return parseBijoySyllables(token);
    }).join('');
  });

  const convertedText = convertedLines.join('\n');

  // Step 3: Restore protected English tokens
  return restoreEnglish(convertedText, engMap);
}

const testWords = [
  { bijoy: "evsjv‡`k", expected: "বাংলাদেশ" },
  { bijoy: "‡R¨ô", expected: "জ্যেষ্ঠ" },
  { bijoy: "g„Zz¨", expected: "মৃত্যু" },
  { bijoy: "we‡`ªvn", expected: "বিদ্রোহ" },
  { bijoy: "‰`N¨©", expected: "দৈর্ঘ্য" },
  { bijoy: "cvÛzwjwc", expected: "পাণ্ডুলিপি" },
  { bijoy: "msL¨vjNyiv", expected: "সংখ্যালঘুরা" },
  { bijoy: "gKeੁj", expected: "মকবুল" },
  { bijoy: "cu¨v‡P", expected: "প্যাঁচে" },
  { bijoy: "Pregnancy & Maternity", expected: "Pregnancy & Maternity" },
  { bijoy: "evsjv‡`k Pregnancy & Maternity †`‡ki gvbyl", expected: "বাংলাদেশ Pregnancy & Maternity দেশের মানুষ" }
];

console.log("=== RUNNING FULL CONVERSION PIPELINE TESTS ===");
let passed = 0;

for (const t of testWords) {
  const result = convertBijoyText(t.bijoy);
  const ok = result === t.expected;
  if (ok) passed++;
  console.log(`${ok ? '✅' : '❌'} Input: "${t.bijoy}" -> Got: "${result}" | Expected: "${t.expected}"`);
}

console.log(`\nResult: ${passed}/${testWords.length} Passed`);
