import { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowUpRight, Pause, Play } from 'lucide-react';
import { COMMUNITY_URL } from '../data/links';
import { useHeroSequence } from '../hooks/useHeroSequence';

export function Hero() {
  const section = useRef<HTMLElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(query.matches);
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);
  useHeroSequence(section, canvas, paused, reducedMotion);
  return (
    <section id="home" ref={section} className={`hero-sequence${reducedMotion ? ' reduced-motion' : ''}`} aria-label="Welcome to Niuxverse">
      <div className="hero-stage">
        <div className="hero-art" aria-hidden="true">
          <img className="hero-horizon" src="/NEW%20WEBSITE/LANDING%20PAGE%20GUID%20(2).png" alt="" fetchPriority="high" />
          <canvas ref={canvas} className="hero-canvas" />
          <div className="hero-edge" />
        </div>
        <div className="hero-copy">
          <h1>NIUXVERSE</h1>
          <p>A community of changemakers, thinkers, and builders who leverage the power of technology to solve problems and impact lives.</p>
          <div className="hero-actions">
            <a className="button button-primary" href={COMMUNITY_URL} target="_blank" rel="noreferrer">Join the Community <ArrowUpRight size={16} /></a>
            <a className="button button-secondary" href="#the-show">Explore the Show <Play size={14} /></a>
          </div>
        </div>
        <div className="hero-bottom">
          <span className="hero-note">Human connection. Infinite possibility.</span>
          <a href="#the-show" className="scroll-cue"><span>Scroll to explore</span><ArrowDown size={17} /></a>
          {!reducedMotion && <button className="motion-toggle" onClick={() => setPaused(p => !p)} aria-label={paused ? 'Resume animation' : 'Pause animation'} aria-pressed={paused}>{paused ? <Play size={14} /> : <Pause size={14} />}<span>{paused ? 'Resume' : 'Pause'} motion</span></button>}
        </div>
        <div className="hero-progress" aria-hidden="true"><span /></div>
      </div>
    </section>
  );
}
