import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS, EVENT_DETAILS } from '../data/eventData';
import Text3DFlip from '@/registry/magicui/text-3d-flip';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative py-28 px-4 sm:px-6 max-w-4xl mx-auto text-[#171717]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#D946EF]/10 rounded-full blur-[170px] pointer-events-none" />

      {/* Section Header with [ 09 ] Index */}
      <div className="border-b border-neutral-200 pb-6 mb-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
        <div className="flex items-baseline gap-6">
          <span className="text-[#D946EF] font-mono text-sm tracking-widest font-bold">[ 09 ]</span>
          <div>
            <p className="text-[#D946EF] text-xs font-bold uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
              <span className="w-6 h-[1px] bg-[#D946EF]" />
              Frequently Asked Questions
            </p>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#171717] tracking-tight leading-tight">
              <Text3DFlip
                textClassName="text-[#171717]"
                flipTextClassName="text-[#D946EF]"
                rotateDirection="top"
                staggerDuration={0.02}
              >
                Everything you need to know.
              </Text3DFlip>
            </h2>
          </div>
        </div>
        <p className="text-neutral-500 text-sm max-w-sm font-mono">
          ATTENDANCE · MEALS · SWAGS · TRANSIT · CERTIFICATION
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-4">
        {FAQS.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`rounded-2xl border transition-all duration-300 backdrop-blur-md overflow-hidden ${
                isOpen
                  ? 'border-[#D946EF]/60 bg-white shadow-[0_10px_30px_rgba(217,70,239,0.12)]'
                  : 'border-neutral-200 bg-white/85 hover:border-[#D946EF]/40 hover:bg-white shadow-sm'
              }`}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer gap-4"
              >
                <span className="text-base sm:text-lg font-bold text-[#171717] flex items-center gap-3">
                  <span className="text-[#D946EF] font-mono text-xs sm:text-sm font-bold">
                    {String(index + 1).padStart(2, '0')}.
                  </span>
                  {faq.question}
                </span>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center border shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-[#D946EF]/15 border-[#D946EF]/40 text-[#D946EF]' : 'bg-neutral-100 border-neutral-200 text-neutral-500'
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {isOpen && (
                <div className="px-5 pb-6 sm:px-6 text-sm text-neutral-600 leading-relaxed border-t border-neutral-100 pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Still have questions */}
      <div className="mt-12 text-center text-xs text-neutral-500">
        Have more questions? Write to the organizing team at{' '}
        <a
          href={`mailto:${EVENT_DETAILS.contactEmail}`}
          className="text-[#D946EF] font-bold hover:underline"
        >
          {EVENT_DETAILS.contactEmail}
        </a>
      </div>
    </section>
  );
};
