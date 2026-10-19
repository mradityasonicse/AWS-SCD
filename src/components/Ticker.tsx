import React from 'react';

export const Ticker: React.FC = () => {
  return (
    <div
      role="region"
      aria-label="Summit announcements"
      className="z-[110] bg-[#0A0D14] border-b border-white/10 flex items-center h-9 fixed top-0 left-0 right-0 overflow-hidden text-xs select-none shadow-md"
    >
      <div className="absolute inset-0 pointer-events-none z-10 bg-gradient-to-r from-[#0A0D14] via-transparent to-[#0A0D14]" />
      
      <div className="animate-ticker flex items-center gap-6 whitespace-nowrap">
        <span className="flex items-center gap-2 text-slate-300 font-medium tracking-wider uppercase text-[11px]">
          <span className="bg-[#AD5CFF] text-[#0A0D14] font-black px-2 py-0.5 rounded text-[9.5px] flex items-center gap-1.5 shadow-sm">
            <span className="w-1.5 h-1.5 bg-[#0A0D14] rounded-full" />
            SUMMIT 2026
          </span>
          AWS STUDENT COMMUNITY DAY
        </span>
        <span className="text-[#AD5CFF] text-[10px]">✦</span>
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-white/5 border border-white/10 px-2.5 py-0.5 rounded-full">
          <img src="/namaste-transparent.png" alt="Namaste" className="w-3.5 h-3.5 object-contain" />
          <span className="text-[#AD5CFF] font-bold">NAMASTE</span> · CENTRAL INDIA WELCOMES YOU
        </span>
        <span className="text-[#AD5CFF] text-[10px]">✦</span>
        <span className="text-slate-300 text-[11.5px] tracking-wide font-medium">
          HOSTED BY <strong className="text-white">AWS SBG RUNGTA INTERNATIONAL SKILLS UNIVERSITY</strong> · BHILAI
        </span>
        <span className="text-[#AD5CFF] text-[10px]">✦</span>
        <span className="text-slate-300 text-[11.5px] tracking-wide font-medium">
          KEYNOTES BY <strong className="text-[#AD5CFF]">PRAFUL BAGAI</strong> (HEAD OF DEVREL AWS) &amp; <strong className="text-[#AD5CFF]">JESSICA GILMORE</strong> (AMAZON)
        </span>
        <span className="text-[#42B4FF] text-[10px]">✦</span>
        <span className="text-slate-300 text-[11.5px] tracking-wide font-medium">
          <span className="bg-[#42B4FF]/15 text-[#42B4FF] border border-[#42B4FF]/30 px-2.5 py-0.5 rounded-full text-[9.5px] font-bold">OCTOBER 21, 2026</span>
          FLAGSHIP CLOUD CONFERENCE AT RUNGTA INTERNATIONAL SKILLS UNIVERSITY CAMPUS
        </span>
        <span className="text-[#AD5CFF] text-[10px]">✦</span>
        <span className="text-slate-300 text-[11.5px] tracking-wide font-medium">
          LIVE AUDITORIUM KAHOOT QUIZ &amp; CLOUD ARCHITECT LABS
        </span>
        <span className="text-[#42B4FF] text-[10px]">✦</span>
        <span className="text-slate-300 text-[11.5px] tracking-wide font-medium">
          CENTRAL INDIA'S PREMIER STUDENT GATHERING · 500+ BUILDERS
        </span>
        <span className="text-[#AD5CFF] text-[10px]">✦</span>

        {/* Duplicate loop sequence for seamless loop */}
        <span className="flex items-center gap-2 text-slate-300 font-medium tracking-wider uppercase text-[11px]">
          <span className="bg-[#AD5CFF] text-[#0A0D14] font-black px-2 py-0.5 rounded text-[9.5px] flex items-center gap-1.5 shadow-sm">
            <span className="w-1.5 h-1.5 bg-[#0A0D14] rounded-full" />
            SUMMIT 2026
          </span>
          AWS STUDENT COMMUNITY DAY
        </span>
        <span className="text-[#AD5CFF] text-[10px]">✦</span>
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-white/5 border border-white/10 px-2.5 py-0.5 rounded-full">
          <img src="/namaste-transparent.png" alt="Namaste" className="w-3.5 h-3.5 object-contain" />
          <span className="text-[#AD5CFF] font-bold">NAMASTE</span> · CENTRAL INDIA WELCOMES YOU
        </span>
        <span className="text-[#AD5CFF] text-[10px]">✦</span>
        <span className="text-slate-300 text-[11.5px] tracking-wide font-medium">
          HOSTED BY <strong className="text-white">AWS SBG RUNGTA INTERNATIONAL SKILLS UNIVERSITY</strong> · BHILAI
        </span>
        <span className="text-[#AD5CFF] text-[10px]">✦</span>
        <span className="text-slate-300 text-[11.5px] tracking-wide font-medium">
          KEYNOTES BY <strong className="text-[#AD5CFF]">PRAFUL BAGAI</strong> (HEAD OF DEVREL AWS) &amp; <strong className="text-[#AD5CFF]">JESSICA GILMORE</strong> (AMAZON)
        </span>
        <span className="text-[#42B4FF] text-[10px]">✦</span>
        <span className="text-slate-300 text-[11.5px] tracking-wide font-medium">
          <span className="bg-[#42B4FF]/15 text-[#42B4FF] border border-[#42B4FF]/30 px-2.5 py-0.5 rounded-full text-[9.5px] font-bold">OCTOBER 21, 2026</span>
          FLAGSHIP CLOUD CONFERENCE AT RUNGTA INTERNATIONAL SKILLS UNIVERSITY CAMPUS
        </span>
        <span className="text-[#AD5CFF] text-[10px]">✦</span>
        <span className="text-slate-300 text-[11.5px] tracking-wide font-medium">
          WIN EXCLUSIVE OFFICIAL AWS SWAG &amp; MERCH IN LIVE AUDITORIUM KAHOOT QUIZ
        </span>
        <span className="text-[#AD5CFF] text-[10px]">✦</span>
      </div>
    </div>
  );
};
