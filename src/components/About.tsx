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
            <span className="inline-flex items-center font-mono text-xs sm:text-sm font-bold text-[#D946EF] tracking-wider shrink-0 select-none">
              [ 01 ]
            </span>
            <span className="w-8 sm:w-12 h-px bg-[#D946EF]/70 shrink-0" />
            <span className="text-xs sm:text-sm font-mono font-bold tracking-[0.2em] text-[#D946EF] uppercase shrink-0">
              WHAT IS SCD
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-neutral-300 via-neutral-200 to-transparent min-w-[20px]" />
            <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-mono tracking-widest text-neutral-500 uppercase shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D946EF]" />
              HOSTED AT RISU · BHILAI
            </span>
          </div>

          {/* Main Title Row with Vertical Balance */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pt-5 pb-8 border-b border-neutral-200">
            <div className="max-w-3xl">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#171717] tracking-tight leading-[1.08]">
                <Text3DFlip
                  textClassName="text-[#171717]"
                  flipTextClassName="text-[#D946EF]"
                  rotateDirection="top"
                  staggerDuration={0.02}
                >
                  One day to level up as a builder.
                </Text3DFlip>
              </h2>
            </div>
            <p className="text-neutral-500 text-xs sm:text-sm font-mono max-w-sm leading-relaxed lg:text-right shrink-0">
              CENTRAL INDIA'S PREMIER CLOUD SUMMIT FOR NEXT-GEN DEVELOPERS &amp; ARCHITECTS
            </p>
          </div>
        </div>

        {/* Grid: Left Narrative & Pillars | Right Why Attend Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <p className="text-[#171717] text-lg sm:text-2xl font-semibold leading-relaxed">
              Student Community Day 2026 brings together <strong className="text-[#D946EF]">550+ students</strong>, AWS Community leaders, AWS DevRel leadership, and the next wave of cloud architects for one full day of high-signal learning at <strong className="text-neutral-900">Rungta International Skills University</strong>.
            </p>
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              No fluff. No filler talks. Just real keynotes from engineers who build at hyperscale, hands-on architectural clinics on Amazon Bedrock, panel discussions on breaking into global tech, and an authentic community network that continues long after the event concludes.
            </p>

            {/* Three Pillars */}
            <div className="flex flex-col gap-4 mt-4">
              {PILLARS.map((pillar) => (
                <div
                  key={pillar.num}
                  className="group p-5 sm:p-6 rounded-2xl bg-white hover:bg-neutral-50 border border-neutral-200 hover:border-[#D946EF]/50 shadow-xs hover:shadow-[0_14px_32px_rgba(217,70,239,0.12)] transition-all duration-300 flex items-start gap-5 hover:translate-x-1"
                >
                  <span className="font-serif italic text-3xl sm:text-4xl text-[#D946EF] leading-none shrink-0 pt-0.5 group-hover:scale-110 transition-transform">
                    {pillar.num}
                  </span>
                  <div>
                    <h3 className="text-[#171717] font-bold text-lg mb-1 group-hover:text-[#D946EF] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Why Attend Card (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl p-7 sm:p-9 bg-white border border-neutral-200 shadow-xl overflow-hidden">
              {/* Radial Top Glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-[#D946EF]/10 blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <span className="text-[#D946EF] text-xs font-mono font-extrabold tracking-widest uppercase block mb-3">
                  WHY ATTEND
                </span>

                <h3 className="text-xl sm:text-2xl font-black text-[#171717] mb-6">
                  What every attendee walks away with:
                </h3>

                <ul className="flex flex-col gap-4 mb-8">
                  {WHY_ATTEND.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-neutral-700">
                      <CheckCircle2 className="w-4 h-4 text-[#D946EF] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#171717] font-bold block">{item.title}</strong>
                        <span className="text-neutral-500 text-xs">{item.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="w-full cursor-pointer bg-[#D946EF] hover:bg-[#C026D3] text-white font-bold text-sm py-3.5 rounded-full transition-all shadow-[0_6px_20px_rgba(217,70,239,0.3)] flex items-center justify-center gap-2 group"
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
