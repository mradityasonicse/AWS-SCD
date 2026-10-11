import React from 'react';
import { Mail, HeartHandshake } from 'lucide-react';
import { SPONSORS, COMMUNITY_PARTNERS, EVENT_DETAILS } from '../data/eventData';
import Text3DFlip from '@/registry/magicui/text-3d-flip';

interface SponsorsProps {
  onOpenContact: () => void;
}

export const Sponsors: React.FC<SponsorsProps> = ({ onOpenContact }) => {
  return (
    <section id="sponsors" className="relative py-28 px-4 sm:px-6 max-w-7xl mx-auto text-[#171717]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#D946EF]/5 rounded-full blur-[190px] pointer-events-none" />

      {/* Section Header with [ 07 ] Index */}
      <div className="border-b border-neutral-200 pb-6 mb-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
        <div className="flex items-baseline gap-6">
          <span className="text-[#D946EF] font-mono text-sm tracking-widest">[ 07 ]</span>
          <div>
            <p className="text-[#D946EF] text-xs font-bold uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
              <span className="w-6 h-[1px] bg-[#D946EF]" />
              Partners &amp; Supporters
            </p>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#171717] tracking-tight leading-tight">
              <Text3DFlip
                textClassName="text-[#171717]"
                flipTextClassName="text-[#D946EF]"
                rotateDirection="top"
                staggerDuration={0.02}
              >
                Backed by the best in the ecosystem.
              </Text3DFlip>
            </h2>
          </div>
        </div>
        <p className="text-neutral-500 text-sm max-w-sm font-mono">
          INDUSTRY LEADERS · HOST UNIVERSITY · BUILDER CLUBS
        </p>
      </div>

      {/* Primary Key Sponsors Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 justify-items-center">
        {SPONSORS.map((sponsor) => (
          <div
            key={sponsor.name}
            className="group relative w-full rounded-3xl border border-neutral-200 bg-white p-8 transition-all duration-300 hover:border-[#D946EF]/50 shadow-xs hover:shadow-[0_14px_32px_rgba(217,70,239,0.12)] flex flex-col items-center justify-between text-center"
          >
            <div className="mb-4">
              <span className="inline-block text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-[#D946EF] text-white">
                {sponsor.category}
              </span>
            </div>

            <div className="h-28 w-full rounded-2xl bg-neutral-50 border border-neutral-200 flex items-center justify-center my-2 p-3">
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="max-h-16 max-w-[150px] object-contain transition-transform duration-300 group-hover:scale-110 drop-shadow-sm"
              />
            </div>

            <div>
              <h3 className="text-base font-bold text-[#171717] group-hover:text-[#D946EF] transition-colors">
                {sponsor.name}
              </h3>
              {sponsor.description && (
                <p className="text-xs text-neutral-500 mt-1 line-clamp-2">
                  {sponsor.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Community Partners Strip */}
      <div className="mt-16 text-center">
        <span className="inline-flex rounded-full border border-[#D946EF]/30 bg-[#D946EF]/10 px-6 py-1.5 text-xs font-bold tracking-[0.25em] text-[#D946EF] uppercase mb-8">
          COMMUNITY PARTNERS
        </span>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {COMMUNITY_PARTNERS.map((partner) => (
            <div
              key={partner.name}
              className="rounded-2xl border border-neutral-200 bg-white p-5 flex flex-col items-center justify-center gap-3 hover:border-[#D946EF]/40 shadow-xs transition-all group"
            >
              <div className="h-12 w-full flex items-center justify-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-10 max-w-[100px] object-contain transition-transform group-hover:scale-110"
                />
              </div>
              <span className="text-xs font-bold text-neutral-800">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Sponsorship Prospectus Callout */}
      <div className="mt-20 relative overflow-hidden rounded-[36px] border border-neutral-200 bg-white p-8 sm:p-14 text-center shadow-xl">
        <div className="absolute -top-24 -left-24 w-60 h-60 bg-[#D946EF]/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-60 h-60 bg-[#22D3EE]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#D946EF]/10 border border-[#D946EF]/20 px-4 py-1 text-xs font-bold text-[#D946EF]">
            <HeartHandshake className="w-4 h-4 text-[#D946EF]" />
            <span>PARTNER WITH CENTRAL INDIA'S LARGEST CLOUD EVENT</span>
          </div>

          <h3 className="text-3xl sm:text-4xl font-black text-[#171717]">
            Interested in Sponsoring or Partnering?
          </h3>

          <p className="text-sm text-neutral-600 leading-relaxed">
            Gain unprecedented brand exposure to 500+ top engineering minds, cloud developers, and tech talent across universities in Central India.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 rounded-full bg-[#D946EF] hover:bg-[#C026D3] px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:scale-105 transition-transform cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>Request Sponsor Prospectus</span>
            </button>

            <a
              href={`mailto:${EVENT_DETAILS.contactEmail}?subject=Sponsorship%20Inquiry%20-%20AWS%20SCD%20RISU`}
              className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-neutral-50 px-6 py-3.5 text-xs font-bold text-neutral-800 hover:bg-neutral-100 transition-colors"
            >
              <span>{EVENT_DETAILS.contactEmail}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
