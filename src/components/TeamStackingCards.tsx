import React from 'react';
import StackingCards, { StackingCardItem } from './ui/stacking-cards';
import type { TeamOrganizer } from './FannedCardDeck';
import { ArrowUpRight, ShieldCheck, Sparkles, MapPin } from 'lucide-react';

const LinkedInIcon: React.FC<{ className?: string }> = ({ className = 'w-3.5 h-3.5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.6 1.6 0 0 0 1.6-1.6 1.6 1.6 0 0 0-3.2 0 1.6 1.6 0 0 0 1.6 1.6m1.4 9.74v-8.37H5.06v8.37z" />
  </svg>
);

interface TeamStackingCardsProps {
  members: TeamOrganizer[];
}

export const TeamStackingCards: React.FC<TeamStackingCardsProps> = ({ members }) => {
  const handleJumpToCard = (id: string) => {
    const el = document.getElementById(`card-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="w-full relative">
      {/* Quick Jump Navigator Strip */}
      <div className="mb-8 flex items-center justify-center flex-wrap gap-2 px-2">
        <span className="text-[11px] font-mono text-slate-400 uppercase tracking-widest mr-2 hidden sm:inline">
          Fast Jump:
        </span>
        {members.map((member, idx) => (
          <button
            key={member.id}
            type="button"
            onClick={() => handleJumpToCard(member.id)}
            className="px-2.5 py-1 rounded-full text-[11px] font-mono border transition-all duration-200 hover:scale-105 cursor-pointer bg-[var(--theme-surface,#1E1E1E)] border-[var(--theme-border,#3E3E3E)] text-slate-300 hover:text-white"
            style={{
              borderColor: `${member.accentColor}40`,
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full inline-block mr-1.5"
              style={{ backgroundColor: member.accentColor }}
            />
            <span>0{idx + 1} {member.name.split(' ')[0]}</span>
          </button>
        ))}
      </div>

      {/* 60FPS Kinetic Stacking Cards Deck */}
      <StackingCards
        totalCards={members.length}
        scaleMultiplier={0.032}
        className="space-y-6 sm:space-y-8 pb-16"
      >
        {members.map((member, index) => {
          return (
            <StackingCardItem
              key={member.id}
              index={index}
              id={`card-${member.id}`}
              className="w-full max-w-4xl mx-auto"
            >
              <div
                className="relative rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-9 overflow-hidden bg-[var(--theme-surface,#1E1E1E)] border-2 transition-all duration-300 group shadow-2xl"
                style={{
                  borderColor: member.accentColor,
                  boxShadow: `0 0 24px ${member.accentColor}22, 0 20px 40px -15px rgba(0, 0, 0, 0.7)`,
                }}
              >
                {/* Background Corner Glow */}
                <div
                  className="absolute -right-20 -top-20 w-64 h-64 rounded-full opacity-20 blur-3xl pointer-events-none transition-opacity duration-500"
                  style={{ backgroundColor: member.accentColor }}
                />

                {/* Subtle Watermark Logo */}
                <div className="absolute -right-6 -bottom-6 w-44 h-44 opacity-[0.04] pointer-events-none select-none">
                  <img
                    src="/AWS_SBG.png"
                    alt="AWS SBG"
                    className="w-full h-full object-contain filter grayscale invert"
                    loading="lazy"
                  />
                </div>

                {/* Top Tab Bar of the Stacking Pass */}
                <div className="flex items-center justify-between pb-4 sm:pb-5 border-b border-[var(--theme-border,#3E3E3E)] mb-6 relative z-10">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span
                      className="text-xs font-mono font-black px-2.5 py-0.5 rounded"
                      style={{
                        backgroundColor: `${member.accentColor}20`,
                        color: member.accentColor,
                        border: `1px solid ${member.accentColor}40`,
                      }}
                    >
                      {member.code}
                    </span>
                    <span
                      className="text-[11px] sm:text-xs font-mono uppercase tracking-wider font-semibold px-2.5 py-0.5 rounded-full"
                      style={{
                        backgroundColor: 'var(--theme-surface-elevated, #303030)',
                        color: '#E2E8F0',
                        border: '1px solid var(--theme-border, #3E3E3E)',
                      }}
                    >
                      {member.badge}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: member.accentColor }} />
                    <span className="text-[10px] sm:text-xs font-mono text-slate-400 uppercase tracking-widest hidden xs:inline">
                      AWS SBG RISU
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-300 ml-2">
                      [ 0{index + 1} / 0{members.length} ]
                    </span>
                  </div>
                </div>

                {/* Main Pass Content: 2-Column Responsive Split */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start relative z-10">
                  {/* Left Column: Portrait, Identity & Primary Links (5 cols) */}
                  <div className="md:col-span-5 flex flex-col items-center sm:items-start text-center sm:text-left gap-4">
                    <div className="relative">
                      {/* Avatar container */}
                      <div
                        className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-2xl overflow-hidden border-2 flex items-center justify-center shadow-lg relative bg-[var(--theme-surface-elevated,#303030)]"
                        style={{
                          borderColor: member.accentColor,
                          boxShadow: `0 0 18px ${member.accentColor}30`,
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
                            className="font-black text-3xl sm:text-4xl"
                            style={{
                              fontFamily: "'Space Grotesk', -apple-system, sans-serif",
                              color: member.accentColor,
                            }}
                          >
                            {member.initials}
                          </span>
                        )}

                        {/* Top spark pip */}
                        <span
                          className="absolute -top-1 -right-1 w-4 h-4 rounded-full border-2 border-[var(--theme-surface,#1E1E1E)] flex items-center justify-center z-20"
                          style={{ backgroundColor: member.accentColor }}
                        >
                          <Sparkles className="w-2 h-2 text-black" />
                        </span>
                      </div>
                    </div>

                    <div>
                      <h3
                        className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight"
                        style={{ fontFamily: "'Space Grotesk', -apple-system, sans-serif" }}
                      >
                        {member.name}
                      </h3>
                      <p
                        className="text-xs sm:text-sm font-semibold mt-1"
                        style={{ color: member.accentColor }}
                      >
                        {member.role}
                      </p>
                      <p className="text-xs text-slate-400 font-mono mt-0.5">
                        {member.title}
                      </p>
                    </div>

                    {/* Verified Builder Status */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold text-emerald-400 bg-emerald-950/40 border border-emerald-500/30">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>OFFICIAL SCD 2026 ORGANIZER</span>
                    </div>

                    {/* Direct LinkedIn Connect Button */}
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl jitter-btn-base jitter-btn-dark text-xs font-bold text-white border border-[var(--theme-border,#3E3E3E)] hover:border-slate-400 transition-all cursor-pointer shadow-sm group/btn"
                    >
                      <LinkedInIcon className="w-3.5 h-3.5 fill-current text-[#42B4FF]" />
                      <span>Connect On LinkedIn</span>
                      <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>

                  {/* Right Column: Narrative, Tagline, Bio & Scope (7 cols) */}
                  <div className="md:col-span-7 flex flex-col justify-between h-full gap-5">
                    <div>
                      <span
                        className="text-[10px] font-mono uppercase tracking-widest font-bold block mb-1.5"
                        style={{ color: member.accentColor }}
                      >
                        LEADERSHIP FOCUS
                      </span>
                      <p className="text-base sm:text-lg font-semibold text-slate-100 leading-snug mb-3">
                        "{member.tagline}"
                      </p>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                        {member.bio}
                      </p>
                    </div>

                    {/* Scope Chips */}
                    <div>
                      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block mb-2">
                        Area of Responsibility
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {member.scope.map((tag) => (
                          <span
                            key={tag}
                            className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-[var(--theme-surface-elevated,#303030)] text-slate-200 border border-[var(--theme-border,#3E3E3E)] hover:border-slate-500 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Hardware Telemetry Bottom Bar */}
                    <div className="pt-4 border-t border-[var(--theme-border,#3E3E3E)] flex items-center justify-between text-[10px] font-mono text-slate-400">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#AD5CFF] shrink-0" />
                        <span>RISU Bhilai · Central India</span>
                      </span>
                      <span className="text-slate-500 hidden sm:inline">
                        21 October 2026
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </StackingCardItem>
          );
        })}
      </StackingCards>
    </div>
  );
};

export default TeamStackingCards;
