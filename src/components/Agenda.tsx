import React, { useState } from 'react';
import { AGENDA, type AgendaItem } from '../data/eventData';
import { Clock, User } from 'lucide-react';

export const Agenda: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', 'Keynote', 'Tech', 'Networking', 'Fun', 'Ceremony'];

  const filteredAgenda = activeFilter === 'All'
    ? AGENDA
    : AGENDA.filter(item => item.category === activeFilter);

  return (
    <section className="py-24 relative overflow-hidden px-4" id="agenda">
      <div className="max-w-5xl mx-auto">
        {/* Section Header with [ 04 ] Index */}
        <div className="border-b border-white/10 pb-6 mb-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div className="flex items-baseline gap-6">
            <span className="text-[#ff9900] font-mono text-sm tracking-widest">[ 04 ]</span>
            <div>
              <p className="text-[#ff9900] text-xs font-bold uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
                <span className="w-6 h-[1px] bg-[#ff9900]" />
                Event Timetable
              </p>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
                One full day, <span className="font-serif italic font-normal text-[#ffb84d]">start to finish.</span>
              </h2>
            </div>
          </div>
          <p className="text-slate-400 text-sm max-w-sm font-mono">
            SINGLE-TRACK HIGH-SIGNAL SCHEDULE · 08:00 - 17:15 IST
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`cursor-pointer px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 border ${
                activeFilter === cat
                  ? 'bg-[#ff9900] text-black border-[#ff9900] shadow-[0_4px_16px_rgba(255,153,0,0.4)]'
                  : 'bg-white/5 text-slate-300 border-white/10 hover:border-white/20 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Timeline Layout */}
        <div className="relative pl-6 sm:pl-10 border-l border-white/10 flex flex-col gap-8">
          {filteredAgenda.map((item: AgendaItem, idx: number) => (
            <div key={idx} className="relative group">
              {/* Timeline Pin Dot */}
              <div
                className="absolute -left-[31px] sm:-left-[47px] top-6 w-3.5 h-3.5 rounded-full border-2 border-[#070a10] shadow-[0_0_12px_rgba(255,153,0,0.6)] transition-transform group-hover:scale-125"
                style={{ backgroundColor: item.dotColor || '#ff9900' }}
              />

              <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-[#141c2c]/80 to-[#0c1220]/90 border border-white/10 hover:border-[#ff9900]/40 transition-all duration-300 hover:translate-x-1 shadow-lg">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <span className="font-serif italic text-2xl text-[#ff9900]">
                      {item.time} {item.ampm}
                    </span>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10">
                      {item.type}
                    </span>
                  </div>

                  <span className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                    <Clock className="w-3.5 h-3.5 text-[#ff9900]" />
                    {item.duration}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-[#ffb84d] transition-colors">
                  {item.title}
                </h3>

                {item.speaker && (
                  <div className="flex items-center gap-2 mb-3 text-xs font-semibold text-[#ffb84d]">
                    <User className="w-3.5 h-3.5" />
                    <span>{item.speaker}</span>
                  </div>
                )}

                {item.subtitle && (
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {item.subtitle}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
