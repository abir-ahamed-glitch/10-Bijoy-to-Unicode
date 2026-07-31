/**
 * Bijoy & Unicode Converter — Web Worker
 * Receives { id, mode, text } messages and posts back { id, result }.
 * Falls back to nothing — caller must use main thread if worker unsupported.
 */

importScripts('./engine.js');

self.addEventListener('message', (e) => {
  const { id, mode, text } = e.data || {};
  if (typeof id !== 'number') return;
  try {
    let result;
    if (mode === 'b2u') result = bijoyToUnicode(text);
    else if (mode === 'u2b') result = unicodeToBijoy(text);
    else if (mode === 'detect') result = detectEncoding(text);
    else throw new Error('unknown mode: ' + mode);
    self.postMessage({ id, ok: true, result });
  } catch (err) {
    self.postMessage({ id, ok: false, error: err && err.message || String(err) });
  }
});
