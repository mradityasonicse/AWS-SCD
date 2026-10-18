import React from 'react';
import { ScrollReveal } from '@/components/ui/motion-primitives';

export const About: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden px-4 sm:px-6" id="about">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Unified Section Header Lockup */}
        <ScrollReveal>
          <div className="mb-14">
            {/* Integrated Marker, Divider Line, and Heading Row */}
            <div className="flex items-center gap-3 sm:gap-4 w-full">
              <span
                className="inline-flex items-center font-mono text-xs sm:text-sm font-bold tracking-wider shrink-0 select-none whitespace-nowrap"
                style={{ color: 'var(--theme-accent, #AD5CFF)' }}
              >
                [ 01 ]
              </span>
              <span
                className="w-8 sm:w-12 h-px shrink-0"
                style={{ backgroundColor: 'var(--theme-accent, #AD5CFF)' }}
              />
              <span
                className="text-xs sm:text-sm font-mono font-bold tracking-[0.2em] uppercase shrink-0"
                style={{ color: 'var(--theme-accent, #AD5CFF)' }}
              >
                WHAT IS SCD
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-[var(--theme-border,#383336)] via-[var(--theme-border,#383336)]/50 to-transparent min-w-[20px]" />
              <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-mono tracking-widest text-slate-400 uppercase shrink-0">
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: 'var(--theme-accent, #AD5CFF)' }}
                />
                HOSTED AT RUNGTA INTERNATIONAL SKILLS UNIVERSITY · BHILAI
              </span>
            </div>

            {/* Main Title Row with Vertical Balance */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pt-5 pb-8 border-b border-[var(--theme-border,#383336)]">
              <div className="max-w-3xl overflow-visible pb-1">
                <h2 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-normal text-white tracking-wide uppercase leading-none">
                  One day to level up as a builder.
                </h2>
              </div>
              <p className="text-slate-400 text-xs sm:text-sm font-mono max-w-sm leading-relaxed lg:text-right shrink-0">
                CENTRAL INDIA'S PREMIER CLOUD SUMMIT FOR NEXT-GEN DEVELOPERS &amp; ARCHITECTS
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Lead Narrative */}
        <ScrollReveal delay={0.1}>
          <p className="text-white text-lg sm:text-2xl font-semibold leading-relaxed max-w-4xl mb-12">
            Student Community Day 2026 brings together <strong style={{ color: 'var(--theme-accent, #AD5CFF)' }}>550+ students</strong>, AWS Community leaders, AWS DevRel leadership, and the next wave of cloud architects for one full day of high-signal learning at <strong className="text-slate-100">Rungta International Skills University</strong>.
          </p>
        </ScrollReveal>

        {/* Handcrafted Asymmetric 4-Part Bento Grid (Zero AI Slop) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Card 01 - Keynotes & Deep Dives (Spans 2 Columns) */}
          <div className="md:col-span-2 rounded-2xl border border-[#2D2364] bg-[#100B2E]/90 p-6 sm:p-8 flex flex-col justify-between hover:border-[#AD5CFF]/50 transition-all duration-300 shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[var(--theme-accent,#AD5CFF)] to-[#42B4FF] opacity-70 group-hover:opacity-100 transition-opacity" />
            <div>
              <div className="flex items-center justify-between mb-4">
                <span
                  className="font-mono text-xs font-bold tracking-widest px-2.5 py-1 rounded-full border"
                  style={{
                    color: 'var(--theme-accent, #AD5CFF)',
                    borderColor: 'rgba(173, 92, 255, 0.3)',
                    backgroundColor: 'rgba(173, 92, 255, 0.08)',
                  }}
                >
                  [ 01 / KEYNOTE STAGE ]
                </span>
                <span className="text-[11px] font-mono text-slate-400">AWS DEVREL &amp; AMAZON</span>
              </div>
              <h3 className="text-white font-bold text-2xl sm:text-3xl mb-3 tracking-tight">
                Learn Direct From AWS &amp; Amazon Leadership
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mb-6">
                Deep-dive architectural sessions by <strong className="text-white">Praful Bagai</strong> (Head of DevRel, AWS India &amp; South Asia) and <strong className="text-white">Jessica Gilmore, EdD</strong> (Amazon). Gain firsthand insights on production Generative AI, distributed serverless scalability, and real cloud systems engineering.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-[#2D2364]/60">
              {['Amazon Bedrock', 'Hyperscale Serverless', 'DevSecOps', 'Industry Roadmaps'].map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-md bg-[#1B1344] text-slate-300 border border-[#2D2364]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Card 02 - Live Stage Arena (Spans 1 Column) */}
          <div className="md:col-span-1 rounded-2xl border border-[#2D2364] bg-[#100B2E]/90 p-6 sm:p-8 flex flex-col justify-between hover:border-[#FF9900]/50 transition-all duration-300 shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#FF9900] opacity-70 group-hover:opacity-100 transition-opacity" />
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold tracking-widest px-2.5 py-1 rounded-full border text-[#FF9900] border-[#FF9900]/30 bg-[#FF9900]/10">
                  [ 02 / ARENA ]
                </span>
                <span className="text-[11px] font-mono text-amber-400">STAGE TRIVIA</span>
              </div>
              <h3 className="text-white font-bold text-xl sm:text-2xl mb-3 tracking-tight">
                Kahoot Cloud Quiz &amp; Gadgets
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Compete live in the central auditorium against 500+ builders in cloud architecture challenges. Win Amazon Echo Dots, smart devices, and official AWS gear.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-[#2D2364]/60">
              {['Echo Dot Prizes', 'Auditorium Kahoot', 'Instant Swag'].map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-md bg-[#1B1344] text-slate-300 border border-[#2D2364]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Card 03 - Mentorship & Networking (Spans 1 Column) */}
          <div className="md:col-span-1 rounded-2xl border border-[#2D2364] bg-[#100B2E]/90 p-6 sm:p-8 flex flex-col justify-between hover:border-[#42B4FF]/50 transition-all duration-300 shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#42B4FF] opacity-70 group-hover:opacity-100 transition-opacity" />
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold tracking-widest px-2.5 py-1 rounded-full border text-[#42B4FF] border-[#42B4FF]/30 bg-[#42B4FF]/10">
                  [ 03 / CONNECT ]
                </span>
                <span className="text-[11px] font-mono text-sky-400">MENTORSHIP</span>
              </div>
              <h3 className="text-white font-bold text-xl sm:text-2xl mb-3 tracking-tight">
                1-on-1 Community Mentorship
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Directly interact with AWS Community Builders, DevOps specialists, and hiring partners. Receive feedback on your projects and career trajectories.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-[#2D2364]/60">
              {['AWS Builders', '15+ Universities', 'Portfolio Reviews'].map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-md bg-[#1B1344] text-slate-300 border border-[#2D2364]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Card 04 - Community Cohort (Spans 2 Columns) */}
          <div className="md:col-span-2 rounded-2xl border border-[#2D2364] bg-[#100B2E]/90 p-6 sm:p-8 flex flex-col justify-between hover:border-[#AD5CFF]/50 transition-all duration-300 shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#42B4FF] to-[var(--theme-accent,#AD5CFF)] opacity-70 group-hover:opacity-100 transition-opacity" />
            <div>
              <div className="flex items-center justify-between mb-4">
                <span
                  className="font-mono text-xs font-bold tracking-widest px-2.5 py-1 rounded-full border"
                  style={{
                    color: 'var(--theme-accent, #AD5CFF)',
                    borderColor: 'rgba(173, 92, 255, 0.3)',
                    backgroundColor: 'rgba(173, 92, 255, 0.08)',
                  }}
                >
                  [ 04 / ECOSYSTEM ]
                </span>
                <span className="text-[11px] font-mono text-slate-400">RUNGTA CAMPUS · BHILAI</span>
              </div>
              <h3 className="text-white font-bold text-2xl sm:text-3xl mb-3 tracking-tight">
                Belong to Central India's Premier Cloud Cohort
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mb-6">
                Immerse yourself in a full day of high-signal cloud engineering at Rungta International Skills University. Includes verified AWS SBG digital certificates, commemorative developer badges, t-shirt swag packs, and lavish buffet lunch.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-[#2D2364]/60">
              {['550+ Student Builders', 'Verified Certificates', 'Buffet Catering', 'Lifetime Alumni Access'].map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-md bg-[#1B1344] text-slate-300 border border-[#2D2364]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
