import React, { useState, useRef, useEffect, useCallback } from 'react';
import { SPEAKERS, type Speaker } from '../data/eventData';
import {
  ArrowUpRight,
  Building2,
  BookOpen,
  Sparkles,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { ScrollReveal } from '@/components/ui/motion-primitives';

const LinkedInIcon: React.FC<{ className?: string }> = ({ className = 'w-3.5 h-3.5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.6 1.6 0 0 0 1.6-1.6 1.6 1.6 0 0 0-3.2 0 1.6 1.6 0 0 0 1.6 1.6m1.4 9.74v-8.37H5.06v8.37z" />
  </svg>
);

const SPEAKER_COLORS = [
  'var(--theme-accent, #AD5CFF)', // 1: Jessica Gilmore (Purple)
  '#FF9900',                      // 2: Praful Bagai (AWS Orange)
  '#42B4FF',                      // 3: Deepak Nishad (Cloud Blue)
  '#FF57EA',                      // 4: Nikita Mourya (Neon Pink)
  '#00E582',                      // 5: Varsha Verma (Cyber Green)
  'var(--theme-accent, #AD5CFF)', // 6: Anmoldeep Singh (Electric Purple)
  '#42B4FF',                      // 7: Aishwary Gathe (Cloud Blue)
];

interface SpeakerCardProps {
  speaker: Speaker;
  index: number;
  total: number;
  color: string;
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({ speaker, index, total, color }) => {
  const isKeynote = speaker.category === 'keynote';

  return (
    <div
      className={cn(
        'shrink-0 w-[85vw] xs:w-[360px] sm:w-[410px] md:w-[440px] rounded-2xl p-5 sm:p-7 border relative overflow-hidden bg-[var(--theme-surface,#1E1E1E)] transition-[transform,border-color,box-shadow] duration-300 ease-out flex flex-col justify-between group shadow-xl hover:-translate-y-1.5 transform-gpu select-none'
      )}
      style={{
        borderColor: isKeynote ? color : 'var(--theme-border, #3E3E3E)',
        boxShadow: isKeynote
          ? `0 12px 32px -8px ${color}33, 0 4px 12px rgba(0, 0, 0, 0.4)`
          : '0 8px 24px rgba(0, 0, 0, 0.35)',
      }}
    >
      {/* Top colored accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px] opacity-85 group-hover:opacity-100 transition-opacity"
        style={{ backgroundColor: color }}
      />

      {/* Subtle background glow */}
      <div
        className="absolute -right-16 -top-16 w-40 h-40 rounded-full opacity-0 group-hover:opacity-15 blur-2xl transition-opacity duration-500 pointer-events-none"
        style={{ backgroundColor: color }}
      />

      {/* Top Badges */}
      <div className="relative z-10">
        <div className="flex items-center justify-between gap-2 mb-4">
          <span
            className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-full whitespace-nowrap shrink-0 border"
            style={{
              color: color,
              backgroundColor: `color-mix(in srgb, ${color} 12%, transparent)`,
              borderColor: `color-mix(in srgb, ${color} 30%, transparent)`,
            }}
          >
            [ 0{index + 1} / 0{total} ]
          </span>

          {isKeynote ? (
            <span
              className="text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full flex items-center gap-1.5 whitespace-nowrap shrink-0 border"
              style={{
                color: color,
                backgroundColor: `color-mix(in srgb, ${color} 15%, transparent)`,
                borderColor: `color-mix(in srgb, ${color} 35%, transparent)`,
              }}
            >
              <Sparkles className="w-3 h-3" style={{ color }} />
              <span>Keynote Leader</span>
            </span>
          ) : (
            <span
              className="text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full flex items-center gap-1.5 whitespace-nowrap shrink-0 border"
              style={{
                color: color,
                backgroundColor: `color-mix(in srgb, ${color} 12%, transparent)`,
                borderColor: `color-mix(in srgb, ${color} 28%, transparent)`,
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }} />
              <span>Technical Session</span>
            </span>
          )}

          <span className="text-xs font-mono text-slate-400 flex items-center gap-1 shrink-0 truncate max-w-[130px]">
            <Building2 className="w-3.5 h-3.5 shrink-0" style={{ color }} />
            <span className="truncate">{speaker.company}</span>
          </span>
        </div>

        {/* Speaker Header: Image + Name + Designation */}
        <div className="flex items-center gap-4 sm:gap-5 mb-4">
          <div
            className="relative w-18 h-18 sm:w-22 sm:h-22 rounded-2xl overflow-hidden border-2 bg-[var(--theme-surface-elevated,#303030)] shrink-0 shadow-lg group-hover:scale-105 transition-transform duration-300"
            style={{
              borderColor: color,
              boxShadow: `0 0 16px ${color}30`,
            }}
          >
            <img
              src={speaker.image}
              alt={speaker.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg sm:text-2xl font-black text-white tracking-tight leading-tight truncate mb-1">
              {speaker.name}
            </h3>
            <p
              className="text-xs sm:text-sm font-bold leading-snug line-clamp-1 mb-1"
              style={{ color }}
            >
              {speaker.current_designation}
            </p>
            <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wide truncate">
              {speaker.company}
            </p>
          </div>
        </div>

        {/* Session Topic Box */}
        {speaker.topic && (
          <div className="p-3.5 sm:p-4 rounded-xl bg-[var(--theme-surface-elevated,#303030)] border border-[var(--theme-border,#3E3E3E)] mb-3 sm:mb-4 shadow-sm transition-colors group-hover:border-slate-500">
            <div
              className="flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider mb-1"
              style={{ color }}
            >
              <BookOpen className="w-3 h-3" />
              <span>Session Topic</span>
            </div>
            <h4 className="text-xs sm:text-sm font-bold text-white leading-snug line-clamp-2">
              {speaker.topic}
            </h4>
          </div>
        )}

        {/* Bio */}
        {speaker.bio && (
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-2 sm:line-clamp-3 mb-2">
            {speaker.bio}
          </p>
        )}
      </div>

      {/* Card Footer: Action Links */}
      <div className="relative z-10 pt-3 border-t border-[var(--theme-border,#3E3E3E)] flex items-center justify-between gap-3 mt-2">
        {speaker.linkedin ? (
          <a
            href={speaker.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center justify-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full font-bold text-xs tracking-wide shadow-sm transition-[transform,box-shadow,background-color] duration-200 ease-out hover:scale-105 active:scale-95 cursor-pointer font-sans select-none transform-gpu"
            style={{
              backgroundColor: color,
              color: '#0B0F17',
            }}
          >
            <LinkedInIcon className="w-3.5 h-3.5 fill-current" />
            <span>Connect on LinkedIn</span>
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </a>
        ) : (
          <span className="text-xs font-mono text-slate-500">AWS Community</span>
        )}

        <a
          href="#agenda"
          onClick={(e) => e.stopPropagation()}
          className="inline-flex items-center gap-1 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
        >
          <span>Agenda</span>
          <ArrowUpRight className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};

export const Speakers: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);
  const resumeTimerRef = useRef<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Triple set of speakers for 100% gapless continuous marquee sliding
  const marqueeSpeakers = [...SPEAKERS, ...SPEAKERS, ...SPEAKERS];

  // Pause on Touch (Mobile) / Hover (Desktop) with smooth automatic resume
  const handleTouchStart = useCallback(() => {
    if (resumeTimerRef.current !== null) {
      window.clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = null;
    }
    setIsPaused(true);
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (resumeTimerRef.current !== null) {
      window.clearTimeout(resumeTimerRef.current);
    }
    // Resume auto-sliding after user releases touch (2.2s graceful delay)
    resumeTimerRef.current = window.setTimeout(() => {
      setIsPaused(false);
      resumeTimerRef.current = null;
    }, 2200);
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (resumeTimerRef.current !== null) {
      window.clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = null;
    }
    setIsPaused(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsPaused(false);
  }, []);

  // Cleanup timers on unmount
  useEffect(() => {
    return () => {
      if (resumeTimerRef.current !== null) {
        window.clearTimeout(resumeTimerRef.current);
      }
    };
  }, []);

  return (
    <section className="py-20 sm:py-24 relative overflow-hidden px-4 sm:px-6" id="speakers">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header with [ 03 ] Index */}
        <ScrollReveal>
          <div className="border-b border-[var(--theme-border,#3E3E3E)] pb-6 mb-10 sm:mb-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
            <div className="flex items-baseline gap-4 sm:gap-6">
              <span
                className="font-mono text-sm tracking-widest font-bold whitespace-nowrap shrink-0"
                style={{ color: 'var(--theme-accent, #AD5CFF)' }}
              >
                [ 03 ]
              </span>
              <div>
                <p
                  className="text-xs font-bold uppercase tracking-[0.2em] mb-2 flex items-center gap-2"
                  style={{ color: 'var(--theme-accent, #AD5CFF)' }}
                >
                  <span className="w-6 h-[1px]" style={{ backgroundColor: 'var(--theme-accent, #AD5CFF)' }} />
                  Summit Speakers
                </p>
                <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-normal text-white tracking-wide uppercase leading-tight sm:leading-none">
                  The first names are in.
                </h2>
              </div>
            </div>

            {/* Clean Metadata Tag */}
            <p className="text-slate-400 text-xs sm:text-sm font-mono uppercase tracking-wider">
              AWS DEVREL · AMAZON LEADERSHIP · CLOUD BUILDERS
            </p>
          </div>
        </ScrollReveal>

        {/* Pure Auto-Slide Showcase */}
        <div className="relative w-full overflow-hidden">
          {/* Side Gradient Masks for Seamless Edge Fade */}
          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-r from-[var(--theme-bg,#262626)] to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-l from-[var(--theme-bg,#262626)] to-transparent z-20 pointer-events-none" />

          {/* Interactive Sliding Track Container */}
          <div
            ref={scrollContainerRef}
            className="w-full overflow-x-auto no-scrollbar py-3 cursor-grab active:cursor-grabbing touch-pan-x"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onTouchCancel={handleTouchEnd}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onPointerDown={handleTouchStart}
            onPointerUp={handleTouchEnd}
          >
            <div
              className={cn(
                "animate-speakers-slide flex gap-5 sm:gap-7 items-stretch py-2",
                isPaused && "is-paused"
              )}
            >
              {marqueeSpeakers.map((speaker, idx) => {
                const originalIdx = idx % SPEAKERS.length;
                const color = SPEAKER_COLORS[originalIdx % SPEAKER_COLORS.length];

                return (
                  <SpeakerCard
                    key={`${speaker.id}-${idx}`}
                    speaker={speaker}
                    index={originalIdx}
                    total={SPEAKERS.length}
                    color={color}
                  />
                );
              })}
            </div>
          </div>


        </div>

        {/* Bottom Metadata Summary Strip */}
        <div className="mt-12 pt-4 border-t border-[var(--theme-border,#3E3E3E)] flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-400 font-mono text-xs">
          <span>AWS DEVREL · AMAZON LEADERSHIP · CLOUD BUILDERS</span>
          <span style={{ color: 'var(--theme-accent, #AD5CFF)' }} className="font-bold">
            7 SPEAKERS ANNOUNCED · MORE INCOMING
          </span>
        </div>
      </div>
    </section>
  );
};

export default Speakers;
