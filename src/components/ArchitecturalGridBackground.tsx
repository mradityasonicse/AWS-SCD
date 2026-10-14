import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

/**
 * Architectural Grid Background Engine
 * Replaces generic blurry "AI slop" gradients with precision architectural grid lines,
 * subtle corner crosshairs, and clean mouse-reactive grid cell illumination.
 * 100% compliant with the AWS Student Builder Group visual standard.
 */
export const ArchitecturalGridBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { currentColorConfig, bgMode } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const CELL_SIZE = 56; // Precision grid cell size

    const setupCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    setupCanvas();

    const handleResize = () => {
      setupCanvas();
      if (prefersReducedMotion) {
        render();
      }
    };
    window.addEventListener('resize', handleResize, { passive: true });

    let mouseX = -1000;
    let mouseY = -1000;
    let currentX = -1000;
    let currentY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    const render = () => {
      // Smooth lerp mouse position
      currentX += (mouseX - currentX) * 0.1;
      currentY += (mouseY - currentY) * 0.1;

      ctx.clearRect(0, 0, width, height);

      const isDark = bgMode === 'dark';
      const gridColor = isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(15, 23, 42, 0.06)';
      const crosshairColor = isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(15, 23, 42, 0.18)';
      const accentRgb = currentColorConfig.rgb;

      // 1. Draw Architectural Grid Lines
      ctx.lineWidth = 1;
      ctx.strokeStyle = gridColor;

      const cols = Math.ceil(width / CELL_SIZE);
      const rows = Math.ceil(height / CELL_SIZE);

      ctx.beginPath();
      for (let c = 0; c <= cols; c++) {
        const x = c * CELL_SIZE;
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let r = 0; r <= rows; r++) {
        const y = r * CELL_SIZE;
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();

      // 2. Interactive Cell Illumination near cursor (Clean, square, zero blur)
      if (currentX > 0 && currentY > 0) {
        const hoverCol = Math.floor(currentX / CELL_SIZE);
        const hoverRow = Math.floor(currentY / CELL_SIZE);
        const radius = 3; // Cell radius

        for (let dc = -radius; dc <= radius; dc++) {
          for (let dr = -radius; dr <= radius; dr++) {
            const c = hoverCol + dc;
            const r = hoverRow + dr;
            if (c >= 0 && c < cols && r >= 0 && r < rows) {
              const cellX = c * CELL_SIZE;
              const cellY = r * CELL_SIZE;
              const centerX = cellX + CELL_SIZE / 2;
              const centerY = cellY + CELL_SIZE / 2;
              const dist = Math.hypot(currentX - centerX, currentY - centerY);
              const maxDist = radius * CELL_SIZE * 1.2;

              if (dist < maxDist) {
                const intensity = (1 - dist / maxDist) * 0.15;
                ctx.fillStyle = `rgba(${accentRgb}, ${intensity})`;
                ctx.fillRect(cellX, cellY, CELL_SIZE, CELL_SIZE);

                // Highlight cell border
                ctx.strokeStyle = `rgba(${accentRgb}, ${intensity * 1.5})`;
                ctx.lineWidth = 1;
                ctx.strokeRect(cellX + 0.5, cellY + 0.5, CELL_SIZE - 1, CELL_SIZE - 1);
              }
            }
          }
        }
      }

      // 3. Precision Engineering Crosshairs (+) at every 4th intersection
      ctx.fillStyle = crosshairColor;
      ctx.font = '10px monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      for (let c = 0; c <= cols; c += 4) {
        for (let r = 0; r <= rows; r += 4) {
          ctx.fillText('+', c * CELL_SIZE, r * CELL_SIZE);
        }
      }

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    if (prefersReducedMotion) {
      render();
    } else {
      animationFrameId = requestAnimationFrame(render);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [currentColorConfig, bgMode]);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden transition-colors duration-300"
      style={{ backgroundColor: 'var(--theme-bg, #111622)' }}
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
};

export default ArchitecturalGridBackground;
