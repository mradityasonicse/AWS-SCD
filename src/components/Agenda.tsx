import React, { useState } from 'react';
import { AGENDA, type AgendaItem } from '../data/eventData';
import { Clock, User, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ScrollReveal, SpotlightCard } from '@/components/ui/motion-primitives';
import { BuilderStairs } from '@/components/ui/BuilderStairs';
import { useTheme } from '../context/ThemeContext';

export const Agenda: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const { currentColorConfig } = useTheme();

  const categories = ['All', 'Keynote', 'Tech', 'Networking', 'Fun', 'Ceremony'];

  const filteredAgenda =
    activeFilter === 'All'
      ? AGENDA
      : AGENDA.filter((item) => item.category === activeFilter);

  // Agenda High-Level Chapters (Matches Screenshot 2 layout)
  const agendaChapters = [
    { num: '1', title: 'Inauguration, Felicitation & Welcome Address', cat: 'Ceremony', color: '#00E582' },
    { num: '2', title: 'Keynote & Technical Speaker Sessions', cat: 'Tech', color: 'var(--theme-accent, #AD5CFF)' },
    { num: '3', title: 'One-Hour Lunch & Refreshment Break', cat: 'Networking', color: '#42B4FF' },
    { num: '4', title: 'Q&A, Closing Ceremony & Swag Distribution', cat: 'Fun', color: '#FF9900' },
  ];

  return (
    <section className="py-24 relative overflow-hidden px-4 sm:px-6" id="agenda">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header with [ 04 ] Index */}
        <ScrollReveal>
          <div className="border-b border-[#232F3E] pb-6 mb-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
            <div className="flex items-baseline gap-4 sm:gap-6">
              <span
                className="font-mono text-sm tracking-widest font-bold whitespace-nowrap shrink-0"
                style={{ color: 'var(--theme-accent, #AD5CFF)' }}
              >
                [ 04 ]
              </span>
              <div>
                <p
                  className="text-xs font-bold uppercase tracking-[0.2em] mb-2 flex items-center gap-2"
                  style={{ color: 'var(--theme-accent, #AD5CFF)' }}
                >
                  <span className="w-6 h-[1px]" style={{ backgroundColor: 'var(--theme-accent, #AD5CFF)' }} />
                  Official Program Schedule
                </p>
                <h2 className="font-heading text-4xl sm:text-6xl md:text-7xl font-normal text-white tracking-wide uppercase leading-none">
                  Agenda &amp; Timeline.
                </h2>
              </div>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm max-w-sm font-mono uppercase tracking-wider">
              AWS STUDENT BUILDER GROUP · SINGLE-TRACK SCHEDULE
            </p>
          </div>
        </ScrollReveal>

        {/* ==================================================================== */}
        {/* SIGNATURE AWS BUILDER AGENDA SHOWCASE BOARD (Modeled from Screenshot 2) */}
        {/* ==================================================================== */}
        <ScrollReveal delay={0.1}>
          <div className="mb-14 relative rounded-2xl sm:rounded-3xl border border-[var(--theme-border,#3E3E3E)] bg-[var(--theme-surface,#1E1E1E)] overflow-hidden shadow-2xl">
            {/* Architectural Grid Backdrop Layer */}
            <div
              className="absolute inset-0 pointer-events-none opacity-40 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:48px_48px]"
            />

            {/* Content Container (16:9 Inspired Studio Board) */}
            <div className="relative z-10 p-6 sm:p-10 md:p-14 min-h-[420px] flex flex-col justify-between">
              {/* Top Row: Left Headline + Right AWS Mark */}
              <div className="flex items-start justify-between gap-6 mb-8">
                <div>
                  <h3 className="font-heading text-4xl sm:text-6xl md:text-7xl font-normal text-white tracking-wide uppercase leading-none mb-3">
                    Agenda
                  </h3>
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase tracking-widest">
                    <span
                      className="inline-block w-2 h-2 rounded-full"
                      style={{ backgroundColor: 'var(--theme-accent, #AD5CFF)' }}
                    />
                    <span>STUDENT COMMUNITY DAY · CENTRAL INDIA</span>
                  </div>
                </div>

                {/* Crisp AWS Brand Mark Top Right (Direct from Screenshot 2) */}
                <div className="flex items-center gap-2 shrink-0">
                  <img
                    src="/AWS.png"
                    alt="AWS"
                    className="h-8 sm:h-10 w-auto object-contain brightness-0 invert opacity-95"
                  />
                </div>
              </div>

              {/* Middle Section: Left Numbered Tracks + Right Ascending Stairs */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center my-4">
                {/* Left: 4-Point Agenda Blueprint */}
                <div className="md:col-span-7 flex flex-col gap-3 sm:gap-4">
                  {agendaChapters.map((ch) => (
                    <button
                      key={ch.num}
                      onClick={() => setActiveFilter(ch.cat)}
                      className="group flex items-center gap-4 text-left p-2.5 sm:p-3 rounded-xl transition-all duration-150 hover:bg-white/5 border border-transparent hover:border-[#232F3E] cursor-pointer"
                    >
                      <span
                        className="font-mono text-base sm:text-xl font-bold shrink-0 transition-transform group-hover:scale-110"
                        style={{ color: ch.color }}
                      >
                        {ch.num}.
                      </span>
                      <span className="text-sm sm:text-lg md:text-xl font-medium text-white group-hover:text-white transition-colors flex-1">
                        {ch.title}
                      </span>
                      <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-white group-hover:translate-x-1 transition-all opacity-0 group-hover:opacity-100 shrink-0" />
                    </button>
                  ))}
                </div>

                {/* Right: Signature Diagonal Ascending Stair Block Pattern (From Screenshot 2) */}
                <div className="md:col-span-5 flex justify-center md:justify-end items-center">
                  <div className="w-48 sm:w-64 md:w-72 max-w-full">
                    <BuilderStairs
                      color="var(--theme-accent, #AD5CFF)"
                      className="w-full"
                      showGridLines={true}
                    />
                  </div>
                </div>
              </div>

              {/* Bottom Row: Brandmark Bottom Right (Direct from Screenshot 2) */}
              <div className="pt-6 border-t border-[#232F3E]/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <span>RUNGTA INTERNATIONAL SKILLS UNIVERSITY</span>
                  <span>·</span>
                  <span>OCTOBER 21, 2026</span>
                </div>
                <div className="font-bold tracking-wider text-slate-200 uppercase flex items-center gap-2">
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: 'var(--theme-accent, #AD5CFF)' }}
                  />
                  <span>AWS Student Builder Group</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ==================================================================== */}
        {/* INTERACTIVE TIMETABLE & DETAILED SESSION SCHEDULE */}
        {/* ==================================================================== */}
        {/* Category Filter Tabs with Sliding Animated Pill */}
        <ScrollReveal delay={0.15}>
          <div className="flex items-center gap-2 mb-10 overflow-x-auto pb-2 sm:pb-0 sm:flex-wrap no-scrollbar">
            {categories.map((cat) => {
              const isActive = activeFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`relative cursor-pointer px-4 py-2 rounded-xl text-xs font-bold transition-colors duration-150 border shrink-0 select-none ${
                    isActive
                      ? 'text-[#0B0F17] font-black border-transparent'
                      : 'bg-[#131922] text-slate-300 border-[#232F3E] hover:border-slate-500 hover:text-white'
                  }`}
                  style={{
                    borderColor: isActive ? currentColorConfig.hex : undefined,
                  }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="agenda-filter-pill"
                      transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                      className="absolute inset-0 rounded-xl -z-10"
                      style={{
                        backgroundColor: 'var(--theme-accent, #AD5CFF)',
                        boxShadow: `0 4px 16px ${currentColorConfig.glow}`,
                      }}
                    />
                  )}
                  <span>{cat}</span>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Timeline Layout with Clean Architectural Borders (Zero AI Slop) */}
        <div className="relative pl-6 sm:pl-10 border-l border-[#232F3E] flex flex-col gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredAgenda.map((item: AgendaItem, idx: number) => (
              <motion.div
                key={`${item.time}-${item.title}`}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3, delay: idx * 0.03, ease: [0.16, 1, 0.3, 1] }}
                className="relative group"
              >
                {(() => {
                  const sessionColor =
                    item.typeColor === '#D946EF'
                      ? 'var(--theme-accent, #AD5CFF)'
                      : item.typeColor || item.dotColor || 'var(--theme-accent, #AD5CFF)';

                  return (
                    <>
                      {/* Timeline Pin Dot */}
                      <div
                        className="absolute -left-[31px] sm:-left-[47px] top-6 w-3.5 h-3.5 rounded-full border-2 border-[var(--theme-bg,#262626)] transition-transform duration-200 group-hover:scale-125"
                        style={{
                          backgroundColor: sessionColor,
                          boxShadow: `0 0 10px ${sessionColor}50`,
                        }}
                      />

                      <SpotlightCard
                        spotlightColor={`${sessionColor}25`}
                        borderColor={`${sessionColor}35`}
                        className="p-5 sm:p-7 transition-all duration-200 hover:translate-x-1 shadow-md bg-[var(--theme-surface,#1E1E1E)] border-[var(--theme-border,#3E3E3E)] relative overflow-hidden"
                      >
                        {/* Top subtle highlight */}
                        <div
                          className="absolute top-0 left-0 right-0 h-[2px] opacity-75 group-hover:opacity-100 transition-opacity"
                          style={{ backgroundColor: sessionColor }}
                        />

                        <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-3 mb-2.5 sm:mb-3">
                          <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
                            <span
                              className="font-mono font-bold text-base sm:text-xl tracking-tight"
                              style={{ color: sessionColor }}
                            >
                              {item.time.includes('AM') || item.time.includes('PM') ? item.time : `${item.time} ${item.ampm}`}
                            </span>
                            <span
                              className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded border"
                              style={{
                                color: sessionColor,
                                backgroundColor: `color-mix(in srgb, ${sessionColor} 12%, transparent)`,
                                borderColor: `color-mix(in srgb, ${sessionColor} 30%, transparent)`,
                              }}
                            >
                              {item.type}
                            </span>
                          </div>

                          <span className="flex items-center gap-1.5 text-[11px] sm:text-xs text-slate-400 font-mono">
                            <Clock className="w-3.5 h-3.5" style={{ color: sessionColor }} />
                            {item.duration}
                          </span>
                        </div>

                        <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-white transition-colors">
                          {item.title}
                        </h3>

                        {item.speaker && (
                          <div
                            className="flex items-center gap-2 mb-3 text-xs font-semibold"
                            style={{ color: sessionColor }}
                          >
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
                    </>
                  );
                })()}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Agenda;
