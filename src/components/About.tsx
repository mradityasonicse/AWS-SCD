import React from 'react';
import { PILLARS, WHY_ATTEND } from '../data/eventData';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
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
              <div className="h-px flex-1 bg-gradient-to-r from-[#232F3E] via-[#1E293B] to-transparent min-w-[20px]" />
              <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-mono tracking-widest text-slate-400 uppercase shrink-0">
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: 'var(--theme-accent, #AD5CFF)' }}
                />
                HOSTED AT RISU · BHILAI
              </span>
            </div>

            {/* Main Title Row with Vertical Balance */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pt-5 pb-8 border-b border-[#232F3E]">
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

        {/* Grid: Left Narrative & Pillars | Right Why Attend Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <ScrollReveal delay={0.1}>
              <p className="text-white text-lg sm:text-2xl font-semibold leading-relaxed">
                Student Community Day 2026 brings together <strong className="text-[#FF9900]">550+ students</strong>, AWS Community leaders, AWS DevRel leadership, and the next wave of cloud architects for one full day of high-signal learning at <strong className="text-slate-100">Rungta International Skills University</strong>.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                No fluff. No filler talks. Just real keynotes from engineers who build at hyperscale, hands-on architectural clinics on Amazon Bedrock, panel discussions on breaking into global tech, and an authentic community network that continues long after the event concludes.
              </p>
            </ScrollReveal>

            {/* Three Pillars with Staggered SpotlightCards */}
            <StaggerContainer className="flex flex-col gap-4 mt-4" staggerDelay={0.1}>
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
                      className="p-5 sm:p-6 transition-all duration-300 flex items-start gap-5 hover:translate-x-1 shadow-md bg-[#131922] border-[#232F3E]"
                    >
                      <span
                        className="font-mono font-black text-2xl sm:text-3xl leading-none shrink-0 pt-1 transition-transform group-hover:scale-105"
                        style={{ color: pColor }}
                      >
                        {pillar.num}
                      </span>
                      <div>
                        <h3 className="text-white font-bold text-lg mb-1 transition-colors flex items-center gap-2">
                          <span>{pillar.title}</span>
                          <span
                            className="w-1.5 h-1.5 rounded-full inline-block"
                            style={{ backgroundColor: pColor }}
                          />
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                          {pillar.desc}
                        </p>
                      </div>
                    </SpotlightCard>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>

          {/* Right Column: Why Attend Card (5 cols) */}
          <div className="lg:col-span-5 relative">
            <ScrollReveal delay={0.2}>
              <SpotlightCard className="p-7 sm:p-9 shadow-2xl relative overflow-hidden border-[#232F3E]">
                <div className="relative z-10">
                  <span
                    className="text-xs font-mono font-extrabold tracking-widest uppercase block mb-3"
                    style={{ color: 'var(--theme-accent, #AD5CFF)' }}
                  >
                    WHY ATTEND
                  </span>

                  <h3 className="text-xl sm:text-2xl font-black text-white mb-6">
                    What every attendee walks away with:
                  </h3>

                  <ul className="flex flex-col gap-4 mb-8">
                    {WHY_ATTEND.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                        <CheckCircle2
                          className="w-4 h-4 shrink-0 mt-0.5"
                          style={{ color: 'var(--theme-accent, #AD5CFF)' }}
                        />
                        <div>
                          <strong className="text-white font-bold block">{item.title}</strong>
                          <span className="text-slate-400 text-xs">{item.desc}</span>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#team"
                    className="w-full jitter-btn-base jitter-btn-register cursor-pointer text-sm py-3.5 flex items-center justify-center gap-2 group"
                  >
                    <span>Connect With Student Desk</span>
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </SpotlightCard>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
