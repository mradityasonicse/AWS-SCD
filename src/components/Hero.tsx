import React, { useState, useEffect } from 'react';
import { ArrowRight, MapPin, Calendar, Users, Trophy } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { CloudTerminal } from './CloudTerminal';

export const Hero: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 16,
    hours: 12,
    minutes: 44,
    seconds: 32,
  });

  useEffect(() => {
    // Dynamic countdown target 16 days ahead
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 16);
    targetDate.setHours(targetDate.getHours() + 12);

    const updateTimer = () => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

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
      {/* Aurora glowing background gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="aurora a1 w-[560px] h-[560px] bg-gradient-to-tr from-[#FF9900]/12 to-transparent rounded-full blur-[120px] -top-32 left-[10%] animate-aurora-a" />
        <div className="aurora a2 w-[500px] h-[500px] bg-gradient-to-bl from-[#00A4E4]/10 to-transparent rounded-full blur-[130px] -bottom-24 right-[10%] animate-aurora-b" />
        <div className="aurora a3 w-[420px] h-[420px] bg-gradient-to-r from-[#FFD814]/06 to-transparent rounded-full blur-[120px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-aurora-c" />

        {/* Subtle grid mesh overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#232f3e_1px,transparent_1px),linear-gradient(to_bottom,#232f3e_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_45%,#000_20%,transparent_80%)] opacity-30" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        {/* University Host Banner with Live Beacon */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-[#FF9900]/10 border border-[#FF9900]/30 text-[#FF9900] text-[11px] sm:text-xs font-bold tracking-wider uppercase mb-8 max-w-full text-center flex-wrap shadow-[0_0_20px_rgba(255,153,0,0.15)]"
        >
          <img
            src="/risu-logo.png"
            alt="RISU"
            className="w-4 h-4 sm:w-5 sm:h-5 object-contain rounded-full bg-[#161E2D] p-0.5 border border-[#232F3E] shrink-0 shadow-xs"
          />
          <span className="relative flex h-2 w-2 items-center justify-center">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF9900] opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#FF9900]" />
          </span>
          <span className="flex items-center gap-1.5 flex-wrap justify-center font-mono">
            <strong>RUNGTA INTERNATIONAL SKILLS UNIVERSITY</strong> · HOSTED BY AWS SBG RISU
          </span>
        </motion.div>

        {/* Grand Authoritative Summit Title (Clean, Powerful, Zero AI Slop) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-6 select-none"
        >
          <h1 className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight text-white leading-[1.02]">
            <span className="block text-white">AWS STUDENT</span>
            <span className="block bg-gradient-to-r from-[#FF9900] via-[#FFAC33] to-[#EC7211] bg-clip-text text-transparent">
              COMMUNITY DAY
            </span>
          </h1>
          <div className="flex items-center justify-center gap-2 sm:gap-3 mt-3 sm:mt-4 text-slate-400 font-mono text-xs sm:text-lg font-bold tracking-widest uppercase">
            <span className="text-[#FF9900]">[ 2026 ]</span>
            <span>CENTRAL INDIA</span>
            <span className="text-[#FF9900]">·</span>
            <span>BHILAI EDITION</span>
          </div>
        </motion.div>

        {/* Narrative Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl text-slate-300 text-sm sm:text-lg md:text-xl font-normal leading-relaxed mb-8 sm:mb-10 text-balance px-2 sm:px-0"
        >
          One day. One stage. The ultimate student-driven AWS cloud gathering in Central India.
          Keynotes from <strong className="text-white">AWS DevRel leadership</strong> and <strong className="text-white">Amazon leaders</strong>, hands-on GenAI clinics with Amazon Bedrock, and <strong className="text-[#FF9900]">500+ builders</strong> charting tomorrow's cloud computing future.
        </motion.p>

        {/* Quick Facts Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="backdrop-blur-xl bg-[#131921]/90 border border-[#232F3E] rounded-2xl p-2.5 sm:p-3 mb-8 sm:mb-10 grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-2 sm:gap-6 shadow-[0_10px_35px_rgba(0,0,0,0.5)] w-full sm:w-auto"
        >
          <div className="flex items-center gap-2 px-2.5 py-1.5">
            <Calendar className="w-4 h-4 text-[#FF9900] shrink-0" />
            <div className="text-left">
              <span className="text-[9px] sm:text-[10px] text-slate-400 uppercase tracking-widest block font-mono">Date</span>
              <span className="text-white font-bold text-xs sm:text-sm">26 Oct 2026</span>
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

        {/* Dynamic Countdown Box with Smooth Flip Digits */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="backdrop-blur-xl bg-[#131921]/95 border border-[#232F3E] rounded-2xl px-3.5 py-4 sm:px-10 sm:py-6 shadow-[0_20px_50px_rgba(0,0,0,0.6)] mb-8 sm:mb-10 flex items-center justify-center gap-1.5 xs:gap-3 sm:gap-6 relative overflow-hidden max-w-full"
        >
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#FF9900] to-transparent" />

          {/* Days */}
          <div className="flex flex-col items-center min-w-[46px] xs:min-w-[56px] sm:min-w-[70px]">
            <span className="text-2xl xs:text-3xl sm:text-5xl font-black font-mono tracking-tight text-white">
              {String(timeLeft.days).padStart(2, '0')}
            </span>
            <span className="text-[9px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Days</span>
          </div>

          <span className="text-xl xs:text-2xl sm:text-4xl font-light text-[#FF9900]/60 -mt-1 sm:-mt-2 animate-pulse">:</span>

          {/* Hours */}
          <div className="flex flex-col items-center min-w-[46px] xs:min-w-[56px] sm:min-w-[70px]">
            <span className="text-2xl xs:text-3xl sm:text-5xl font-black font-mono tracking-tight text-white">
              {String(timeLeft.hours).padStart(2, '0')}
            </span>
            <span className="text-[9px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Hours</span>
          </div>

          <span className="text-xl xs:text-2xl sm:text-4xl font-light text-[#FF9900]/60 -mt-1 sm:-mt-2 animate-pulse">:</span>

          {/* Minutes */}
          <div className="flex flex-col items-center min-w-[46px] xs:min-w-[56px] sm:min-w-[70px]">
            <span className="text-2xl xs:text-3xl sm:text-5xl font-black font-mono tracking-tight text-white">
              {String(timeLeft.minutes).padStart(2, '0')}
            </span>
            <span className="text-[9px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Minutes</span>
          </div>

          <span className="text-xl xs:text-2xl sm:text-4xl font-light text-[#FF9900]/60 -mt-1 sm:-mt-2 animate-pulse">:</span>

          {/* Seconds with AnimatePresence pulse */}
          <div className="flex flex-col items-center min-w-[46px] xs:min-w-[56px] sm:min-w-[70px] relative overflow-hidden">
            <AnimatePresence mode="popLayout">
              <motion.span
                key={timeLeft.seconds}
                initial={{ y: 8, opacity: 0.6 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -8, opacity: 0.4 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="text-2xl xs:text-3xl sm:text-5xl font-black font-mono tracking-tight bg-gradient-to-b from-[#FF9900] to-[#EC7211] bg-clip-text text-transparent inline-block"
              >
                {String(timeLeft.seconds).padStart(2, '0')}
              </motion.span>
            </AnimatePresence>
            <span className="text-[9px] sm:text-xs font-bold text-[#FF9900] uppercase tracking-widest mt-1">Seconds</span>
          </div>
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
            className="group px-7 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base font-black flex items-center justify-center gap-2.5 rounded-full bg-[#FF9900] hover:bg-[#FFAC33] active:bg-[#E68A00] text-[#0B0F17] shadow-[0_12px_40px_rgba(255,153,0,0.35)] hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer select-none"
          >
            <span>Explore Summit Agenda</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#venue"
            className="group backdrop-blur-md bg-[#161E2D] hover:bg-[#1C273B] active:bg-[#131921] text-white border border-[#232F3E] hover:border-[#FF9900]/60 font-bold text-sm sm:text-base px-6 py-3.5 sm:px-7 sm:py-4 rounded-full transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2.5 shadow-md cursor-pointer select-none"
          >
            <MapPin className="w-5 h-5 text-[#FF9900] group-hover:scale-105 transition-transform shrink-0 stroke-[2]" />
            <span className="tracking-wide">Campus &amp; Venue Details</span>
          </a>
        </motion.div>

        {/* Real Interactive AWS Cloud Developer Terminal (Zero AI Slop) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="w-full mt-2 mb-12 px-2"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#FF9900] animate-pulse" />
            <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">
              Live CloudShell &amp; Developer CLI
            </span>
          </div>
          <CloudTerminal />
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.85 }}
          className="flex flex-col items-center gap-2 text-slate-500 text-[10px] uppercase tracking-[0.25em]"
        >
          <span>Explore The Summit</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-slate-500 to-transparent animate-pulse" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
