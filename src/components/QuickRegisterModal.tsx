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
        colors: ['#AD5CFF', '#C084FC', '#FFFFFF', '#38BDF8'],
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
            className="relative z-10 w-full sm:max-w-lg bg-[#0A0D14]/90 border-t sm:border border-white/20 rounded-t-3xl sm:rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] backdrop-blur-2xl max-h-[90vh] overflow-y-auto"
          >
            {/* Header Lockup */}
            <div className="sticky top-0 bg-white/[0.03] backdrop-blur-md border-b border-white/10 p-4 sm:p-5 flex items-center justify-between z-20">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-white/10 p-1 border border-white/15 flex items-center justify-center">
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
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
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
                      className="w-full bg-white/[0.04] border border-white/10 focus:border-[var(--theme-accent,#AD5CFF)] rounded-xl px-3.5 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[var(--theme-accent,#AD5CFF)] font-sans"
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
                      className="w-full bg-white/[0.04] border border-white/10 focus:border-[var(--theme-accent,#AD5CFF)] rounded-xl px-3.5 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[var(--theme-accent,#AD5CFF)] font-sans"
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
                        className="w-full bg-white/[0.04] border border-white/10 focus:border-[var(--theme-accent,#AD5CFF)] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none font-sans"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                        Year of Study
                      </label>
                      <select
                        value={formData.year}
                        onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                        className="w-full bg-white/[0.06] border border-white/10 focus:border-[var(--theme-accent,#AD5CFF)] rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none font-sans"
                      >
                        <option value="1st Year" className="bg-[#0B0F17] text-white">1st Year</option>
                        <option value="2nd Year" className="bg-[#0B0F17] text-white">2nd Year</option>
                        <option value="3rd Year" className="bg-[#0B0F17] text-white">3rd Year</option>
                        <option value="4th Year" className="bg-[#0B0F17] text-white">4th Year</option>
                        <option value="Postgraduate / Alumni" className="bg-[#0B0F17] text-white">Postgraduate / Alumni</option>
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
                              : 'border-white/10 bg-white/[0.03] text-slate-300 hover:bg-white/[0.06] hover:text-white'
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
                    className="p-5 rounded-2xl border relative overflow-hidden bg-white/[0.04] backdrop-blur-xl shadow-2xl"
                    style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}
                  >
                    <div className="flex items-center justify-between pb-3 border-b border-white/10">
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

                    <div className="grid grid-cols-2 gap-3 py-3 border-t border-white/10 text-xs font-mono">
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
                    <div className="pt-3 border-t border-white/10 flex items-center justify-between">
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
