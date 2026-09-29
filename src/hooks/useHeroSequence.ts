import { useEffect, useRef, type RefObject } from 'react';

const clamp = (value: number) => Math.max(0, Math.min(1, value));
const smooth = (value: number) => { const t = clamp(value); return t * t * (3 - 2 * t); };

/** Autoplay clip one, then loop clip two while visible. Retain at most 18 decoded frames. */
export function useHeroSequence(sectionRef: RefObject<HTMLElement | null>, canvasRef: RefObject<HTMLCanvasElement | null>, paused: boolean, reducedMotion: boolean) {
  const pausedRef = useRef(paused);
  useEffect(() => { pausedRef.current = paused; }, [paused]);
  useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d', { alpha: true });
    if (!section || !canvas || !context) return;
    if (reducedMotion) {
      canvas.style.opacity = '0';
      section.style.setProperty('--journey', '0');
      return;
    }
    const cache = new Map<string, ImageBitmap>();
    const pending = new Set<string>();
    const failed = new Set<string>();
    const abort = new AbortController();
    let disposed = false;
    let visible = true;
    let request = 0;
    let elapsed = 0;
    let paintedProgress = 0;
    let lastStyleProgress = -1;
    let loopTime = 0;
    let previousTime = 0;
    let lastPaint = '';
    let width = 0;
    let height = 0;
    let decodeWidth = window.innerWidth < 700 ? 720 : 1280;
    const keyFor = (clip: string, frame: number) => `/animation/${clip}/${String(frame).padStart(3, '0')}.webp`;
    const get = (key: string) => {
      const bitmap = cache.get(key);
      if (bitmap) { cache.delete(key); cache.set(key, bitmap); }
      return bitmap;
    };
    const load = (key: string) => {
      if (cache.has(key) || pending.has(key) || failed.has(key) || pending.size >= 4 || disposed) return;
      pending.add(key);
      fetch(key, { signal: abort.signal })
        .then(response => { if (!response.ok) throw new Error('Frame unavailable'); return response.blob(); })
        .then(blob => createImageBitmap(blob, { resizeWidth: decodeWidth, resizeQuality: 'medium' }))
        .then(bitmap => {
          if (disposed) { bitmap.close(); return; }
          cache.set(key, bitmap);
          while (cache.size > 18) {
            const oldest = cache.keys().next().value!;
            cache.get(oldest)?.close(); cache.delete(oldest);
          }
          lastPaint = '';
        })
        .catch(() => { if (!disposed) failed.add(key); })
        .finally(() => pending.delete(key));
    };
    const draw = (bitmap: ImageBitmap, opacity: number) => {
      const ratio = Math.max(width / bitmap.width, height / bitmap.height);
      const w = bitmap.width * ratio;
      const h = bitmap.height * ratio;
      context.globalAlpha = opacity;
      context.drawImage(bitmap, (width - w) / 2, (height - h) / 2, w, h);
    };
    const measure = () => {
      const bounds = canvas.parentElement!.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = Math.round(bounds.width * dpr); height = Math.round(bounds.height * dpr);
      canvas.width = width; canvas.height = height;
      decodeWidth = window.innerWidth < 700 ? 720 : 1280;
      lastPaint = '';
    };
    const tick = (now: number) => {
      request = 0;
      if (disposed || !visible || document.hidden) return;
      const delta = Math.min(now - (previousTime || now), 80);
      previousTime = now;
      {
        if (!pausedRef.current) {
          if (lastPaint) elapsed += delta;
          paintedProgress = clamp(elapsed / 6000);
          if (paintedProgress >= 0.82) loopTime += delta;
          else loopTime = 0;
        }
        const firstFrame = Math.round(clamp(paintedProgress / 0.7) * 50) + 1;
        // Ping-pong playback avoids a hard end-to-start cut in the supplied footage.
        const phase = (loopTime / 90) % 74;
        const secondFrame = Math.floor(phase <= 37 ? phase : 74 - phase) + 1;
        const blend = smooth((paintedProgress - 0.7) / 0.12);
        const firstKey = keyFor('first', firstFrame);
        const secondKey = keyFor('second', secondFrame);
        if (blend < 1) load(firstKey);
        if (paintedProgress > 0.62) load(secondKey);
        const first = get(firstKey);
        const second = get(secondKey);
        const paintKey = `${firstFrame}:${secondFrame}:${blend.toFixed(3)}:${!!first}:${!!second}`;
        // Keep the last good frame on slow connections instead of flashing clip one
        // whenever a frame of the second clip has not decoded yet.
        const ready = blend === 1 ? !!second : !!first;
        if (paintKey !== lastPaint && ready) {
          context.clearRect(0, 0, width, height);
          if (first) draw(first, 1);
          if (second) draw(second, first ? blend : 1);
          context.globalAlpha = 1;
          canvas.style.opacity = String(smooth((elapsed + 90) / 450));
          canvas.dataset.clip = blend === 1 && second ? 'second' : 'first';
          canvas.dataset.frame = String(blend === 1 ? secondFrame : firstFrame);
          lastPaint = paintKey;
        }
        if (lastStyleProgress !== paintedProgress) {
          section.style.setProperty('--journey', String(paintedProgress));
          lastStyleProgress = paintedProgress;
        }
        if (blend < 1) {
          load(keyFor('first', Math.min(51, firstFrame + 1)));
          load(keyFor('first', Math.max(1, firstFrame - 1)));
        } else {
          load(keyFor('second', Math.min(38, secondFrame + 1)));
          load(keyFor('second', Math.max(1, secondFrame - 1)));
        }
      }
      request = requestAnimationFrame(tick);
    };
    const resume = () => { previousTime = 0; if (!request && visible && !document.hidden) request = requestAnimationFrame(tick); };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) resume();
      else { cancelAnimationFrame(request); request = 0; elapsed = 0; loopTime = 0; lastPaint = ''; }
    });
    const visibility = () => {
      if (document.hidden) { cancelAnimationFrame(request); request = 0; }
      else resume();
    };
    const resize = new ResizeObserver(measure);
    resize.observe(canvas.parentElement!); observer.observe(canvas);
    document.addEventListener('visibilitychange', visibility);
    measure(); resume();
    return () => {
      disposed = true;
      abort.abort(); cancelAnimationFrame(request);
      observer.disconnect(); resize.disconnect();
      document.removeEventListener('visibilitychange', visibility);
      cache.forEach(bitmap => bitmap.close()); cache.clear();
    };
  }, [sectionRef, canvasRef, reducedMotion]);
}
