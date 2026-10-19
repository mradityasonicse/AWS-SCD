import React from 'react';
import { EVENT_DETAILS } from '../data/eventData';
import { MapPin, Navigation, Train, Plane, ExternalLink } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem, SpotlightCard } from '@/components/ui/motion-primitives';

export const Venue: React.FC = () => {

  return (
    <section className="py-24 relative overflow-hidden px-4 sm:px-6" id="venue">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Venue Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Details (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <ScrollReveal delay={0.1}>
              <div className="flex items-center gap-3 mb-2">
               
                <span
                  className="text-xs font-mono font-bold uppercase tracking-wider block"
                  style={{ color: 'var(--theme-accent, #AD5CFF)' }}
                >
                  ACADEMIC HOST INSTITUTION
                </span>
              </div>
              <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-white border border-white/40 mb-3 shadow-md w-fit">
                <img
                  src="/rungta-logo.png"
                  alt="Rungta International Skills University"
                  className="h-7 w-7 object-contain"
                />
                <span className="text-[11px] font-bold text-slate-900 tracking-wider font-mono uppercase">
                  Official Campus Host
                </span>
              </div>
              <h3 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-white uppercase tracking-wide mb-2">
                {EVENT_DETAILS.institution}
              </h3>
              <p
                className="text-sm font-medium flex items-center gap-2 mb-4"
                style={{ color: 'var(--theme-accent, #AD5CFF)' }}
              >
                <MapPin className="w-4 h-4 shrink-0 stroke-[2.2]" />
                <span className="font-mono text-xs sm:text-sm">{EVENT_DETAILS.venueAddress}</span>
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                Rungta International Skills University is Central India's premier skill-first technology university. Equipped with a state-of-the-art 600-seat central auditorium, high-capacity gigabit Wi-Fi, and modern cloud laboratories.
              </p>
            </ScrollReveal>

            {/* Transit Specs with Secondary Palette & Staggered SpotlightCards */}
            <StaggerContainer className="grid grid-cols-2 gap-3" staggerDelay={0.06}>
              <StaggerItem>
                <SpotlightCard className="p-4 flex flex-col min-w-0 gap-1">
                  <div className="flex items-center gap-2 text-slate-300 text-xs font-bold truncate">
                    <Train className="w-4 h-4 text-[#42B4FF] shrink-0" />
                    <span className="truncate">Bhilai Power House</span>
                  </div>
                  <span className="text-white font-mono font-extrabold text-lg sm:text-xl leading-none">8 km</span>
                  <span className="text-slate-400 text-[11px] font-mono truncate">~18 min via cab / auto</span>
                </SpotlightCard>
              </StaggerItem>

              <StaggerItem>
                <SpotlightCard className="p-4 flex flex-col min-w-0 gap-1">
                  <div className="flex items-center gap-2 text-slate-300 text-xs font-bold truncate">
                    <Train className="w-4 h-4 text-[#AD5CFF] shrink-0" />
                    <span className="truncate">Durg Junction</span>
                  </div>
                  <span className="text-white font-mono font-extrabold text-lg sm:text-xl leading-none">12 km</span>
                  <span className="text-slate-400 text-[11px] font-mono truncate">Direct railway terminal</span>
                </SpotlightCard>
              </StaggerItem>

              <StaggerItem>
                <SpotlightCard className="p-4 flex flex-col min-w-0 gap-1">
                  <div className="flex items-center gap-2 text-slate-300 text-xs font-bold truncate">
                    <Plane className="w-4 h-4 text-[#00E582] shrink-0" />
                    <span className="truncate">Raipur Airport</span>
                  </div>
                  <span className="text-white font-mono font-extrabold text-lg sm:text-xl leading-none">48 km</span>
                  <span className="text-slate-400 text-[11px] font-mono truncate">Swami Vivekananda (RPR)</span>
                </SpotlightCard>
              </StaggerItem>

              <StaggerItem>
                <SpotlightCard className="p-4 flex flex-col min-w-0 gap-1">
                  <div className="flex items-center gap-2 text-slate-300 text-xs font-bold truncate">
                    <Navigation
                      className="w-4 h-4 shrink-0"
                      style={{ color: 'var(--theme-accent, #AD5CFF)' }}
                    />
                    <span className="truncate">Auditorium</span>
                  </div>
                  <span className="text-white font-mono font-extrabold text-lg sm:text-xl leading-none">600+</span>
                  <span className="text-slate-400 text-[11px] font-mono truncate">Tiered acoustic seats</span>
                </SpotlightCard>
              </StaggerItem>
            </StaggerContainer>

            <ScrollReveal delay={0.25}>
              <a
                href={EVENT_DETAILS.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="jitter-btn-base jitter-btn-register inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm w-full sm:w-fit cursor-pointer select-none"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-4 h-4 text-white" />
              </a>
            </ScrollReveal>
          </div>

          {/* Right Campus Showcase Frame (7 cols) - Clean Photo Frame (Zero UI Slop) */}
          <div className="lg:col-span-7">
            <ScrollReveal delay={0.15}>
              <div className="relative rounded-2xl sm:rounded-3xl border border-white/10 bg-white/[0.02] shadow-2xl overflow-hidden group">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0A0D14]">
                  <img
                    src="/rungta-campus.png"
                    alt="Rungta International Skills University Main Campus"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    loading="lazy"
                  />
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
