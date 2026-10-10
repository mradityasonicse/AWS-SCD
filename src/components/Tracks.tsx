import React from 'react';
import { TRACKS } from '../data/eventData';
import { Brain, Server, ShieldCheck, Zap } from 'lucide-react';

export const Tracks: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Brain':
        return <Brain className="w-6 h-6 text-[#ff9900]" />;
      case 'Server':
        return <Server className="w-6 h-6 text-[#38bdf8]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#34d399]" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-[#a855f7]" />;
      default:
        return <Brain className="w-6 h-6 text-[#ff9900]" />;
    }
  };

  return (
    <section className="py-24 relative overflow-hidden px-4" id="tracks">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with [ 02 ] Index */}
        <div className="border-b border-white/10 pb-6 mb-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div className="flex items-baseline gap-6">
            <span className="text-[#ff9900] font-mono text-sm tracking-widest">[ 02 ]</span>
            <div>
              <p className="text-[#ff9900] text-xs font-bold uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
                <span className="w-6 h-[1px] bg-[#ff9900]" />
                Learning Tracks
              </p>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
                Engineered for <span className="font-serif italic font-normal text-[#ffb84d]">every stage</span> of builder.
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
              className="group relative rounded-2xl p-7 bg-gradient-to-b from-[#141c2c]/80 to-[#0c1220]/90 border border-white/10 hover:border-[#ff9900]/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-serif italic text-4xl text-[#ff9900]/70 group-hover:text-[#ff9900] transition-colors leading-none">
                    {track.num}
                  </span>
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:border-[#ff9900]/30 transition-colors">
                    {getIcon(track.icon)}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#ffb84d] transition-colors">
                  {track.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {track.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-wrap gap-1.5">
                {track.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5"
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
