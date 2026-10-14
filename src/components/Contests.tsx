import React from 'react';
import { CONTESTS, PRIZES } from '../data/eventData';
import { Trophy, Gift, Smartphone } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem, SpotlightCard } from '@/components/ui/motion-primitives';

export const Contests: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden px-4 sm:px-6" id="contests">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header with [ 06 ] Index */}
        <ScrollReveal>
          <div className="border-b border-[#232F3E] pb-6 mb-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
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
                  Summit Contests
                </p>
                <h2 className="font-heading text-4xl sm:text-6xl md:text-7xl font-normal text-white tracking-wide uppercase leading-none">
                  Play, build, and win big.
                </h2>
              </div>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm max-w-sm font-mono uppercase tracking-wider">
              LIVE AUDITORIUM KAHOOT QUIZ · SWAGS &amp; GADGETS
            </p>
          </div>
        </ScrollReveal>

        {/* Contest Cards Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16" staggerDelay={0.1}>
          {CONTESTS.map((contest, cIdx) => {
            const contestColors = [
              'var(--theme-accent, #AD5CFF)',
              '#42B4FF',
            ];
            const cColor = contestColors[cIdx % contestColors.length];

            return (
              <StaggerItem key={contest.id}>
                <SpotlightCard
                  className={`h-full p-8 sm:p-9 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 relative overflow-hidden ${
                    contest.featured
                      ? 'border-2 shadow-[0_20px_50px_rgba(0,0,0,0.4)]'
                      : 'border border-[#232F3E] shadow-xl'
                  }`}
                  style={{
                    borderColor: contest.featured ? cColor : undefined,
                  }}
                >
                  {/* Top highlight bar */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px] opacity-75"
                    style={{ backgroundColor: cColor }}
                  />

                  <div>
                    <div className="flex items-center justify-between gap-2 mb-6">
                      <span
                        className="text-xs font-mono font-extrabold uppercase tracking-widest"
                        style={{ color: cColor }}
                      >
                        {contest.tag}
                      </span>
                      <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-[#161E2D] border border-[#232F3E] text-slate-300 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: cColor }} />
                        {contest.pill}
                      </span>
                    </div>

                    <h3 className="text-2xl font-black text-white mb-6">
                      {contest.title}
                    </h3>

                    <ol className="flex flex-col gap-3.5 mb-6">
                      {contest.steps.map((step, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-3 text-sm text-slate-300">
                          <span
                            className="font-mono text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 border"
                            style={{
                              color: cColor,
                              backgroundColor: `color-mix(in srgb, ${cColor} 12%, transparent)`,
                              borderColor: `color-mix(in srgb, ${cColor} 30%, transparent)`,
                            }}
                          >
                            {sIdx + 1}
                          </span>
                          <span className="leading-relaxed">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div
                    className="pt-4 border-t border-[#232F3E] flex items-center gap-2 text-xs font-mono"
                    style={{ color: cColor }}
                  >
                    <Smartphone className="w-4 h-4" />
                    <span>Runs live via smartphone in the RISU auditorium</span>
                  </div>
                </SpotlightCard>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Prizes Row */}
        <div>
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-8">
              <Trophy className="w-5 h-5 text-[var(--theme-accent,#AD5CFF)]" />
              <h3 className="text-lg font-extrabold uppercase tracking-wider text-white">
                Summit Hardware &amp; Swag Prizes
              </h3>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-6" staggerDelay={0.08}>
            {PRIZES.map((prize, pIdx) => {
              const rankColors = [
                '#FF9900',                      // 1st: Gold / AWS Orange
                'var(--theme-accent, #AD5CFF)', // 2nd: Electric Purple
                '#42B4FF',                      // 3rd: Cloud Blue
              ];
              const rColor = rankColors[pIdx % rankColors.length];

              return (
                <StaggerItem key={pIdx}>
                  <SpotlightCard className="h-full p-6 flex flex-col justify-between shadow-md transition-all duration-300 hover:-translate-y-1.5 relative overflow-hidden">
                    {/* Top color bar */}
                    <div
                      className="absolute top-0 left-0 right-0 h-[2px] opacity-75"
                      style={{ backgroundColor: rColor }}
                    />

                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span
                          className="font-mono font-black text-2xl sm:text-3xl leading-none"
                          style={{ color: rColor }}
                        >
                          {prize.rank}
                        </span>
                        <span
                          className="text-xs font-mono font-bold px-2.5 py-1 rounded-full border"
                          style={{
                            color: rColor,
                            backgroundColor: `color-mix(in srgb, ${rColor} 12%, transparent)`,
                            borderColor: `color-mix(in srgb, ${rColor} 30%, transparent)`,
                          }}
                        >
                          {prize.worth}
                        </span>
                      </div>

                      <h4 className="text-lg font-bold text-white mb-2 transition-colors">
                        {prize.name}
                      </h4>
                      <p className="text-slate-400 text-xs leading-relaxed mb-4">
                        {prize.item}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#232F3E] flex items-center gap-2 text-[11px] text-slate-400 font-mono">
                      <Gift className="w-3.5 h-3.5" style={{ color: rColor }} />
                      <span>Presented on stage during closing ceremony</span>
                    </div>
                  </SpotlightCard>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

export default Contests;
