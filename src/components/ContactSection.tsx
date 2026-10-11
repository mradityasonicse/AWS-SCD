import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { EVENT_DETAILS, ORGANIZERS } from '../data/eventData';
import Text3DFlip from '@/registry/magicui/text-3d-flip';

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
    }, 700);
  };

  const leadOrganizer = ORGANIZERS[0];

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-6 max-w-7xl mx-auto text-[#171717]">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#D946EF]/10 rounded-full blur-[190px] pointer-events-none" />

      {/* Section Header with [ 10 ] Index */}
      <div className="border-b border-neutral-200 pb-6 mb-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
        <div className="flex items-baseline gap-6">
          <span className="text-[#D946EF] font-mono text-sm tracking-widest font-bold">[ 10 ]</span>
          <div>
            <p className="text-[#D946EF] text-xs font-bold uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
              <span className="w-6 h-[1px] bg-[#D946EF]" />
              Get In Touch
            </p>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#171717] tracking-tight leading-tight">
              <Text3DFlip
                textClassName="text-[#171717]"
                flipTextClassName="text-[#D946EF]"
                rotateDirection="top"
                staggerDuration={0.02}
              >
                Let's connect and build together.
              </Text3DFlip>
            </h2>
          </div>
        </div>
        <p className="text-neutral-500 text-sm max-w-sm font-mono">
          AWS STUDENT BUILDER GROUP · RUNGTA INTERNATIONAL SKILLS UNIVERSITY
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Organizer Cards */}
        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8 backdrop-blur-xl shadow-sm">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#D946EF] block mb-2">
              LEAD ORGANIZER DESK
            </span>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#D946EF]/20 to-[#22D3EE]/20 p-1 border border-neutral-200 overflow-hidden shrink-0 flex items-center justify-center bg-neutral-50">
                <img
                  src="/risu-logo.png"
                  alt="Uddyan Sahu"
                  className="w-11 h-11 object-contain"
                />
              </div>

              <div>
                <h3 className="text-xl font-black text-[#171717]">{leadOrganizer.name}</h3>
                <p className="text-xs font-semibold text-[#D946EF]">
                  Organizer • AWS SBG Leader, RISU
                </p>
                <p className="text-[11px] text-neutral-500">
                  {EVENT_DETAILS.institution}
                </p>
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-neutral-100 text-xs">
              <a
                href={`mailto:${EVENT_DETAILS.contactEmail}`}
                className="flex items-center gap-3 text-neutral-700 hover:text-[#D946EF] transition-colors"
              >
                <div className="p-2 rounded-lg bg-neutral-100 border border-neutral-200">
                  <Mail className="w-4 h-4 text-[#D946EF]" />
                </div>
                <span>{EVENT_DETAILS.contactEmail}</span>
              </a>

              <a
                href={`tel:${EVENT_DETAILS.contactPhone}`}
                className="flex items-center gap-3 text-neutral-700 hover:text-[#D946EF] transition-colors"
              >
                <div className="p-2 rounded-lg bg-neutral-100 border border-neutral-200">
                  <Phone className="w-4 h-4 text-[#D946EF]" />
                </div>
                <span>{EVENT_DETAILS.contactPhone}</span>
              </a>

              <div className="flex items-center gap-3 text-neutral-700">
                <div className="p-2 rounded-lg bg-neutral-100 border border-neutral-200">
                  <MapPin className="w-4 h-4 text-[#22D3EE]" />
                </div>
                <span>{EVENT_DETAILS.city}</span>
              </div>
            </div>

            {leadOrganizer.linkedin && (
              <div className="mt-6 pt-4 border-t border-neutral-100">
                <a
                  href={leadOrganizer.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-neutral-700 hover:text-[#D946EF] transition-colors"
                >
                  <svg className="w-4 h-4 text-[#0077b5] fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                  <span>Connect on LinkedIn →</span>
                </a>
              </div>
            )}
          </div>

          {/* Quick FAQ summary box */}
          <div className="rounded-2xl border border-neutral-200 bg-white/80 p-5 backdrop-blur-md shadow-sm">
            <h4 className="text-sm font-bold text-[#171717] mb-1">
              Campus Accommodation &amp; Bus Transit
            </h4>
            <p className="text-xs text-neutral-500 leading-relaxed">
              Outstation student groups traveling from Raipur, Bilaspur, Rajnandgaon, or other states can request hostel accommodation and transit coordination via email.
            </p>
          </div>
        </div>

        {/* Right Column: Contact Message Form */}
        <div className="lg:col-span-7 rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8 backdrop-blur-2xl shadow-xl">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-neutral-100">
                <MessageSquare className="w-4 h-4 text-[#D946EF]" />
                <h3 className="text-base font-bold text-[#171717]">Send Direct Message</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Aditi Sharma"
                    className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-xs text-[#171717] placeholder-neutral-400 focus:border-[#D946EF] focus:bg-white focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-700 mb-1">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. aditi@college.edu"
                    className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-xs text-[#171717] placeholder-neutral-400 focus:border-[#D946EF] focus:bg-white focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-700 mb-1">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 9876543210"
                    className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-xs text-[#171717] placeholder-neutral-400 focus:border-[#D946EF] focus:bg-white focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-700 mb-1">
                    Reason for Contact
                  </label>
                  <select
                    value={formData.reason}
                    onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                    className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-xs text-[#171717] focus:border-[#D946EF] focus:bg-white focus:outline-none transition-colors"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Sponsorship & Partnership">Sponsorship &amp; Partnership</option>
                    <option value="College Delegation & Group Attendance">College Delegation &amp; Group Attendance</option>
                    <option value="Speaker Proposal (CFP)">Speaker Proposal (CFP)</option>
                    <option value="Volunteer with AWS SBG RISU">Volunteer with AWS SBG RISU</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-neutral-700 mb-1">
                  Message *
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="How can our community team help you?"
                  className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-xs text-[#171717] placeholder-neutral-400 focus:border-[#D946EF] focus:bg-white focus:outline-none transition-colors"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-[#D946EF] via-[#C026D3] to-[#22D3EE] hover:opacity-95 text-xs font-black uppercase tracking-wider text-white shadow-lg shadow-[#D946EF]/25 hover:scale-[1.01] transition-all cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Sending Message...' : 'Send Message to RISU SBG Desk'}</span>
                </button>
              </div>
            </form>
          ) : (
            <div className="py-12 text-center space-y-4">
              <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto" />
              <h3 className="text-2xl font-black text-[#171717]">Message Dispatched!</h3>
              <p className="text-xs sm:text-sm text-neutral-600 max-w-md mx-auto">
                Thank you, {formData.name}. Your inquiry has been sent to the AWS Student Builder Group team at Rungta International Skills University (RISU). We will respond to {formData.email} shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2.5 rounded-xl border border-neutral-200 bg-neutral-100 text-xs font-bold text-[#171717] hover:bg-neutral-200 transition-colors cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
