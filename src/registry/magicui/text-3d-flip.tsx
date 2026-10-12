"use client";

import React, {
  memo,
  useCallback,
  useMemo,
  useState,
  useRef,
  type ElementType,
} from "react";
import { motion, useInView } from "motion/react";
import { cn } from "@/lib/utils";

const splitIntoCharacters = (text: string): string[] => {
  if (typeof Intl !== "undefined" && "Segmenter" in Intl) {
    const segmenter = new Intl.Segmenter("en", { granularity: "grapheme" });
    return Array.from(segmenter.segment(text), ({ segment }) => segment);
  }
  return Array.from(text);
};

const extractTextFromChildren = (children: React.ReactNode): string => {
  if (children == null) return "";
  if (typeof children === "string") return children;
  if (typeof children === "number") return String(children);

  if (Array.isArray(children)) {
    return children.map(extractTextFromChildren).join("");
  }

  if (React.isValidElement(children)) {
    const props = children.props as Record<string, unknown>;
    const childText = props.children as React.ReactNode;
    if (childText != null) {
      return extractTextFromChildren(childText);
    }
  }

  return "";
};

export interface Text3DFlipProps {
  children: React.ReactNode;
  as?: ElementType;
  className?: string;
  textClassName?: string;
  flipTextClassName?: string;
  staggerDuration?: number;
  staggerFrom?: "first" | "last" | "center" | number | "random";
  rotateDirection?: "top" | "bottom" | "right" | "left";
  [key: string]: any;
}

interface CharBoxProps {
  char: string;
  charIndex: number;
  totalChars: number;
  isFlipped: boolean;
  staggerDuration: number;
  rotateDirection: "top" | "bottom" | "right" | "left";
  textClassName?: string;
  flipTextClassName?: string;
}

const CharBox = memo(
  ({
    char,
    charIndex,
    isFlipped,
    staggerDuration,
    rotateDirection = "top",
    textClassName,
    flipTextClassName,
  }: CharBoxProps) => {
    const delay = charIndex * staggerDuration;
    const isTop = rotateDirection === "top" || rotateDirection === "left";

    return (
      <span
        className="relative inline-block overflow-hidden select-none align-top"
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d",
          lineHeight: "1.08",
          paddingBottom: "0.06em",
        }}
      >
        {/* Front Face (Default State) */}
        <motion.span
          className={cn("inline-block", textClassName)}
          initial={false}
          animate={
            isFlipped
              ? {
                  y: isTop ? "-105%" : "105%",
                  opacity: 0,
                  rotateX: isTop ? 75 : -75,
                }
              : {
                  y: "0%",
                  opacity: 1,
                  rotateX: 0,
                }
          }
          transition={{
            type: "spring",
            stiffness: 320,
            damping: 24,
            mass: 0.7,
            delay,
          }}
          style={{
            transformOrigin: isTop ? "50% 100%" : "50% 0%",
            willChange: "transform, opacity",
          }}
        >
          {char}
        </motion.span>

        {/* Back/Flip Face (Active State) */}
        <motion.span
          className={cn(
            "absolute inset-0 inline-block pointer-events-none",
            flipTextClassName
          )}
          initial={false}
          animate={
            isFlipped
              ? {
                  y: "0%",
                  opacity: 1,
                  rotateX: 0,
                }
              : {
                  y: isTop ? "105%" : "-105%",
                  opacity: 0,
                  rotateX: isTop ? -75 : 75,
                }
          }
          transition={{
            type: "spring",
            stiffness: 320,
            damping: 24,
            mass: 0.7,
            delay,
          }}
          style={{
            transformOrigin: isTop ? "50% 0%" : "50% 100%",
            willChange: "transform, opacity",
          }}
        >
          {char}
        </motion.span>
      </span>
    );
  }
);

CharBox.displayName = "CharBox";

export const Text3DFlip: React.FC<Text3DFlipProps> = ({
  children,
  as: ElementTag = "p",
  className,
  textClassName,
  flipTextClassName,
  staggerDuration = 0.025,
  rotateDirection = "top",
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLElement | null>(null);
  const inView = useInView(containerRef, { once: true, margin: "-40px" });

  const text = useMemo(() => {
    try {
      return extractTextFromChildren(children);
    } catch {
      return "";
    }
  }, [children]);

  const words = useMemo(() => {
    return text.split(" ").map((word, i, arr) => ({
      characters: splitIntoCharacters(word),
      needsSpace: i !== arr.length - 1,
    }));
  }, [text]);

  const totalChars = useMemo(() => {
    return words.reduce((acc, w) => acc + w.characters.length, 0);
  }, [words]);

  let runningCharIndex = 0;

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  return (
    <ElementTag
      ref={containerRef}
      className={cn(
        "relative inline-flex flex-wrap items-baseline cursor-pointer select-none pb-0.5",
        className
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <span className="sr-only">{text}</span>

      {/* Smooth initial viewport entrance */}
      <motion.span
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="inline-flex flex-wrap items-baseline"
      >
        {words.map((wordObj, wordIndex) => (
          <span key={wordIndex} className="inline-flex whitespace-nowrap">
            {wordObj.characters.map((char) => {
              const charIndex = runningCharIndex++;
              return (
                <CharBox
                  key={charIndex}
                  char={char}
                  charIndex={charIndex}
                  totalChars={totalChars}
                  isFlipped={isHovered}
                  staggerDuration={staggerDuration}
                  rotateDirection={rotateDirection}
                  textClassName={textClassName}
                  flipTextClassName={flipTextClassName}
                />
              );
            })}
            {wordObj.needsSpace && (
              <span className="whitespace-pre">&nbsp;</span>
            )}
          </span>
        ))}
      </motion.span>
    </ElementTag>
  );
};

Text3DFlip.displayName = "Text3DFlip";

export default Text3DFlip;
