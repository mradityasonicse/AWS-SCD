import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';
import { EVENT_DETAILS, ORGANIZERS } from '../data/eventData';
import { ScrollReveal, SpotlightCard } from '@/components/ui/motion-primitives';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: 'Student Builder',
    reason: 'General Inquiry',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 75,
        spread: 80,
        origin: { y: 0.65 },
        colors: ['#FF9900', '#FFAC33', '#00A4E4', '#38BDF8', '#FFD814'],
      });
    }, 600);
  };

  const leadOrganizer = ORGANIZERS[0];

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-6 max-w-7xl mx-auto text-[#F8FAFC]">
      {/* Section Header with [ 10 ] Index */}
      <ScrollReveal>
        <div className="border-b border-[#232F3E] pb-6 mb-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div className="flex items-baseline gap-4 sm:gap-6">
            <span
              className="font-mono text-sm tracking-widest font-bold whitespace-nowrap shrink-0"
              style={{ color: 'var(--theme-accent, #AD5CFF)' }}
            >
              [ 10 ]
            </span>
            <div>
              <p
                className="text-xs font-bold uppercase tracking-[0.2em] mb-2 flex items-center gap-2"
                style={{ color: 'var(--theme-accent, #AD5CFF)' }}
              >
                <span className="w-6 h-[1px]" style={{ backgroundColor: 'var(--theme-accent, #AD5CFF)' }} />
                Get In Touch
              </p>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.12]">
                Let's connect and build together.
              </h2>
            </div>
          </div>
          <p className="text-slate-400 text-xs sm:text-sm max-w-sm font-mono uppercase tracking-wider">
            AWS STUDENT BUILDER GROUP · RUNGTA INTERNATIONAL SKILLS UNIVERSITY
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Organizer Cards */}
        <div className="lg:col-span-5 space-y-6">
          <ScrollReveal delay={0.1}>
            <SpotlightCard className="p-6 sm:p-8 shadow-xl shadow-black/40">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#FF9900] block mb-2">
                LEAD ORGANIZER DESK
              </span>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-[#161E2D] p-1 border border-[#232F3E] overflow-hidden shrink-0 flex items-center justify-center">
                  <img
                    src="/risu-logo.png"
                    alt="Uddyan Sahu"
                    className="w-11 h-11 object-contain"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-black text-white">{leadOrganizer.name}</h3>
                  <p className="text-xs font-semibold text-[#FF9900]">
                    Organizer • AWS SBG Leader, RISU
                  </p>
                  <p className="text-[11px] text-slate-400">
                    {EVENT_DETAILS.institution}
                  </p>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-[#232F3E] text-xs">
                <a
                  href={`mailto:${EVENT_DETAILS.contactEmail}`}
                  className="flex items-center gap-3 text-slate-300 hover:text-[#FF9900] transition-colors"
                >
                  <div className="p-2 rounded-lg bg-[#161E2D] border border-[#232F3E]">
                    <Mail className="w-4 h-4 text-[#FF9900]" />
                  </div>
                  <span>{EVENT_DETAILS.contactEmail}</span>
                </a>

                <a
                  href={`tel:${EVENT_DETAILS.contactPhone}`}
                  className="flex items-center gap-3 text-slate-300 hover:text-[#FF9900] transition-colors"
                >
                  <div className="p-2 rounded-lg bg-[#161E2D] border border-[#232F3E]">
                    <Phone className="w-4 h-4 text-[#FF9900]" />
                  </div>
                  <span>{EVENT_DETAILS.contactPhone}</span>
                </a>

                <div className="flex items-center gap-3 text-slate-300">
                  <div className="p-2 rounded-lg bg-[#161E2D] border border-[#232F3E]">
                    <MapPin className="w-4 h-4 text-[#00A4E4]" />
                  </div>
                  <span>{EVENT_DETAILS.city}</span>
                </div>
              </div>

              {leadOrganizer.linkedin && (
                <div className="mt-6 pt-4 border-t border-[#232F3E]">
                  <a
                    href={leadOrganizer.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-[#FF9900] transition-colors"
                  >
                    <svg className="w-4 h-4 text-[#0077b5] fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                    </svg>
                    <span>Connect on LinkedIn →</span>
                  </a>
                </div>
              )}
            </SpotlightCard>
          </ScrollReveal>

          {/* Quick FAQ summary box */}
          <ScrollReveal delay={0.15}>
            <SpotlightCard className="p-5 shadow-md">
              <h4 className="text-sm font-bold text-white mb-1">
                Campus Accommodation &amp; Bus Transit
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Outstation student groups traveling from Raipur, Bilaspur, Rajnandgaon, or other states can request hostel accommodation and transit coordination via email.
              </p>
            </SpotlightCard>
          </ScrollReveal>
        </div>

        {/* Right Column: Contact Message Form */}
        <div className="lg:col-span-7">
          <ScrollReveal delay={0.2}>
            <SpotlightCard className="p-6 sm:p-8 shadow-xl shadow-black/50">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center gap-2 pb-3 border-b border-[#232F3E]">
                    <MessageSquare className="w-4 h-4 text-[#FF9900]" />
                    <h3 className="text-base font-bold text-white">Send Direct Message</h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Aditi Sharma"
                        className="w-full rounded-xl border border-[#232F3E] bg-[#161E2D] px-4 py-3 sm:py-2.5 text-base sm:text-xs text-white placeholder-slate-500 focus:border-[#FF9900] focus:bg-[#161E2D] focus:ring-1 focus:ring-[#FF9900] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. aditi@college.edu"
                        className="w-full rounded-xl border border-[#232F3E] bg-[#161E2D] px-4 py-3 sm:py-2.5 text-base sm:text-xs text-white placeholder-slate-500 focus:border-[#FF9900] focus:bg-[#161E2D] focus:ring-1 focus:ring-[#FF9900] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 9876543210"
                        className="w-full rounded-xl border border-[#232F3E] bg-[#161E2D] px-4 py-3 sm:py-2.5 text-base sm:text-xs text-white placeholder-slate-500 focus:border-[#FF9900] focus:bg-[#161E2D] focus:ring-1 focus:ring-[#FF9900] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">
                        Reason for Contact
                      </label>
                      <select
                        value={formData.reason}
                        onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                        className="w-full rounded-xl border border-[#232F3E] bg-[#161E2D] px-4 py-3 sm:py-2.5 text-base sm:text-xs text-white focus:border-[#FF9900] focus:bg-[#161E2D] focus:ring-1 focus:ring-[#FF9900] focus:outline-none transition-colors cursor-pointer"
                      >
                        <option value="General Inquiry" className="bg-[#161E2D] text-white">General Inquiry</option>
                        <option value="Sponsorship & Partnership" className="bg-[#161E2D] text-white">Sponsorship &amp; Partnership</option>
                        <option value="College Delegation & Group Attendance" className="bg-[#161E2D] text-white">College Delegation &amp; Group Attendance</option>
                        <option value="Speaker Proposal (CFP)" className="bg-[#161E2D] text-white">Speaker Proposal (CFP)</option>
                        <option value="Volunteer with AWS SBG RISU" className="bg-[#161E2D] text-white">Volunteer with AWS SBG RISU</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">
                      Message *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="How can our community team help you?"
                      className="w-full rounded-xl border border-[#232F3E] bg-[#161E2D] px-4 py-3 sm:py-2.5 text-base sm:text-xs text-white placeholder-slate-500 focus:border-[#FF9900] focus:bg-[#161E2D] focus:ring-1 focus:ring-[#FF9900] focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-[#FF9900] hover:bg-[#FFAC33] active:bg-[#E68A00] text-xs font-bold uppercase tracking-wider text-[#0B0F17] shadow-sm transition-all cursor-pointer disabled:opacity-50 active:scale-[0.99]"
                    >
                      <Send className="w-4 h-4" />
                      <span>{isSubmitting ? 'Sending Message...' : 'Send Message to RISU SBG Desk'}</span>
                    </button>
                  </div>
                </form>
              ) : (
                <div className="py-12 text-center space-y-4">
                  <CheckCircle2 className="w-14 h-14 text-emerald-400 mx-auto" />
                  <h3 className="text-2xl font-black text-white">Message Dispatched!</h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, {formData.name}. Your inquiry has been sent to the AWS Student Builder Group team at Rungta International Skills University (RISU). We will respond to {formData.email} shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-xl border border-[#232F3E] bg-[#161E2D] text-xs font-bold text-white hover:border-[#FF9900] hover:text-[#FF9900] transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </SpotlightCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
