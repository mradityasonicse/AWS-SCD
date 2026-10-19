import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface NamasteSplashScreenProps {
  onFinish?: () => void;
}

export const NamasteSplashScreen: React.FC<NamasteSplashScreenProps> = ({ onFinish }) => {
  const [visible, setVisible] = useState(true);
  const [phase, setPhase] = useState<'video' | 'connection'>('video');
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleDismiss = useCallback(() => {
    setVisible(false);
    document.body.style.overflow = '';
    window.scrollTo({ top: 0, behavior: 'instant' });
    if (onFinish) onFinish();
  }, [onFinish]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.body.style.overflow = 'hidden';

    // Phase 1: Video runs for ~2000ms (hands-only video length)
    const videoTimer = setTimeout(() => {
      setPhase('connection');
    }, 2050);

    // Phase 2: Connection photo splash runs for ~1600ms, then dissolves to website
    const finishTimer = setTimeout(() => {
      handleDismiss();
    }, 3700);

    // Keyboard controls for instant skip
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === ' ' || e.key === 'Enter') {
        handleDismiss();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(videoTimer);
      clearTimeout(finishTimer);
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [handleDismiss]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="intro-splash-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden select-none bg-black cursor-pointer"
          onClick={handleDismiss}
        >
          {/* Top-right Senior Engineer Minimalist Skip Action */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleDismiss();
            }}
            className="absolute top-6 right-6 z-40 flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium text-slate-300 hover:text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 backdrop-blur-xl transition-all cursor-pointer shadow-xl active:scale-95"
            aria-label="Skip introduction"
          >
            <span className="text-slate-400">[ESC]</span>
            <span>SKIP</span>
            <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-white" />
          </button>

          <AnimatePresence mode="wait">
            {phase === 'video' ? (
              /* ================================================================ */
              /* PHASE 1: FULL SCREEN HANDS-ONLY DIGITAL CONNECTION VIDEO         */
              /* (Zero human body, pure hands connecting, full screen immersion)  */
              /* ================================================================ */
              <motion.div
                key="phase-video"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="absolute inset-0 w-full h-full flex items-center justify-center bg-black"
              >
                <video
                  ref={videoRef}
                  src="/hands-only.mp4"
                  autoPlay
                  muted
                  playsInline
                  preload="auto"
                  onEnded={() => setPhase('connection')}
                  className="w-full h-full object-cover sm:object-contain bg-black"
                />

                {/* Subtle Cinematic Vignette */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/80 via-transparent to-black/80" />

                {/* Bottom hint */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-[10px] sm:text-[11px] font-mono text-slate-400 tracking-widest uppercase opacity-75 pointer-events-none">
                  TAP ANYWHERE TO ENTER
                </div>
              </motion.div>
            ) : (
              /* ================================================================ */
              /* PHASE 2: AWS X RUNGTA COLLABORATION CONNECTION PHOTO SPLASH      */
              /* (Clean, premium, senior-engineered, zero AI purple blob slop)    */
              /* ================================================================ */
              <motion.div
                key="phase-connection"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.04 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 w-full h-full flex flex-col items-center justify-center p-6 bg-black"
              >
                {/* Subtle Precision Grid Backdrop */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-15"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
                    backgroundSize: '48px 48px',
                  }}
                />

                {/* Clean Specular Radial Sheen (Crisp, not blurry blob slop) */}
                <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_0%,transparent_65%)]" />

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.05 }}
                  className="max-w-3xl w-full flex items-center justify-center px-4"
                >
                  <img
                    src="/aws-x-rungta-splash.png"
                    alt="AWS x Rungta International Skills University"
                    className="max-w-full sm:max-w-2xl md:max-w-3xl max-h-[62vh] w-auto h-auto object-contain filter drop-shadow-[0_8px_32px_rgba(255,255,255,0.12)]"
                  />
                </motion.div>

                {/* Subtitle */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="mt-8 text-center"
                >
                  <p className="text-xs sm:text-sm font-mono tracking-[0.25em] text-slate-300 uppercase font-semibold">
                    CENTRAL INDIA CLOUD SUMMIT · OCTOBER 21, 2026
                  </p>
                </motion.div>

                {/* Bottom Dismiss Hint */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-mono text-slate-500 tracking-widest uppercase pointer-events-none">
                  TAP ANYWHERE TO ENTER
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NamasteSplashScreen;
