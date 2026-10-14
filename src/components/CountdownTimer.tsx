import React, { useState, useEffect, useRef, useId } from 'react';
import { Calendar, Sparkles, Check, Download, Volume2, VolumeX, Share2, MapPin, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { EVENT_DETAILS } from '../data/eventData';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalMs: number;
  isExpired: boolean;
}

// ---------------------------------------------------------------------------
// Mechanical 3D Split-Flap Card Component
// ---------------------------------------------------------------------------
interface SplitFlapCardProps {
  value: number;
  label: string;
  isSeconds?: boolean;
}

const SplitFlapCard: React.FC<SplitFlapCardProps> = ({ value, label, isSeconds = false }) => {
  const formatted = String(Math.max(0, value)).padStart(2, '0');
  const [tens, ones] = formatted.split('');

  return (
    <div className="flex flex-col items-center">
      {/* Unit Chassis / Frame */}
      <div className="relative group">
        {/* Dual Flip Digit Housing */}
        <div className="relative flex items-center gap-1 sm:gap-1.5 p-1 sm:p-1.5 bg-[#090D14] border border-[#232F3E] rounded-xl sm:rounded-2xl">
          {/* Digit 1 (Tens) */}
          <SingleDigitTile digit={tens} isSeconds={isSeconds} />

          {/* Digit 2 (Ones) */}
          <SingleDigitTile digit={ones} isSeconds={isSeconds} />
        </div>
      </div>

      {/* Unit Label Pill */}
      <div className="mt-2.5 flex items-center gap-1.5">
        {isSeconds && (
          <span className="inline-flex rounded-full h-1.5 w-1.5 bg-[#FF9900]" />
        )}
        <span
          className={`text-[10px] sm:text-xs font-mono font-bold uppercase tracking-[0.18em] transition-colors ${
            isSeconds ? 'text-[#FF9900]' : 'text-slate-400'
          }`}
        >
          {label}
        </span>
      </div>
    </div>
  );
};

// ---------------------------------------------------------------------------
// Single Digit Flip Tile with authentic split-flap cut and 3D tumble
// ---------------------------------------------------------------------------
interface SingleDigitTileProps {
  digit: string;
  isSeconds?: boolean;
}

const SingleDigitTile: React.FC<SingleDigitTileProps> = ({ digit, isSeconds = false }) => {
  return (
    <div
      className="relative w-7 xs:w-9 sm:w-13 md:w-16 h-12 xs:h-14 sm:h-20 md:h-24 bg-[#111722] rounded-lg sm:rounded-xl overflow-hidden shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] border border-[#1E293B]"
      style={{ perspective: 600 }}
    >
      {/* Top Half Highlight Sheen */}
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/[0.08] to-transparent pointer-events-none z-20" />

      {/* Bottom Half Shadow */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent pointer-events-none z-20" />

      {/* Center Split Horizontal Groove & Notches */}
      <div className="absolute top-1/2 left-0 right-0 h-[1.5px] bg-[#070A0F] z-30 shadow-[0_1px_0_rgba(255,255,255,0.06)] -translate-y-1/2" />
      <div className="absolute top-1/2 left-0 w-1 h-1.5 bg-[#090D14] rounded-r-full -translate-y-1/2 z-30 border-r border-[#232F3E]" />
      <div className="absolute top-1/2 right-0 w-1 h-1.5 bg-[#090D14] rounded-l-full -translate-y-1/2 z-30 border-l border-[#232F3E]" />

      {/* Animated 3D Flip Digit */}
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={digit}
          initial={{ rotateX: 85, opacity: 0.2, filter: 'blur(1px)' }}
          animate={{ rotateX: 0, opacity: 1, filter: 'blur(0px)' }}
          exit={{ rotateX: -85, opacity: 0.1, filter: 'blur(1px)' }}
          transition={{
            duration: 0.32,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="w-full h-full flex items-center justify-center font-mono font-black select-none"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <span
            className={`text-2xl xs:text-3xl sm:text-4xl md:text-5xl tracking-tighter tabular-nums leading-none font-bold ${
              isSeconds ? 'text-[#FF9900]' : 'text-white'
            }`}
          >
            {digit}
          </span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

// ---------------------------------------------------------------------------
// Main CountdownTimer Component
// ---------------------------------------------------------------------------
export const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    totalMs: 0,
    isExpired: false,
  });

  const [soundEnabled, setSoundEnabled] = useState(false);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [copiedToast, setCopiedToast] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const prevSecondsRef = useRef<number>(-1);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownId = useId();

  // Target event date: 21 October 2026, 08:00 AM IST
  const targetDateStr = EVENT_DETAILS.isoDate || '2026-10-21T08:00:00+05:30';

  // Play synthesized crisp split-flap mechanical click tick
  const playMechanicalTick = () => {
    if (!soundEnabled) return;
    try {
      if (!audioCtxRef.current) {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioCtxRef.current = new AudioCtx();
      }
      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }

      const ctx = audioCtxRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(1400, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(320, ctx.currentTime + 0.035);

      gain.gain.setValueAtTime(0.045, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.035);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.04);
    } catch {
      // AudioContext not allowed or not supported; ignore gracefully
    }
  };

  useEffect(() => {
    const target = new Date(targetDateStr).getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const diff = target - now;

      if (diff <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          totalMs: 0,
          isExpired: true,
        });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      // Play tick sound when seconds change
      if (prevSecondsRef.current !== -1 && prevSecondsRef.current !== seconds) {
        playMechanicalTick();
      }
      prevSecondsRef.current = seconds;

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
        totalMs: diff,
        isExpired: false,
      });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDateStr, soundEnabled]);

  // Close calendar dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setCalendarOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Confetti celebration on badge click
  const triggerCelebration = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 65,
      spread: 70,
      origin: { x, y },
      colors: ['#FF9900', '#FFAC33', '#00A4E4', '#38BDF8', '#FFD814', '#FFFFFF'],
      ticks: 240,
      gravity: 1.1,
      scalar: 1,
    });
  };

  // Google Calendar URL
  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    'AWS Student Community Day 2026 · Central India'
  )}&dates=20261021T023000Z/20261021T120000Z&details=${encodeURIComponent(
    'AWS Student Community Day 2026 (RISU Bhilai Edition).\nKeynotes by Praful Bagai & Jessica Gilmore, Amazon Bedrock GenAI workshops, project showcases, and 500+ student builders.\nVenue: Rungta International Skills University (RISU), Bhilai.\nWebsite: https://aws-scd-risu.vercel.app'
  )}&location=${encodeURIComponent(
    'Rungta International Skills University, Bhilai, Chhattisgarh, India'
  )}`;

  // Download .ics Calendar File
  const handleDownloadIcs = () => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//AWS SBG RISU//AWS Student Community Day 2026//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      'UID:aws-scd-risu-2026-10-21@awssbg.org',
      'DTSTAMP:20261013T000000Z',
      'DTSTART:20261021T023000Z',
      'DTEND:20261021T120000Z',
      'SUMMARY:AWS Student Community Day 2026 · Central India',
      'DESCRIPTION:Flagship student AWS conference in Central India at Rungta International Skills University (RISU), Bhilai. Keynotes from AWS DevRel leadership and Amazon leaders, hands-on GenAI clinics, and 550+ builders.',
      'LOCATION:Rungta International Skills University (RISU), Bhilai, Chhattisgarh 490024',
      'URL:https://aws-scd-risu.vercel.app',
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'AWS-SCD-RISU-2026.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setCalendarOpen(false);
  };

  // Copy event share invitation
  const handleCopyInvite = async () => {
    const text = `🚀 Mark your calendar! AWS Student Community Day 2026 · Central India is happening on Wednesday, 21 October 2026 at RISU Bhilai. 550+ builders, AWS DevRel keynotes, GenAI workshops & prizes! Details: ${window.location.href}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopiedToast(true);
      setTimeout(() => setCopiedToast(false), 3000);
      setCalendarOpen(false);
    } catch {
      // ignore clipboard error
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto mb-10 select-none">
      {/* Technical Countdown Chassis */}
      <div className="relative rounded-2xl bg-[#0F141D] border border-[#232F3E] p-4 sm:p-7 md:p-8 shadow-xl">
        {/* Top Telemetry Strip */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pb-5 mb-6 border-b border-[#1E293B]">
          {/* Left: Live Status Beacon */}
          <div className="flex items-center gap-2.5">
            <span className="inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            <span className="font-mono text-[11px] sm:text-xs font-bold tracking-wider text-slate-300 uppercase flex items-center gap-1.5">
              <span style={{ color: 'var(--theme-accent, #AD5CFF)' }}>LIVE TELEMETRY</span>
              <span className="text-slate-600">/</span>
              <span>COUNTDOWN TO SUMMIT</span>
            </span>
          </div>

          {/* Right: Sound FX & Date Stamp Pill */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setSoundEnabled((prev) => !prev)}
              title={soundEnabled ? 'Mute mechanical tick' : 'Enable mechanical audio feedback'}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold transition-all border ${
                soundEnabled
                  ? 'bg-[#FF9900]/15 text-[#FF9900] border-[#FF9900]/40'
                  : 'bg-[#131921] text-slate-400 border-[#232F3E] hover:text-white'
              }`}
            >
                {soundEnabled ? (
                  <>
                    <Volume2 className="w-3.5 h-3.5 text-[#FF9900]" />
                    <span className="hidden xs:inline">AUDIO ON</span>
                  </>
                ) : (
                  <>
                    <VolumeX className="w-3.5 h-3.5 text-slate-500" />
                    <span className="hidden xs:inline">AUDIO OFF</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={triggerCelebration}
                title="Tap for builder burst"
                className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-[#FF9900]/10 hover:bg-[#FF9900]/20 text-[#FF9900] border border-[#FF9900]/30 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <Sparkles className="w-3 h-3 text-[#FFD814]" />
                <span className="hidden xs:inline">BURST</span>
              </button>
            </div>
          </div>

          {/* Centerpiece: Mechanical Split-Flap Countdown Units */}
          <div className="relative z-10 grid grid-cols-4 gap-2 xs:gap-3 sm:gap-6 md:gap-8 items-center justify-center my-2">
            {/* Days */}
            <SplitFlapCard value={timeLeft.days} label="Days" />

            {/* Hours */}
            <SplitFlapCard value={timeLeft.hours} label="Hours" />

            {/* Minutes */}
            <SplitFlapCard value={timeLeft.minutes} label="Minutes" />

            {/* Seconds (Pulsing highlight) */}
            <SplitFlapCard value={timeLeft.seconds} label="Seconds" isSeconds />
          </div>

          {/* Telemetry Progress Bar towards 21 October */}
          <div className="relative z-10 mt-6 sm:mt-7 pt-4 sm:pt-5 border-t border-[#1E293B]/70">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] sm:text-xs">
              {/* Event Schedule Info */}
              <div className="flex items-center gap-2 text-slate-300">
                <Calendar className="w-4 h-4 text-[#FF9900] shrink-0" />
                <span className="font-medium">
                  <strong className="text-white">Wednesday, 21 October 2026</strong> · 08:00 AM IST
                </span>
                <span className="hidden md:inline text-slate-600">|</span>
                <span className="hidden md:flex items-center gap-1 text-slate-400">
                  <MapPin className="w-3 h-3 text-[#00A4E4]" />
                  RISU Campus, Bhilai
                </span>
              </div>

              {/* Utility Dropdown: Add to Calendar & Reminders */}
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setCalendarOpen((prev) => !prev)}
                  className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF9900] hover:bg-[#FFAC33] active:scale-95 text-[#0B0F17] font-bold text-xs shadow-sm transition-all cursor-pointer"
                  aria-expanded={calendarOpen}
                  aria-controls={dropdownId}
                >
                  <Calendar className="w-3.5 h-3.5 stroke-[2.5]" />
                  <span>Add to Calendar</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${calendarOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Calendar Dropdown Menu */}
                <AnimatePresence>
                  {calendarOpen && (
                    <motion.div
                      id={dropdownId}
                      initial={{ opacity: 0, y: 8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 sm:right-0 bottom-full sm:bottom-auto sm:top-full mt-2 mb-2 sm:mb-0 w-64 bg-[#111723] border border-[#232F3E] rounded-2xl p-2 shadow-[0_16px_40px_rgba(0,0,0,0.9)] z-50 text-left"
                    >
                      <div className="px-3 py-1.5 border-b border-[#1E293B] mb-1">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block">
                          Reserve The Date
                        </span>
                        <span className="text-xs font-bold text-white">21 Oct 2026 · 08:00 IST</span>
                      </div>

                      {/* Google Calendar Link */}
                      <a
                        href={googleCalendarUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setCalendarOpen(false)}
                        className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-200 hover:text-white hover:bg-[#1A2332] transition-colors"
                      >
                        <Calendar className="w-4 h-4 text-[#FF9900]" />
                        <span>Google Calendar</span>
                      </a>

                      {/* Apple / Outlook .ics download */}
                      <button
                        type="button"
                        onClick={handleDownloadIcs}
                        className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-200 hover:text-white hover:bg-[#1A2332] transition-colors text-left cursor-pointer"
                      >
                        <Download className="w-4 h-4 text-[#00A4E4]" />
                        <span>Apple / Outlook (.ics)</span>
                      </button>

                      {/* Copy Share Invitation */}
                      <button
                        type="button"
                        onClick={handleCopyInvite}
                        className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-200 hover:text-white hover:bg-[#1A2332] transition-colors text-left cursor-pointer"
                      >
                        <Share2 className="w-4 h-4 text-[#FFD814]" />
                        <span>Copy Event Invite</span>
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

      {/* Copy Toast Notification */}
      <AnimatePresence>
        {copiedToast && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[200] bg-[#161E2D] border border-[#FF9900] text-white px-5 py-2.5 rounded-full text-xs font-bold shadow-[0_10px_30px_rgba(0,0,0,0.8)] flex items-center gap-2"
          >
            <Check className="w-4 h-4 text-[#FF9900]" />
            <span>Event invite &amp; date copied to clipboard!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CountdownTimer;
