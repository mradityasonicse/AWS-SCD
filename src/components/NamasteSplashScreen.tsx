import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface NamasteSplashScreenProps {
  onFinish?: () => void;
}

export const NamasteSplashScreen: React.FC<NamasteSplashScreenProps> = ({ onFinish }) => {
  const [visible, setVisible] = useState(true);

  const handleDismiss = useCallback(() => {
    setVisible(false);
    document.body.style.overflow = '';
    window.scrollTo({ top: 0, behavior: 'instant' });
    if (onFinish) onFinish();
  }, [onFinish]);

  useEffect(() => {
    // Ensure viewport is at top when splash mounts
    window.scrollTo({ top: 0, behavior: 'instant' });
    // Lock body scroll while splash screen is active
    document.body.style.overflow = 'hidden';

    // Auto dismiss after 3.4s for a complete, cinematic video introduction
    const timer = setTimeout(() => {
      handleDismiss();
    }, 3400);

    // Keyboard listener (Escape / Space / Enter skips splash immediately)
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === ' ' || e.key === 'Enter') {
        handleDismiss();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [handleDismiss]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="namaste-splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center overflow-hidden select-none bg-[#100B2E]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 50% 46%, rgba(168, 85, 247, 0.22) 0%, rgba(48, 32, 107, 0.45) 45%, #100B2E 85%)',
          }}
          onClick={handleDismiss}
        >
          {/* Ambient Background Grid */}
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            }}
          />

          {/* Top-right Skip Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleDismiss();
            }}
            className="absolute top-6 right-6 z-20 flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-mono font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/25 backdrop-blur-md transition-all cursor-pointer shadow-lg active:scale-95"
            aria-label="Skip introduction"
          >
            <span>Skip</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* Centerpiece Content */}
          <div
            className="relative z-10 flex flex-col items-center text-center px-4 max-w-xl mx-auto cursor-pointer"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Radiant Breathing Halo behind the Namaste Mandala */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{
                scale: [0.95, 1.15, 0.98],
                opacity: [0.55, 0.9, 0.6],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                repeatType: 'mirror',
                ease: 'easeInOut',
              }}
              className="absolute -top-10 w-80 h-80 sm:w-96 sm:h-96 md:w-[28rem] md:h-[28rem] rounded-full -z-10 pointer-events-none"
              style={{
                background:
                  'radial-gradient(circle, rgba(173, 92, 255, 0.45) 0%, rgba(255, 87, 234, 0.25) 35%, rgba(25, 25, 112, 0.35) 60%, transparent 75%)',
                filter: 'blur(38px)',
              }}
            />

            {/* Creation of Adam Digital ASCII Hands Video Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative mb-6 flex items-center justify-center w-full max-w-[420px] sm:max-w-[480px] rounded-2xl overflow-hidden border border-[#A855F7]/30 bg-black/60 shadow-[0_0_50px_rgba(168,85,247,0.3)]"
            >
              <video
                src="/intro-video.mp4"
                autoPlay
                muted
                playsInline
                loop
                preload="auto"
                className="w-full h-auto object-cover rounded-2xl"
              />
            </motion.div>

            {/* Welcome Tag */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.2 rounded-full border border-[#A855F7]/35 bg-[#A855F7]/10 text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest text-[#A855F7] mb-3 shadow-[0_0_18px_rgba(168,85,247,0.25)] backdrop-blur-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#A855F7]" />
              <span>CENTRAL INDIA WELCOMES YOU</span>
            </motion.div>

            {/* Summit Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight uppercase"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: '0.02em' }}
            >
              AWS STUDENT COMMUNITY DAY <span style={{ color: '#A855F7' }}>2026</span>
            </motion.h1>

            {/* Sub-label */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xs sm:text-sm text-slate-300 font-medium mt-1.5 mb-7 max-w-md"
            >
              Rungta International Skills University · Bhilai, Chhattisgarh
            </motion.p>

            {/* Animated Loading Bar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.45 }}
              className="w-52 sm:w-64 h-1.5 rounded-full bg-white/10 overflow-hidden border border-white/10 shadow-inner"
            >
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 3.0, ease: 'easeInOut' }}
                className="h-full rounded-full"
                style={{
                  background:
                    'linear-gradient(90deg, #30206B 0%, #A855F7 60%, #C084FC 100%)',
                  boxShadow: '0 0 12px rgba(168, 85, 247, 0.85)',
                }}
              />
            </motion.div>

            {/* Tap or wait hint */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-[10px] font-mono text-slate-400 mt-2.5 tracking-wider uppercase"
            >
              Opening summit experience · Click anywhere to enter
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
