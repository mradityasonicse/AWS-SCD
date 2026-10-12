import React, { useRef, useState, useEffect } from 'react';
import { SPEAKERS, type Speaker } from '../data/eventData';
import { ArrowUpRight, Building2, BookOpen, Sparkles, ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import { cn } from '@/lib/utils';
import Text3DFlip from '@/registry/magicui/text-3d-flip';

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

  // Calculate dynamic horizontal travel distance
  useEffect(() => {
    const calculateDistance = () => {
      if (trackRef.current) {
        const trackWidth = trackRef.current.scrollWidth;
        const windowWidth = window.innerWidth;
        // Travel distance so the last card finishes comfortably inside the viewport with right padding
        const distance = Math.max(0, trackWidth - windowWidth + (windowWidth < 640 ? 40 : 96));
        setScrollDistance(distance);
      }
    };

    calculateDistance();
    const t1 = setTimeout(calculateDistance, 100);
    const t2 = setTimeout(calculateDistance, 500);
    window.addEventListener('resize', calculateDistance);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener('resize', calculateDistance);
    };
  }, []);

  // Map vertical progress [0, 1] to horizontal translation [0, -scrollDistance]
  const x = useTransform(scrollYProgress, (progress) => -progress * scrollDistance);

  // Track active speaker card indicator in real-time
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      const idx = Math.min(
        SPEAKERS.length,
        Math.max(1, Math.round(latest * (SPEAKERS.length - 1)) + 1)
      );
      setActiveCardIndex(idx);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <section ref={containerRef} className="relative h-[320vh] sm:h-[380vh]" id="speakers">
      {/* Sticky Full-Viewport Showcase Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between pt-24 sm:pt-28 pb-6 sm:pb-8 z-20">
        {/* Ambient Atmosphere */}
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-[#FF9900]/06 rounded-full blur-[180px] pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-[#00A4E4]/05 rounded-full blur-[160px] pointer-events-none" />

        {/* Top Header Bar */}
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 relative z-10 shrink-0">
          <div className="border-b border-[#232F3E] pb-4 sm:pb-5 flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
            <div className="flex items-baseline gap-3 sm:gap-5">
              <span className="text-[#FF9900] font-mono text-sm tracking-widest font-bold whitespace-nowrap shrink-0">
                [ 03 ]
              </span>
              <div>
                <p className="text-[#FF9900] text-xs font-bold uppercase tracking-[0.2em] mb-1.5 flex items-center gap-2">
                  <span className="w-5 h-[1px] bg-[#FF9900]" />
                  Summit Speakers
                </p>
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
                  <Text3DFlip
                    textClassName="text-white"
                    flipTextClassName="text-[#FF9900]"
                    rotateDirection="top"
                    staggerDuration={0.02}
                  >
                    The first names are in.
                  </Text3DFlip>
                </h2>
              </div>
            </div>

            {/* Live Scroll Counter & Progress Bar */}
            <div className="flex items-center gap-4 self-end md:self-auto">
              <div className="flex flex-col items-end gap-1">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5 whitespace-nowrap">
                    <span>Scroll to explore</span>
                    <ArrowRight className="w-3 h-3 text-[#FF9900] animate-pulse" />
                  </span>
                  <span className="font-mono text-xs font-black text-[#FF9900] bg-[#FF9900]/10 border border-[#FF9900]/30 px-2.5 py-0.5 rounded-full whitespace-nowrap">
                    [ 0{activeCardIndex} / 0{SPEAKERS.length} ]
                  </span>
                </div>
                {/* Horizontal Progress Track */}
                <div className="w-36 sm:w-48 h-1 bg-[#161E2D] rounded-full overflow-hidden border border-[#232F3E]">
                  <motion.div
                    className="h-full bg-[#FF9900] origin-left"
                    style={{ scaleX: scrollYProgress }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Moving Cards Track */}
        <div className="relative w-full flex-1 flex items-center overflow-visible z-10 my-auto">
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex gap-5 sm:gap-8 items-stretch pl-4 sm:pl-10 md:pl-20 pr-10 sm:pr-24 will-change-transform"
          >
            {SPEAKERS.map((speaker: Speaker, index: number) => {
              const isKeynote = speaker.category === 'keynote';

              return (
                <div
                  key={speaker.id}
                  className={cn(
                    "shrink-0 w-[84vw] xs:w-[350px] sm:w-[420px] md:w-[460px] lg:w-[480px] rounded-3xl p-5 sm:p-7 border relative overflow-hidden backdrop-blur-xl bg-[#131921]/95 transition-all duration-300 flex flex-col justify-between group shadow-2xl",
                    isKeynote
                      ? "border-2 border-[#FF9900]/50 shadow-[0_20px_50px_rgba(255,153,0,0.14)]"
                      : "border border-[#232F3E] hover:border-[#38BDF8]/40"
                  )}
                >
                  {/* Subtle Ambient Card Gradient */}
                  <div
                    className={cn(
                      "absolute -top-20 -right-20 w-60 h-60 rounded-full blur-[90px] pointer-events-none",
                      isKeynote ? "bg-[#FF9900]/12" : "bg-[#00A4E4]/08"
                    )}
                  />

                  {/* Top Badges */}
                  <div className="relative z-10">
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="font-mono text-xs font-black text-[#FF9900] bg-[#FF9900]/10 border border-[#FF9900]/30 px-2.5 py-0.5 rounded-full whitespace-nowrap shrink-0">
                        [ 0{index + 1} / 0{SPEAKERS.length} ]
                      </span>

                      <span
                        className={cn(
                          "text-[10px] font-mono font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-full flex items-center gap-1.5 whitespace-nowrap shrink-0",
                          isKeynote
                            ? "bg-[#FF9900]/15 text-[#FF9900] border border-[#FF9900]/30"
                            : "bg-[#161E2D] text-slate-300 border border-[#232F3E]"
                        )}
                      >
                        {isKeynote ? (
                          <>
                            <Sparkles className="w-3 h-3 text-[#FF9900]" />
                            <span>Keynote Leader</span>
                          </>
                        ) : (
                          <>
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                            <span>Technical Session</span>
                          </>
                        )}
                      </span>

                      <span className="text-xs font-mono text-slate-400 flex items-center gap-1 shrink-0 truncate max-w-[130px]">
                        <Building2 className="w-3.5 h-3.5 text-[#FF9900] shrink-0" />
                        <span className="truncate">{speaker.company}</span>
                      </span>
                    </div>

                    {/* Speaker Header: Image + Name + Designation */}
                    <div className="flex items-center gap-4 sm:gap-5 mb-4">
                      <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-[#232F3E] bg-[#161E2D] shrink-0 shadow-lg group-hover:scale-105 transition-transform duration-500">
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
                        <p className="text-xs sm:text-sm font-bold text-[#FF9900] leading-snug line-clamp-1 mb-1">
                          {speaker.current_designation}
                        </p>
                        <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wide">
                          {speaker.company}
                        </p>
                      </div>
                    </div>

                    {/* Session Topic Box */}
                    {speaker.topic && (
                      <div className="p-3.5 sm:p-4 rounded-2xl bg-[#161E2D] border border-[#232F3E] mb-3 sm:mb-4 shadow-sm">
                        <div className="flex items-center gap-1.5 text-[#FF9900] text-[10px] font-mono font-bold uppercase tracking-wider mb-1">
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
                  <div className="relative z-10 pt-3 border-t border-[#232F3E] flex items-center justify-between gap-3">
                    {speaker.linkedin ? (
                      <a
                        href={speaker.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-[#FF9900] hover:bg-[#FFAC33] active:bg-[#E68A00] text-[#0B0F17] font-black text-xs tracking-wide shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer font-sans"
                      >
                        <LinkedInIcon className="w-3.5 h-3.5 fill-current" />
                        <span>Connect on LinkedIn</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <span className="text-xs font-mono text-slate-500">AWS Community</span>
                    )}

                    <a
                      href="#agenda"
                      className="inline-flex items-center gap-1 text-xs font-bold text-slate-400 hover:text-[#FF9900] transition-colors"
                    >
                      <span>Agenda</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom Helper Bar */}
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 relative z-10 shrink-0">
          <div className="flex items-center justify-between text-slate-500 font-mono text-[11px] pt-3 border-t border-[#232F3E]/60">
            <span>AWS DEVREL · AMAZON LEADERSHIP · CLOUD BUILDERS</span>
            <span className="text-[#FF9900] font-bold">7 SPEAKERS ANNOUNCED</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speakers;
