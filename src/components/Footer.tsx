import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { NewsletterSignup } from './NewsletterSignup';

interface FooterProps {
  onOpenRsvp: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenRsvp }) => {
  return (
    <footer className="border-t border-slate-200 dark:border-[#0065E1]/30 bg-slate-50 dark:bg-[#02102e] text-slate-600 dark:text-slate-200 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand & Mission */}
          <div className="md:col-span-5 space-y-4">
            <div>
              <h3 className="text-slate-900 dark:text-white font-extrabold text-lg tracking-wider uppercase">
                The Niuxverse
              </h3>
              <p className="text-xs uppercase tracking-widest text-[#0065E1] dark:text-[#01CF11] font-semibold">
                Changemakers • Thinkers • Builders
              </p>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-200 leading-relaxed max-w-sm">
              A community of changemakers, thinkers, and builders who leverage the power of technology to solve problems and impact lives.
            </p>

            <div className="p-3.5 rounded-xl bg-slate-100 border border-slate-200 dark:bg-[#051b44] dark:border-[#0065E1]/30 text-xs text-slate-700 dark:text-slate-200 italic max-w-sm leading-relaxed">
              "Technology will scale our capabilities, but human empathy and authentic connection will always give our lives meaning."
            </div>
          </div>

          {/* Community Focus */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              Community Roles
            </h4>
            <div className="space-y-3 text-xs text-slate-600 dark:text-slate-200">
              <div>
                <span className="font-semibold text-slate-900 dark:text-white block">Changemakers</span>
                <p className="text-[11px] text-slate-500 dark:text-neutral-400">Finding real-world problems and creating social impact.</p>
              </div>
              <div>
                <span className="font-semibold text-slate-900 dark:text-white block">Thinkers</span>
                <p className="text-[11px] text-slate-500 dark:text-neutral-400">Exploring deep questions and guiding ethical technology.</p>
              </div>
              <div>
                <span className="font-semibold text-slate-900 dark:text-white block">Builders</span>
                <p className="text-[11px] text-slate-500 dark:text-neutral-400">Developing practical software, tools, and digital solutions.</p>
              </div>
            </div>
          </div>

          {/* Navigation & Direct Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              Connect on WhatsApp
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a href="#the-show" className="text-slate-600 dark:text-neutral-300 hover:text-[#0065E1] dark:hover:text-[#01CF11] transition-colors">The Show Episodes</a>
              <a href="#academy" className="text-slate-600 dark:text-neutral-300 hover:text-[#0065E1] dark:hover:text-[#01CF11] transition-colors">Academy Tracks</a>
              <a href="#impact-talks" className="text-slate-600 dark:text-neutral-300 hover:text-[#0065E1] dark:hover:text-[#01CF11] transition-colors">Impact Talks</a>
              <a href="#founder" className="text-slate-600 dark:text-neutral-300 hover:text-[#0065E1] dark:hover:text-[#01CF11] transition-colors">Founder Story</a>
            </div>

            <div className="pt-2 space-y-2">
              <a
                href="https://chat.whatsapp.com/CXzl5uB7Jz23AFsAYkwUFE?s=cl&p=a&mlu=4&ilr=4"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-[#01CF11] hover:bg-[#01b80f] text-[#02102e] text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md shadow-[#01CF11]/25"
              >
                <span>Join WhatsApp Community</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://wa.me/2348110607341"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 px-4 rounded-xl bg-[#0065E1]/10 border border-[#0065E1]/30 dark:bg-[#0065E1]/20 dark:border-[#0065E1]/50 text-[#0065E1] dark:text-[#01CF11] hover:bg-[#0065E1] hover:text-white dark:hover:bg-[#0065E1] dark:hover:text-white text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2"
              >
                <span>Message Niuxverse on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Minimalist Newsletter Signup */}
        <div className="mt-12">
          <NewsletterSignup />
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-slate-200 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-neutral-400">
          <div>
            <span>© {new Date().getFullYear()} The Niuxverse. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span className="text-[#0065E1] dark:text-[#01CF11] font-mono">niuxverse.ai.studio</span>
            <span>•</span>
            <span className="text-xs text-slate-500 dark:text-neutral-400 font-medium">Building solutions that impact lives</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
