/**
 * Bijoy & Unicode Converter — Conversion Engine
 *
 * Multi-pass algorithm handles:
 *  1. Extended ANSI characters (pasted from Windows-1252 Bijoy docs)
 *  2. Multi-char conjunct/sequence replacement (longest-first)
 *  3. Single-char replacement
 *  4. Reordering of LEFT-SIDE vowel signs (ি ে ৈ) that appear
 *     BEFORE their consonant in Bijoy but AFTER in Unicode
 *  5. NFC normalization
 *  6. Post-processing cleanup (double hoshonto, trailing hoshonto, etc.)
 */

import { BIJOY_MULTI, BIJOY_SINGLE, UNICODE_TO_BIJOY_MULTI, UNICODE_TO_BIJOY_SINGLE } from './mapping.js';

// ─── Bengali Unicode ranges ───────────────────────────────────────────────────

// Consonants: ক (0x0995) – হ (0x09B9) + ড় (0x09DC) + ঢ় (0x09DD) + য় (0x09DF) + ৎ (0x09CE)
const BN_CONSONANT = '[\u0995-\u09B9\u09CE\u09DC\u09DD\u09DF]';
const BN_HASANTA   = '\u09CD'; // ্
const BN_CLUSTER   = `${BN_CONSONANT}(?:${BN_HASANTA}${BN_CONSONANT})*`;

// Left-side vowel signs (need reordering Bijoy→Unicode)
const LEFT_VOWELS_RX = /[\u09BF\u09C7\u09C8\u09CB\u09CC]/g;
const LEFT_VOWEL_CLASS = '[\u09BF\u09C7\u09C8\u09CB\u09CC]';

// ─── Bijoy → Unicode ──────────────────────────────────────────────────────────

/**
 * Convert Bijoy-encoded text to Unicode Bengali.
 * @param {string} text - Input Bijoy text
 * @returns {string} Unicode Bengali output
 */
export function bijoyToUnicode(text) {
  if (!text) return '';

  let result = text;

  // ── Step 1: Normalise line endings ───────────────────────────────────────
  result = result.replace(/\r\n/g, '\n').replace(/\r/g, '\n');

  // ── Step 2: Replace multi-char sequences (longest → shortest) ────────────
  for (const [bijoy, unicode] of BIJOY_MULTI) {
    // Use literal string replacement (not regex) to avoid escape issues
    result = replaceAll(result, bijoy, unicode);
  }

  // ── Step 3: Replace single characters ────────────────────────────────────
  result = result.split('').map(ch => BIJOY_SINGLE[ch] ?? ch).join('');

  // ── Step 4: Reorder LEFT-SIDE vowel signs ─────────────────────────────────
  // In Bijoy: LEFT_VOWEL + CONSONANT_CLUSTER
  // In Unicode: CONSONANT_CLUSTER + LEFT_VOWEL
  // We repeat until stable (handles edge cases with multiple left vowels)
  const reorderRx = new RegExp(`(${LEFT_VOWEL_CLASS})(${BN_CLUSTER})`, 'g');
  let prev;
  do {
    prev = result;
    result = result.replace(reorderRx, (_m, vowel, cluster) => cluster + vowel);
  } while (result !== prev);

  // ── Step 5: NFC normalisation ─────────────────────────────────────────────
  result = result.normalize('NFC');

  // ── Step 6: Post-processing cleanup ──────────────────────────────────────
  result = postprocessUnicode(result);

  return result;
}

/**
 * Post-processing for Bijoy → Unicode output.
 * Removes common artefacts from imperfect source text.
 */
function postprocessUnicode(text) {
  // Remove double hoshonto (্্ → ্)
  text = text.replace(/\u09CD\u09CD/g, '\u09CD');

  // Remove trailing hoshonto at word boundary (before space / end)
  // (a conjunct formed incorrectly at word end)
  text = text.replace(/\u09CD(?=\s|$)/g, '');

  // Fix: chandrabindu or anusvar appearing mid-word before consonant incorrectly
  // (leave as-is; we don't auto-correct these without context)

  return text;
}

// ─── Unicode → Bijoy ──────────────────────────────────────────────────────────

/**
 * Convert Unicode Bengali text to Bijoy-encoded ASCII.
 * @param {string} text - Unicode Bengali input
 * @returns {string} Bijoy-encoded output
 */
export function unicodeToBijoy(text) {
  if (!text) return '';

  let result = text;

  // ── Step 1: NFC normalise ─────────────────────────────────────────────────
  result = result.normalize('NFC');

  // ── Step 2: Reorder LEFT-SIDE vowel signs ─────────────────────────────────
  // In Unicode: CONSONANT_CLUSTER + LEFT_VOWEL
  // In Bijoy:   LEFT_VOWEL + CONSONANT_CLUSTER
  const reorderRx = new RegExp(`(${BN_CLUSTER})(${LEFT_VOWEL_CLASS})`, 'g');
  let prev;
  do {
    prev = result;
    result = result.replace(reorderRx, (_m, cluster, vowel) => vowel + cluster);
  } while (result !== prev);

  // ── Step 3: Handle reph (র্) — move BEFORE the cluster it sits over ───────
  // In Unicode: [optional preceding cons] + র + ্ + CONSONANT
  // We identify র + ্ sequences (reph or ra-phala) and handle accordingly.
  // Ra-phala (্র) is already in the UNICODE_TO_BIJOY_MULTI list as "্র" → "ª".
  // Reph (র্) before next consonant → © before next consonant's Bijoy char.
  result = handleReph(result);

  // ── Step 4: Replace multi-char Unicode → Bijoy sequences ─────────────────
  for (const [unicode, bijoy] of UNICODE_TO_BIJOY_MULTI) {
    result = replaceAll(result, unicode, bijoy);
  }

  // ── Step 5: Replace single characters ────────────────────────────────────
  result = result.split('').map(ch => UNICODE_TO_BIJOY_SINGLE[ch] ?? ch).join('');

  return result;
}

/**
 * Handle reph in Unicode → Bijoy.
 * In Unicode: C + র + ্ + C2  (reph over C2, after C)
 * In Bijoy:   C_bijoy + © + C2_bijoy
 * We insert a placeholder, letting step 5 convert © later.
 */
function handleReph(text) {
  // Match: consonant cluster, then র (0x09B0) + ্ (0x09CD), then another consonant
  // The রেফ (reph) pattern in Unicode is: [preceding chars] র ্ [next cons]
  // Replace র + ্ (when followed by consonant) with © (reph marker for Bijoy)
  // BUT only when র + ্ represents reph, NOT when ্ comes before র (ra-phala = ্র)

  // ra-phala: C + ্ + র  (ra at end, virama BEFORE র)
  // reph:     র + ্ + C  (ra at start, virama AFTER র, before another consonant)

  const rephRx = new RegExp(`\u09B0\u09CD(${BN_CONSONANT})`, 'g');
  // Replace র্C with ©C (© = reph marker)
  return text.replace(rephRx, (_, nextCons) => '©' + nextCons);
}

// ─── Auto-detect ──────────────────────────────────────────────────────────────

/**
 * Detect whether text is likely Bijoy or Unicode Bengali.
 * @param {string} text
 * @returns {'bijoy'|'unicode'|'unknown'}
 */
export function detectEncoding(text) {
  if (!text || !text.trim()) return 'unknown';

  const unicodeCount = (text.match(/[\u0980-\u09FF]/g) || []).length;
  // Extended chars common in Bijoy ANSI text
  const bijoyExtCount = (text.match(/[\u00A9\u00AA\u00AB\u00B0-\u00BF\u00C6\u00D0-\u00FF\u2013-\u2022\u0152\u02C6\u2020\u2021\u2030\u0160]/g) || []).length;
  // ASCII range with Bijoy-specific uppercase patterns (K, L, M... for consonants)
  const bijoyAsciiCount = (text.match(/[K-Z_`a-rvwxy]/g) || []).length;

  const total = text.replace(/\s/g, '').length;
  if (total === 0) return 'unknown';

  const unicodeRatio = unicodeCount / total;
  const bijoyRatio = (bijoyExtCount + bijoyAsciiCount * 0.4) / total;

  if (unicodeRatio > 0.3) return 'unicode';
  if (bijoyRatio > 0.2 || bijoyExtCount > 5) return 'bijoy';
  return 'unknown';
}

// ─── Utilities ────────────────────────────────────────────────────────────────

/**
 * Fast literal string replace-all (no regex).
 */
function replaceAll(str, find, replace) {
  if (!find) return str;
  let result = '';
  let idx = 0;
  while (true) {
    const pos = str.indexOf(find, idx);
    if (pos === -1) {
      result += str.slice(idx);
      break;
    }
    result += str.slice(idx, pos) + replace;
    idx = pos + find.length;
  }
  return result;
}

/**
 * Count words in a string (splits on whitespace, filters empty).
 */
export function wordCount(text) {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

/**
 * Count characters (excluding whitespace).
 */
export function charCount(text) {
  return text.replace(/\s/g, '').length;
}
