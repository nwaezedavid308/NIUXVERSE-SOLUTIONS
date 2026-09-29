import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { NewsletterSignup } from './NewsletterSignup';

interface FooterProps {
  onOpenRsvp: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenRsvp }) => {
  return (
    <footer className="border-t border-slate-200 dark:border-[#0065E1]/20 bg-slate-50 dark:bg-[#02102e] text-slate-600 dark:text-slate-300 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand & Mission */}
          <div className="md:col-span-5 space-y-5">
            <div>
              <h3 className="font-display font-bold text-2xl text-slate-900 dark:text-white tracking-tight">
                The Niuxverse
              </h3>
              <p className="text-xs uppercase tracking-widest text-[#0065E1] dark:text-[#01CF11] font-semibold mt-1">
                Changemakers · Thinkers · Builders
              </p>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-sm">
              A community of changemakers, thinkers, and builders who leverage the power of technology to solve problems and impact lives.
            </p>

            <div className="p-4 rounded-2xl bg-slate-100 border border-slate-200 dark:bg-[#051b44]/50 dark:border-[#0065E1]/20 text-sm text-slate-700 dark:text-slate-300 italic max-w-sm leading-relaxed">
              "Technology will scale our capabilities, but human empathy and authentic connection will always give our lives meaning."
            </div>
          </div>

          {/* Community Focus */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              Community Roles
            </h4>
            <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
              <div>
                <span className="font-semibold text-slate-900 dark:text-white block">Changemakers</span>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Finding real-world problems and creating social impact.</p>
              </div>
              <div>
                <span className="font-semibold text-slate-900 dark:text-white block">Thinkers</span>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Exploring deep questions and guiding ethical technology.</p>
              </div>
              <div>
                <span className="font-semibold text-slate-900 dark:text-white block">Builders</span>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Developing practical software, tools, and digital solutions.</p>
              </div>
            </div>
          </div>

          {/* Navigation & Direct Links */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              Connect on WhatsApp
            </h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <a href="#the-show" className="text-slate-600 dark:text-slate-300 hover:text-[#0065E1] dark:hover:text-[#01CF11] transition-colors">The Show Episodes</a>
              <a href="#academy" className="text-slate-600 dark:text-slate-300 hover:text-[#0065E1] dark:hover:text-[#01CF11] transition-colors">Academy Tracks</a>
              <a href="#impact-talks" className="text-slate-600 dark:text-slate-300 hover:text-[#0065E1] dark:hover:text-[#01CF11] transition-colors">Impact Talks</a>
              <a href="#founder" className="text-slate-600 dark:text-slate-300 hover:text-[#0065E1] dark:hover:text-[#01CF11] transition-colors">Founder Story</a>
            </div>

            <div className="pt-3 space-y-3">
              <a
                href="https://chat.whatsapp.com/CXzl5uB7Jz23AFsAYkwUFE?s=cl&p=a&mlu=4&ilr=4"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-full bg-[#01CF11] hover:bg-[#01b80f] text-[#02102e] text-sm font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#01CF11]/20"
              >
                <span>Join WhatsApp Community</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="https://wa.me/2348110607341"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-full bg-[#0065E1]/10 border border-[#0065E1]/20 dark:bg-[#0065E1]/15 dark:border-[#0065E1]/30 text-[#0065E1] dark:text-[#01CF11] hover:bg-[#0065E1] hover:text-white dark:hover:bg-[#0065E1] dark:hover:text-white text-sm font-semibold transition-all flex items-center justify-center gap-2"
              >
                <span>Message Niuxverse on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Minimalist Newsletter Signup */}
        <div className="mt-16">
          <NewsletterSignup />
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500 dark:text-slate-400">
          <div>
            <span>© {new Date().getFullYear()} The Niuxverse. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span className="text-[#0065E1] dark:text-[#01CF11] font-mono font-semibold">niuxverse.ai.studio</span>
            <span>·</span>
            <span className="text-slate-500 dark:text-slate-400 font-medium">Building solutions that impact lives</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
