import React, { useState, useEffect } from 'react';
import { ArrowRight, MapPin, Calendar, Users, Trophy } from 'lucide-react';
import Text3DFlip from '@/registry/magicui/text-3d-flip';

export const Hero: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 16,
    hours: 12,
    minutes: 44,
    seconds: 32
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

  return (
    <section className="relative min-h-screen pt-36 pb-20 flex flex-col justify-center items-center text-center overflow-hidden px-4">
      {/* Aurora glowing background gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="aurora a1 w-[560px] h-[560px] bg-gradient-to-tr from-[#D946EF]/15 to-transparent rounded-full blur-[100px] -top-32 left-[10%] animate-aurora-a" />
        <div className="aurora a2 w-[500px] h-[500px] bg-gradient-to-bl from-[#22D3EE]/15 to-transparent rounded-full blur-[110px] -bottom-24 right-[10%] animate-aurora-b" />
        <div className="aurora a3 w-[420px] h-[420px] bg-gradient-to-r from-[#FACC15]/10 to-transparent rounded-full blur-[100px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-aurora-c" />
        
        {/* Subtle grid mesh overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_45%,#000_20%,transparent_80%)] opacity-60" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        {/* University Host Banner - Clean & Static */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#D946EF]/10 border border-[#D946EF]/30 text-[#D946EF] text-xs font-bold tracking-wider uppercase mb-8">
          <img src="/risu-logo.png" alt="RISU" className="w-5 h-5 object-contain rounded-full bg-white p-0.5 shrink-0 shadow-xs" />
          <span className="flex items-center gap-1.5">
            <strong>RUNGTA INTERNATIONAL SKILLS UNIVERSITY</strong> · HOSTED BY AWS SBG RISU
          </span>
        </div>

        {/* Grand Typography with Instrument Serif Italics */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight text-[#171717] leading-[0.92] mb-8 flex flex-col items-center">
          <span className="block font-heading">
            <Text3DFlip
              className="justify-center font-heading"
              textClassName="font-heading text-[#171717]"
              flipTextClassName="font-heading text-[#D946EF]"
              rotateDirection="top"
              staggerDuration={0.03}
              transition={{ type: "spring", damping: 25, stiffness: 160 }}
            >
              Student
            </Text3DFlip>
          </span>
          <span className="block font-serif italic font-normal text-[#D946EF] tracking-normal my-1">
            <Text3DFlip
              className="justify-center font-serif italic font-normal"
              textClassName="font-serif italic font-normal text-[#D946EF]"
              flipTextClassName="font-serif italic font-normal text-[#22D3EE]"
              rotateDirection="top"
              staggerDuration={0.03}
              transition={{ type: "spring", damping: 25, stiffness: 160 }}
            >
              Community
            </Text3DFlip>
          </span>
          <span className="block font-heading">
            <Text3DFlip
              className="justify-center font-heading"
              textClassName="font-heading text-[#171717]"
              flipTextClassName="font-heading text-[#D946EF]"
              rotateDirection="top"
              staggerDuration={0.03}
              transition={{ type: "spring", damping: 25, stiffness: 160 }}
            >
              Day 2026
            </Text3DFlip>
          </span>
          <span className="block font-serif italic text-3xl sm:text-5xl md:text-6xl text-neutral-500 font-normal tracking-wide mt-2">
            <Text3DFlip
              className="justify-center font-serif italic"
              textClassName="font-serif italic text-neutral-500"
              flipTextClassName="font-serif italic text-[#D946EF]"
              rotateDirection="top"
              staggerDuration={0.02}
              transition={{ type: "spring", damping: 25, stiffness: 160 }}
            >
              Central India · Bhilai
            </Text3DFlip>
          </span>
        </h1>

        {/* Narrative Subtitle */}
        <p className="max-w-2xl text-neutral-600 text-base sm:text-lg md:text-xl font-normal leading-relaxed mb-10 text-balance">
          One day. One stage. The ultimate student-driven AWS cloud gathering in Central India.
          Keynotes from <strong className="text-neutral-900">AWS DevRel leadership</strong> and <strong className="text-neutral-900">Amazon leaders</strong>, hands-on GenAI clinics with Amazon Bedrock, and <strong className="text-[#D946EF]">500+ builders</strong> charting tomorrow's cloud computing future.
        </p>

        {/* Quick Facts Strip */}
        <div className="backdrop-blur-xl bg-white/90 border border-neutral-200/90 rounded-2xl p-2 sm:p-3 mb-10 flex flex-wrap items-center justify-center gap-3 sm:gap-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
          <div className="flex items-center gap-2 px-3 py-1.5">
            <Calendar className="w-4 h-4 text-[#D946EF]" />
            <div className="text-left">
              <span className="text-[10px] text-neutral-400 uppercase tracking-widest block font-mono">Date</span>
              <span className="text-[#171717] font-bold text-sm">26 Oct 2026</span>
            </div>
          </div>
          <div className="hidden sm:block w-px h-8 bg-neutral-200" />

          <div className="flex items-center gap-2 px-3 py-1.5">
            <Users className="w-4 h-4 text-[#D946EF]" />
            <div className="text-left">
              <span className="text-[10px] text-neutral-400 uppercase tracking-widest block font-mono">Audience</span>
              <span className="text-[#171717] font-bold text-sm">550+ Builders</span>
            </div>
          </div>
          <div className="hidden sm:block w-px h-8 bg-neutral-200" />

          <div className="flex items-center gap-2 px-3 py-1.5">
            <MapPin className="w-4 h-4 text-[#D946EF]" />
            <div className="text-left">
              <span className="text-[10px] text-neutral-400 uppercase tracking-widest block font-mono">Host Campus</span>
              <span className="text-[#171717] font-bold text-sm">RISU, Bhilai</span>
            </div>
          </div>
          <div className="hidden sm:block w-px h-8 bg-neutral-200" />

          <div className="flex items-center gap-2 px-3 py-1.5">
            <Trophy className="w-4 h-4 text-[#FACC15]" />
            <div className="text-left">
              <span className="text-[10px] text-neutral-400 uppercase tracking-widest block font-mono">Contests</span>
              <span className="text-[#171717] font-bold text-sm">Echo Dot &amp; Swags</span>
            </div>
          </div>
        </div>

        {/* Dynamic Countdown Box */}
        <div className="backdrop-blur-xl bg-white/95 border border-neutral-200 rounded-2xl px-6 py-5 sm:px-10 sm:py-6 shadow-[0_14px_32px_rgba(217,70,239,0.12)] mb-10 flex items-center justify-center gap-3 sm:gap-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D946EF] to-transparent" />
          
          <div className="flex flex-col items-center min-w-[56px] sm:min-w-[70px]">
            <span className="text-3xl sm:text-5xl font-black font-mono tracking-tight text-[#171717]">
              {String(timeLeft.days).padStart(2, '0')}
            </span>
            <span className="text-[10px] sm:text-xs font-bold text-neutral-400 uppercase tracking-widest mt-1">Days</span>
          </div>

          <span className="text-2xl sm:text-4xl font-light text-[#D946EF]/60 -mt-2 animate-pulse">:</span>

          <div className="flex flex-col items-center min-w-[56px] sm:min-w-[70px]">
            <span className="text-3xl sm:text-5xl font-black font-mono tracking-tight text-[#171717]">
              {String(timeLeft.hours).padStart(2, '0')}
            </span>
            <span className="text-[10px] sm:text-xs font-bold text-neutral-400 uppercase tracking-widest mt-1">Hours</span>
          </div>

          <span className="text-2xl sm:text-4xl font-light text-[#D946EF]/60 -mt-2 animate-pulse">:</span>

          <div className="flex flex-col items-center min-w-[56px] sm:min-w-[70px]">
            <span className="text-3xl sm:text-5xl font-black font-mono tracking-tight text-[#171717]">
              {String(timeLeft.minutes).padStart(2, '0')}
            </span>
            <span className="text-[10px] sm:text-xs font-bold text-neutral-400 uppercase tracking-widest mt-1">Minutes</span>
          </div>

          <span className="text-2xl sm:text-4xl font-light text-[#D946EF]/60 -mt-2 animate-pulse">:</span>

          <div className="flex flex-col items-center min-w-[56px] sm:min-w-[70px]">
            <span className="text-3xl sm:text-5xl font-black font-mono tracking-tight bg-gradient-to-b from-[#D946EF] to-[#C026D3] bg-clip-text text-transparent">
              {String(timeLeft.seconds).padStart(2, '0')}
            </span>
            <span className="text-[10px] sm:text-xs font-bold text-[#D946EF] uppercase tracking-widest mt-1">Seconds</span>
          </div>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a
            href="#agenda"
            className="group px-8 py-4 text-sm sm:text-base font-bold flex items-center gap-2.5 rounded-full bg-[#D946EF] hover:bg-[#C026D3] text-white shadow-[0_12px_40px_rgba(217,70,239,0.35)] hover:-translate-y-0.5 transition-all"
          >
            <span>Explore Summit Agenda</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#venue"
            className="group backdrop-blur-md bg-white hover:bg-neutral-50 text-neutral-800 border border-neutral-200 hover:border-[#D946EF]/50 font-bold text-sm sm:text-base px-7 py-4 rounded-full transition-all duration-300 hover:-translate-y-1 flex items-center gap-2.5 shadow-sm"
          >
            <MapPin className="w-5 h-5 text-[#D946EF] group-hover:scale-105 transition-transform shrink-0 stroke-[2]" />
            <span className="tracking-wide">Campus &amp; Venue Details</span>
          </a>
        </div>

        {/* Scroll cue */}
        <div className="flex flex-col items-center gap-2 text-neutral-400 text-[10px] uppercase tracking-[0.25em]">
          <span>Explore The Summit</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-neutral-400 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
};
