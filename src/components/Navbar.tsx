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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#010409]/90 backdrop-blur-xl border-b border-[#30363d]/50'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#a371f7] to-[#58a6ff] flex items-center justify-center">
            <span className="text-white font-display font-bold text-sm">N</span>
          </div>
          <span className="font-display font-bold text-lg text-white tracking-tight">
            NIUXVERSE
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-[#8b949e] hover:text-white transition-colors"
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
            className="text-sm font-medium text-white hover:text-[#a371f7] transition-colors flex items-center gap-1"
          >
            Join Community
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile toggle */}
        <div className="flex lg:hidden items-center gap-3">
          <ThemeToggle id="mobile-nav-theme-toggle" className="sm:hidden" />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#8b949e] hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? 'max-h-80 border-b border-[#30363d]/50' : 'max-h-0'
        }`}
      >
        <div className="bg-[#010409]/95 backdrop-blur-xl px-6 py-4 space-y-1">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-[#8b949e] hover:text-white hover:bg-[#30363d]/20 transition-colors"
              >
                <Icon className="w-4 h-4 text-[#a371f7]" />
                {link.label}
              </a>
            );
          })}
          <div className="pt-3 border-t border-[#30363d]/30">
            <a
              href="https://chat.whatsapp.com/CXzl5uB7Jz23AFsAYkwUFE?s=cl&p=a&mlu=4&ilr=4"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-[#a371f7]/10 text-[#a371f7] text-sm font-medium"
            >
              Join Community
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
