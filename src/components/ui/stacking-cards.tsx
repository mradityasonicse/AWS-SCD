// author: Khoa Phan <https://www.pldkhoa.dev> - Enhanced for 60FPS fluid physics
"use client";

import {
  createContext,
  useContext,
  useRef,
  type HTMLAttributes,
  type PropsWithChildren,
} from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  type MotionValue,
  type UseScrollOptions,
} from "motion/react";

import { cn } from "@/lib/utils";

interface StackingCardsProps
  extends PropsWithChildren, HTMLAttributes<HTMLDivElement> {
  scrollOptions?: UseScrollOptions;
  scaleMultiplier?: number;
  totalCards: number;
  smoothPhysics?: boolean;
}

interface StackingCardItemProps
  extends HTMLAttributes<HTMLDivElement>, PropsWithChildren {
  index: number;
  topPosition?: string;
}

const StackingCardsContext = createContext<{
  progress: MotionValue<number>;
  scaleMultiplier: number;
  totalCards: number;
} | null>(null);

export const useStackingCardsContext = () => {
  const context = useContext(StackingCardsContext);
  if (!context)
    throw new Error("StackingCardItem must be used within StackingCards");
  return context;
};

export default function StackingCards({
  children,
  className,
  scrollOptions,
  scaleMultiplier = 0.035,
  totalCards,
  smoothPhysics = true,
  ...props
}: StackingCardsProps) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"],
    ...scrollOptions,
    target: targetRef,
  });

  // Silky 60FPS spring damping (tuned for instant response without lag or overshoot)
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    mass: 0.12,
    restDelta: 0.0005,
  });

  // Detect touch screens to bypass spring latency on mobile
  const isTouch = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);
  const activeProgress = (smoothPhysics && !isTouch) ? smoothProgress : scrollYProgress;

  return (
    <StackingCardsContext.Provider
      value={{ progress: activeProgress, scaleMultiplier, totalCards }}
    >
      <div className={cn("relative", className)} ref={targetRef} {...props}>
        {children}
      </div>
    </StackingCardsContext.Provider>
  );
}

export const StackingCardItem = ({
  index,
  topPosition,
  className,
  children,
  ...props
}: StackingCardItemProps) => {
  const {
    progress,
    scaleMultiplier,
    totalCards = 1,
  } = useStackingCardsContext();

  const scaleTo = 1 - (totalCards - index - 1) * scaleMultiplier;
  const startRatio = index / totalCards;
  const endRatio = 1;
  const rangeScale = [startRatio, endRatio];

  const scale = useTransform(progress, rangeScale, [1, Math.max(0.84, scaleTo)]);
  const overlayOpacity = useTransform(
    progress,
    rangeScale,
    [0, Math.min(0.42, (totalCards - index - 1) * 0.07)]
  );

  // Responsive sticky top offset keeping visible tabs neatly fanned
  const top = topPosition ?? `calc(90px + ${index * 13}px)`;

  return (
    <div
      className={cn("sticky", className)}
      style={{
        top,
      }}
      {...props}
    >
      <motion.div
        className="origin-top relative w-full h-full transform-gpu"
        style={{
          scale,
          willChange: "transform",
        }}
      >
        {children}
        {/* Subtle Darkening Overlay as subsequent cards stack over this card */}
        <motion.div
          className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-black pointer-events-none z-30"
          style={{
            opacity: overlayOpacity,
            willChange: "opacity",
          }}
        />
      </motion.div>
    </div>
  );
};
