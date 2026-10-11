import React from 'react';
import { EVENT_STATS } from '../data/eventData';

export const ImpactStats: React.FC = () => {
  return (
    <section className="py-12 border-y border-neutral-200 bg-white/90 backdrop-blur-md relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 items-center">
          {EVENT_STATS.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center relative group">
              <span className="text-4xl sm:text-6xl md:text-7xl font-black font-mono tracking-tight bg-gradient-to-b from-[#171717] via-neutral-800 to-[#D946EF] bg-clip-text text-transparent group-hover:scale-105 transition-transform">
                {stat.value}
              </span>
              <span className="text-[#171717] font-bold text-sm sm:text-base mt-2">
                {stat.label}
              </span>
              <span className="text-neutral-500 text-xs mt-0.5">
                {stat.helper}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
