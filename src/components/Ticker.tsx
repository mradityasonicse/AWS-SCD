import React from 'react';

export const Ticker: React.FC = () => {
  return (
    <div className="z-[110] bg-gradient-to-r from-[#0a0e14] via-[#10172a] to-[#0a0e14] border-b border-[#ff9900]/30 flex items-center h-9 fixed top-0 left-0 right-0 overflow-hidden text-xs select-none shadow-md">
      <div className="absolute inset-0 pointer-events-none z-10 bg-gradient-to-r from-[#0a0e14] via-transparent to-[#0a0e14]" />
      
      <div className="animate-ticker flex items-center gap-6 whitespace-nowrap pl-full">
        <span className="flex items-center gap-2 text-slate-300 font-medium tracking-wider uppercase text-[11px]">
          <span className="bg-[#ff9900] text-black font-extrabold px-2 py-0.5 rounded text-[9.5px] flex items-center gap-1.5 shadow-sm">
            <span className="w-1.5 h-1.5 bg-black rounded-full animate-ping" />
            LIVE
          </span>
          AWS STUDENT COMMUNITY DAY 2026
        </span>
        <span className="text-[#ff9900] opacity-70 text-[10px]">✦</span>
        <span className="text-slate-300 text-[11.5px] tracking-wide font-medium">
          HOSTED BY <strong className="text-white">AWS SBG RISU</strong> · RUNGTA INTERNATIONAL SKILLS UNIVERSITY, BHILAI
        </span>
        <span className="text-[#ff9900] opacity-70 text-[10px]">✦</span>
        <span className="text-slate-300 text-[11.5px] tracking-wide font-medium">
          KEYNOTES BY <strong className="text-[#ffb84d]">PRAFUL BAGAI</strong> (HEAD OF DEVREL AWS) &amp; <strong className="text-[#ffb84d]">JESSICA GILMORE</strong> (AMAZON)
        </span>
        <span className="text-[#ff9900] opacity-70 text-[10px]">✦</span>
        <span className="text-slate-300 text-[11.5px] tracking-wide font-medium">
          <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-2 py-0.5 rounded text-[9.5px] font-bold">REGISTRATION OPEN</span>
          EARLY BIRD PASSES FILLING RAPIDLY
        </span>
        <span className="text-[#ff9900] opacity-70 text-[10px]">✦</span>
        <span className="text-slate-300 text-[11.5px] tracking-wide font-medium">
          WIN AMAZON ECHO DOTS &amp; TECH GEAR IN LIVE AUDITORIUM KAHOOT QUIZ
        </span>
        <span className="text-[#ff9900] opacity-70 text-[10px]">✦</span>
        <span className="text-slate-300 text-[11.5px] tracking-wide font-medium">
          CENTRAL INDIA'S LARGEST CLOUD SUMMIT · 500+ STUDENT BUILDERS
        </span>
        <span className="text-[#ff9900] opacity-70 text-[10px]">✦</span>

        {/* Duplicate loop sequence for seamless loop */}
        <span className="flex items-center gap-2 text-slate-300 font-medium tracking-wider uppercase text-[11px]">
          <span className="bg-[#ff9900] text-black font-extrabold px-2 py-0.5 rounded text-[9.5px] flex items-center gap-1.5 shadow-sm">
            <span className="w-1.5 h-1.5 bg-black rounded-full animate-ping" />
            LIVE
          </span>
          AWS STUDENT COMMUNITY DAY 2026
        </span>
        <span className="text-[#ff9900] opacity-70 text-[10px]">✦</span>
        <span className="text-slate-300 text-[11.5px] tracking-wide font-medium">
          HOSTED BY <strong className="text-white">AWS SBG RISU</strong> · RUNGTA INTERNATIONAL SKILLS UNIVERSITY, BHILAI
        </span>
        <span className="text-[#ff9900] opacity-70 text-[10px]">✦</span>
        <span className="text-slate-300 text-[11.5px] tracking-wide font-medium">
          KEYNOTES BY <strong className="text-[#ffb84d]">PRAFUL BAGAI</strong> (HEAD OF DEVREL AWS) &amp; <strong className="text-[#ffb84d]">JESSICA GILMORE</strong> (AMAZON)
        </span>
        <span className="text-[#ff9900] opacity-70 text-[10px]">✦</span>
        <span className="text-slate-300 text-[11.5px] tracking-wide font-medium">
          <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-2 py-0.5 rounded text-[9.5px] font-bold">REGISTRATION OPEN</span>
          EARLY BIRD PASSES FILLING RAPIDLY
        </span>
        <span className="text-[#ff9900] opacity-70 text-[10px]">✦</span>
        <span className="text-slate-300 text-[11.5px] tracking-wide font-medium">
          WIN AMAZON ECHO DOTS &amp; TECH GEAR IN LIVE AUDITORIUM KAHOOT QUIZ
        </span>
        <span className="text-[#ff9900] opacity-70 text-[10px]">✦</span>
      </div>
    </div>
  );
};
