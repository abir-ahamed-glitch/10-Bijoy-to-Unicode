/**
 * Bijoy & Unicode Converter — UI Logic
 * Handles: theme, mode tabs, conversion, live mode,
 *          history, copy/paste/download, toast, keyboard shortcuts
 */

import { bijoyToUnicode, unicodeToBijoy, detectEncoding, wordCount, charCount } from './converter.js';

// ─── State ────────────────────────────────────────────────────────────────────
const state = {
  mode: 'b2u',        // 'b2u' | 'u2b' | 'auto'
  liveMode: false,
  theme: 'dark',
  history: [],        // [{ mode, input, output, time }]
  inputStats: { chars: 0, words: 0 },
  outputStats: { chars: 0, words: 0 },
};

// ─── DOM References ───────────────────────────────────────────────────────────
const $ = id => document.getElementById(id);

const inputEl    = $('input-text');
const outputEl   = $('output-text');
const convertBtn = $('convert-btn');
const swapBtn    = $('swap-btn');
const clearBtn   = $('clear-btn');
const copyInputBtn  = $('copy-input-btn');
const copyOutputBtn = $('copy-output-btn');
const pasteBtn   = $('paste-btn');
const downloadBtn = $('download-btn');
const themeBtn   = $('theme-btn');
const liveToggle = $('live-toggle');
const encodingBanner = $('encoding-banner');
const encodingLabel  = $('encoding-label');
const inputChars  = $('input-chars');
const outputChars = $('output-chars');
const historyList = $('history-list');
const historyToggle = $('history-toggle');
const historyBody   = $('history-body');
const samplesToggle = $('samples-toggle');
const samplesBody   = $('samples-body');
const clearHistoryBtn = $('clear-history-btn');

// ─── Init ─────────────────────────────────────────────────────────────────────
function init() {
  loadTheme();
  loadHistory();
  setMode(state.mode);
  bindEvents();
  updateStats();
}

// ─── Theme ────────────────────────────────────────────────────────────────────
function loadTheme() {
  const saved = localStorage.getItem('buc_theme') || 'dark';
  applyTheme(saved);
}

function applyTheme(theme) {
  state.theme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('buc_theme', theme);
  if (themeBtn) {
    themeBtn.textContent = theme === 'dark' ? '☀️' : '🌙';
    themeBtn.title = theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode';
  }
}

function toggleTheme() {
  applyTheme(state.theme === 'dark' ? 'light' : 'dark');
}

// ─── Mode ─────────────────────────────────────────────────────────────────────
function setMode(mode) {
  state.mode = mode;

  // Update tab UI
  document.querySelectorAll('.mode-tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.mode === mode);
  });

  // Update panel labels and placeholders
  if (mode === 'b2u') {
    $('input-label').textContent = 'Bijoy Input';
    $('output-label').textContent = 'Unicode Output';
    inputEl.placeholder = 'Paste Bijoy / SutonnyMJ text here…\n\nExample: evsjv‡`k (বাংলাদেশ)';
    outputEl.placeholder = 'Unicode Bengali text will appear here…';
    inputEl.lang = '';
    outputEl.lang = 'bn';
  } else if (mode === 'u2b') {
    $('input-label').textContent = 'Unicode Input';
    $('output-label').textContent = 'Bijoy Output';
    inputEl.placeholder = 'Paste Unicode Bengali text here…\n\nExample: বাংলাদেশ';
    outputEl.placeholder = 'Bijoy / SutonnyMJ encoded text will appear here…';
    inputEl.lang = 'bn';
    outputEl.lang = '';
  } else {
    $('input-label').textContent = 'Input Text';
    $('output-label').textContent = 'Converted Output';
    inputEl.placeholder = 'Paste any Bengali text (Bijoy or Unicode). Auto-detect will figure it out…';
    outputEl.placeholder = 'Converted text will appear here…';
    inputEl.lang = '';
    outputEl.lang = 'bn';
  }
}

// ─── Conversion ───────────────────────────────────────────────────────────────
function convert() {
  const input = inputEl.value;
  if (!input.trim()) {
    showToast('⚠️', 'Please enter some text first.', 'info');
    return;
  }

  let effectiveMode = state.mode;

  // Auto-detect
  if (state.mode === 'auto') {
    const detected = detectEncoding(input);
    effectiveMode = detected === 'unicode' ? 'u2b' : 'b2u';
    showEncodingBanner(detected, effectiveMode);
  } else {
    hideEncodingBanner();
  }

  let output;
  try {
    if (effectiveMode === 'u2b') {
      output = unicodeToBijoy(input);
    } else {
      output = bijoyToUnicode(input);
    }
  } catch (e) {
    showToast('❌', 'Conversion error. Please check your input.', 'error');
    console.error(e);
    return;
  }

  outputEl.value = output;
  updateStats();

  // Save to history
  addToHistory({
    mode: effectiveMode,
    input: input.slice(0, 200),
    output: output.slice(0, 200),
    time: new Date(),
  });

  // Visual feedback
  outputEl.classList.add('count-updated');
  setTimeout(() => outputEl.classList.remove('count-updated'), 300);
}

// ─── Live Mode ────────────────────────────────────────────────────────────────
let liveDebounce = null;

function handleLiveInput() {
  if (!state.liveMode) return;
  clearTimeout(liveDebounce);
  liveDebounce = setTimeout(convert, 380);
}

// ─── Stats ────────────────────────────────────────────────────────────────────
function updateStats() {
  const inText  = inputEl.value;
  const outText = outputEl.value;

  const inChars  = charCount(inText);
  const inWords  = wordCount(inText);
  const outChars = charCount(outText);
  const outWords = wordCount(outText);

  if (inputChars)  inputChars.textContent  = `${inChars} chars · ${inWords} words`;
  if (outputChars) outputChars.textContent = `${outChars} chars · ${outWords} words`;
}

// ─── Encoding Banner ──────────────────────────────────────────────────────────
function showEncodingBanner(detected, resolvedMode) {
  if (!encodingBanner) return;
  const label = detected === 'unicode'
    ? 'Unicode Detected → Converting to Bijoy'
    : detected === 'bijoy'
    ? 'Bijoy Detected → Converting to Unicode'
    : 'Assuming Bijoy → Converting to Unicode';
  if (encodingLabel) encodingLabel.textContent = label;
  encodingBanner.classList.remove('hidden');
}

function hideEncodingBanner() {
  if (encodingBanner) encodingBanner.classList.add('hidden');
}

// ─── Clipboard ────────────────────────────────────────────────────────────────
async function copyText(text, label) {
  if (!text.trim()) { showToast('⚠️', 'Nothing to copy.', 'info'); return; }
  try {
    await navigator.clipboard.writeText(text);
    showToast('✅', `${label} copied to clipboard!`, 'success');
  } catch {
    // Fallback
    const el = document.createElement('textarea');
    el.value = text;
    el.style.position = 'fixed';
    el.style.opacity = '0';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    showToast('✅', `${label} copied!`, 'success');
  }
}

async function pasteFromClipboard() {
  try {
    const text = await navigator.clipboard.readText();
    inputEl.value = text;
    updateStats();
    if (state.liveMode) convert();
    showToast('📋', 'Pasted from clipboard.', 'info');
  } catch {
    showToast('❌', 'Could not read clipboard. Please paste manually.', 'error');
  }
}

// ─── Download ─────────────────────────────────────────────────────────────────
function downloadOutput() {
  const text = outputEl.value;
  if (!text.trim()) { showToast('⚠️', 'Nothing to download.', 'info'); return; }
  const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href = url;
  a.download = `bijoy_unicode_${Date.now()}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast('⬇️', 'File downloaded.', 'success');
}

// ─── Swap ─────────────────────────────────────────────────────────────────────
function swapPanels() {
  const inputVal  = inputEl.value;
  const outputVal = outputEl.value;
  inputEl.value  = outputVal;
  outputEl.value = inputVal;

  // Toggle mode
  if (state.mode === 'b2u') {
    setMode('u2b');
  } else if (state.mode === 'u2b') {
    setMode('b2u');
  }

  updateStats();
}

// ─── Clear ────────────────────────────────────────────────────────────────────
function clearAll() {
  inputEl.value  = '';
  outputEl.value = '';
  hideEncodingBanner();
  updateStats();
  inputEl.focus();
}

// ─── History ─────────────────────────────────────────────────────────────────
function loadHistory() {
  try {
    state.history = JSON.parse(localStorage.getItem('buc_history') || '[]');
    renderHistory();
  } catch {
    state.history = [];
  }
}

function saveHistory() {
  localStorage.setItem('buc_history', JSON.stringify(state.history.slice(0, 20)));
}

function addToHistory(entry) {
  // Avoid duplicate of last entry
  if (state.history[0] &&
      state.history[0].input === entry.input &&
      state.history[0].mode  === entry.mode) return;

  state.history.unshift(entry);
  if (state.history.length > 20) state.history.pop();
  saveHistory();
  renderHistory();
}

function renderHistory() {
  if (!historyList) return;

  if (state.history.length === 0) {
    historyList.innerHTML = '<div class="history-empty">No conversions yet. Convert something to see history!</div>';
    return;
  }

  historyList.innerHTML = state.history.map((item, i) => {
    const badge = item.mode === 'b2u'
      ? '<span class="history-type-badge badge-b2u">B→U</span>'
      : '<span class="history-type-badge badge-u2b">U→B</span>';
    const preview = item.output;
    const time = formatTime(new Date(item.time));
    return `
      <div class="history-item" data-index="${i}" role="button" tabindex="0"
           aria-label="Restore history item: ${preview.slice(0, 30)}">
        ${badge}
        <span class="history-preview">${escapeHtml(preview)}</span>
        <span class="history-time">${time}</span>
      </div>`;
  }).join('');

  // Bind click on items
  historyList.querySelectorAll('.history-item').forEach(el => {
    el.addEventListener('click', () => restoreHistory(+el.dataset.index));
    el.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') restoreHistory(+el.dataset.index);
    });
  });
}

function restoreHistory(index) {
  const item = state.history[index];
  if (!item) return;
  inputEl.value  = item.input;
  outputEl.value = item.output;
  setMode(item.mode);
  updateStats();
  showToast('🕑', 'Restored from history.', 'info');
}

function clearHistory() {
  state.history = [];
  saveHistory();
  renderHistory();
  showToast('🗑️', 'History cleared.', 'info');
}

// ─── Samples ─────────────────────────────────────────────────────────────────
const SAMPLES = [
  {
    label: 'বাংলাদেশ',
    text: 'evsjv‡`k',
    mode: 'b2u',
  },
  {
    label: 'আমার সোনার বাংলা',
    text: 'Avgvi †mvbvi evsjv, Avwg †Zvgvq fvjevwm',
    mode: 'b2u',
  },
  {
    label: 'এক দেশ এক জাতি',
    text: 'GK †`k GK RvwZ, GKB cÖvY evOvwj',
    mode: 'b2u',
  },
  {
    label: 'ভালোবাসা (Unicode)',
    text: 'ভালোবাসা মানে আমি তোমাকে ভালোবাসি।',
    mode: 'u2b',
  },
  {
    label: 'জাতীয় সংগীত',
    text: 'Avgvi †mvbvi evsjv, Avgv‡`i G evsjv',
    mode: 'b2u',
  },
];

function loadSampleText(sample) {
  inputEl.value  = sample.text;
  outputEl.value = '';
  setMode(sample.mode);
  updateStats();
  convert();
  inputEl.focus();
}

// ─── Collapsibles ─────────────────────────────────────────────────────────────
function setupCollapsible(toggleEl, bodyEl, storageKey, defaultOpen = false) {
  if (!toggleEl || !bodyEl) return;

  const isOpen = JSON.parse(localStorage.getItem(storageKey) ?? String(defaultOpen));
  if (isOpen) {
    bodyEl.classList.add('open');
    toggleEl.classList.add('open');
  }

  toggleEl.addEventListener('click', () => {
    const open = bodyEl.classList.toggle('open');
    toggleEl.classList.toggle('open', open);
    localStorage.setItem(storageKey, JSON.stringify(open));
  });
}

// ─── Drag & Drop ─────────────────────────────────────────────────────────────
function setupDragDrop() {
  const panel = $('input-panel');
  if (!panel) return;

  ['dragenter', 'dragover'].forEach(evt => {
    panel.addEventListener(evt, e => {
      e.preventDefault();
      panel.style.borderColor = 'rgba(124,95,252,0.6)';
    });
  });

  ['dragleave', 'drop'].forEach(evt => {
    panel.addEventListener(evt, () => {
      panel.style.borderColor = '';
    });
  });

  panel.addEventListener('drop', e => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (!file) return;
    if (!file.name.match(/\.(txt|md|html?)$/i)) {
      showToast('⚠️', 'Only .txt files are supported.', 'error');
      return;
    }
    const reader = new FileReader();
    reader.onload = ev => {
      inputEl.value = ev.target.result;
      updateStats();
      showToast('📄', `"${file.name}" loaded.`, 'success');
      if (state.liveMode) convert();
    };
    reader.readAsText(file, 'utf-8');
  });
}

// ─── Keyboard Shortcuts ───────────────────────────────────────────────────────
function setupKeyboardShortcuts() {
  document.addEventListener('keydown', e => {
    const ctrl = e.ctrlKey || e.metaKey;

    // Ctrl+Enter = convert
    if (ctrl && e.key === 'Enter') {
      e.preventDefault();
      convert();
    }

    // Ctrl+Shift+C = copy output
    if (ctrl && e.shiftKey && e.key === 'C') {
      e.preventDefault();
      copyText(outputEl.value, 'Output');
    }

    // Ctrl+Shift+X = clear
    if (ctrl && e.shiftKey && e.key === 'X') {
      e.preventDefault();
      clearAll();
    }

    // Ctrl+Shift+S = swap
    if (ctrl && e.shiftKey && e.key === 'S') {
      e.preventDefault();
      swapPanels();
    }

    // Ctrl+Shift+D = download
    if (ctrl && e.shiftKey && e.key === 'D') {
      e.preventDefault();
      downloadOutput();
    }
  });
}

// ─── Toast ────────────────────────────────────────────────────────────────────
let toastContainer = null;

function getToastContainer() {
  if (!toastContainer) {
    toastContainer = document.querySelector('.toast-container');
    if (!toastContainer) {
      toastContainer = document.createElement('div');
      toastContainer.className = 'toast-container';
      document.body.appendChild(toastContainer);
    }
  }
  return toastContainer;
}

function showToast(icon, message, type = 'info', duration = 3000) {
  const container = getToastContainer();
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `<span class="toast-icon">${icon}</span><span>${escapeHtml(message)}</span>`;
  container.appendChild(toast);

  const remove = () => {
    toast.classList.add('toast-exit');
    toast.addEventListener('animationend', () => toast.remove(), { once: true });
  };

  setTimeout(remove, duration);
  toast.addEventListener('click', remove);
}

// ─── Bind Events ─────────────────────────────────────────────────────────────
function bindEvents() {
  // Mode tabs
  document.querySelectorAll('.mode-tab').forEach(tab => {
    tab.addEventListener('click', () => setMode(tab.dataset.mode));
  });

  // Convert
  if (convertBtn) convertBtn.addEventListener('click', convert);

  // Live toggle
  if (liveToggle) {
    liveToggle.addEventListener('click', () => {
      state.liveMode = !state.liveMode;
      liveToggle.classList.toggle('active', state.liveMode);
      if (state.liveMode) convert();
    });
  }

  // Input events
  if (inputEl) {
    inputEl.addEventListener('input', () => {
      updateStats();
      handleLiveInput();
    });
  }

  // Swap
  if (swapBtn) swapBtn.addEventListener('click', swapPanels);

  // Clear
  if (clearBtn) clearBtn.addEventListener('click', clearAll);

  // Copy buttons
  if (copyInputBtn)  copyInputBtn.addEventListener('click',  () => copyText(inputEl.value,  'Input'));
  if (copyOutputBtn) copyOutputBtn.addEventListener('click', () => copyText(outputEl.value, 'Output'));

  // Paste
  if (pasteBtn) pasteBtn.addEventListener('click', pasteFromClipboard);

  // Download
  if (downloadBtn) downloadBtn.addEventListener('click', downloadOutput);

  // Theme
  if (themeBtn) themeBtn.addEventListener('click', toggleTheme);

  // Clear history
  if (clearHistoryBtn) clearHistoryBtn.addEventListener('click', clearHistory);

  // Collapsibles
  setupCollapsible(historyToggle, historyBody, 'buc_history_open', false);
  setupCollapsible(samplesToggle, samplesBody, 'buc_samples_open', true);

  // Sample chips
  document.querySelectorAll('.sample-chip').forEach(chip => {
    const idx = +chip.dataset.sampleIndex;
    chip.addEventListener('click', () => loadSampleText(SAMPLES[idx]));
  });

  // Drag & drop
  setupDragDrop();

  // Keyboard shortcuts
  setupKeyboardShortcuts();
}

// ─── Helpers ─────────────────────────────────────────────────────────────────
function formatTime(date) {
  const now = new Date();
  const diff = (now - date) / 1000;
  if (diff < 60)    return 'just now';
  if (diff < 3600)  return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  return date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short' });
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// ─── Expose samples for HTML data attributes ───────────────────────────────────
window.__SAMPLES__ = SAMPLES;

// ─── Boot ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', init);
