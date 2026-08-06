const { unicodeToBijoy } = require('./js/engine.js');

const sampleLine = '“আজ্ঞে না চাইবে কি? ও বলছে...থাক সে কথা...না, সত্যিই চমৎকার হাত রান্নায...”';

const res = unicodeToBijoy(sampleLine, true);
console.log("=== UNICODE TO BIJOY DUAL FONT HTML RESULT ===");
console.log("TEXT:", res.text);
console.log("HTML:", res.html);
