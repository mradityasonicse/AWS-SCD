import React from 'react';
import { SPEAKERS, type Speaker } from '../data/eventData';
import { ArrowUpRight, Building2, BookOpen } from 'lucide-react';
import StackingCards, { StackingCardItem } from '@/components/ui/stacking-cards';
import { cn } from '@/lib/utils';
import Text3DFlip from '@/registry/magicui/text-3d-flip';

const LinkedInIcon: React.FC<{ className?: string }> = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.6 1.6 0 0 0 1.6-1.6 1.6 1.6 0 0 0-3.2 0 1.6 1.6 0 0 0 1.6 1.6m1.4 9.74v-8.37H5.06v8.37z" />
  </svg>
);

export const Speakers: React.FC = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check, { passive: true });
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <section className="py-20 sm:py-24 relative overflow-visible px-4" id="speakers">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with [ 03 ] Index */}
        <div className="border-b border-neutral-200 pb-6 mb-12 sm:mb-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div className="flex items-baseline gap-6">
            <span className="text-[#D946EF] font-mono text-sm tracking-widest">[ 03 ]</span>
            <div>
              <p className="text-[#D946EF] text-xs font-bold uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
                <span className="w-6 h-[1px] bg-[#D946EF]" />
                Summit Speakers
              </p>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#171717] tracking-tight leading-tight">
                <Text3DFlip
                  textClassName="text-[#171717]"
                  flipTextClassName="text-[#D946EF]"
                  rotateDirection="top"
                  staggerDuration={0.02}
                >
                  The first names are in.
                </Text3DFlip>
              </h2>
            </div>
          </div>
          <p className="text-neutral-500 text-sm max-w-sm font-mono">
            AWS DEVREL · CLOUD BUILDERS · ACCENTURE · SNAPMINT
          </p>
        </div>

        {/* Natural Full-Page Stacking Cards Flow (Zero nested frames, zero AI slop) */}
        <StackingCards
          totalCards={SPEAKERS.length}
          scaleMultiplier={isMobile ? 0.02 : 0.03}
          className="relative pb-24"
        >
          {SPEAKERS.map((speaker: Speaker, index: number) => {
            const isKeynote = speaker.category === 'keynote';

            return (
              <StackingCardItem
                key={speaker.id}
                index={index}
                topPosition={isMobile ? `${68 + index * 8}px` : `${92 + index * 14}px`}
                className="sticky top-0 mb-16 sm:mb-32"
              >
                <div
                  className={cn(
                    "w-full max-w-5xl mx-auto rounded-3xl p-5 sm:p-10 border transition-all duration-300 relative overflow-hidden backdrop-blur-xl bg-white",
                    isKeynote
                      ? "border-2 border-[#D946EF]/50 shadow-[0_20px_50px_rgba(217,70,239,0.14)]"
                      : "border border-neutral-200 shadow-xl"
                  )}
                >
                  {/* Subtle Ambient Glow */}
                  <div
                    className={cn(
                      "absolute -top-24 -right-24 w-72 h-72 rounded-full blur-[100px] pointer-events-none",
                      isKeynote ? "bg-[#D946EF]/10" : "bg-[#22D3EE]/10"
                    )}
                  />

                  <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Left Details (7 cols) */}
                    <div className="lg:col-span-7 flex flex-col justify-between">
                      <div>
                        {/* Header Badges */}
                        <div className="flex flex-wrap items-center gap-2.5 mb-4">
                          <span className="font-mono text-xs font-black text-[#D946EF] bg-[#D946EF]/10 border border-[#D946EF]/30 px-2.5 py-1 rounded-full">
                            [ 0{index + 1} / 0{SPEAKERS.length} ]
                          </span>

                          <span
                            className={cn(
                              "text-[10px] font-mono font-extrabold uppercase tracking-widest px-3 py-1 rounded-full flex items-center gap-1.5",
                              isKeynote
                                ? "bg-[#22D3EE]/15 text-[#0891B2] border border-[#22D3EE]/30"
                                : "bg-neutral-100 text-neutral-700 border border-neutral-200"
                            )}
                          >
                            <span
                              className={cn(
                                "w-1.5 h-1.5 rounded-full",
                                isKeynote ? "bg-[#D946EF] animate-pulse" : "bg-emerald-500"
                              )}
                            />
                            {isKeynote ? "Keynote Leader" : "Technical Session"}
                          </span>

                          <span className="text-xs font-mono text-neutral-500 flex items-center gap-1">
                            <Building2 className="w-3.5 h-3.5 text-[#D946EF]" />
                            {speaker.company}
                          </span>
                        </div>

                        {/* Speaker Name */}
                        <h3 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black text-[#171717] tracking-tight leading-tight mb-1.5">
                          {speaker.name}
                        </h3>

                        {/* Designation */}
                        <p className="text-sm sm:text-lg font-bold text-[#D946EF] mb-3 sm:mb-4">
                          {speaker.current_designation}
                        </p>

                        {/* Bio */}
                        {speaker.bio && (
                          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-5 sm:mb-6">
                            {speaker.bio}
                          </p>
                        )}
                      </div>

                      {/* Session Topic Box */}
                      {speaker.topic && (
                        <div className="p-3.5 sm:p-5 rounded-2xl bg-neutral-50 border border-neutral-200 mb-5 sm:mb-6">
                          <div className="flex items-center gap-1.5 text-[#D946EF] text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider mb-1 sm:mb-1.5">
                            <BookOpen className="w-3.5 h-3.5" />
                            <span>Session Topic</span>
                          </div>
                          <h4 className="text-xs sm:text-base font-bold text-[#171717] leading-snug">
                            {speaker.topic}
                          </h4>
                        </div>
                      )}

                      {/* Action Links */}
                      <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
                        {speaker.linkedin && (
                          <a
                            href={speaker.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#D946EF] hover:bg-[#C026D3] active:bg-[#A21CAF] text-white font-bold text-xs tracking-wide shadow-md hover:scale-105 transition-all"
                          >
                            <LinkedInIcon className="w-3.5 h-3.5 fill-current" />
                            <span>Connect on LinkedIn</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </a>
                        )}

                        <a
                          href="#agenda"
                          className="inline-flex items-center gap-1 text-xs font-bold text-neutral-600 hover:text-[#D946EF] transition-colors"
                        >
                          <span>View on Agenda</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>

                    {/* Right Portrait (5 cols) */}
                    <div className="lg:col-span-5 flex flex-col items-center">
                      <div className="relative w-full max-w-[220px] xs:max-w-[260px] sm:max-w-[320px] aspect-[4/5] rounded-3xl overflow-hidden border-2 border-neutral-200 bg-neutral-100 shadow-xl group flex items-center justify-center p-2.5 sm:p-3">
                        <img
                          src={speaker.image}
                          alt={speaker.name}
                          className="w-full h-full object-cover rounded-2xl relative z-0 transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                        <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl border border-neutral-200 shadow-sm">
                          <span className="text-xs font-bold text-[#171717] truncate">{speaker.name}</span>
                          <span className="text-[10px] font-mono text-[#D946EF] uppercase font-bold shrink-0">{speaker.company}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </StackingCardItem>
            );
          })}
        </StackingCards>
      </div>
    </section>
  );
};

export default Speakers;
