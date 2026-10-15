import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQS, EVENT_DETAILS } from '../data/eventData';
import { ScrollReveal } from '@/components/ui/motion-primitives';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative py-28 px-4 sm:px-6 max-w-4xl mx-auto text-[#F8FAFC]">
      {/* Section Header with [ 09 ] Index */}
      <ScrollReveal>
        <div className="border-b border-[#232F3E] pb-6 mb-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div className="flex items-baseline gap-4 sm:gap-6">
            <span
              className="font-mono text-sm tracking-widest font-bold whitespace-nowrap shrink-0"
              style={{ color: 'var(--theme-accent, #AD5CFF)' }}
            >
              [ 08 ]
            </span>
            <div>
              <p
                className="text-xs font-bold uppercase tracking-[0.2em] mb-2 flex items-center gap-2"
                style={{ color: 'var(--theme-accent, #AD5CFF)' }}
              >
                <span className="w-6 h-[1px]" style={{ backgroundColor: 'var(--theme-accent, #AD5CFF)' }} />
                Frequently Asked Questions
              </p>
              <h2 className="font-heading text-4xl sm:text-6xl md:text-7xl font-normal text-white tracking-wide uppercase leading-none">
                Everything you need to know.
              </h2>
            </div>
          </div>
          <p className="text-slate-400 text-xs sm:text-sm max-w-sm font-mono uppercase tracking-wider">
            ATTENDANCE · MEALS · SWAGS · TRANSIT · CERTIFICATION
          </p>
        </div>
      </ScrollReveal>

      {/* Accordion List with Smooth Spring Height Animation */}
      <div className="space-y-4">
        {FAQS.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <ScrollReveal key={index} delay={index * 0.04}>
              <div
                className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#161E2D] shadow-md'
                    : 'border-[#232F3E] bg-[#131921] hover:bg-[#161E2D] shadow-sm'
                }`}
                style={{
                  borderColor: isOpen ? 'var(--theme-accent, #AD5CFF)' : undefined,
                }}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer gap-4 select-none"
                >
                  <span className="text-base sm:text-lg font-bold text-white flex items-center gap-3">
                    <span
                      className="font-mono text-xs sm:text-sm font-bold"
                      style={{ color: 'var(--theme-accent, #AD5CFF)' }}
                    >
                      {String(index + 1).padStart(2, '0')}.
                    </span>
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    className="w-8 h-8 rounded-full flex items-center justify-center border shrink-0 transition-colors"
                    style={{
                      backgroundColor: isOpen ? 'color-mix(in srgb, var(--theme-accent, #AD5CFF) 15%, transparent)' : '#161E2D',
                      borderColor: isOpen ? 'color-mix(in srgb, var(--theme-accent, #AD5CFF) 40%, transparent)' : '#232F3E',
                      color: isOpen ? 'var(--theme-accent, #AD5CFF)' : '#94A3B8',
                    }}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 sm:px-6 text-sm text-slate-300 leading-relaxed border-t border-[#232F3E]/60 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          );
        })}
      </div>

      {/* Still have questions */}
      <ScrollReveal delay={0.2}>
        <div className="mt-12 text-center text-xs text-slate-400">
          Have more questions? Write to the organizing team at{' '}
          <a
            href={`mailto:${EVENT_DETAILS.contactEmail}`}
            className="text-[#FF9900] font-bold hover:text-[#FFAC33] hover:underline"
          >
            {EVENT_DETAILS.contactEmail}
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default FAQ;
