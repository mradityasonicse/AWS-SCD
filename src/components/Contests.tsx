import React from 'react';
import { CONTESTS, PRIZES } from '../data/eventData';
import { Trophy, Gift, Smartphone } from 'lucide-react';
import Text3DFlip from '@/registry/magicui/text-3d-flip';

export const Contests: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden px-4" id="contests">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with [ 06 ] Index */}
        <div className="border-b border-neutral-200 pb-6 mb-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div className="flex items-baseline gap-6">
            <span className="text-[#D946EF] font-mono text-sm tracking-widest">[ 06 ]</span>
            <div>
              <p className="text-[#D946EF] text-xs font-bold uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
                <span className="w-6 h-[1px] bg-[#D946EF]" />
                Summit Contests
              </p>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#171717] tracking-tight leading-tight">
                <Text3DFlip
                  textClassName="text-[#171717]"
                  flipTextClassName="text-[#D946EF]"
                  rotateDirection="top"
                  staggerDuration={0.02}
                >
                  Play, build, and win big.
                </Text3DFlip>
              </h2>
            </div>
          </div>
          <p className="text-neutral-500 text-sm max-w-sm font-mono">
            LIVE AUDITORIUM KAHOOT QUIZ · SWAGS &amp; GADGETS
          </p>
        </div>

        {/* Contest Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {CONTESTS.map((contest) => (
            <div
              key={contest.id}
              className={`rounded-3xl p-8 sm:p-9 border relative overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 bg-white ${
                contest.featured
                  ? 'border-2 border-[#D946EF]/50 shadow-[0_20px_50px_rgba(217,70,239,0.12)]'
                  : 'border border-neutral-200 shadow-md'
              }`}
            >
              {contest.featured && (
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#D946EF]/10 blur-3xl pointer-events-none" />
              )}

              <div>
                <div className="flex items-center justify-between gap-2 mb-6">
                  <span className="text-xs font-mono font-extrabold uppercase tracking-widest text-[#D946EF]">
                    {contest.tag}
                  </span>
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-neutral-100 border border-neutral-200 text-neutral-700 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    {contest.pill}
                  </span>
                </div>

                <h3 className="text-2xl font-black text-[#171717] mb-6">
                  {contest.title}
                </h3>

                <ol className="flex flex-col gap-3.5 mb-6">
                  {contest.steps.map((step, sIdx) => (
                    <li key={sIdx} className="flex items-start gap-3 text-sm text-neutral-700">
                      <span className="font-mono text-xs font-bold text-[#D946EF] bg-[#D946EF]/10 w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 border border-[#D946EF]/30">
                        {sIdx + 1}
                      </span>
                      <span className="leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="pt-4 border-t border-neutral-100 flex items-center gap-2 text-xs font-mono text-[#D946EF]">
                <Smartphone className="w-4 h-4 text-[#D946EF]" />
                <span>Runs live via smartphone in the RISU auditorium</span>
              </div>
            </div>
          ))}
        </div>

        {/* Prizes Row */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Trophy className="w-5 h-5 text-[#FACC15]" />
            <h3 className="text-lg font-extrabold uppercase tracking-wider text-[#171717]">
              Summit Hardware &amp; Swag Prizes
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {PRIZES.map((prize, pIdx) => (
              <div
                key={pIdx}
                className="group rounded-2xl p-6 bg-white border border-neutral-200 hover:border-[#D946EF]/50 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between shadow-xs hover:shadow-[0_14px_32px_rgba(217,70,239,0.12)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif italic text-3xl text-[#D946EF] leading-none">
                      {prize.rank}
                    </span>
                    <span className="text-xs font-mono font-bold text-[#0891B2] bg-[#22D3EE]/15 px-2.5 py-1 rounded-full border border-[#22D3EE]/30">
                      {prize.worth}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-[#171717] mb-2 group-hover:text-[#D946EF] transition-colors">
                    {prize.name}
                  </h4>
                  <p className="text-neutral-600 text-xs leading-relaxed mb-4">
                    {prize.item}
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-100 flex items-center gap-2 text-[11px] text-neutral-500 font-mono">
                  <Gift className="w-3.5 h-3.5 text-[#D946EF]" />
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
