import React from 'react';
import { motion } from 'motion/react';
import { Ticket } from 'lucide-react';
import { EVENT_DETAILS } from '../data/eventData';

interface MobileRegisterBarProps {
  onOpenRegister?: () => void;
}

export const MobileRegisterBar: React.FC<MobileRegisterBarProps> = () => {
  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[rgba(17,0,17,0.85)] backdrop-blur-2xl border-t border-white/10 px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-8px_30px_rgba(0,0,0,0.7)]"
    >
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="flex items-center gap-2.5 min-w-0">
          <span
            className="w-2.5 h-2.5 rounded-full shrink-0 animate-pulse"
            style={{ backgroundColor: 'var(--theme-accent, #AD5CFF)' }}
          />
          <div className="truncate">
            <div className="flex items-center gap-1.5 font-heading text-base text-white uppercase tracking-wider truncate leading-none">
              <span>AWS SCD 2026</span>
              <span
                className="text-[10px] font-mono px-1.5 py-0.2 rounded border font-bold"
                style={{
                  color: 'var(--theme-accent, #AD5CFF)',
                  borderColor: 'color-mix(in srgb, var(--theme-accent, #AD5CFF) 30%, transparent)',
                  backgroundColor: 'color-mix(in srgb, var(--theme-accent, #AD5CFF) 10%, transparent)',
                }}
              >
                FREE
              </span>
            </div>
            <p className="text-[10.5px] font-mono text-slate-400 truncate mt-0.5">
              21 Oct · Rungta International Skills University, Bhilai
            </p>
          </div>
        </div>

        <a
          href={EVENT_DETAILS.registrationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 jitter-btn-base jitter-btn-register px-4 py-2 text-xs uppercase tracking-wider flex items-center gap-1.5 cursor-pointer"
        >
          <Ticket className="w-3.5 h-3.5 stroke-[2.5] text-white drop-shadow-sm" />
          <span>Register</span>
        </a>
      </div>
    </motion.div>
  );
};

export default MobileRegisterBar;
