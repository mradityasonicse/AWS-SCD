import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

// ============================================================================
// Types & Interfaces
// ============================================================================

export interface TeamOrganizer {
  id: string;
  name: string;
  role: string;
  title: string;
  badge: string;
  initials: string;
  code: string;
  accentColor: string;
  tagline: string;
  bio: string;
  linkedin: string;
  scope: string[];
}

// ============================================================================
// Verified AWS SCD RISU Core Student Leadership Team Data
// ============================================================================

export const ORGANIZER_TEAM: TeamOrganizer[] = [
  {
    id: "uddyan",
    name: "Uddyan Sahu",
    role: "Team Lead · Lead Organiser",
    title: "AWS SBG Leader, RISU",
    badge: "Lead Organiser",
    initials: "US",
    code: "ORG-01",
    accentColor: "#FF9900", // AWS Signature Amber
    tagline: "Leading Central India's premier student cloud summit, speaker curation & flagship direction.",
    bio: "AWS Student Builder Group Leader at RISU. Spearheading the inaugural SCD Central India gathering, connecting student builders with AWS DevRel leadership.",
    linkedin: "https://www.linkedin.com/in/uddyan-sahu/",
    scope: ["Summit Direction", "DevRel Liaison", "Keynote Stage"],
  },
  {
    id: "gunjan",
    name: "Gunjan Ghangare",
    role: "Technical Lead · Co-Organiser",
    title: "AWS Community Enthusiast",
    badge: "Technical Lead",
    initials: "GG",
    code: "ORG-02",
    accentColor: "#38BDF8", // Cloud Blue
    tagline: "Architecting hands-on workshops, cloud labs & live hackathon infrastructure.",
    bio: "AWS community enthusiast focusing on serverless workloads and container architectures. Directs technical logistics, coding arena & live demos.",
    linkedin: "https://www.linkedin.com/in/gunjanghangare",
    scope: ["Cloud Workshops", "Live Arena", "Technical Logistics"],
  },
  {
    id: "chetna",
    name: "Chetna Sakarde",
    role: "Event & Operations Lead",
    title: "Operations Specialist",
    badge: "Operations Lead",
    initials: "CS",
    code: "ORG-03",
    accentColor: "#EC4899", // Operations Rose
    tagline: "Orchestrating stage logistics, hospitality, delegate check-in & welcome kits.",
    bio: "Directing on-ground event operations, venue management at RISU, volunteer brigades, and delegate experience for 500+ builders.",
    linkedin: "https://www.linkedin.com/company/aws-sbg-risu/",
    scope: ["Campus Hospitality", "Welcome Kits", "Registration Desk"],
  },
  {
    id: "netra",
    name: "Netra Khobragade",
    role: "Design & Brand Lead",
    title: "Visual Designer",
    badge: "Brand & Design",
    initials: "NK",
    code: "ORG-04",
    accentColor: "#A855F7", // Design Purple
    tagline: "Crafting the visual identity, summit stage animations & community brand aesthetic.",
    bio: "Leading creative direction, conference merchandise, stage motion visuals, and high-fidelity collateral for AWS SCD 2026.",
    linkedin: "https://www.linkedin.com/company/aws-sbg-risu/",
    scope: ["Visual Identity", "Stage Motion", "Summit Swag"],
  },
  {
    id: "aryan",
    name: "Aryan Vijaykar",
    role: "Community & Outreach Lead",
    title: "Cloud Outreach Strategist",
    badge: "Community Lead",
    initials: "AV",
    code: "ORG-05",
    accentColor: "#10B981", // Community Emerald
    tagline: "Uniting 500+ student builders across 15+ universities in Central India.",
    bio: "Fostering university partnerships, campus ambassador programs, and regional student developer chapters across Chhattisgarh.",
    linkedin: "https://www.linkedin.com/company/aws-sbg-risu/",
    scope: ["Campus Outreach", "15+ Colleges", "Builder Network"],
  },
];

// LinkedIn Brand Icon
const LinkedInIcon: React.FC<{ className?: string }> = ({ className = "w-3.5 h-3.5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.6 1.6 0 0 0 1.6-1.6 1.6 1.6 0 0 0-3.2 0 1.6 1.6 0 0 0 1.6 1.6m1.4 9.74v-8.37H5.06v8.37z" />
  </svg>
);

// ============================================================================
// Professional AWS Builder Identity Badge Component
// ============================================================================

interface BuilderBadgeProps {
  member: TeamOrganizer;
  isActive: boolean;
}

const BuilderBadgeCenterpiece: React.FC<BuilderBadgeProps> = ({ member, isActive }) => {
  return (
    <div
      className={`relative w-full aspect-[4/3] rounded-[24px] p-5 flex flex-col justify-between overflow-hidden transition-all duration-300 ${
        isActive
          ? "bg-gradient-to-br from-[#1F2937] via-[#141C24] to-[#0B0F14] border border-white/15 shadow-inner"
          : "bg-gradient-to-br from-[#161F2A] to-[#0D131A] border border-white/10"
      }`}
    >
      {/* Background Watermark Crest */}
      <div className="absolute -right-4 -bottom-4 w-32 h-32 opacity-[0.08] pointer-events-none select-none">
        <img
          src="/AWS_SBG.png"
          alt="AWS SBG"
          className="w-full h-full object-contain filter grayscale invert"
        />
      </div>

      {/* Micro Top Header */}
      <div className="flex items-center justify-between z-10">
        <div className="flex items-center gap-1.5">
          <span
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: member.accentColor }}
          />
          <span className="text-[10px] font-mono tracking-widest text-slate-400 font-semibold uppercase">
            AWS SBG RISU
          </span>
        </div>
        <span className="text-[10px] font-mono text-slate-500 font-bold">
          {member.code}
        </span>
      </div>

      {/* Central Monogram Crest */}
      <div className="flex items-center justify-center my-auto z-10">
        <div
          className={`relative w-20 h-20 rounded-2xl flex items-center justify-center font-black text-2xl transition-all duration-300 ${
            isActive
              ? "bg-[#0B0F15] text-white shadow-[0_0_25px_rgba(255,153,0,0.25)] border-2"
              : "bg-white/5 text-slate-300 border border-white/10"
          }`}
          style={{
            borderColor: isActive ? member.accentColor : "rgba(255,255,255,0.12)",
          }}
        >
          <span
            style={{
              fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif",
            }}
          >
            {member.initials}
          </span>

          {/* Active status pulse pip */}
          {isActive && (
            <span
              className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full border-2 border-[#141C24] flex items-center justify-center"
              style={{ backgroundColor: member.accentColor }}
            >
              <Sparkles className="w-2 h-2 text-black" />
            </span>
          )}
        </div>
      </div>

      {/* Bottom Credential Bar */}
      <div className="flex items-center justify-between z-10 pt-2 border-t border-white/5">
        <span className="text-[9px] font-mono uppercase tracking-wider text-slate-400">
          CENTRAL INDIA 2026
        </span>
        <span className="inline-flex items-center gap-1 text-[9px] font-mono text-emerald-400">
          <ShieldCheck className="w-3 h-3" />
          VERIFIED
        </span>
      </div>
    </div>
  );
};

// ============================================================================
// Main Master Component: Interactive Fanned Card Deck Carousel
// ============================================================================

export interface FannedCardDeckProps {
  members?: TeamOrganizer[];
  className?: string;
}

export const FannedCardDeck: React.FC<FannedCardDeckProps> = ({
  members = ORGANIZER_TEAM,
  className = "",
}) => {
  const [activeIndex, setActiveIndex] = useState(0); // Uddyan Sahu lead default
  const [isMobile, setIsMobile] = useState(false);
  const count = members.length;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile, { passive: true });
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Navigation handlers
  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % count);
  }, [count]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + count) % count);
  }, [count]);

  // Keyboard navigation (← and →)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        handlePrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        handleNext();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

  return (
    <div
      className={`relative w-full max-w-5xl mx-auto rounded-[28px] sm:rounded-[36px] bg-[#131921] border border-[#232F3E] shadow-2xl p-4 xs:p-6 sm:p-10 overflow-hidden flex flex-col items-center select-none backdrop-blur-2xl ${className}`}
    >
      {/* Top Frame Ambient Glow Line */}
      <div className="absolute top-0 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-[#FF9900]/40 to-transparent pointer-events-none" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-48 bg-[#FF9900]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Studio Frame Clean Top Bar */}
      <div className="w-full flex items-center justify-between pb-4 sm:pb-6 border-b border-[#232F3E] mb-2 relative z-10">
        <div className="flex items-center gap-2 sm:gap-2.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF9900] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF9900]"></span>
          </span>
          <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-slate-400 truncate">
            AWS SBG Leadership
          </span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <span className="text-xs font-mono text-slate-500">
            [ 0{activeIndex + 1} / 0{members.length} ]
          </span>
          <span className="text-[10px] sm:text-[11px] font-mono text-[#FF9900] bg-[#FF9900]/10 border border-[#FF9900]/30 px-2 sm:px-2.5 py-0.5 rounded-full font-bold">
            SCD 2026
          </span>
        </div>
      </div>

      {/* Deck Stage Frame */}
      <div className="relative w-full h-[450px] xs:h-[470px] sm:h-[490px] flex items-center justify-center">
        {members.map((member, index) => {
          // Symmetrical Parabolic Fan Wrapping
          let offset = index - activeIndex;
          const half = count / 2;
          while (offset > half) offset -= count;
          while (offset < -half) offset += count;

          const isActive = offset === 0;

          // Parabolic geometry calculations adapted for mobile vs desktop
          const spread = isMobile ? 38 : 115;
          const rotFactor = isMobile ? 3.5 : 6.5;
          const x = offset * spread;
          const y = Math.pow(Math.abs(offset), 1.6) * (isMobile ? 10 : 14);
          const rotate = offset * rotFactor;
          const scale = isActive ? 1.0 : Math.max(0.85, 1 - Math.abs(offset) * 0.05);
          const zIndex = 50 - Math.abs(offset) * 10;
          const opacity = isActive ? 1 : Math.max(0.4, 0.9 - Math.abs(offset) * 0.22);

          return (
            <motion.div
              key={member.id}
              data-card-index={index}
              style={{
                zIndex,
                transformOrigin: "center 85%",
              }}
              animate={{
                x,
                y,
                rotate,
                scale,
                opacity,
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 26,
                mass: 0.85,
              }}
              drag={isActive ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.25}
              onDragEnd={(_, info) => {
                if (info.offset.x < -35) handleNext();
                else if (info.offset.x > 35) handlePrev();
              }}
              onClick={() => {
                if (!isActive) {
                  setActiveIndex(index);
                }
              }}
              className={`absolute top-4 sm:top-6 w-[265px] xs:w-[285px] sm:w-[315px] h-[395px] xs:h-[415px] sm:h-[425px] rounded-[26px] sm:rounded-[30px] p-5 sm:p-6 flex flex-col justify-between cursor-pointer transition-colors duration-300 ease-out ${
                isActive
                  ? "bg-[#161E2D] text-white shadow-[0_30px_70px_-15px_rgba(255,153,0,0.25)] border-2 border-[#FF9900]"
                  : "bg-[#101622] text-slate-300 shadow-md border border-[#232F3E] hover:border-slate-700"
              }`}
            >
              {/* Card Top Row: Badge + Direct LinkedIn Connect */}
              <div className="flex items-center justify-between gap-2 relative z-10">
                <span
                  className={`text-[11px] font-mono uppercase tracking-widest font-semibold px-3 py-1 rounded-full transition-colors duration-300 ${
                    isActive
                      ? "bg-[#FF9900]/10 text-[#FF9900] border border-[#FF9900]/20"
                      : "bg-[#161E2D] text-slate-400 border border-[#232F3E]"
                  }`}
                >
                  {member.badge}
                </span>

                {/* Direct Connect on LinkedIn Button (Active card only) */}
                <AnimatePresence>
                  {isActive && (
                    <motion.a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 6, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 4, scale: 0.92 }}
                      transition={{ type: "spring", stiffness: 300, damping: 22 }}
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF9900] hover:bg-[#FFAC33] active:scale-95 text-[#0B0F17] text-xs font-black shadow-[0_2px_12px_rgba(255,153,0,0.35)] transition-all cursor-pointer font-sans"
                    >
                      <LinkedInIcon className="w-3.5 h-3.5 fill-current" />
                      <span>Connect</span>
                      <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                    </motion.a>
                  )}
                </AnimatePresence>
              </div>

              {/* Centerpiece: Verified AWS Builder Identity Badge */}
              <div className="my-auto py-2">
                <BuilderBadgeCenterpiece member={member} isActive={isActive} />
              </div>

              {/* Card Bottom Meta */}
              <div className="pt-2">
                <div className="flex items-baseline justify-between mb-1">
                  <h4
                    style={{
                      fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif",
                    }}
                    className={`font-black tracking-tight transition-colors duration-300 ${
                      isActive ? "text-xl text-white" : "text-base text-slate-300"
                    }`}
                  >
                    {member.name}
                  </h4>
                  <span
                    className={`text-[11px] font-mono transition-colors duration-300 ${
                      isActive ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    {member.code}
                  </span>
                </div>

                <p
                  style={{
                    fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif",
                  }}
                  className={`text-xs font-bold transition-colors duration-300 ${
                    isActive ? "text-[#FF9900] mb-2" : "text-slate-400 mb-0 truncate"
                  }`}
                >
                  {member.role}
                </p>

                {isActive && (
                  <p
                    style={{
                      fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif",
                    }}
                    className="text-xs leading-relaxed line-clamp-2 text-slate-300 transition-colors duration-300"
                  >
                    {member.tagline}
                  </p>
                )}
              </div>

              {/* Subtle Active Accent Lightbar */}
              {isActive && (
                <div
                  className="absolute bottom-0 left-8 right-8 h-[2px] rounded-full opacity-70"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${member.accentColor || '#FF9900'}, transparent)`,
                  }}
                />
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Interactive Controls */}
      <div className="mt-4 flex flex-col items-center justify-center gap-3 z-20">
        <div className="flex items-center gap-2">
          {/* Previous Card Button */}
          <button
            type="button"
            onClick={handlePrev}
            className="w-10 h-10 rounded-full bg-[#161E2D] hover:bg-[#232F3E] active:scale-95 text-slate-300 border border-[#232F3E] shadow-sm flex items-center justify-center transition-all cursor-pointer"
            aria-label="Previous card"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Segmented Dot Indicators */}
          <div className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-[#161E2D] border border-[#232F3E] backdrop-blur-md">
            {members.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveIndex(i)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  i === activeIndex
                    ? "w-6 h-2 bg-[#FF9900]"
                    : "w-2 h-2 bg-[#232F3E] hover:bg-slate-600"
                }`}
                aria-label={`Go to card ${i + 1}`}
              />
            ))}
          </div>

          {/* Next Card Button */}
          <button
            type="button"
            onClick={handleNext}
            className="w-10 h-10 rounded-full bg-[#161E2D] hover:bg-[#232F3E] active:scale-95 text-slate-300 border border-[#232F3E] shadow-sm flex items-center justify-center transition-all cursor-pointer"
            aria-label="Next card"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FannedCardDeck;
