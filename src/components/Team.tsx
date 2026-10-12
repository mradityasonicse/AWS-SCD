import React from 'react';
import { ORGANIZERS } from '../data/eventData';
import { ArrowUpRight } from 'lucide-react';
import { FannedCardDeck } from './FannedCardDeck';
import { ScrollReveal, StaggerContainer, StaggerItem, SpotlightCard } from '@/components/ui/motion-primitives';

export const Team: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden px-4 sm:px-6" id="team">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#FF9900]/06 rounded-full blur-[190px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header with [ 08 ] Index */}
        <ScrollReveal>
          <div className="border-b border-[#232F3E] pb-6 mb-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
            <div className="flex items-baseline gap-4 sm:gap-6">
              <span className="text-[#FF9900] font-mono text-sm tracking-widest font-bold whitespace-nowrap shrink-0">
                [ 08 ]
              </span>
              <div>
                <p className="text-[#FF9900] text-xs font-bold uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
                  <span className="w-6 h-[1px] bg-[#FF9900]" />
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
            <h3 className="text-sm font-mono font-bold uppercase tracking-widest text-[#FF9900] mb-8">
              // AWS SBG RISU STUDENT LEADERSHIP &amp; MENTORS
            </h3>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
            {ORGANIZERS.map((member) => (
              <StaggerItem key={member.id}>
                <SpotlightCard className="p-6 flex flex-col items-center text-center shadow-md transition-all duration-300 hover:-translate-y-2">
                  {/* Photo / Crest Container */}
                  <div className="w-28 h-28 rounded-2xl bg-[#161E2D] border border-[#232F3E] p-4 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform shadow-xs relative">
                    <img
                      src={member.image || '/risu-logo.png'}
                      alt={member.name}
                      className="max-h-16 w-auto object-contain"
                    />
                  </div>

                  <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-[#FF9900] mb-1">
                    {member.role}
                  </span>

                  <h4 className="text-xl font-black text-white mb-1 group-hover:text-[#FF9900] transition-colors">
                    {member.name}
                  </h4>

                  <p className="text-xs text-slate-400 mb-5">
                    {member.title}
                  </p>

                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#161E2D] hover:bg-[#FF9900] text-slate-300 hover:text-[#0B0F17] hover:font-black border border-[#232F3E] hover:border-[#FF9900] transition-all text-xs font-bold cursor-pointer"
                    >
                      <span>Connect on LinkedIn</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </SpotlightCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

export default Team;
