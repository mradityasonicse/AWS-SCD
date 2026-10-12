import React from 'react';
import { TRACKS } from '../data/eventData';
import { Brain, Server, ShieldCheck, Zap } from 'lucide-react';
import Text3DFlip from '@/registry/magicui/text-3d-flip';

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
    <section className="py-24 relative overflow-hidden px-4" id="tracks">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with [ 02 ] Index */}
        <div className="border-b border-[#232F3E] pb-6 mb-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div className="flex items-baseline gap-6">
            <span className="text-[#FF9900] font-mono text-sm tracking-widest">[ 02 ]</span>
            <div>
              <p className="text-[#FF9900] text-xs font-bold uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
                <span className="w-6 h-[1px] bg-[#FF9900]" />
                Learning Tracks
              </p>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
                <Text3DFlip
                  textClassName="text-white"
                  flipTextClassName="text-[#FF9900]"
                  rotateDirection="top"
                  staggerDuration={0.02}
                >
                  Engineered for every stage of builder.
                </Text3DFlip>
              </h2>
            </div>
          </div>
          <p className="text-slate-400 text-sm max-w-sm font-mono">
            4 SPECIALIZED DOMAINS · 12+ HANDS-ON DEMOS
          </p>
        </div>

        {/* Tracks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRACKS.map((track) => (
            <div
              key={track.num}
              className="group relative rounded-2xl p-7 bg-[#131921] border border-[#232F3E] hover:border-[#FF9900]/50 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between shadow-md hover:shadow-[0_14px_32px_rgba(255,153,0,0.15)]"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-serif italic text-4xl text-[#FF9900]/70 group-hover:text-[#FF9900] transition-colors leading-none">
                    {track.num}
                  </span>
                  <div className="p-2.5 rounded-xl bg-[#161E2D] border border-[#232F3E] group-hover:border-[#FF9900]/30 transition-colors">
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
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#161E2D] text-slate-300 border border-[#232F3E]"
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
