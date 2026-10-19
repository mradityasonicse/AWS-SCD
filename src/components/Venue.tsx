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

          {/* Right Campus Showcase Frame (7 cols) */}
          <div className="lg:col-span-7">
            <ScrollReveal delay={0.15}>
              {/* Clean Architectural Campus Photo Showcase */}
              <div className="relative rounded-2xl sm:rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl shadow-2xl overflow-hidden group">
                {/* Main Campus Image Viewport */}
                <div className="relative aspect-[16/10] sm:aspect-[16/10] w-full overflow-hidden bg-[#0A0D14]">
                  <img
                    src="/rungta-campus.png"
                    alt="Rungta International Skills University Main Campus"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    loading="lazy"
                  />

                  {/* Soft Legibility Gradient at Bottom */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                  {/* Clean Venue Pill Top Left */}
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-semibold text-white bg-black/60 backdrop-blur-md border border-white/15 shadow-lg">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--theme-accent,#AD5CFF)]" />
                      <span>Campus Venue · Bhilai</span>
                    </span>
                  </div>

                  {/* Clean Bottom Overlay Card */}
                  <div className="absolute inset-x-0 bottom-0 p-3 sm:p-5 z-10">
                    <div className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-[#0B0F17]/90 backdrop-blur-xl border border-white/15 shadow-2xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <span
                            className="text-[9.5px] sm:text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded"
                            style={{
                              color: 'var(--theme-accent, #AD5CFF)',
                              backgroundColor: 'rgba(173, 92, 255, 0.12)',
                              border: '1px solid rgba(173, 92, 255, 0.3)',
                            }}
                          >
                            OFFICIAL VENUE
                          </span>
                          <span className="text-[9.5px] sm:text-[10px] font-mono text-slate-300 bg-white/5 border border-white/10 px-2 py-0.5 rounded">
                            600+ AUDITORIUM SEATS
                          </span>
                        </div>
                        <h4 className="text-white font-bold text-sm sm:text-base md:text-lg tracking-tight truncate">
                          {EVENT_DETAILS.institution}
                        </h4>
                        <p className="text-slate-400 text-[11px] sm:text-xs mt-0.5 flex items-center gap-1.5 truncate">
                          <MapPin className="w-3.5 h-3.5 text-[var(--theme-accent,#AD5CFF)] shrink-0" />
                          <span className="truncate">Kohka-Kurud Road, Bhilai, CG 490024</span>
                        </p>
                      </div>

                      <a
                        href={EVENT_DETAILS.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 hover:border-[var(--theme-accent,#AD5CFF)] text-white text-xs font-semibold transition-all shadow-md group/btn shrink-0"
                      >
                        <Navigation className="w-3.5 h-3.5 text-[var(--theme-accent,#AD5CFF)] group-hover/btn:rotate-45 transition-transform" />
                        <span>Get Directions</span>
                        <ExternalLink className="w-3 h-3 text-slate-400 group-hover/btn:text-white transition-colors" />
                      </a>
                    </div>
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
