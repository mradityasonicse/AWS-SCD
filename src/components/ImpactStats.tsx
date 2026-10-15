import React from 'react';
import { EVENT_STATS } from '../data/eventData';
import { StaggerContainer, StaggerItem, AnimatedCounter } from '@/components/ui/motion-primitives';

export const ImpactStats: React.FC = () => {
  return (
    <section className="py-12 border-y border-[var(--theme-border,#3E3E3E)] bg-[var(--theme-surface,#1E1E1E)] relative">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 items-center">
          {EVENT_STATS.map((stat, idx) => {
            const statColors = [
              '#FF9900',                     // AWS Signature Orange
              'var(--theme-accent, #AD5CFF)',// Electric Purple
              '#42B4FF',                     // Cloud Blue
              '#00E582',                     // Cyber Green
            ];
            const color = statColors[idx % statColors.length];

            return (
              <StaggerItem
                key={idx}
                className="flex flex-col items-center text-center relative group p-4 rounded-xl border border-transparent hover:border-[var(--theme-border,#3E3E3E)] transition-colors duration-200"
              >
                <span
                  className="text-4xl sm:text-6xl md:text-7xl font-normal font-heading tracking-tight leading-none"
                  style={{ color }}
                >
                  <AnimatedCounter value={stat.value} duration={1.2 + idx * 0.15} />
                </span>
                <span className="text-slate-100 font-bold text-sm sm:text-base mt-2 group-hover:text-white transition-colors">
                  {stat.label}
                </span>
                <span className="text-slate-400 text-xs mt-1 font-mono">
                  {stat.helper}
                </span>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default ImpactStats;
