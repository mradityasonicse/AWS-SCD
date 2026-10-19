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
} from 'lucide-react';

const LinkedInIcon: React.FC<{ className?: string }> = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.6 1.6 0 0 0 1.6-1.6 1.6 1.6 0 0 0-3.2 0 1.6 1.6 0 0 0 1.6 1.6m1.4 9.74v-8.37H5.06v8.37z" />
  </svg>
);

// Division 1: Core Crew Member Card (Features the official Spotlight Poster Artwork)
const CoreCrewLeaderCard: React.FC<{
  leader: CoreCrewLeader;
}> = ({ leader }) => {
  return (
    <div
      className="group relative rounded-2xl bg-[#0D111A] hover:bg-[#121724] border border-white/10 hover:border-[#AD5CFF]/40 p-3 sm:p-3.5 flex flex-col justify-between transition-all duration-300 ease-out hover:-translate-y-1.5 shadow-2xl overflow-hidden transform-gpu select-none hover:shadow-[0_20px_40px_-15px_rgba(173,92,255,0.18)]"
      style={{
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.45)',
      }}
    >
      {/* Featured Official Spotlight Poster Artwork (Exact 3:4 Aspect Ratio of 1080x1440) */}
      <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden border border-white/10 bg-black/40 shadow-inner group-hover:border-white/25 transition-colors">
        <img
          src={leader.cardImage}
          alt={`${leader.name} - ${leader.title}`}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.025]"
          loading="lazy"
          decoding="async"
        />
        {/* Holographic Specular Highlight */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Clean Name, Role Badge & Verified Profile Link */}
      <div className="pt-3 px-1 relative z-10 flex flex-col gap-2.5">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0 flex-1">
            <h4 className="text-sm sm:text-base font-bold text-white tracking-tight leading-snug group-hover:text-[#AD5CFF] transition-colors">
              {leader.name}
            </h4>
            <div className="flex items-center gap-2 mt-1">
              <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono font-semibold uppercase tracking-wider bg-white/[0.06] text-slate-300 border border-white/10 group-hover:border-[#AD5CFF]/30 group-hover:text-[#AD5CFF] transition-colors">
                {leader.title}
              </span>
            </div>
          </div>

          <a
            href={leader.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${leader.name} LinkedIn Profile`}
            className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full text-slate-300 hover:text-white bg-white/[0.05] hover:bg-[#0077B5]/20 border border-white/10 hover:border-[#0077B5]/40 transition-all cursor-pointer shrink-0 group/link active:scale-95 shadow-sm"
          >
            <LinkedInIcon className="w-3.5 h-3.5 fill-[#0077B5] group-hover/link:fill-white transition-colors" />
            <span className="font-mono text-[11px]">Connect</span>
            <ArrowUpRight className="w-3 h-3 stroke-[2] opacity-70 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all" />
          </a>
        </div>
      </div>
    </div>
  );
};

// Sub-Crew ID Card Component
const SubCrewIdCardBadge: React.FC<{
  member: SubCrewCard;
}> = ({ member }) => {
  return (
    <div
      className="group relative rounded-2xl bg-[#0D111A] hover:bg-[#131926] border border-white/10 hover:border-white/25 p-2.5 sm:p-3 flex flex-col transition-all duration-300 ease-out hover:-translate-y-1.5 shadow-xl overflow-hidden transform-gpu select-none"
      style={{
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.35)',
      }}
    >
      {/* Actual ID Card Graphic */}
      <div className="relative aspect-[363/513] w-full rounded-xl overflow-hidden border border-white/10 bg-white/[0.02] shadow-inner group-hover:border-white/20 transition-colors">
        <img
          src={member.cardImage}
          alt={`${member.name} ID Card`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          loading="lazy"
          decoding="async"
        />
        {/* Holographic Gloss Sheen on Hover */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Clean Member Name (No Crew Number, No Description, No Extra Slop) */}
      <div className="pt-2 px-1 text-center">
        <h4 className="text-xs sm:text-sm font-semibold text-white tracking-tight truncate group-hover:text-[#AD5CFF] transition-colors">
          {member.name}
        </h4>
      </div>
    </div>
  );
};

export const Team: React.FC = () => {
  const [line1Paused, setLine1Paused] = useState(false);
  const [line2Paused, setLine2Paused] = useState(false);

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
              CORE MEMBERS (LEAD, CO-LEAD & ORGANIZERS)
            </h3>
          </div>

          {/* 4 Cards Grid Featuring Official ID Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {CORE_CREW_LEADERSHIP.map((leader) => (
              <CoreCrewLeaderCard
                key={leader.id}
                leader={leader}
              />
            ))}
          </div>
        </div>

        {/* Division 2: Sub Crew (Dual-Line Continuous Gliders: Top L-to-R, Bottom R-to-L) */}
        <div>
          <div className="flex items-center justify-between gap-3 mb-6 pb-3 border-b border-white/10">
            <h3 className="text-lg sm:text-2xl font-bold text-white tracking-tight">
              CORE MEMBERS 
            </h3>
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
                      <SubCrewIdCardBadge member={member} />
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
                      <SubCrewIdCardBadge member={member} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
