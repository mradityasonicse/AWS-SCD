import React from 'react';
import { Mail, HeartHandshake } from 'lucide-react';
import { SPONSORS } from '../data/eventData';
import { ScrollReveal, SpotlightCard } from '@/components/ui/motion-primitives';

interface SponsorsProps {
  onOpenContact: () => void;
}

export const Sponsors: React.FC<SponsorsProps> = ({ onOpenContact }) => {
  return (
    <section id="sponsors" className="relative py-28 px-4 sm:px-6 max-w-7xl mx-auto text-white">
      {/* Section Header with [ 07 ] Index */}
      <ScrollReveal>
        <div className="border-b border-[var(--theme-border,#3E3E3E)] pb-6 mb-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div className="flex items-baseline gap-4 sm:gap-6">
            <span
              className="font-mono text-sm tracking-widest font-bold whitespace-nowrap shrink-0"
              style={{ color: 'var(--theme-accent, #AD5CFF)' }}
            >
              [ 06 ]
            </span>
            <div>
              <p
                className="text-xs font-bold uppercase tracking-[0.2em] mb-2 flex items-center gap-2"
                style={{ color: 'var(--theme-accent, #AD5CFF)' }}
              >
                <span className="w-6 h-[1px]" style={{ backgroundColor: 'var(--theme-accent, #AD5CFF)' }} />
                Partners &amp; Supporters
              </p>
              <h2 className="font-heading text-4xl sm:text-6xl md:text-7xl font-normal text-white tracking-wide uppercase leading-none">
                Backed by the best in the ecosystem.
              </h2>
            </div>
          </div>
          <p className="text-slate-400 text-xs sm:text-sm max-w-sm font-mono uppercase tracking-wider">
            INDUSTRY LEADERS · HOST UNIVERSITY · BUILDER CLUBS
          </p>
        </div>
      </ScrollReveal>

      {/* Primary Key Title Sponsor Showcase (Centered) */}
      <ScrollReveal>
        <div className="flex justify-center mb-20 px-2">
          {SPONSORS.map((sponsor) => (
            <div key={sponsor.name} className="relative group w-full max-w-xl">
              {/* Warm Ambient Glow behind Card */}
              <div
                className="absolute -inset-1.5 rounded-3xl opacity-25 group-hover:opacity-50 blur-2xl transition-all duration-500 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(circle, rgba(255, 153, 0, 0.45) 0%, rgba(173, 92, 255, 0.25) 55%, transparent 75%)',
                }}
              />

              <SpotlightCard
                className="relative w-full p-8 sm:p-12 flex flex-col items-center justify-between text-center transition-all duration-300 hover:-translate-y-1 bg-black/95 border border-[#2E2E2E] group-hover:border-[#FF9900]/40 shadow-2xl rounded-3xl"
              >
                {/* Category Badge */}
                <div className="mb-6">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-widest px-4 py-1.5 rounded-full bg-[#FF9900] text-[#161415] shadow-[0_0_18px_rgba(255,153,0,0.4)]">
                    <span>✦</span>
                    <span>TITLE SPONSOR</span>
                  </span>
                </div>

                {/* Logo Showcase Container */}
                <div
                  className="h-36 sm:h-44 w-full rounded-2xl border border-[#2E2E2E] bg-black/90 flex flex-col items-center justify-center p-6 transition-all duration-300 group-hover:border-[#FF9900]/30 group-hover:bg-black shadow-inner relative overflow-hidden my-2"
                >
                  <div
                    className="absolute inset-0 opacity-20 pointer-events-none"
                    style={{
                      background:
                        'radial-gradient(circle at 50% 40%, rgba(255, 153, 0, 0.5) 0%, transparent 70%)',
                    }}
                  />

                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="h-14 sm:h-16 max-w-[200px] object-contain drop-shadow-[0_4px_18px_rgba(255,153,0,0.35)] transition-transform duration-300 group-hover:scale-105 z-10"
                  />

                  <span className="text-xs font-mono tracking-widest font-bold text-[#FF9900] uppercase px-3 py-1 rounded-full bg-[#FF9900]/10 border border-[#FF9900]/25 mt-4 z-10">
                    {sponsor.collabName || 'AWS CLOUD · TITLE'}
                  </span>
                </div>

                {/* Sponsor Description */}
                <div className="mt-6">
                  <h3 className="font-heading text-3xl sm:text-4xl font-normal text-white uppercase tracking-wide mb-2.5">
                    {sponsor.name}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans max-w-md mx-auto">
                    {sponsor.description}
                  </p>
                </div>
              </SpotlightCard>
            </div>
          ))}
        </div>
      </ScrollReveal>


      {/* Sponsor Invitation Card */}
      <ScrollReveal delay={0.15}>
        <SpotlightCard className="p-8 sm:p-12 relative overflow-hidden text-center max-w-3xl mx-auto shadow-xl border-[var(--theme-border,#3E3E3E)]">
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-12 h-12 rounded-xl bg-[var(--theme-accent,#AD5CFF)]/10 border border-[var(--theme-accent,#AD5CFF)]/30 flex items-center justify-center mb-5 text-[var(--theme-accent,#AD5CFF)]">
              <HeartHandshake className="w-6 h-6" />
            </div>

            <h3 className="font-heading text-3xl sm:text-5xl font-normal text-white tracking-wide uppercase leading-none mb-3">
              Partner with Central India's Largest Student Cloud Summit
            </h3>
            <p className="text-sm text-slate-300 max-w-xl leading-relaxed mb-8">
              Reach 500+ aspiring cloud engineers, showcase developer tools, conduct technical demos, and hire top engineering talent directly from campus.
            </p>

            <button
              onClick={onOpenContact}
              className="jitter-btn-base jitter-btn-register font-bold text-sm px-8 py-3.5 flex items-center gap-2 cursor-pointer"
            >
              <Mail className="w-4 h-4 stroke-[2.5]" />
              <span>Request Sponsor Prospectus</span>
            </button>
          </div>
        </SpotlightCard>
      </ScrollReveal>
    </section>
  );
};

export default Sponsors;
