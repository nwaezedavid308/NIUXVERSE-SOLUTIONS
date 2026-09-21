import React, { useState } from 'react';
import { Menu, X, Radio, BookOpen, Users, ArrowUpRight, User } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  onOpenRsvp: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRsvp }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'The Show', href: '#the-show', icon: Radio },
    { label: 'Academy', href: '#academy', icon: BookOpen },
    { label: 'Impact Talks', href: '#impact-talks', icon: Users },
    { label: 'Founder', href: '#founder', icon: User },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/90 dark:bg-[#02102e]/90 border-b border-slate-200 dark:border-[#0065E1]/25 transition-colors duration-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand identity */}
        <a href="#" className="group flex flex-col justify-center">
          <span className="font-serif font-medium text-xl sm:text-2xl tracking-normal text-slate-900 dark:text-white group-hover:text-[#0065E1] dark:group-hover:text-[#01CF11] transition-colors leading-tight">
            The Niuxverse
          </span>
          <span className="text-[10px] sm:text-[11px] text-[#0065E1] dark:text-[#01CF11] font-semibold tracking-wide">
            Changemakers • Thinkers • Builders
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-700 hover:text-[#0065E1] dark:text-slate-200 dark:hover:text-[#01CF11] transition-colors tracking-normal"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Action button + Theme Toggle */}
        <div className="hidden sm:flex items-center gap-3">
          <ThemeToggle id="navbar-theme-toggle" />

          <a
            id="nav-rsvp-btn"
            href="https://chat.whatsapp.com/CXzl5uB7Jz23AFsAYkwUFE?s=cl&p=a&mlu=4&ilr=4"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold px-4 py-2 rounded-xl bg-[#01CF11] hover:bg-[#01b80f] text-[#02102e] shadow-md shadow-[#01CF11]/20 transition-all duration-200 flex items-center gap-1.5 tracking-wide"
          >
            <span>Join Community</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex lg:hidden items-center gap-2">
          <ThemeToggle id="mobile-nav-theme-toggle" className="sm:hidden" />
          <button
            id="mobile-nav-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 dark:text-neutral-300 dark:hover:text-white dark:hover:bg-white/5 border border-slate-200 dark:border-white/10 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 dark:border-[#0065E1]/30 bg-white dark:bg-[#04163d] px-4 py-5 space-y-3 shadow-xl">
          <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-100 dark:bg-[#02102e]/80 border border-slate-200 dark:border-[#0065E1]/20">
            <span className="text-xs font-semibold text-slate-800 dark:text-white">Display Mode</span>
            <ThemeToggle id="mobile-menu-theme-toggle" showLabel />
          </div>

          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 px-3 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-800 hover:border-[#0065E1]/50 hover:text-[#0065E1] dark:bg-[#02102e]/80 dark:border-[#0065E1]/20 dark:text-white dark:hover:border-[#01CF11]/50 dark:hover:text-[#01CF11] transition-colors"
                >
                  <Icon className="w-4 h-4 text-[#0065E1] dark:text-[#01CF11]" />
                  <span>{link.label}</span>
                </a>
              );
            })}
          </div>

          <div className="pt-2 border-t border-slate-200 dark:border-white/10 flex flex-col gap-2">
            <a
              href="https://chat.whatsapp.com/CXzl5uB7Jz23AFsAYkwUFE?s=cl&p=a&mlu=4&ilr=4"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 px-4 rounded-xl bg-[#01CF11] hover:bg-[#01b80f] text-[#02102e] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md shadow-[#01CF11]/30"
            >
              <span>Join Community / WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
