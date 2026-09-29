import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { NewsletterSignup } from './NewsletterSignup';

interface FooterProps {
  onOpenRsvp: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenRsvp }) => {
  return (
    <footer className="border-t border-cyan-500/20 bg-[#060B1E] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#00F0FF] via-[#00FFAB] to-[#7C3AED] p-0.5 shadow-md shadow-[#00F0FF]/30">
                <div className="w-full h-full bg-[#060B1E] rounded-[10px] flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-[#00F0FF]" />
                </div>
              </div>
              <span className="font-display font-bold text-xl text-white tracking-tight">The Niuxverse</span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              A community of changemakers, thinkers, and builders who leverage technology to solve real-world problems and elevate human lives.
            </p>
          </div>

          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-[#00FFAB] uppercase tracking-wider">Community Pillars</h4>
            <div className="space-y-3 text-sm text-slate-300">
              <div>
                <span className="text-white font-semibold block">Changemakers</span>
                <p className="text-xs text-slate-400">Finding real-world problems and creating social impact.</p>
              </div>
              <div>
                <span className="text-white font-semibold block">Thinkers</span>
                <p className="text-xs text-slate-400">Exploring deep questions and guiding ethical technology.</p>
              </div>
              <div>
                <span className="text-white font-semibold block">Builders</span>
                <p className="text-xs text-slate-400">Developing practical software, tools, and digital solutions.</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-[#00F0FF] uppercase tracking-wider">Quick Links & Support</h4>
            <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
              <a href="#the-show" className="text-slate-300 hover:text-[#00F0FF] transition-colors">The Show</a>
              <a href="#academy" className="text-slate-300 hover:text-[#00F0FF] transition-colors">Academy</a>
              <a href="#impact-talks" className="text-slate-300 hover:text-[#00F0FF] transition-colors">Impact Talks</a>
              <a href="#founder" className="text-slate-300 hover:text-[#00F0FF] transition-colors">Founder</a>
            </div>
            <div className="pt-3 space-y-2">
              <a href="https://chat.whatsapp.com/CXzl5uB7Jz23AFsAYkwUFE?s=cl&p=a&mlu=4&ilr=4" target="_blank" rel="noopener noreferrer" className="w-full py-3 px-5 rounded-full bg-gradient-to-r from-[#00FFAB] to-[#00F0FF] text-slate-950 text-xs font-bold flex items-center justify-center gap-2 shadow-md shadow-[#00FFAB]/20 hover:scale-105 transition-all">
                <span>Join WhatsApp Community</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a href="https://wa.me/2348110607341" target="_blank" rel="noopener noreferrer" className="w-full py-3 px-5 rounded-full glass-pill text-slate-200 text-xs font-bold flex items-center justify-center gap-2 hover:border-[#00F0FF] transition-all">
                <span>Message on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <NewsletterSignup />
        </div>

        <div className="mt-12 pt-6 border-t border-cyan-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <span>© {new Date().getFullYear()} The Niuxverse Solutions. All rights reserved.</span>
          <span className="text-[#00F0FF] font-mono">niuxverse.vercel.app</span>
        </div>
      </div>
    </footer>
  );
};
