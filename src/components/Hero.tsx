import { useState } from 'react';
import { ArrowDown, ArrowUpRight, Play, Sparkles } from 'lucide-react';
import { COMMUNITY_URL } from '../data/links';

export function Hero() {
  const [activePhoto, setActivePhoto] = useState(1);

  return (
    <section id="home" className="hero-static" aria-label="Welcome to Niuxverse">
      <div className="hero-horizon-backdrop" aria-hidden="true">
        <img
          className="hero-horizon-img"
          src="/NEW%20WEBSITE/LANDING%20PAGE%20GUID%20(2).png"
          alt=""
          fetchPriority="high"
        />
        <div className="hero-horizon-fade" />
      </div>

      <div className="hero-inner">
        {/* Top Tagline */}
        <div className="hero-pill">
          <Sparkles size={13} className="text-accent" />
          <span>Building the Niuxverse · Changemakers · Thinkers · Builders</span>
        </div>

        {/* Main Bold Headline */}
        <h1 className="hero-title">
          NIUXVERSE
        </h1>

        <p className="hero-subtitle">
          A community of changemakers, thinkers, and builders who leverage the power of technology to solve problems and impact lives.
        </p>

        {/* CTA Buttons */}
        <div className="hero-actions">
          <a
            className="button button-primary"
            href={COMMUNITY_URL}
            target="_blank"
            rel="noreferrer"
          >
            Join the Community <ArrowUpRight size={15} />
          </a>
          <a className="button button-secondary" href="#the-show">
            Explore the Show <Play size={13} />
          </a>
        </div>

        {/* Portrait Feature Showcase */}
        <div className="hero-portrait-showcase">
          <div className="hero-portrait-frame">
            <img
              src={`/profile/david-${activePhoto}.jpg`}
              alt="Nwaeze David - Building the Niuxverse"
              className="hero-portrait-img"
              loading="eager"
            />
            <div className="hero-portrait-gradient" />
            <div className="hero-portrait-caption">
              <span className="founder-badge">Founder & Builder</span>
              <p className="founder-name-tag">Nwaeze David</p>
              <div className="photo-switches">
                {[1, 2, 3].map((num) => (
                  <button
                    key={num}
                    onClick={() => setActivePhoto(num)}
                    className={`photo-dot ${activePhoto === num ? 'active' : ''}`}
                    aria-label={`View portrait ${num}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Cue */}
        <div className="hero-footer-bar">
          <span className="hero-subnote">Human connection. Infinite possibility.</span>
          <a href="#the-show" className="scroll-cue" aria-label="Scroll to explore">
            <span>Scroll to explore</span>
            <ArrowDown size={15} />
          </a>
          <span className="hero-builder-note">Building with Purpose</span>
        </div>
      </div>
    </section>
  );
}
