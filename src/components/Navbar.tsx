import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles, Layers, Users, Calendar, MapPin, Trophy, HeartHandshake, HelpCircle, Mail } from 'lucide-react';
import { EVENT_DETAILS } from '../data/eventData';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'about', name: 'About', href: '#about', icon: Sparkles },
    { id: 'tracks', name: 'Tracks', href: '#tracks', icon: Layers },
    { id: 'speakers', name: 'Speakers', href: '#speakers', icon: Users },
    { id: 'agenda', name: 'Agenda', href: '#agenda', icon: Calendar },
    { id: 'venue', name: 'Venue', href: '#venue', icon: MapPin },
    { id: 'contests', name: 'Contests', href: '#contests', icon: Trophy },
    { id: 'team', name: 'Team', href: '#team', icon: HeartHandshake },
    { id: 'faq', name: 'FAQ', href: '#faq', icon: HelpCircle },
    { id: 'contact', name: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <header className="fixed top-9 left-0 right-0 z-[100] px-3 sm:px-6 py-2 transition-all duration-300 pointer-events-none">
      <div
        className={`max-w-[1380px] w-full mx-auto rounded-full transition-all duration-300 pointer-events-auto border relative ${
          scrolled
            ? 'bg-white/95 backdrop-blur-2xl border-neutral-200/90 shadow-[0_10px_30px_rgba(0,0,0,0.08)] py-2 px-4 sm:px-6'
            : 'bg-white/85 backdrop-blur-xl border-neutral-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.05)] py-2 px-4 sm:px-6'
        }`}
      >
        <div className="flex items-center justify-between gap-3 sm:gap-4">
          {/* Brand logos */}
          <a href="#" className="flex items-center gap-3 group shrink-0">
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-neutral-100 p-1 border border-neutral-200 backdrop-blur-md flex items-center justify-center group-hover:scale-105 transition-transform shadow-sm">
                <img
                  src="/risu-logo.png"
                  alt="RISU Logo"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="h-6 w-px bg-neutral-200" />
              <img
                src="/AWS.png"
                alt="AWS Logo"
                className="h-7 w-auto object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-sm sm:text-base tracking-tight text-[#171717] flex items-center gap-1.5">
                AWS SCD <span className="text-[#D946EF] font-serif italic text-base">2026</span>
              </span>
              <span className="text-[10px] text-neutral-500 uppercase tracking-widest font-mono hidden md:inline">
                {EVENT_DETAILS.institutionAcronym} · Central India
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden xl:flex items-center justify-center gap-1 bg-neutral-100/80 border border-neutral-200/80 rounded-full px-2 py-1"
            aria-label="Primary navigation"
          >
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeItem === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setActiveItem(link.id)}
                  className={`px-3 py-1.5 rounded-full transition-all duration-200 cursor-pointer select-none inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider ${
                    isActive
                      ? 'bg-[#D946EF] text-white font-bold shadow-[0_4px_14px_rgba(217,70,239,0.35)]'
                      : 'text-neutral-600 hover:text-neutral-900 hover:bg-white/80'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <a
              href="#contact"
              className="group cursor-pointer bg-[#D946EF] hover:bg-[#C026D3] active:bg-[#A21CAF] text-white font-bold text-xs px-4 sm:px-5 py-2 rounded-full transition-all duration-200 shadow-[0_4px_16px_rgba(217,70,239,0.35)] hover:shadow-[0_6px_22px_rgba(217,70,239,0.5)] hover:-translate-y-0.5 flex items-center gap-1.5 shrink-0"
            >
              <span>GET IN TOUCH</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-full transition-colors cursor-pointer border border-neutral-200"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#D946EF]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden mt-3 pt-3 border-t border-neutral-200 animate-in fade-in slide-in-from-top-2">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-semibold py-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => {
                    setActiveItem(link.id);
                    setMobileMenuOpen(false);
                  }}
                  className="px-3 py-2.5 rounded-xl text-neutral-700 hover:text-[#D946EF] hover:bg-[#D946EF]/10 transition-colors flex items-center gap-2"
                >
                  <link.icon className="w-3.5 h-3.5 text-[#D946EF]" />
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
            <div className="pt-2 flex gap-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full bg-[#D946EF] hover:bg-[#C026D3] text-white font-extrabold text-xs py-2.5 rounded-full flex items-center justify-center gap-1.5 shadow-lg"
              >
                <span>GET IN TOUCH</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
