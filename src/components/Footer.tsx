import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { EVENT_DETAILS } from '../data/eventData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.history.pushState(null, '', '/');
  };

  const handleFooterNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    if (!targetId) {
      scrollToTop();
      return;
    }
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const yOffset = -90;
      const y = targetElement.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
      window.history.pushState(null, '', href);
    }
  };

  const footerLinks = [
    { name: 'About Summit', href: '#about' },
    { name: 'Learning Tracks', href: '#tracks' },
    { name: 'Speakers & Keynotes', href: '#speakers' },
    { name: 'Session Timetable', href: '#agenda' },
    { name: 'Campus Venue & Transit', href: '#venue' },
    { name: 'Ecosystem & Sponsors', href: '#sponsors' },
    { name: 'Core Organizing Team', href: '#team' },
    { name: 'Frequently Asked Questions', href: '#faq' },
  ];

  return (
    <footer className="relative border-t border-white/10 bg-[var(--theme-bg,#0A0D14)] text-slate-400 pt-16 pb-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center">
              <img
                src="/aws-x-rungta-collab.png"
                alt="AWS x Rungta International Skills University"
                className="h-10 sm:h-12 w-auto object-contain drop-shadow"
              />
            </div>

            <div>
              <h3 className="text-lg font-black text-white">
                AWS Student Community Day Bhilai 2026
              </h3>
              <p
                className="text-xs font-semibold mt-0.5"
                style={{ color: 'var(--theme-accent, #AD5CFF)' }}
              >
                Hosted at {EVENT_DETAILS.institution}
              </p>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Chhattisgarh's premier student-led cloud conference bringing together ambitious undergraduates, AWS heroes, and visionary software builders.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={EVENT_DETAILS.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-[var(--theme-surface-elevated,#303030)] border border-[var(--theme-border,#3E3E3E)] text-slate-300 hover:text-[var(--theme-accent,#AD5CFF)] hover:border-[var(--theme-accent,#AD5CFF)]/40 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--theme-accent,#AD5CFF)]"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
              <a
                href={EVENT_DETAILS.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-[var(--theme-surface-elevated,#303030)] border border-[var(--theme-border,#3E3E3E)] text-slate-300 hover:text-[var(--theme-accent,#AD5CFF)] hover:border-[var(--theme-accent,#AD5CFF)]/40 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--theme-accent,#AD5CFF)]"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689-.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href={EVENT_DETAILS.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-[var(--theme-surface-elevated,#303030)] border border-[var(--theme-border,#3E3E3E)] text-slate-300 hover:text-[var(--theme-accent,#AD5CFF)] hover:border-[var(--theme-accent,#AD5CFF)]/40 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--theme-accent,#AD5CFF)]"
                aria-label="Twitter / X"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href={`mailto:${EVENT_DETAILS.contactEmail}`}
                title={EVENT_DETAILS.contactEmail}
                className="p-2 rounded-xl bg-[var(--theme-surface-elevated,#303030)] border border-[var(--theme-border,#3E3E3E)] text-slate-300 hover:text-[var(--theme-accent,#AD5CFF)] hover:border-[var(--theme-accent,#AD5CFF)]/40 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--theme-accent,#AD5CFF)]"
                aria-label={`Email: ${EVENT_DETAILS.contactEmail}`}
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-1">
              <a
                href={`mailto:${EVENT_DETAILS.contactEmail}`}
                className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-[var(--theme-accent,#AD5CFF)] transition-colors font-mono"
              >
                <Mail className="w-3.5 h-3.5 text-[var(--theme-accent,#AD5CFF)]" />
                <span>{EVENT_DETAILS.contactEmail}</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleFooterNavClick(e, link.href)}
                    className="hover:text-[var(--theme-accent,#AD5CFF)] transition-colors inline-block focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--theme-accent,#AD5CFF)] rounded px-1 -mx-1"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Academic Host & Community */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-white">
              Academic Host Partner
            </h4>
            <div className="rounded-2xl border border-white/10 bg-[rgba(255,255,255,0.08)] backdrop-blur-[16px] p-4 space-y-2">
              <div className="flex items-center gap-2.5">
                <div className="h-8 w-8 rounded-lg bg-white p-1 border border-white/40 flex items-center justify-center shrink-0 shadow-sm">
                  <img src="/rungta-logo.png" alt="Rungta International Skills University" className="h-full w-full object-contain" />
                </div>
                <span className="text-xs font-bold text-white">
                  Rungta International Skills University
                </span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Rungta International Skills University, Kohka-Kurud Road, Bhilai, Chhattisgarh 490024
              </p>
              <p className="text-[11px] text-slate-500">
                Department of Computer Science &amp; Cloud Technologies
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Credits (Poster Small Footer Scale: Inter Medium 16-20px responsive) */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 poster-small-footer text-slate-400">
          <p>
            © 2026 AWS Student Builder Group, Rungta International Skills University. All rights reserved.
          </p>


          <button
            type="button"
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-slate-300 hover:text-white transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--theme-accent,#AD5CFF)]"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
