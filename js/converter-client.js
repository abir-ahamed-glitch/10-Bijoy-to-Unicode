/**
 * Bijoy & Unicode Converter — Main-thread client
 *
 * Uses a Web Worker for non-blocking conversion. Falls back to direct calls
 * (the inline engine in index.html) when workers aren't available, e.g. file://.
 *
 * API:
 *   const c = new ConverterClient();
 *   await c.convert('b2u', 'evsjv');   // resolves with converted text
 *   await c.detect('বাংলা');           // resolves with 'unicode' | 'bijoy' | 'unknown'
 *   c.terminate();                     // clean up worker
 */

class ConverterClient {
  constructor(workerUrl = './js/converter.worker.js') {
    this.useWorker = false;
    this.worker = null;
    this.pending = new Map();
    this.nextId = 1;

    // Try to spawn the worker. If anything fails (file://, CSP, etc.),
    // stay in fallback mode using the inline engine.
    try {
      if (typeof Worker !== 'undefined') {
        this.worker = new Worker(workerUrl);
        this.worker.addEventListener('message', (e) => this._onMessage(e));
        this.worker.addEventListener('error', (e) => {
          console.warn('Converter worker error, falling back:', e.message || e);
          this.useWorker = false;
        });
        this.useWorker = true;
      }
    } catch (err) {
      console.warn('Worker init failed, using main-thread engine:', err.message);
      this.useWorker = false;
    }
  }

  _onMessage(e) {
    const { id, ok, result, error } = e.data || {};
    const pending = this.pending.get(id);
    if (!pending) return;
    this.pending.delete(id);
    if (ok) pending.resolve(result);
    else pending.reject(new Error(error || 'unknown worker error'));
  }

  _call(mode, text) {
    return new Promise((resolve, reject) => {
      if (this.useWorker && this.worker) {
        const id = this.nextId++;
        this.pending.set(id, { resolve, reject });
        this.worker.postMessage({ id, mode, text });
        // Safety timeout: if worker is hung, fall back after 5s
        setTimeout(() => {
          if (this.pending.has(id)) {
            this.pending.delete(id);
            this._callSync(mode, text).then(resolve, reject);
          }
        }, 5000);
      } else {
        this._callSync(mode, text).then(resolve, reject);
      }
    });
  }

  _callSync(mode, text) {
    // Main-thread fallback: rely on inline engine from index.html
    return new Promise((resolve, reject) => {
      try {
        if (mode === 'b2u') resolve(bijoyToUnicode(text));
        else if (mode === 'u2b') resolve(unicodeToBijoy(text));
        else if (mode === 'detect') resolve(detectEncoding(text));
        else reject(new Error('unknown mode: ' + mode));
      } catch (e) {
        reject(e);
      }
    });
  }

  convert(mode, text) { return this._call(mode, text); }
  detect(text) { return this._call('detect', text); }

  terminate() {
    if (this.worker) {
      this.worker.terminate();
      this.worker = null;
    }
    this.pending.clear();
  }
}

window.ConverterClient = ConverterClient;
