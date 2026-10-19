import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Terminal } from 'lucide-react';

interface NamasteSplashScreenProps {
  onFinish?: () => void;
}

export const NamasteSplashScreen: React.FC<NamasteSplashScreenProps> = ({ onFinish }) => {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(12);
  const [handConnected, setHandConnected] = useState(false);
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

    // Smooth telemetry progress interpolation
    const start = performance.now();
    const duration = 3400; // Total intro duration (3.4 seconds)

    const progressInterval = setInterval(() => {
      const elapsed = performance.now() - start;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);

      if (elapsed >= 1200 && !handConnected) {
        setHandConnected(true);
      }

      if (elapsed >= duration) {
        clearInterval(progressInterval);
        handleDismiss();
      }
    }, 40);

    // Keyboard navigation (Escape / Space / Enter skips splash immediately)
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === ' ' || e.key === 'Enter') {
        handleDismiss();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearInterval(progressInterval);
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [handleDismiss, handConnected]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="intro-splash-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[99999] flex flex-col justify-between p-4 sm:p-8 md:p-12 select-none bg-[#05030A] text-white cursor-pointer overflow-hidden"
          onClick={handleDismiss}
        >
          {/* Subtle Precision Architectural Blueprint Grid (3% Opacity, Zero AI Blob Slop) */}
          <div
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />

          {/* Vignette Depth Mask */}
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_30%,#05030A_95%)]" />

          {/* ==================================================================== */}
          {/* TOP HUD: SYSTEM TELEMETRY & SKIP ACTION */}
          {/* ==================================================================== */}
          <div className="relative z-20 flex items-center justify-between w-full">
            <div className="flex items-center gap-3">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <div className="flex items-center gap-2 font-mono text-[10px] sm:text-xs text-slate-400 tracking-wider uppercase">
                <span className="text-white font-bold">AWS-SCD-2026</span>
                <span className="text-slate-600">/</span>
                <span>CENTRAL INDIA NODE</span>
              </div>
            </div>

            {/* Senior-grade Skip Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleDismiss();
              }}
              className="group flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-mono tracking-wider text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 hover:border-white/25 backdrop-blur-xl transition-all cursor-pointer shadow-lg active:scale-95"
              aria-label="Skip introduction"
            >
              <span className="text-slate-400 group-hover:text-slate-200">[ESC]</span>
              <span>SKIP</span>
              <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* ==================================================================== */}
          {/* CENTER STAGE: DIGITAL HANDS TOUCHING -> PARTNERSHIP REVEAL */}
          {/* ==================================================================== */}
          <div className="relative z-10 flex-1 flex flex-col items-center justify-center my-auto w-full max-w-4xl mx-auto">
            {/* Precision Viewport Frame with Reticle Marks */}
            <div className="relative w-full max-w-2xl flex flex-col items-center">
              {/* Corner Reticle Plus Signs (+) */}
              <span className="absolute -top-3 -left-3 font-mono text-xs text-white/30 pointer-events-none select-none">+</span>
              <span className="absolute -top-3 -right-3 font-mono text-xs text-white/30 pointer-events-none select-none">+</span>
              <span className="absolute -bottom-3 -left-3 font-mono text-xs text-white/30 pointer-events-none select-none">+</span>
              <span className="absolute -bottom-3 -right-3 font-mono text-xs text-white/30 pointer-events-none select-none">+</span>

              {/* Digital Hands Connection Video (Only Hands, Zero Human Body) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-[560px] aspect-[16/9] flex items-center justify-center overflow-hidden rounded-2xl bg-black border border-white/10 shadow-[0_0_60px_rgba(0,0,0,0.8)]"
              >
                <video
                  ref={videoRef}
                  src="/hands-only.mp4"
                  autoPlay
                  muted
                  playsInline
                  preload="auto"
                  onTimeUpdate={(e) => {
                    const ct = (e.target as HTMLVideoElement).currentTime;
                    if (ct >= 1.1 && !handConnected) {
                      setHandConnected(true);
                    }
                  }}
                  className="w-full h-full object-contain bg-black"
                />

                {/* Subtle Edge Vignette Blend */}
                <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_45%,#000000_90%)]" />

                {/* Micro-connection flash when fingertips meet */}
                {handConnected && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: [0, 0.7, 0], scale: [0.8, 1.4, 1.6] }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"
                  />
                )}
              </motion.div>

              {/* Seamless Partnership Brand Reveal (Smooth Glide Under Hands) */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{
                  opacity: handConnected ? 1 : 0.4,
                  y: handConnected ? 0 : 8,
                }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="mt-6 flex flex-col items-center text-center px-4"
              >
                <img
                  src="/aws-x-rungta-splash.png"
                  alt="AWS x Rungta International Skills University"
                  className="h-10 sm:h-12 md:h-14 w-auto object-contain filter drop-shadow-[0_4px_24px_rgba(255,255,255,0.12)]"
                />

                <div className="mt-3 flex items-center gap-2 font-mono text-[10px] sm:text-xs text-slate-400 tracking-[0.22em] uppercase">
                  <span>CENTRAL INDIA CLOUD SUMMIT</span>
                  <span className="text-slate-600">·</span>
                  <span className="text-[#FF9900] font-bold">21 OCT 2026</span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* ==================================================================== */}
          {/* BOTTOM HUD: TELEMETRY & PRECISION PROGRESS BAR */}
          {/* ==================================================================== */}
          <div className="relative z-20 w-full max-w-4xl mx-auto">
            <div className="flex items-center justify-between text-[10px] sm:text-xs font-mono text-slate-400 mb-2.5">
              <div className="flex items-center gap-2">
                <Terminal className="w-3 h-3 text-[#A855F7]" />
                <span className="tracking-wider">
                  {progress < 45
                    ? 'INITIALIZING CLOUD RUNTIME...'
                    : progress < 85
                    ? 'CONNECTING STUDENT BUILDER CLUSTER...'
                    : 'SUMMIT EXPERIENCE READY'}
                </span>
              </div>
              <span className="font-bold text-slate-200">{progress}%</span>
            </div>

            {/* Hairline High-Precision Progress Bar */}
            <div className="w-full h-1 rounded-full bg-white/10 overflow-hidden relative">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-[#A855F7] via-[#42B4FF] to-[#00E582]"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>

            {/* Footer Location Coordinates */}
            <div className="mt-3 flex items-center justify-between text-[9px] sm:text-[10px] font-mono text-slate-500 uppercase tracking-widest">
              <span>BHILAI, CHHATTISGARH · 21.2185° N, 81.3820° E</span>
              <span>TAP ANYWHERE TO ENTER</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NamasteSplashScreen;
