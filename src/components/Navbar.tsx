import React, { useState, useEffect } from 'react';
import { Menu, X, Radio, BookOpen, Users, ArrowUpRight, User, Sparkles } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  onOpenRsvp: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRsvp }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-slate-900/80 dark:bg-[#060B1E]/80 backdrop-blur-2xl border-b border-cyan-500/20 shadow-lg shadow-cyan-500/5'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#00F0FF] via-[#00FFAB] to-[#7C3AED] p-0.5 shadow-md shadow-[#00F0FF]/30 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#060B1E] rounded-[10px] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-[#00F0FF]" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-xl tracking-tight text-slate-900 dark:text-white group-hover:text-[#00F0FF] transition-colors">
              The Niuxverse
            </span>
            <span className="text-[10px] text-[#00FFAB] uppercase tracking-widest font-semibold">
              Solutions
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1.5 p-1.5 rounded-full glass-pill">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-1.5 rounded-full text-xs font-semibold text-slate-700 dark:text-slate-200 hover:text-slate-950 dark:hover:text-[#00F0FF] hover:bg-cyan-400/10 transition-all"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden sm:flex items-center gap-4">
          <ThemeToggle id="navbar-theme-toggle" />
          <a
            href="https://chat.whatsapp.com/CXzl5uB7Jz23AFsAYkwUFE?s=cl&p=a&mlu=4&ilr=4"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold px-5 py-2.5 rounded-full bg-gradient-to-r from-[#00FFAB] to-[#00F0FF] text-slate-950 shadow-md shadow-[#00FFAB]/25 hover:shadow-[#00F0FF]/40 hover:scale-105 transition-all flex items-center gap-1.5"
          >
            <span>Join Community</span>
            <ArrowUpRight className="w-4 h-4 text-slate-950" />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden items-center gap-3">
          <ThemeToggle id="mobile-nav-theme-toggle" className="sm:hidden" />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 dark:text-slate-200 hover:text-[#00F0FF] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? 'max-h-96 border-b border-cyan-500/20' : 'max-h-0'
        }`}
      >
        <div className="bg-[#060B1E]/95 backdrop-blur-2xl px-6 py-5 space-y-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-slate-300 hover:text-[#00F0FF] hover:bg-cyan-500/10 transition-colors"
              >
                <Icon className="w-4 h-4 text-[#00FFAB]" />
                {link.label}
              </a>
            );
          })}
          <div className="pt-3 border-t border-cyan-500/20">
            <a
              href="https://chat.whatsapp.com/CXzl5uB7Jz23AFsAYkwUFE?s=cl&p=a&mlu=4&ilr=4"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-[#00FFAB] to-[#00F0FF] text-slate-950 font-bold text-xs shadow-md shadow-[#00FFAB]/20"
            >
              <span>Join Community</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
