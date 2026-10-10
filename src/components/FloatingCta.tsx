import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface FloatingCtaProps {
  onRegisterClick: () => void;
}

export const FloatingCta: React.FC<FloatingCtaProps> = ({ onRegisterClick }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past hero (400px)
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] max-w-xl w-[92%] transition-all duration-300 animate-in fade-in slide-in-from-bottom-5">
      <div className="backdrop-blur-xl bg-[#0c1220]/90 border border-[#ff9900]/40 rounded-full py-2.5 px-4 shadow-[0_12px_40px_rgba(0,0,0,0.8),0_0_20px_rgba(255,153,0,0.15)] flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 overflow-hidden">
          <span className="relative flex h-3 w-3 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          <div className="flex flex-col min-w-0">
            <span className="text-white font-bold text-xs truncate flex items-center gap-1.5">
              Registration Open
              <span className="text-[#ff9900] text-[10px] hidden sm:inline">✦ ₹259 Early Bird</span>
            </span>
            <span className="text-slate-400 text-[11px] truncate hidden md:inline">
              26 Oct 2026 · Rungta International Skills University, Bhilai
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <a
            href="#badge"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white px-3 py-1.5 rounded-full border border-white/10 hover:border-white/25 transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#ffb84d]" />
            <span>Badge</span>
          </a>
          <button
            onClick={onRegisterClick}
            className="cursor-pointer bg-gradient-to-r from-[#ff9900] to-[#ff7a00] hover:from-[#ffb84d] hover:to-[#ff9900] text-black font-extrabold text-xs px-4 py-2 rounded-full transition-all duration-200 shadow-[0_4px_16px_rgba(255,153,0,0.4)] hover:shadow-[0_6px_24px_rgba(255,153,0,0.6)] hover:-translate-y-0.5 flex items-center gap-1.5"
          >
            <span>Claim Ticket</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
