import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  Search,
  ArrowUpRight,
  Layers,
  Calendar,
  Users,
  MapPin,
  Sparkles,
  HelpCircle,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { EVENT_DETAILS } from '../data/eventData';
import { cn } from '@/lib/utils';

interface NavCategory {
  id: string;
  name: string;
  hasDropdown: boolean;
  leftPanel: {
    title: string;
    description: string;
    ctaText: string;
    ctaHref: string;
  };
  numberedLinks: Array<{
    num: string;
    title: string;
    href: string;
    tag?: string;
  }>;
  rightCard: {
    image: string;
    title: string;
    ctaText: string;
    ctaHref: string;
  };
}

const NAV_CATEGORIES: NavCategory[] = [
  {
    id: 'tracks',
    name: 'TRACKS',
    hasDropdown: true,
    leftPanel: {
      title: 'FIND THE PERFECT TRACK FOR YOUR CLOUD JOURNEY',
      description: 'Explore 4 high-impact learning tracks curated by AWS DevRel leadership, featuring GenAI on Bedrock, hyperscale serverless, and cloud career blueprints.',
      ctaText: 'EXPLORE TRACKS',
      ctaHref: '#tracks',
    },
    numberedLinks: [
      { num: '01', title: 'GENERATIVE AI & AMAZON BEDROCK', href: '#tracks' },
      { num: '02', title: 'HYPERSCALE SERVERLESS ARCHITECTURES', href: '#tracks' },
      { num: '03', title: 'ENTERPRISE DEVSECOPS & AUTOMATION', href: '#tracks' },
      { num: '04', title: 'STUDENT CLOUD BUILDER PATHWAYS', href: '#tracks' },
      { num: '05', title: 'VIEW ALL LEARNING TRACKS', href: '#tracks' },
    ],
    rightCard: {
      image: '/featured-tracks-2026.jpg',
      title: "DISCOVER WHAT 550+ BUILDERS ARE SHAPING",
      ctaText: 'VIEW SESSIONS',
      ctaHref: '#agenda',
    },
  },
  {
    id: 'sessions',
    name: 'SESSIONS',
    hasDropdown: true,
    leftPanel: {
      title: 'A FULL DAY OF LIVE TALKS & KEYNOTES',
      description: "Full day of technical sessions, AWS cloud architecture masterclasses with Harshit Singh (Amazon) & Saptarshi De (AWS), and live stage Kahoot quizzes at RISU Bhilai.",
      ctaText: 'EXPLORE SCHEDULE',
      ctaHref: '#agenda',
    },
    numberedLinks: [
      { num: '01', title: '09:00 AM · REGISTRATION', href: '#agenda' },
      { num: '02', title: '10:00 AM · INAUGURATION & FELICITATION', href: '#agenda' },
      { num: '03', title: '10:40 AM · SPEAKER SESSION 1', href: '#agenda' },
      { num: '04', title: '11:30 AM · BREAK (LUNCH / REFRESHMENTS)', href: '#agenda' },
      { num: '05', title: '12:40 PM · SPEAKER SESSION 2', href: '#agenda' },
      { num: '06', title: '03:00 PM · SWAG DISTRIBUTION', href: '#agenda' },
    ],
    rightCard: {
      image: '/aws-summit-expo.jpg',
      title: 'TECHNICAL SESSION & MUCH MORE',
      ctaText: 'FULL TIMETABLE',
      ctaHref: '#agenda',
    },
  },
  {
    id: 'about',
    name: 'ABOUT US',
    hasDropdown: true,
    leftPanel: {
      title: "CENTRAL INDIA'S FLAGSHIP AWS STUDENT SUMMIT",
      description: 'Organized by AWS Student Builder Group at Rungta International Skills University, bringing together student builders, architects, and cloud leaders.',
      ctaText: 'ABOUT SUMMIT',
      ctaHref: '#about',
    },
    numberedLinks: [
      { num: '01', title: 'SUMMIT MISSION & CAMPUS VISION', href: '#about' },
      { num: '02', title: 'CAMPUS VENUE', href: '#venue' },
      { num: '03', title: 'CORE ORGANIZING TEAM', href: '#team' },
      { num: '04', title: 'FREQUENTLY ASKED QUESTIONS', href: '#faq' },
    ],
    rightCard: {
      image: '/rungta-campus.png',
      title: 'RUNGTA INTERNATIONAL SKILLS UNIVERSITY · BHILAI CAMPUS',
      ctaText: 'CAMPUS VENUE',
      ctaHref: '#venue',
    },
  },
  {
    id: 'speakers',
    name: 'SPEAKERS',
    hasDropdown: false,
    leftPanel: {
      title: 'WORLD-CLASS CLOUD ARCHITECTS & HEROES',
      description: 'Learn directly from industry engineers Harshit Singh (SDE-II, Amazon) and Saptarshi De (SDE-II, AWS).',
      ctaText: 'VIEW SPEAKERS',
      ctaHref: '#speakers',
    },
    numberedLinks: [],
    rightCard: {
      image: '/summit-stage-feature.jpg',
      title: 'MEET THE SUMMIT KEYNOTE LEADERS',
      ctaText: 'ALL SPEAKERS',
      ctaHref: '#speakers',
    },
  },
];

export interface NavbarProps {
  onOpenRegister?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRegister }) => {
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpandedTab, setMobileExpandedTab] = useState<string | null>('tracks');
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Focus search input when search modal opens
  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    } else {
      setSearchQuery('');
    }
  }, [searchOpen]);

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Keyboard shortcut: Escape closes dropdown / search; Cmd/Ctrl+K opens search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpenDropdown(null);
        setSearchOpen(false);
        setMobileMenuOpen(false);
      }
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Smooth scroll handler with robust mobile drawer timing
  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpenDropdown(null);
    setMobileMenuOpen(false);
    setSearchOpen(false);

    const targetId = href.replace('#', '');
    if (!targetId) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.pushState(null, '', '/');
      return;
    }

    const scrollToTarget = () => {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const headerOffset = 90;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: 'smooth',
        });
        window.history.pushState(null, '', href);
      }
    };

    // Smooth execution without stuttering multi-calls
    requestAnimationFrame(() => {
      scrollToTarget();
    });
  }, []);

  const handleRegisterClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setOpenDropdown(null);
    setMobileMenuOpen(false);
    if (EVENT_DETAILS.registrationUrl && EVENT_DETAILS.registrationUrl.startsWith('http')) {
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

  const activeCategory = NAV_CATEGORIES.find((cat) => cat.id === openDropdown);

  // Search items database for search modal
  const SEARCH_ITEMS = [
    { title: 'Generative AI & Amazon Bedrock Track', category: 'Tracks', href: '#tracks', icon: Layers },
    { title: 'Hyperscale Serverless Architectures Track', category: 'Tracks', href: '#tracks', icon: Layers },
    { title: 'DevSecOps & Cloud Security Track', category: 'Tracks', href: '#tracks', icon: Layers },
    { title: 'Harshit Singh (SDE-II, Amazon)', category: 'Speakers', href: '#speakers', icon: Users },
    { title: 'Saptarshi De (SDE-II, AWS)', category: 'Speakers', href: '#speakers', icon: Users },
    { title: 'All Technical Sessions & Agenda', category: 'Agenda', href: '#agenda', icon: Calendar },
    { title: 'Live Stage Kahoot Quiz & Prizes', category: 'Events', href: '#agenda', icon: Sparkles },
    { title: 'Rungta International Skills University Campus Venue', category: 'Venue', href: '#venue', icon: MapPin },
    { title: 'Frequently Asked Questions (FAQ)', category: 'Support', href: '#faq', icon: HelpCircle },
  ];

  const filteredSearchItems = searchQuery.trim()
    ? SEARCH_ITEMS.filter((item) => item.title.toLowerCase().includes(searchQuery.toLowerCase()) || item.category.toLowerCase().includes(searchQuery.toLowerCase()))
    : SEARCH_ITEMS.slice(0, 6);

  return (
    <>
      <header
        ref={navRef}
        className={cn(
          "fixed top-9 left-0 right-0 z-[100] transition-[background-color,border-color,box-shadow] duration-200 select-none",
          scrolled || openDropdown
            ? "bg-[#0A0D14]/90 backdrop-blur-xl border-b border-white/10 shadow-xl shadow-black/60"
            : "bg-[#0A0D14]/75 backdrop-blur-md border-b border-white/10"
        )}
        onMouseLeave={() => setOpenDropdown(null)}
      >
        {/* Main Navbar Top Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-18 flex items-center justify-between gap-4">
          {/* Left: Brand Identity Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              window.history.pushState(null, '', '/');
            }}
            className="flex items-center gap-3 group shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#AD5CFF] rounded-lg p-1 -m-1"
          >
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 sm:h-9 sm:w-9 rounded-xl bg-white p-1 border border-white/50 flex items-center justify-center transition-all duration-200 shadow-sm relative group-hover:border-[#AD5CFF] group-hover:shadow-[0_0_12px_rgba(173,92,255,0.3)]">
                <img
                  src="/rungta-logo.png"
                  alt="Rungta International Skills University"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="h-5 sm:h-6 w-px bg-white/20" />
              <img
                src="/AWS.png"
                alt="AWS Logo"
                className="h-6 sm:h-7 w-auto object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-sm sm:text-base tracking-tight text-white flex items-center gap-1 leading-tight font-sans">
                AWS SCD <span className="font-mono font-bold text-sm sm:text-base text-[#AD5CFF]">2026</span>
              </span>
              <span className="text-[9px] sm:text-[10px] text-slate-400 uppercase tracking-widest font-mono hidden sm:inline leading-none mt-0.5">
                Rungta International Skills University · Central India
              </span>
            </div>
          </a>

          {/* Center: Mega Menu Navigation Links (Reference Format) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {NAV_CATEGORIES.map((cat) => {
              const isOpen = openDropdown === cat.id;

              if (!cat.hasDropdown) {
                return (
                  <a
                    key={cat.id}
                    href={`#${cat.id}`}
                    onClick={(e) => handleNavClick(e, `#${cat.id}`)}
                    className="px-3.5 py-2 text-xs xl:text-[13px] font-bold uppercase tracking-wider text-slate-200 hover:text-white transition-colors cursor-pointer rounded-md hover:bg-white/[0.04]"
                  >
                    {cat.name}
                  </a>
                );
              }

              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setOpenDropdown(isOpen ? null : cat.id)}
                  onMouseEnter={() => setOpenDropdown(cat.id)}
                  className={cn(
                    "flex items-center gap-1.5 px-3.5 py-2 text-xs xl:text-[13px] font-bold uppercase tracking-wider transition-colors cursor-pointer rounded-md select-none",
                    isOpen
                      ? "text-[#AD5CFF] bg-white/[0.06]"
                      : "text-slate-200 hover:text-white hover:bg-white/[0.04]"
                  )}
                  aria-expanded={isOpen}
                >
                  <span>{cat.name}</span>
                  {isOpen ? (
                    <ChevronUp className="w-3.5 h-3.5 text-[#AD5CFF]" />
                  ) : (
                    <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-white" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right: Action Button & Search */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Search Icon Trigger */}
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="p-2 sm:p-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/[0.08] transition-colors cursor-pointer border border-white/10 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#AD5CFF]"
              aria-label="Search summit sessions, tracks, and speakers"
              title="Search summit (Ctrl+K)"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Rectangular Contact / Register Button (Matching Reference Style) */}
            <a
              href={EVENT_DETAILS.registrationUrl || '#register'}
              target={EVENT_DETAILS.registrationUrl?.startsWith('http') ? '_blank' : undefined}
              rel={EVENT_DETAILS.registrationUrl?.startsWith('http') ? 'noopener noreferrer' : undefined}
              onClick={handleRegisterClick}
              className="hidden sm:inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded bg-[#AD5CFF] hover:bg-[#B870FF] text-[#0A0D14] font-black text-xs uppercase tracking-wider transition-all duration-150 cursor-pointer shadow-md hover:shadow-lg active:scale-[0.98]"
            >
              <span>REGISTER NOW</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="lg:hidden p-2 text-slate-300 hover:text-white hover:bg-white/[0.08] rounded-lg transition-colors cursor-pointer border border-white/10"
              aria-label="Toggle navigation drawer"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#AD5CFF]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* Desktop Mega Menu Dropdown Panel (Full-Width 3-Column Architectural Layout) */}
        {/* ========================================================================= */}
        <AnimatePresence>
          {openDropdown && activeCategory && activeCategory.hasDropdown && (
            <motion.div
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="hidden lg:block border-t border-white/10 bg-[#0B0F17]/95 backdrop-blur-2xl shadow-2xl shadow-black/80"
              onMouseEnter={() => setOpenDropdown(activeCategory.id)}
            >
              <div className="max-w-7xl mx-auto grid grid-cols-12 min-h-[300px]">
                {/* Column 1: Editorial Headline & Overview (~32%) */}
                <div className="col-span-4 p-8 flex flex-col justify-between border-r border-white/10">
                  <div>
                    <h3 className="text-xl xl:text-2xl font-bold uppercase tracking-tight text-white leading-tight font-sans">
                      {activeCategory.leftPanel.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed mt-4 max-w-sm">
                      {activeCategory.leftPanel.description}
                    </p>
                  </div>

                  <div className="pt-6">
                    <a
                      href={activeCategory.leftPanel.ctaHref}
                      onClick={(e) => handleNavClick(e, activeCategory.leftPanel.ctaHref)}
                      className="inline-flex items-center justify-center px-4 py-2.5 text-xs font-bold uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded transition-all cursor-pointer shadow-sm active:scale-95"
                    >
                      <span>{activeCategory.leftPanel.ctaText}</span>
                    </a>
                  </div>
                </div>

                {/* Column 2: Numbered Menu Links (~42%) */}
                <div className="col-span-4 p-8 flex flex-col justify-center border-r border-white/10 space-y-3.5">
                  {activeCategory.numberedLinks.map((item) => (
                    <a
                      key={item.num + item.title}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="group flex items-center gap-3.5 py-1.5 cursor-pointer select-none"
                    >
                      <span className="font-mono text-xs font-bold text-[#AD5CFF] group-hover:text-white transition-colors w-6 shrink-0">
                        {item.num}
                      </span>
                      <span className="text-xs xl:text-[13px] font-bold uppercase tracking-wider text-slate-200 group-hover:text-[#AD5CFF] group-hover:translate-x-1.5 transition-all">
                        {item.title}
                      </span>
                    </a>
                  ))}
                </div>

                {/* Column 3: Visual Feature Card (~26%) */}
                <div className="col-span-4 p-6 flex flex-col justify-center">
                  <a
                    href={activeCategory.rightCard.ctaHref}
                    onClick={(e) => handleNavClick(e, activeCategory.rightCard.ctaHref)}
                    className="relative rounded-xl overflow-hidden h-full min-h-[220px] flex flex-col justify-end p-5 border border-white/10 group cursor-pointer block shadow-lg"
                  >
                    {/* Background Image */}
                    <img
                      src={activeCategory.rightCard.image}
                      alt={activeCategory.rightCard.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {activeCategory.id === 'tracks' ? (
                      <>
                        {/* Subtle ambient edge overlay to preserve track clarity */}
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                        <div className="relative z-10 flex items-center justify-between mt-auto pt-2">
                          <span className="text-[10px] font-mono font-bold tracking-wider text-purple-300 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded border border-white/15">
                            KEYNOTE 2026
                          </span>
                          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider bg-white/95 hover:bg-white text-[#0F172A] rounded shadow-lg transition-transform group-hover:scale-105">
                            <span>{activeCategory.rightCard.ctaText}</span>
                            <ArrowUpRight className="w-3 h-3 stroke-[2.5]" />
                          </span>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                        <div className="relative z-10">
                          <h4 className="text-base xl:text-lg font-black uppercase text-white tracking-wide leading-snug">
                            {activeCategory.rightCard.title}
                          </h4>
                          <span className="mt-4 inline-flex items-center justify-center px-4 py-2 text-[11px] font-bold uppercase tracking-wider bg-white/90 hover:bg-white text-[#0F172A] rounded transition-all shadow-md">
                            <span>{activeCategory.rightCard.ctaText}</span>
                          </span>
                        </div>
                      </>
                    )}
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ========================================================================= */}
        {/* Mobile Navigation Drawer (Collapsible Accordion matching Mega Menu format) */}
        {/* ========================================================================= */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden border-t border-white/10 bg-[#0A0D14]/98 backdrop-blur-2xl max-h-[calc(100vh-80px)] overflow-y-auto"
            >
              <div className="p-4 space-y-3">
                {NAV_CATEGORIES.map((cat) => {
                  if (!cat.hasDropdown) {
                    return (
                      <a
                        key={cat.id}
                        href={`#${cat.id}`}
                        onClick={(e) => handleNavClick(e, `#${cat.id}`)}
                        className="flex items-center justify-between p-3.5 rounded-xl border border-white/10 bg-white/[0.04] text-xs font-bold uppercase tracking-wider text-white hover:text-[#AD5CFF] hover:border-[#AD5CFF]/50 transition-colors"
                      >
                        <span className="flex items-center gap-2.5">
                          <Users className="w-4 h-4 text-[#AD5CFF]" />
                          <span>{cat.name}</span>
                        </span>
                        <ArrowUpRight className="w-4 h-4 text-slate-400" />
                      </a>
                    );
                  }

                  const isExpanded = mobileExpandedTab === cat.id;

                  return (
                    <div key={cat.id} className="border border-white/10 rounded-xl overflow-hidden bg-white/[0.04]">
                      <button
                        type="button"
                        onClick={() => setMobileExpandedTab(isExpanded ? null : cat.id)}
                        className="w-full flex items-center justify-between p-3.5 text-xs font-bold uppercase tracking-wider text-white"
                      >
                        <span className={cn(isExpanded ? "text-[#AD5CFF]" : "text-white")}>{cat.name}</span>
                        {isExpanded ? <ChevronUp className="w-4 h-4 text-[#AD5CFF]" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                      </button>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="px-3.5 pb-4 pt-1 border-t border-white/10 space-y-2.5"
                          >
                            <p className="text-xs text-slate-300 leading-relaxed mb-3">
                              {cat.leftPanel.description}
                            </p>

                            <div className="space-y-2">
                              {cat.numberedLinks.map((link) => (
                                <a
                                  key={link.num + link.title}
                                  href={link.href}
                                  onClick={(e) => handleNavClick(e, link.href)}
                                  className="flex items-center gap-3 py-1 text-xs text-slate-300 hover:text-white"
                                >
                                  <span className="font-mono font-bold text-[#AD5CFF]">{link.num}</span>
                                  <span className="font-semibold">{link.title}</span>
                                </a>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}

                <div className="pt-2">
                  <a
                    href={EVENT_DETAILS.registrationUrl || '#register'}
                    target={EVENT_DETAILS.registrationUrl?.startsWith('http') ? '_blank' : undefined}
                    rel={EVENT_DETAILS.registrationUrl?.startsWith('http') ? 'noopener noreferrer' : undefined}
                    onClick={handleRegisterClick}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 rounded bg-[#AD5CFF] hover:bg-[#B870FF] text-[#0A0D14] font-black text-xs uppercase tracking-wider shadow-md active:scale-[0.98] transition-all"
                  >
                    <span>REGISTER NOW</span>
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ========================================================================= */}
      {/* Quick Search Jump Modal (Triggered by Search Icon or Ctrl+K) */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {searchOpen && (
          <div className="fixed inset-0 z-[200] flex items-start justify-center pt-24 px-4 bg-black/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-xl bg-[#0B0F17]/95 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Search Bar Input */}
              <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/10">
                <Search className="w-4 h-4 text-[#AD5CFF] shrink-0" />
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search tracks, keynotes, sessions, campus venue..."
                  className="w-full bg-transparent text-sm text-white placeholder-slate-400 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => setSearchOpen(false)}
                  className="p-1 rounded text-slate-400 hover:text-white text-xs font-mono"
                >
                  ESC
                </button>
              </div>

              {/* Filtered Search Results List */}
              <div className="p-3 max-h-80 overflow-y-auto space-y-1">
                {filteredSearchItems.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-white/[0.06] transition-colors group cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-[#AD5CFF]/40 text-[#AD5CFF]">
                        <item.icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-white">
                        {item.title}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 px-2 py-0.5 rounded bg-white/5 border border-white/5">
                      {item.category}
                    </span>
                  </a>
                ))}
              </div>

              {/* Bottom Shortcut Hint */}
              <div className="px-4 py-2.5 bg-white/[0.03] border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Navigate summit with instant jump</span>
                <span>Press ESC to close</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
