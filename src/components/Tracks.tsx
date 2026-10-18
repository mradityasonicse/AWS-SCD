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
        return <Server className="w-6 h-6 text-[#42B4FF]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#00E582]" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-[#AD5CFF]" />;
      default:
        return <Brain className="w-6 h-6 text-[#FF9900]" />;
    }
  };

  return (
    <section className="py-24 relative overflow-hidden px-4 sm:px-6" id="tracks">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header with [ 02 ] Index */}
        <ScrollReveal>
          <div className="border-b border-[var(--theme-border,#383336)] pb-6 mb-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
            <div className="flex items-baseline gap-4 sm:gap-6">
              <span
                className="font-mono text-sm tracking-widest font-bold whitespace-nowrap shrink-0"
                style={{ color: 'var(--theme-accent, #AD5CFF)' }}
              >
                [ 02 ]
              </span>
              <div>
                <p
                  className="text-xs font-bold uppercase tracking-[0.2em] mb-2 flex items-center gap-2"
                  style={{ color: 'var(--theme-accent, #AD5CFF)' }}
                >
                  <span className="w-6 h-[1px]" style={{ backgroundColor: 'var(--theme-accent, #AD5CFF)' }} />
                  Learning Tracks
                </p>
                <h2 className="font-heading text-4xl sm:text-6xl md:text-7xl font-normal text-white tracking-wide uppercase leading-none">
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
          {TRACKS.map((track, tIdx) => {
            const trackColors = [
              { color: '#FF9900', glow: 'rgba(255, 153, 0, 0.25)' },
              { color: '#42B4FF', glow: 'rgba(66, 180, 255, 0.25)' },
              { color: '#00E582', glow: 'rgba(0, 229, 130, 0.25)' },
              { color: 'var(--theme-accent, #AD5CFF)', glow: 'var(--theme-accent-glow, rgba(173, 92, 255, 0.25))' },
            ];
            const cfg = trackColors[tIdx % trackColors.length];

            return (
              <StaggerItem key={track.num}>
                <SpotlightCard
                  spotlightColor={cfg.glow}
                  borderColor={cfg.color + '40'}
                  className="h-full p-7 flex flex-col justify-between shadow-md transition-all duration-300 hover:-translate-y-1.5 bg-[rgba(255,255,255,0.08)] backdrop-blur-[16px] border-white/10 group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span
                        className="font-mono font-black text-3xl group-hover:scale-105 transition-transform leading-none"
                        style={{ color: cfg.color }}
                      >
                        {track.num}
                      </span>
                      <div
                        className="p-2.5 rounded-xl bg-white/10 backdrop-blur-md border transition-all group-hover:scale-110"
                        style={{ borderColor: cfg.color + '40' }}
                      >
                        {getIcon(track.icon)}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 transition-colors">
                      {track.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6 font-sans">
                      {track.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex flex-wrap gap-1.5">
                    {track.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/10 text-slate-300 border border-white/10 group-hover:border-slate-400 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
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

export default Tracks;
