import React from 'react';
import { TRACKS } from '../data/eventData';
import { Brain, Server, ShieldCheck, Zap } from 'lucide-react';
import Text3DFlip from '@/registry/magicui/text-3d-flip';

export const Tracks: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Brain':
        return <Brain className="w-6 h-6 text-[#D946EF]" />;
      case 'Server':
        return <Server className="w-6 h-6 text-[#22D3EE]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#22C55E]" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-[#FACC15]" />;
      default:
        return <Brain className="w-6 h-6 text-[#D946EF]" />;
    }
  };

  return (
    <section className="py-24 relative overflow-hidden px-4" id="tracks">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with [ 02 ] Index */}
        <div className="border-b border-neutral-200 pb-6 mb-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div className="flex items-baseline gap-6">
            <span className="text-[#D946EF] font-mono text-sm tracking-widest">[ 02 ]</span>
            <div>
              <p className="text-[#D946EF] text-xs font-bold uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
                <span className="w-6 h-[1px] bg-[#D946EF]" />
                Learning Tracks
              </p>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#171717] tracking-tight leading-tight">
                <Text3DFlip
                  textClassName="text-[#171717]"
                  flipTextClassName="text-[#D946EF]"
                  rotateDirection="top"
                  staggerDuration={0.02}
                >
                  Engineered for every stage of builder.
                </Text3DFlip>
              </h2>
            </div>
          </div>
          <p className="text-neutral-500 text-sm max-w-sm font-mono">
            4 SPECIALIZED DOMAINS · 12+ HANDS-ON DEMOS
          </p>
        </div>

        {/* Tracks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRACKS.map((track) => (
            <div
              key={track.num}
              className="group relative rounded-2xl p-7 bg-white border border-neutral-200 hover:border-[#D946EF]/50 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between shadow-xs hover:shadow-[0_14px_32px_rgba(217,70,239,0.12)]"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-serif italic text-4xl text-[#D946EF]/70 group-hover:text-[#D946EF] transition-colors leading-none">
                    {track.num}
                  </span>
                  <div className="p-2.5 rounded-xl bg-neutral-100 border border-neutral-200 group-hover:border-[#D946EF]/30 transition-colors">
                    {getIcon(track.icon)}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#171717] mb-3 group-hover:text-[#D946EF] transition-colors">
                  {track.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                  {track.description}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-100 flex flex-wrap gap-1.5">
                {track.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-neutral-100 text-neutral-700 border border-neutral-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
