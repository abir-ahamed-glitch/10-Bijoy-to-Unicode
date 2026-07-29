# Bijoy & Unicode Converter (বিজয় ↔ ইউনিকোড কনভার্টার)

[![Live App](https://img.shields.io/badge/Live%20App-bijoy--to--unicode.pages.dev-brightgreen?style=for-the-badge&logo=cloudflare)](https://bijoy-to-unicode.pages.dev/)
[![Cloudflare Pages](https://img.shields.io/badge/Deployed%20with-Cloudflare%20Pages-F38020?style=for-the-badge&logo=cloudflare)](https://bijoy-to-unicode.pages.dev/)
[![GitHub repo](https://img.shields.io/badge/GitHub-abir--ahamed--glitch%2F10--Bijoy--to--Unicode-blue?style=for-the-badge&logo=github)](https://github.com/abir-ahamed-glitch/10-Bijoy-to-Unicode)

A fast, accurate, and standalone online text converter between **Bijoy 52 / Bijoy Bahadur (ANSI / SutonnyMJ)** and **Bengali Unicode**. Features 100% precision for screenplay formatting, complex conjuncts (*Juktakkhar*), reph positioning, left-vowel (*e-kar*, *i-kar*) reordering, and mixed English/Bengali text preservation.

🌐 **Live Website**: [https://bijoy-to-unicode.pages.dev/](https://bijoy-to-unicode.pages.dev/)

---

## ✨ Features

- **Bi-directional Conversion**: Convert **Bijoy to Unicode** and **Unicode to Bijoy** instantly as you type or paste.
- **Screenplay & Complex Text Precision**: Engineered to preserve line structures, Roman numerals, scene numbers, backtick boundaries, and dialogue punctuation.
- **Complex Conjunct Handling**: Full support for all Bengali conjuncts (*যুক্তাক্ষর*), double conjuncts, and edge-case character pairings.
- **Reph & Vowel Reordering Engine**: Handles pre-base vowels (`ে`, `ৈ`, `ি`) and *Reph* (`র্`) placement without letter garbling.
- **Smart English Preservation**: Prevents accidental conversion of English numbers, scene headers (e.g., `Scene 1 (xxvi)`), and mixed text.
- **Premium Glassmorphism Design**: Sleek dark/light theme toggle, custom typography, smooth copy-to-clipboard, clear buttons, and dynamic line counts.
- **PWA & Offline Capable**: Installable, runs entirely in the browser with a service worker pre-caching the app shell. Zero server-side dependency, 100% privacy, lightning speed.

---

## 🛠️ Supported Fonts & Formats

| Format | Font Examples | Conversion Target |
| :--- | :--- | :--- |
| **Bijoy / ANSI** | SutonnyMJ, SutonnyBanglaOMJ, Bijoy52 | Unicode (SolaimanLipi, Kalpurush, Noto Serif Bengali) |
| **Unicode** | SolaimanLipi, Kalpurush, Vrinda, Siyam Rupali | Bijoy / ANSI (SutonnyMJ) |

---

## 🚀 Quick Start / Local Development

Since this project is built using standard web technologies (HTML5, CSS3, and JavaScript), no complex build step or Node environment is required to view it locally.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/abir-ahamed-glitch/10-Bijoy-to-Unicode.git
   cd 10-Bijoy-to-Unicode
   ```

2. **Open in browser:**
   Open `index.html` directly in your browser, or serve it using any HTTP server:
   ```bash
   npx serve .
   ```

---

## ⚡ Deployment

This project is automatically built and deployed to **Cloudflare Pages** using GitHub Actions on every push to the `master` branch.

- **Production URL**: [https://bijoy-to-unicode.pages.dev/](https://bijoy-to-unicode.pages.dev/)
- **Repository**: `abir-ahamed-glitch/10-Bijoy-to-Unicode`

---

## 🧪 Tests

The conversion engine is validated against **187 known-good Bijoy ↔ Unicode pairs** covering all 11 vowels, 39 consonants, numbers, all common conjuncts (জুক্তাক্ষর), and frequently-misencoded words. Run the suite live at [`/tests.html`](https://bijoy-to-unicode.pages.dev/tests.html).

To extend the test corpus, edit the `TESTS` array in `tests.html`. The engine block is auto-extractable from `index.html` via `extract-engine.cjs` so tests stay in sync with the live converter.

---

## 🏷️ Keywords & SEO Metadata

`bijoy to unicode`, `unicode to bijoy`, `bangla converter`, `বাংলা কনভার্টার`, `SutonnyMJ converter`, `bijoy bahadur`, `bijoy 52 converter`, `10 bijoy to unicode`, `bangla screenplay converter`, `bengali typography converter`

---

## 📄 License

Distributed under the MIT License. Feel free to use, modify, and distribute.
