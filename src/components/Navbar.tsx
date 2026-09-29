import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { MusicControl } from './MusicControl';
import { COMMUNITY_URL } from '../data/links';
const links = [['The Show', '#the-show'], ['Academy', '#academy'], ['Impact Talks', '#impact-talks'], ['Founder', '#founder']];
export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const scroll = () => setScrolled(window.scrollY > 30);
    scroll();
    window.addEventListener('scroll', scroll, { passive: true });
    const escape = (event: KeyboardEvent) => { if (event.key === 'Escape' && open) { setOpen(false); toggle.current?.focus(); } };
    document.addEventListener('keydown', escape);
    return () => { window.removeEventListener('scroll', scroll); document.removeEventListener('keydown', escape); };
  }, [open]);
  return <header className={`site-header${scrolled || open ? ' solid' : ''}`}>
    <nav className="nav-inner" aria-label="Main navigation">
      <a className="brand" href="#home" aria-label="Niuxverse home" onClick={() => setOpen(false)}><img className="brand-logo" src="/NIUXVERSE%20LOGO/NIUXVERSE%20LOGO%20WHTE%20SVG.svg" width="44" height="29" alt="" /><span>NIUXVERSE</span></a>
      <div className="desktop-links">{links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</div>
      <div className="nav-actions"><MusicControl /><a href={COMMUNITY_URL} target="_blank" rel="noreferrer" className="button nav-join">Join Community <ArrowUpRight size={14} /></a></div>
      <button ref={toggle} className="menu-toggle" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    </nav>
    {open && <nav className="mobile-menu" id="mobile-menu" aria-label="Mobile navigation">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}<ArrowUpRight size={17} /></a>)}<a href={COMMUNITY_URL} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>Join Community <ArrowUpRight size={17} /></a></nav>}
  </header>;
}
