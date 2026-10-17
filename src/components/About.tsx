import React from 'react';
import { PILLARS } from '../data/eventData';
import { ScrollReveal, StaggerContainer, StaggerItem, SpotlightCard } from '@/components/ui/motion-primitives';

export const About: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden px-4 sm:px-6" id="about">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Unified Section Header Lockup */}
        <ScrollReveal>
          <div className="mb-14">
            {/* Integrated Marker, Divider Line, and Heading Row */}
            <div className="flex items-center gap-3 sm:gap-4 w-full">
              <span
                className="inline-flex items-center font-mono text-xs sm:text-sm font-bold tracking-wider shrink-0 select-none whitespace-nowrap"
                style={{ color: 'var(--theme-accent, #AD5CFF)' }}
              >
                [ 01 ]
              </span>
              <span
                className="w-8 sm:w-12 h-px shrink-0"
                style={{ backgroundColor: 'var(--theme-accent, #AD5CFF)' }}
              />
              <span
                className="text-xs sm:text-sm font-mono font-bold tracking-[0.2em] uppercase shrink-0"
                style={{ color: 'var(--theme-accent, #AD5CFF)' }}
              >
                WHAT IS SCD
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-[var(--theme-border,#383336)] via-[var(--theme-border,#383336)]/50 to-transparent min-w-[20px]" />
              <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-mono tracking-widest text-slate-400 uppercase shrink-0">
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: 'var(--theme-accent, #AD5CFF)' }}
                />
                HOSTED AT RUNGTA INTERNATIONAL SKILLS UNIVERSITY · BHILAI
              </span>
            </div>

            {/* Main Title Row with Vertical Balance */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pt-5 pb-8 border-b border-[var(--theme-border,#383336)]">
              <div className="max-w-3xl overflow-visible pb-1">
                <h2 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-normal text-white tracking-wide uppercase leading-none">
                  One day to level up as a builder.
                </h2>
              </div>
              <p className="text-slate-400 text-xs sm:text-sm font-mono max-w-sm leading-relaxed lg:text-right shrink-0">
                CENTRAL INDIA'S PREMIER CLOUD SUMMIT FOR NEXT-GEN DEVELOPERS &amp; ARCHITECTS
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Lead Narrative */}
        <ScrollReveal delay={0.1}>
          <p className="text-white text-lg sm:text-2xl font-semibold leading-relaxed max-w-4xl mb-12">
            Student Community Day 2026 brings together <strong style={{ color: 'var(--theme-accent, #AD5CFF)' }}>550+ students</strong>, AWS Community leaders, AWS DevRel leadership, and the next wave of cloud architects for one full day of high-signal learning at <strong className="text-slate-100">Rungta International Skills University</strong>.
          </p>
        </ScrollReveal>

        {/* Three Pillars in 3-Column Responsive Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.1}>
          {PILLARS.map((pillar, pIdx) => {
            const pillarColors = [
              '#42B4FF', // Cloud Blue (Learn)
              'var(--theme-accent, #AD5CFF)', // Electric Purple (Connect)
              '#00E582', // Cyber Green (Belong)
            ];
            const pColor = pillarColors[pIdx % pillarColors.length];

            return (
              <StaggerItem key={pillar.num}>
                <SpotlightCard
                  borderColor={pColor + '40'}
                  className="p-7 sm:p-8 h-full transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-md bg-[var(--theme-surface,#252324)] border-[var(--theme-border,#383336)]"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className="font-mono font-black text-3xl sm:text-4xl leading-none pt-1"
                        style={{ color: pColor }}
                      >
                        {pillar.num}
                      </span>
                      <span
                        className="w-2 h-2 rounded-full inline-block"
                        style={{ backgroundColor: pColor }}
                      />
                    </div>
                    <h3 className="text-white font-bold text-xl mb-2 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed font-sans">
                      {pillar.desc}
                    </p>
                  </div>
                </SpotlightCard>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default About;
