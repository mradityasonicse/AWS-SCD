import React, { useState } from 'react';
import { AGENDA, type AgendaItem } from '../data/eventData';
import { Clock, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Text3DFlip from '@/registry/magicui/text-3d-flip';
import { ScrollReveal, SpotlightCard } from '@/components/ui/motion-primitives';

export const Agenda: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', 'Keynote', 'Tech', 'Networking', 'Fun', 'Ceremony'];

  const filteredAgenda =
    activeFilter === 'All'
      ? AGENDA
      : AGENDA.filter((item) => item.category === activeFilter);

  return (
    <section className="py-24 relative overflow-hidden px-4 sm:px-6" id="agenda">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF9900]/05 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header with [ 04 ] Index */}
        <ScrollReveal>
          <div className="border-b border-[#232F3E] pb-6 mb-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
            <div className="flex items-baseline gap-4 sm:gap-6">
              <span className="text-[#FF9900] font-mono text-sm tracking-widest font-bold whitespace-nowrap shrink-0">
                [ 04 ]
              </span>
              <div>
                <p className="text-[#FF9900] text-xs font-bold uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
                  <span className="w-6 h-[1px] bg-[#FF9900]" />
                  Event Timetable
                </p>
                <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.12]">
                  <Text3DFlip
                    textClassName="text-white"
                    flipTextClassName="text-[#FF9900]"
                    rotateDirection="top"
                    staggerDuration={0.02}
                  >
                    One full day, start to finish.
                  </Text3DFlip>
                </h2>
              </div>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm max-w-sm font-mono uppercase tracking-wider">
              SINGLE-TRACK HIGH-SIGNAL SCHEDULE · 08:00 - 17:15 IST
            </p>
          </div>
        </ScrollReveal>

        {/* Category Filter Tabs with Sliding Animated Pill */}
        <ScrollReveal delay={0.1}>
          <div className="flex items-center gap-2 mb-10 sm:mb-14 overflow-x-auto pb-2 sm:pb-0 sm:flex-wrap no-scrollbar">
            {categories.map((cat) => {
              const isActive = activeFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`relative cursor-pointer px-4 py-2 rounded-xl text-xs font-bold transition-colors duration-200 border shrink-0 select-none ${
                    isActive
                      ? 'text-[#0B0F17] font-black border-[#FF9900]'
                      : 'bg-[#131921] text-slate-300 border-[#232F3E] hover:border-slate-600 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="agenda-filter-pill"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      className="absolute inset-0 bg-[#FF9900] rounded-xl shadow-[0_4px_16px_rgba(255,153,0,0.35)] -z-10"
                    />
                  )}
                  <span>{cat}</span>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Timeline Layout with Fluid Stagger & Layout Transitions */}
        <div className="relative pl-6 sm:pl-10 border-l border-[#232F3E] flex flex-col gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredAgenda.map((item: AgendaItem, idx: number) => (
              <motion.div
                key={`${item.time}-${item.title}`}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, delay: idx * 0.04, ease: [0.16, 1, 0.3, 1] }}
                className="relative group"
              >
                {/* Timeline Pin Dot */}
                <div
                  className="absolute -left-[31px] sm:-left-[47px] top-6 w-3.5 h-3.5 rounded-full border-2 border-[#0B0F17] shadow-[0_0_12px_rgba(255,153,0,0.5)] transition-transform duration-300 group-hover:scale-125"
                  style={{
                    backgroundColor:
                      item.dotColor === '#D946EF'
                        ? '#FF9900'
                        : item.dotColor || '#FF9900',
                  }}
                />

                <SpotlightCard className="p-4 xs:p-5 sm:p-7 transition-all duration-300 hover:translate-x-1 shadow-md">
                  <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-3 mb-2.5 sm:mb-3">
                    <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
                      <span className="font-serif italic text-xl sm:text-2xl text-[#FF9900]">
                        {item.time} {item.ampm}
                      </span>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#161E2D] text-slate-300 border border-[#232F3E]">
                        {item.type}
                      </span>
                    </div>

                    <span className="flex items-center gap-1.5 text-[11px] sm:text-xs text-slate-400 font-mono">
                      <Clock className="w-3.5 h-3.5 text-[#FF9900]" />
                      {item.duration}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-[#FF9900] transition-colors">
                    {item.title}
                  </h3>

                  {item.speaker && (
                    <div className="flex items-center gap-2 mb-3 text-xs font-semibold text-[#FF9900]">
                      <User className="w-3.5 h-3.5" />
                      <span>{item.speaker}</span>
                    </div>
                  )}

                  {item.subtitle && (
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {item.subtitle}
                    </p>
                  )}
                </SpotlightCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Agenda;
