import React from 'react';

export const LogoMarquee: React.FC = () => {
  const logos = [
    { name: 'Amazon Web Services', src: '/AWS.png', badge: 'Cloud Leader' },
    { name: 'AWS Student Builder Group', src: '/AWS_SBG.png', badge: 'Global Community' },
    { name: 'RISU Bhilai', src: '/risu-logo.png', badge: 'Academic Host' },
    { name: 'Meetio', src: '/meetio.png', badge: 'Community Partner' },
    { name: 'Amazon Bedrock', src: '/AWS.png', badge: 'Generative AI' },
    { name: 'AWS Cloud Clubs', src: '/AWS_SBG.png', badge: 'Student Network' },
    { name: 'RISU Innovation Cell', src: '/risu-logo.png', badge: 'Tech Incubator' },
  ];

  const marqueeLogos = [...logos, ...logos, ...logos];

  return (
    <section className="relative bg-black border-y border-white/10 overflow-hidden py-6">
      {/* Editorial Bold Phrase Marquee */}
      <div className="overflow-hidden whitespace-nowrap mb-6 border-b border-white/10 pb-4">
        <div className="animate-marquee flex items-center gap-12 font-heading font-black text-3xl sm:text-5xl uppercase tracking-tighter text-white">
          <span className="flex items-center gap-8">
            <span>BUILD</span>
            <span className="text-[#ff9900] font-serif italic text-4xl">✦</span>
            <span className="text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.7)]">LEARN</span>
            <span className="text-[#ff9900] font-serif italic text-4xl">✦</span>
            <span>CONNECT</span>
            <span className="text-[#ff9900] font-serif italic text-4xl">✦</span>
            <span className="text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.7)]">SHIP</span>
            <span className="text-[#ff9900] font-serif italic text-4xl">✦</span>
            <span>SCALE</span>
            <span className="text-[#ff9900] font-serif italic text-4xl">✦</span>
            <span className="text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.7)]">INNOVATE</span>
            <span className="text-[#ff9900] font-serif italic text-4xl">✦</span>
          </span>
          <span className="flex items-center gap-8">
            <span>BUILD</span>
            <span className="text-[#ff9900] font-serif italic text-4xl">✦</span>
            <span className="text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.7)]">LEARN</span>
            <span className="text-[#ff9900] font-serif italic text-4xl">✦</span>
            <span>CONNECT</span>
            <span className="text-[#ff9900] font-serif italic text-4xl">✦</span>
            <span className="text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.7)]">SHIP</span>
            <span className="text-[#ff9900] font-serif italic text-4xl">✦</span>
            <span>SCALE</span>
            <span className="text-[#ff9900] font-serif italic text-4xl">✦</span>
            <span className="text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.7)]">INNOVATE</span>
            <span className="text-[#ff9900] font-serif italic text-4xl">✦</span>
          </span>
        </div>
      </div>

      {/* Side gradient feather masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-44 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-44 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      {/* Brand Logos Stream */}
      <div className="flex w-full overflow-hidden">
        <div className="animate-marquee flex items-center gap-8 sm:gap-12 py-1">
          {marqueeLogos.map((item, idx) => (
            <div
              key={`${item.name}-${idx}`}
              className="flex items-center gap-3.5 px-4 py-2 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#ff9900]/30 transition-all duration-300 group shrink-0"
            >
              <img
                src={item.src}
                alt={item.name}
                className="h-7 sm:h-8 max-w-[120px] object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-80 group-hover:opacity-100 group-hover:scale-105"
              />
              <div className="flex flex-col text-left">
                <span className="text-xs font-bold text-slate-300 group-hover:text-white transition-colors">
                  {item.name}
                </span>
                <span className="text-[9px] font-mono font-bold text-[#ff9900] tracking-wider uppercase">
                  {item.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
