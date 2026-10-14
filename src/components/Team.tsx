import React from 'react';
import { FannedCardDeck } from './FannedCardDeck';
import { ScrollReveal } from '@/components/ui/motion-primitives';

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
                <h2 className="font-heading text-4xl sm:text-6xl md:text-7xl font-normal text-white tracking-wide uppercase leading-none">
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
          <div className="overflow-x-clip max-w-full">
            <FannedCardDeck />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Team;
