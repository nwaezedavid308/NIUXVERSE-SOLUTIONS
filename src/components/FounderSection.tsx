import React, { useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Compass, Crown, ArrowRight, ShieldCheck, ChevronDown, ChevronUp } from 'lucide-react';

interface FounderSectionProps {
  onOpenRsvp: () => void;
}

export const FounderSection: React.FC<FounderSectionProps> = ({
  onOpenRsvp,
}) => {
  const [showDetailedTreatise, setShowDetailedTreatise] = useState(false);

  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-100px' });

  return (
    <section id="founder" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-[#0065E1]/10 dark:bg-[#0065E1]/15 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Column: Visual Emblem & Founder Monogram */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col items-center sm:items-start"
          >
            <div className="relative w-full max-w-sm rounded-3xl border border-slate-200 bg-white shadow-2xl dark:border-[#0065E1]/20 dark:bg-gradient-to-b dark:from-[#051b44] dark:via-[#031336] dark:to-[#02102e] p-10 dark:shadow-2xl dark:shadow-black/50 transition-colors">
              {/* Crown Emblem */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0065E1] to-[#01CF11] p-0.5 shadow-xl shadow-[#0065E1]/20 mb-8 flex items-center justify-center">
                <div className="w-full h-full bg-slate-50 dark:bg-[#02102e] rounded-[14px] flex items-center justify-center">
                  <Crown className="w-8 h-8 text-[#0065E1] dark:text-[#01CF11]" />
                </div>
              </div>

              <div className="space-y-2 mb-8">
                <span className="text-xs text-[#0065E1] dark:text-[#01CF11] font-semibold tracking-widest uppercase block">
                  Founder & Architect
                </span>
                <h3 className="font-display font-bold text-3xl text-slate-900 dark:text-white tracking-tight">
                  Nwaeze David
                </h3>
                <p className="text-lg font-semibold text-[#01CF11] tracking-tight">
                  "The King of Intelligence"
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Founder, Niuxverse Academy
                </p>
              </div>

              {/* Founder quote chip */}
              <div className="pt-4 font-normal italic text-base text-slate-700 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-white/10">
                "Technology gives us scale, but real emotions, empathy, and social connection give us meaning."
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative & The Algo-Rythm */}
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 40 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0065E1]/10 dark:bg-[#0065E1]/15 border border-[#0065E1]/20 dark:border-[#0065E1]/30 text-[#0065E1] dark:text-[#01CF11] text-xs font-semibold tracking-wider uppercase mb-4">
              <Compass className="w-3.5 h-3.5" />
              <span>The Vision</span>
              <span className="text-slate-400">/</span>
              <span className="text-slate-400">Niuxverse</span>
            </div>

            <h2 className="font-display font-bold text-4xl sm:text-5xl tracking-tight text-slate-900 dark:text-white mb-3 leading-[1.05]">
              Why "The King of Intelligence"?
            </h2>

            <p className="text-xl text-[#0065E1] dark:text-[#01CF11] mb-8 font-medium tracking-tight">
              Futuristic Technology & Human Connection
            </p>

            <div className="space-y-5 text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              <p>
                The Niuxverse is a community of changemakers, thinkers, and builders who leverage the power of technology to solve problems and impact lives. It's about understanding how new tools shape our lives, jobs, emotions, friendships and how we can use them to help people. Building solutions that impacts lives.
              </p>

              <p>
                For Nwaeze David, being "The King of Intelligence" means having wisdom, empathy, and clarity: staying true to our human values and using future tech to do real good.
              </p>
            </div>

            {/* Collapsible Deeper Treatise */}
            <div className="mb-8">
              <button
                type="button"
                onClick={() => setShowDetailedTreatise(!showDetailedTreatise)}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0065E1] dark:text-[#01CF11] hover:underline py-1 transition-colors"
              >
                <span>{showDetailedTreatise ? 'Hide Key Ideas' : 'Explore Key Ideas'}</span>
                {showDetailedTreatise ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>

              {showDetailedTreatise && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50 dark:border-[#0065E1]/20 dark:bg-[#051b44]/50">
                    <h4 className="text-xs font-bold text-[#0065E1] dark:text-[#01CF11] uppercase tracking-wider mb-2">
                      The "Algo-Rythm"
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      Technology brings speed and power, but our emotions, empathy, and heart give life purpose. We use tech as a tool, not a replacement.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50 dark:border-[#0065E1]/20 dark:bg-[#051b44]/50">
                    <h4 className="text-xs font-bold text-[#0065E1] dark:text-[#01CF11] uppercase tracking-wider mb-2">
                      Learning from Failure
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      Machines simply follow code, but humans learn through grit, feelings, and overcoming setbacks. Real resilience is uniquely human.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Action CTA */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                id="message-david-wa-btn"
                href="https://wa.me/2348110607341"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#01CF11] hover:bg-[#01b80f] text-[#02102e] font-bold text-sm transition-all shadow-xl shadow-[#01CF11]/20 hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
              >
                <span>Message Niuxverse on WhatsApp</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                id="join-community-founder-btn"
                href="https://chat.whatsapp.com/CXzl5uB7Jz23AFsAYkwUFE?s=cl&p=a&mlu=4&ilr=4"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#0065E1]/10 dark:bg-[#0065E1]/15 border border-[#0065E1]/20 dark:border-[#0065E1]/30 text-[#0065E1] dark:text-[#01CF11] hover:bg-[#0065E1] hover:text-white dark:hover:bg-[#0065E1] dark:hover:text-white font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Join WhatsApp Community</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
