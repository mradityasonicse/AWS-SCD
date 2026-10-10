import React, { useState } from 'react';
import { SPEAKERS, type Speaker } from '../data/eventData';
import { ArrowUpRight } from 'lucide-react';

export const Speakers: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const keynotes = SPEAKERS.filter(s => s.category === 'keynote');
  const regularSpeakers = SPEAKERS.filter(s => s.category === 'speaker');

  const renderSpeakerCard = (speaker: Speaker) => {
    const isHovered = hoveredCard === speaker.id;

    return (
      <article
        key={speaker.id}
        onMouseEnter={() => setHoveredCard(speaker.id)}
        onMouseLeave={() => setHoveredCard(null)}
        className="group relative rounded-2xl bg-gradient-to-b from-[#141c2c]/90 to-[#0b111c]/95 border border-white/10 hover:border-[#ff9900]/50 transition-all duration-300 hover:-translate-y-2 flex flex-col overflow-hidden shadow-2xl"
      >
        {/* Photo Container with Amber Spotlight */}
        <div className="relative h-60 flex items-center justify-center overflow-hidden bg-gradient-to-b from-white/[0.02] to-transparent">
          <div className="absolute w-44 h-44 rounded-full bg-[#ff9900]/15 blur-2xl group-hover:scale-125 transition-transform duration-500" />
          <img
            src={speaker.image}
            alt={speaker.name}
            className={`w-36 h-36 rounded-full object-cover border-2 transition-all duration-300 z-10 shadow-xl ${
              isHovered ? 'border-[#ff9900] scale-105 shadow-[0_0_25px_rgba(255,153,0,0.4)]' : 'border-white/20'
            }`}
          />
        </div>

        {/* Card Body */}
        <div className="p-6 pt-2 flex flex-col flex-1 justify-between">
          <div>
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-[#ff9900] bg-[#ff9900]/10 px-2.5 py-0.5 rounded-full border border-[#ff9900]/20">
                {speaker.category === 'keynote' ? 'Keynote' : 'Speaker'}
              </span>
              {speaker.linkedin && (
                <a
                  href={speaker.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-[#ff9900] transition-colors p-1"
                  aria-label={`${speaker.name} LinkedIn`}
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              )}
            </div>

            <h4 className="text-xl font-black text-white group-hover:text-[#ffb84d] transition-colors">
              {speaker.name}
            </h4>
            <p className="text-sm font-semibold text-[#ffb84d] mb-1">
              {speaker.current_designation}
            </p>
            <p className="text-xs text-slate-400 mb-4 font-mono">
              {speaker.company}
            </p>
          </div>

          {speaker.topic && (
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 group-hover:border-[#ff9900]/30 transition-colors">
              <span className="text-[9.5px] uppercase font-mono tracking-wider text-[#ff9900] font-bold block mb-1">
                SESSION TOPIC
              </span>
              <p className="text-xs text-slate-200 line-clamp-2 leading-relaxed">
                {speaker.topic}
              </p>
            </div>
          )}
        </div>
      </article>
    );
  };

  return (
    <section className="py-24 relative overflow-hidden px-4" id="speakers">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with [ 03 ] Index */}
        <div className="border-b border-white/10 pb-6 mb-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div className="flex items-baseline gap-6">
            <span className="text-[#ff9900] font-mono text-sm tracking-widest">[ 03 ]</span>
            <div>
              <p className="text-[#ff9900] text-xs font-bold uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
                <span className="w-6 h-[1px] bg-[#ff9900]" />
                Speakers
              </p>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
                The first names <span className="font-serif italic font-normal text-[#ffb84d]">are in.</span>
              </h2>
            </div>
          </div>
          <p className="text-slate-400 text-sm max-w-sm font-mono">
            AWS DEVREL · CLOUD BUILDERS · ACCENTURE · SNAPMINT
          </p>
        </div>

        {/* Keynote Speakers Group */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-8 h-[2px] bg-[#ff9900] rounded-full" />
            <h3 className="text-lg font-extrabold uppercase tracking-wider text-[#ff9900]">
              Keynote Speakers
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-8">
            {keynotes.map(renderSpeakerCard)}
          </div>
        </div>

        {/* Technical Speakers Group */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <span className="w-8 h-[2px] bg-[#ff9900] rounded-full" />
            <h3 className="text-lg font-extrabold uppercase tracking-wider text-[#ff9900]">
              Technical Sessions &amp; Architecture Pioneers
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularSpeakers.map(renderSpeakerCard)}
          </div>
        </div>
      </div>
    </section>
  );
};
