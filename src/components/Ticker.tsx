import React from 'react';

export const Ticker: React.FC = () => {
  return (
    <div className="z-[110] bg-white/95 backdrop-blur-md border-b border-neutral-200 flex items-center h-9 fixed top-0 left-0 right-0 overflow-hidden text-xs select-none shadow-sm">
      <div className="absolute inset-0 pointer-events-none z-10 bg-gradient-to-r from-white via-transparent to-white" />
      
      <div className="animate-ticker flex items-center gap-6 whitespace-nowrap pl-full">
        <span className="flex items-center gap-2 text-neutral-700 font-medium tracking-wider uppercase text-[11px]">
          <span className="bg-[#D946EF] text-white font-extrabold px-2 py-0.5 rounded-full text-[9.5px] flex items-center gap-1.5 shadow-sm">
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
            LIVE
          </span>
          AWS STUDENT COMMUNITY DAY 2026
        </span>
        <span className="text-[#D946EF] opacity-80 text-[10px]">✦</span>
        <span className="text-neutral-700 text-[11.5px] tracking-wide font-medium">
          HOSTED BY <strong className="text-neutral-900">AWS SBG RISU</strong> · RUNGTA INTERNATIONAL SKILLS UNIVERSITY, BHILAI
        </span>
        <span className="text-[#D946EF] opacity-80 text-[10px]">✦</span>
        <span className="text-neutral-700 text-[11.5px] tracking-wide font-medium">
          KEYNOTES BY <strong className="text-[#D946EF]">PRAFUL BAGAI</strong> (HEAD OF DEVREL AWS) &amp; <strong className="text-[#D946EF]">JESSICA GILMORE</strong> (AMAZON)
        </span>
        <span className="text-[#D946EF] opacity-80 text-[10px]">✦</span>
        <span className="text-neutral-700 text-[11.5px] tracking-wide font-medium">
          <span className="bg-[#22D3EE]/15 text-[#0891B2] border border-[#22D3EE]/40 px-2 py-0.5 rounded-full text-[9.5px] font-bold">OCTOBER 26, 2026</span>
          FLAGSHIP CLOUD CONFERENCE AT RISU CAMPUS
        </span>
        <span className="text-[#D946EF] opacity-80 text-[10px]">✦</span>
        <span className="text-neutral-700 text-[11.5px] tracking-wide font-medium">
          WIN AMAZON ECHO DOTS &amp; TECH GEAR IN LIVE AUDITORIUM KAHOOT QUIZ
        </span>
        <span className="text-[#D946EF] opacity-80 text-[10px]">✦</span>
        <span className="text-neutral-700 text-[11.5px] tracking-wide font-medium">
          CENTRAL INDIA'S LARGEST CLOUD SUMMIT · 500+ STUDENT BUILDERS
        </span>
        <span className="text-[#D946EF] opacity-80 text-[10px]">✦</span>

        {/* Duplicate loop sequence for seamless loop */}
        <span className="flex items-center gap-2 text-neutral-700 font-medium tracking-wider uppercase text-[11px]">
          <span className="bg-[#D946EF] text-white font-extrabold px-2 py-0.5 rounded-full text-[9.5px] flex items-center gap-1.5 shadow-sm">
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
            LIVE
          </span>
          AWS STUDENT COMMUNITY DAY 2026
        </span>
        <span className="text-[#D946EF] opacity-80 text-[10px]">✦</span>
        <span className="text-neutral-700 text-[11.5px] tracking-wide font-medium">
          HOSTED BY <strong className="text-neutral-900">AWS SBG RISU</strong> · RUNGTA INTERNATIONAL SKILLS UNIVERSITY, BHILAI
        </span>
        <span className="text-[#D946EF] opacity-80 text-[10px]">✦</span>
        <span className="text-neutral-700 text-[11.5px] tracking-wide font-medium">
          KEYNOTES BY <strong className="text-[#D946EF]">PRAFUL BAGAI</strong> (HEAD OF DEVREL AWS) &amp; <strong className="text-[#D946EF]">JESSICA GILMORE</strong> (AMAZON)
        </span>
        <span className="text-[#D946EF] opacity-80 text-[10px]">✦</span>
        <span className="text-neutral-700 text-[11.5px] tracking-wide font-medium">
          <span className="bg-[#22D3EE]/15 text-[#0891B2] border border-[#22D3EE]/40 px-2 py-0.5 rounded-full text-[9.5px] font-bold">OCTOBER 26, 2026</span>
          FLAGSHIP CLOUD CONFERENCE AT RISU CAMPUS
        </span>
        <span className="text-[#D946EF] opacity-80 text-[10px]">✦</span>
        <span className="text-neutral-700 text-[11.5px] tracking-wide font-medium">
          WIN AMAZON ECHO DOTS &amp; TECH GEAR IN LIVE AUDITORIUM KAHOOT QUIZ
        </span>
        <span className="text-[#D946EF] opacity-80 text-[10px]">✦</span>
      </div>
    </div>
  );
};
