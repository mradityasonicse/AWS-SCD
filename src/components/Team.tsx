import React, { useState } from 'react';
import { ORGANIZER_TEAM, type TeamOrganizer } from './FannedCardDeck';
import { ScrollReveal } from '@/components/ui/motion-primitives';
import { Layers, LayoutGrid, ArrowUpRight, ShieldCheck } from 'lucide-react';

const LinkedInIcon: React.FC<{ className?: string }> = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.6 1.6 0 0 0 1.6-1.6 1.6 1.6 0 0 0-3.2 0 1.6 1.6 0 0 0 1.6 1.6m1.4 9.74v-8.37H5.06v8.37z" />
  </svg>
);

const TeamGridCard: React.FC<{ member: TeamOrganizer }> = ({ member }) => {
  return (
    <div
      className="relative rounded-2xl bg-[#100B2E]/90 border border-[#2D2364] p-5 flex flex-col justify-between hover:border-[#AD5CFF]/60 transition-[transform,border-color,box-shadow] duration-300 ease-out group hover:-translate-y-1.5 shadow-xl overflow-hidden transform-gpu"
      style={{
        boxShadow: `0 8px 24px rgba(0, 0, 0, 0.4)`,
      }}
    >
      {/* Top Accent Color Line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] opacity-75 group-hover:opacity-100 transition-opacity"
        style={{ backgroundColor: member.accentColor }}
      />
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

// Partition team into Head Crew (4 leaders) and Sub Crew (all operational & crew members)
const HEAD_CREW_IDS = ['uddyan', 'gunjan', 'aditya', 'mentors'];
const HEAD_CREW = ORGANIZER_TEAM.filter((m) => HEAD_CREW_IDS.includes(m.id));
const SUB_CREW = ORGANIZER_TEAM.filter((m) => !HEAD_CREW_IDS.includes(m.id));

export const Team: React.FC = () => {
  const [subCrewPaused, setSubCrewPaused] = useState(false);
  const [subCrewView, setSubCrewView] = useState<'glider' | 'grid'>('glider');

  return (
    <section className="py-20 sm:py-24 relative overflow-visible px-4 sm:px-6" id="team">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header with [ 06 ] Index */}
        <ScrollReveal>
          <div className="border-b border-[var(--theme-border,#3E3E3E)] pb-6 mb-12 sm:mb-14 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
            <div className="flex items-baseline gap-4 sm:gap-6">
              <span
                className="font-mono text-sm tracking-widest font-bold whitespace-nowrap shrink-0"
                style={{ color: 'var(--theme-accent, #AD5CFF)' }}
              >
                [ 06 ]
              </span>
              <div>
                <p
                  className="text-xs font-bold uppercase tracking-[0.2em] mb-2 flex items-center gap-2"
                  style={{ color: 'var(--theme-accent, #AD5CFF)' }}
                >
                  <span className="w-6 h-[1px]" style={{ backgroundColor: 'var(--theme-accent, #AD5CFF)' }} />
                  Summit Leadership &amp; Operational Crew
                </p>
                <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-normal text-white tracking-wide uppercase leading-tight sm:leading-none">
                  The crew behind the summit.
                </h2>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 w-full md:w-auto justify-between md:justify-end">
              <p className="text-slate-400 text-xs sm:text-sm font-mono uppercase tracking-wider">
                HEAD CREW (4) · SUB CREW ({SUB_CREW.length})
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Division 1: Head Crew (Leadership & Cloud Architects - Exactly 4 Cards) */}
        <div className="mb-16 sm:mb-20">
          <div className="flex items-center justify-between gap-3 mb-6 pb-3 border-b border-[#2D2364]/70">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#AD5CFF]/15 text-[#AD5CFF] border border-[#AD5CFF]/35 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#AD5CFF]" />
                HEAD CREW · 4 DIRECTORS
              </span>
              <h3 className="text-lg sm:text-2xl font-bold text-white tracking-tight">
                Core Leadership &amp; Cloud Architects
              </h3>
            </div>
            <span className="text-xs font-mono text-slate-400 hidden sm:inline">
              STRATEGY · DEVOPS INFRA · KEYNOTE DIRECTION
            </span>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {HEAD_CREW.map((member) => (
              <TeamGridCard key={member.id} member={member} />
            ))}
          </div>
        </div>

        {/* Division 2: Sub Crew (Continuous Left-to-Right Animated Runner) */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-3 border-b border-[#2D2364]/70">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#42B4FF]/15 text-[#42B4FF] border border-[#42B4FF]/35 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#42B4FF]" />
                SUB CREW · {SUB_CREW.length} MEMBERS
              </span>
              <h3 className="text-lg sm:text-2xl font-bold text-white tracking-tight">
                Operations, Brand, Logistics &amp; Community Pod
              </h3>
            </div>

            {/* Toggle Glider vs Expanded Grid */}
            <div className="inline-flex items-center p-1 rounded-xl bg-[#0A0718] border border-[#2D2364] shrink-0 self-start sm:self-auto shadow-sm">
              <button
                type="button"
                onClick={() => setSubCrewView('glider')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer ${
                  subCrewView === 'glider'
                    ? 'bg-[#42B4FF] text-[#0A0D14] shadow-sm font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>L-to-R Glider</span>
              </button>
              <button
                type="button"
                onClick={() => setSubCrewView('grid')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer ${
                  subCrewView === 'grid'
                    ? 'bg-[#42B4FF] text-[#0A0D14] shadow-sm font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>All Grid</span>
              </button>
            </div>
          </div>

          {subCrewView === 'glider' ? (
            /* Left to Right Animated Glider Track with side masks */
            <div className="relative w-full overflow-hidden py-4 -mx-4 px-4 sm:mx-0 sm:px-0">
              {/* Side Gradient Masks */}
              <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-24 bg-gradient-to-r from-[#100B2E] via-[#100B2E]/80 to-transparent z-20 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-24 bg-gradient-to-l from-[#100B2E] via-[#100B2E]/80 to-transparent z-20 pointer-events-none" />

              <div
                className="overflow-hidden w-full py-2"
                onMouseEnter={() => setSubCrewPaused(true)}
                onMouseLeave={() => setSubCrewPaused(false)}
                onTouchStart={() => setSubCrewPaused(true)}
                onTouchEnd={() => setSubCrewPaused(false)}
              >
                <div
                  className={`subcrew-slider-track flex gap-4 sm:gap-6 will-change-transform ${
                    subCrewPaused ? 'is-paused' : ''
                  }`}
                >
                  {/* Duplicate 2 full sets for seamless 0 to -50% infinite Left-To-Right translation */}
                  {[...SUB_CREW, ...SUB_CREW].map((member, idx) => (
                    <div
                      key={`subcrew-track-${member.id}-${idx}`}
                      className="w-[290px] sm:w-[330px] md:w-[360px] shrink-0"
                    >
                      <TeamGridCard member={member} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            /* Expanded Grid View */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {SUB_CREW.map((member) => (
                <TeamGridCard key={`subcrew-grid-${member.id}`} member={member} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Team;
