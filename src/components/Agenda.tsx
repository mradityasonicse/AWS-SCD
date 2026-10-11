import React, { useState } from 'react';
import { AGENDA, type AgendaItem } from '../data/eventData';
import { Clock, User } from 'lucide-react';
import Text3DFlip from '@/registry/magicui/text-3d-flip';

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
        <div className="border-b border-neutral-200 pb-6 mb-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div className="flex items-baseline gap-6">
            <span className="text-[#D946EF] font-mono text-sm tracking-widest">[ 04 ]</span>
            <div>
              <p className="text-[#D946EF] text-xs font-bold uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
                <span className="w-6 h-[1px] bg-[#D946EF]" />
                Event Timetable
              </p>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#171717] tracking-tight leading-tight">
                <Text3DFlip
                  textClassName="text-[#171717]"
                  flipTextClassName="text-[#D946EF]"
                  rotateDirection="top"
                  staggerDuration={0.02}
                >
                  One full day, start to finish.
                </Text3DFlip>
              </h2>
            </div>
          </div>
          <p className="text-neutral-500 text-sm max-w-sm font-mono">
            SINGLE-TRACK HIGH-SIGNAL SCHEDULE · 08:00 - 17:15 IST
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 mb-10 sm:mb-14 overflow-x-auto pb-2 sm:pb-0 sm:flex-wrap no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`cursor-pointer px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 border shrink-0 ${
                activeFilter === cat
                  ? 'bg-[#D946EF] text-white border-[#D946EF] shadow-[0_4px_16px_rgba(217,70,239,0.35)]'
                  : 'bg-white text-neutral-600 border-neutral-200 hover:border-neutral-300 hover:text-neutral-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Timeline Layout */}
        <div className="relative pl-6 sm:pl-10 border-l border-neutral-200 flex flex-col gap-6 sm:gap-8">
          {filteredAgenda.map((item: AgendaItem, idx: number) => (
            <div key={idx} className="relative group">
              {/* Timeline Pin Dot */}
              <div
                className="absolute -left-[31px] sm:-left-[47px] top-6 w-3.5 h-3.5 rounded-full border-2 border-white shadow-[0_0_12px_rgba(217,70,239,0.5)] transition-transform group-hover:scale-125"
                style={{ backgroundColor: item.dotColor || '#D946EF' }}
              />

              <div className="p-4 xs:p-5 sm:p-7 rounded-2xl bg-white border border-neutral-200 hover:border-[#D946EF]/50 transition-all duration-300 hover:translate-x-1 shadow-xs hover:shadow-[0_14px_32px_rgba(217,70,239,0.12)]">
                <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-3 mb-2.5 sm:mb-3">
                  <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
                    <span className="font-serif italic text-xl sm:text-2xl text-[#D946EF]">
                      {item.time} {item.ampm}
                    </span>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-neutral-100 text-neutral-700 border border-neutral-200">
                      {item.type}
                    </span>
                  </div>

                  <span className="flex items-center gap-1.5 text-[11px] sm:text-xs text-neutral-500 font-mono">
                    <Clock className="w-3.5 h-3.5 text-[#D946EF]" />
                    {item.duration}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#171717] mb-2 group-hover:text-[#D946EF] transition-colors">
                  {item.title}
                </h3>

                {item.speaker && (
                  <div className="flex items-center gap-2 mb-3 text-xs font-semibold text-[#D946EF]">
                    <User className="w-3.5 h-3.5" />
                    <span>{item.speaker}</span>
                  </div>
                )}

                {item.subtitle && (
                  <p className="text-neutral-600 text-sm leading-relaxed">
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
