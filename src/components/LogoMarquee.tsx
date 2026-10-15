import React from 'react';

export const LogoMarquee: React.FC = () => {
  const phraseWords = [
    { text: 'BUILD', color: '#FFFFFF' },
    { text: 'LEARN', color: '#42B4FF' },
    { text: 'CONNECT', color: 'var(--theme-accent, #AD5CFF)' },
    { text: 'SHIP', color: '#00E582' },
    { text: 'SCALE', color: '#FF9900' },
    { text: 'INNOVATE', color: '#FF57EA' },
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
      color: 'var(--theme-accent, #AD5CFF)',
      bg: 'rgba(173, 92, 255, 0.12)',
      border: 'rgba(173, 92, 255, 0.35)',
    },
    {
      name: 'RISU Bhilai',
      src: '/main-logo.svg',
      badge: 'Academic Host',
      color: '#42B4FF',
      bg: 'rgba(66, 180, 255, 0.12)',
      border: 'rgba(66, 180, 255, 0.35)',
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
      color: '#FF57EA',
      bg: 'rgba(255, 87, 234, 0.12)',
      border: 'rgba(255, 87, 234, 0.35)',
    },
    {
      name: 'AWS Cloud Clubs',
      src: '/AWS_SBG.png',
      badge: 'Student Network',
      color: 'var(--theme-accent, #AD5CFF)',
      bg: 'rgba(173, 92, 255, 0.12)',
      border: 'rgba(173, 92, 255, 0.35)',
    },
    {
      name: 'RISU Innovation Cell',
      src: '/main-logo.svg',
      badge: 'Tech Incubator',
      color: '#42B4FF',
      bg: 'rgba(66, 180, 255, 0.12)',
      border: 'rgba(66, 180, 255, 0.35)',
    },
  ];

  // Exactly two duplicate sets for seamless 50% translateX loop
  const marqueeLogos = [...logos, ...logos];

  return (
    <section className="relative bg-[#111622] border-y border-[#232F3E] overflow-hidden py-6">
      {/* Editorial Bold Phrase Marquee */}
      <div className="overflow-hidden whitespace-nowrap mb-6 border-b border-[#232F3E] pb-4">
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
                  <span className="text-slate-600 font-mono text-lg">✦</span>
                </React.Fragment>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* Side gradient feather masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-44 bg-gradient-to-r from-[#111622] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-44 bg-gradient-to-l from-[#111622] to-transparent z-10 pointer-events-none" />

      {/* Brand Logos Stream */}
      <div className="flex w-full overflow-hidden">
        <div className="animate-marquee flex items-center gap-6 sm:gap-8 py-2 will-change-transform">
          {marqueeLogos.map((item, idx) => (
            <div
              key={`${item.name}-${idx}`}
              className="flex items-center gap-3.5 px-4 py-2.5 rounded-2xl bg-[#131922] border border-[#232F3E] hover:border-slate-400 shadow-md transition-all duration-300 group shrink-0 relative overflow-hidden"
            >
              {/* Top accent highlight on card */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] opacity-80 group-hover:opacity-100 transition-opacity"
                style={{ backgroundColor: item.color }}
              />

              <div className="h-9 w-9 rounded-xl bg-[#161E2D] border border-[#232F3E] flex items-center justify-center p-1.5 shrink-0 group-hover:scale-105 transition-transform">
                <img
                  src={item.src}
                  alt={item.name}
                  className="max-h-6 max-w-7 object-contain opacity-95 group-hover:opacity-100 transition-opacity"
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;
