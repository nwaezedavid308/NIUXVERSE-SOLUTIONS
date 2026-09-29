import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { NewsletterSignup } from './NewsletterSignup';

interface FooterProps {
  onOpenRsvp: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenRsvp }) => {
  return (
    <footer className="border-t border-[#30363d]/30 bg-[#010409]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#a371f7] to-[#58a6ff] flex items-center justify-center">
                <span className="text-white font-display font-bold text-sm">N</span>
              </div>
              <span className="font-display font-bold text-xl text-white tracking-tight">NIUXVERSE</span>
            </div>
            <p className="text-sm text-[#8b949e] leading-relaxed max-w-sm">
              A community of changemakers, thinkers, and builders who leverage the power of technology to solve problems and impact lives.
            </p>
          </div>

          {/* Community */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Community</h4>
            <div className="space-y-3 text-sm text-[#8b949e]">
              <div>
                <span className="text-white block">Changemakers</span>
                <p className="text-xs text-[#8b949e]">Finding real-world problems and creating social impact.</p>
              </div>
              <div>
                <span className="text-white block">Thinkers</span>
                <p className="text-xs text-[#8b949e]">Exploring deep questions and guiding ethical technology.</p>
              </div>
              <div>
                <span className="text-white block">Builders</span>
                <p className="text-xs text-[#8b949e]">Developing practical software, tools, and digital solutions.</p>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Connect</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <a href="#the-show" className="text-[#8b949e] hover:text-white transition-colors">The Show</a>
              <a href="#academy" className="text-[#8b949e] hover:text-white transition-colors">Academy</a>
              <a href="#impact-talks" className="text-[#8b949e] hover:text-white transition-colors">Impact Talks</a>
              <a href="#founder" className="text-[#8b949e] hover:text-white transition-colors">Founder</a>
            </div>
            <div className="pt-3 space-y-2">
              <a
                href="https://chat.whatsapp.com/CXzl5uB7Jz23AFsAYkwUFE?s=cl&p=a&mlu=4&ilr=4"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-lg bg-[#3fb950]/10 text-[#3fb950] text-sm font-medium flex items-center justify-center gap-2 hover:bg-[#3fb950]/20 transition-all"
              >
                Join WhatsApp Community
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/2348110607341"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-lg border border-[#30363d] text-[#8b949e] text-sm font-medium flex items-center justify-center gap-2 hover:text-white hover:border-[#a371f7]/50 transition-all"
              >
                Message on WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <NewsletterSignup />
        </div>

        <div className="mt-12 pt-6 border-t border-[#30363d]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8b949e]">
          <span>© {new Date().getFullYear()} The Niuxverse. All rights reserved.</span>
          <span className="text-[#a371f7] font-mono">niuxverse.ai.studio</span>
        </div>
      </div>
    </footer>
  );
};
