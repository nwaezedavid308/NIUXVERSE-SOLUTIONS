import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Radio, Users, BookOpen, Video } from 'lucide-react';

interface HeroProps {
  onExploreShow: () => void;
  onOpenCommunity: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreShow, onOpenCommunity }) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 sm:pt-20 sm:pb-24">
      {/* Soft background ambient gradient */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#0065E1]/10 dark:bg-[#0065E1]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-10 w-80 h-80 bg-[#01CF11]/10 dark:bg-[#01CF11]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Column */}
          <div className="lg:col-span-7 space-y-6 text-center sm:text-left">
            <div>
              {/* Community Label */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0065E1]/10 dark:bg-[#0065E1]/20 border border-[#0065E1]/25 text-[#0065E1] dark:text-[#01CF11] text-xs font-semibold tracking-[-0.01em] mb-4">
                <span className="w-2 h-2 rounded-full bg-[#01CF11]" />
                <span>Changemakers • Thinkers • Builders</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-[64px] font-medium tracking-[-0.02em] text-slate-900 dark:text-white leading-[1.12]">
                Welcome to <br />
                <span className="text-[#0065E1] dark:text-[#01CF11]">
                  The Niuxverse
                </span>
              </h1>

              <p className="text-lg sm:text-xl font-normal text-slate-800 dark:text-slate-200 mt-4 leading-snug tracking-[-0.01em]">
                A community of changemakers, thinkers, and builders who leverage the power of technology to solve problems and impact lives.
              </p>
            </div>

            <p className="text-base font-normal text-slate-600 dark:text-slate-200 max-w-xl leading-relaxed tracking-[-0.01em]">
              Technology is changing the world quickly, but real progress happens when we use it to help people. The Niuxverse is a welcoming space for anyone who wants to understand futuristic technology, protect human connection, and build practical solutions that make a real difference.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center sm:justify-start pt-2">
              <a
                href="#the-show"
                onClick={onExploreShow}
                id="hero-explore-show-btn"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#0065E1] hover:bg-[#0055c0] text-white font-semibold text-sm tracking-[-0.01em] shadow-md shadow-[#0065E1]/25 transition-all duration-150 flex items-center justify-center gap-2"
              >
                <Radio className="w-4 h-4" />
                <span>Explore the Show</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                id="hero-join-community-btn"
                href="https://chat.whatsapp.com/CXzl5uB7Jz23AFsAYkwUFE?s=cl&p=a&mlu=4&ilr=4"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#01CF11] hover:bg-[#01b80f] text-[#02102e] font-semibold text-sm tracking-[-0.01em] shadow-md shadow-[#01CF11]/20 transition-all duration-150 flex items-center justify-center gap-2"
              >
                <Users className="w-4 h-4" />
                <span>Join the Community</span>
              </a>
            </div>

            {/* Founder Note */}
            <div className="p-4 rounded-xl border border-slate-200 bg-white/80 shadow-sm dark:border-[#0065E1]/30 dark:bg-[#051b44]/80 text-xs text-slate-600 dark:text-slate-200 leading-relaxed max-w-xl">
              <span className="font-semibold text-slate-900 dark:text-white block mb-1 tracking-[-0.01em]">
                A Message from Nwaeze David:
              </span>
              <p className="font-serif italic text-sm text-slate-800 dark:text-slate-200 mt-1 leading-snug">
                “We explore new technology not to replace human life, but to understand how it affects us, keep our friendships and communities strong, and build things that genuinely help people thrive.”
              </p>
            </div>
          </div>

          {/* Right Column: Clean Community Highlights */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-white shadow-lg dark:border-[#0065E1]/30 dark:bg-[#051b44] p-6 space-y-5">
              <div className="border-b border-slate-100 dark:border-white/10 pb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#0065E1] dark:text-[#01CF11] block">
                  What We Do Together
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">
                  How The Niuxverse Works
                </h3>
              </div>

              {/* Item 1 */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#0065E1]/10 dark:bg-[#0065E1]/30 text-[#0065E1] dark:text-[#01CF11] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Radio className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    The Niuxverse Show
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-200 mt-0.5 leading-relaxed">
                    Thoughtful episodes and discussions about artificial intelligence, human emotion, and where technology is taking society.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#01CF11]/15 text-[#01b80f] dark:text-[#01CF11] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    Practical Learning Tracks
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-200 mt-0.5 leading-relaxed">
                    Step-by-step tracks in Graphics Design & Brand Strategy and Product Design to build real products.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#0065E1]/10 dark:bg-[#0065E1]/30 text-[#0065E1] dark:text-[#01CF11] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Video className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    Live Community Meetups
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-200 mt-0.5 leading-relaxed">
                    Small, open video sessions on Google Meet where members share ideas, get feedback on projects, and support one another.
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 dark:border-white/10 flex items-center justify-between text-xs text-slate-500 dark:text-neutral-300">
                <span>Free to participate</span>
                <a
                  href="https://chat.whatsapp.com/CXzl5uB7Jz23AFsAYkwUFE?s=cl&p=a&mlu=4&ilr=4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0065E1] dark:text-[#01CF11] hover:underline font-semibold"
                >
                  Join our WhatsApp group
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Community Numbers Strip */}
        <div className="mt-14 pt-8 border-t border-slate-200 dark:border-[#0065E1]/30 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm dark:bg-[#051b44]/70 dark:border-[#0065E1]/30">
            <span className="text-2xl font-bold text-slate-900 dark:text-white">12</span>
            <p className="text-[11px] text-[#0065E1] dark:text-[#01CF11] uppercase tracking-wider font-bold mt-1">Show Episodes</p>
            <p className="text-[11px] text-slate-600 dark:text-slate-200">Discussions & Insights</p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm dark:bg-[#051b44]/70 dark:border-[#0065E1]/30">
            <span className="text-2xl font-bold text-slate-900 dark:text-white">2</span>
            <p className="text-[11px] text-[#0065E1] dark:text-[#01CF11] uppercase tracking-wider font-bold mt-1">Learning Tracks</p>
            <p className="text-[11px] text-slate-600 dark:text-slate-200">Design & Brand Strategy</p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm dark:bg-[#051b44]/70 dark:border-[#0065E1]/30">
            <span className="text-2xl font-bold text-slate-900 dark:text-white">2026–2030</span>
            <p className="text-[11px] text-[#0065E1] dark:text-[#01CF11] uppercase tracking-wider font-bold mt-1">Active Horizon</p>
            <p className="text-[11px] text-slate-600 dark:text-slate-200">Modern Digital Frontiers</p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm dark:bg-[#051b44]/70 dark:border-[#0065E1]/30">
            <span className="text-2xl font-bold text-slate-900 dark:text-white">100%</span>
            <p className="text-[11px] text-[#0065E1] dark:text-[#01CF11] uppercase tracking-wider font-bold mt-1">Community First</p>
            <p className="text-[11px] text-slate-600 dark:text-slate-200">Empathy & Real Impact</p>
          </div>
        </div>
      </div>
    </section>
  );
};
