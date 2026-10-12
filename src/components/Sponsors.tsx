import React from 'react';
import { Mail, HeartHandshake } from 'lucide-react';
import { SPONSORS, COMMUNITY_PARTNERS } from '../data/eventData';
import { ScrollReveal, StaggerContainer, StaggerItem, SpotlightCard } from '@/components/ui/motion-primitives';

interface SponsorsProps {
  onOpenContact: () => void;
}

export const Sponsors: React.FC<SponsorsProps> = ({ onOpenContact }) => {
  return (
    <section id="sponsors" className="relative py-28 px-4 sm:px-6 max-w-7xl mx-auto text-white">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#FF9900]/05 rounded-full blur-[190px] pointer-events-none" />

      {/* Section Header with [ 07 ] Index */}
      <ScrollReveal>
        <div className="border-b border-[#232F3E] pb-6 mb-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div className="flex items-baseline gap-4 sm:gap-6">
            <span className="text-[#FF9900] font-mono text-sm tracking-widest font-bold whitespace-nowrap shrink-0">
              [ 07 ]
            </span>
            <div>
              <p className="text-[#FF9900] text-xs font-bold uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
                <span className="w-6 h-[1px] bg-[#FF9900]" />
                Partners &amp; Supporters
              </p>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.12]">
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
        {SPONSORS.map((sponsor) => (
          <StaggerItem key={sponsor.name} className="w-full">
            <SpotlightCard className="w-full h-full p-8 flex flex-col items-center justify-between text-center transition-all duration-300 hover:-translate-y-1 shadow-md">
              <div className="mb-4">
                <span className="inline-block text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-[#FF9900] text-[#0B0F17]">
                  {sponsor.category}
                </span>
              </div>

              <div className="h-28 w-full rounded-2xl bg-[#161E2D] border border-[#232F3E] flex items-center justify-center my-2 p-3">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="max-h-16 max-w-[150px] object-contain transition-transform duration-300 group-hover:scale-110 drop-shadow-sm"
                />
              </div>

              <div className="mt-4">
                <h4 className="font-extrabold text-white text-base mb-1">
                  {sponsor.name}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {sponsor.description}
                </p>
              </div>
            </SpotlightCard>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* Community Partners Strip */}
      <div className="mb-20">
        <ScrollReveal>
          <div className="text-center mb-10">
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#FF9900] bg-[#FF9900]/10 border border-[#FF9900]/30 px-3.5 py-1 rounded-full">
              Community Partners
            </span>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6" staggerDelay={0.08}>
          {COMMUNITY_PARTNERS.map((partner) => (
            <StaggerItem key={partner.name}>
              <SpotlightCard className="p-6 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1">
                <div className="h-16 w-16 rounded-xl bg-[#161E2D] border border-[#232F3E] flex items-center justify-center mb-4 p-2">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-10 max-w-10 object-contain"
                  />
                </div>
                <h4 className="font-bold text-white text-sm mb-1">{partner.name}</h4>
                <span className="text-[10px] font-mono text-[#FF9900] uppercase">
                  {partner.category}
                </span>
              </SpotlightCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* Sponsor Invitation Card */}
      <ScrollReveal delay={0.15}>
        <SpotlightCard className="p-8 sm:p-12 relative overflow-hidden text-center max-w-3xl mx-auto shadow-2xl border-[#232F3E]">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF9900]/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center">
            <div className="w-12 h-12 rounded-2xl bg-[#FF9900]/10 border border-[#FF9900]/30 flex items-center justify-center mb-5 text-[#FF9900]">
              <HeartHandshake className="w-6 h-6" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
              Partner with Central India's Largest Student Cloud Summit
            </h3>
            <p className="text-sm text-slate-300 max-w-xl leading-relaxed mb-8">
              Reach 500+ aspiring cloud engineers, showcase developer tools, conduct technical demos, and hire top engineering talent directly from campus.
            </p>

            <button
              onClick={onOpenContact}
              className="cursor-pointer bg-[#FF9900] hover:bg-[#FFAC33] active:bg-[#E68A00] text-[#0B0F17] font-black text-sm px-8 py-4 rounded-full transition-all duration-200 shadow-[0_6px_25px_rgba(255,153,0,0.4)] flex items-center gap-2 active:scale-95"
            >
              <Mail className="w-4 h-4" />
              <span>Request Sponsor Prospectus</span>
            </button>
          </div>
        </SpotlightCard>
      </ScrollReveal>
    </section>
  );
};

export default Sponsors;
