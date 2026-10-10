import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, MapPin, Calendar, Users, Trophy } from 'lucide-react';

interface HeroProps {
  onRegisterClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRegisterClick }) => {
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
        <div className="aurora a1 w-[560px] h-[560px] bg-gradient-to-tr from-[#ff9900]/25 to-transparent rounded-full blur-[100px] -top-32 left-[10%] animate-aurora-a" />
        <div className="aurora a2 w-[500px] h-[500px] bg-gradient-to-bl from-[#ffb84d]/20 to-transparent rounded-full blur-[110px] -bottom-24 right-[10%] animate-aurora-b" />
        <div className="aurora a3 w-[420px] h-[420px] bg-gradient-to-r from-[#a855f7]/15 to-transparent rounded-full blur-[100px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-aurora-c" />
        
        {/* Subtle grid mesh overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_45%,#000_20%,transparent_80%)]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#ff9900]/10 border border-[#ff9900]/30 text-[#ffb84d] text-xs font-bold tracking-wider uppercase mb-8 shadow-[0_0_20px_rgba(255,153,0,0.15)] animate-in fade-in slide-in-from-top-4 duration-700">
          <img src="/risu-logo.png" alt="RISU" className="w-5 h-5 object-contain rounded-full bg-white/20 p-0.5 shrink-0" />
          <span className="w-2 h-2 rounded-full bg-[#ff9900] shadow-[0_0_8px_#ff9900] animate-ping" />
          <span className="flex items-center gap-1.5">
            <strong>RUNGTA INTERNATIONAL SKILLS UNIVERSITY</strong> · HOSTED BY AWS SBG RISU
          </span>
        </div>

        {/* Grand Typography with Instrument Serif Italics */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight text-white leading-[0.92] mb-8">
          <span className="block font-heading">Student</span>
          <span className="block font-serif italic font-normal text-[#ffb84d] tracking-normal my-1">
            Community
          </span>
          <span className="block font-heading bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
            Day 2026
          </span>
          <span className="block font-serif italic text-3xl sm:text-5xl md:text-6xl text-slate-300 font-normal tracking-wide mt-2">
            Central India · Bhilai
          </span>
        </h1>

        {/* Narrative Subtitle */}
        <p className="max-w-2xl text-slate-300 text-base sm:text-lg md:text-xl font-normal leading-relaxed mb-10 text-balance">
          One day. One stage. The ultimate student-driven AWS cloud gathering in Central India.
          Keynotes from <strong className="text-white">AWS DevRel leadership</strong> and <strong className="text-white">Amazon leaders</strong>, hands-on GenAI clinics with Amazon Bedrock, and <strong className="text-[#ff9900]">500+ builders</strong> charting tomorrow's cloud computing future.
        </p>

        {/* Quick Facts Strip */}
        <div className="backdrop-blur-xl bg-[#10172a]/70 border border-white/10 rounded-2xl p-2 sm:p-3 mb-10 flex flex-wrap items-center justify-center gap-3 sm:gap-6 shadow-2xl">
          <div className="flex items-center gap-2 px-3 py-1.5">
            <Calendar className="w-4 h-4 text-[#ff9900]" />
            <div className="text-left">
              <span className="text-[10px] text-slate-400 uppercase tracking-widest block font-mono">Date</span>
              <span className="text-white font-bold text-sm">26 Oct 2026</span>
            </div>
          </div>
          <div className="hidden sm:block w-px h-8 bg-white/10" />

          <div className="flex items-center gap-2 px-3 py-1.5">
            <Users className="w-4 h-4 text-[#ff9900]" />
            <div className="text-left">
              <span className="text-[10px] text-slate-400 uppercase tracking-widest block font-mono">Audience</span>
              <span className="text-white font-bold text-sm">550+ Builders</span>
            </div>
          </div>
          <div className="hidden sm:block w-px h-8 bg-white/10" />

          <div className="flex items-center gap-2 px-3 py-1.5">
            <MapPin className="w-4 h-4 text-[#ff9900]" />
            <div className="text-left">
              <span className="text-[10px] text-slate-400 uppercase tracking-widest block font-mono">Host Campus</span>
              <span className="text-white font-bold text-sm">RISU, Bhilai</span>
            </div>
          </div>
          <div className="hidden sm:block w-px h-8 bg-white/10" />

          <div className="flex items-center gap-2 px-3 py-1.5">
            <Trophy className="w-4 h-4 text-[#ff9900]" />
            <div className="text-left">
              <span className="text-[10px] text-slate-400 uppercase tracking-widest block font-mono">Contests</span>
              <span className="text-white font-bold text-sm">Echo Dot &amp; Swags</span>
            </div>
          </div>
        </div>

        {/* Dynamic Countdown Box */}
        <div className="backdrop-blur-xl bg-gradient-to-b from-[#141c2c]/90 to-[#0c1220]/95 border border-[#ff9900]/30 rounded-2xl px-6 py-5 sm:px-10 sm:py-6 shadow-[0_20px_60px_rgba(0,0,0,0.8),inset_0_1px_rgba(255,255,255,0.1)] mb-10 flex items-center justify-center gap-3 sm:gap-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#ff9900] to-transparent" />
          
          <div className="flex flex-col items-center min-w-[56px] sm:min-w-[70px]">
            <span className="text-3xl sm:text-5xl font-black font-mono tracking-tight bg-gradient-to-b from-white to-[#ffb84d] bg-clip-text text-transparent">
              {String(timeLeft.days).padStart(2, '0')}
            </span>
            <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Days</span>
          </div>

          <span className="text-2xl sm:text-4xl font-light text-[#ff9900]/60 -mt-2 animate-pulse">:</span>

          <div className="flex flex-col items-center min-w-[56px] sm:min-w-[70px]">
            <span className="text-3xl sm:text-5xl font-black font-mono tracking-tight bg-gradient-to-b from-white to-[#ffb84d] bg-clip-text text-transparent">
              {String(timeLeft.hours).padStart(2, '0')}
            </span>
            <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Hours</span>
          </div>

          <span className="text-2xl sm:text-4xl font-light text-[#ff9900]/60 -mt-2 animate-pulse">:</span>

          <div className="flex flex-col items-center min-w-[56px] sm:min-w-[70px]">
            <span className="text-3xl sm:text-5xl font-black font-mono tracking-tight bg-gradient-to-b from-white to-[#ffb84d] bg-clip-text text-transparent">
              {String(timeLeft.minutes).padStart(2, '0')}
            </span>
            <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Minutes</span>
          </div>

          <span className="text-2xl sm:text-4xl font-light text-[#ff9900]/60 -mt-2 animate-pulse">:</span>

          <div className="flex flex-col items-center min-w-[56px] sm:min-w-[70px]">
            <span className="text-3xl sm:text-5xl font-black font-mono tracking-tight bg-gradient-to-b from-[#ff9900] to-[#ff7a00] bg-clip-text text-transparent">
              {String(timeLeft.seconds).padStart(2, '0')}
            </span>
            <span className="text-[10px] sm:text-xs font-bold text-[#ffb84d] uppercase tracking-widest mt-1">Seconds</span>
          </div>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <button
            onClick={onRegisterClick}
            className="cursor-pointer group bg-gradient-to-r from-[#ff9900] via-[#ffb84d] to-[#ff7a00] hover:from-[#ffb84d] hover:to-[#ff9900] text-black font-black text-sm sm:text-base px-8 py-4 rounded-full transition-all duration-300 shadow-[0_12px_40px_rgba(255,153,0,0.45)] hover:shadow-[0_16px_50px_rgba(255,153,0,0.65)] hover:-translate-y-1 flex items-center gap-2.5"
          >
            <span>Claim Your Ticket · ₹259</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="#badge"
            className="group backdrop-blur-md bg-white/5 hover:bg-white/10 text-white border border-white/15 hover:border-[#ff9900]/50 font-bold text-sm sm:text-base px-7 py-4 rounded-full transition-all duration-300 hover:-translate-y-1 flex items-center gap-2.5"
          >
            <Sparkles className="w-5 h-5 text-[#ffb84d] group-hover:rotate-12 transition-transform" />
            <span>Generate Attendee Badge</span>
          </a>
        </div>

        {/* Scroll cue */}
        <div className="flex flex-col items-center gap-2 text-slate-500 text-[10px] uppercase tracking-[0.25em]">
          <span>Explore The Summit</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-slate-500 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
};
