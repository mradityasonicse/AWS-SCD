import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  ShieldCheck,
  Sparkles,
  Play,
  Pause,
  FileText,
  Compass,
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
  image?: string;
}

// ============================================================================
// Verified AWS SCD Rungta International Skills University Core Student Leadership Team Data
// ============================================================================

export const ORGANIZER_TEAM: TeamOrganizer[] = [
  {
    id: "uddyan",
    name: "Uddyan Sahu",
    role: "Team Lead · Lead Organiser",
    title: "AWS SBG Leader, Rungta International Skills University",
    badge: "Lead Organiser",
    initials: "US",
    code: "ORG-01",
    accentColor: "#AD5CFF", // Electric Purple
    tagline: "Leading Central India's premier student cloud summit, speaker curation & flagship direction.",
    bio: "AWS Student Builder Group Leader at Rungta International Skills University. Spearheading the inaugural SCD Central India gathering, connecting student builders with AWS DevRel leadership.",
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
    accentColor: "#FF9900", // AWS Smile Orange
    tagline: "Architecting hands-on workshops, cloud labs & live hackathon infrastructure.",
    bio: "AWS community enthusiast focusing on serverless workloads and container architectures. Directs technical logistics, coding arena & live demos.",
    linkedin: "https://www.linkedin.com/in/gunjanghangare",
    scope: ["Cloud Workshops", "Live Arena", "Technical Logistics"],
  },
  {
    id: "aditya",
    name: "ADITYA SONI",
    role: "Co-Tech Lead",
    title: "Cloud & Systems Architect",
    badge: "Co-Tech Lead",
    initials: "AS",
    code: "ORG-03",
    accentColor: "#AD5CFF", // Electric Purple
    image: "/aditya_soni.jpg",
    tagline: "Architecting cloud infrastructure, developer pipelines & high-concurrency summit systems.",
    bio: "Co-Technical Lead at AWS SCD Rungta International Skills University. Engineering production cloud workflows, interactive developer platforms, and technical arena infra for 500+ builders.",
    linkedin: "https://www.linkedin.com/in/aditya-soni-cse/",
    scope: ["Cloud Infra", "DevOps Pipelines", "Technical Arena"],
  },
  {
    id: "chetna",
    name: "Chetna Sakarde",
    role: "Event & Operations Lead",
    title: "Operations Specialist",
    badge: "Operations Lead",
    initials: "CS",
    code: "ORG-04",
    accentColor: "#42B4FF", // Cloud Blue
    tagline: "Orchestrating stage logistics, hospitality, delegate check-in & welcome kits.",
    bio: "Directing on-ground event operations, venue management at Rungta International Skills University, volunteer brigades, and delegate experience for 500+ builders.",
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
    code: "ORG-05",
    accentColor: "#FF57EA", // Neon Pink
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
    code: "ORG-06",
    accentColor: "#00E582", // Cyber Green
    tagline: "Uniting 500+ student builders across 15+ universities in Central India.",
    bio: "Fostering university partnerships, campus ambassador programs, and regional student developer chapters across Chhattisgarh.",
    linkedin: "https://www.linkedin.com/company/aws-sbg-risu/",
    scope: ["Campus Outreach", "15+ Colleges", "Builder Network"],
  },
  {
    id: "mentors",
    name: "Faculty Mentors, Rungta International Skills University",
    role: "Academic Patrons · Advisory",
    title: "Faculty Advisory Board, Rungta International Skills University",
    badge: "Faculty Mentors",
    initials: "RM",
    code: "ORG-07",
    accentColor: "#AD5CFF", // Electric Purple
    tagline: "Academic patronage, institutional support & mentor guidance from Rungta International Skills University.",
    bio: "Guiding student leaders, coordinating university infrastructure, and fostering academic excellence in cloud education.",
    linkedin: "https://www.linkedin.com/company/aws-sbg-risu/",
    scope: ["Academic Patronage", "Institutional Ops", "Curriculum Link"],
  },
  {
    id: "aditya-mohan",
    name: "Aditya Mohan",
    role: "Technical Operations · Sub Crew",
    title: "Cloud Systems & Arena Coordinator",
    badge: "Sub Crew",
    initials: "AM",
    code: "CREW-01",
    accentColor: "#42B4FF", // Cloud Blue
    tagline: "Managing technical arena operations, cloud lab support & attendee assistance.",
    bio: "Coordinating hands-on lab setups, speaker stage hardware, and delegate tech support at AWS SCD 2026.",
    linkedin: "https://www.linkedin.com/company/aws-sbg-risu/",
    scope: ["Lab Setup", "Arena Ops", "Tech Support"],
  },
  {
    id: "yash-raj",
    name: "Yash Raj Singh",
    role: "Community & Hospitality · Sub Crew",
    title: "Student Delegations Coordinator",
    badge: "Sub Crew",
    initials: "YS",
    code: "CREW-02",
    accentColor: "#00E582", // Cyber Green
    tagline: "Coordinating student delegations, attendee hospitality & check-in flow.",
    bio: "Welcoming 500+ builders, managing fast-track accreditation, and organizing student cohort hospitality.",
    linkedin: "https://www.linkedin.com/company/aws-sbg-risu/",
    scope: ["Delegations", "Hospitality", "Attendee Flow"],
  },
  {
    id: "abhishek-yadav",
    name: "Abhishek Kumar Yadav",
    role: "Logistics & Stage Ops · Sub Crew",
    title: "Event Logistics & Stage Runner",
    badge: "Sub Crew",
    initials: "AY",
    code: "CREW-03",
    accentColor: "#FF9900", // AWS Orange
    tagline: "Driving stage transitions, live streaming logistics & AV coordination.",
    bio: "Managing real-time stage AV sync, speaker microphone rotations, and auditorium logistics.",
    linkedin: "https://www.linkedin.com/company/aws-sbg-risu/",
    scope: ["Stage Ops", "AV Logistics", "Event Sync"],
  },
  {
    id: "harsh-shandilya",
    name: "Harsh Kumar Shandilya",
    role: "Media & Social Outreach · Sub Crew",
    title: "Media & Social Highlights Lead",
    badge: "Sub Crew",
    initials: "HS",
    code: "CREW-04",
    accentColor: "#FF57EA", // Neon Pink
    tagline: "Capturing high-energy summit moments, social stories & community reels.",
    bio: "Documenting live keynotes, attendee interviews, and community highlights across social platforms.",
    linkedin: "https://www.linkedin.com/company/aws-sbg-risu/",
    scope: ["Live Media", "Social Highlights", "Photo Ops"],
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
      className="relative w-full rounded-xl sm:rounded-2xl p-3 sm:p-4 flex flex-col justify-between overflow-hidden"
      style={{
        height: isActive ? "145px" : "130px",
        background: isActive
          ? "linear-gradient(135deg, rgba(26, 34, 46, 0.95) 0%, rgba(15, 21, 29, 0.95) 100%)"
          : "linear-gradient(135deg, rgba(18, 24, 34, 0.8) 0%, rgba(12, 16, 23, 0.9) 100%)",
        border: isActive
          ? `1px solid ${member.accentColor}50`
          : "1px solid rgba(255, 255, 255, 0.07)",
        boxShadow: isActive
          ? `inset 0 1px 0 rgba(255, 255, 255, 0.12), 0 8px 20px ${member.accentColor}18`
          : "none",
      }}
    >
      {/* Background Watermark Crest */}
      <div className="absolute -right-2 -bottom-2 w-24 h-24 opacity-[0.06] pointer-events-none select-none">
        <img
          src="/AWS_SBG.png"
          alt="AWS SBG"
          className="w-full h-full object-contain filter grayscale invert"
          loading="lazy"
        />
      </div>

      {/* Micro Top Header */}
      <div className="flex items-center justify-between z-10">
        <div className="flex items-center gap-1.5">
          <span
            className="w-2 h-2 rounded-full"
            style={{
              backgroundColor: member.accentColor,
              boxShadow: isActive ? `0 0 6px ${member.accentColor}` : "none",
            }}
          />
          <span className="text-[10px] font-mono tracking-widest text-slate-400 font-semibold uppercase">
            AWS SBG RUNGTA INTERNATIONAL SKILLS UNIVERSITY
          </span>
        </div>
      </div>

      {/* Central Portrait or Monogram Crest */}
      <div className="flex items-center justify-center my-auto z-10">
        <div
          className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center font-black text-xl sm:text-2xl overflow-hidden shadow-inner"
          style={{
            backgroundColor: isActive ? "var(--theme-surface-elevated, #2E2A2C)" : "rgba(255, 255, 255, 0.04)",
            color: isActive ? "#FFFFFF" : "#CBD5E1",
            border: `2px solid ${isActive ? member.accentColor : "rgba(255,255,255,0.12)"}`,
            boxShadow: isActive ? `0 0 14px ${member.accentColor}35` : "none",
          }}
        >
          {member.image ? (
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          ) : (
            <span
              style={{
                fontFamily: "'Space Grotesk', -apple-system, sans-serif",
                color: isActive ? member.accentColor : "#E2E8F0",
              }}
            >
              {member.initials}
            </span>
          )}

          {/* Active status pulse pip */}
          {isActive && (
            <span
              className="absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 border-[#141C24] flex items-center justify-center z-20"
              style={{ backgroundColor: member.accentColor }}
            >
              <Sparkles className="w-1.5 h-1.5 text-black" />
            </span>
          )}
        </div>
      </div>

      {/* Bottom Credential Bar */}
      <div className="flex items-center justify-between z-10 pt-1.5 border-t border-white/5">
        <span className="text-[8px] sm:text-[9px] font-mono uppercase tracking-wider text-slate-400">
          CENTRAL INDIA 2026
        </span>
        <span className="inline-flex items-center gap-1 text-[8px] sm:text-[9px] font-mono text-emerald-400 font-semibold">
          <ShieldCheck className="w-2.5 h-2.5 text-emerald-400 shrink-0" />
          VERIFIED BUILDER
        </span>
      </div>
    </div>
  );
};

// ============================================================================
// Adaptive Responsive Geometry Config
// ============================================================================

interface GeometryConfig {
  cardWidth: number;
  cardHeight: number;
  spread: number;
  rotFactor: number;
  yFactor: number;
  maxVisibleOffset: number;
}

function calculateGeometry(width: number): GeometryConfig {
  if (width < 420) {
    // Narrow Mobile (iPhone SE 375px, 360px Android)
    const cardWidth = Math.min(Math.floor(width - 48), 280);
    return {
      cardWidth,
      cardHeight: 440,
      spread: 24,
      rotFactor: 2.0,
      yFactor: 5,
      maxVisibleOffset: 1, // Only 1 adjacent card visible on compact mobile
    };
  } else if (width < 640) {
    // Standard Mobile (iPhone 14/15 390px, Galaxy 412px)
    const cardWidth = Math.min(Math.floor(width - 56), 295);
    return {
      cardWidth,
      cardHeight: 450,
      spread: 32,
      rotFactor: 2.5,
      yFactor: 6,
      maxVisibleOffset: 1, // Clean, no horizontal overflow
    };
  } else if (width < 840) {
    // Phablets & Small Tablets (768px iPad in portrait)
    return {
      cardWidth: 300,
      cardHeight: 460,
      spread: 58,
      rotFactor: 3.8,
      yFactor: 8,
      maxVisibleOffset: 2, // 2 cards visible each side
    };
  } else if (width < 1080) {
    // Tablets / Small Laptops
    return {
      cardWidth: 315,
      cardHeight: 470,
      spread: 85,
      rotFactor: 4.8,
      yFactor: 10,
      maxVisibleOffset: 3,
    };
  } else {
    // Desktop & Widescreen
    return {
      cardWidth: 325,
      cardHeight: 475,
      spread: 110,
      rotFactor: 5.5,
      yFactor: 12,
      maxVisibleOffset: 3,
    };
  }
}

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
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [activeTab, setActiveTab] = useState<"overview" | "bio">("overview");
  const [containerWidth, setContainerWidth] = useState<number>(1000);

  const count = members.length;
  const stageRef = useRef<HTMLDivElement>(null);
  const wheelLockRef = useRef<boolean>(false);
  const touchStartXRef = useRef<number | null>(null);
  const touchStartYRef = useRef<number | null>(null);
  const isSwipingHorizontalRef = useRef<boolean | null>(null);

  // ResizeObserver for dynamic container-relative responsiveness
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const updateWidth = () => {
      const width = stage.getBoundingClientRect().width || window.innerWidth;
      setContainerWidth(width);
    };

    updateWidth();

    const resizeObserver = new ResizeObserver(() => {
      updateWidth();
    });

    resizeObserver.observe(stage);
    window.addEventListener("resize", updateWidth, { passive: true });

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  const geo = calculateGeometry(containerWidth);

  // Navigation handlers
  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % count);
    setActiveTab("overview");
  }, [count]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + count) % count);
    setActiveTab("overview");
  }, [count]);

  // Subtle auto-rotation when user is not actively interacting
  useEffect(() => {
    if (isHovered || !isAutoPlaying) return;
    const interval = setInterval(handleNext, 6000);
    return () => clearInterval(interval);
  }, [isHovered, isAutoPlaying, handleNext]);

  // Keyboard navigation (← and →)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA"
      ) {
        return;
      }

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

  // Buttery Trackpad / Mouse Wheel Horizontal Flick Handler
  const handleWheel = (e: React.WheelEvent) => {
    if (Math.abs(e.deltaX) > 25 && !wheelLockRef.current) {
      wheelLockRef.current = true;
      if (e.deltaX > 0) {
        handleNext();
      } else {
        handlePrev();
      }
      setTimeout(() => {
        wheelLockRef.current = false;
      }, 400);
    }
  };

  // Full-Stage Touch Event Listeners for 120Hz Mobile Gesture Handling
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchStartYRef.current = e.touches[0].clientY;
    isSwipingHorizontalRef.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null || touchStartYRef.current === null) return;

    const diffX = e.touches[0].clientX - touchStartXRef.current;
    const diffY = e.touches[0].clientY - touchStartYRef.current;

    if (isSwipingHorizontalRef.current === null) {
      if (Math.abs(diffX) > 8 || Math.abs(diffY) > 8) {
        isSwipingHorizontalRef.current = Math.abs(diffX) > Math.abs(diffY);
      }
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;

    const endX = e.changedTouches[0].clientX;
    const diffX = endX - touchStartXRef.current;

    if (isSwipingHorizontalRef.current && Math.abs(diffX) > 35) {
      if (diffX < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }

    touchStartXRef.current = null;
    touchStartYRef.current = null;
    isSwipingHorizontalRef.current = null;
  };

  const activeOrganizer = members[activeIndex];

  return (
    <div
      ref={stageRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className={`relative w-full max-w-5xl mx-auto rounded-2xl sm:rounded-3xl bg-white/[0.03] backdrop-blur-2xl border border-white/10 shadow-2xl p-4 sm:p-8 md:p-10 overflow-hidden flex flex-col items-center select-none ${className}`}
      style={{
        perspective: "1200px",
        touchAction: "pan-y",
      }}
    >
      {/* Background Ambient Glow matching active leader */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[450px] rounded-full opacity-15 blur-[90px] sm:blur-[130px] pointer-events-none transition-colors duration-700"
        style={{
          backgroundColor: activeOrganizer.accentColor,
        }}
      />

      {/* Studio Frame Clean Top Bar */}
      <div className="w-full flex items-center justify-between pb-4 sm:pb-6 border-b border-[var(--theme-border,#3E3E3E)] mb-2 relative z-10">
        <div className="flex items-center gap-2 sm:gap-3">
          <span
            className="w-2.5 h-2.5 rounded-full transition-colors duration-500 shadow-sm"
            style={{
              backgroundColor: activeOrganizer.accentColor,
              boxShadow: `0 0 10px ${activeOrganizer.accentColor}`,
            }}
          />
          <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-slate-300 truncate">
            AWS SBG Leadership
          </span>
          <span className="hidden sm:inline-block text-slate-600 font-mono text-xs">
            /
          </span>
          <span
            className="hidden sm:inline-block text-[11px] font-mono font-semibold transition-colors duration-300"
            style={{ color: activeOrganizer.accentColor }}
          >
            {activeOrganizer.name}
          </span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* Autoplay Play/Pause Toggle */}
          <button
            type="button"
            onClick={() => setIsAutoPlaying((prev) => !prev)}
            className="p-1.5 rounded-lg bg-[#161E2D] hover:bg-[#232F3E] text-slate-400 hover:text-white transition-colors cursor-pointer border border-[#232F3E]"
            title={isAutoPlaying ? "Pause auto-rotation" : "Resume auto-rotation"}
            aria-label={isAutoPlaying ? "Pause auto-rotation" : "Resume auto-rotation"}
          >
            {isAutoPlaying ? (
              <Pause className="w-3.5 h-3.5" />
            ) : (
              <Play className="w-3.5 h-3.5" />
            )}
          </button>

          <span className="text-xs font-mono text-slate-400">
            [ 0{activeIndex + 1} / 0{count} ]
          </span>

          <span
            className="text-[10px] sm:text-[11px] font-mono px-2 sm:px-2.5 py-0.5 rounded-full font-bold transition-colors duration-500"
            style={{
              color: activeOrganizer.accentColor,
              backgroundColor: `${activeOrganizer.accentColor}18`,
              border: `1px solid ${activeOrganizer.accentColor}35`,
            }}
          >
            SCD 2026
          </span>
        </div>
      </div>

      {/* Deck Stage Frame with 3D Space */}
      <div
        className="relative w-full flex items-center justify-center overflow-x-clip max-w-full"
        style={{
          height: `${geo.cardHeight + 30}px`,
          transformStyle: "preserve-3d",
        }}
      >
        {members.map((member, index) => {
          // Symmetrical Parabolic Fan Wrapping
          let offset = index - activeIndex;
          const half = count / 2;
          while (offset > half) offset -= count;
          while (offset < -half) offset += count;

          const absOffset = Math.abs(offset);
          const isActive = offset === 0;

          // Hide cards beyond max visible depth to prevent any overflow or clipping
          if (absOffset > geo.maxVisibleOffset) {
            return null;
          }

          // Parabolic geometry calculations adapted dynamically for current width
          const x = offset * geo.spread;
          const y = Math.pow(absOffset, 1.4) * (geo.yFactor * 0.6);
          const rotate = offset * geo.rotFactor;
          const scale = isActive ? 1.0 : Math.max(0.85, 1 - absOffset * 0.06);
          const zIndex = 50 - absOffset * 10;
          const opacity = isActive
            ? 1
            : Math.max(0.2, 0.9 - absOffset * 0.32);

          return (
            <motion.div
              key={member.id}
              data-card-index={index}
              style={{
                zIndex,
                width: `${geo.cardWidth}px`,
                height: `${geo.cardHeight}px`,
                transformOrigin: "center 85%",
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                touchAction: "pan-y",
                border: isActive ? `2px solid ${member.accentColor}` : undefined,
                boxShadow: isActive
                  ? `0 0 24px ${member.accentColor}25, 0 16px 32px rgba(0,0,0,0.4)`
                  : undefined,
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
                damping: 28,
                mass: 0.8,
              }}
              drag={isActive ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                if (info.offset.x < -30) handleNext();
                else if (info.offset.x > 30) handlePrev();
              }}
              onClick={() => {
                if (!isActive) {
                  setActiveIndex(index);
                  setActiveTab("overview");
                }
              }}
              className={`absolute top-4 rounded-2xl sm:rounded-3xl p-4 sm:p-5 flex flex-col justify-between cursor-pointer overflow-hidden ${
                isActive
                  ? "bg-white/[0.06] backdrop-blur-xl text-white shadow-2xl border border-white/20"
                  : "bg-white/[0.02] backdrop-blur-md text-slate-300 shadow-md border border-white/10 hover:border-white/20"
              }`}
            >
              {/* Card Top Row: Badge + Direct LinkedIn Connect */}
              <div className="flex items-center justify-between gap-2 relative z-10">
                <span
                  className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider font-semibold px-2.5 sm:px-3 py-1 rounded-full"
                  style={{
                    backgroundColor: isActive
                      ? `${member.accentColor}20`
                      : "var(--theme-surface-elevated, #303030)",
                    color: isActive ? member.accentColor : "#94A3B8",
                    border: `1px solid ${
                      isActive ? `${member.accentColor}45` : "var(--theme-border, #3E3E3E)"
                    }`,
                  }}
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
                      initial={{ opacity: 0, y: 4, scale: 0.92 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 3, scale: 0.95 }}
                      transition={{ duration: 0.18 }}
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[#0A0D14] text-xs font-bold shadow-md cursor-pointer font-sans transition-transform active:scale-95"
                      style={{
                        backgroundColor: member.accentColor,
                      }}
                    >
                      <LinkedInIcon className="w-3.5 h-3.5 fill-current" />
                      <span>Connect</span>
                      <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                    </motion.a>
                  )}
                </AnimatePresence>
              </div>

              {/* Centerpiece: Verified AWS Builder Identity Badge */}
              <div className="my-auto py-1">
                <BuilderBadgeCenterpiece member={member} isActive={isActive} />
              </div>

              {/* Card Bottom Meta (Active card gets full credentials & details, background cards stay sleek & minimal) */}
              {isActive ? (
                <div className="pt-2 z-10 flex flex-col justify-end overflow-hidden">
                  <div className="flex items-baseline justify-between mb-0.5">
                    <h4
                      style={{
                        fontFamily: "'Space Grotesk', -apple-system, sans-serif",
                      }}
                      className="text-base sm:text-lg font-black tracking-tight text-white"
                    >
                      {member.name}
                    </h4>
                    <span
                      className="text-[10px] font-mono shrink-0 ml-2 font-bold"
                      style={{ color: member.accentColor }}
                    >
                      {member.code}
                    </span>
                  </div>

                  <p
                    style={{
                      fontFamily: "'Space Grotesk', -apple-system, sans-serif",
                      color: member.accentColor,
                    }}
                    className="text-xs font-semibold mb-1"
                  >
                    {member.role}
                  </p>

                  <div className="mt-1">
                    {/* View Switcher: Mission vs Bio */}
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveTab("overview");
                        }}
                        className={`text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 rounded cursor-pointer transition-colors flex items-center gap-1 ${
                          activeTab === "overview"
                            ? "bg-white/15 text-white font-bold"
                            : "text-slate-400 hover:text-slate-200 bg-white/5"
                        }`}
                      >
                        <Compass className="w-2.5 h-2.5" />
                        Mission
                      </button>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveTab("bio");
                        }}
                        className={`text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 rounded cursor-pointer transition-colors flex items-center gap-1 ${
                          activeTab === "bio"
                            ? "bg-white/15 text-white font-bold"
                            : "text-slate-400 hover:text-slate-200 bg-white/5"
                        }`}
                      >
                        <FileText className="w-2.5 h-2.5" />
                        Bio
                      </button>
                    </div>

                    {activeTab === "overview" ? (
                      <div>
                        <p className="text-[11px] leading-snug text-slate-300 line-clamp-2 mb-2 font-sans">
                          {member.tagline}
                        </p>
                        {/* Scope Pills */}
                        <div className="flex flex-wrap gap-1">
                          {member.scope.map((tag) => (
                            <span
                              key={tag}
                              className="text-[9px] font-mono px-2 py-0.5 rounded bg-black/50 text-slate-300 border border-white/10"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <p className="text-[11px] leading-snug text-slate-300 line-clamp-3 font-sans">
                        {member.bio}
                      </p>
                    )}
                  </div>
                </div>
              ) : (
                /* Subtle, minimalist label on background cards to eliminate clutter */
                <div className="pt-2 z-10 flex items-center justify-between opacity-40">
                  <span className="text-[10px] font-mono text-slate-300 truncate font-semibold uppercase tracking-wider">
                    {member.name}
                  </span>
                  <span className="text-[9px] font-mono text-slate-400">
                    {member.code}
                  </span>
                </div>
              )}

              {/* Subtle Active Accent Lightbar */}
              {isActive && (
                <div
                  className="absolute bottom-0 left-6 right-6 h-[2px] rounded-full opacity-90"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${member.accentColor}, transparent)`,
                  }}
                />
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Interactive Controls */}
      <div className="mt-4 sm:mt-6 flex flex-col items-center justify-center gap-3 z-20 w-full max-w-sm">
        <div className="flex items-center gap-3">
          {/* Previous Card Button */}
          <button
            type="button"
            onClick={handlePrev}
            className="w-10 h-10 rounded-full bg-[#161E2D] hover:bg-[#232F3E] text-slate-300 hover:text-white active:scale-95 border border-[#232F3E] shadow-sm flex items-center justify-center transition-transform cursor-pointer"
            aria-label="Previous card"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Segmented Dot Indicators */}
          <div className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-[#161E2D] border border-[#232F3E]">
            {members.map((member, i) => (
              <button
                key={member.id}
                type="button"
                onClick={() => {
                  setActiveIndex(i);
                  setActiveTab("overview");
                }}
                className="transition-all duration-300 rounded-full cursor-pointer"
                style={{
                  width: i === activeIndex ? "24px" : "8px",
                  height: "8px",
                  backgroundColor:
                    i === activeIndex ? member.accentColor : "#232F3E",
                  boxShadow:
                    i === activeIndex ? `0 0 8px ${member.accentColor}80` : "none",
                }}
                aria-label={`Go to ${member.name}'s card`}
              />
            ))}
          </div>

          {/* Next Card Button */}
          <button
            type="button"
            onClick={handleNext}
            className="w-10 h-10 rounded-full bg-[#161E2D] hover:bg-[#232F3E] text-slate-300 hover:text-white active:scale-95 border border-[#232F3E] shadow-sm flex items-center justify-center transition-transform cursor-pointer"
            aria-label="Next card"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Gestures Helper hint on touch & desktop */}
        <p className="text-[10px] sm:text-[11px] font-mono text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
          <span>Swipe or use arrow keys · Tap any card to focus</span>
        </p>
      </div>
    </div>
  );
};

export default FannedCardDeck;
