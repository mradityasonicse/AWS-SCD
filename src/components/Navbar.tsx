import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X, ArrowUpRight, Info, Layers, Users, Calendar, MapPin, HeartHandshake, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { EVENT_DETAILS } from '../data/eventData';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { id: 'about', name: 'About', href: '#about', icon: Info },
  { id: 'tracks', name: 'Tracks', href: '#tracks', icon: Layers },
  { id: 'speakers', name: 'Speakers', href: '#speakers', icon: Users },
  { id: 'agenda', name: 'Agenda', href: '#agenda', icon: Calendar },
  { id: 'venue', name: 'Venue', href: '#venue', icon: MapPin },
  { id: 'team', name: 'Team', href: '#team', icon: HeartHandshake },
  { id: 'faq', name: 'FAQ', href: '#faq', icon: HelpCircle },
] as const;

export interface NavbarProps {
  onOpenRegister?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRegister }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('about');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  // Close mobile drawer on Escape key press
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Ultra-smooth RAF-throttled Scroll Spy & header state updater
  // Correctly handles scrolling in both directions and guarantees the first item ('about') is active when scrolling back up
  useEffect(() => {
    let rafId: number | null = null;

    const handleScroll = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(() => {
        const scrollPos = window.scrollY;

        // Toggle header glass styling
        const isScrolled = scrollPos > 20;
        setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));

        // When scrolling back towards the top of the page (Hero, Countdown, Marquee, or top of About)
        // Always reset active item to the FIRST item ('about')
        const aboutEl = document.getElementById('about');
        const aboutTop = aboutEl ? aboutEl.getBoundingClientRect().top : 400;

        if (scrollPos < 250 || aboutTop > 140) {
          setActiveItem('about');
          rafId = null;
          return;
        }

        // When user reaches near the bottom of the page, activate the last nav item ('faq')
        if (window.innerHeight + scrollPos >= document.documentElement.scrollHeight - 80) {
          setActiveItem(NAV_LINKS[NAV_LINKS.length - 1].id);
          rafId = null;
          return;
        }

        // Active section detection: find the latest section whose top has reached or passed the header offset
        const headerOffset = 150;
        let currentActive = 'about';

        for (let i = 0; i < NAV_LINKS.length; i++) {
          const el = document.getElementById(NAV_LINKS[i].id);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= headerOffset) {
              currentActive = NAV_LINKS[i].id;
            }
          }
        }

        setActiveItem((prev) => (prev !== currentActive ? currentActive : prev));
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

  // Smooth scroll click handler with header offset calculation and mobile touch resilience
  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string, id: string) => {
      e.preventDefault();
      setActiveItem(id);
      setMobileMenuOpen(false);

      const targetId = href.replace('#', '');
      if (!targetId) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        window.history.pushState(null, '', '/');
        return;
      }

      // Small delay allows mobile touch gesture release and drawer collapse to start
      // so browser does not cancel smooth scroll due to gesture collision or layout change
      setTimeout(() => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const yOffset = -90; // Height of ticker (36px) + floating nav (48px) + breathing room
          const y = targetElement.getBoundingClientRect().top + window.scrollY + yOffset;

          window.scrollTo({
            top: Math.max(0, y),
            behavior: 'smooth',
          });

          window.history.pushState(null, '', href);
        }
      }, 80);
    },
    []
  );

  const handleRegisterClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setMobileMenuOpen(false);
    if (EVENT_DETAILS.registrationUrl && EVENT_DETAILS.registrationUrl.startsWith('http')) {
      // Direct navigation to official Meetup registration link
      return;
    }
    e.preventDefault();
    if (onOpenRegister) {
      onOpenRegister();
    } else {
      const regEl = document.getElementById('register') || document.getElementById('about');
      if (regEl) {
        const y = regEl.getBoundingClientRect().top + window.scrollY - 90;
        window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-9 left-0 right-0 z-[100] px-3 sm:px-6 py-2 transform-gpu will-change-transform",
        mobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
      )}
    >
      {/* Mobile background backdrop dismiss */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-xs z-[-1] lg:hidden pointer-events-auto cursor-pointer"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      <div
        className={cn(
          "max-w-[1380px] w-full mx-auto pointer-events-auto border relative transition-[background-color,border-color,box-shadow,border-radius] duration-200 transform-gpu",
          mobileMenuOpen
            ? "rounded-2xl bg-[var(--theme-surface,#1E1E1E)] shadow-xl border-[var(--theme-border,#3E3E3E)] py-3 px-5"
            : scrolled
              ? "rounded-full bg-[var(--theme-surface,#1E1E1E)]/95 border-[var(--theme-border,#3E3E3E)] shadow-lg py-2 px-4 sm:px-6"
              : "rounded-full bg-[var(--theme-surface,#1E1E1E)]/90 border-[var(--theme-border,#3E3E3E)] shadow-sm py-2 px-4 sm:px-6"
        )}
      >
        <div className="flex items-center justify-between gap-3 sm:gap-4">
          {/* Brand logos */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setActiveItem('about');
              window.scrollTo({ top: 0, behavior: 'smooth' });
              window.history.pushState(null, '', '/');
            }}
            className="flex items-center gap-3 group shrink-0"
          >
            <div className="flex items-center gap-1.5 sm:gap-2">
              <div className="h-8 w-8 sm:h-9 sm:w-9 rounded-xl bg-white p-1 border border-white/40 flex items-center justify-center transition-all duration-200 shadow-sm relative group-hover:border-[#AD5CFF]/60 group-hover:shadow-[0_0_12px_rgba(173,92,255,0.3)]">
                <img
                  src="/rungta-logo.png"
                  alt="Rungta International Skills University"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="h-5 sm:h-6 w-px bg-[var(--theme-border,#3E3E3E)]" />
              <img
                src="/AWS.png"
                alt="AWS Logo"
                className="h-6 sm:h-7 w-auto object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xs sm:text-sm md:text-base tracking-tight text-white flex items-center gap-1">
                AWS SCD <span className="font-serif italic text-xs sm:text-base" style={{ color: 'var(--theme-accent, #AD5CFF)' }}>2026</span>
              </span>
              <span className="text-[9px] sm:text-[10px] text-slate-400 uppercase tracking-widest font-mono hidden md:inline">
                {EVENT_DETAILS.institutionAcronym} · Central India
              </span>
            </div>
          </a>

          {/* Liquid Glass Navigation Dock (Inspired by Dribbble Reference with Theme Applied) */}
          <nav
            className="hidden lg:flex items-center justify-center gap-0.5 bg-[#161616]/95 border border-[var(--theme-border,#3E3E3E)] rounded-full p-1 relative shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]"
            aria-label="Primary navigation"
            onMouseLeave={() => setHoveredItem(null)}
          >
            {NAV_LINKS.map((link) => {
              const Icon = link.icon;
              const isActive = activeItem === link.id;
              const isHovered = hoveredItem === link.id;

              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href, link.id)}
                  onMouseEnter={() => setHoveredItem(link.id)}
                  onFocus={() => setHoveredItem(link.id)}
                  onBlur={() => setHoveredItem(null)}
                  aria-current={isActive ? 'page' : undefined}
                  className={cn(
                    "relative rounded-full cursor-pointer select-none flex flex-col items-center justify-center transition-[padding,min-width] duration-200 z-10 group h-11 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--theme-accent,#AD5CFF)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D121C]",
                    isActive
                      ? "px-3.5 min-w-[70px]"
                      : "px-2.5 min-w-[38px] hover:text-white"
                  )}
                >
                  <span className="sr-only">{link.name}</span>
                  {/* Floating Specular Liquid Glass Lens (Active State) */}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-liquid-glass-lens"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 28,
                        mass: 0.75,
                      }}
                      className="absolute -inset-y-1 inset-x-0 rounded-[20px] -z-10 overflow-hidden pointer-events-none"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(255, 255, 255, 0.18) 0%, rgba(var(--theme-accent-rgb, 173, 92, 255), 0.16) 42%, rgba(13, 18, 28, 0.9) 100%)",
                        backdropFilter: "blur(20px)",
                        border: "1px solid rgba(255, 255, 255, 0.32)",
                        borderTop: "1.5px solid rgba(255, 255, 255, 0.85)",
                        borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
                        boxShadow:
                          "inset 0 1.5px 2px 0 rgba(255, 255, 255, 0.8), inset 0 -1.5px 2px 0 rgba(0, 0, 0, 0.6), 0 10px 24px -4px rgba(0, 0, 0, 0.75), 0 0 20px 2px var(--theme-accent-glow, rgba(173, 92, 255, 0.35))",
                      }}
                    >
                      {/* Top Curved Specular Sheen (Optical Convex Caustic Reflection) */}
                      <div className="absolute top-0 inset-x-1 h-[46%] rounded-t-[18px] bg-gradient-to-b from-white/45 via-white/10 to-transparent opacity-90 pointer-events-none" />

                      {/* Bottom Rim Ambient Reflection */}
                      <div
                        className="absolute bottom-0 inset-x-2 h-[28%] rounded-b-[18px] pointer-events-none"
                        style={{
                          background:
                            "linear-gradient(to top, rgba(255, 255, 255, 0.15), rgba(var(--theme-accent-rgb, 173, 92, 255), 0.25), transparent)",
                        }}
                      />
                    </motion.div>
                  )}

                  {/* High-speed subtle hover halo for inactive items */}
                  {isHovered && !isActive && (
                    <motion.div
                      layoutId="navbar-hover-lens"
                      transition={{ duration: 0.15 }}
                      className="absolute inset-0 bg-white/[0.08] rounded-full -z-10"
                    />
                  )}

                  {/* Hover Tooltip for inactive items */}
                  <AnimatePresence>
                    {isHovered && !isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 4, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 2, scale: 0.9 }}
                        transition={{ duration: 0.15 }}
                        className="absolute -top-9 px-2 py-0.5 rounded-full bg-[#131921] border border-[#232F3E] text-[10px] font-mono font-semibold text-slate-200 shadow-xl pointer-events-none whitespace-nowrap z-30"
                        style={{
                          boxShadow: "0 4px 12px rgba(0,0,0,0.6), 0 0 10px rgba(173,92,255,0.25)",
                        }}
                      >
                        {link.name}
                        <div className="absolute left-1/2 -bottom-1 -translate-x-1/2 w-1.5 h-1.5 bg-[#131921] border-r border-b border-[#232F3E] rotate-45" />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Icon */}
                  <Icon
                    className={cn(
                      "transition-all duration-200 shrink-0",
                      isActive
                        ? "w-4 h-4 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]"
                        : isHovered
                          ? "w-4 h-4 text-white -translate-y-0.5"
                          : "w-4 h-4 text-slate-400 group-hover:text-slate-200"
                    )}
                  />

                  {/* Animated Text Label (reveals under icon when active) */}
                  <AnimatePresence mode="popLayout" initial={false}>
                    {isActive && (
                      <motion.span
                        initial={{ opacity: 0, y: 4, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -3, scale: 0.85 }}
                        transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[9.5px] font-bold text-white tracking-wider uppercase leading-none mt-1 select-none whitespace-nowrap"
                        style={{
                          textShadow: "0 1px 2px rgba(0,0,0,0.9), 0 0 10px var(--theme-accent-glow, rgba(173,92,255,0.6))",
                        }}
                      >
                        {link.name}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            {/* Desktop Register CTA */}
            <a
              href={EVENT_DETAILS.registrationUrl || '#register'}
              target={EVENT_DETAILS.registrationUrl?.startsWith('http') ? '_blank' : undefined}
              rel={EVENT_DETAILS.registrationUrl?.startsWith('http') ? 'noopener noreferrer' : undefined}
              onClick={handleRegisterClick}
              className="hidden sm:flex group cursor-pointer jitter-btn-base jitter-btn-register text-xs px-5 py-2.5 items-center gap-1.5 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
            >
              <span>REGISTER NOW</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 text-slate-300 hover:text-white hover:bg-[var(--theme-surface-elevated,#303030)] active:scale-95 rounded-full transition-all cursor-pointer border border-[var(--theme-border,#3E3E3E)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--theme-accent,#AD5CFF)]"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-drawer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[var(--theme-accent,#AD5CFF)]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer with Smooth AnimatePresence */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              id="mobile-nav-drawer"
              initial={{ opacity: 0, height: 0, y: -6 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -6 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden mt-3 pt-3 border-t border-[var(--theme-border,#3E3E3E)] max-h-[calc(100vh-130px)] overflow-y-auto no-scrollbar"
            >
              <div className="grid grid-cols-2 xs:grid-cols-3 gap-2 text-xs font-semibold py-2">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href, link.id)}
                    aria-current={activeItem === link.id ? 'page' : undefined}
                    className={cn(
                      "px-3 py-2.5 rounded-xl transition-all duration-150 flex items-center gap-2 cursor-pointer select-none active:scale-[0.97] relative overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--theme-accent,#AD5CFF)]",
                      activeItem === link.id
                        ? "text-white font-black shadow-lg"
                        : "text-slate-300 hover:text-white hover:bg-white/[0.04]"
                    )}
                    style={{
                      background:
                        activeItem === link.id
                          ? "linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(var(--theme-accent-rgb, 173, 92, 255), 0.16) 40%, rgba(30, 30, 30, 0.95) 100%)"
                          : undefined,
                      border: activeItem === link.id ? "1px solid rgba(255, 255, 255, 0.35)" : "1px solid transparent",
                      boxShadow:
                        activeItem === link.id
                          ? "inset 0 1.5px 2px rgba(255,255,255,0.7), 0 4px 16px var(--theme-accent-glow, rgba(173,92,255,0.3))"
                          : undefined,
                    }}
                  >
                    <link.icon
                      className="w-4 h-4 shrink-0 transition-colors"
                      style={{
                        color: activeItem === link.id ? '#FFFFFF' : 'var(--theme-accent, #AD5CFF)',
                        filter: activeItem === link.id ? 'drop-shadow(0 0 6px rgba(255,255,255,0.6))' : undefined,
                      }}
                    />
                    <span className="truncate">{link.name}</span>
                  </a>
                ))}
              </div>
              <div className="pt-3 flex flex-col gap-2.5">
                <a
                  href={EVENT_DETAILS.registrationUrl || '#register'}
                  target={EVENT_DETAILS.registrationUrl?.startsWith('http') ? '_blank' : undefined}
                  rel={EVENT_DETAILS.registrationUrl?.startsWith('http') ? 'noopener noreferrer' : undefined}
                  onClick={handleRegisterClick}
                  className="w-full jitter-btn-base jitter-btn-register text-xs py-3.5 flex items-center justify-center gap-1.5 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
                >
                  <span>REGISTER NOW</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
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
