import React, { useState } from 'react';
import { ORGANIZER_TEAM, type TeamOrganizer } from './FannedCardDeck';
import { TeamStackingCards } from './TeamStackingCards';
import { ScrollReveal } from '@/components/ui/motion-primitives';
import { motion, AnimatePresence } from 'motion/react';
import { Layers, LayoutGrid, ArrowUpRight, ShieldCheck } from 'lucide-react';

const LinkedInIcon: React.FC<{ className?: string }> = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.6 1.6 0 0 0 1.6-1.6 1.6 1.6 0 0 0-3.2 0 1.6 1.6 0 0 0 1.6 1.6m1.4 9.74v-8.37H5.06v8.37z" />
  </svg>
);

const TeamGridCard: React.FC<{ member: TeamOrganizer }> = ({ member }) => {
  return (
    <div
      className="relative rounded-2xl bg-[var(--theme-surface,#252324)] border border-[var(--theme-border,#383336)] p-5 flex flex-col justify-between hover:border-slate-500 transition-[transform,border-color,box-shadow] duration-300 ease-out group hover:-translate-y-1.5 shadow-lg overflow-hidden transform-gpu"
      style={{
        boxShadow: `0 8px 24px rgba(0, 0, 0, 0.4)`,
      }}
    >
      {/* Background Accent Gradient on Hover */}
      <div
        className="absolute -right-12 -top-12 w-32 h-32 rounded-full opacity-0 group-hover:opacity-15 blur-2xl transition-opacity duration-500 pointer-events-none"
        style={{ backgroundColor: member.accentColor }}
      />

      {/* Top Meta Bar */}
      <div className="flex items-center justify-between gap-2 mb-4 relative z-10">
        <span
          className="text-[10px] font-mono uppercase tracking-wider font-semibold px-2.5 py-0.5 rounded-full"
          style={{
            backgroundColor: `${member.accentColor}18`,
            color: member.accentColor,
            border: `1px solid ${member.accentColor}35`,
          }}
        >
          {member.badge}
        </span>
      </div>

      {/* Center Avatar / Monogram */}
      <div className="flex items-center gap-4 mb-4 relative z-10">
        <div
          className="relative w-14 h-14 rounded-xl flex items-center justify-center font-bold text-xl overflow-hidden shrink-0 border-2"
          style={{
            borderColor: member.accentColor,
            backgroundColor: 'var(--theme-surface-elevated, #2E2A2C)',
            boxShadow: `0 0 12px ${member.accentColor}25`,
          }}
        >
          {member.image ? (
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          ) : (
            <span
              style={{
                fontFamily: "'Space Grotesk', -apple-system, sans-serif",
                color: member.accentColor,
              }}
            >
              {member.initials}
            </span>
          )}
        </div>

        <div className="min-w-0 flex-1">
          <h4
            style={{
              fontFamily: "'Space Grotesk', -apple-system, sans-serif",
            }}
            className="text-base font-bold text-white tracking-tight truncate group-hover:text-white transition-colors"
          >
            {member.name}
          </h4>
          <p
            className="text-xs font-semibold truncate"
            style={{ color: member.accentColor }}
          >
            {member.role}
          </p>
          <p className="text-[11px] text-slate-400 font-mono truncate">
            {member.title}
          </p>
        </div>
      </div>

      {/* Tagline */}
      <p className="text-xs text-slate-300 leading-relaxed line-clamp-2 mb-4 relative z-10">
        {member.tagline}
      </p>

      {/* Scope Chips */}
      <div className="flex flex-wrap gap-1 mb-4 relative z-10">
        {member.scope.map((tag) => (
          <span
            key={tag}
            className="text-[9px] font-mono px-2 py-0.5 rounded bg-[var(--theme-surface-elevated,#303030)] text-slate-300 border border-[var(--theme-border,#3E3E3E)]"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Bottom Bar: Verified + Connect Link */}
      <div className="flex items-center justify-between pt-3 border-t border-[var(--theme-border,#3E3E3E)] relative z-10">
        <span className="inline-flex items-center gap-1 text-[9px] font-mono text-emerald-400">
          <ShieldCheck className="w-3 h-3 text-emerald-400 shrink-0" />
          VERIFIED BUILDER
        </span>

        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full text-slate-200 hover:text-white bg-[var(--theme-surface-elevated,#303030)] hover:bg-[var(--theme-surface-card-hover,#2E2E2E)] border border-[var(--theme-border,#3E3E3E)] transition-all cursor-pointer"
        >
          <LinkedInIcon className="w-3 h-3 fill-current" />
          <span>Profile</span>
          <ArrowUpRight className="w-3 h-3 stroke-[2.5]" />
        </a>
      </div>
    </div>
  );
};

export const Team: React.FC = () => {
  const [viewMode, setViewMode] = useState<'stack' | 'grid'>('stack');

  return (
    <section className="py-20 sm:py-24 relative overflow-visible px-4 sm:px-6" id="team">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header with [ 07 ] Index & View Toggle */}
        <ScrollReveal>
          <div className="border-b border-[var(--theme-border,#3E3E3E)] pb-6 mb-10 sm:mb-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
            <div className="flex items-baseline gap-4 sm:gap-6">
              <span
                className="font-mono text-sm tracking-widest font-bold whitespace-nowrap shrink-0"
                style={{ color: 'var(--theme-accent, #AD5CFF)' }}
              >
                [ 07 ]
              </span>
              <div>
                <p
                  className="text-xs font-bold uppercase tracking-[0.2em] mb-2 flex items-center gap-2"
                  style={{ color: 'var(--theme-accent, #AD5CFF)' }}
                >
                  <span className="w-6 h-[1px]" style={{ backgroundColor: 'var(--theme-accent, #AD5CFF)' }} />
                  Core Leadership
                </p>
                <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-normal text-white tracking-wide uppercase leading-tight sm:leading-none">
                  The crew behind the summit.
                </h2>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 w-full md:w-auto justify-between md:justify-end">
              <p className="text-slate-400 text-xs sm:text-sm font-mono uppercase tracking-wider">
                AWS SBG LEADERSHIP · VOLUNTEERS · FACULTY
              </p>

              {/* View Mode Toggle: Stacking Cards vs Responsive Grid */}
              <div className="inline-flex items-center p-1 rounded-xl bg-[var(--theme-surface,#252324)] border border-[var(--theme-border,#383336)] shrink-0 self-start sm:self-auto shadow-sm">
                <button
                  type="button"
                  onClick={() => setViewMode('stack')}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer ${
                    viewMode === 'stack'
                      ? 'bg-[#AD5CFF] text-[#0A0D14] shadow-sm font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                  aria-label="Switch to Stacking Cards view"
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Stacking Cards</span>
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('grid')}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer ${
                    viewMode === 'grid'
                      ? 'bg-[#AD5CFF] text-[#0A0D14] shadow-sm font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                  aria-label="Switch to Grid view"
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                  <span>All Crew</span>
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Featured View Switcher */}
        <AnimatePresence mode="wait">
          {viewMode === 'stack' ? (
            <motion.div
              key="stack-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <TeamStackingCards members={ORGANIZER_TEAM} />
            </motion.div>
          ) : (
            <motion.div
              key="grid-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
            >
              {ORGANIZER_TEAM.map((member) => (
                <TeamGridCard key={member.id} member={member} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Team;
