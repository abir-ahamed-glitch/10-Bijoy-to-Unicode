const { unicodeToBijoy, protectEnglishTokens } = require('./js/engine.js');

function normalizeUnicodePunctuation(text) {
  if (!text) return '';
  return text
    .replace(/[\u201C\u201D]/g, '"')  // Smart double quotes “ ” -> "
    .replace(/[\u2018\u2019]/g, "'")  // Smart single quotes ‘ ’ -> '
    .replace(/\u2026/g, '...')        // Ellipsis … -> ...
    .replace(/[\u2013\u2014]/g, '-'); // En/Em dashes – — -> -
}

const sampleParagraph = `মেয়ের মেজভাই, কাকা দুইজনে তাড়াতাড়ি প্রশ্ন করিল, “কি, কি; কিছু চাই নাকি? বলো, এতে আর লজ্জা কি?

লজ্জায় রাগে আমার কর্ণমূল উত্তপ্ত হইয়া উঠিয়াছিল, কোনো রকমে সামলাইয়া লইয়া হাসিয়া বলিলাম, “আজ্ঞে না চাইবে কি? ও বলছে...থাক সে কথা...না, সত্যিই চমৎকার হাত রান্নায...”

কাকা, মেজভাইয়ের সঙ্গে আরো দুই-একজন উৎসুক হইয়া উঠিল, “কি, কি বলছেন উনি?”

হাসিরা বললাম, ‘দুষ্টুমি আর কি, এখন থেকেই। বলছে মাংসটা আলুনি হয়েছে। শোনেন কেন; সম্পূর্ণ মিছে কথা। এমন চমৎকার রান্না, আর বলে কিনা আলুনি!’ Meat & Seafood

“না, না, শিগগির নুন নিয়ে এসো যাও; হতে পারে আলুনি, ছেলেমানুষ তো...”`;

console.log("=== TESTING PUNCTUATION NORMALIZED U2B CONVERSION ===");
const cleanInput = normalizeUnicodePunctuation(sampleParagraph);
const res = unicodeToBijoy(cleanInput, true);

console.log("TEXT OUTPUT:\n", res.text);
console.log("\nHTML OUTPUT:\n", res.html);
