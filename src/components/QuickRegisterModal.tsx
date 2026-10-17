import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Share2, Download, ArrowRight, Ticket, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';
import { EVENT_DETAILS } from '../data/eventData';

interface QuickRegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuickRegisterModal: React.FC<QuickRegisterModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    college: 'Rungta International Skills University',
    year: '3rd Year',
    track: 'Generative AI',
  });

  const [ticketId, setTicketId] = useState('');

  const handleConfetti = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FF9900', '#AD5CFF', '#42B4FF', '#00E582', '#FF57EA'],
      });
    } catch {
      // fallback safe
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) return;

    // Generate random ticket ID
    const randomSuffix = Math.random().toString(36).substring(2, 7).toUpperCase();
    setTicketId(`SCD26-${randomSuffix}`);
    setSubmitted(true);
    handleConfetti();

    // Automatically open the official Meetup event link
    if (EVENT_DETAILS.registrationUrl) {
      window.open(EVENT_DETAILS.registrationUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[150] flex items-end sm:items-center justify-center p-0 sm:p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetForm}
            className="fixed inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ y: '100%', opacity: 0.5 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '100%', opacity: 0 }}
            transition={{ type: 'spring', damping: 28, stiffness: 320 }}
            className="relative z-10 w-full sm:max-w-lg bg-[var(--theme-surface,#252324)] border-t sm:border border-[var(--theme-border,#383336)] rounded-t-3xl sm:rounded-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.8)] sm:shadow-[0_20px_60px_rgba(0,0,0,0.9)] max-h-[90vh] overflow-y-auto"
          >
            {/* Header Lockup */}
            <div className="sticky top-0 bg-[var(--theme-surface,#252324)]/95 backdrop-blur-md border-b border-[var(--theme-border,#383336)] p-4 sm:p-5 flex items-center justify-between z-20">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[var(--theme-surface-elevated,#2E2A2C)] p-1 border border-[var(--theme-border,#383336)] flex items-center justify-center">
                  <Ticket className="w-4 h-4" style={{ color: 'var(--theme-accent, #AD5CFF)' }} />
                </div>
                <div>
                  <h3 className="font-heading text-lg sm:text-xl tracking-wide uppercase text-white leading-none">
                    {submitted ? 'Your Event Pass' : 'Easy Student Registration'}
                  </h3>
                  <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest block mt-0.5">
                    AWS SCD 2026 · RUNGTA INTERNATIONAL SKILLS UNIVERSITY, BHILAI
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={resetForm}
                className="w-8 h-8 rounded-full bg-[#161E2D] hover:bg-[#1E293B] border border-[#232F3E] text-slate-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content Area */}
            <div className="p-5 sm:p-6">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[var(--theme-bg,#110011)] border border-[var(--theme-border,#383336)] focus:border-[var(--theme-accent,#AD5CFF)] rounded-xl px-3.5 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-[var(--theme-accent,#AD5CFF)] font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Student / Academic Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="student@rungta.ac.in"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[var(--theme-bg,#110011)] border border-[var(--theme-border,#383336)] focus:border-[var(--theme-accent,#AD5CFF)] rounded-xl px-3.5 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-[var(--theme-accent,#AD5CFF)] font-sans"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                        College / Institution
                      </label>
                      <input
                        type="text"
                        value={formData.college}
                        onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                        className="w-full bg-[var(--theme-bg,#110011)] border border-[var(--theme-border,#383336)] focus:border-[var(--theme-accent,#AD5CFF)] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none font-sans"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                        Year of Study
                      </label>
                      <select
                        value={formData.year}
                        onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                        className="w-full bg-[var(--theme-bg,#110011)] border border-[var(--theme-border,#383336)] focus:border-[var(--theme-accent,#AD5CFF)] rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none font-sans"
                      >
                        <option value="1st Year">1st Year</option>
                        <option value="2nd Year">2nd Year</option>
                        <option value="3rd Year">3rd Year</option>
                        <option value="4th Year">4th Year</option>
                        <option value="Postgraduate / Alumni">Postgraduate / Alumni</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                      Preferred Interest Track
                    </label>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      {['Generative AI', 'Cloud Infra', 'Serverless', 'Hackathon'].map((track) => (
                        <button
                          key={track}
                          type="button"
                          onClick={() => setFormData({ ...formData, track })}
                          className={`p-2.5 rounded-xl border text-left font-mono transition-all cursor-pointer ${
                            formData.track === track
                              ? 'border-[var(--theme-accent,#AD5CFF)] bg-[var(--theme-accent,#AD5CFF)]/15 text-white font-bold'
                              : 'border-[var(--theme-border,#383336)] bg-[var(--theme-bg,#110011)] text-slate-400 hover:text-white'
                          }`}
                        >
                          {track}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 px-6 jitter-btn-base jitter-btn-register text-sm uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Claim Free Student Pass</span>
                      <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                    </button>
                    <p className="text-[11px] font-mono text-slate-400 text-center mt-2.5">
                      ✓ Free entry · 100% Student Sponsored · Swags &amp; Meals included
                    </p>
                  </div>
                </form>
              ) : (
                <div className="space-y-5">
                  {/* Digital Pass Preview */}
                  <div
                    className="p-5 rounded-2xl border relative overflow-hidden bg-gradient-to-b from-[var(--theme-surface-elevated,#2E2A2C)] to-[var(--theme-bg,#110011)] shadow-2xl"
                    style={{ borderColor: 'var(--theme-accent, #AD5CFF)' }}
                  >
                    <div className="flex items-center justify-between pb-3 border-b border-[var(--theme-border,#383336)]">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                          Confirmed Attendee
                        </span>
                      </div>
                      <span className="font-mono text-xs font-bold text-slate-300">
                        {ticketId}
                      </span>
                    </div>

                    <div className="py-4">
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                        Pass Holder
                      </span>
                      <h4 className="font-heading text-2xl sm:text-3xl font-normal text-white uppercase tracking-wide mt-0.5">
                        {formData.name}
                      </h4>
                      <p className="text-xs text-slate-300 mt-1 font-mono">
                        {formData.college} · {formData.year}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3 py-3 border-t border-[var(--theme-border,#383336)] text-xs font-mono">
                      <div>
                        <span className="text-[10px] text-slate-500 block uppercase">Date &amp; Time</span>
                        <span className="text-white font-bold">21 Oct 2026 · 09:00 AM</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-500 block uppercase">Venue</span>
                        <span className="text-white font-bold">Rungta International Skills University Auditorium</span>
                      </div>
                    </div>

                    {/* Barcode Mock */}
                    <div className="pt-3 border-t border-[var(--theme-border,#383336)] flex items-center justify-between">
                      <div className="flex gap-1 h-6 items-center opacity-70">
                        {[4, 2, 6, 1, 3, 5, 2, 4, 1, 6, 3, 2, 5, 1, 4, 3, 2].map((h, i) => (
                          <div
                            key={i}
                            className="bg-white rounded-xs"
                            style={{ width: `${(h % 3) + 1.5}px`, height: `${h * 4}px` }}
                          />
                        ))}
                      </div>
                      <span
                        className="text-[10px] font-mono font-bold px-2 py-0.5 rounded border uppercase"
                        style={{
                          color: 'var(--theme-accent, #AD5CFF)',
                          borderColor: 'color-mix(in srgb, var(--theme-accent, #AD5CFF) 30%, transparent)',
                          backgroundColor: 'color-mix(in srgb, var(--theme-accent, #AD5CFF) 10%, transparent)',
                        }}
                      >
                        {formData.track}
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <button
                      type="button"
                      onClick={() => alert(`Pass ${ticketId} saved to your device!`)}
                      className="py-3 px-4 jitter-btn-base jitter-btn-dark text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Download className="w-4 h-4 text-[#42B4FF]" />
                      <span>Save Pass</span>
                    </button>
                    <a
                      href={`https://wa.me/?text=I%20just%20claimed%20my%20free%20builder%20pass%20for%20AWS%20Student%20Community%20Day%202026%20at%20Rungta%20International%20Skills%20University%20Bhilai!%20Pass%20ID:%20${ticketId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3 px-4 jitter-btn-base jitter-btn-dark text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Share2 className="w-4 h-4 text-[#00E582]" />
                      <span>Share</span>
                    </a>
                  </div>

                  <a
                    href={EVENT_DETAILS.registrationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 jitter-btn-base jitter-btn-register text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Confirm RSVP on Official Meetup</span>
                    <ExternalLink className="w-4 h-4 text-white" />
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default QuickRegisterModal;
