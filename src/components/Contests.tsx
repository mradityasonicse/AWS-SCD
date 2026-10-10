import React from 'react';
import { CONTESTS, PRIZES } from '../data/eventData';
import { Trophy, Gift, Smartphone } from 'lucide-react';

export const Contests: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden px-4" id="contests">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with [ 06 ] Index */}
        <div className="border-b border-white/10 pb-6 mb-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div className="flex items-baseline gap-6">
            <span className="text-[#ff9900] font-mono text-sm tracking-widest">[ 06 ]</span>
            <div>
              <p className="text-[#ff9900] text-xs font-bold uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
                <span className="w-6 h-[1px] bg-[#ff9900]" />
                Summit Contests
              </p>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
                Play, build, and <span className="font-serif italic font-normal text-[#ffb84d]">win big.</span>
              </h2>
            </div>
          </div>
          <p className="text-slate-400 text-sm max-w-sm font-mono">
            LIVE AUDITORIUM KAHOOT QUIZ · SWAGS &amp; GADGETS
          </p>
        </div>

        {/* Contest Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {CONTESTS.map((contest) => (
            <div
              key={contest.id}
              className={`rounded-3xl p-8 sm:p-9 border relative overflow-hidden flex flex-col justify-between shadow-2xl transition-all duration-300 hover:-translate-y-1 ${
                contest.featured
                  ? 'bg-gradient-to-b from-[#1c2436] to-[#0c1220] border-[#ff9900]/50 shadow-[0_20px_50px_rgba(255,153,0,0.15)]'
                  : 'bg-gradient-to-b from-[#141c2c]/80 to-[#0c1220]/90 border-white/10'
              }`}
            >
              {contest.featured && (
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#ff9900]/15 blur-3xl pointer-events-none" />
              )}

              <div>
                <div className="flex items-center justify-between gap-2 mb-6">
                  <span className="text-xs font-mono font-extrabold uppercase tracking-widest text-[#ff9900]">
                    {contest.tag}
                  </span>
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-white/5 border border-white/10 text-slate-300 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {contest.pill}
                  </span>
                </div>

                <h3 className="text-2xl font-black text-white mb-6">
                  {contest.title}
                </h3>

                <ol className="flex flex-col gap-3.5 mb-6">
                  {contest.steps.map((step, sIdx) => (
                    <li key={sIdx} className="flex items-start gap-3 text-sm text-slate-300">
                      <span className="font-mono text-xs font-bold text-[#ff9900] bg-white/5 w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 border border-white/10">
                        {sIdx + 1}
                      </span>
                      <span className="leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-[#ffb84d]">
                <Smartphone className="w-4 h-4 text-[#ff9900]" />
                <span>Runs live via smartphone in the RISU auditorium</span>
              </div>
            </div>
          ))}
        </div>

        {/* Prizes Row */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Trophy className="w-5 h-5 text-[#ff9900]" />
            <h3 className="text-lg font-extrabold uppercase tracking-wider text-white">
              Summit Hardware &amp; Swag Prizes
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {PRIZES.map((prize, pIdx) => (
              <div
                key={pIdx}
                className="group rounded-2xl p-6 bg-gradient-to-b from-[#141c2c]/80 to-[#0c1220]/90 border border-white/10 hover:border-[#ff9900]/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif italic text-3xl text-[#ff9900] leading-none">
                      {prize.rank}
                    </span>
                    <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                      {prize.worth}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-[#ffb84d] transition-colors">
                    {prize.name}
                  </h4>
                  <p className="text-slate-400 text-xs leading-relaxed mb-4">
                    {prize.item}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center gap-2 text-[11px] text-slate-400 font-mono">
                  <Gift className="w-3.5 h-3.5 text-[#ff9900]" />
                  <span>Presented on stage during closing ceremony</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
