import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { EVENT_DETAILS } from '../data/eventData';

interface NavbarProps {
  onRegisterClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRegisterClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'ABOUT', href: '#about' },
    { name: 'TRACKS', href: '#tracks' },
    { name: 'SPEAKERS', href: '#speakers' },
    { name: 'AGENDA', href: '#agenda' },
    { name: 'VENUE', href: '#venue' },
    { name: 'CONTESTS', href: '#contests' },
    { name: 'BADGE', href: '#badge' },
    { name: 'PASSES', href: '#tickets' },
    { name: 'TEAM', href: '#team' },
    { name: 'FAQ', href: '#faq' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <header className="fixed top-9 left-0 right-0 z-[100] px-3 sm:px-6 py-2 transition-all duration-300 pointer-events-none">
      <div
        className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 pointer-events-auto border ${
          scrolled
            ? 'bg-[#0a0e14]/90 backdrop-blur-xl border-[#ff9900]/30 shadow-[0_16px_50px_rgba(0,0,0,0.8),inset_0_1px_rgba(255,255,255,0.08)] py-2.5 px-4 sm:px-6'
            : 'bg-[#0d1320]/75 backdrop-blur-md border-white/10 py-3 px-4 sm:px-6'
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          {/* Brand logos */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="flex items-center gap-2">
              <img
                src="/risu-crest.svg"
                alt="RISU Crest"
                className="h-9 w-9 object-contain drop-shadow-[0_0_12px_rgba(255,153,0,0.4)] group-hover:scale-105 transition-transform"
              />
              <div className="h-6 w-px bg-white/20" />
              <img
                src="/AWS.png"
                alt="AWS Logo"
                className="h-7 w-auto object-contain brightness-110 drop-shadow-[0_0_10px_rgba(255,153,0,0.3)]"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-sm sm:text-base tracking-tight text-white flex items-center gap-1.5">
                AWS SCD <span className="text-[#ff9900] font-serif italic text-base">2026</span>
              </span>
              <span className="text-[10px] text-slate-400 uppercase tracking-widest font-mono">
                {EVENT_DETAILS.institutionAcronym} · Central India
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-5 text-xs font-semibold tracking-wider text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-white transition-colors py-1 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#ff9900] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="#badge"
              className="hidden lg:inline-flex items-center gap-1.5 text-xs font-bold text-slate-300 hover:text-white px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-[#ff9900]/50 transition-all hover:bg-[#ff9900]/10"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#ffb84d]" />
              <span>Badge</span>
            </a>

            <button
              onClick={onRegisterClick}
              className="cursor-pointer bg-gradient-to-r from-[#ff9900] via-[#ffb84d] to-[#ff7a00] hover:from-[#ffb84d] hover:to-[#ff9900] text-black font-extrabold text-xs sm:text-sm px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl transition-all duration-200 shadow-[0_6px_24px_rgba(255,153,0,0.45)] hover:shadow-[0_10px_32px_rgba(255,153,0,0.7)] hover:-translate-y-0.5 flex items-center gap-1.5"
            >
              <span>REGISTER</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-xl transition-colors cursor-pointer border border-white/10"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#ff9900]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden mt-3 pt-3 border-t border-white/10 animate-in fade-in slide-in-from-top-2">
            <div className="grid grid-cols-2 gap-2 text-xs font-semibold py-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-[#ff9900]/10 hover:border hover:border-[#ff9900]/30 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="pt-2 flex gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onRegisterClick();
                }}
                className="w-full bg-[#ff9900] text-black font-extrabold text-xs py-2.5 rounded-lg flex items-center justify-center gap-1.5 shadow-lg"
              >
                <span>REGISTER NOW</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
