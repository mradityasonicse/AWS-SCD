import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useTheme, SECONDARY_COLORS, type SecondaryColorKey } from '../context/ThemeContext';
import { Palette, Check, X, Sliders } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export interface ThemeSwitcherProps {
  className?: string;
  showLabel?: boolean;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ className = '', showLabel = true }) => {
  const { secondaryColor, setSecondaryColor, bgMode, setBgMode, currentColorConfig } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  // Close modal when pressing Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <>
      {/* Trigger Button - Clean, technical, styled like AWS Developer Console badge */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 rounded-full bg-[#161E2D] hover:bg-[#1C2536] border border-[#232F3E] text-xs font-mono font-bold text-slate-300 hover:text-white transition-all duration-150 cursor-pointer shadow-sm group shrink-0 ${className}`}
        title="AWS Builder Theme Controls"
        aria-label="Theme settings"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
      >
        <span
          className="w-2.5 h-2.5 rounded-full transition-transform group-hover:scale-125 shrink-0"
          style={{ backgroundColor: currentColorConfig.hex }}
        />
        {showLabel && (
          <span className="hidden md:inline font-sans text-[11px] font-semibold text-slate-200">
            Theme:
          </span>
        )}
        <span className="text-[11px] font-bold hidden sm:inline" style={{ color: currentColorConfig.hex }}>
          {currentColorConfig.label.split(' ')[0]}
        </span>
        <Sliders className="w-3 h-3 text-slate-400 group-hover:text-white transition-colors shrink-0" />
      </button>

      {/* Floating Theme Customizer Panel rendered via Portal so position:fixed covers full viewport */}
      {typeof document !== 'undefined' &&
        createPortal(
          <AnimatePresence>
            {isOpen && (
              <div
                className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
                role="dialog"
                aria-modal="true"
                aria-labelledby="theme-customizer-title"
              >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-xs cursor-pointer"
              aria-hidden="true"
            />

            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-sm bg-[#0A0D14]/90 backdrop-blur-2xl border border-white/20 rounded-2xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.8)] text-white z-10 font-sans"
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center border border-white/15"
                    style={{ backgroundColor: currentColorConfig.hex + '20' }}
                  >
                    <Palette className="w-4 h-4" style={{ color: currentColorConfig.hex }} />
                  </div>
                  <div>
                    <h3 id="theme-customizer-title" className="font-bold text-sm tracking-tight">Theme Customizer</h3>
                    <p className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">
                      AWS Builder Group System
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--theme-accent,#AD5CFF)]"
                  aria-label="Close theme customizer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* 1. Background color section (Directly from Screenshot 1) */}
              <div className="mb-6">
                <label className="block text-xs font-bold text-slate-300 mb-3 tracking-wide">
                  Background color
                </label>
                <div className="flex items-center gap-3">
                  {/* Dark Mode Option */}
                  <button
                    type="button"
                    onClick={() => setBgMode('dark')}
                    className={`relative w-9 h-9 rounded-full bg-[#0A0D14] border-2 cursor-pointer transition-all flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--theme-accent,#AD5CFF)] ${
                      bgMode === 'dark'
                        ? 'border-white ring-2 ring-white/30 scale-105'
                        : 'border-[#383336] hover:border-slate-400'
                    }`}
                    title="Dark Background"
                    aria-label="Select dark background"
                    aria-pressed={bgMode === 'dark'}
                  >
                    {bgMode === 'dark' && <Check className="w-3.5 h-3.5 text-white stroke-[3]" />}
                  </button>

                  {/* Light Mode Option */}
                  <button
                    type="button"
                    onClick={() => setBgMode('light')}
                    className={`relative w-9 h-9 rounded-full bg-[#FFFFFF] border-2 cursor-pointer transition-all flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--theme-accent,#AD5CFF)] ${
                      bgMode === 'light'
                        ? 'border-[#AD5CFF] ring-2 ring-[#AD5CFF]/40 scale-105'
                        : 'border-slate-400 hover:border-white'
                    }`}
                    title="Light Background"
                    aria-label="Select light background"
                    aria-pressed={bgMode === 'light'}
                  >
                    {bgMode === 'light' && <Check className="w-3.5 h-3.5 text-[#0A0D14] stroke-[3]" />}
                  </button>
                </div>
              </div>

              {/* 2. Secondary color section (Directly from Screenshot 1) */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <label className="text-xs font-bold text-slate-300 tracking-wide">
                    Primary brand accent
                  </label>
                  <span
                    className="text-[11px] font-mono font-bold uppercase tracking-wider"
                    style={{ color: currentColorConfig.hex }}
                  >
                    {currentColorConfig.label}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  {(Object.keys(SECONDARY_COLORS) as SecondaryColorKey[]).map((key) => {
                    const color = SECONDARY_COLORS[key];
                    const isSelected = secondaryColor === key;

                    return (
                      <button
                        type="button"
                        key={key}
                        onClick={() => setSecondaryColor(key)}
                        className={`relative w-8 h-8 rounded-full cursor-pointer transition-all duration-150 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--theme-accent,#AD5CFF)] ${
                          isSelected
                            ? 'ring-3 ring-white ring-offset-2 ring-offset-[#131922] scale-110 shadow-lg'
                            : 'hover:scale-105 hover:opacity-90'
                        }`}
                        style={{ backgroundColor: color.hex }}
                        title={color.label}
                        aria-label={`Select ${color.label} accent color`}
                        aria-pressed={isSelected}
                      >
                        {isSelected && <Check className="w-3.5 h-3.5 text-white stroke-[3]" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Technical Spec Info Note */}
              <div className="p-3 rounded-xl bg-[#161E2D] border border-[#232F3E] text-[11px] font-mono text-slate-400 flex items-center justify-between">
                <span>Active Accent:</span>
                <span className="text-white font-bold">{currentColorConfig.hex}</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>,
      document.body
    )}
    </>
  );
};

export default ThemeSwitcher;
