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
      {/* Section Header with [ 07 ] Index */}
      <ScrollReveal>
        <div className="border-b border-white/10 pb-6 mb-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div className="flex items-baseline gap-4 sm:gap-6">
            <span
              className="font-mono text-sm tracking-widest font-bold whitespace-nowrap shrink-0 text-[#FF9900]"
            >
              [ 07 ]
            </span>
            <div>
              <p
                className="text-xs font-bold uppercase tracking-[0.2em] mb-2 flex items-center gap-2 text-[#FF9900]"
              >
                <span className="w-6 h-[1px] bg-[#FF9900]" />
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
                className={`rounded-xl border transition-all duration-300 overflow-hidden backdrop-blur-[16px] ${
                  isOpen
                    ? 'bg-white/[0.06] shadow-xl border-[#FF9900]/40'
                    : 'border-white/10 bg-white/[0.03] hover:bg-white/[0.05] shadow-sm'
                }`}
                style={{
                  backgroundColor: isOpen ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.02)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  borderColor: isOpen ? 'rgba(255, 153, 0, 0.35)' : 'rgba(255, 255, 255, 0.08)',
                }}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer gap-4 select-none"
                >
                  <span className="text-base sm:text-lg font-bold text-white flex items-center gap-3">
                    <span
                      className="font-mono text-xs sm:text-sm font-bold text-[#FF9900]"
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
                      backgroundColor: isOpen ? 'rgba(255, 153, 0, 0.15)' : 'rgba(255, 255, 255, 0.04)',
                      borderColor: isOpen ? 'rgba(255, 153, 0, 0.4)' : 'rgba(255, 255, 255, 0.08)',
                      color: isOpen ? '#FF9900' : '#94A3B8',
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
                      <div className="px-5 pb-6 sm:px-6 text-sm text-slate-300 leading-relaxed border-t border-[var(--theme-border,#383336)]/60 pt-4">
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
            className="font-bold hover:underline"
            style={{ color: 'var(--theme-accent, #FF9900)' }}
          >
            {EVENT_DETAILS.contactEmail}
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default FAQ;
