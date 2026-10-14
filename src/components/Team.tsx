import React from 'react';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';
import { FannedCardDeck, ORGANIZER_TEAM } from './FannedCardDeck';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/motion-primitives';

const LinkedInIcon: React.FC<{ className?: string }> = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.6 1.6 0 0 0 1.6-1.6 1.6 1.6 0 0 0-3.2 0 1.6 1.6 0 0 0 1.6 1.6m1.4 9.74v-8.37H5.06v8.37z" />
  </svg>
);

export const Team: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden px-4 sm:px-6" id="team">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header with [ 08 ] Index */}
        <ScrollReveal>
          <div className="border-b border-[#232F3E] pb-6 mb-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
            <div className="flex items-baseline gap-4 sm:gap-6">
              <span
                className="font-mono text-sm tracking-widest font-bold whitespace-nowrap shrink-0"
                style={{ color: 'var(--theme-accent, #AD5CFF)' }}
              >
                [ 08 ]
              </span>
              <div>
                <p
                  className="text-xs font-bold uppercase tracking-[0.2em] mb-2 flex items-center gap-2"
                  style={{ color: 'var(--theme-accent, #AD5CFF)' }}
                >
                  <span className="w-6 h-[1px]" style={{ backgroundColor: 'var(--theme-accent, #AD5CFF)' }} />
                  Core Team
                </p>
                <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.12]">
                  The crew behind the summit.
                </h2>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm max-w-sm font-mono uppercase tracking-wider">
              AWS SBG LEADERSHIP · STUDENT VOLUNTEERS · FACULTY MENTORS
            </p>
          </div>
        </ScrollReveal>

        {/* Featured Interactive Fanned Card Deck Carousel */}
        <ScrollReveal delay={0.1}>
          <div className="mb-20">
            <FannedCardDeck />
          </div>
        </ScrollReveal>

        {/* Core Organizers Roster Grid */}
        <div className="border-t border-[#232F3E] pt-12">
          <ScrollReveal>
            <div className="flex items-center justify-between mb-8">
              <h3
                className="text-sm font-mono font-bold uppercase tracking-widest flex items-center gap-2"
                style={{ color: 'var(--theme-accent, #AD5CFF)' }}
              >
                <span>// AWS SBG RISU STUDENT LEADERSHIP &amp; MENTORS</span>
              </h3>
              <span className="text-xs font-mono text-slate-500">
                [ 0{ORGANIZER_TEAM.length} MEMBERS ]
              </span>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
            {ORGANIZER_TEAM.map((member) => (
              <StaggerItem key={member.id}>
                <div className="bg-[#101622] hover:bg-[#131C2B] border border-[#232F3E] hover:border-[#AD5CFF]/60 rounded-2xl p-6 relative overflow-hidden transition-all duration-300 hover:-translate-y-1.5 group flex flex-col justify-between shadow-lg h-full">
                  {/* Subtle top lightbar on hover */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#AD5CFF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div>
                    {/* Header bar: Code + Verified */}
                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#232F3E]/80">
                      <span className="text-[11px] font-mono font-bold tracking-wider text-[#AD5CFF]">
                        [ {member.code} ]
                      </span>
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full font-semibold">
                        <ShieldCheck className="w-3 h-3" />
                        VERIFIED
                      </span>
                    </div>

                    {/* Central Identity Crest */}
                    <div className="w-20 h-20 mx-auto rounded-2xl bg-[#16202E] border border-[#232F3E] group-hover:border-[#AD5CFF]/60 p-1 flex items-center justify-center mb-4 transition-all duration-300 shadow-inner relative">
                      {/* Background Watermark Crest */}
                      <div className="absolute -right-2 -bottom-2 w-14 h-14 opacity-[0.06] pointer-events-none select-none">
                        <img
                          src="/AWS_SBG.png"
                          alt="AWS SBG"
                          className="w-full h-full object-contain filter grayscale invert"
                        />
                      </div>
                      <span className="font-mono font-black text-2xl text-white group-hover:text-[#AD5CFF] transition-colors">
                        {member.initials}
                      </span>
                      {/* Active status pip */}
                      <span
                        className="absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 border-[#101622]"
                        style={{ backgroundColor: member.accentColor || '#AD5CFF' }}
                      />
                    </div>

                    {/* Role & Name */}
                    <div className="text-center mb-3">
                      <span className="inline-block text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-[#AD5CFF]/10 text-[#AD5CFF] border border-[#AD5CFF]/25 mb-2">
                        {member.badge}
                      </span>
                      <h4 className="text-xl font-black text-white group-hover:text-white transition-colors mb-1">
                        {member.name}
                      </h4>
                      <p className="text-xs text-slate-400 font-medium mb-3">
                        {member.title}
                      </p>
                      <p className="text-xs text-slate-300 leading-relaxed line-clamp-2 px-1 mb-4">
                        {member.tagline}
                      </p>
                    </div>

                    {/* Scope domain tags */}
                    <div className="flex flex-wrap items-center justify-center gap-1.5 mb-6">
                      {member.scope.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono text-slate-400 bg-[#161F2E] border border-[#232F3E] group-hover:border-slate-700 px-2.5 py-0.5 rounded-md transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* LinkedIn Connect CTA Button */}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 rounded-xl bg-[#16202E] group-hover:bg-[#AD5CFF] text-slate-300 group-hover:text-[#0A0D14] border border-[#232F3E] group-hover:border-[#AD5CFF] transition-all duration-300 text-xs font-bold flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                    >
                      <LinkedInIcon className="w-3.5 h-3.5 fill-current" />
                      <span>Connect on LinkedIn</span>
                      <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                    </a>
                  )}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

export default Team;
