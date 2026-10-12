import React from 'react';
import { EVENT_DETAILS } from '../data/eventData';
import { MapPin, Navigation, Train, Plane, ExternalLink } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem, SpotlightCard } from '@/components/ui/motion-primitives';

export const Venue: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden px-4 sm:px-6" id="venue">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#FF9900]/06 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header with [ 05 ] Index */}
        <ScrollReveal>
          <div className="border-b border-[#232F3E] pb-6 mb-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
            <div className="flex items-baseline gap-4 sm:gap-6">
              <span className="text-[#FF9900] font-mono text-sm tracking-widest font-bold whitespace-nowrap shrink-0">
                [ 05 ]
              </span>
              <div>
                <p className="text-[#FF9900] text-xs font-bold uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
                  <span className="w-6 h-[1px] bg-[#FF9900]" />
                  Event Campus
                </p>
                <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.12]">
                  Hosted at RISU Bhilai.
                </h2>
              </div>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm max-w-sm font-mono uppercase tracking-wider">
              RUNGTA KNOWLEDGE CITY · KOHKA-KURUD ROAD, BHILAI
            </p>
          </div>
        </ScrollReveal>

        {/* Venue Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Details (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <ScrollReveal delay={0.1}>
              <span className="text-xs font-mono font-bold text-[#FF9900] uppercase tracking-wider block mb-1">
                ACADEMIC HOST INSTITUTION
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
                {EVENT_DETAILS.institution}
              </h3>
              <p className="text-[#FF9900] text-sm font-medium flex items-center gap-2 mb-4">
                <MapPin className="w-4 h-4 shrink-0" />
                {EVENT_DETAILS.venueAddress}
              </p>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Rungta International Skills University (RISU) is Central India's premier skill-first technology university. Equipped with a state-of-the-art 600-seat central auditorium, high-capacity gigabit Wi-Fi, and modern cloud laboratories.
              </p>
            </ScrollReveal>

            {/* Transit Specs with Staggered SpotlightCards */}
            <StaggerContainer className="grid grid-cols-2 gap-3" staggerDelay={0.06}>
              <StaggerItem>
                <SpotlightCard className="p-4 flex flex-col">
                  <div className="flex items-center gap-2 text-slate-300 text-xs font-bold mb-1">
                    <Train className="w-4 h-4 text-[#FF9900]" />
                    <span>Bhilai Power House</span>
                  </div>
                  <span className="text-white font-extrabold text-lg">8 km</span>
                  <span className="text-slate-400 text-[11px]">~18 min via cab / auto</span>
                </SpotlightCard>
              </StaggerItem>

              <StaggerItem>
                <SpotlightCard className="p-4 flex flex-col">
                  <div className="flex items-center gap-2 text-slate-300 text-xs font-bold mb-1">
                    <Train className="w-4 h-4 text-[#FF9900]" />
                    <span>Durg Junction</span>
                  </div>
                  <span className="text-white font-extrabold text-lg">12 km</span>
                  <span className="text-slate-400 text-[11px]">Direct railway terminal</span>
                </SpotlightCard>
              </StaggerItem>

              <StaggerItem>
                <SpotlightCard className="p-4 flex flex-col">
                  <div className="flex items-center gap-2 text-slate-300 text-xs font-bold mb-1">
                    <Plane className="w-4 h-4 text-[#FF9900]" />
                    <span>Raipur Airport</span>
                  </div>
                  <span className="text-white font-extrabold text-lg">48 km</span>
                  <span className="text-slate-400 text-[11px]">Swami Vivekananda (RPR)</span>
                </SpotlightCard>
              </StaggerItem>

              <StaggerItem>
                <SpotlightCard className="p-4 flex flex-col">
                  <div className="flex items-center gap-2 text-slate-300 text-xs font-bold mb-1">
                    <Navigation className="w-4 h-4 text-[#FF9900]" />
                    <span>Auditorium</span>
                  </div>
                  <span className="text-white font-extrabold text-lg">600+</span>
                  <span className="text-slate-400 text-[11px]">Tiered acoustic seats</span>
                </SpotlightCard>
              </StaggerItem>
            </StaggerContainer>

            <ScrollReveal delay={0.25}>
              <a
                href={EVENT_DETAILS.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#FF9900] hover:bg-[#FFAC33] active:bg-[#E68A00] text-[#0B0F17] transition-all font-black text-sm w-full sm:w-fit shadow-md hover:shadow-[0_8px_25px_rgba(255,153,0,0.35)] cursor-pointer active:scale-95"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-4 h-4 text-[#0B0F17]" />
              </a>
            </ScrollReveal>
          </div>

          {/* Right Map & Campus Preview (7 cols) */}
          <div className="lg:col-span-7">
            <ScrollReveal delay={0.15}>
              <div className="rounded-3xl bg-[#131921] border border-[#232F3E] shadow-2xl overflow-hidden flex flex-col">
                <div className="p-3.5 sm:p-4 bg-[#161E2D] border-b border-[#232F3E] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-400" />
                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-400" />
                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-400" />
                    <span className="text-[11px] sm:text-xs font-mono text-slate-400 ml-2 truncate">
                      campus-satellite · RISU Central Auditorium
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#FF9900] bg-[#FF9900]/10 px-2 py-0.5 rounded border border-[#FF9900]/20 font-bold shrink-0">
                    SCD VENUE
                  </span>
                </div>

                <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-[#0B0F17] overflow-hidden group">
                  <iframe
                    title="RISU Bhilai Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.539308688487!2d81.33924377598851!3d21.210452380482596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a29235e1657c913%3A0xa621d9eb169123fe!2sRungta%20International%20Skills%20University!5e0!3m2!1sen!2sin!4v1713500000000!5m2!1sen!2sin"
                    className="w-full h-full border-0 filter grayscale contrast-125 opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <div className="absolute top-4 left-4 pointer-events-none bg-[#131921]/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-[#232F3E] text-xs font-mono text-slate-300 shadow-md">
                    📍 21.2105° N, 81.3414° E · Bhilai
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Venue;
