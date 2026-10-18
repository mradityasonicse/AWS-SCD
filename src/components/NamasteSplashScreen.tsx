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

  // Full-screen Cinematic Sequence:
  // Phase 1: Video (0s to ~2.6s, digital ASCII hands connect)
  // Phase 2: Connection Image Splash (~2.6s to 4.5s)
  // Phase 3: Transition to website
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.body.style.overflow = 'hidden';

    const videoTimer = setTimeout(() => {
      setPhase('connection');
    }, 2600);

    const finishTimer = setTimeout(() => {
      handleDismiss();
    }, 4500);

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
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden select-none bg-black cursor-pointer"
          onClick={handleDismiss}
        >
          {/* Top-right Skip Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleDismiss();
            }}
            className="absolute top-6 right-6 z-30 flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-mono font-semibold text-slate-300 hover:text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all cursor-pointer shadow-2xl active:scale-95"
            aria-label="Skip introduction"
          >
            <span>Skip</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* PHASE 1: Full-screen Digital Creation Video */}
          <AnimatePresence mode="wait">
            {phase === 'video' ? (
              <motion.div
                key="video-phase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 w-full h-full flex items-center justify-center bg-black"
              >
                <video
                  ref={videoRef}
                  src="/intro-video.mp4"
                  autoPlay
                  muted
                  playsInline
                  preload="auto"
                  onEnded={() => setPhase('connection')}
                  className="w-full h-full object-cover sm:object-contain bg-black"
                />

                {/* Subtle Vignette Overlay */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black via-transparent to-black opacity-60" />

                {/* Bottom hint */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-[11px] font-mono text-slate-400 tracking-widest uppercase opacity-80 pointer-events-none">
                  Click anywhere to enter
                </div>
              </motion.div>
            ) : (
              /* PHASE 2: AWS x Rungta Collaboration Connection Splash */
              <motion.div
                key="connection-phase"
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.06 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 w-full h-full flex flex-col items-center justify-center p-6 bg-black"
              >
                {/* Luminous Glow behind Partnership Graphic */}
                <div
                  className="absolute w-[600px] h-[350px] rounded-full pointer-events-none blur-[90px] opacity-40 -z-10"
                  style={{
                    background: 'radial-gradient(ellipse at center, rgba(168, 85, 247, 0.6) 0%, rgba(48, 32, 107, 0.5) 45%, transparent 75%)',
                  }}
                />

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="max-w-3xl w-full flex items-center justify-center px-4"
                >
                  <img
                    src="/aws-x-rungta-splash.png"
                    alt="AWS x Rungta International Skills University"
                    className="max-w-full sm:max-w-2xl md:max-w-3xl max-h-[65vh] w-auto h-auto object-contain drop-shadow-[0_0_50px_rgba(168,85,247,0.35)]"
                  />
                </motion.div>

                {/* Bottom Subtitle / Tagline */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  className="mt-8 text-center"
                >
                  <p className="text-xs sm:text-sm font-mono tracking-[0.2em] text-[#CBD5E1] uppercase font-bold">
                    CENTRAL INDIA CLOUD SUMMIT · OCTOBER 21, 2026
                  </p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NamasteSplashScreen;
