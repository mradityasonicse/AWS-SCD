import React from 'react';
import { ArrowRight, MapPin, Calendar, Users, Trophy } from 'lucide-react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import { CountdownTimer } from './CountdownTimer';

export const Hero: React.FC = () => {

  const handleConfetti = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 50,
      spread: 60,
      origin: { x, y },
      colors: ['#FF9900', '#FFAC33', '#00A4E4', '#38BDF8', '#FFD814'],
      ticks: 200,
      gravity: 1.2,
      scalar: 0.9,
    });
  };

  return (
    <section className="relative min-h-screen pt-36 pb-20 flex flex-col justify-center items-center text-center overflow-hidden px-4">
      {/* Architectural Grid Background (Zero AI Slop) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Subtle architectural grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:48px_48px] opacity-40" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        {/* University Host Banner with Live Status */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center justify-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full border text-[11px] sm:text-xs font-semibold tracking-wide uppercase mb-6 max-w-full text-center flex-wrap"
          style={{
            backgroundColor: 'color-mix(in srgb, var(--theme-accent, #AD5CFF) 10%, transparent)',
            borderColor: 'color-mix(in srgb, var(--theme-accent, #AD5CFF) 30%, transparent)',
            color: 'var(--theme-accent, #AD5CFF)',
          }}
        >
          <img
            src="/risu-logo.png"
            alt="RISU"
            className="w-4 h-4 sm:w-5 sm:h-5 object-contain rounded-full bg-[#161E2D] p-0.5 border border-[#232F3E] shrink-0"
          />
          <span
            className="w-2 h-2 rounded-full shrink-0"
            style={{ backgroundColor: 'var(--theme-accent, #AD5CFF)' }}
          />
          <span className="flex items-center gap-1.5 flex-wrap justify-center font-mono">
            <strong>RUNGTA INTERNATIONAL SKILLS UNIVERSITY</strong> · HOSTED BY AWS SBG RISU
          </span>
        </motion.div>

        {/* Grand Authoritative Summit Title (Disciplined Typography) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-6 select-none"
        >
          <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
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
          <div className="flex items-center justify-center gap-2 sm:gap-3 mt-3 text-slate-400 font-mono text-xs sm:text-sm font-semibold tracking-wider uppercase">
            <span style={{ color: 'var(--theme-accent, #AD5CFF)' }}>[ 2026 ]</span>
            <span>CENTRAL INDIA</span>
            <span className="text-slate-600">·</span>
            <span>BHILAI EDITION</span>
          </div>
        </motion.div>

        {/* Narrative Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl text-slate-300 text-sm sm:text-base md:text-lg font-normal leading-relaxed mb-8 text-balance px-2 sm:px-0"
        >
          One day. One stage. The ultimate student-driven AWS cloud gathering in Central India.
          Keynotes from <strong className="text-white">AWS DevRel leadership</strong> and <strong className="text-white">Amazon leaders</strong>, hands-on GenAI clinics with Amazon Bedrock, and <strong className="text-white">500+ builders</strong> charting tomorrow's cloud computing future.
        </motion.p>

        {/* Quick Facts Strip (Clean, Solid, No Heavy Blur) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#131921] border border-[#232F3E] rounded-xl p-2.5 sm:p-3 mb-8 sm:mb-10 grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-2 sm:gap-6 shadow-sm w-full sm:w-auto"
        >
          <div className="flex items-center gap-2 px-2.5 py-1.5">
            <Calendar className="w-4 h-4 text-[#FF9900] shrink-0" />
            <div className="text-left">
              <span className="text-[9px] sm:text-[10px] text-slate-400 uppercase tracking-widest block font-mono">Date</span>
              <span className="text-white font-bold text-xs sm:text-sm">21 Oct 2026</span>
            </div>
          </div>
          <div className="hidden sm:block w-px h-8 bg-[#232F3E]" />

          <div className="flex items-center gap-2 px-2.5 py-1.5">
            <Users className="w-4 h-4 text-[#FF9900] shrink-0" />
            <div className="text-left">
              <span className="text-[9px] sm:text-[10px] text-slate-400 uppercase tracking-widest block font-mono">Audience</span>
              <span className="text-white font-bold text-xs sm:text-sm">550+ Builders</span>
            </div>
          </div>
          <div className="hidden sm:block w-px h-8 bg-[#232F3E]" />

          <div className="flex items-center gap-2 px-2.5 py-1.5">
            <MapPin className="w-4 h-4 text-[#FF9900] shrink-0" />
            <div className="text-left">
              <span className="text-[9px] sm:text-[10px] text-slate-400 uppercase tracking-widest block font-mono">Host Campus</span>
              <span className="text-white font-bold text-xs sm:text-sm">RISU, Bhilai</span>
            </div>
          </div>
          <div className="hidden sm:block w-px h-8 bg-[#232F3E]" />

          <div className="flex items-center gap-2 px-2.5 py-1.5">
            <Trophy className="w-4 h-4 text-[#FFD814] shrink-0" />
            <div className="text-left">
              <span className="text-[9px] sm:text-[10px] text-slate-400 uppercase tracking-widest block font-mono">Contests</span>
              <span className="text-white font-bold text-xs sm:text-sm">Echo Dot &amp; Swags</span>
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

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0 mb-10 sm:mb-12"
        >
          <a
            href="#agenda"
            onClick={handleConfetti}
            className="group px-7 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base font-black flex items-center justify-center gap-2.5 rounded-full text-[#0B0F17] hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer select-none"
            style={{
              backgroundColor: 'var(--theme-accent, #AD5CFF)',
              boxShadow: '0 12px 36px var(--theme-accent-glow, rgba(140,82,255,0.35))',
            }}
          >
            <span>Explore Summit Agenda</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#venue"
            className="group bg-[#161E2D] hover:bg-[#1C273B] active:bg-[#131921] text-white border border-[#232F3E] font-bold text-sm sm:text-base px-6 py-3.5 sm:px-7 sm:py-4 rounded-full transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2.5 shadow-md cursor-pointer select-none"
          >
            <MapPin
              className="w-5 h-5 group-hover:scale-105 transition-transform shrink-0 stroke-[2]"
              style={{ color: 'var(--theme-accent, #AD5CFF)' }}
            />
            <span className="tracking-wide">Campus &amp; Venue Details</span>
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
