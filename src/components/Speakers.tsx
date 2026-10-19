import React, { useState, useEffect } from 'react';
import { ScrollReveal } from '@/components/ui/motion-primitives';
import { X, Maximize2 } from 'lucide-react';

interface SpeakerPoster {
  id: number;
  name: string;
  role: string;
  company: string;
  badge: string;
  accentColor: string;
  poster: string;
}

const SPEAKERS_LIST: SpeakerPoster[] = [
  {
    id: 1,
    name: 'Harshit Singh',
    role: 'SDE-II',
    company: 'Amazon',
    badge: 'AMAZON · SDE-II',
    accentColor: '#00E582',
    poster: '/speakers/harshit_singh_poster.png',
  },
  {
    id: 2,
    name: 'Saptarshi De',
    role: 'SDE-II',
    company: 'AWS (Amazon Web Services)',
    badge: 'AWS · SDE-II',
    accentColor: '#38BDF8',
    poster: '/speakers/saptarshi_de_poster.png',
  },
];

export const Speakers: React.FC = () => {
  const [selectedPoster, setSelectedPoster] = useState<SpeakerPoster | null>(null);

  // Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedPoster(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section className="pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-12 relative overflow-hidden px-4 sm:px-6 scroll-mt-24 sm:scroll-mt-28" id="speakers">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="border-b border-white/10 pb-5 sm:pb-6 mb-8 sm:mb-12 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <div className="flex items-baseline gap-3 sm:gap-5">
              <span
                className="font-mono text-sm tracking-widest font-bold whitespace-nowrap shrink-0 text-[#FF9900]"
              >
                [ 03 ]
              </span>
              <div>
                <p
                  className="text-xs font-bold uppercase tracking-[0.2em] mb-1.5 flex items-center gap-2 text-[#FF9900]"
                >
                  <span className="w-5 sm:w-6 h-[1px] bg-[#FF9900]" />
                  Summit Speakers
                </p>
                <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-normal text-white tracking-wide uppercase leading-tight sm:leading-none">
                  Announced Speakers
                </h2>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm font-mono uppercase tracking-wider">
              AWS Student Community Day 2026
            </p>
          </div>
        </ScrollReveal>

        {/* Structured Transparent Poster Showcase (Photo + Name + Company/Role Only) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {SPEAKERS_LIST.map((speaker, idx) => (
            <div
              key={speaker.id}
              className="group rounded-3xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] backdrop-blur-xl p-4 sm:p-5 transition-all duration-300 hover:border-white/20 shadow-xl relative flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Top Badge Strip */}
                <div className="flex items-center justify-between gap-2 mb-3.5">
                  <span className="font-mono text-[10px] font-medium uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/[0.05] text-slate-300 border border-white/10 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                    <span>{speaker.badge}</span>
                  </span>

                  <span className="text-[11px] font-mono text-slate-400 tracking-wider">
                    [ 0{idx + 1} / 0{SPEAKERS_LIST.length} ]
                  </span>
                </div>

                {/* Poster Image Container */}
                <div
                  onClick={() => setSelectedPoster(speaker)}
                  className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-white/[0.01] border border-white/10 cursor-pointer group/poster shadow-inner"
                >
                  <img
                    src={speaker.poster}
                    alt={`${speaker.name} - ${speaker.role}, ${speaker.company}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover/poster:scale-[1.02]"
                    loading="lazy"
                  />

                  {/* Hover Overlay Hint */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/poster:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-black/80 text-white border border-white/20 backdrop-blur-sm shadow-xl">
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Click to Enlarge Poster</span>
                    </span>
                  </div>
                </div>

                {/* Speaker Identity: Photo + Name + Company/Role Only (Clean & Senior) */}
                <div className="pt-3.5 pb-1 flex items-center justify-between gap-3 border-t border-white/10 mt-3.5">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug">
                      {speaker.name}
                    </h3>
                    <p className="text-xs sm:text-[13px] font-mono font-medium text-slate-400 mt-0.5">
                      {speaker.role} · {speaker.company}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedPoster(speaker)}
                    className="p-2 sm:px-3 sm:py-1.5 rounded-xl text-xs font-mono font-medium text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 transition-all cursor-pointer flex items-center gap-1.5 shrink-0"
                    title="Enlarge Poster"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Enlarge</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Minimalist High-Resolution Poster Lightbox Modal (No Download Option) */}
      {selectedPoster && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedPoster(null)}
        >
          <div
            className="relative max-w-lg w-full max-h-[90vh] flex flex-col items-center bg-white/[0.03] border border-white/15 backdrop-blur-2xl rounded-3xl p-4 sm:p-5 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between w-full mb-3 pb-2.5 border-b border-white/10">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-medium block">
                  AWS SCD 2026 · Official Announcement Poster
                </span>
                <h4 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  {selectedPoster.name} ({selectedPoster.role}, {selectedPoster.company})
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setSelectedPoster(null)}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Poster Preview */}
            <div className="relative w-full max-h-[72vh] rounded-2xl overflow-hidden border border-white/10 shadow-inner flex items-center justify-center bg-black/40">
              <img
                src={selectedPoster.poster}
                alt={selectedPoster.name}
                className="max-h-[72vh] w-auto object-contain rounded-xl"
              />
            </div>

            {/* Modal Footer (Clean, No Download Button) */}
            <div className="flex items-center justify-between w-full mt-3.5 pt-2.5 border-t border-white/10 text-xs font-mono text-slate-400">
              <span>{selectedPoster.role} · {selectedPoster.company}</span>
              <button
                type="button"
                onClick={() => setSelectedPoster(null)}
                className="px-3 py-1 rounded-lg bg-white/10 hover:bg-white/15 text-white transition-colors cursor-pointer font-sans text-xs font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Speakers;
