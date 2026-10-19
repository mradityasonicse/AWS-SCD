import React, { useState } from 'react';
import { AGENDA, type AgendaItem } from '../data/eventData';
import { Clock, User, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ScrollReveal, SpotlightCard } from '@/components/ui/motion-primitives';
import { BuilderStairs } from '@/components/ui/BuilderStairs';

export const Agenda: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', 'Keynote', 'Tech', 'Networking', 'Fun', 'Ceremony'];

  const filteredAgenda =
    activeFilter === 'All'
      ? AGENDA
      : AGENDA.filter((item) => item.category === activeFilter);

  // Unified Architectural Agenda Chapters (Senior Engineer Standard: Zero Rainbow Noise)
  const agendaChapters = [
    { num: '01', title: 'Registration, Inauguration & Dignitary Felicitation', cat: 'Ceremony' },
    { num: '02', title: 'Speaker Session 1 (Harshit Singh, Amazon)', cat: 'Tech' },
    { num: '03', title: 'One-Hour Lunch & Refreshment Break', cat: 'Networking' },
    { num: '04', title: 'Speaker Session 2 (Saptarshi De, AWS) & Swag Distribution', cat: 'Tech' },
  ];

  return (
    <section className="pt-8 sm:pt-12 pb-20 sm:pb-24 relative overflow-hidden px-4 sm:px-6" id="agenda">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header with [ 04 ] Index */}
        <ScrollReveal>
          <div className="border-b border-white/10 pb-6 mb-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
            <div className="flex items-baseline gap-4 sm:gap-6">
              <span className="font-mono text-sm tracking-widest font-bold whitespace-nowrap shrink-0 text-[#AD5CFF]">
                [ 04 ]
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] mb-2 flex items-center gap-2 text-slate-400">
                  <span className="w-6 h-[1px] bg-white/20" />
                  Official Program Schedule
                </p>
                <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-white tracking-wide uppercase leading-tight sm:leading-none">
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
        {/* SIGNATURE AWS BUILDER AGENDA SHOWCASE BOARD (Senior Engineering Standard) */}
        {/* ==================================================================== */}
        <ScrollReveal delay={0.1}>
          <div
            className="mb-14 relative rounded-2xl sm:rounded-3xl border border-white/10 overflow-hidden shadow-2xl backdrop-blur-2xl transition-all duration-300 hover:border-white/20 bg-white/[0.02]"
          >
            {/* Specular High-Gloss Sheen Reflection */}
            <div
              className="absolute inset-x-0 top-0 h-32 pointer-events-none bg-gradient-to-b from-white/[0.05] via-white/[0.01] to-transparent z-[1]"
            />
            {/* Architectural Grid Backdrop Layer */}
            <div
              className="absolute inset-0 pointer-events-none opacity-15 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:48px_48px]"
            />

            {/* Content Container */}
            <div className="relative z-10 p-5 sm:p-10 md:p-12 min-h-[360px] flex flex-col justify-between">
              {/* Top Row: Left Headline + Right AWS Mark */}
              <div className="flex items-start justify-between gap-6 mb-8">
                <div>
                  <h3 className="font-heading text-3xl sm:text-5xl md:text-6xl font-normal text-white tracking-wide uppercase leading-tight sm:leading-none mb-3">
                    Agenda
                  </h3>
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase tracking-widest">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#AD5CFF]" />
                    <span>STUDENT COMMUNITY DAY · CENTRAL INDIA</span>
                  </div>
                </div>

                {/* Crisp AWS Brand Mark Top Right */}
                <div className="flex items-center gap-2 shrink-0">
                  <img
                    src="/AWS.png"
                    alt="AWS"
                    className="h-8 sm:h-9 w-auto object-contain brightness-0 invert opacity-90"
                  />
                </div>
              </div>

              {/* Middle Section: Left Numbered Tracks + Right Ascending Stairs */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center my-2">
                {/* Left: 4-Point Agenda Blueprint */}
                <div className="md:col-span-7 flex flex-col gap-2.5 sm:gap-3">
                  {agendaChapters.map((ch) => (
                    <button
                      key={ch.num}
                      type="button"
                      onClick={() => setActiveFilter(ch.cat)}
                      className="group flex items-center gap-4 text-left p-3 rounded-xl transition-all duration-200 hover:bg-white/[0.04] border border-transparent hover:border-white/10 cursor-pointer"
                    >
                      <span className="font-mono text-xs sm:text-sm font-bold text-slate-400 group-hover:text-[#AD5CFF] shrink-0 transition-colors">
                        [{ch.num}]
                      </span>
                      <span className="text-sm sm:text-base font-medium text-slate-200 group-hover:text-white transition-colors flex-1">
                        {ch.title}
                      </span>
                      <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-white group-hover:translate-x-1 transition-all opacity-0 group-hover:opacity-100 shrink-0" />
                    </button>
                  ))}
                </div>

                {/* Right: Signature Diagonal Ascending Stair Block Pattern */}
                <div className="md:col-span-5 flex justify-center md:justify-end items-center">
                  <div className="w-44 sm:w-60 md:w-64 max-w-full opacity-80 hover:opacity-100 transition-opacity">
                    <BuilderStairs
                      color="#AD5CFF"
                      className="w-full"
                      showGridLines={true}
                    />
                  </div>
                </div>
              </div>

              {/* Bottom Row: Metadata Bottom Right */}
              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <span>RUNGTA INTERNATIONAL SKILLS UNIVERSITY</span>
                  <span>·</span>
                  <span>OCTOBER 21, 2026</span>
                </div>
                <div className="font-semibold tracking-wider text-slate-300 uppercase flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#AD5CFF]" />
                  <span>AWS Student Builder Group</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ==================================================================== */}
        {/* INTERACTIVE TIMETABLE & DETAILED SESSION SCHEDULE */}
        {/* ==================================================================== */}
        {/* Category Filter Tabs (Clean Senior Engineer Obsidian Minimalist Standard) */}
        <ScrollReveal delay={0.15}>
          <div className="flex items-center gap-2 mb-10 overflow-x-auto pb-2 sm:pb-0 sm:flex-wrap no-scrollbar">
            {categories.map((cat) => {
              const isActive = activeFilter === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveFilter(cat)}
                  className={`relative cursor-pointer px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-200 border shrink-0 select-none ${
                    isActive
                      ? 'bg-white text-black font-bold border-white shadow-lg'
                      : 'bg-white/[0.03] hover:bg-white/[0.08] text-slate-400 hover:text-white border-white/10 hover:border-white/20'
                  }`}
                >
                  <span>{cat}</span>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Timeline Layout with Clean Architectural Vertical Hairline */}
        <div className="relative ml-2 sm:ml-0 pl-5 xs:pl-6 sm:pl-10 border-l border-white/10 flex flex-col gap-5 sm:gap-6">
          <AnimatePresence mode="popLayout">
            {filteredAgenda.map((item: AgendaItem, idx: number) => (
              <motion.div
                key={`${item.time}-${item.title}`}
                layout
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, delay: idx * 0.02, ease: [0.16, 1, 0.3, 1] }}
                className="relative group"
              >
                {/* Timeline Pin Dot (Mechanical Rivet Design, Zero Neon Blob) */}
                <div
                  className="absolute -left-[31px] sm:-left-[47px] top-6 w-3 h-3 rounded-full border border-white/20 bg-[#0B0F17] transition-all duration-200 group-hover:scale-125 group-hover:bg-[#AD5CFF] group-hover:border-[#AD5CFF]"
                />

                <SpotlightCard
                  spotlightColor="rgba(255, 255, 255, 0.04)"
                  borderColor="rgba(255, 255, 255, 0.12)"
                  className="p-5 sm:p-6 transition-all duration-200 hover:translate-x-1 shadow-lg bg-white/[0.02] hover:bg-white/[0.04] backdrop-blur-xl border border-white/10 relative overflow-hidden rounded-2xl"
                >
                  {/* Hairline subtle top highlight on hover */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-50 group-hover:opacity-100 group-hover:via-[#AD5CFF]/40 transition-all" />

                  {/* Top Row: Time, Category Badge, Duration */}
                  <div className="flex flex-wrap items-center justify-between gap-2.5 sm:gap-3 mb-2.5">
                    <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
                      <span className="font-mono font-bold text-white text-base sm:text-lg tracking-tight">
                        {item.time.includes('AM') || item.time.includes('PM') ? item.time : `${item.time} ${item.ampm}`}
                      </span>

                      {/* Clean Architectural Badge */}
                      <span className="text-[10px] font-mono font-medium uppercase tracking-wider px-2.5 py-0.5 rounded-md border border-white/10 bg-white/[0.04] text-slate-300 flex items-center gap-1.5">
                        {item.category === 'Keynote' || item.category === 'Tech' ? (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#AD5CFF]" />
                        ) : (
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                        )}
                        <span>{item.type}</span>
                      </span>
                    </div>

                    <span className="flex items-center gap-1.5 text-[11px] sm:text-xs text-slate-400 font-mono">
                      <Clock className="w-3.5 h-3.5 text-slate-500" />
                      <span>{item.duration}</span>
                    </span>
                  </div>

                  {/* Session Title */}
                  <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 group-hover:text-white transition-colors">
                    {item.title}
                  </h3>

                  {/* Speaker (if assigned) */}
                  {item.speaker && (
                    <div className="flex items-center gap-1.5 mb-2 text-xs font-mono text-slate-300">
                      <User className="w-3.5 h-3.5 text-[#AD5CFF]" />
                      <span>{item.speaker}</span>
                    </div>
                  )}

                  {/* Subtitle / Description */}
                  {item.subtitle && (
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-sans">
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
