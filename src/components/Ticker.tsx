import React from 'react';

export const Ticker: React.FC = () => {
  return (
    <div
      role="region"
      aria-label="Summit announcements"
      className="z-[110] bg-[#131921] border-b border-[#232F3E] flex items-center h-9 fixed top-0 left-0 right-0 overflow-hidden text-xs select-none"
    >
      <div className="absolute inset-0 pointer-events-none z-10 bg-gradient-to-r from-[#131921] via-transparent to-[#131921]" />
      
      <div className="animate-ticker flex items-center gap-6 whitespace-nowrap pl-full">
        <span className="flex items-center gap-2 text-slate-300 font-medium tracking-wider uppercase text-[11px]">
          <span className="bg-[#FF9900] text-[#0B0F17] font-bold px-2 py-0.5 rounded text-[9.5px] flex items-center gap-1.5 shadow-sm">
            <span className="w-1.5 h-1.5 bg-[#0B0F17] rounded-full" />
            SUMMIT 2026
          </span>
          AWS STUDENT COMMUNITY DAY
        </span>
        <span className="text-[#FF9900] text-[10px]">✦</span>
        <span className="text-slate-300 text-[11.5px] tracking-wide font-medium">
          HOSTED BY <strong style={{ color: 'var(--theme-accent, #AD5CFF)' }}>AWS SBG RISU</strong> · RUNGTA INTERNATIONAL SKILLS UNIVERSITY, BHILAI
        </span>
        <span style={{ color: 'var(--theme-accent, #AD5CFF)' }} className="text-[10px]">✦</span>
        <span className="text-slate-300 text-[11.5px] tracking-wide font-medium">
          KEYNOTES BY <strong className="text-[#FF9900]">PRAFUL BAGAI</strong> (HEAD OF DEVREL AWS) &amp; <strong style={{ color: 'var(--theme-accent, #AD5CFF)' }}>JESSICA GILMORE</strong> (AMAZON)
        </span>
        <span className="text-[#42B4FF] text-[10px]">✦</span>
        <span className="text-slate-300 text-[11.5px] tracking-wide font-medium">
          <span className="bg-[#42B4FF]/15 text-[#42B4FF] border border-[#42B4FF]/30 px-2.5 py-0.5 rounded-full text-[9.5px] font-bold">OCTOBER 21, 2026</span>
          FLAGSHIP CLOUD CONFERENCE AT RISU CAMPUS
        </span>
        <span className="text-[#00E582] text-[10px]">✦</span>
        <span className="text-slate-300 text-[11.5px] tracking-wide font-medium">
          LIVE AUDITORIUM KAHOOT QUIZ &amp; CLOUD ARCHITECT LABS
        </span>
        <span className="text-[#FF57EA] text-[10px]">✦</span>
        <span className="text-slate-300 text-[11.5px] tracking-wide font-medium">
          CENTRAL INDIA'S PREMIER STUDENT GATHERING · 500+ BUILDERS
        </span>
        <span className="text-[#FF9900] text-[10px]">✦</span>

        {/* Duplicate loop sequence for seamless loop */}
        <span className="flex items-center gap-2 text-slate-300 font-medium tracking-wider uppercase text-[11px]">
          <span className="bg-[#FF9900] text-[#0B0F17] font-bold px-2 py-0.5 rounded text-[9.5px] flex items-center gap-1.5 shadow-sm">
            <span className="w-1.5 h-1.5 bg-[#0B0F17] rounded-full" />
            SUMMIT 2026
          </span>
          AWS STUDENT COMMUNITY DAY
        </span>
        <span className="text-[#FF9900] text-[10px]">✦</span>
        <span className="text-slate-300 text-[11.5px] tracking-wide font-medium">
          HOSTED BY <strong style={{ color: 'var(--theme-accent, #AD5CFF)' }}>AWS SBG RISU</strong> · RUNGTA INTERNATIONAL SKILLS UNIVERSITY, BHILAI
        </span>
        <span style={{ color: 'var(--theme-accent, #AD5CFF)' }} className="text-[10px]">✦</span>
        <span className="text-slate-300 text-[11.5px] tracking-wide font-medium">
          KEYNOTES BY <strong className="text-[#FF9900]">PRAFUL BAGAI</strong> (HEAD OF DEVREL AWS) &amp; <strong style={{ color: 'var(--theme-accent, #AD5CFF)' }}>JESSICA GILMORE</strong> (AMAZON)
        </span>
        <span className="text-[#42B4FF] text-[10px]">✦</span>
        <span className="text-slate-300 text-[11.5px] tracking-wide font-medium">
          <span className="bg-[#42B4FF]/15 text-[#42B4FF] border border-[#42B4FF]/30 px-2.5 py-0.5 rounded-full text-[9.5px] font-bold">OCTOBER 21, 2026</span>
          FLAGSHIP CLOUD CONFERENCE AT RISU CAMPUS
        </span>
        <span className="text-[#00E582] text-[10px]">✦</span>
        <span className="text-slate-300 text-[11.5px] tracking-wide font-medium">
          WIN AMAZON ECHO DOTS &amp; TECH GEAR IN LIVE AUDITORIUM KAHOOT QUIZ
        </span>
        <span className="text-[#FF57EA] text-[10px]">✦</span>
      </div>
    </div>
  );
};
