import React, { useState } from 'react';
import { EVENT_DETAILS } from '../data/eventData';
import { MapPin, Navigation, Train, Plane, ExternalLink } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem, SpotlightCard } from '@/components/ui/motion-primitives';
import { cn } from '@/lib/utils';

export const Venue: React.FC = () => {
  const [mapMode, setMapMode] = useState<'satellite' | 'blueprint'>('satellite');

  const mapUrl =
    mapMode === 'satellite'
      ? 'https://maps.google.com/maps?q=21.2350,81.3462&t=k&z=17&ie=UTF8&output=embed'
      : 'https://maps.google.com/maps?q=21.2350,81.3462&t=m&z=16&ie=UTF8&output=embed';

  const mapFilter =
    mapMode === 'satellite'
      ? 'contrast(1.35) brightness(0.60) saturate(0.75) hue-rotate(195deg)'
      : 'invert(90%) hue-rotate(180deg) brightness(85%) contrast(120%)';

  return (
    <section className="py-24 relative overflow-hidden px-4 sm:px-6" id="venue">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header with [ 05 ] Index */}
        <ScrollReveal>
          <div className="border-b border-[var(--theme-border,#3E3E3E)] pb-6 mb-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
            <div className="flex items-baseline gap-4 sm:gap-6">
              <span
                className="font-mono text-sm tracking-widest font-bold whitespace-nowrap shrink-0"
                style={{ color: 'var(--theme-accent, #AD5CFF)' }}
              >
                [ 05 ]
              </span>
              <div>
                <p
                  className="text-xs font-bold uppercase tracking-[0.2em] mb-2 flex items-center gap-2"
                  style={{ color: 'var(--theme-accent, #AD5CFF)' }}
                >
                  <span className="w-6 h-[1px]" style={{ backgroundColor: 'var(--theme-accent, #AD5CFF)' }} />
                  Event Campus
                </p>
                <h2 className="font-heading text-4xl sm:text-6xl md:text-7xl font-normal text-white tracking-wide uppercase leading-none">
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
              <span
                className="text-xs font-mono font-bold uppercase tracking-wider block mb-1"
                style={{ color: 'var(--theme-accent, #AD5CFF)' }}
              >
                ACADEMIC HOST INSTITUTION
              </span>
              <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-xl bg-white border border-white/40 mb-3 shadow-md w-fit">
                <img
                  src="/rungta-university-logo.jpg"
                  alt="Rungta International Skills University"
                  className="h-7 w-auto object-contain"
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
                Rungta International Skills University (RISU) is Central India's premier skill-first technology university. Equipped with a state-of-the-art 600-seat central auditorium, high-capacity gigabit Wi-Fi, and modern cloud laboratories.
              </p>
            </ScrollReveal>

            {/* Transit Specs with Secondary Palette & Staggered SpotlightCards */}
            <StaggerContainer className="grid grid-cols-2 gap-3" staggerDelay={0.06}>
              <StaggerItem>
                <SpotlightCard className="p-4 flex flex-col min-w-0">
                  <div className="flex items-center gap-2 text-slate-300 text-xs font-bold mb-1 truncate">
                    <Train className="w-4 h-4 text-[#42B4FF] shrink-0" />
                    <span className="truncate">Bhilai Power House</span>
                  </div>
                  <span className="text-white font-mono font-extrabold text-lg sm:text-xl">8 km</span>
                  <span className="text-slate-400 text-[11px] font-mono truncate">~18 min via cab / auto</span>
                </SpotlightCard>
              </StaggerItem>

              <StaggerItem>
                <SpotlightCard className="p-4 flex flex-col min-w-0">
                  <div className="flex items-center gap-2 text-slate-300 text-xs font-bold mb-1 truncate">
                    <Train className="w-4 h-4 text-[#FF57EA] shrink-0" />
                    <span className="truncate">Durg Junction</span>
                  </div>
                  <span className="text-white font-mono font-extrabold text-lg sm:text-xl">12 km</span>
                  <span className="text-slate-400 text-[11px] font-mono truncate">Direct railway terminal</span>
                </SpotlightCard>
              </StaggerItem>

              <StaggerItem>
                <SpotlightCard className="p-4 flex flex-col min-w-0">
                  <div className="flex items-center gap-2 text-slate-300 text-xs font-bold mb-1 truncate">
                    <Plane className="w-4 h-4 text-[#00E582] shrink-0" />
                    <span className="truncate">Raipur Airport</span>
                  </div>
                  <span className="text-white font-mono font-extrabold text-lg sm:text-xl">48 km</span>
                  <span className="text-slate-400 text-[11px] font-mono truncate">Swami Vivekananda (RPR)</span>
                </SpotlightCard>
              </StaggerItem>

              <StaggerItem>
                <SpotlightCard className="p-4 flex flex-col min-w-0">
                  <div className="flex items-center gap-2 text-slate-300 text-xs font-bold mb-1 truncate">
                    <Navigation
                      className="w-4 h-4 shrink-0"
                      style={{ color: 'var(--theme-accent, #AD5CFF)' }}
                    />
                    <span className="truncate">Auditorium</span>
                  </div>
                  <span className="text-white font-mono font-extrabold text-lg sm:text-xl">600+</span>
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

          {/* Right Map & Campus Preview (7 cols) */}
          <div className="lg:col-span-7">
            <ScrollReveal delay={0.15}>
              <div className="rounded-3xl bg-[var(--theme-surface,#1E1E1E)] border border-[var(--theme-border,#3E3E3E)] shadow-2xl overflow-hidden flex flex-col">
                <div className="p-3.5 sm:p-4 bg-[var(--theme-surface-elevated,#303030)] border-b border-[var(--theme-border,#3E3E3E)] flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-400" />
                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-400" />
                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-400" />
                    <span className="text-[11px] sm:text-xs font-mono text-slate-400 ml-1 truncate">
                      campus-radar · RISU Bhilai
                    </span>
                  </div>

                  {/* Dark Mode Switcher: Dark Satellite vs Dark Blueprint */}
                  <div className="flex items-center gap-1.5 bg-[var(--theme-surface,#1E1E1E)] p-1 rounded-xl border border-[var(--theme-border,#3E3E3E)]">
                    <button
                      type="button"
                      onClick={() => setMapMode('satellite')}
                      className={cn(
                        "px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold transition-all cursor-pointer flex items-center gap-1.5 select-none",
                        mapMode === 'satellite'
                          ? "bg-[var(--theme-surface-elevated,#303030)] text-white shadow-sm border border-[var(--theme-border,#3E3E3E)]"
                          : "text-slate-400 hover:text-slate-200"
                      )}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>Dark Satellite</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setMapMode('blueprint')}
                      className={cn(
                        "px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold transition-all cursor-pointer flex items-center gap-1.5 select-none",
                        mapMode === 'blueprint'
                          ? "bg-[var(--theme-surface-elevated,#303030)] text-white shadow-sm border border-[var(--theme-border,#3E3E3E)]"
                          : "text-slate-400 hover:text-slate-200"
                      )}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#42B4FF]" />
                      <span>Dark Blueprint</span>
                    </button>
                  </div>
                </div>

                <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-[var(--theme-surface,#1E1E1E)] overflow-hidden group">
                  <iframe
                    title="Rungta International Skills University - Campus Map"
                    src={mapUrl}
                    className="w-full h-full border-0 transition-all duration-300 scale-105 transform-gpu"
                    style={{
                      filter: mapFilter,
                      transform: 'translateZ(0)',
                    }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  />

                  {/* Dark Theme Ambient Inset Vignette (Blends map edges seamlessly with container) */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--theme-surface,#1E1E1E)]/85 via-transparent to-[var(--theme-surface,#1E1E1E)]/40" />
                  <div className="pointer-events-none absolute inset-0 [box-shadow:inset_0_0_50px_rgba(30,30,30,0.7)]" />

                  {/* Floating Coordinates & Campus Location Drop Pin Badge (Mobile-Safe Clipping) */}
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 pointer-events-none bg-[var(--theme-surface,#1E1E1E)]/95 backdrop-blur-md px-3 py-2 rounded-xl border border-[var(--theme-border,#3E3E3E)] text-xs font-mono text-slate-200 shadow-xl flex items-center gap-2.5 z-10 max-w-[calc(100%-1.5rem)] sm:max-w-md">
                    <span
                      className="w-2 h-2 rounded-full shrink-0 animate-pulse"
                      style={{ backgroundColor: 'var(--theme-accent, #AD5CFF)' }}
                    />
                    <div className="min-w-0">
                      <div className="font-bold text-white flex items-center gap-1.5 truncate">
                        <span>📍 RISU Bhilai Campus</span>
                      </div>
                      <div className="text-[10px] text-slate-400 truncate">
                        21.2350° N, 81.3462° E · Kohka-Kurud Road
                      </div>
                    </div>
                  </div>

                  {/* Satellite Mode HUD Tag */}
                  <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 pointer-events-none bg-[var(--theme-surface,#1E1E1E)]/95 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg border border-[var(--theme-border,#3E3E3E)] text-[9.5px] sm:text-[10px] font-mono text-emerald-400 flex items-center gap-1.5 z-10 shadow-lg">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{mapMode === 'satellite' ? 'DARK SATELLITE HUD' : 'DARK BLUEPRINT'}</span>
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
