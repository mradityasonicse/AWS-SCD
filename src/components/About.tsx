import React from 'react';
import { PILLARS, WHY_ATTEND } from '../data/eventData';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface AboutProps {
  onRegisterClick: () => void;
}

export const About: React.FC<AboutProps> = ({ onRegisterClick }) => {
  return (
    <section className="py-24 relative overflow-hidden px-4 sm:px-6" id="about">
      <div className="max-w-7xl mx-auto">
        {/* Unified Section Header Lockup */}
        <div className="mb-14">
          {/* Integrated Marker, Divider Line, and Heading Row */}
          <div className="flex items-center gap-3 sm:gap-4 w-full">
            <span className="inline-flex items-center font-mono text-xs sm:text-sm font-bold text-[#ff9900] tracking-wider shrink-0 select-none">
              [ 01 ]
            </span>
            <span className="w-8 sm:w-12 h-px bg-[#ff9900]/70 shrink-0" />
            <span className="text-xs sm:text-sm font-mono font-bold tracking-[0.2em] text-[#ff9900] uppercase shrink-0">
              WHAT IS SCD
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-white/20 via-white/10 to-transparent min-w-[20px]" />
            <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-mono tracking-widest text-slate-400 uppercase shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff9900]" />
              HOSTED AT RISU · BHILAI
            </span>
          </div>

          {/* Main Title Row with Vertical Balance */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pt-5 pb-8 border-b border-white/10">
            <div className="max-w-3xl">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08]">
                One day to <span className="font-serif italic font-normal text-[#ffb84d]">level up</span> as a builder.
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
              Student Community Day 2026 brings together <strong className="text-[#ff9900]">550+ students</strong>, AWS Community leaders, AWS DevRel leadership, and the next wave of cloud architects for one full day of high-signal learning at <strong className="text-white">Rungta International Skills University</strong>.
            </p>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              No fluff. No filler talks. Just real keynotes from engineers who build at hyperscale, hands-on architectural clinics on Amazon Bedrock, panel discussions on breaking into global tech, and an authentic community network that continues long after the event concludes.
            </p>

            {/* Three Pillars */}
            <div className="flex flex-col gap-4 mt-4">
              {PILLARS.map((pillar) => (
                <div
                  key={pillar.num}
                  className="group p-5 sm:p-6 rounded-2xl bg-white/[0.03] hover:bg-[#ff9900]/[0.06] border border-white/10 hover:border-[#ff9900]/40 transition-all duration-300 flex items-start gap-5 hover:translate-x-1"
                >
                  <span className="font-serif italic text-3xl sm:text-4xl text-[#ff9900] leading-none shrink-0 pt-0.5 group-hover:scale-110 transition-transform">
                    {pillar.num}
                  </span>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1 group-hover:text-[#ffb84d] transition-colors">
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
            <div className="relative rounded-3xl p-7 sm:p-9 bg-gradient-to-b from-[#141c2c] to-[#0c1220] border border-[#ff9900]/30 shadow-[0_25px_60px_rgba(0,0,0,0.7),0_0_40px_rgba(255,153,0,0.1)] overflow-hidden">
              {/* Radial Top Glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-[#ff9900]/20 blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <span className="text-[#ff9900] text-xs font-mono font-extrabold tracking-widest uppercase block mb-3">
                  WHY ATTEND
                </span>

                <h3 className="text-xl sm:text-2xl font-black text-white mb-6">
                  What every attendee walks away with:
                </h3>

                <ul className="flex flex-col gap-4 mb-8">
                  {WHY_ATTEND.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-[#ff9900] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white font-bold block">{item.title}</strong>
                        <span className="text-slate-400 text-xs">{item.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={onRegisterClick}
                  className="w-full cursor-pointer bg-gradient-to-r from-[#ff9900] to-[#ff7a00] hover:from-[#ffb84d] hover:to-[#ff9900] text-black font-extrabold text-sm py-3.5 rounded-xl transition-all shadow-[0_6px_20px_rgba(255,153,0,0.4)] flex items-center justify-center gap-2 group"
                >
                  <span>Book Early Bird Pass (₹259)</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
