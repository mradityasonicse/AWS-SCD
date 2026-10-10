import React, { useEffect, useRef, useState } from 'react';
import { CREDITS_ROLL } from '../data/eventData';
import { X, Play, Pause, RotateCcw } from 'lucide-react';

interface CreditsRollProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CreditsRoll: React.FC<CreditsRollProps> = ({ isOpen, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    let animId: number;
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    scrollContainer.scrollTop = 0;

    const scrollSpeed = 0.8;

    const step = () => {
      if (isPlaying && scrollContainer) {
        scrollContainer.scrollTop += scrollSpeed;
        if (
          scrollContainer.scrollTop + scrollContainer.clientHeight >=
          scrollContainer.scrollHeight - 5
        ) {
          setIsPlaying(false);
        }
      }
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animId);
  }, [isOpen, isPlaying]);

  if (!isOpen) return null;

  const restart = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
      setIsPlaying(true);
    }
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 backdrop-blur-2xl animate-in fade-in duration-500">
      {/* Top and Bottom Letterbox Bars */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />

      {/* Floating Controls */}
      <div className="absolute top-6 right-6 z-20 flex items-center gap-3">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="cursor-pointer p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors"
          title={isPlaying ? "Pause roll" : "Play roll"}
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </button>

        <button
          onClick={restart}
          className="cursor-pointer p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors"
          title="Restart roll"
        >
          <RotateCcw className="w-4 h-4" />
        </button>

        <button
          onClick={onClose}
          className="cursor-pointer p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors"
          title="Close credits"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="absolute top-6 left-6 z-20 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[#ff9900] animate-ping" />
        <span className="text-[11px] font-mono text-slate-400 uppercase tracking-widest">
          Now Rolling After-Credits
        </span>
      </div>

      {/* Cinematic Rolling Column */}
      <div
        ref={scrollRef}
        className="w-full max-w-2xl h-screen overflow-y-auto px-6 py-32 text-center select-none no-scrollbar flex flex-col items-center gap-20 text-white font-sans"
        style={{ scrollBehavior: 'auto' }}
      >
        {/* Presenters */}
        <div className="space-y-4">
          <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-white/10 p-2 border border-white/20 backdrop-blur-md flex items-center justify-center shadow-[0_0_20px_rgba(255,153,0,0.3)]">
            <img
              src="/risu-logo.png"
              alt="RISU"
              className="w-full h-full object-contain"
            />
          </div>
          <p className="text-slate-400 font-mono text-sm tracking-widest uppercase">
            {CREDITS_ROLL.presents}
          </p>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white">
            Student Community Day <span className="font-serif italic font-normal text-[#ffb84d]">2026</span>
          </h2>
          <p className="text-slate-400 text-sm font-mono">{CREDITS_ROLL.dateAndVenue}</p>
        </div>

        {/* Core Team */}
        <div className="w-full max-w-md space-y-4">
          <h3 className="text-xs font-mono font-extrabold text-[#ff9900] tracking-widest uppercase border-b border-white/15 pb-2">
            Core Organizing Team
          </h3>
          <div className="space-y-3">
            {CREDITS_ROLL.coreTeam.map((mem, i) => (
              <div key={i} className="flex justify-between items-baseline gap-4 text-sm">
                <span className="text-slate-400 text-left">{mem.role}</span>
                <span className="text-white font-bold text-right">{mem.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* On Stage */}
        <div className="w-full max-w-md space-y-4">
          <h3 className="text-xs font-mono font-extrabold text-[#ff9900] tracking-widest uppercase border-b border-white/15 pb-2">
            On Stage &amp; Keynotes
          </h3>
          <div className="space-y-3">
            {CREDITS_ROLL.onStage.map((s, i) => (
              <div key={i} className="flex justify-between items-baseline gap-4 text-sm">
                <span className="text-slate-400 text-left">{s.role}</span>
                <span className="text-white font-bold text-right">{s.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Partners */}
        <div className="w-full max-w-md space-y-4">
          <h3 className="text-xs font-mono font-extrabold text-[#ff9900] tracking-widest uppercase border-b border-white/15 pb-2">
            Partners &amp; Hosts
          </h3>
          <div className="space-y-3">
            {CREDITS_ROLL.partners.map((p, i) => (
              <div key={i} className="flex justify-between items-baseline gap-4 text-sm">
                <span className="text-slate-400 text-left">{p.role}</span>
                <span className="text-white font-bold text-right">{p.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Volunteers */}
        <div className="w-full max-w-md space-y-4">
          <h3 className="text-xs font-mono font-extrabold text-[#ff9900] tracking-widest uppercase border-b border-white/15 pb-2">
            Student Volunteers
          </h3>
          <div className="grid grid-cols-2 gap-2 text-sm text-slate-300">
            {CREDITS_ROLL.volunteers.map((v, i) => (
              <span key={i} className="text-slate-300 font-medium">
                {v}
              </span>
            ))}
          </div>
        </div>

        {/* Starring & Conclusion */}
        <div className="space-y-6 pt-10 pb-20">
          <h3 className="text-xs font-mono font-extrabold text-[#ff9900] tracking-widest uppercase">
            Starring
          </h3>
          <p className="text-xl sm:text-2xl font-bold text-white max-w-lg mx-auto leading-relaxed">
            {CREDITS_ROLL.starring}
          </p>
          <p className="text-3xl font-serif italic text-[#ffb84d] pt-6">
            {CREDITS_ROLL.closing}
          </p>
        </div>
      </div>
    </div>
  );
};
