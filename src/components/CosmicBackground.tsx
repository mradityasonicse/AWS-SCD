import React, { useEffect, useRef } from 'react';

export const CosmicBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle system
    const numStars = Math.min(width > 768 ? 90 : 45, 120);
    const stars: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      color: string;
    }[] = [];

    const colors = ['#A45AFA', '#60A5FA', '#FF9900', '#F3E8FF', '#38BDF8'];

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.7 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let mouseX = width / 2;
    let mouseY = height / 2;
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Deep cosmic gradient
      const gradient = ctx.createRadialGradient(
        mouseX,
        mouseY,
        50,
        width / 2,
        height / 2,
        Math.max(width, height)
      );
      gradient.addColorStop(0, 'rgba(164, 90, 250, 0.04)');
      gradient.addColorStop(0.5, 'rgba(15, 23, 42, 0.02)');
      gradient.addColorStop(1, 'transparent');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Render stars & lines
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        s.x += s.speedX;
        s.y += s.speedY;

        if (s.x < 0) s.x = width;
        if (s.x > width) s.x = 0;
        if (s.y < 0) s.y = height;
        if (s.y > height) s.y = 0;

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fillStyle = s.color;
        ctx.globalAlpha = s.opacity;
        ctx.shadowBlur = 8;
        ctx.shadowColor = s.color;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Draw connective web for nearby stars
        for (let j = i + 1; j < stars.length; j++) {
          const s2 = stars[j];
          const dx = s.x - s2.x;
          const dy = s.y - s2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(s.x, s.y);
            ctx.lineTo(s2.x, s2.y);
            ctx.strokeStyle = '#A45AFA';
            ctx.globalAlpha = (1 - dist / 110) * 0.12;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      {/* Ambient ambient glow orbs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#A45AFA]/15 rounded-full blur-[140px]" />
      <div className="absolute top-1/3 -right-40 w-[30rem] h-[30rem] bg-indigo-600/10 rounded-full blur-[160px]" />
      <div className="absolute -bottom-40 left-1/4 w-[34rem] h-[34rem] bg-[#FF9900]/10 rounded-full blur-[180px]" />
    </div>
  );
};
