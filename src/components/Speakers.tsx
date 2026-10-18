import React, { useState, useEffect } from 'react';
import { ScrollReveal } from '@/components/ui/motion-primitives';
import { X, Maximize2 } from 'lucide-react';

interface SpeakerPoster {
  id: number;
  name: string;
  role: string;
  company: string;
  poster: string;
}

const SPEAKERS_LIST: SpeakerPoster[] = [
  {
    id: 1,
    name: 'Harshit Singh',
    role: 'SDE-II',
    company: 'Amazon',
    poster: '/speakers/harshit_singh_poster.png',
  },
  {
    id: 2,
    name: 'Saptarshi De',
    role: 'SDE-II',
    company: 'AWS (Amazon Web Services)',
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
    <section className="py-16 sm:py-20 md:py-24 relative overflow-hidden px-4 sm:px-6" id="speakers">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="border-b border-white/10 pb-5 sm:pb-6 mb-8 sm:mb-12 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
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
                  <span className="w-5 sm:w-6 h-[1px]" style={{ backgroundColor: 'var(--theme-accent, #AD5CFF)' }} />
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

        {/* Structured Poster Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {SPEAKERS_LIST.map((speaker, idx) => (
            <div
              key={speaker.id}
              className="group rounded-2xl border border-white/10 bg-[#160E28]/70 backdrop-blur-md p-3 sm:p-4 transition-all duration-300 hover:border-white/25 hover:shadow-2xl flex flex-col justify-between"
            >
              {/* Poster Image Container */}
              <div
                onClick={() => setSelectedPoster(speaker)}
                className="relative rounded-xl overflow-hidden aspect-[4/5] bg-black/40 border border-white/5 cursor-pointer group/poster shadow-inner"
              >
                <img
                  src={speaker.poster}
                  alt={`${speaker.name} - ${speaker.role}, ${speaker.company}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover/poster:scale-[1.02]"
                  loading="lazy"
                />

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/poster:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-medium bg-black/80 text-white border border-white/20 backdrop-blur-sm shadow-lg">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>View Full Poster</span>
                  </span>
                </div>
              </div>

              {/* Minimal Clean Metadata Caption */}
              <div className="pt-3.5 pb-1 px-1 flex items-center justify-between gap-2 border-t border-white/5 mt-3">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug">
                    {speaker.name}
                  </h3>
                  <p className="text-xs font-mono text-slate-400">
                    {speaker.role} · {speaker.company}
                  </p>
                </div>
                <span className="text-[11px] font-mono text-slate-500 shrink-0">
                  0{idx + 1}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Clean Bottom Metadata Strip */}
        <div className="mt-10 sm:mt-12 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-slate-400 font-mono text-xs">
          <span>RUNGTA INTERNATIONAL SKILLS UNIVERSITY · BHILAI</span>
          <span style={{ color: 'var(--theme-accent, #AD5CFF)' }} className="font-bold">
            AWS STUDENT COMMUNITY DAY 2026
          </span>
        </div>
      </div>

      {/* Minimalist High-Resolution Poster Lightbox Modal */}
      {selectedPoster && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedPoster(null)}
        >
          <div
            className="relative max-w-lg w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedPoster(null)}
              className="absolute -top-10 right-0 p-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={selectedPoster.poster}
              alt={selectedPoster.name}
              className="max-h-[85vh] w-auto object-contain rounded-2xl shadow-2xl border border-white/10"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Speakers;
