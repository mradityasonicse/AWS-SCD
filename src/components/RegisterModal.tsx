import React, { useState } from 'react';
import { X, Check, ArrowRight, Ticket } from 'lucide-react';
import confetti from 'canvas-confetti';
import { TICKETS, EVENT_DETAILS } from '../data/eventData';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTierId?: string;
}

export const RegisterModal: React.FC<RegisterModalProps> = ({
  isOpen,
  onClose,
  initialTierId = 'regular',
}) => {
  const [selectedTierId, setSelectedTierId] = useState(initialTierId);
  const [step, setStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    college: 'Rungta International Skills University (RISU)',
    year: '3rd Year',
    tshirt: 'L',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  React.useEffect(() => {
    if (isOpen) {
      setSelectedTierId(initialTierId);
      setStep(1);
      setIsSubmitted(false);
    }
  }, [initialTierId, isOpen]);

  if (!isOpen) return null;

  const currentTier = TICKETS.find((t) => t.id === selectedTierId) || TICKETS[1];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
    });
  };

  return (
    <div
      id="register-modal"
      onClick={onClose}
      className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-xl rounded-3xl border border-white/20 bg-[#090d24] p-6 sm:p-8 shadow-[0_25px_70px_rgba(164,90,250,0.35)] overflow-hidden"
      >
        {/* Glowing header accent */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#A45AFA] via-[#FF9900] to-cyan-400" />
        <div className="absolute -top-24 -right-24 w-52 h-52 bg-[#A45AFA]/25 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Ticket className="w-5 h-5 text-[#FF9900]" />
              <span className="text-xs font-black uppercase tracking-widest text-[#DDBEFF]">
                OFFICIAL REGISTRATION
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-white">
              AWS SCD Bhilai 2026 Pass
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Host: {EVENT_DETAILS.institution} (RISU) • {EVENT_DETAILS.date}
            </p>

            {step === 1 ? (
              <div className="mt-6 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300 block">
                  Select Your Pass Type:
                </span>

                <div className="space-y-2.5">
                  {TICKETS.map((tier) => {
                    const isSelected = tier.id === selectedTierId;
                    const isClosed = tier.status === 'closed';

                    return (
                      <div
                        key={tier.id}
                        onClick={() => !isClosed && setSelectedTierId(tier.id)}
                        className={`p-4 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${
                          isClosed
                            ? 'opacity-40 cursor-not-allowed border-white/5 bg-white/[0.01]'
                            : isSelected
                            ? 'border-[#A45AFA] bg-[#A45AFA]/15 shadow-md shadow-purple-950/40 ring-1 ring-[#A45AFA]'
                            : 'border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.05]'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                              isSelected ? 'border-[#A45AFA] bg-[#A45AFA]' : 'border-slate-500'
                            }`}
                          >
                            {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-extrabold text-sm text-white">{tier.name}</span>
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/10 text-slate-300">
                                {tier.badge}
                              </span>
                            </div>
                            <span className="text-[11px] text-slate-400">
                              {tier.features[0]} • {tier.features[1]}
                            </span>
                          </div>
                        </div>

                        <span className="text-lg font-black text-white">₹{tier.price}</span>
                      </div>
                    );
                  })}
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-400">Total payable:</span>
                    <p className="text-2xl font-black text-white">₹{currentTier.price}</p>
                  </div>
                  <button
                    onClick={() => setStep(2)}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#A45AFA] to-[#FF9900] text-xs font-black uppercase tracking-wider text-white shadow-lg hover:scale-105 transition-transform"
                  >
                    <span>Continue to Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Priya Sharma"
                      className="w-full rounded-xl border border-white/15 bg-white/5 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-[#A45AFA] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. priya@gmail.com"
                      className="w-full rounded-xl border border-white/15 bg-white/5 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-[#A45AFA] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">
                      WhatsApp / Mobile *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full rounded-xl border border-white/15 bg-white/5 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-[#A45AFA] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">
                      Academic Year
                    </label>
                    <select
                      value={formData.year}
                      onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                      className="w-full rounded-xl border border-white/15 bg-white/5 px-3.5 py-2.5 text-xs text-white focus:border-[#A45AFA] focus:outline-none"
                    >
                      <option value="1st Year" className="bg-[#090d24]">1st Year</option>
                      <option value="2nd Year" className="bg-[#090d24]">2nd Year</option>
                      <option value="3rd Year" className="bg-[#090d24]">3rd Year</option>
                      <option value="4th Year" className="bg-[#090d24]">4th Year / Final</option>
                      <option value="Postgraduate / Faculty" className="bg-[#090d24]">Postgraduate / Faculty</option>
                      <option value="Working Professional" className="bg-[#090d24]">Working Professional</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">
                    College / University *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.college}
                    onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                    className="w-full rounded-xl border border-white/15 bg-white/5 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-[#A45AFA] focus:outline-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-xs text-slate-400 hover:text-white"
                  >
                    ← Change Tier
                  </button>

                  <button
                    type="submit"
                    className="flex items-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-[#A45AFA] via-[#C084FC] to-[#FF9900] text-xs font-black uppercase tracking-wider text-white shadow-lg hover:scale-105 transition-transform"
                  >
                    <span>Complete Booking (₹{currentTier.price})</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        ) : (
          <div className="py-6 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center mx-auto text-emerald-400 shadow-xl">
              <Check className="w-8 h-8 stroke-[3]" />
            </div>

            <h3 className="text-2xl font-black text-white">Registration Confirmed!</h3>
            <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
              Congratulations <span className="text-white font-bold">{formData.name}</span>! Your slot for <span className="text-[#FF9900] font-bold">{currentTier.name} Pass</span> at <span className="text-white font-semibold">{EVENT_DETAILS.institution} (RISU)</span> is booked.
            </p>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-left max-w-sm mx-auto space-y-1 text-xs">
              <div className="flex justify-between text-slate-400">
                <span>Pass ID:</span>
                <span className="font-mono text-white font-bold">RISU-2026-REG-941</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Email Confirmation:</span>
                <span className="text-white font-semibold">{formData.email}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Venue:</span>
                <span className="text-[#FF9900] font-semibold">RISU Campus, Bhilai</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col gap-2">
              <button
                onClick={onClose}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#A45AFA] to-purple-600 font-bold text-xs uppercase tracking-wider text-white"
              >
                Close &amp; Return to Website
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
