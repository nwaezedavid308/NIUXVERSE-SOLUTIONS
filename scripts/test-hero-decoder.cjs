const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const { transformSync } = require('esbuild');

const source = fs.readFileSync(require('node:path').join(__dirname, '../src/hooks/useHeroSequence.ts'), 'utf8');
const code = transformSync(source, { loader: 'ts', format: 'cjs' }).code;

async function check(bitmapDecoder, fails = false) {
  const revoked = [];
  class Image {
    set src(value) { queueMicrotask(() => fails ? this.onerror() : this.onload()); }
  }
  const context = {
    module: { exports: {} }, require, Image, createImageBitmap: bitmapDecoder,
    URL: { createObjectURL: () => 'blob:frame', revokeObjectURL: url => revoked.push(url) },
  };
  vm.runInNewContext(code, context);
  const decode = context.module.exports.decodeHeroFrame;
  if (fails) {
    await assert.rejects(decode(new Blob(), 720), /Frame unavailable/);
  } else {
    const result = await decode(new Blob(), 720);
    assert.ok(bitmapDecoder?.fast ? result.isBitmap : result instanceof Image);
  }
  assert.deepEqual(revoked, bitmapDecoder?.fast ? [] : ['blob:frame']);
}

async function checkMobilePlayback() {
  let cleanup;
  let next = 0;
  let observed;
  let draws = 0;
  const frames = new Map();
  const canvas = { dataset: {}, style: {}, parentElement: { getBoundingClientRect: () => ({ width: 390, height: 844 }) }, getContext: () => ({ clearRect() {}, drawImage() { draws++; } }) };
  const section = { style: { setProperty() {} } };
  const refs = [];
  class Image {
    naturalWidth = 720;
    naturalHeight = 405;
    set src(value) { queueMicrotask(() => this.onload()); }
  }
  const context = {
    module: { exports: {} },
    require: () => ({ useRef: value => { const ref = { current: value }; refs.push(ref); return ref; }, useEffect: effect => { const result = effect(); if (result) cleanup = result; } }),
    Image, URL: { createObjectURL: () => 'blob:frame', revokeObjectURL() {} },
    fetch: async () => ({ ok: true, blob: async () => new Blob() }), AbortController,
    window: { innerWidth: 390, devicePixelRatio: 3 },
    document: { hidden: false, addEventListener() {}, removeEventListener() {} },
    requestAnimationFrame: callback => { frames.set(++next, callback); return next; },
    cancelAnimationFrame: id => frames.delete(id),
    IntersectionObserver: class { observe(target) { observed = target; } disconnect() {} },
    ResizeObserver: class { observe() {} disconnect() {} },
  };
  vm.runInNewContext(code, context);
  context.module.exports.useHeroSequence({ current: section }, { current: canvas }, false, false);
  const advance = async (from, to) => {
    for (let time = from; time < to; time += 16) {
      const callbacks = [...frames.values()]; frames.clear();
      callbacks.forEach(callback => callback(time));
      await new Promise(resolve => setImmediate(resolve));
    }
  };
  await advance(16, 2000);
  assert.ok(draws > 1, 'Phone animation starts without click or scroll');
  assert.equal(observed, section);
  assert.equal(canvas.width, 585);
  assert.equal(canvas.dataset.clip, 'first');
  const before = canvas.dataset.frame;
  refs[0].current = true;
  await advance(2000, 3000);
  assert.equal(canvas.dataset.frame, before, 'Pause keeps the current frame');
  refs[0].current = false;
  await advance(3000, 11000);
  assert.equal(canvas.dataset.clip, 'second', 'Autoplay reaches the looping clip using regular image decoding');
  const loopFrame = canvas.dataset.frame;
  await advance(11000, 11700);
  assert.notEqual(canvas.dataset.frame, loopFrame, 'Second clip keeps moving');
  cleanup();
  assert.equal(frames.size, 0);
}

(async () => {
  const fast = Object.assign(async () => ({ isBitmap: true }), { fast: true });
  await check(fast);
  await check(undefined);
  await check(async () => { throw new Error('Unsupported bitmap options'); });
  await check(undefined, true);
  await checkMobilePlayback();
  console.log('PASS: decoder fallbacks, URL cleanup, phone autoplay without interaction, pause/resume, second-clip loop, and animation cleanup');
})().catch(error => { console.error(error); process.exitCode = 1; });
