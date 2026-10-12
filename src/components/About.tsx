import React from 'react';
import { PILLARS, WHY_ATTEND } from '../data/eventData';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import Text3DFlip from '@/registry/magicui/text-3d-flip';

export const About: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden px-4 sm:px-6" id="about">
      <div className="max-w-7xl mx-auto">
        {/* Unified Section Header Lockup */}
        <div className="mb-14">
          {/* Integrated Marker, Divider Line, and Heading Row */}
          <div className="flex items-center gap-3 sm:gap-4 w-full">
            <span className="inline-flex items-center font-mono text-xs sm:text-sm font-bold text-[#FF9900] tracking-wider shrink-0 select-none">
              [ 01 ]
            </span>
            <span className="w-8 sm:w-12 h-px bg-[#FF9900]/70 shrink-0" />
            <span className="text-xs sm:text-sm font-mono font-bold tracking-[0.2em] text-[#FF9900] uppercase shrink-0">
              WHAT IS SCD
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-[#232F3E] via-[#1E293B] to-transparent min-w-[20px]" />
            <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-mono tracking-widest text-slate-400 uppercase shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF9900]" />
              HOSTED AT RISU · BHILAI
            </span>
          </div>

          {/* Main Title Row with Vertical Balance */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pt-5 pb-8 border-b border-[#232F3E]">
            <div className="max-w-3xl">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08]">
                <Text3DFlip
                  textClassName="text-white"
                  flipTextClassName="text-[#FF9900]"
                  rotateDirection="top"
                  staggerDuration={0.02}
                >
                  One day to level up as a builder.
                </Text3DFlip>
              </h2>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm font-mono max-w-sm leading-relaxed lg:text-right shrink-0">
              CENTRAL INDIA'S PREMIER CLOUD SUMMIT FOR NEXT-GEN DEVELOPERS &amp; ARCHITECTS
            </p>
          </div>
        </div>

        {/* Grid: Left Narrative & Pillars | Right Why Attend Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <p className="text-white text-lg sm:text-2xl font-semibold leading-relaxed">
              Student Community Day 2026 brings together <strong className="text-[#FF9900]">550+ students</strong>, AWS Community leaders, AWS DevRel leadership, and the next wave of cloud architects for one full day of high-signal learning at <strong className="text-slate-100">Rungta International Skills University</strong>.
            </p>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              No fluff. No filler talks. Just real keynotes from engineers who build at hyperscale, hands-on architectural clinics on Amazon Bedrock, panel discussions on breaking into global tech, and an authentic community network that continues long after the event concludes.
            </p>

            {/* Three Pillars */}
            <div className="flex flex-col gap-4 mt-4">
              {PILLARS.map((pillar) => (
                <div
                  key={pillar.num}
                  className="group p-5 sm:p-6 rounded-2xl bg-[#131921] hover:bg-[#161E2D] border border-[#232F3E] hover:border-[#FF9900]/50 shadow-md hover:shadow-[0_14px_32px_rgba(255,153,0,0.15)] transition-all duration-300 flex items-start gap-5 hover:translate-x-1"
                >
                  <span className="font-serif italic text-3xl sm:text-4xl text-[#FF9900] leading-none shrink-0 pt-0.5 group-hover:scale-110 transition-transform">
                    {pillar.num}
                  </span>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1 group-hover:text-[#FF9900] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Why Attend Card (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl p-7 sm:p-9 bg-[#131921] border border-[#232F3E] shadow-2xl overflow-hidden">
              {/* Radial Top Glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-[#FF9900]/10 blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <span className="text-[#FF9900] text-xs font-mono font-extrabold tracking-widest uppercase block mb-3">
                  WHY ATTEND
                </span>

                <h3 className="text-xl sm:text-2xl font-black text-white mb-6">
                  What every attendee walks away with:
                </h3>

                <ul className="flex flex-col gap-4 mb-8">
                  {WHY_ATTEND.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-[#FF9900] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white font-bold block">{item.title}</strong>
                        <span className="text-slate-400 text-xs">{item.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="w-full cursor-pointer bg-[#FF9900] hover:bg-[#FFAC33] active:bg-[#E68A00] text-[#0B0F17] font-black text-sm py-3.5 rounded-full transition-all shadow-[0_6px_20px_rgba(255,153,0,0.35)] flex items-center justify-center gap-2 group"
                >
                  <span>Connect With Student Desk</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
