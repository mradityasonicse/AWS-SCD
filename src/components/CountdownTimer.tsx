import React, { useState, useEffect, useRef, useId } from 'react';
import { Calendar, Check, Download, Share2, MapPin, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
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
// Colon Separator between Countdown Units
// ---------------------------------------------------------------------------
const ColonSeparator: React.FC = () => (
  <div
    className="h-11 xs:h-13 sm:h-18 md:h-22 lg:h-26 flex flex-col items-center justify-center gap-1.5 sm:gap-2.5 md:gap-3 px-0.5 sm:px-1 md:px-1.5 select-none"
    aria-hidden="true"
  >
    <span
      className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 rounded-full animate-pulse"
      style={{
        backgroundColor: 'var(--theme-accent, #AD5CFF)',
        boxShadow: '0 0 10px var(--theme-accent, #AD5CFF), 0 0 16px var(--theme-accent-glow, rgba(173, 92, 255, 0.6))',
      }}
    />
    <span
      className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 rounded-full animate-pulse"
      style={{
        backgroundColor: 'var(--theme-accent, #AD5CFF)',
        boxShadow: '0 0 10px var(--theme-accent, #AD5CFF), 0 0 16px var(--theme-accent-glow, rgba(173, 92, 255, 0.6))',
      }}
    />
  </div>
);

// ---------------------------------------------------------------------------
// Mechanical 3D Split-Flap Card Component (Elfsight Orange Retro Airport Theme)
// ---------------------------------------------------------------------------
interface SplitFlapCardProps {
  value: number;
  label: string;
}

const SplitFlapCard: React.FC<SplitFlapCardProps> = ({ value, label }) => {
  const formatted = String(Math.max(0, value)).padStart(2, '0');
  const [tens, ones] = formatted.split('');

  return (
    <div className="flex flex-col items-center">
      {/* Dual Flip Digit Housing */}
      <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2">
        {/* Digit 1 (Tens) */}
        <SingleDigitTile digit={tens} />

        {/* Digit 2 (Ones) */}
        <SingleDigitTile digit={ones} />
      </div>

      {/* Unit Label Pill */}
      <span
        className="mt-2 sm:mt-2.5 md:mt-3 text-[11px] xs:text-xs sm:text-sm md:text-base font-bold tracking-wider select-none"
        style={{
          color: 'var(--theme-accent, #AD5CFF)',
          textShadow: '0 0 14px var(--theme-accent-glow, rgba(173, 92, 255, 0.4))',
        }}
      >
        {label}
      </span>
    </div>
  );
};

// ---------------------------------------------------------------------------
// Single Digit Flip Tile with authentic split-flap cut and 3D tumble
// ---------------------------------------------------------------------------
interface SingleDigitTileProps {
  digit: string;
}

const SingleDigitTile: React.FC<SingleDigitTileProps> = ({ digit }) => {
  return (
    <div
      className="relative w-7 xs:w-8.5 sm:w-12 md:w-15 lg:w-18 h-11 xs:h-13 sm:h-18 md:h-22 lg:h-26 rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden border"
      style={{
        background:
          'linear-gradient(180deg, color-mix(in srgb, var(--theme-accent, #AD5CFF) 88%, white 12%) 0%, var(--theme-accent, #AD5CFF) 50%, color-mix(in srgb, var(--theme-accent, #AD5CFF) 75%, black 25%) 100%)',
        borderColor: 'color-mix(in srgb, var(--theme-accent, #AD5CFF) 65%, white 35%)',
        boxShadow:
          '0 10px 28px var(--theme-accent-glow, rgba(173, 92, 255, 0.4)), 0 2px 4px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.5)',
        perspective: 800,
      }}
    >
      {/* Top Half Highlight Sheen */}
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/28 via-white/10 to-transparent pointer-events-none z-20 rounded-t-lg sm:rounded-t-xl md:rounded-t-2xl" />

      {/* Bottom Half Shadow */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/28 via-black/10 to-transparent pointer-events-none z-20 rounded-b-lg sm:rounded-b-xl md:rounded-b-2xl" />

      {/* Center Split Horizontal Groove & Notches */}
      <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-[#0E1117]/90 z-30 shadow-[0_1px_0_rgba(255,255,255,0.22)] -translate-y-1/2" />
      <div className="absolute top-1/2 left-0 w-1 sm:w-1.5 md:w-2 h-2 sm:h-3 md:h-3.5 bg-[#0F141D] rounded-r-full -translate-y-1/2 z-30" />
      <div className="absolute top-1/2 right-0 w-1 sm:w-1.5 md:w-2 h-2 sm:h-3 md:h-3.5 bg-[#0F141D] rounded-l-full -translate-y-1/2 z-30" />

      {/* Animated 3D Flip Digit */}
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={digit}
          initial={{ rotateX: 90, opacity: 0.8 }}
          animate={{ rotateX: 0, opacity: 1 }}
          exit={{ rotateX: -90, opacity: 0.8 }}
          transition={{
            duration: 0.35,
            ease: [0.25, 1, 0.5, 1],
          }}
          className="w-full h-full flex items-center justify-center select-none transform-gpu will-change-transform"
          style={{ transformStyle: 'preserve-3d', backfaceVisibility: 'hidden' }}
        >
          <span className="text-white font-black font-sans select-none tracking-tight leading-none text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
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

  const [calendarOpen, setCalendarOpen] = useState(false);
  const [copiedToast, setCopiedToast] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownId = useId();

  // Target event date: 21 October 2026, 08:00 AM IST
  const targetDateStr = EVENT_DETAILS.isoDate || '2026-10-21T08:00:00+05:30';

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
  }, [targetDateStr]);

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


  // Google Calendar URL
  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    'AWS Student Community Day 2026 · Central India'
  )}&dates=20261021T033000Z/20261021T103000Z&details=${encodeURIComponent(
    'AWS Student Community Day 2026 (Rungta International Skills University, Bhilai Edition).\nKeynotes by Praful Bagai & Jessica Gilmore, Amazon Bedrock GenAI workshops, project showcases, and 500+ student builders.\nVenue: Rungta International Skills University, Bhilai.\nWebsite: https://aws-scd-risu.vercel.app'
  )}&location=${encodeURIComponent(
    'Rungta International Skills University, Bhilai, Chhattisgarh, India'
  )}`;

  // Download .ics Calendar File
  const handleDownloadIcs = () => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//AWS SBG Rungta International Skills University//AWS Student Community Day 2026//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      'UID:aws-scd-risu-2026-10-21@awssbg.org',
      'DTSTAMP:20261013T000000Z',
      'DTSTART:20261021T033000Z',
      'DTEND:20261021T103000Z',
      'SUMMARY:AWS Student Community Day 2026 · Central India',
      'DESCRIPTION:Flagship student AWS conference in Central India at Rungta International Skills University, Bhilai. Keynotes from AWS DevRel leadership and Amazon leaders, hands-on GenAI clinics, and 550+ builders.',
      'LOCATION:Rungta International Skills University, Bhilai, Chhattisgarh 490024',
      'URL:https://aws-scd-risu.vercel.app',
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'AWS-SCD-Rungta-International-Skills-University-2026.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setCalendarOpen(false);
  };

  // Copy event share invitation
  const handleCopyInvite = async () => {
    const text = `🚀 Mark your calendar! AWS Student Community Day 2026 · Central India is happening on Wednesday, 21 October 2026 at Rungta International Skills University, Bhilai. 550+ builders, AWS DevRel keynotes, GenAI workshops & prizes! Details: ${window.location.href}`;
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
    <div className="w-full max-w-4xl mx-auto mb-6 sm:mb-8 select-none">
      {/* Technical Countdown Chassis */}
      <div className="relative rounded-2xl bg-[var(--theme-surface,#252324)] border border-[var(--theme-border,#383336)] p-4 sm:p-7 md:p-8 shadow-xl">

        {/* Centerpiece: Mechanical Split-Flap Countdown Units with glowing colon separators */}
        <div className="relative z-10 flex items-start justify-center gap-1 xs:gap-1.5 sm:gap-3 md:gap-5 lg:gap-6 my-3 sm:my-5">
          {/* Ambient glow matching theme accent behind the digits */}
          <div
            className="absolute inset-0 pointer-events-none -z-10"
            style={{
              background: 'radial-gradient(ellipse at center, var(--theme-accent-glow, rgba(173, 92, 255, 0.22)) 0%, transparent 72%)',
            }}
          />

            {/* Days */}
            <SplitFlapCard value={timeLeft.days} label="Days" />

            <ColonSeparator />

            {/* Hours */}
            <SplitFlapCard value={timeLeft.hours} label="Hours" />

            <ColonSeparator />

            {/* Minutes */}
            <SplitFlapCard value={timeLeft.minutes} label="Minutes" />

            <ColonSeparator />

            {/* Seconds */}
            <SplitFlapCard value={timeLeft.seconds} label="Seconds" />
          </div>

          {/* Telemetry Progress Bar towards 21 October */}
          <div className="relative z-10 mt-6 sm:mt-7 pt-4 sm:pt-5 border-t border-[var(--theme-border,#3E3E3E)]">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] sm:text-xs">
              {/* Event Schedule Info */}
              <div className="flex items-center gap-2 text-slate-300">
                <Calendar className="w-4 h-4 shrink-0" style={{ color: 'var(--theme-accent, #AD5CFF)' }} />
                <span className="font-medium">
                  <strong className="text-white">Wednesday, 21 October 2026</strong> · 09:00 AM IST
                </span>
                <span className="hidden md:inline text-slate-600">|</span>
                <span className="hidden md:flex items-center gap-1 text-slate-400">
                  <MapPin className="w-3 h-3 text-[#42B4FF]" />
                  Rungta International Skills University, Bhilai
                </span>
              </div>

              {/* Utility Dropdown: Add to Calendar & Reminders */}
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setCalendarOpen((prev) => !prev)}
                  className="flex items-center gap-2 px-3.5 py-1.5 rounded-full text-white font-bold text-xs transition-all cursor-pointer active:scale-95 hover:brightness-110"
                  style={{
                    backgroundColor: 'var(--theme-accent, #AD5CFF)',
                    boxShadow: '0 4px 14px var(--theme-accent-glow, rgba(173, 92, 255, 0.35))',
                  }}
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
                      className="absolute right-0 sm:right-0 bottom-full sm:bottom-auto sm:top-full mt-2 mb-2 sm:mb-0 w-64 bg-[var(--theme-surface,#252324)] border border-[var(--theme-border,#383336)] rounded-2xl p-2 shadow-[0_16px_40px_rgba(0,0,0,0.9)] z-50 text-left"
                    >
                      <div className="px-3 py-1.5 border-b border-[var(--theme-border,#383336)] mb-1">
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
                        className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-200 hover:text-white hover:bg-[var(--theme-surface-elevated,#2E2A2C)] transition-colors"
                      >
                        <Calendar className="w-4 h-4 text-[#FF9900]" />
                        <span>Google Calendar</span>
                      </a>

                      {/* Apple / Outlook .ics download */}
                      <button
                        type="button"
                        onClick={handleDownloadIcs}
                        className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-200 hover:text-white hover:bg-[var(--theme-surface-elevated,#2E2A2C)] transition-colors text-left cursor-pointer"
                      >
                        <Download className="w-4 h-4 text-[#42B4FF]" />
                        <span>Apple / Outlook (.ics)</span>
                      </button>

                      {/* Copy Share Invitation */}
                      <button
                        type="button"
                        onClick={handleCopyInvite}
                        className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-200 hover:text-white hover:bg-[var(--theme-surface-elevated,#2E2A2C)] transition-colors text-left cursor-pointer"
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
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[200] bg-[var(--theme-surface-elevated,#2E2A2C)] border border-[var(--theme-accent,#AD5CFF)] text-white px-5 py-2.5 rounded-full text-xs font-bold shadow-[0_10px_30px_rgba(0,0,0,0.8)] flex items-center gap-2"
          >
            <Check className="w-4 h-4 text-[var(--theme-accent,#AD5CFF)]" />
            <span>Event invite &amp; date copied to clipboard!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CountdownTimer;
