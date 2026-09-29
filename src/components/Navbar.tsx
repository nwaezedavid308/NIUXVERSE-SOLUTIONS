import React, { useState, useEffect } from 'react';
import { Menu, X, Radio, BookOpen, Users, ArrowUpRight, User } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  onOpenRsvp: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRsvp }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'The Show', href: '#the-show', icon: Radio },
    { label: 'Academy', href: '#academy', icon: BookOpen },
    { label: 'Impact Talks', href: '#impact-talks', icon: Users },
    { label: 'Founder', href: '#founder', icon: User },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'backdrop-blur-xl bg-white/80 dark:bg-[#02102e]/80 shadow-lg shadow-black/5 border-b border-slate-200 dark:border-[#0065E1]/20'
          : 'backdrop-blur-md bg-white/60 dark:bg-[#02102e]/60 border-b border-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand identity */}
        <a href="#" className="group flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0065E1] to-[#01CF11] flex items-center justify-center shadow-lg shadow-[#0065E1]/20 group-hover:shadow-[#01CF11]/30 transition-shadow duration-300">
            <span className="text-white font-display font-bold text-lg">N</span>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-xl tracking-tight text-slate-900 dark:text-white leading-none group-hover:text-[#0065E1] dark:group-hover:text-[#01CF11] transition-colors">
              The Niuxverse
            </span>
            <span className="text-[10px] text-[#0065E1] dark:text-[#01CF11] font-semibold tracking-widest uppercase mt-0.5">
              Changemakers · Thinkers · Builders
            </span>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors group"
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#0065E1] to-[#01CF11] group-hover:w-3/4 transition-all duration-300 rounded-full" />
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
            className="relative text-sm font-semibold px-5 py-2.5 rounded-full bg-[#02102e] dark:bg-white text-white dark:text-[#02102e] hover:bg-[#0065E1] dark:hover:bg-[#01CF11] dark:hover:text-[#02102e] transition-all duration-300 flex items-center gap-1.5 shadow-lg shadow-slate-900/10 dark:shadow-white/10 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] overflow-hidden group"
          >
            <span className="relative z-10">Join Community</span>
            <ArrowUpRight className="w-4 h-4 relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          mobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="border-t border-slate-200 dark:border-[#0065E1]/20 bg-white dark:bg-[#04163d] px-4 py-6 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 hover:border-[#0065E1]/50 hover:text-[#0065E1] dark:bg-[#02102e]/80 dark:border-[#0065E1]/20 dark:text-white dark:hover:border-[#01CF11]/50 dark:hover:text-[#01CF11] transition-all duration-200 font-medium"
                >
                  <Icon className="w-4 h-4 text-[#0065E1] dark:text-[#01CF11]" />
                  <span>{link.label}</span>
                </a>
              );
            })}
          </div>

          <a
            href="https://chat.whatsapp.com/CXzl5uB7Jz23AFsAYkwUFE?s=cl&p=a&mlu=4&ilr=4"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full py-3.5 px-4 rounded-xl bg-[#01CF11] hover:bg-[#01b80f] text-[#02102e] text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-[#01CF11]/25 transition-all"
          >
            <span>Join Community</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  );
};
