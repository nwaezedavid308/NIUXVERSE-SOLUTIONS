import React, { useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Compass, Crown, ArrowRight, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

interface FounderSectionProps {
  onOpenRsvp: () => void;
}

export const FounderSection: React.FC<FounderSectionProps> = ({ onOpenRsvp }) => {
  const [showDetailedTreatise, setShowDetailedTreatise] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-100px' });

  const davidImages = [
    '/DAVID PICTURE (1).jpeg',
    '/DAVID PICTURE (2).jpeg',
  ];

  return (
    <section id="founder" className="py-24 sm:py-32 relative border-t border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left: Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="relative">
              <div className="rounded-3xl glass-card overflow-hidden p-2">
                <img
                  src={davidImages[activeImage]}
                  alt="Nwaeze David - The King of Intelligence"
                  className="w-full h-[400px] sm:h-[480px] object-cover object-top rounded-2xl"
                />
              </div>
              <div className="flex gap-3 mt-4">
                {davidImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition-all ${
                      activeImage === idx ? 'border-[#00FFAB] shadow-md shadow-[#00FFAB]/30' : 'border-cyan-500/20 hover:border-[#00F0FF]'
                    }`}
                  >
                    <img src={img} alt={`David ${idx + 1}`} className="w-full h-full object-cover object-top" />
                  </button>
                ))}
              </div>
              <div className="absolute -top-4 -right-4 w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#00F0FF] via-[#00FFAB] to-[#7C3AED] flex items-center justify-center shadow-lg shadow-[#00F0FF]/30">
                <Crown className="w-6 h-6 text-slate-950" />
              </div>
            </div>
            <div className="mt-6 rounded-2xl glass-card p-5">
              <span className="text-xs text-[#00FFAB] uppercase tracking-wider font-bold block mb-1">Founder & Architect</span>
              <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white tracking-tight">Nwaeze David</h3>
              <p className="text-[#00F0FF] font-semibold text-sm mt-1">"The King of Intelligence"</p>
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-bold text-[#00F0FF] uppercase tracking-wider mb-4">
              <Compass className="w-3.5 h-3.5 text-[#00FFAB]" />
              <span>The Vision</span>
            </div>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-slate-900 dark:text-white tracking-tight mb-3">
              Why "The King of Intelligence"?
            </h2>
            <p className="text-[#00FFAB] font-bold text-base mb-6">Futuristic Technology & Human Connection</p>

            <div className="space-y-4 text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              <p>The Niuxverse is a community of changemakers, thinkers, and builders who leverage technology to solve problems and elevate lives. It's about understanding how new tools shape our jobs, emotions, and friendships—and how we can use them to build real solutions.</p>
              <p>For Nwaeze David, being "The King of Intelligence" means having wisdom, empathy, and clarity: staying true to our human values and using future tech to do genuine good.</p>
            </div>

            <div className="mb-8">
              <button onClick={() => setShowDetailedTreatise(!showDetailedTreatise)} className="text-xs font-bold text-[#00F0FF] hover:underline flex items-center gap-1 transition-colors glass-pill px-4 py-2 rounded-full">
                {showDetailedTreatise ? 'Hide Key Concepts' : 'Explore Key Concepts'}
                {showDetailedTreatise ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              {showDetailedTreatise && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <div className="p-4 rounded-xl glass-card">
                    <h4 className="text-xs font-bold text-[#00FFAB] uppercase tracking-wider mb-2">The "Algo-Rythm"</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">Technology brings speed and power, but our emotions, empathy, and heart give life purpose.</p>
                  </div>
                  <div className="p-4 rounded-xl glass-card">
                    <h4 className="text-xs font-bold text-[#00F0FF] uppercase tracking-wider mb-2">Learning from Failure</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">Machines follow code, but humans learn through grit, feelings, and overcoming setbacks.</p>
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/2348110607341" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full bg-gradient-to-r from-[#00F0FF] to-[#2563EB] text-slate-950 font-bold text-sm shadow-md shadow-[#00F0FF]/20 hover:scale-105 transition-all flex items-center justify-center gap-2">
                <span>Message on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="https://chat.whatsapp.com/CXzl5uB7Jz23AFsAYkwUFE?s=cl&p=a&mlu=4&ilr=4" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full glass-pill text-slate-900 dark:text-white font-bold text-sm hover:scale-105 transition-all flex items-center justify-center gap-2 border-emerald-400/40">
                <Sparkles className="w-4 h-4 text-[#00FFAB]" />
                <span>Join Community</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
