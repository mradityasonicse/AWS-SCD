import React, { useState, useMemo } from 'react';
import {
  CORE_CREW_LEADERSHIP,
  SUB_CREW_CARDS,
  type CoreCrewLeader,
  type SubCrewCard,
} from '@/data/crewCardsData';
import { ScrollReveal } from '@/components/ui/motion-primitives';
import {
  Layers,
  LayoutGrid,
  ArrowUpRight,
  ShieldCheck,
  Search,
  X,
  Download,
  Sparkles,
  Award,
} from 'lucide-react';

const LinkedInIcon: React.FC<{ className?: string }> = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.6 1.6 0 0 0 1.6-1.6 1.6 1.6 0 0 0-3.2 0 1.6 1.6 0 0 0 1.6 1.6m1.4 9.74v-8.37H5.06v8.37z" />
  </svg>
);

// Division 1: Core Crew Member Card (Features the official ID Card Badge)
const CoreCrewLeaderCard: React.FC<{
  leader: CoreCrewLeader;
  onSelect: (item: { name: string; handle: string; role: string; code: string; cardImage: string }) => void;
}> = ({ leader, onSelect }) => {
  return (
    <div
      onClick={() =>
        onSelect({
          name: leader.name,
          handle: leader.handle,
          role: leader.role,
          code: leader.code,
          cardImage: leader.cardImage,
        })
      }
      className="relative rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] backdrop-blur-xl border border-white/10 hover:border-[#AD5CFF]/60 p-5 flex flex-col justify-between transition-all duration-300 ease-out group hover:-translate-y-2 shadow-2xl overflow-hidden cursor-pointer transform-gpu"
      style={{
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.35)',
      }}
    >
      {/* Top Accent Color Line */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px] opacity-80 group-hover:opacity-100 transition-opacity"
        style={{ backgroundColor: leader.accentColor }}
      />
      {/* Background Accent Glow on Hover */}
      <div
        className="absolute -right-12 -top-12 w-32 h-32 rounded-full opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 pointer-events-none"
        style={{ backgroundColor: leader.accentColor }}
      />

      {/* Top Meta Bar */}
      <div className="flex items-center justify-between gap-2 mb-3.5 relative z-10">
        <span
          className="text-[10px] font-mono uppercase tracking-wider font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1.5"
          style={{
            backgroundColor: `${leader.accentColor}18`,
            color: leader.accentColor,
            border: `1px solid ${leader.accentColor}40`,
          }}
        >
          <Award className="w-3 h-3" />
          {leader.badge}
        </span>
        <span className="text-[10px] font-mono font-semibold text-slate-400">
          {leader.handle}
        </span>
      </div>

      {/* Featured ID Card Badge Artwork */}
      <div className="relative aspect-[363/513] w-full rounded-xl overflow-hidden border border-white/10 bg-white/[0.02] shadow-inner mb-4 group-hover:border-[#AD5CFF]/60 transition-colors">
        <img
          src={leader.cardImage}
          alt={`${leader.name} ID Card`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
        {/* Holographic Specular Highlight */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Name and Designation */}
      <div className="mb-3 relative z-10">
        <h4 className="text-lg font-bold text-white tracking-tight truncate group-hover:text-white transition-colors">
          {leader.name}
        </h4>
        <p className="text-xs font-bold truncate mt-0.5" style={{ color: leader.accentColor }}>
          {leader.title}
        </p>
        <p className="text-xs text-slate-300 leading-relaxed mt-2 line-clamp-2">
          {leader.tagline}
        </p>
      </div>

      {/* Scope Chips */}
      <div className="flex flex-wrap gap-1 mb-4 relative z-10">
        {leader.scope.map((tag) => (
          <span
            key={tag}
            className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-slate-300 border border-white/10"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Bottom Bar: Verified + Connect Link */}
      <div className="flex items-center justify-between pt-3 border-t border-white/10 relative z-10">
        <span className="inline-flex items-center gap-1 text-[9px] font-mono text-emerald-400">
          <ShieldCheck className="w-3 h-3 text-emerald-400 shrink-0" />
          VERIFIED CREW
        </span>

        <a
          href={leader.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full text-slate-200 hover:text-white bg-white/10 hover:bg-white/20 border border-white/15 transition-all cursor-pointer"
        >
          <LinkedInIcon className="w-3 h-3 fill-current" />
          <span>Profile</span>
          <ArrowUpRight className="w-3 h-3 stroke-[2.5]" />
        </a>
      </div>
    </div>
  );
};

// Sub-Crew ID Card Component
const SubCrewIdCardBadge: React.FC<{
  member: SubCrewCard;
  onSelect: (item: { name: string; handle: string; role: string; code: string; cardImage: string }) => void;
}> = ({ member, onSelect }) => {
  return (
    <div
      onClick={() =>
        onSelect({
          name: member.name,
          handle: member.handle,
          role: member.role,
          code: member.code,
          cardImage: member.cardImage,
        })
      }
      className="group relative rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] backdrop-blur-xl border border-white/10 hover:border-[#AD5CFF]/60 p-3 flex flex-col transition-all duration-300 ease-out hover:-translate-y-2 shadow-xl overflow-hidden cursor-pointer transform-gpu"
      style={{
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.35)',
      }}
    >
      {/* Top Lanyard Clip Slit Notch */}
      <div className="w-10 h-1.5 rounded-full bg-white/15 mx-auto mb-2 border border-white/10 group-hover:bg-[#AD5CFF]/40 transition-colors" />

      {/* Actual ID Card Graphic */}
      <div className="relative aspect-[363/513] w-full rounded-xl overflow-hidden border border-white/10 bg-white/[0.02] shadow-inner">
        <img
          src={member.cardImage}
          alt={`${member.name} ID Card`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
        {/* Holographic Gloss Sheen on Hover */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Meta Footer */}
      <div className="pt-2.5 px-0.5 flex flex-col justify-between flex-1">
        <div className="flex items-center justify-between gap-1 mb-1">
          <span className="text-[10px] font-mono text-[#42B4FF] font-semibold tracking-wider">
            {member.code}
          </span>
          <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded bg-[#AD5CFF]/15 text-[#AD5CFF] border border-[#AD5CFF]/30">
            {member.handle}
          </span>
        </div>

        <h4 className="text-sm font-bold text-white tracking-tight truncate group-hover:text-[#AD5CFF] transition-colors">
          {member.name}
        </h4>

        <p className="text-[11px] text-slate-400 font-mono truncate mt-0.5">
          {member.role}
        </p>
      </div>
    </div>
  );
};

export const Team: React.FC = () => {
  const [line1Paused, setLine1Paused] = useState(false);
  const [line2Paused, setLine2Paused] = useState(false);
  const [subCrewView, setSubCrewView] = useState<'glider' | 'grid'>('glider');
  const [selectedBadge, setSelectedBadge] = useState<{
    name: string;
    handle: string;
    role: string;
    code: string;
    cardImage: string;
  } | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Split the 32 Sub-Crew cards into 2 lines of 16 cards each
  const line1Cards = useMemo(() => SUB_CREW_CARDS.slice(0, 16), []);
  const line2Cards = useMemo(() => SUB_CREW_CARDS.slice(16, 32), []);

  // Filter cards in grid view
  const filteredCards = useMemo(() => {
    if (!searchQuery.trim()) return SUB_CREW_CARDS;
    const q = searchQuery.toLowerCase();
    return SUB_CREW_CARDS.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.handle.toLowerCase().includes(q) ||
        c.role.toLowerCase().includes(q) ||
        c.code.toLowerCase().includes(q)
    );
  }, [searchQuery]);

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
                CREW MEMBERS (4) · SUB CREW ({SUB_CREW_CARDS.length} ID CARDS)
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Division 1: Crew Members (4 Leaders: Abhishek, Harsh, Aditya Mohan, Yash Raj) */}
        <div className="mb-16 sm:mb-20">
          <div className="flex items-center justify-between gap-3 mb-6 pb-3 border-b border-[#2D2364]/70">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#AD5CFF]/15 text-[#AD5CFF] border border-[#AD5CFF]/35 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#AD5CFF]" />
                CREW MEMBERS · 4 LEADS &amp; ORGANISERS
              </span>
              <h3 className="text-lg sm:text-2xl font-bold text-white tracking-tight">
                Summit Leadership &amp; Directing Organisers
              </h3>
            </div>
            <span className="text-xs font-mono text-slate-400 hidden sm:inline">
              LEAD · CO-LEAD · ORGANISERS
            </span>
          </div>

          {/* 4 Cards Grid Featuring Official ID Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {CORE_CREW_LEADERSHIP.map((leader) => (
              <CoreCrewLeaderCard
                key={leader.id}
                leader={leader}
                onSelect={setSelectedBadge}
              />
            ))}
          </div>
        </div>

        {/* Division 2: Sub Crew (Dual-Line Continuous Gliders: Top L-to-R, Bottom R-to-L) */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-3 border-b border-[#2D2364]/70">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#42B4FF]/15 text-[#42B4FF] border border-[#42B4FF]/35 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#42B4FF]" />
                SUB CREW · {SUB_CREW_CARDS.length} OFFICIAL ID CARDS
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
                <span>2-Line Gliders</span>
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
                <span>All Grid ({SUB_CREW_CARDS.length})</span>
              </button>
            </div>
          </div>

          {subCrewView === 'glider' ? (
            /* 2-Line Animated Runner (Line 1: Left-to-Right, Line 2: Right-to-Left) */
            <div className="relative w-full overflow-hidden py-4 -mx-4 px-4 sm:mx-0 sm:px-0 flex flex-col gap-6">
              {/* Side Gradient Masks */}
              <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-24 bg-gradient-to-r from-transparent via-transparent to-transparent z-20 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-24 bg-gradient-to-l from-transparent via-transparent to-transparent z-20 pointer-events-none" />

              {/* LINE 1: Left to Right */}
              <div>
                <div
                  className="overflow-hidden w-full py-1"
                  onMouseEnter={() => setLine1Paused(true)}
                  onMouseLeave={() => setLine1Paused(false)}
                  onTouchStart={() => setLine1Paused(true)}
                  onTouchEnd={() => setLine1Paused(false)}
                >
                  <div
                    className={`subcrew-slider-track flex gap-4 sm:gap-5 will-change-transform ${
                      line1Paused ? 'is-paused' : ''
                    }`}
                    style={{
                      animationDuration: '50s',
                    }}
                  >
                    {[...line1Cards, ...line1Cards].map((member, idx) => (
                      <div
                        key={`line1-card-${member.id}-${idx}`}
                        className="w-[200px] sm:w-[220px] md:w-[240px] shrink-0"
                      >
                        <SubCrewIdCardBadge member={member} onSelect={setSelectedBadge} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* LINE 2: Right to Left */}
              <div>
                <div
                  className="overflow-hidden w-full py-1"
                  onMouseEnter={() => setLine2Paused(true)}
                  onMouseLeave={() => setLine2Paused(false)}
                  onTouchStart={() => setLine2Paused(true)}
                  onTouchEnd={() => setLine2Paused(false)}
                >
                  <div
                    className={`subcrew-slider-track-reverse flex gap-4 sm:gap-5 will-change-transform ${
                      line2Paused ? 'is-paused' : ''
                    }`}
                    style={{
                      animationDuration: '50s',
                    }}
                  >
                    {[...line2Cards, ...line2Cards].map((member, idx) => (
                      <div
                        key={`line2-card-${member.id}-${idx}`}
                        className="w-[200px] sm:w-[220px] md:w-[240px] shrink-0"
                      >
                        <SubCrewIdCardBadge member={member} onSelect={setSelectedBadge} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Expanded Grid View with Search Filter */
            <div>
              {/* Search & Counter Bar */}
              <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-white/[0.03] backdrop-blur-xl border border-white/10">
                <div className="relative flex-1 max-w-md">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by name, handle, or role..."
                    className="w-full bg-white/[0.04] border border-white/10 rounded-lg pl-10 pr-4 py-2 text-xs font-mono text-white placeholder-slate-400 focus:outline-none focus:border-[#AD5CFF] transition-colors"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <Sparkles className="w-3.5 h-3.5 text-[#AD5CFF]" />
                  <span>
                    Showing {filteredCards.length} of {SUB_CREW_CARDS.length} Sub-Crew Badges
                  </span>
                </div>
              </div>

              {/* Grid of Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
                {filteredCards.map((member) => (
                  <SubCrewIdCardBadge
                    key={`subcrew-grid-${member.id}`}
                    member={member}
                    onSelect={setSelectedBadge}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Lightbox for High-Res ID Card Badge View */}
        {selectedBadge && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200"
            onClick={() => setSelectedBadge(null)}
          >
            <div
              className="relative max-w-sm w-full rounded-2xl bg-[rgba(20,15,35,0.9)] backdrop-blur-2xl border border-white/20 p-6 flex flex-col items-center shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedBadge(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {/* ID Badge Container */}
              <div className="w-full max-w-[280px] rounded-xl overflow-hidden shadow-2xl border-2 border-[#AD5CFF]/40 mb-4 bg-white/[0.02]">
                <img
                  src={selectedBadge.cardImage}
                  alt={`${selectedBadge.name} Summit ID Pass`}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Member Details */}
              <div className="text-center w-full mb-4">
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#AD5CFF]/20 text-[#AD5CFF] border border-[#AD5CFF]/30 inline-block mb-1.5">
                  {selectedBadge.code} · {selectedBadge.handle}
                </span>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {selectedBadge.name}
                </h3>
                <p className="text-xs text-slate-300 font-mono mt-1">
                  {selectedBadge.role}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 w-full">
                <a
                  href={selectedBadge.cardImage}
                  download={`AWS_SCD_ID_${selectedBadge.name.replace(/\s+/g, '_')}.png`}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-[#AD5CFF] hover:bg-[#9333EA] text-white text-xs font-bold transition-colors shadow-lg cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Pass</span>
                </a>
                <button
                  type="button"
                  onClick={() => setSelectedBadge(null)}
                  className="py-2 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 text-xs font-semibold transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Team;
