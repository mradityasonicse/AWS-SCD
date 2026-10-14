import React, { useEffect, useRef } from 'react';

export const CosmicBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

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
    };
    window.addEventListener('resize', handleResize, { passive: true });

    // Particle system - optimized count for rock-solid 60/120fps
    const isMobile = width < 768;
    const numStars = isMobile ? 36 : 80;
    const maxLineDist = isMobile ? 90 : 120;

    const stars: {
      x: number;
      y: number;
      baseSize: number;
      speedX: number;
      speedY: number;
      opacity: number;
      phase: number;
      color: string;
    }[] = [];

    const colors = ['#FF9900', '#42B4FF', '#FF57EA', '#00E582', '#AD5CFF', '#F8FAFC'];

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        baseSize: Math.random() * (isMobile ? 1.6 : 2.2) + 0.6,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.6 + 0.25,
        phase: Math.random() * Math.PI * 2,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let targetMouseX = width / 2;
    let targetMouseY = height / 2;
    let smoothMouseX = width / 2;
    let smoothMouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches && e.touches.length > 0) {
        targetMouseX = e.touches[0].clientX;
        targetMouseY = e.touches[0].clientY;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    const render = (time: number) => {
      // Smooth lerp mouse coordinates for fluid cinematic inertia
      smoothMouseX += (targetMouseX - smoothMouseX) * 0.06;
      smoothMouseY += (targetMouseY - smoothMouseY) * 0.06;

      ctx.clearRect(0, 0, width, height);

      // Deep cosmic AWS radial glow centered on smooth mouse
      const gradient = ctx.createRadialGradient(
        smoothMouseX,
        smoothMouseY,
        40,
        width / 2,
        height / 2,
        Math.max(width, height)
      );
      gradient.addColorStop(0, 'rgba(255, 153, 0, 0.09)');
      gradient.addColorStop(0.35, 'rgba(0, 164, 228, 0.05)');
      gradient.addColorStop(0.8, 'rgba(11, 15, 23, 0.02)');
      gradient.addColorStop(1, 'transparent');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      const tSec = time * 0.001;

      // Render stars & lines
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];

        // Smooth velocity
        s.x += s.speedX;
        s.y += s.speedY;

        // Screen wrap
        if (s.x < 0) s.x = width;
        if (s.x > width) s.x = 0;
        if (s.y < 0) s.y = height;
        if (s.y > height) s.y = 0;

        // Subtle organic twinkle
        const twinkle = Math.sin(tSec * 2 + s.phase) * 0.25;
        const currentOpacity = Math.max(0.1, Math.min(1, s.opacity + twinkle));
        const currentSize = s.baseSize * (1 + twinkle * 0.3);

        ctx.beginPath();
        ctx.arc(s.x, s.y, currentSize, 0, Math.PI * 2);
        ctx.fillStyle = s.color;
        ctx.globalAlpha = currentOpacity;
        ctx.shadowBlur = 8;
        ctx.shadowColor = s.color;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Connective constellation lines for nearby stars
        for (let j = i + 1; j < stars.length; j++) {
          const s2 = stars[j];
          const dx = s.x - s2.x;
          const dy = s.y - s2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxLineDist) {
            ctx.beginPath();
            ctx.moveTo(s.x, s.y);
            ctx.lineTo(s2.x, s2.y);
            ctx.strokeStyle = '#FF9900';
            ctx.globalAlpha = (1 - dist / maxLineDist) * 0.16;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#0B0F17]">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      {/* Subtle AWS navy architectural grid mesh */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#232f3e_1px,transparent_1px),linear-gradient(to_bottom,#232f3e_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_45%,#000_40%,transparent_90%)] opacity-35 pointer-events-none" />
      {/* AWS Cloud Ambient glow orbs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#FF9900]/10 rounded-full blur-[140px]" />
      <div className="absolute top-1/3 -right-40 w-[30rem] h-[30rem] bg-[#42B4FF]/08 rounded-full blur-[160px]" />
      <div className="absolute -bottom-40 left-1/4 w-[34rem] h-[34rem] bg-[var(--theme-accent,#AD5CFF)]/06 rounded-full blur-[180px]" />
    </div>
  );
};

export default CosmicBackground;
