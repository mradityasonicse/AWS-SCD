import React from 'react';
import { EVENT_STATS } from '../data/eventData';
import { StaggerContainer, StaggerItem, AnimatedCounter } from '@/components/ui/motion-primitives';

export const ImpactStats: React.FC = () => {
  return (
    <section className="py-12 border-y border-[#232F3E] bg-[#131921]/90 backdrop-blur-md relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FF9900]/05 via-transparent to-[#00A4E4]/05 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 items-center">
          {EVENT_STATS.map((stat, idx) => (
            <StaggerItem
              key={idx}
              className="flex flex-col items-center text-center relative group p-3 rounded-2xl transition-all duration-300 hover:bg-white/[0.02]"
            >
              <span className="text-4xl sm:text-6xl md:text-7xl font-black font-mono tracking-tight bg-gradient-to-b from-white via-slate-200 to-[#FF9900] bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                <AnimatedCounter value={stat.value} duration={1.6 + idx * 0.2} />
              </span>
              <span className="text-white font-bold text-sm sm:text-base mt-2 group-hover:text-[#FF9900] transition-colors">
                {stat.label}
              </span>
              <span className="text-slate-400 text-xs mt-0.5 font-mono">
                {stat.helper}
              </span>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default ImpactStats;
