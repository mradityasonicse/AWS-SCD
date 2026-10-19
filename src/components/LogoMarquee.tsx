import React from 'react';
import { cn } from '@/lib/utils';

export const LogoMarquee: React.FC = () => {
  const phraseWords = [
    { text: 'BUILD', color: '#FFFFFF' },
    { text: 'LEARN', color: '#F1F5F9' },
    { text: 'CONNECT', color: '#AD5CFF' },
    { text: 'SHIP', color: '#FFFFFF' },
    { text: 'SCALE', color: '#F1F5F9' },
    { text: 'INNOVATE', color: '#AD5CFF' },
  ];

  const logos = [
    {
      name: 'Amazon Web Services',
      src: '/AWS.png',
      badge: 'Cloud Leader',
      color: '#FF9900',
      bg: 'rgba(255, 153, 0, 0.12)',
      border: 'rgba(255, 153, 0, 0.35)',
    },
    {
      name: 'AWS Student Builder Group',
      src: '/AWS_SBG.png',
      badge: 'Global Community',
      color: '#AD5CFF',
      bg: 'rgba(173, 92, 255, 0.12)',
      border: 'rgba(173, 92, 255, 0.35)',
    },
    {
      name: 'Rungta International Skills University',
      src: '/rungta-logo.png',
      badge: 'Academic Host',
      color: '#C92026',
      bg: 'rgba(201, 32, 38, 0.12)',
      border: 'rgba(201, 32, 38, 0.35)',
    },
    {
      name: 'Meetup',
      src: '/meetup.png',
      badge: 'Community Partner',
      color: '#F64060',
      bg: 'rgba(246, 64, 96, 0.12)',
      border: 'rgba(246, 64, 96, 0.35)',
    },
    {
      name: 'Amazon Bedrock',
      src: '/AWS.png',
      badge: 'Generative AI',
      color: '#42B4FF',
      bg: 'rgba(66, 180, 255, 0.12)',
      border: 'rgba(66, 180, 255, 0.35)',
    },
    {
      name: 'AWS Cloud Clubs',
      src: '/AWS_SBG.png',
      badge: 'Student Network',
      color: '#AD5CFF',
      bg: 'rgba(173, 92, 255, 0.12)',
      border: 'rgba(173, 92, 255, 0.35)',
    },
    {
      name: 'Rungta International Skills University Innovation Cell',
      src: '/rungta-logo.png',
      badge: 'Tech Incubator',
      color: '#C92026',
      bg: 'rgba(201, 32, 38, 0.12)',
      border: 'rgba(201, 32, 38, 0.35)',
    },
  ];

  // Exactly two duplicate sets for seamless 50% translateX loop
  const marqueeLogos = [...logos, ...logos];

  return (
    <section className="relative bg-[var(--theme-bg,#0A0D14)] border-y border-white/10 overflow-hidden py-6">
      {/* Editorial Bold Phrase Marquee */}
      <div className="overflow-hidden whitespace-nowrap mb-6 border-b border-white/10 pb-4">
        <div className="animate-marquee flex items-center gap-10 font-heading font-normal text-3xl sm:text-5xl uppercase tracking-wide will-change-transform">
          {[1, 2, 3].map((set) => (
            <span key={set} className="flex items-center gap-8">
              {phraseWords.map((word, wIdx) => (
                <React.Fragment key={wIdx}>
                  <span
                    className="transition-colors hover:scale-105 inline-block"
                    style={{ color: word.color }}
                  >
                    {word.text}
                  </span>
                  <span className="text-white/25 font-mono text-lg">✦</span>
                </React.Fragment>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* Side gradient feather masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-44 bg-gradient-to-r from-[var(--theme-bg,#0A0D14)] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-44 bg-gradient-to-l from-[var(--theme-bg,#0A0D14)] to-transparent z-10 pointer-events-none" />

      {/* Brand Logos Stream */}
      <div className="flex w-full overflow-hidden">
        <div className="animate-marquee flex items-center gap-6 sm:gap-8 py-2 will-change-transform">
          {marqueeLogos.map((item, idx) => {
            const isMeetup = item.name === 'Meetup';
            const isRungta = item.name.includes('Rungta');
            return (
              <div
                key={`${item.name}-${idx}`}
                className="flex items-center gap-3.5 px-4 py-2.5 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.07] backdrop-blur-md hover:border-white/20 shadow-lg transition-all duration-300 group shrink-0 relative overflow-hidden"
              >
                {/* Top accent highlight on card */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] opacity-80 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: item.color }}
                />

                <div
                  className={cn(
                    "h-9 w-9 rounded-xl border flex items-center justify-center p-1 shrink-0 group-hover:scale-105 transition-transform",
                    isMeetup || isRungta
                      ? "bg-white border-white/50 shadow-md"
                      : "bg-white/[0.08] border-white/10"
                  )}
                >
                  <img
                    src={item.src}
                    alt={item.name}
                    className="max-h-6 max-w-7 object-contain opacity-100"
                  />
                </div>

              <div className="flex flex-col text-left min-w-0">
                <span className="text-xs font-bold text-white group-hover:text-white transition-colors truncate">
                  {item.name}
                </span>
                <span
                  className="text-[9.5px] font-mono font-bold tracking-wider uppercase px-2 py-0.5 rounded border inline-flex items-center gap-1.5 mt-1 w-fit"
                  style={{
                    color: item.color,
                    backgroundColor: item.bg,
                    borderColor: item.border,
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.color }} />
                  <span>{item.badge}</span>
                </span>
              </div>
            </div>
          );
        })}
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;
