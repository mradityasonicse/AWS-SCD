import React from 'react';
import { ORGANIZERS } from '../data/eventData';
import { ArrowUpRight, Clapperboard } from 'lucide-react';

interface TeamProps {
  onRollCredits: () => void;
}

export const Team: React.FC<TeamProps> = ({ onRollCredits }) => {
  return (
    <section className="py-24 relative overflow-hidden px-4" id="team">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with [ 10 ] Index */}
        <div className="border-b border-white/10 pb-6 mb-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div className="flex items-baseline gap-6">
            <span className="text-[#ff9900] font-mono text-sm tracking-widest">[ 10 ]</span>
            <div>
              <p className="text-[#ff9900] text-xs font-bold uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
                <span className="w-6 h-[1px] bg-[#ff9900]" />
                Core Team
              </p>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
                The crew behind <span className="font-serif italic font-normal text-[#ffb84d]">the summit.</span>
              </h2>
            </div>
          </div>
          
          <button
            onClick={onRollCredits}
            className="cursor-pointer group flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 hover:bg-[#ff9900]/10 border border-white/15 hover:border-[#ff9900]/40 text-slate-300 hover:text-white transition-all text-xs font-mono font-bold"
          >
            <Clapperboard className="w-4 h-4 text-[#ff9900] group-hover:rotate-12 transition-transform" />
            <span>Roll Credits →</span>
          </button>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ORGANIZERS.map((member) => (
            <div
              key={member.id}
              className="group rounded-3xl p-6 bg-gradient-to-b from-[#141c2c]/80 to-[#0c1220]/90 border border-white/10 hover:border-[#ff9900]/40 transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center shadow-xl relative overflow-hidden"
            >
              {/* Photo / Crest Container */}
              <div className="w-28 h-28 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 border border-white/15 p-4 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform shadow-lg relative">
                <img
                  src={member.image || '/risu-logo.png'}
                  alt={member.name}
                  className="max-h-16 w-auto object-contain drop-shadow-[0_0_12px_rgba(255,153,0,0.3)]"
                />
              </div>

              <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-[#ff9900] mb-1">
                {member.role}
              </span>

              <h3 className="text-xl font-black text-white mb-1 group-hover:text-[#ffb84d] transition-colors">
                {member.name}
              </h3>

              <p className="text-xs text-slate-400 mb-5">
                {member.title}
              </p>

              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/5 hover:bg-[#ff9900] text-slate-300 hover:text-black border border-white/10 hover:border-[#ff9900] transition-all text-xs font-bold"
                >
                  <span>Connect on LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
