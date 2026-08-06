const { protectEnglishTokens, unicodeToBijoy } = require('./js/engine.js');

const sampleLine = '“আজ্ঞে না চাইবে কি? ও বলছে...থাক সে কথা...না, সত্যিই চমৎকার হাত রান্নায...”';

console.log("=== TESTING PROTECT ENGLISH ON BENGALI UNICODE WITH SMART QUOTES ===");
const prot = protectEnglishTokens(sampleLine);
console.log("Protected Text:", JSON.stringify(prot.text));
console.log("Protected Map:", prot.map);

const res = unicodeToBijoy(sampleLine);
console.log("Conversion Result:", JSON.stringify(res));
