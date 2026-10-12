import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X, ArrowUpRight, Sparkles, Layers, Users, Calendar, MapPin, Trophy, HeartHandshake, HelpCircle, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { EVENT_DETAILS } from '../data/eventData';
import { cn } from '@/lib/utils';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('about');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

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

  // Zero-lag off-thread Scroll Spy using IntersectionObserver (eliminates layout thrashing)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveItem(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-90px 0px -55% 0px',
        threshold: 0.05,
      }
    );

    navLinks.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // RAF-throttled scroll state updater (only triggers re-render when boolean value actually flips)
  useEffect(() => {
    let rafId: number | null = null;
    const handleScroll = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(() => {
        const isScrolled = window.scrollY > 20;
        setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
        rafId = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      if (rafId !== null) window.cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Smooth scroll click handler with header offset calculation
  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string, id: string) => {
      e.preventDefault();
      setActiveItem(id);
      setMobileMenuOpen(false);

      const targetId = href.replace('#', '');
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const top = targetElement.getBoundingClientRect().top + window.pageYOffset - 90;
        window.scrollTo({ top, behavior: 'smooth' });
        window.history.pushState(null, '', href);
      }
    },
    []
  );

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-9 left-0 right-0 z-[100] px-3 sm:px-6 py-2 pointer-events-none transform-gpu will-change-transform"
    >
      <div
        className={cn(
          "max-w-[1380px] w-full mx-auto pointer-events-auto border relative transition-[background-color,border-color,box-shadow,border-radius] duration-200 transform-gpu",
          mobileMenuOpen
            ? "rounded-[28px] bg-[#131921] shadow-[0_20px_50px_rgba(0,0,0,0.6)] border-[#232F3E] py-3 px-5"
            : scrolled
              ? "rounded-full bg-[#131921]/92 backdrop-blur-xl border-[#232F3E] shadow-[0_10px_35px_rgba(0,0,0,0.5)] py-2 px-4 sm:px-6"
              : "rounded-full bg-[#131921]/80 backdrop-blur-lg border-[#232F3E] shadow-[0_4px_25px_rgba(0,0,0,0.4)] py-2 px-4 sm:px-6"
        )}
      >
        <div className="flex items-center justify-between gap-3 sm:gap-4">
          {/* Brand logos */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              window.history.pushState(null, '', '/');
            }}
            className="flex items-center gap-3 group shrink-0"
          >
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-[#161E2D] p-1 border border-[#232F3E] flex items-center justify-center group-hover:scale-105 transition-transform duration-200 shadow-sm relative">
                <img
                  src="/risu-logo.png"
                  alt="RISU Logo"
                  className="h-full w-full object-contain"
                />
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#FF9900] rounded-full animate-ping pointer-events-none opacity-75" />
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#FF9900] rounded-full" />
              </div>
              <div className="h-6 w-px bg-[#232F3E]" />
              <img
                src="/AWS.png"
                alt="AWS Logo"
                className="h-7 w-auto object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-sm sm:text-base tracking-tight text-white flex items-center gap-1.5">
                AWS SCD <span className="text-[#FF9900] font-serif italic text-base">2026</span>
              </span>
              <span className="text-[10px] text-slate-400 uppercase tracking-widest font-mono hidden md:inline">
                {EVENT_DETAILS.institutionAcronym} · Central India
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links with Smooth Spring Pill */}
          <nav
            className="hidden xl:flex items-center justify-center gap-1 bg-[#161E2D]/90 border border-[#232F3E] rounded-full px-2 py-1 relative"
            aria-label="Primary navigation"
            onMouseLeave={() => setHoveredItem(null)}
          >
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeItem === link.id;
              const isHovered = hoveredItem === link.id;

              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href, link.id)}
                  onMouseEnter={() => setHoveredItem(link.id)}
                  className={cn(
                    "relative px-3 py-1.5 rounded-full transition-colors duration-150 cursor-pointer select-none inline-flex items-center gap-1.5 text-xs tracking-wider z-10",
                    isActive
                      ? "text-[#0B0F17] font-black"
                      : "text-slate-300 hover:text-white font-semibold"
                  )}
                >
                  {/* Sliding Active Pill with optimized spring parameters */}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-active-pill"
                      transition={{
                        type: "spring",
                        stiffness: 450,
                        damping: 32,
                        mass: 0.5,
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-[#FF9900] via-[#FFAC33] to-[#FF9900] rounded-full shadow-[0_2px_14px_rgba(255,153,0,0.4)] -z-10"
                    />
                  )}

                  {/* High-speed CSS hover backdrop (zero layoutId collision) */}
                  {isHovered && !isActive && (
                    <div className="absolute inset-0 bg-white/10 rounded-full -z-10 transition-opacity duration-150" />
                  )}

                  <Icon className="w-3.5 h-3.5 shrink-0" />
                  <span>{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact', 'contact')}
              className="hidden sm:flex group cursor-pointer bg-gradient-to-r from-[#FF9900] via-[#FFAC33] to-[#EC7211] text-[#0B0F17] font-black text-xs px-4 sm:px-5 py-2 rounded-full transition-all duration-200 shadow-[0_4px_16px_rgba(255,153,0,0.35)] hover:shadow-[0_6px_22px_rgba(255,153,0,0.5)] hover:-translate-y-0.5 items-center gap-1.5 shrink-0"
            >
              <span>GET IN TOUCH</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-slate-300 hover:text-white hover:bg-[#161E2D] active:scale-95 rounded-full transition-all cursor-pointer border border-[#232F3E]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#FF9900]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer with Smooth AnimatePresence */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -6 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -6 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="xl:hidden mt-3 pt-3 border-t border-[#232F3E] overflow-hidden"
            >
              <div className="grid grid-cols-2 xs:grid-cols-3 gap-2 text-xs font-semibold py-2">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href, link.id)}
                    className={cn(
                      "px-3 py-2.5 rounded-xl transition-all duration-150 flex items-center gap-2",
                      activeItem === link.id
                        ? "bg-[#FF9900] text-[#0B0F17] font-black shadow-md"
                        : "text-slate-200 active:bg-[#FF9900]/15 hover:text-[#FF9900] hover:bg-[#FF9900]/10"
                    )}
                  >
                    <link.icon
                      className={cn(
                        "w-3.5 h-3.5 shrink-0",
                        activeItem === link.id ? "text-[#0B0F17]" : "text-[#FF9900]"
                      )}
                    />
                    <span className="truncate">{link.name}</span>
                  </a>
                ))}
              </div>
              <div className="pt-2 flex gap-2">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact', 'contact')}
                  className="w-full bg-gradient-to-r from-[#FF9900] via-[#FFAC33] to-[#EC7211] text-[#0B0F17] font-black text-xs py-3 rounded-full flex items-center justify-center gap-1.5 shadow-lg shadow-[#FF9900]/25 hover:brightness-110 transition-all"
                >
                  <span>GET IN TOUCH</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Navbar;
