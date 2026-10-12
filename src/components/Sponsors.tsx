import React from 'react';
import { Mail, HeartHandshake } from 'lucide-react';
import { SPONSORS, COMMUNITY_PARTNERS, EVENT_DETAILS } from '../data/eventData';
import Text3DFlip from '@/registry/magicui/text-3d-flip';

interface SponsorsProps {
  onOpenContact: () => void;
}

export const Sponsors: React.FC<SponsorsProps> = ({ onOpenContact }) => {
  return (
    <section id="sponsors" className="relative py-28 px-4 sm:px-6 max-w-7xl mx-auto text-white">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#FF9900]/5 rounded-full blur-[190px] pointer-events-none" />

      {/* Section Header with [ 07 ] Index */}
      <div className="border-b border-[#232F3E] pb-6 mb-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
        <div className="flex items-baseline gap-6">
          <span className="text-[#FF9900] font-mono text-sm tracking-widest">[ 07 ]</span>
          <div>
            <p className="text-[#FF9900] text-xs font-bold uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
              <span className="w-6 h-[1px] bg-[#FF9900]" />
              Partners &amp; Supporters
            </p>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
              <Text3DFlip
                textClassName="text-white"
                flipTextClassName="text-[#FF9900]"
                rotateDirection="top"
                staggerDuration={0.02}
              >
                Backed by the best in the ecosystem.
              </Text3DFlip>
            </h2>
          </div>
        </div>
        <p className="text-slate-400 text-sm max-w-sm font-mono">
          INDUSTRY LEADERS · HOST UNIVERSITY · BUILDER CLUBS
        </p>
      </div>

      {/* Primary Key Sponsors Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 justify-items-center">
        {SPONSORS.map((sponsor) => (
          <div
            key={sponsor.name}
            className="group relative w-full rounded-3xl border border-[#232F3E] bg-[#131921] p-8 transition-all duration-300 hover:border-[#FF9900]/50 shadow-md hover:shadow-[0_14px_32px_rgba(255,153,0,0.15)] flex flex-col items-center justify-between text-center"
          >
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

            <div>
              <h3 className="text-base font-bold text-white group-hover:text-[#FF9900] transition-colors">
                {sponsor.name}
              </h3>
              {sponsor.description && (
                <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                  {sponsor.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Community Partners Strip */}
      <div className="mt-16 text-center">
        <span className="inline-flex rounded-full border border-[#FF9900]/30 bg-[#FF9900]/10 px-6 py-1.5 text-xs font-bold tracking-[0.25em] text-[#FF9900] uppercase mb-8">
          COMMUNITY PARTNERS
        </span>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {COMMUNITY_PARTNERS.map((partner) => (
            <div
              key={partner.name}
              className="rounded-2xl border border-[#232F3E] bg-[#131921] p-5 flex flex-col items-center justify-center gap-3 hover:border-[#FF9900]/40 shadow-md transition-all group"
            >
              <div className="h-12 w-full flex items-center justify-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-10 max-w-[100px] object-contain transition-transform group-hover:scale-110"
                />
              </div>
              <span className="text-xs font-bold text-slate-200">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Sponsorship Prospectus Callout */}
      <div className="mt-20 relative overflow-hidden rounded-[36px] border border-[#232F3E] bg-[#131921] p-8 sm:p-14 text-center shadow-2xl">
        <div className="absolute -top-24 -left-24 w-60 h-60 bg-[#FF9900]/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-60 h-60 bg-[#00A4E4]/08 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#FF9900]/10 border border-[#FF9900]/20 px-4 py-1 text-xs font-bold text-[#FF9900]">
            <HeartHandshake className="w-4 h-4 text-[#FF9900]" />
            <span>PARTNER WITH CENTRAL INDIA'S LARGEST CLOUD EVENT</span>
          </div>

          <h3 className="text-3xl sm:text-4xl font-black text-white">
            Interested in Sponsoring or Partnering?
          </h3>

          <p className="text-sm text-slate-300 leading-relaxed">
            Gain unprecedented brand exposure to 500+ top engineering minds, cloud developers, and tech talent across universities in Central India.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 rounded-full bg-[#FF9900] hover:bg-[#FFAC33] active:bg-[#E68A00] px-7 py-3.5 text-xs font-black uppercase tracking-wider text-[#0B0F17] shadow-md hover:scale-105 transition-transform cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>Request Sponsor Prospectus</span>
            </button>

            <a
              href={`mailto:${EVENT_DETAILS.contactEmail}?subject=Sponsorship%20Inquiry%20-%20AWS%20SCD%20RISU`}
              className="inline-flex items-center gap-2 rounded-full border border-[#232F3E] bg-[#161E2D] px-6 py-3.5 text-xs font-bold text-slate-200 hover:bg-[#1C273B] transition-colors"
            >
              <span>{EVENT_DETAILS.contactEmail}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
