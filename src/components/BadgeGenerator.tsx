import React, { useState, useRef } from 'react';
import { Download, Sparkles, Upload, ZoomIn, Check } from 'lucide-react';
import html2canvas from 'html2canvas';
import confetti from 'canvas-confetti';

export const BadgeGenerator: React.FC = () => {
  const [name, setName] = useState('Rahul Verma');
  const [role, setRole] = useState('Cloud Builder & AI Enthusiast');
  const [college, setCollege] = useState('Rungta International Skills University (RISU)');
  const [avatarUrl, setAvatarUrl] = useState<string>('/praful_bagai.png');
  const [zoom, setZoom] = useState(1);
  const [isGenerating, setIsGenerating] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const badgeRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setAvatarUrl(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const downloadBadge = async () => {
    if (!badgeRef.current) return;
    setIsGenerating(true);
    setStatusMessage('Generating HD badge...');

    try {
      const canvas = await html2canvas(badgeRef.current, {
        scale: 3,
        useCORS: true,
        allowTaint: true,
        backgroundColor: null,
      });

      const image = canvas.toDataURL('image/png', 1.0);
      const link = document.createElement('a');
      const safeName = name.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-') || 'attendee';
      link.download = `aws-scd-risu-${safeName}-badge.png`;
      link.href = image;
      link.click();

      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });

      setStatusMessage('Badge downloaded successfully!');
      setTimeout(() => setStatusMessage(null), 4000);
    } catch (err) {
      console.error('Badge generation error:', err);
      setStatusMessage('Could not generate badge. Please try again.');
      setTimeout(() => setStatusMessage(null), 4000);
    } finally {
      setIsGenerating(false);
    }
  };

  const shareText = `I'm attending AWS Student Community Day Bhilai 2026 at Rungta International Skills University (RISU)! Join me for Central India's largest student cloud & AI summit! 🚀☁️ #AWSSCD #AWSSCDRISU #AWSStudentBuilderGroup #RISU`;

  const shareOnX = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;
    window.open(url, '_blank');
  };

  const shareOnLinkedIn = () => {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://awssstc.site')}`;
    window.open(url, '_blank');
  };

  const shareOnWhatsApp = () => {
    const url = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="badge" className="relative py-28 px-4 sm:px-6 max-w-7xl mx-auto text-white">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-[#A45AFA]/10 rounded-full blur-[180px] pointer-events-none" />

      {/* Section Header with [ 08 ] Index */}
      <div className="border-b border-white/10 pb-6 mb-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
        <div className="flex items-baseline gap-6">
          <span className="text-[#ff9900] font-mono text-sm tracking-widest">[ 08 ]</span>
          <div>
            <p className="text-[#ff9900] text-xs font-bold uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
              <span className="w-6 h-[1px] bg-[#ff9900]" />
              Participation Badge
            </p>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
              Show you're <span className="font-serif italic font-normal text-[#ffb84d]">in.</span>
            </h2>
          </div>
        </div>
        <p className="text-slate-400 text-sm max-w-sm font-mono">
          CUSTOM DIGITAL LANYARD PASS · SHARE ON LINKEDIN &amp; X
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-5xl mx-auto">
        {/* Controls Column */}
        <div className="lg:col-span-6 space-y-5 rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 backdrop-blur-xl">
          <div className="flex items-center gap-2 pb-4 border-b border-white/10">
            <Sparkles className="w-5 h-5 text-[#FF9900]" />
            <h3 className="text-lg font-bold text-white">Badge Customizer</h3>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Full Name"
              className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-[#A45AFA] focus:outline-none focus:ring-1 focus:ring-[#A45AFA]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
              Designation / Role
            </label>
            <input
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              placeholder="e.g. Cloud Builder, AI Engineer, Student"
              className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-[#A45AFA] focus:outline-none focus:ring-1 focus:ring-[#A45AFA]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
              College / University
            </label>
            <input
              type="text"
              value={college}
              onChange={(e) => setCollege(e.target.value)}
              placeholder="e.g. Rungta International Skills University"
              className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-[#A45AFA] focus:outline-none focus:ring-1 focus:ring-[#A45AFA]"
            />
          </div>

          {/* Photo Upload & Zoom */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
              Profile Photo
            </label>
            <div className="flex items-center gap-3">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-xs font-bold text-white hover:bg-white/10 hover:border-[#A45AFA] transition-all cursor-pointer"
              >
                <Upload className="w-4 h-4 text-[#A45AFA]" />
                <span>Upload Photo</span>
              </button>

              <div className="flex-1 flex items-center gap-2">
                <ZoomIn className="w-4 h-4 text-slate-400" />
                <input
                  type="range"
                  min="0.8"
                  max="2.0"
                  step="0.05"
                  value={zoom}
                  onChange={(e) => setZoom(parseFloat(e.target.value))}
                  className="w-full accent-[#A45AFA] h-1.5 bg-white/10 rounded-lg cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 border-t border-white/10 space-y-3">
            <button
              onClick={downloadBadge}
              disabled={isGenerating}
              className="w-full flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-[#A45AFA] via-[#C084FC] to-[#FF9900] py-3.5 text-sm font-extrabold uppercase tracking-wider text-white shadow-lg shadow-purple-900/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer disabled:opacity-50"
            >
              <Download className="w-4 h-4" />
              <span>{isGenerating ? 'Rendering...' : 'Download HD Badge (PNG)'}</span>
            </button>

            {statusMessage && (
              <p className="text-center text-xs font-semibold text-emerald-400 animate-pulse">
                {statusMessage}
              </p>
            )}

            <div className="flex items-center justify-between gap-2 pt-2 text-xs">
              <span className="text-slate-400 font-medium">Share Badge:</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={shareOnX}
                  className="px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-white font-bold"
                >
                  X / Twitter
                </button>
                <button
                  onClick={shareOnLinkedIn}
                  className="px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-white font-bold"
                >
                  LinkedIn
                </button>
                <button
                  onClick={shareOnWhatsApp}
                  className="px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-emerald-400 font-bold"
                >
                  WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Badge Preview Canvas */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center">
          {/* Lanyard Top Strap Simulation */}
          <div className="flex flex-col items-center mb-1">
            <div className="w-8 h-10 bg-gradient-to-b from-[#232F3E] to-slate-900 border border-white/20 rounded-t-sm flex items-center justify-center">
              <div className="w-3.5 h-3.5 rounded-full bg-slate-700 border border-white/30" />
            </div>
            <div className="w-14 h-3 bg-gradient-to-r from-slate-400 via-slate-200 to-slate-400 rounded-sm shadow-md" />
          </div>

          {/* Actual Badge Card Container */}
          <div
            ref={badgeRef}
            data-badge-root="true"
            className="relative w-[340px] sm:w-[370px] rounded-3xl border-2 border-[#A45AFA]/60 bg-gradient-to-b from-[#0e122b] via-[#050816] to-[#0a061c] p-6 shadow-[0_20px_60px_rgba(164,90,250,0.35)] overflow-hidden text-center"
          >
            {/* Holographic Iridescent Shimmer */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#A45AFA]/15 via-transparent to-[#FF9900]/15 pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF9900] via-[#A45AFA] to-cyan-400" />

            {/* Top Logos Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/15">
              <div className="flex items-center gap-2">
                <img src="/AWS.png" alt="AWS" className="h-6 w-auto object-contain" />
                <img src="/AWS_SBG.png" alt="AWS SBG" className="h-6 w-auto object-contain" />
              </div>
              <div className="flex items-center gap-1.5">
                <img src="/risu-crest.svg" alt="RISU" className="h-7 w-auto object-contain rounded" />
                <span className="font-extrabold text-xs text-white tracking-wider">RISU</span>
              </div>
            </div>

            {/* Event Name Tag */}
            <div className="mt-4">
              <span className="text-[10px] font-black tracking-[0.2em] uppercase text-[#FF9900]">
                STUDENT COMMUNITY DAY 2026
              </span>
              <h4 className="text-sm font-black text-white uppercase tracking-wider mt-0.5">
                BHILAI • CHHATTISGARH
              </h4>
            </div>

            {/* Avatar Photo Frame */}
            <div className="mt-5 flex justify-center">
              <div className="relative p-1 rounded-2xl bg-gradient-to-b from-[#A45AFA] via-[#FF9900] to-purple-500 shadow-xl shadow-purple-950/60">
                <div className="w-32 h-32 rounded-xl overflow-hidden bg-slate-900 border border-black/40 flex items-center justify-center">
                  <img
                    src={avatarUrl}
                    alt={name}
                    style={{ transform: `scale(${zoom})` }}
                    className="w-full h-full object-cover object-center transition-transform"
                  />
                </div>
                <div className="absolute -bottom-2.5 -right-2.5 w-7 h-7 rounded-full bg-emerald-500 border-2 border-[#050816] flex items-center justify-center shadow-lg">
                  <Check className="w-4 h-4 text-white stroke-[3]" />
                </div>
              </div>
            </div>

            {/* Name & Title */}
            <div className="mt-4 space-y-1">
              <h3 className="text-xl font-black text-white tracking-tight">
                {name || 'Attendee Name'}
              </h3>
              <p className="text-xs font-bold text-[#DDBEFF] max-w-xs mx-auto">
                {role || 'Cloud Enthusiast'}
              </p>
              <p className="text-[11px] font-medium text-slate-400 truncate max-w-[280px] mx-auto pt-0.5">
                {college || 'Rungta International Skills University'}
              </p>
            </div>

            {/* Verification Barcode / Security ID */}
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
              <div className="text-left">
                <span className="text-[8px] font-mono uppercase tracking-widest text-slate-400 block">
                  PASS ID
                </span>
                <span className="text-[11px] font-mono font-bold text-[#FF9900]">
                  RISU-AWS-2026-784
                </span>
              </div>

              {/* Simulated Barcode */}
              <div className="flex items-center gap-[2.5px] h-6 bg-white/10 px-2 py-1 rounded">
                {[4, 2, 6, 3, 5, 2, 7, 3, 4, 2, 6, 4, 3, 5, 2, 4].map((h, i) => (
                  <div
                    key={i}
                    style={{ height: `${h * 2 + 6}px` }}
                    className="w-[2px] bg-slate-200"
                  />
                ))}
              </div>
            </div>

            {/* Event Timestamp footer */}
            <div className="mt-3 text-[9px] font-semibold text-slate-500 uppercase tracking-widest">
              SEP 26, 2026 • RISU BHILAI CAMPUS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
