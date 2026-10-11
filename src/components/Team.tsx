import React from 'react';
import { ORGANIZERS } from '../data/eventData';
import { ArrowUpRight } from 'lucide-react';
import { FannedCardDeck } from './FannedCardDeck';
import Text3DFlip from '@/registry/magicui/text-3d-flip';

export const Team: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden px-4" id="team">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with [ 08 ] Index */}
        <div className="border-b border-neutral-200 pb-6 mb-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div className="flex items-baseline gap-6">
            <span className="text-[#D946EF] font-mono text-sm tracking-widest">[ 08 ]</span>
            <div>
              <p className="text-[#D946EF] text-xs font-bold uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
                <span className="w-6 h-[1px] bg-[#D946EF]" />
                Core Team
              </p>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#171717] tracking-tight leading-tight">
                <Text3DFlip
                  textClassName="text-[#171717]"
                  flipTextClassName="text-[#D946EF]"
                  rotateDirection="top"
                  staggerDuration={0.02}
                >
                  The crew behind the summit.
                </Text3DFlip>
              </h2>
            </div>
          </div>
          
          <p className="text-neutral-500 text-sm max-w-sm font-mono">
            AWS SBG LEADERSHIP · STUDENT VOLUNTEERS · FACULTY MENTORS
          </p>
        </div>

        {/* Featured Interactive Fanned Card Deck Carousel */}
        <div className="mb-20">
          <FannedCardDeck />
        </div>

        {/* Core Organizers Roster Grid */}
        <div className="border-t border-neutral-200 pt-12">
          <h3 className="text-sm font-mono font-bold uppercase tracking-widest text-[#D946EF] mb-8">
            // AWS SBG RISU STUDENT LEADERSHIP &amp; MENTORS
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ORGANIZERS.map((member) => (
              <div
                key={member.id}
                className="group rounded-3xl p-6 bg-white border border-neutral-200 hover:border-[#D946EF]/50 transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center shadow-xs hover:shadow-[0_14px_32px_rgba(217,70,239,0.12)] relative overflow-hidden"
              >
                {/* Photo / Crest Container */}
                <div className="w-28 h-28 rounded-2xl bg-neutral-50 border border-neutral-200 p-4 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform shadow-xs relative">
                  <img
                    src={member.image || '/risu-logo.png'}
                    alt={member.name}
                    className="max-h-16 w-auto object-contain"
                  />
                </div>

                <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-[#D946EF] mb-1">
                  {member.role}
                </span>

                <h4 className="text-xl font-black text-[#171717] mb-1 group-hover:text-[#D946EF] transition-colors">
                  {member.name}
                </h4>

                <p className="text-xs text-neutral-500 mb-5">
                  {member.title}
                </p>

                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-neutral-100 hover:bg-[#D946EF] text-neutral-800 hover:text-white border border-neutral-200 hover:border-[#D946EF] transition-all text-xs font-bold"
                  >
                    <span>Connect on LinkedIn</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
