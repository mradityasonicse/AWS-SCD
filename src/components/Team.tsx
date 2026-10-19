import React, { useState, useMemo } from 'react';
import {
  CORE_CREW_LEADERSHIP,
  SUB_CREW_CARDS,
  type CoreCrewLeader,
  type SubCrewCard,
} from '@/data/crewCardsData';
import { ScrollReveal } from '@/components/ui/motion-primitives';
import {
  ArrowUpRight,
  ShieldCheck,
  X,
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
      className="relative rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] backdrop-blur-xl border border-white/10 hover:border-white/25 p-5 flex flex-col justify-between transition-all duration-300 ease-out group hover:-translate-y-1.5 shadow-2xl overflow-hidden cursor-pointer transform-gpu"
      style={{
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.35)',
      }}
    >
      {/* Top Meta Bar */}
      <div className="flex items-center justify-between gap-2 mb-3.5 relative z-10">
        <span className="text-[10px] font-mono uppercase tracking-wider font-semibold px-2.5 py-0.5 rounded-full bg-white/[0.05] text-slate-300 border border-white/10 flex items-center gap-1.5">
          <ShieldCheck className="w-3 h-3 text-slate-400" />
          {leader.title}
        </span>
        <span className="text-[10px] font-mono font-medium text-slate-400">
          {leader.handle}
        </span>
      </div>

      {/* Featured ID Card Badge Artwork */}
      <div className="relative aspect-[363/513] w-full rounded-xl overflow-hidden border border-white/10 bg-white/[0.02] shadow-inner mb-4 group-hover:border-white/25 transition-colors">
        <img
          src={leader.cardImage}
          alt={`${leader.name} ID Card`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          loading="lazy"
        />
        {/* Holographic Specular Highlight */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Name and Title Only (No Description, No Extra Tags) */}
      <div className="mb-4 relative z-10">
        <h4 className="text-base sm:text-lg font-bold text-white tracking-tight truncate">
          {leader.name}
        </h4>
        <p className="text-xs font-mono font-medium text-slate-400 mt-0.5">
          {leader.title}
        </p>
      </div>

      {/* Bottom Bar: Verified + Connect Link */}
      <div className="flex items-center justify-between pt-3 border-t border-white/10 relative z-10">
       

        <a
          href={leader.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full text-slate-300 hover:text-white bg-white/[0.05] hover:bg-white/[0.12] border border-white/10 transition-all cursor-pointer"
        >
          <LinkedInIcon className="w-3 h-3 fill-current" />
          <span>Profile</span>
          <ArrowUpRight className="w-3 h-3 stroke-[2]" />
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
      className="group relative rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] backdrop-blur-xl border border-white/10 hover:border-white/25 p-3 flex flex-col transition-all duration-300 ease-out hover:-translate-y-1.5 shadow-xl overflow-hidden cursor-pointer transform-gpu"
      style={{
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.35)',
      }}
    >
      {/* Top Lanyard Clip Slit Notch */}
      <div className="w-10 h-1.5 rounded-full bg-white/10 mx-auto mb-2 border border-white/10 group-hover:bg-white/20 transition-colors" />

      {/* Actual ID Card Graphic */}
      <div className="relative aspect-[363/513] w-full rounded-xl overflow-hidden border border-white/10 bg-white/[0.02] shadow-inner group-hover:border-white/20 transition-colors">
        <img
          src={member.cardImage}
          alt={`${member.name} ID Card`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          loading="lazy"
        />
        {/* Holographic Gloss Sheen on Hover */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Meta Footer */}
      <div className="pt-2.5 px-0.5 flex flex-col justify-between flex-1">
        <div className="flex items-center justify-between gap-1 mb-1">
          <span className="text-[10px] font-mono text-slate-400 font-medium tracking-wider">
            {member.code}
          </span>
          <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded bg-white/[0.04] text-slate-300 border border-white/10">
            {member.handle}
          </span>
        </div>

        <h4 className="text-sm font-bold text-white tracking-tight truncate group-hover:text-white transition-colors">
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
  const [selectedBadge, setSelectedBadge] = useState<{
    name: string;
    handle: string;
    role: string;
    code: string;
    cardImage: string;
  } | null>(null);

  // Split the 32 Sub-Crew cards into 2 lines of 16 cards each
  const line1Cards = useMemo(() => SUB_CREW_CARDS.slice(0, 16), []);
  const line2Cards = useMemo(() => SUB_CREW_CARDS.slice(16, 32), []);

  return (
    <section className="py-20 sm:py-24 relative overflow-visible px-4 sm:px-6" id="team">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header with [ 06 ] Index */}
        <ScrollReveal>
          <div className="border-b border-white/10 pb-6 mb-12 sm:mb-14 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
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
          </div>
        </ScrollReveal>

        {/* Division 1: Crew Members (4 Leaders: Abhishek, Harsh, Aditya Mohan, Yash Raj) */}
        <div className="mb-16 sm:mb-20">
          <div className="flex items-center justify-between gap-3 mb-6 pb-3 border-b border-white/10">
            <h3 className="text-lg sm:text-2xl font-bold text-white tracking-tight">
              Summit Leadership &amp; Directing Organisers
            </h3>
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
          <div className="flex items-center justify-between gap-3 mb-6 pb-3 border-b border-white/10">
            <h3 className="text-lg sm:text-2xl font-bold text-white tracking-tight">
              Operations, Brand, Logistics &amp; Community Pod
            </h3>
            <span className="text-xs font-mono text-slate-400 hidden sm:inline">
              CONTINUOUS 2-WAY SLIDER
            </span>
          </div>

          {/* 2-Line Animated Runner (Line 1: Left-to-Right, Line 2: Right-to-Left) */}
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
              <div className="w-full max-w-[280px] rounded-xl overflow-hidden shadow-2xl border border-white/15 mb-4 bg-white/[0.02]">
                <img
                  src={selectedBadge.cardImage}
                  alt={`${selectedBadge.name} Summit ID Pass`}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Member Details */}
              <div className="text-center w-full mb-4">
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/[0.05] text-slate-300 border border-white/10 inline-block mb-1.5">
                  {selectedBadge.code} · {selectedBadge.handle}
                </span>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {selectedBadge.name}
                </h3>
                <p className="text-xs text-slate-400 font-mono mt-1">
                  {selectedBadge.role}
                </p>
              </div>

              {/* Action Button: Close */}
              <div className="w-full">
                <button
                  type="button"
                  onClick={() => setSelectedBadge(null)}
                  className="w-full py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-mono font-medium transition-colors cursor-pointer border border-white/10"
                >
                  Close Pass
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
