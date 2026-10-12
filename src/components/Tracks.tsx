import React from 'react';
import { TRACKS } from '../data/eventData';
import { Brain, Server, ShieldCheck, Zap } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem, SpotlightCard } from '@/components/ui/motion-primitives';

export const Tracks: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Brain':
        return <Brain className="w-6 h-6 text-[#FF9900]" />;
      case 'Server':
        return <Server className="w-6 h-6 text-[#38BDF8]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#10B981]" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-[#FFD814]" />;
      default:
        return <Brain className="w-6 h-6 text-[#FF9900]" />;
    }
  };

  return (
    <section className="py-24 relative overflow-hidden px-4 sm:px-6" id="tracks">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#00A4E4]/05 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header with [ 02 ] Index */}
        <ScrollReveal>
          <div className="border-b border-[#232F3E] pb-6 mb-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
            <div className="flex items-baseline gap-4 sm:gap-6">
              <span className="text-[#FF9900] font-mono text-sm tracking-widest font-bold whitespace-nowrap shrink-0">
                [ 02 ]
              </span>
              <div>
                <p className="text-[#FF9900] text-xs font-bold uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
                  <span className="w-6 h-[1px] bg-[#FF9900]" />
                  Learning Tracks
                </p>
                <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.12]">
                  Engineered for every stage of builder.
                </h2>
              </div>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm max-w-sm font-mono uppercase tracking-wider">
              4 SPECIALIZED DOMAINS · 12+ HANDS-ON DEMOS
            </p>
          </div>
        </ScrollReveal>

        {/* Tracks Grid with Stagger & SpotlightCards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.08}>
          {TRACKS.map((track) => (
            <StaggerItem key={track.num}>
              <SpotlightCard className="h-full p-7 flex flex-col justify-between shadow-md transition-all duration-300 hover:-translate-y-1.5">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono font-black text-3xl text-[#FF9900] group-hover:scale-105 transition-transform leading-none">
                      {track.num}
                    </span>
                    <div className="p-2.5 rounded-xl bg-[#161E2D] border border-[#232F3E] group-hover:border-[#FF9900]/30 transition-colors group-hover:scale-110">
                      {getIcon(track.icon)}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FF9900] transition-colors">
                    {track.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {track.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#232F3E] flex flex-wrap gap-1.5">
                  {track.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#161E2D] text-slate-300 border border-[#232F3E] group-hover:border-[#FF9900]/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Tracks;
