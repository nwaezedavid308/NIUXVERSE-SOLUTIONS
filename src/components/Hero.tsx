import React, { useRef, useState, useCallback } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from 'motion/react';

interface HeroProps {
  onExploreShow: () => void;
  onOpenCommunity: () => void;
}

const VIDEO1_FRAMES = 51;
const VIDEO2_FRAMES = 38;

export const Hero: React.FC<HeroProps> = ({ onExploreShow, onOpenCommunity }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [currentFrame, setCurrentFrame] = useState(1);
  const [activePhase, setActivePhase] = useState<1 | 2>(1);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // Smooth the scroll progress for butter-smooth frame playback
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    mass: 0.5,
  });

  // Phase 1: Video 1 plays from scroll 0 to 0.38
  const video1Progress = useTransform(smoothProgress, [0, 0.38], [0, 1]);
  // Phase 2: Video 2 plays from scroll 0.42 to 0.8
  const video2Progress = useTransform(smoothProgress, [0.42, 0.8], [0, 1]);

  // Crossfade between videos
  const video1Opacity = useTransform(smoothProgress, [0.36, 0.42], [1, 0]);
  const video2Opacity = useTransform(smoothProgress, [0.4, 0.46], [0, 1]);

  // Text reveal: scroll 0.82 to 0.95
  const textOpacity = useTransform(smoothProgress, [0.82, 0.95], [0, 1]);
  const textY = useTransform(smoothProgress, [0.82, 0.95], [80, 0]);
  const textLetterSpacing = useTransform(smoothProgress, [0.82, 0.95], ['0.6em', '0.18em']);

  // Glow arc — the signature blue horizon
  const glowOpacity = useTransform(smoothProgress, [0.05, 0.25, 0.5, 0.85], [0, 1, 0.7, 0.2]);
  const glowScale = useTransform(smoothProgress, [0.05, 0.3], [0.8, 1.1]);

  // Scroll indicator
  const scrollIndicatorOpacity = useTransform(smoothProgress, [0, 0.06], [1, 0]);

  // Badge pulse
  const badgeOpacity = useTransform(smoothProgress, [0.8, 0.9], [0, 1]);

  // Replay button visibility
  const replayOpacity = useTransform(smoothProgress, [0.9, 0.98], [0, 1]);

  // Track active phase and frame for replay capability
  useMotionValueEvent(smoothProgress, 'change', (v) => {
    if (v < 0.4) {
      setActivePhase(1);
      const frame = Math.min(Math.max(Math.round(v * VIDEO1_FRAMES / 0.38), 1), VIDEO1_FRAMES);
      setCurrentFrame(frame);
    } else if (v >= 0.4 && v < 0.82) {
      setActivePhase(2);
      const frame = Math.min(Math.max(Math.round((v - 0.42) * VIDEO2_FRAMES / 0.38), 1), VIDEO2_FRAMES);
      setCurrentFrame(frame);
    }
  });

  // Keyboard accessibility: allow replay via button
  const handleReplay = useCallback(() => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return (
    <section ref={sectionRef} className="relative" style={{ height: '600vh' }}>
      <div className="sticky top-0 h-screen overflow-hidden bg-[#020810]">
        {/* ── Video Frame Layer ── */}
        <motion.div className="absolute inset-0" style={{ opacity: video1Opacity }}>
          <img
            src={`/INTRO ANIMATION/FIRST VIDEO/ezgif-frame-${String(
              activePhase === 1 ? currentFrame : VIDEO1_FRAMES
            ).padStart(3, '0')}.jpg`}
            alt=""
            className="w-full h-full object-cover"
            draggable={false}
          />
        </motion.div>

        <motion.div className="absolute inset-0" style={{ opacity: video2Opacity }}>
          <img
            src={`/INTRO ANIMATION/SECOND VIDEO/ezgif-frame-${String(
              activePhase === 2 ? currentFrame : 1
            ).padStart(3, '0')}.jpg`}
            alt=""
            className="w-full h-full object-cover"
            draggable={false}
          />
        </motion.div>

        {/* ── Signature Glowing Blue Arc ── */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ opacity: glowOpacity, scale: glowScale }}
        >
          {/* Primary arc glow */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] h-[80%]"
            style={{
              background:
                'radial-gradient(ellipse 80% 50% at 50% 42%, rgba(78,178,255,0.25) 0%, rgba(78,178,255,0.08) 35%, transparent 65%)',
              filter: 'blur(30px)',
            }}
          />
          {/* Sharp arc line */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[70%]"
            style={{
              background:
                'radial-gradient(ellipse 75% 45% at 50% 40%, transparent 55%, rgba(120,200,255,0.15) 65%, rgba(180,225,255,0.3) 72%, rgba(120,200,255,0.12) 80%, transparent 90%)',
              filter: 'blur(8px)',
            }}
          />
          {/* Core bright line */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[65%]"
            style={{
              background:
                'radial-gradient(ellipse 70% 40% at 50% 38%, transparent 60%, rgba(200,235,255,0.2) 70%, rgba(160,215,255,0.1) 78%, transparent 88%)',
              filter: 'blur(4px)',
            }}
          />
        </motion.div>

        {/* ── Dark vignette for depth ── */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 90% 70% at 50% 45%, transparent 20%, rgba(2,8,16,0.6) 80%, rgba(2,8,16,0.9) 100%)',
          }}
        />

        {/* ── Bottom fade ── */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[35%] pointer-events-none"
          style={{
            background: 'linear-gradient(to top, #020810 0%, transparent 100%)',
          }}
        />

        {/* ── Content Layer ── */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
          style={{ opacity: textOpacity, y: textY }}
        >
          {/* Early Access Badge */}
          <motion.div
            className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#4EB2FF]/20 bg-[#4EB2FF]/5 backdrop-blur-sm"
            style={{ opacity: badgeOpacity }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#4EB2FF] animate-pulse" />
            <span className="text-xs font-medium text-[#4EB2FF] tracking-wide">
              Early Access — Now Live
            </span>
          </motion.div>

          {/* Brand Name */}
          <motion.h1
            className="font-bold text-white leading-none"
            style={{
              fontSize: 'clamp(2.8rem, 11vw, 9rem)',
              fontFamily: '"Space Grotesk", sans-serif',
              letterSpacing: textLetterSpacing,
              textShadow:
                '0 0 100px rgba(78,178,255,0.4), 0 0 50px rgba(78,178,255,0.2), 0 0 20px rgba(78,178,255,0.1)',
            }}
          >
            NIUXVERSE
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-base sm:text-lg text-slate-400 max-w-xl mt-6 leading-relaxed"
            style={{ opacity: textOpacity }}
          >
            A community of changemakers, thinkers, and builders who leverage the
            power of technology to solve problems and impact lives.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center gap-4 mt-10"
            style={{ opacity: textOpacity }}
          >
            <button
              onClick={onExploreShow}
              className="group px-8 py-3.5 rounded-lg bg-[#4EB2FF] text-[#020810] font-semibold text-sm tracking-wide shadow-lg shadow-[#4EB2FF]/25 hover:bg-[#3F7CAE] hover:text-white hover:shadow-[#3F7CAE]/30 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
            >
              Explore the Show
            </button>
            <button
              onClick={onOpenCommunity}
              className="group px-8 py-3.5 rounded-lg bg-[#00D4AA]/10 border border-[#00D4AA]/30 text-[#00D4AA] font-semibold text-sm tracking-wide hover:bg-[#00D4AA]/20 hover:border-[#00D4AA]/50 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
            >
              Join the Community
            </button>
          </motion.div>
        </motion.div>

        {/* ── Scroll Indicator ── */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
          style={{ opacity: scrollIndicatorOpacity }}
        >
          <span className="text-[10px] uppercase tracking-[0.2em] font-medium">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>

        {/* ── Replay Button (appears after scrolling past hero) ── */}
        <motion.button
          onClick={handleReplay}
          className="absolute bottom-8 right-8 p-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-slate-400 hover:text-white hover:border-white/20 hover:bg-white/10 transition-all duration-300"
          style={{ opacity: replayOpacity }}
          aria-label="Replay hero animation"
          title="Replay animation"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
        </motion.button>
      </div>
    </section>
  );
};
