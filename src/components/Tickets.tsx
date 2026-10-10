import React from 'react';
import { Check, Sparkles, ArrowRight } from 'lucide-react';
import { TICKETS, EVENT_DETAILS } from '../data/eventData';

interface TicketsProps {
  onSelectTier: (tierId: string) => void;
}

export const Tickets: React.FC<TicketsProps> = ({ onSelectTier }) => {
  return (
    <section id="tickets" className="relative py-28 px-4 sm:px-6 max-w-7xl mx-auto text-white">
      {/* Glow Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-[#A45AFA]/10 rounded-full blur-[200px] pointer-events-none" />

      {/* Section Header with [ 09 ] Index */}
      <div className="border-b border-white/10 pb-6 mb-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
        <div className="flex items-baseline gap-6">
          <span className="text-[#ff9900] font-mono text-sm tracking-widest">[ 09 ]</span>
          <div>
            <p className="text-[#ff9900] text-xs font-bold uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
              <span className="w-6 h-[1px] bg-[#ff9900]" />
              Conference Passes
            </p>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
              Secure your <span className="font-serif italic font-normal text-[#ffb84d]">spot.</span>
            </h2>
          </div>
        </div>
        <p className="text-slate-400 text-sm max-w-sm font-mono">
          LIMITED AUDITORIUM SEATS · MEALS, SWAGS &amp; CERTIFICATE INCLUDED
        </p>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {TICKETS.map((tier) => {
          const percentClaimed = Math.round((tier.ticketsClaimed / tier.totalTickets) * 100);
          const isClosed = tier.status === 'closed';

          return (
            <div
              key={tier.id}
              className={`relative rounded-3xl border flex flex-col justify-between p-6 sm:p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 ${
                tier.popular
                  ? 'border-[#A45AFA] bg-gradient-to-b from-[#181135]/90 to-[#07091a]/95 shadow-[0_15px_45px_rgba(164,90,250,0.3)] ring-1 ring-[#A45AFA]/50'
                  : 'border-white/10 bg-white/[0.03] hover:border-white/25 hover:bg-white/[0.05]'
              } ${isClosed ? 'opacity-70 saturate-50' : ''}`}
            >
              {/* Popular / Badge Chip */}
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full ${
                    isClosed
                      ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                      : tier.badge === 'Closing Soon'
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                      : 'bg-[#A45AFA]/20 text-[#DDBEFF] border border-[#A45AFA]/30'
                  }`}
                >
                  {tier.badge}
                </span>

                {tier.popular && (
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#FF9900] flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    MOST POPULAR
                  </span>
                )}
              </div>

              {/* Tier Name & Price */}
              <div>
                <h3 className="text-xl font-black text-white">{tier.name}</h3>

                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                    ₹{tier.price}
                  </span>
                  <span className="text-xs font-semibold text-slate-400">/ attendee</span>
                </div>

                {/* Progress bar of claimed tickets */}
                <div className="mt-5 space-y-1.5">
                  <div className="flex justify-between text-[11px] font-bold text-slate-400">
                    <span>Claimed: {tier.ticketsClaimed}/{tier.totalTickets}</span>
                    <span className="text-white">{percentClaimed}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                    <div
                      style={{ width: `${percentClaimed}%` }}
                      className={`h-full rounded-full transition-all duration-500 ${
                        isClosed
                          ? 'bg-rose-500'
                          : percentClaimed > 80
                          ? 'bg-gradient-to-r from-amber-400 to-rose-500'
                          : 'bg-gradient-to-r from-[#A45AFA] to-purple-400'
                      }`}
                    />
                  </div>
                </div>

                {/* Inclusions List */}
                <div className="mt-6 pt-6 border-t border-white/10 space-y-3">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block">
                    WHAT'S INCLUDED:
                  </span>
                  {tier.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <div className="mt-0.5 rounded-full p-0.5 bg-emerald-500/20 text-emerald-400 shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="leading-snug">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Action Button */}
              <div className="mt-8 pt-4">
                <button
                  onClick={() => onSelectTier(tier.id)}
                  disabled={isClosed}
                  className={`w-full py-3.5 px-4 rounded-xl font-extrabold text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                    isClosed
                      ? 'bg-white/10 text-slate-500 cursor-not-allowed'
                      : tier.popular
                      ? 'bg-gradient-to-r from-[#A45AFA] via-[#C084FC] to-[#FF9900] text-white shadow-lg shadow-purple-900/50 hover:scale-105 active:scale-95'
                      : 'border border-white/20 bg-white/5 text-white hover:bg-white/15 hover:border-[#A45AFA]'
                  }`}
                >
                  <span>{tier.buttonText}</span>
                  {!isClosed && <ArrowRight className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Group Booking Callout */}
      <div className="mt-14 rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-center max-w-2xl mx-auto backdrop-blur-md">
        <h4 className="text-base font-bold text-white">
          Registering in a College Delegation or Tech Club Group?
        </h4>
        <p className="text-xs text-slate-400 mt-1">
          Special group registration discounts and mentor passes are available for student communities of 10+ members from any university.
        </p>
        <a
          href={`mailto:${EVENT_DETAILS.contactEmail}?subject=Group%20Booking%20Inquiry%20-%20AWS%20SCD%20RISU`}
          className="mt-3 inline-block text-xs font-bold text-[#FF9900] hover:underline"
        >
          Contact Delegation Desk: {EVENT_DETAILS.contactEmail} →
        </a>
      </div>
    </section>
  );
};
