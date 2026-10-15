import React from 'react';
import { ArrowRight, MapPin, Calendar, Users, Sparkles, Ticket } from 'lucide-react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import { CountdownTimer } from './CountdownTimer';
import { EVENT_DETAILS } from '../data/eventData';

interface HeroProps {
  onOpenRegister?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  const handleConfetti = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 50,
      spread: 60,
      origin: { x, y },
      colors: ['#FF9900', '#42B4FF', '#FF57EA', '#00E582', '#AD5CFF'],
      ticks: 200,
      gravity: 1.2,
      scalar: 0.9,
    });
  };

  return (
    <section className="relative min-h-[calc(100vh-40px)] pt-44 sm:pt-48 lg:pt-52 pb-12 sm:pb-16 flex flex-col justify-start items-center text-center overflow-hidden px-4">
      {/* Architectural Grid Background (Zero AI Slop) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Subtle architectural grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:48px_48px] opacity-40" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center w-full">
        {/* University Host Banner with Live Status */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-1.5 rounded-full border text-[10px] sm:text-xs font-semibold tracking-wide uppercase mb-4 sm:mb-6 max-w-full text-center"
          style={{
            backgroundColor: 'color-mix(in srgb, var(--theme-accent, #AD5CFF) 10%, transparent)',
            borderColor: 'color-mix(in srgb, var(--theme-accent, #AD5CFF) 30%, transparent)',
            color: 'var(--theme-accent, #AD5CFF)',
          }}
        >
          <img
            src="/main-logo.svg"
            alt="Main Logo"
            className="w-4 h-4 sm:w-5 sm:h-5 object-contain rounded-lg bg-[#161E2D] p-0.5 border border-[#232F3E] shrink-0 drop-shadow-[0_0_6px_rgba(173,92,255,0.4)]"
          />
          <span
            className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full shrink-0"
            style={{ backgroundColor: 'var(--theme-accent, #AD5CFF)' }}
          />
          <span className="flex items-center gap-1.5 font-mono">
            <strong className="hidden sm:inline">RUNGTA INTERNATIONAL SKILLS UNIVERSITY</strong>
            <strong className="sm:hidden">RISU BHILAI</strong>
            <span className="text-slate-400">·</span>
            <span>HOSTED BY AWS SBG RISU</span>
          </span>
        </motion.div>

        {/* Grand Authoritative Summit Title (Poster Typography Scale) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-4 sm:mb-6 select-none"
        >
          <h1 className="poster-main-hook text-white">
            <span className="block text-white">AWS STUDENT</span>
            <span
              className="block"
              style={{
                color: 'var(--theme-accent, #AD5CFF)',
              }}
            >
              COMMUNITY DAY
            </span>
          </h1>
          <div className="poster-secondary-headline flex flex-wrap items-center justify-center gap-x-3 gap-y-1 mt-2 sm:mt-3 text-slate-300">
            <span className="whitespace-nowrap" style={{ color: 'var(--theme-accent, #AD5CFF)' }}>[ 2026 ]</span>
            <span className="whitespace-nowrap">CENTRAL INDIA</span>
            <span className="text-slate-600">·</span>
            <span className="whitespace-nowrap">BHILAI EDITION</span>
          </div>
        </motion.div>

        {/* Narrative Subheading & Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto text-center mb-6 sm:mb-8 px-2 sm:px-0"
        >
          <h2 className="poster-subheading text-white mb-3 text-balance">
            The Premier Student Cloud &amp; AI Summit in Central India.
          </h2>
          <p className="poster-description text-slate-300 max-w-2xl mx-auto text-balance font-normal">
            One day. One stage. Keynotes from <strong className="text-white font-semibold">AWS DevRel leadership</strong> and <strong className="text-white font-semibold">Amazon leaders</strong>, hands-on GenAI clinics with Amazon Bedrock, and <strong className="text-white font-semibold">500+ builders</strong> charting tomorrow's cloud computing future.
          </p>
        </motion.div>

        {/* Quick Facts Strip (IBM Plex Mono Date / Venue) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[var(--theme-surface,#1E1E1E)] border border-[var(--theme-border,#3E3E3E)] rounded-xl p-2 sm:p-2.5 mb-6 sm:mb-8 grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-2 sm:gap-5 shadow-sm w-full sm:w-auto"
        >
          <div className="flex items-center gap-2 px-2 py-1 sm:px-2.5 sm:py-1.5">
            <Calendar className="w-4 h-4 text-[#42B4FF] shrink-0" />
            <div className="text-left">
              <span className="text-[9px] sm:text-[10px] text-slate-400 uppercase tracking-widest block font-mono">Date</span>
              <span className="poster-date-venue text-white font-bold">21 Oct 2026</span>
            </div>
          </div>
          <div className="hidden sm:block w-px h-7 bg-[var(--theme-border,#3E3E3E)]" />

          <div className="flex items-center gap-2 px-2 py-1 sm:px-2.5 sm:py-1.5">
            <Users className="w-4 h-4 shrink-0" style={{ color: 'var(--theme-accent, #AD5CFF)' }} />
            <div className="text-left">
              <span className="text-[9px] sm:text-[10px] text-slate-400 uppercase tracking-widest block font-mono">Audience</span>
              <span className="poster-date-venue text-white font-bold">550+ Builders</span>
            </div>
          </div>
          <div className="hidden sm:block w-px h-7 bg-[var(--theme-border,#3E3E3E)]" />

          <div className="flex items-center gap-2 px-2 py-1 sm:px-2.5 sm:py-1.5">
            <MapPin className="w-4 h-4 text-[#00E582] shrink-0" />
            <div className="text-left">
              <span className="text-[9px] sm:text-[10px] text-slate-400 uppercase tracking-widest block font-mono">Host Campus</span>
              <span className="poster-date-venue text-white font-bold">RISU, Bhilai</span>
            </div>
          </div>
          <div className="hidden sm:block w-px h-7 bg-[var(--theme-border,#3E3E3E)]" />

          <div className="flex items-center gap-2 px-2 py-1 sm:px-2.5 sm:py-1.5">
            <Sparkles className="w-4 h-4 text-[#FF9900] shrink-0" />
            <div className="text-left">
              <span className="text-[9px] sm:text-[10px] text-slate-400 uppercase tracking-widest block font-mono">Builder Perks</span>
              <span className="poster-date-venue text-white font-bold">Swag Kits &amp; Badges</span>
            </div>
          </div>
        </motion.div>

        {/* Master Mechanical 3D Split-Flap Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="w-full flex justify-center"
        >
          <CountdownTimer />
        </motion.div>

        {/* Action CTAs (Inter Bold Scale) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0 mb-6 sm:mb-8"
        >
          <a
            href={EVENT_DETAILS.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleConfetti}
            className="group poster-cta-btn jitter-btn-base jitter-btn-register px-8 py-4 flex items-center justify-center gap-2.5 cursor-pointer select-none"
          >
            <Ticket className="w-5 h-5 text-white shrink-0 drop-shadow-sm" />
            <span className="tracking-wide">Claim Builder Pass</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform drop-shadow-sm" />
          </a>

          <a
            href="#agenda"
            className="group poster-cta-btn jitter-btn-base jitter-btn-dark px-7 py-4 flex items-center justify-center gap-2.5 cursor-pointer select-none"
          >
            <span className="tracking-wide">Explore Agenda</span>
          </a>

          <a
            href="#venue"
            className="group poster-cta-btn jitter-btn-base jitter-btn-ghost px-6 py-4 flex items-center justify-center gap-2 cursor-pointer select-none text-xs sm:text-sm font-semibold"
          >
            <MapPin
              className="w-4 h-4 group-hover:scale-105 transition-transform shrink-0 stroke-[2] text-[#AD5CFF]"
            />
            <span className="tracking-wide">RISU Venue</span>
          </a>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.85 }}
          className="flex flex-col items-center gap-2 text-slate-500 text-[10px] uppercase tracking-[0.25em]"
        >
          <span>Explore The Summit</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-slate-500 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
