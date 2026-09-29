import React, { useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Compass, Crown, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

interface FounderSectionProps {
  onOpenRsvp: () => void;
}

export const FounderSection: React.FC<FounderSectionProps> = ({ onOpenRsvp }) => {
  const [showDetailedTreatise, setShowDetailedTreatise] = useState(false);

  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-100px' });

  return (
    <section id="founder" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left: Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="rounded-2xl border border-[#30363d]/40 bg-[#1c2128]/30 p-8">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#a371f7] to-[#58a6ff] flex items-center justify-center mb-6">
                <Crown className="w-7 h-7 text-white" />
              </div>
              <span className="text-xs text-[#8b949e] uppercase tracking-wider block mb-2">Founder & Architect</span>
              <h3 className="font-display font-bold text-2xl text-white tracking-tight">Nwaeze David</h3>
              <p className="text-[#a371f7] font-medium mt-1">"The King of Intelligence"</p>
              <p className="text-sm text-[#8b949e] mt-1">Founder, Niuxverse Academy</p>
              <div className="pt-4 mt-4 border-t border-[#30363d]/30 text-sm text-[#8b949e] italic">
                "Technology gives us scale, but real emotions, empathy, and social connection give us meaning."
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-2 text-xs text-[#8b949e] uppercase tracking-wider mb-4">
              <Compass className="w-3.5 h-3.5 text-[#a371f7]" />
              <span>The Vision</span>
            </div>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-white tracking-tight mb-3">
              Why "The King of Intelligence"?
            </h2>
            <p className="text-[#a371f7] font-medium mb-6">Futuristic Technology & Human Connection</p>

            <div className="space-y-4 text-[#8b949e] mb-8">
              <p>The Niuxverse is a community of changemakers, thinkers, and builders who leverage the power of technology to solve problems and impact lives. It's about understanding how new tools shape our lives, jobs, emotions, friendships and how we can use them to help people.</p>
              <p>For Nwaeze David, being "The King of Intelligence" means having wisdom, empathy, and clarity: staying true to our human values and using future tech to do real good.</p>
            </div>

            <div className="mb-8">
              <button
                onClick={() => setShowDetailedTreatise(!showDetailedTreatise)}
                className="text-sm text-[#a371f7] hover:underline flex items-center gap-1"
              >
                {showDetailedTreatise ? 'Hide Key Ideas' : 'Explore Key Ideas'}
                {showDetailedTreatise ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              {showDetailedTreatise && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <div className="p-4 rounded-xl border border-[#30363d]/30 bg-[#1c2128]/30">
                    <h4 className="text-xs font-bold text-[#a371f7] uppercase tracking-wider mb-2">The "Algo-Rythm"</h4>
                    <p className="text-sm text-[#8b949e]">Technology brings speed and power, but our emotions, empathy, and heart give life purpose.</p>
                  </div>
                  <div className="p-4 rounded-xl border border-[#30363d]/30 bg-[#1c2128]/30">
                    <h4 className="text-xs font-bold text-[#a371f7] uppercase tracking-wider mb-2">Learning from Failure</h4>
                    <p className="text-sm text-[#8b949e]">Machines simply follow code, but humans learn through grit, feelings, and overcoming setbacks.</p>
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/2348110607341"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg bg-white text-[#010409] font-semibold text-sm hover:bg-[#a371f7] hover:text-white transition-all flex items-center justify-center gap-2"
              >
                Message on WhatsApp
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://chat.whatsapp.com/CXzl5uB7Jz23AFsAYkwUFE?s=cl&p=a&mlu=4&ilr=4"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg border border-[#30363d] text-white font-semibold text-sm hover:border-[#a371f7]/50 transition-all flex items-center justify-center gap-2"
              >
                Join Community
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
