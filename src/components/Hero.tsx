import React from 'react';
import { ArrowRight, MapPin, Calendar, Users, Gift, Ticket } from 'lucide-react';
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
      colors: ['#FF9900', '#FFAC33', '#F8FAFC', '#232F3E', '#42B4FF'],
      ticks: 200,
      gravity: 1.2,
      scalar: 0.9,
    });
  };

  return (
    <section className="relative min-h-[calc(100vh-40px)] pt-44 sm:pt-48 lg:pt-52 pb-12 sm:pb-16 flex flex-col justify-start items-center text-center overflow-hidden px-4 bg-transparent">
      {/* Background & Grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Subtle grid with thin lines in #FFFFFF at 3% opacity */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />
        {/* Subtle understated warm amber specular glow behind the headline (zero purple slop) */}
        <div 
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85vw] max-w-[900px] h-[440px] rounded-full blur-[120px] pointer-events-none opacity-40"
          style={{ background: 'radial-gradient(ellipse at center, rgba(255, 153, 0, 0.18) 0%, rgba(255, 153, 0, 0.04) 45%, transparent 70%)' }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center w-full">

        {/* Main Summit Title in Barlow Condensed ExtraBold (800) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-4 sm:mb-6 select-none w-full"
        >
          <h1
            className="poster-main-hook text-center select-none w-full"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              lineHeight: 0.9,
            }}
          >
            <span className="block text-[#F8FAFC]">AWS STUDENT</span>
            <span className="block text-[#FF9900]">COMMUNITY DAY</span>
          </h1>

          {/* Edition line in Inter Bold (700), 20-24px, #CBD5E1 with [ 2026 ] in #FF9900 */}
          <div
            className="flex flex-wrap items-center justify-center gap-x-2.5 sm:gap-x-3 gap-y-1 mt-3 sm:mt-4 text-[#CBD5E1] font-bold text-[20px] sm:text-[22px] md:text-[24px] tracking-wide uppercase"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <span className="whitespace-nowrap text-[#FF9900]">[ 2026 ]</span>
            <span className="whitespace-nowrap">CENTRAL INDIA</span>
            <span className="text-[#64748B]">·</span>
            <span className="whitespace-nowrap">BHILAI EDITION</span>
          </div>
        </motion.div>

        {/* Description in Inter Medium (500), 18-20px, #F1F5F9 */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto text-center mb-6 sm:mb-8 px-4"
        >
          <p
            className="text-[18px] sm:text-[20px] font-medium leading-relaxed text-[#F1F5F9]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            The Premier Student Cloud &amp; AI Summit in Central India.
          </p>
        </motion.div>

        {/* Quick Facts Strip (Clean Titanium Glassmorphism) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-xl p-2 sm:p-2.5 mb-6 sm:mb-8 grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-2 sm:gap-5 shadow-2xl w-full sm:w-auto"
        >
          <div className="flex items-center gap-2 px-2 py-1 sm:px-2.5 sm:py-1.5">
            <Calendar className="w-4 h-4 text-[#FF9900] shrink-0" />
            <div className="text-left">
              <span className="text-[9px] sm:text-[10px] text-slate-400 uppercase tracking-widest block font-mono">Date</span>
              <span className="poster-date-venue text-[#F8FAFC] font-bold">21 Oct 2026</span>
            </div>
          </div>
          <div className="hidden sm:block w-px h-7 bg-white/10" />

          <div className="flex items-center gap-2 px-2 py-1 sm:px-2.5 sm:py-1.5">
            <Users className="w-4 h-4 text-[#FF9900] shrink-0" />
            <div className="text-left">
              <span className="text-[9px] sm:text-[10px] text-slate-400 uppercase tracking-widest block font-mono">Audience</span>
              <span className="poster-date-venue text-[#F8FAFC] font-bold">550+ Builders</span>
            </div>
          </div>
          <div className="hidden sm:block w-px h-7 bg-white/10" />

          <div className="flex items-center gap-2 px-2 py-1 sm:px-2.5 sm:py-1.5">
            <MapPin className="w-4 h-4 text-[#FF9900] shrink-0" />
            <div className="text-left">
              <span className="text-[9px] sm:text-[10px] text-slate-400 uppercase tracking-widest block font-mono">Host Campus</span>
              <span className="poster-date-venue text-[#F8FAFC] font-bold">Rungta International Skills University, Bhilai</span>
            </div>
          </div>
          <div className="hidden sm:block w-px h-7 bg-white/10" />

          <div className="flex items-center gap-2 px-2 py-1 sm:px-2.5 sm:py-1.5">
            <Gift className="w-4 h-4 text-[#FF9900] shrink-0" />
            <div className="text-left">
              <span className="text-[9px] sm:text-[10px] text-slate-400 uppercase tracking-widest block font-mono">Builder Perks</span>
              <span className="poster-date-venue text-[#F8FAFC] font-bold">Swag Kits &amp; Badges</span>
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
              className="w-4 h-4 group-hover:scale-105 transition-transform shrink-0 stroke-[2] text-[#FF9900]"
            />
            <span className="tracking-wide">Campus Venue</span>
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
