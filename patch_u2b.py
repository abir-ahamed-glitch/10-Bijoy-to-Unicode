import sys

sys.stdout.reconfigure(encoding='utf-8')

def patch_file(path):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    marker = "function unicodeToBijoy(text, returnHTML = false) {\n  if (!text) return returnHTML ? { text: '', html: '' } : '';"
    addition = """  // Normalize smart quotes, ellipsis & dashes to safe ASCII punctuation
  // Prevents SutonnyMJ font glyph clashes (\u201C="চ্চ", \u201D="চ্চ", \u2018="স্থ", \u2026="থাক")
  text = text.normalize('NFC')
    .replace(/[\u201C\u201D]/g, '"')
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/\u2026/g, '...')
    .replace(/[\u2013\u2014]/g, '-');"""

    if marker in content and "replace(/[\u201C\u201D]/g" not in content:
        content = content.replace(marker, marker + "\n" + addition)
        with open(path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"✅ Patched {path}")
    else:
        print(f"⚠️ Already patched or marker not found in {path}")

patch_file("js/engine.js")
patch_file("index.html")
