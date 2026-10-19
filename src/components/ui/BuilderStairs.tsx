import React from 'react';
import { motion } from 'motion/react';

interface BuilderStairsProps {
  color?: string;
  className?: string;
  showGridLines?: boolean;
  interactive?: boolean;
}

/**
 * Official AWS Builder Group Ascending Diagonal Stair Motif
 * Precision-matched to the AWS Builder Group design specification:
 * Step 1: 1x1 block
 * Step 2: 1x1 block
 * Step 3: 1x1 block
 * Step 4: 2x2 double-scale block
 * Step 5: 1x1 block
 * All stepping diagonally corner-to-corner on an architectural grid.
 */
export const BuilderStairs: React.FC<BuilderStairsProps> = ({
  color,
  className = '',
  showGridLines = true,
  interactive = true,
}) => {
  const fill = color || 'var(--theme-accent, #AD5CFF)';

  // 6 columns x 6 rows coordinate space
  // Base unit: 40px
  // Grid bounds: 240 x 240
  // Step 1: (0, 200, 40, 40)
  // Step 2: (40, 160, 40, 40)
  // Step 3: (80, 120, 40, 40)
  // Step 4 (2x2): (120, 40, 80, 80)
  // Step 5: (200, 0, 40, 40)
  const steps = [
    { x: 0, y: 200, w: 40, h: 40, delay: 0 },
    { x: 40, y: 160, w: 40, h: 40, delay: 0.08 },
    { x: 80, y: 120, w: 40, h: 40, delay: 0.16 },
    { x: 120, y: 40, w: 80, h: 80, delay: 0.24 }, // 2x2 double-scale
    { x: 200, y: 0, w: 40, h: 40, delay: 0.32 },
  ];

  return (
    <div className={`relative inline-block aspect-square select-none ${className}`}>
      <svg
        viewBox="0 0 240 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
      >
        {/* Architectural Fine Grid Lines */}
        {showGridLines && (
          <g stroke="currentColor" strokeWidth="1" className="text-white/10 dark:text-white/10">
            {/* Vertical grid lines */}
            <line x1="0" y1="0" x2="0" y2="240" />
            <line x1="40" y1="0" x2="40" y2="240" />
            <line x1="80" y1="0" x2="80" y2="240" />
            <line x1="120" y1="0" x2="120" y2="240" />
            <line x1="160" y1="0" x2="160" y2="240" strokeDasharray="2 4" opacity="0.5" />
            <line x1="200" y1="0" x2="200" y2="240" />
            <line x1="240" y1="0" x2="240" y2="240" />

            {/* Horizontal grid lines */}
            <line x1="0" y1="0" x2="240" y2="0" />
            <line x1="0" y1="40" x2="240" y2="40" />
            <line x1="0" y1="80" x2="240" y2="80" strokeDasharray="2 4" opacity="0.5" />
            <line x1="0" y1="120" x2="240" y2="120" />
            <line x1="0" y1="160" x2="240" y2="160" />
            <line x1="0" y1="200" x2="240" y2="200" />
            <line x1="0" y1="240" x2="240" y2="240" />
          </g>
        )}

        {/* Diagonal Ascending Geometric Blocks */}
        {steps.map((s, idx) => (
          <motion.rect
            key={idx}
            x={s.x}
            y={s.y}
            width={s.w}
            height={s.h}
            fill={fill}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              delay: s.delay,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={
              interactive
                ? {
                    filter: 'brightness(1.15)',
                    transition: { duration: 0.15 },
                  }
                : undefined
            }
            className="transition-colors duration-300"
          />
        ))}
      </svg>
    </div>
  );
};

export default BuilderStairs;
