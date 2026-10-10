import React from 'react';
import { Mail, HeartHandshake } from 'lucide-react';
import { SPONSORS, COMMUNITY_PARTNERS, EVENT_DETAILS } from '../data/eventData';

interface SponsorsProps {
  onOpenContact: () => void;
}

export const Sponsors: React.FC<SponsorsProps> = ({ onOpenContact }) => {
  return (
    <section id="sponsors" className="relative py-28 px-4 sm:px-6 max-w-7xl mx-auto text-white">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#A45AFA]/8 rounded-full blur-[190px] pointer-events-none" />

      {/* Section Header with [ 07 ] Index */}
      <div className="border-b border-white/10 pb-6 mb-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
        <div className="flex items-baseline gap-6">
          <span className="text-[#ff9900] font-mono text-sm tracking-widest">[ 07 ]</span>
          <div>
            <p className="text-[#ff9900] text-xs font-bold uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
              <span className="w-6 h-[1px] bg-[#ff9900]" />
              Partners &amp; Supporters
            </p>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
              Backed by the <span className="font-serif italic font-normal text-[#ffb84d]">best in the ecosystem.</span>
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
            className="group relative w-full rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-300 hover:border-[#A45AFA]/60 hover:bg-white/[0.06] hover:shadow-[0_10px_35px_rgba(164,90,250,0.25)] flex flex-col items-center justify-between text-center"
          >
            <div className="mb-4">
              <span className="inline-block text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-gradient-to-r from-[#A45AFA] to-[#C084FC] text-white">
                {sponsor.category}
              </span>
            </div>

            <div className="h-28 w-full rounded-2xl bg-white/[0.04] border border-white/5 flex items-center justify-center my-2 p-3">
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="max-h-16 max-w-[150px] object-contain transition-transform duration-300 group-hover:scale-110 drop-shadow-md"
              />
            </div>

            <div>
              <h3 className="text-base font-bold text-white group-hover:text-[#DDBEFF] transition-colors">
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
        <span className="inline-flex rounded-full border border-[#A45AFA]/30 bg-[#A45AFA]/10 px-6 py-1.5 text-xs font-bold tracking-[0.25em] text-[#DDBEFF] backdrop-blur-xl uppercase mb-8">
          COMMUNITY PARTNERS
        </span>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {COMMUNITY_PARTNERS.map((partner) => (
            <div
              key={partner.name}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 flex flex-col items-center justify-center gap-3 hover:border-white/20 transition-all group"
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
      <div className="mt-20 relative overflow-hidden rounded-[36px] border border-purple-500/25 bg-gradient-to-r from-[#110e2b] via-[#090b1e] to-[#150e24] p-8 sm:p-14 text-center backdrop-blur-2xl shadow-2xl">
        <div className="absolute -top-24 -left-24 w-60 h-60 bg-[#A45AFA]/25 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-60 h-60 bg-[#FF9900]/20 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-1 text-xs font-bold text-[#DDBEFF]">
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
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#A45AFA] via-[#C084FC] to-[#FF9900] px-7 py-3 text-xs font-black uppercase tracking-wider text-white shadow-lg hover:scale-105 transition-transform cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>Request Sponsor Prospectus</span>
            </button>

            <a
              href={`mailto:${EVENT_DETAILS.contactEmail}?subject=Sponsorship%20Inquiry%20-%20AWS%20SCD%20RISU`}
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-xs font-bold text-white hover:bg-white/10 transition-colors"
            >
              <span>{EVENT_DETAILS.contactEmail}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
