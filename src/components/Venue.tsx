import React from 'react';
import { EVENT_DETAILS } from '../data/eventData';
import { MapPin, Navigation, Train, Plane, ExternalLink } from 'lucide-react';
import Text3DFlip from '@/registry/magicui/text-3d-flip';

export const Venue: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden px-4" id="venue">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with [ 05 ] Index */}
        <div className="border-b border-neutral-200 pb-6 mb-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div className="flex items-baseline gap-6">
            <span className="text-[#D946EF] font-mono text-sm tracking-widest">[ 05 ]</span>
            <div>
              <p className="text-[#D946EF] text-xs font-bold uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
                <span className="w-6 h-[1px] bg-[#D946EF]" />
                Event Campus
              </p>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#171717] tracking-tight leading-tight">
                <Text3DFlip
                  textClassName="text-[#171717]"
                  flipTextClassName="text-[#D946EF]"
                  rotateDirection="top"
                  staggerDuration={0.02}
                >
                  Hosted at RISU Bhilai.
                </Text3DFlip>
              </h2>
            </div>
          </div>
          <p className="text-neutral-500 text-sm max-w-sm font-mono">
            RUNGTA KNOWLEDGE CITY · KOHKA-KURUD ROAD, BHILAI
          </p>
        </div>

        {/* Venue Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Details (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div>
              <span className="text-xs font-mono font-bold text-[#D946EF] uppercase tracking-wider block mb-1">
                ACADEMIC HOST INSTITUTION
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-[#171717] mb-2">
                {EVENT_DETAILS.institution}
              </h3>
              <p className="text-[#D946EF] text-sm font-medium flex items-center gap-2 mb-4">
                <MapPin className="w-4 h-4 shrink-0" />
                {EVENT_DETAILS.venueAddress}
              </p>
              <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                Rungta International Skills University (RISU) is Central India's premier skill-first technology university. Equipped with a state-of-the-art 600-seat central auditorium, high-capacity gigabit Wi-Fi, and modern cloud laboratories.
              </p>
            </div>

            {/* Transit Specs */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 rounded-2xl bg-white border border-neutral-200 hover:border-[#D946EF]/50 shadow-xs hover:shadow-[0_14px_32px_rgba(217,70,239,0.12)] transition-all flex flex-col">
                <div className="flex items-center gap-2 text-neutral-600 text-xs font-bold mb-1">
                  <Train className="w-4 h-4 text-[#D946EF]" />
                  <span>Bhilai Power House</span>
                </div>
                <span className="text-[#171717] font-extrabold text-lg">8 km</span>
                <span className="text-neutral-500 text-[11px]">~18 min via cab / auto</span>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-neutral-200 hover:border-[#D946EF]/50 shadow-xs hover:shadow-[0_14px_32px_rgba(217,70,239,0.12)] transition-all flex flex-col">
                <div className="flex items-center gap-2 text-neutral-600 text-xs font-bold mb-1">
                  <Train className="w-4 h-4 text-[#D946EF]" />
                  <span>Durg Junction</span>
                </div>
                <span className="text-[#171717] font-extrabold text-lg">12 km</span>
                <span className="text-neutral-500 text-[11px]">Direct railway terminal</span>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-neutral-200 hover:border-[#D946EF]/50 shadow-xs hover:shadow-[0_14px_32px_rgba(217,70,239,0.12)] transition-all flex flex-col">
                <div className="flex items-center gap-2 text-neutral-600 text-xs font-bold mb-1">
                  <Plane className="w-4 h-4 text-[#D946EF]" />
                  <span>Raipur Airport</span>
                </div>
                <span className="text-[#171717] font-extrabold text-lg">48 km</span>
                <span className="text-neutral-500 text-[11px]">Swami Vivekananda (RPR)</span>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-neutral-200 hover:border-[#D946EF]/50 shadow-xs hover:shadow-[0_14px_32px_rgba(217,70,239,0.12)] transition-all flex flex-col">
                <div className="flex items-center gap-2 text-neutral-600 text-xs font-bold mb-1">
                  <Navigation className="w-4 h-4 text-[#D946EF]" />
                  <span>Auditorium</span>
                </div>
                <span className="text-[#171717] font-extrabold text-lg">600+</span>
                <span className="text-neutral-500 text-[11px]">Tiered acoustic seats</span>
              </div>
            </div>

            <a
              href={EVENT_DETAILS.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#D946EF] hover:bg-[#C026D3] text-white transition-all font-bold text-sm w-full sm:w-fit shadow-md hover:shadow-[0_8px_25px_rgba(217,70,239,0.35)]"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-4 h-4 text-white" />
            </a>
          </div>

          {/* Right Map & Campus Preview (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl bg-white border border-neutral-200 shadow-xl overflow-hidden flex flex-col">
            <div className="p-3.5 sm:p-4 bg-neutral-50 border-b border-neutral-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-400" />
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#D946EF]" />
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-400" />
                <span className="text-[11px] sm:text-xs font-mono text-neutral-500 ml-1 sm:ml-2 truncate max-w-[190px] sm:max-w-none">
                  RISU Knowledge City · 21.2167° N, 81.3833° E
                </span>
              </div>
              <span className="text-[9px] sm:text-[10px] font-mono text-[#D946EF] uppercase font-bold px-2 py-0.5 rounded bg-[#D946EF]/10 border border-[#D946EF]/30 shrink-0">
                CAMPUS LIVE
              </span>
            </div>

            <div className="h-[300px] xs:h-[360px] sm:h-[420px] w-full relative">
              <iframe
                title="Rungta International Skills University Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14878.835166440263!2d81.3444497!3d21.2037149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a29235bc45f49ab%3A0xe54d65609425ef81!2sRungta%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="p-3.5 sm:p-4 bg-neutral-50 border-t border-neutral-200 flex flex-col sm:flex-row gap-1 sm:gap-0 items-start sm:items-center justify-between text-xs font-mono">
              <span className="text-neutral-500">Kohka-Kurud Road, Bhilai, CG 490024</span>
              <span className="text-[#D946EF] font-bold">Rungta Knowledge City</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
