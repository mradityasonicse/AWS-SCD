import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, animate } from 'motion/react';
import { cn } from '@/lib/utils';

// ============================================================================
// 1. ScrollReveal: Smooth Apple-style viewport reveal
// ============================================================================
export interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  className?: string;
  once?: boolean;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  delay = 0,
  duration = 0.7,
  yOffset = 28,
  className = '',
  once = true,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-60px' }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // Fluid cubic-bezier
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// ============================================================================
// 2. StaggerContainer & StaggerItem: Cascade animations for grids
// ============================================================================
export interface StaggerContainerProps {
  children: React.ReactNode;
  staggerDelay?: number;
  className?: string;
  once?: boolean;
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  staggerDelay = 0.08,
  className = '',
  once = true,
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: '-60px' }}
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
  yOffset?: number;
}

export const StaggerItem: React.FC<StaggerItemProps> = ({
  children,
  className = '',
  yOffset = 24,
}) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: yOffset, scale: 0.98 },
        show: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// ============================================================================
// 3. SpotlightCard: Interactive cursor-following radial border glow
// ============================================================================
export interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  borderColor?: string;
}

export const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = '',
  spotlightColor = 'var(--theme-accent-glow, rgba(173, 92, 255, 0.15))',
  borderColor = 'var(--theme-accent, #AD5CFF)',
  ...props
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--spotlight-x', `${e.clientX - rect.left}px`);
    card.style.setProperty('--spotlight-y', `${e.clientY - rect.top}px`);
  };

  const handleMouseEnter = () => {
    if (cardRef.current) {
      cardRef.current.style.setProperty('--spotlight-opacity', '1');
    }
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.setProperty('--spotlight-opacity', '0');
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        'relative rounded-xl sm:rounded-2xl border border-[#232F3E] bg-[#131921] overflow-hidden transition-all duration-300 hover:border-[#37475A] group',
        className
      )}
      style={{
        backgroundColor: 'var(--theme-surface-card, #131921)',
        borderColor: 'var(--theme-border, #232F3E)',
        ['--spotlight-opacity' as any]: '0',
        ['--spotlight-x' as any]: '-1000px',
        ['--spotlight-y' as any]: '-1000px',
        transform: 'translateZ(0)',
        ...props.style,
      }}
      {...props}
    >
      {/* Dynamic Cursor Spotlight Radial Overlay */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 rounded-xl sm:rounded-2xl"
        style={{
          opacity: 'var(--spotlight-opacity, 0)',
          background: `radial-gradient(420px circle at var(--spotlight-x, -1000px) var(--spotlight-y, -1000px), ${spotlightColor}, transparent 70%)`,
        }}
      />
      {/* Highlight Border Glint */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 rounded-2xl sm:rounded-3xl"
        style={{
          opacity: 'var(--spotlight-opacity, 0)',
          background: `radial-gradient(280px circle at var(--spotlight-x, -1000px) var(--spotlight-y, -1000px), ${borderColor}, transparent 60%)`,
          maskImage: 'linear-gradient(black, black) content-box, linear-gradient(black, black)',
          WebkitMaskImage: 'linear-gradient(black, black) content-box, linear-gradient(black, black)',
          maskComposite: 'exclude',
          WebkitMaskComposite: 'xor',
          padding: '1px',
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

// ============================================================================
// 4. AnimatedCounter: Number count-up on scroll
// ============================================================================
export interface AnimatedCounterProps {
  value: string;
  className?: string;
  duration?: number;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  className = '',
  duration = 1.6,
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [displayValue, setDisplayValue] = useState<string>('0');

  // Extract number and prefix/suffix (e.g., "550+" -> number: 550, suffix: "+")
  const numericMatch = value.match(/(\d+)/);
  const targetNumber = numericMatch ? parseInt(numericMatch[0], 10) : 0;
  const suffix = value.replace(/\d+/g, '');

  useEffect(() => {
    if (!inView || targetNumber === 0) return;

    const controls = animate(0, targetNumber, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        setDisplayValue(`${Math.round(latest)}${suffix}`);
      },
    });

    return () => controls.stop();
  }, [inView, targetNumber, suffix, duration]);

  return (
    <span ref={ref} className={className}>
      {inView ? displayValue : `0${suffix}`}
    </span>
  );
};
