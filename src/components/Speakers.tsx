import React, { useRef, useState, useEffect, useCallback } from 'react';
import { SPEAKERS, type Speaker } from '../data/eventData';
import { ArrowUpRight, Building2, BookOpen, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { cn } from '@/lib/utils';

const LinkedInIcon: React.FC<{ className?: string }> = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.6 1.6 0 0 0 1.6-1.6 1.6 1.6 0 0 0-3.2 0 1.6 1.6 0 0 0 1.6 1.6m1.4 9.74v-8.37H5.06v8.37z" />
  </svg>
);

export const Speakers: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollDistance, setScrollDistance] = useState(0);
  const [activeCardIndex, setActiveCardIndex] = useState(1);

  // Bind scroll progress directly to container vertical scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // God-level smooth kinetic spring physics (eliminates mouse wheel stepping jitter)
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 85,
    damping: 24,
    mass: 0.5,
    restDelta: 0.0001,
  });

  // Calculate dynamic horizontal travel distance
  const calculateDistance = useCallback(() => {
    if (trackRef.current) {
      const trackWidth = trackRef.current.scrollWidth;
      const windowWidth = window.innerWidth;
      // Travel distance so the last card finishes comfortably inside the viewport with right padding
      const distance = Math.max(0, trackWidth - windowWidth + (windowWidth < 640 ? 48 : 120));
      setScrollDistance(distance);
    }
  }, []);

  useEffect(() => {
    calculateDistance();
    const t1 = setTimeout(calculateDistance, 100);
    const t2 = setTimeout(calculateDistance, 400);
    window.addEventListener('resize', calculateDistance);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener('resize', calculateDistance);
    };
  }, [calculateDistance]);

  // Map silky spring progress to horizontal translation
  const x = useTransform(smoothProgress, (progress) => -progress * scrollDistance);

  // Track active speaker card indicator in real-time
  useEffect(() => {
    const unsubscribe = smoothProgress.on('change', (latest) => {
      const idx = Math.min(
        SPEAKERS.length,
        Math.max(1, Math.round(latest * (SPEAKERS.length - 1)) + 1)
      );
      setActiveCardIndex(idx);
    });
    return () => unsubscribe();
  }, [smoothProgress]);

  // Smooth programmatic jump to a speaker card
  const handleScrollToSpeaker = (targetIndex: number) => {
    if (!containerRef.current) return;
    const boundedIndex = Math.max(0, Math.min(SPEAKERS.length - 1, targetIndex));
    const containerTop = containerRef.current.offsetTop;
    const totalScrollable = containerRef.current.offsetHeight - window.innerHeight;
    const targetY = containerTop + (boundedIndex / (SPEAKERS.length - 1)) * totalScrollable;
    window.scrollTo({
      top: targetY,
      behavior: 'smooth',
    });
  };

  const handlePrev = () => handleScrollToSpeaker(activeCardIndex - 2);
  const handleNext = () => handleScrollToSpeaker(activeCardIndex);

  return (
    <section ref={containerRef} className="relative h-[320vh] sm:h-[380vh]" id="speakers">
      {/* Sticky Full-Viewport Showcase Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between pt-24 sm:pt-28 pb-6 sm:pb-8 z-20">
        {/* Top Header Bar */}
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 relative z-10 shrink-0">
          <div className="border-b border-[#232F3E] pb-4 sm:pb-5 flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
            <div className="flex items-baseline gap-3 sm:gap-5">
              <span
                className="font-mono text-sm tracking-widest font-bold whitespace-nowrap shrink-0"
                style={{ color: 'var(--theme-accent, #AD5CFF)' }}
              >
                [ 03 ]
              </span>
              <div>
                <p
                  className="text-xs font-bold uppercase tracking-[0.2em] mb-1.5 flex items-center gap-2"
                  style={{ color: 'var(--theme-accent, #AD5CFF)' }}
                >
                  <span className="w-5 h-[1px]" style={{ backgroundColor: 'var(--theme-accent, #AD5CFF)' }} />
                  Summit Speakers
                </p>
                <h2 className="font-heading text-4xl sm:text-6xl md:text-7xl font-normal text-white tracking-wide uppercase leading-none">
                  The first names are in.
                </h2>
              </div>
            </div>

            {/* Live Scroll Counter, Quick Nav & Progress Bar */}
            <div className="flex items-center gap-3 sm:gap-4 self-end md:self-auto">
              {/* Prev / Next Smooth Jump Controls */}
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={handlePrev}
                  disabled={activeCardIndex <= 1}
                  className="w-8 h-8 rounded-full border border-[#232F3E] bg-[#161E2D] hover:bg-[#1E293B] text-slate-300 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-all active:scale-95 cursor-pointer"
                  title="Previous speaker"
                  aria-label="Previous speaker"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={activeCardIndex >= SPEAKERS.length}
                  className="w-8 h-8 rounded-full border border-[#232F3E] bg-[#161E2D] hover:bg-[#1E293B] text-slate-300 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-all active:scale-95 cursor-pointer"
                  title="Next speaker"
                  aria-label="Next speaker"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex flex-col items-end gap-1">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider hidden xs:flex items-center gap-1.5 whitespace-nowrap">
                    <span>Scroll to explore</span>
                  </span>
                  <span
                    className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-full whitespace-nowrap border"
                    style={{
                      color: 'var(--theme-accent, #AD5CFF)',
                      backgroundColor: 'color-mix(in srgb, var(--theme-accent, #AD5CFF) 12%, transparent)',
                      borderColor: 'color-mix(in srgb, var(--theme-accent, #AD5CFF) 30%, transparent)',
                    }}
                  >
                    [ 0{activeCardIndex} / 0{SPEAKERS.length} ]
                  </span>
                </div>
                {/* Horizontal Progress Track */}
                <div className="w-32 xs:w-40 sm:w-48 h-1 bg-[#161E2D] rounded-full overflow-hidden border border-[#232F3E]">
                  <motion.div
                    className="h-full origin-left"
                    style={{
                      scaleX: smoothProgress,
                      backgroundColor: 'var(--theme-accent, #AD5CFF)',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Moving Cards Track with Spring Physics (Clipped on mobile) */}
        <div className="relative w-full flex-1 flex items-center overflow-x-clip z-10 my-auto">
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex gap-5 sm:gap-8 items-stretch pl-4 sm:pl-10 md:pl-20 pr-10 sm:pr-24 will-change-transform"
          >
            {SPEAKERS.map((speaker: Speaker, index: number) => {
              const isKeynote = speaker.category === 'keynote';
              const speakerColors = [
                'var(--theme-accent, #AD5CFF)', // 1: Jessica Gilmore (Purple)
                '#FF9900',                      // 2: Praful Bagai (AWS Orange)
                '#42B4FF',                      // 3: Deepak Nishad (Cloud Blue)
                '#FF57EA',                      // 4: Nikita Mourya (Neon Pink)
                '#00E582',                      // 5: Varsha Verma (Cyber Green)
                'var(--theme-accent, #AD5CFF)', // 6: Anmoldeep Singh (Electric Purple)
                '#42B4FF',                      // 7: Aishwary Gathe (Cloud Blue)
              ];
              const spkColor = speakerColors[index % speakerColors.length];

              return (
                <motion.div
                  key={speaker.id}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 350, damping: 22 }}
                  className={cn(
                    "shrink-0 w-[84vw] xs:w-[350px] sm:w-[420px] md:w-[460px] lg:w-[480px] rounded-2xl p-5 sm:p-7 border relative overflow-hidden bg-[var(--theme-surface,#1E1E1E)] transition-all duration-300 flex flex-col justify-between group shadow-xl will-change-transform",
                    isKeynote
                      ? "border-2 shadow-2xl"
                      : "border border-[var(--theme-border,#3E3E3E)] hover:border-slate-400"
                  )}
                  style={{
                    borderColor: isKeynote ? spkColor : undefined,
                  }}
                >
                  {/* Top colored accent line */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[3px] opacity-80 group-hover:opacity-100 transition-opacity"
                    style={{ backgroundColor: spkColor }}
                  />

                  {/* Top Badges */}
                  <div className="relative z-10">
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span
                        className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-full whitespace-nowrap shrink-0 border"
                        style={{
                          color: spkColor,
                          backgroundColor: `color-mix(in srgb, ${spkColor} 12%, transparent)`,
                          borderColor: `color-mix(in srgb, ${spkColor} 30%, transparent)`,
                        }}
                      >
                        [ 0{index + 1} / 0{SPEAKERS.length} ]
                      </span>

                      {isKeynote ? (
                        <span
                          className="text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full flex items-center gap-1.5 whitespace-nowrap shrink-0 border"
                          style={{
                            color: spkColor,
                            backgroundColor: `color-mix(in srgb, ${spkColor} 15%, transparent)`,
                            borderColor: `color-mix(in srgb, ${spkColor} 35%, transparent)`,
                          }}
                        >
                          <Sparkles className="w-3 h-3" style={{ color: spkColor }} />
                          <span>Keynote Leader</span>
                        </span>
                      ) : (
                        <span
                          className="text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full flex items-center gap-1.5 whitespace-nowrap shrink-0 border"
                          style={{
                            color: spkColor,
                            backgroundColor: `color-mix(in srgb, ${spkColor} 12%, transparent)`,
                            borderColor: `color-mix(in srgb, ${spkColor} 28%, transparent)`,
                          }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: spkColor }} />
                          <span>Technical Session</span>
                        </span>
                      )}

                      <span className="text-xs font-mono text-slate-400 flex items-center gap-1 shrink-0 truncate max-w-[130px]">
                        <Building2 className="w-3.5 h-3.5 shrink-0" style={{ color: spkColor }} />
                        <span className="truncate">{speaker.company}</span>
                      </span>
                    </div>

                    {/* Speaker Header: Image + Name + Designation */}
                    <div className="flex items-center gap-4 sm:gap-5 mb-4">
                      <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-[var(--theme-border,#3E3E3E)] bg-[var(--theme-surface-elevated,#303030)] shrink-0 shadow-lg group-hover:scale-105 transition-transform duration-500">
                        <img
                          src={speaker.image}
                          alt={speaker.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-tight truncate mb-1">
                          {speaker.name}
                        </h3>
                        <p
                          className="text-xs sm:text-sm font-bold leading-snug line-clamp-1 mb-1"
                          style={{ color: spkColor }}
                        >
                          {speaker.current_designation}
                        </p>
                        <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wide">
                          {speaker.company}
                        </p>
                      </div>
                    </div>

                    {/* Session Topic Box */}
                    {speaker.topic && (
                      <div className="p-3.5 sm:p-4 rounded-xl bg-[var(--theme-surface-elevated,#303030)] border border-[var(--theme-border,#3E3E3E)] mb-3 sm:mb-4 shadow-sm transition-colors group-hover:border-slate-500">
                        <div
                          className="flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider mb-1"
                          style={{ color: spkColor }}
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
                  <div className="relative z-10 pt-3 border-t border-[var(--theme-border,#3E3E3E)] flex items-center justify-between gap-3">
                    {speaker.linkedin ? (
                      <motion.a
                        href={speaker.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.96 }}
                        className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full font-bold text-xs tracking-wide shadow-sm transition-all cursor-pointer font-sans select-none"
                        style={{
                          backgroundColor: spkColor,
                          color: '#0B0F17',
                        }}
                      >
                        <LinkedInIcon className="w-3.5 h-3.5 fill-current" />
                        <span>Connect on LinkedIn</span>
                        <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                      </motion.a>
                    ) : (
                      <span className="text-xs font-mono text-slate-500">AWS Community</span>
                    )}

                    <a
                      href="#agenda"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
                    >
                      <span>Agenda</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom Helper Bar */}
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 relative z-10 shrink-0">
          <div className="flex items-center justify-between text-slate-400 font-mono text-[11px] pt-3 border-t border-[#232F3E]">
            <span>AWS DEVREL · AMAZON LEADERSHIP · CLOUD BUILDERS</span>
            <span style={{ color: 'var(--theme-accent, #AD5CFF)' }} className="font-bold">
              7 SPEAKERS ANNOUNCED
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speakers;
