import React from 'react';
import { Mail, HeartHandshake } from 'lucide-react';
import { SPONSORS } from '../data/eventData';
import { ScrollReveal, StaggerContainer, StaggerItem, SpotlightCard } from '@/components/ui/motion-primitives';

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

      {/* Primary Key Sponsors Grid */}
      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 justify-items-center" staggerDelay={0.08}>
        {SPONSORS.map((sponsor, idx) => {
          const badgeColors = [
            '#FF9900', // Title Sponsor (AWS Smile Orange)
            'var(--theme-accent, #AD5CFF)', // Host University (Electric Purple)
            '#42B4FF', // Cloud Blue
            '#00E582', // Cyber Green
          ];
          const badgeBg = badgeColors[idx % badgeColors.length];

          return (
            <StaggerItem key={sponsor.name} className="w-full">
              <SpotlightCard className="w-full h-full p-8 flex flex-col items-center justify-between text-center transition-all duration-300 hover:-translate-y-1 shadow-md">
                <div className="mb-4">
                  <span
                    className="inline-block text-[11px] font-mono font-bold uppercase tracking-wider px-3.5 py-1 rounded-full text-[#1E1E1E]"
                    style={{ backgroundColor: badgeBg }}
                  >
                    {sponsor.category}
                  </span>
                </div>

                <div className="h-28 w-full rounded-2xl bg-[var(--theme-surface-elevated,#303030)] border border-[var(--theme-border,#3E3E3E)] flex items-center justify-center my-2 p-3">
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="max-h-16 max-w-[150px] object-contain transition-transform duration-300 group-hover:scale-110 drop-shadow-sm"
                  />
                </div>

                <div className="mt-4">
                  <h4 className="font-bold text-white text-base mb-1">
                    {sponsor.name}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    {sponsor.description}
                  </p>
                </div>
              </SpotlightCard>
            </StaggerItem>
          );
        })}
      </StaggerContainer>


      {/* Sponsor Invitation Card */}
      <ScrollReveal delay={0.15}>
        <SpotlightCard className="p-8 sm:p-12 relative overflow-hidden text-center max-w-3xl mx-auto shadow-xl border-[var(--theme-border,#3E3E3E)]">
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-12 h-12 rounded-xl bg-[#FF9900]/10 border border-[#FF9900]/30 flex items-center justify-center mb-5 text-[#FF9900]">
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
              className="jitter-btn-base jitter-btn-orange font-bold text-sm px-8 py-3.5 flex items-center gap-2 cursor-pointer"
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
