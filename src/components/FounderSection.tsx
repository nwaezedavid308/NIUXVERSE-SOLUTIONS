import React, { useState } from 'react';
import { Compass, Crown, ArrowRight, ShieldCheck, ChevronDown, ChevronUp } from 'lucide-react';

interface FounderSectionProps {
  onOpenRsvp: () => void;
}

export const FounderSection: React.FC<FounderSectionProps> = ({
  onOpenRsvp,
}) => {
  const [showDetailedTreatise, setShowDetailedTreatise] = useState(false);

  return (
    <section id="founder" className="py-20 sm:py-28 relative border-t border-slate-200 dark:border-[#0065E1]/25 bg-white dark:bg-[#02102e] transition-colors duration-300">
      {/* Glow backdrop */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-[#0065E1]/15 dark:bg-[#0065E1]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Emblem & Founder Monogram */}
          <div className="lg:col-span-5 flex flex-col items-center sm:items-start">
            <div className="relative w-full max-w-sm rounded-2xl border border-slate-200 bg-white shadow-xl dark:border-[#0065E1]/40 dark:bg-gradient-to-b dark:from-[#051b44] dark:via-[#031336] dark:to-[#02102e] p-8 dark:shadow-2xl dark:shadow-black/80 transition-colors">
              {/* Crown Emblem */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0065E1] to-[#01CF11] p-0.5 shadow-lg shadow-[#0065E1]/20 mb-6 flex items-center justify-center">
                <div className="w-full h-full bg-slate-50 dark:bg-[#02102e] rounded-[14px] flex items-center justify-center text-[#01CF11]">
                  <Crown className="w-7 h-7 text-[#0065E1] dark:text-[#01CF11]" />
                </div>
              </div>

              <div className="space-y-1.5 mb-6">
                <span className="text-[11px] text-[#0065E1] dark:text-[#01CF11] font-semibold tracking-wide uppercase block">
                  FOUNDER & ARCHITECT
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-wide">
                  Nwaeze David
                </h3>
                <p className="text-base font-semibold text-[#01CF11] tracking-wide">
                  "The King of Intelligence"
                </p>
                <p className="text-xs text-slate-500 dark:text-neutral-300 tracking-normal">
                  Founder, Niuxverse Academy
                </p>
              </div>

              {/* Founder quote chip */}
              <div className="pt-2 font-normal italic text-sm text-slate-700 dark:text-slate-200 leading-relaxed tracking-normal">
                “Technology gives us scale, but real emotions, empathy, and social connection give us meaning.”
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & The Algo-Rythm */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0065E1]/10 dark:bg-[#0065E1]/20 border border-[#0065E1]/30 dark:border-[#0065E1]/40 text-[#0065E1] dark:text-[#01CF11] text-xs tracking-wide mb-3 font-semibold">
              <Compass className="w-3.5 h-3.5 text-[#0065E1] dark:text-[#01CF11]" />
              <span>THE VISION</span>
              <span>/</span>
              <span>NIUXVERSE</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-wide text-slate-900 dark:text-white mb-2 leading-[1.2]">
              Why "The King of Intelligence"?
            </h2>

            <p className="text-lg sm:text-xl font-normal text-[#0065E1] dark:text-[#01CF11] mb-6 tracking-normal">
              Futuristic Technology & Human Connection
            </p>

            <div className="space-y-4 text-sm text-slate-600 dark:text-slate-200 leading-relaxed mb-6 tracking-normal">
              <p>
                The Niuxverse is a community of changemakers, thinkers, and builders who leverage the power of technology to solve problems and impact lives. It's about understanding how new tools shape our lives, jobs, emotions, friendships e.t.c and how we can use them to help people. Building solutions that impacts lives.
              </p>

              <p>
                For Nwaeze David, being "The King of Intelligence" means having wisdom, empathy, and clarity: staying true to our human values and using future tech to do real good.
              </p>
            </div>

            {/* Collapsible Deeper Treatise */}
            <div className="mb-6">
              <button
                type="button"
                onClick={() => setShowDetailedTreatise(!showDetailedTreatise)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0065E1] dark:text-[#01CF11] hover:underline py-1 transition-colors"
              >
                <span>{showDetailedTreatise ? 'Hide Key Ideas' : 'Explore Key Ideas'}</span>
                {showDetailedTreatise ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>

              {showDetailedTreatise && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 text-xs animate-fadeIn">
                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 dark:border-[#0065E1]/30 dark:bg-[#051b44]">
                    <h4 className="text-xs font-bold text-[#0065E1] dark:text-[#01CF11] uppercase tracking-wider mb-1.5">
                      The "Algo-Rythm"
                    </h4>
                    <p className="text-slate-600 dark:text-slate-200 leading-relaxed">
                      Technology brings speed and power, but our emotions, empathy, and heart give life purpose. We use tech as a tool, not a replacement.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 dark:border-[#0065E1]/30 dark:bg-[#051b44]">
                    <h4 className="text-xs font-bold text-[#0065E1] dark:text-[#01CF11] uppercase tracking-wider mb-1.5">
                      Learning from Failure
                    </h4>
                    <p className="text-slate-600 dark:text-slate-200 leading-relaxed">
                      Machines simply follow code, but humans learn through grit, feelings, and overcoming setbacks. Real resilience is uniquely human.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Action CTA with direct WhatsApp buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <a
                id="message-david-wa-btn"
                href="https://wa.me/2348110607341"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#01CF11] hover:bg-[#01b80f] text-[#02102e] font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-[#01CF11]/25 flex items-center justify-center gap-2"
              >
                <span>Message Niuxverse on WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                id="join-community-founder-btn"
                href="https://chat.whatsapp.com/CXzl5uB7Jz23AFsAYkwUFE?s=cl&p=a&mlu=4&ilr=4"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#0065E1]/10 dark:bg-[#0065E1]/20 border border-[#0065E1]/30 dark:border-[#0065E1]/50 text-[#0065E1] dark:text-[#01CF11] hover:bg-[#0065E1] hover:text-white dark:hover:bg-[#0065E1] dark:hover:text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
              >
                <span>Join WhatsApp Community</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
