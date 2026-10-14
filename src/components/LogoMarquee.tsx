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

  // Exactly two duplicate sets for seamless 50% translateX loop
  const marqueeLogos = [...logos, ...logos];

  return (
    <section className="relative bg-[#111722] border-y border-[#232F3E] overflow-hidden py-6">
      {/* Editorial Bold Phrase Marquee */}
      <div className="overflow-hidden whitespace-nowrap mb-6 border-b border-[#232F3E] pb-4">
        <div className="animate-marquee flex items-center gap-10 font-heading font-black text-2xl sm:text-4xl uppercase tracking-tighter will-change-transform">
          <span className="flex items-center gap-6">
            <span className="text-white">BUILD</span>
            <span className="text-[#FF9900] font-mono text-xl">/</span>
            <span className="text-slate-400">LEARN</span>
            <span className="text-[#FF9900] font-mono text-xl">/</span>
            <span className="text-white">CONNECT</span>
            <span className="text-[#FF9900] font-mono text-xl">/</span>
            <span className="text-slate-400">SHIP</span>
            <span className="text-[#FF9900] font-mono text-xl">/</span>
            <span className="text-white">SCALE</span>
            <span className="text-[#FF9900] font-mono text-xl">/</span>
            <span className="text-slate-400">INNOVATE</span>
            <span className="text-[#FF9900] font-mono text-xl">/</span>
          </span>
          <span className="flex items-center gap-6">
            <span className="text-white">BUILD</span>
            <span className="text-[#FF9900] font-mono text-xl">/</span>
            <span className="text-slate-400">LEARN</span>
            <span className="text-[#FF9900] font-mono text-xl">/</span>
            <span className="text-white">CONNECT</span>
            <span className="text-[#FF9900] font-mono text-xl">/</span>
            <span className="text-slate-400">SHIP</span>
            <span className="text-[#FF9900] font-mono text-xl">/</span>
            <span className="text-white">SCALE</span>
            <span className="text-[#FF9900] font-mono text-xl">/</span>
            <span className="text-slate-400">INNOVATE</span>
            <span className="text-[#FF9900] font-mono text-xl">/</span>
          </span>
        </div>
      </div>

      {/* Side gradient feather masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-44 bg-gradient-to-r from-[#0B0F17] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-44 bg-gradient-to-l from-[#0B0F17] to-transparent z-10 pointer-events-none" />

      {/* Brand Logos Stream */}
      <div className="flex w-full overflow-hidden">
        <div className="animate-marquee flex items-center gap-6 sm:gap-8 py-1 will-change-transform">
          {marqueeLogos.map((item, idx) => (
            <div
              key={`${item.name}-${idx}`}
              className="flex items-center gap-3.5 px-4 py-2 rounded-xl bg-[#161E2D] border border-[#232F3E] hover:border-slate-500 shadow-sm transition-all duration-300 group shrink-0"
            >
              <img
                src={item.src}
                alt={item.name}
                className="h-7 sm:h-8 max-w-[120px] object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-80 group-hover:opacity-100"
              />
              <div className="flex flex-col text-left">
                <span className="text-xs font-bold text-slate-200 group-hover:text-white transition-colors">
                  {item.name}
                </span>
                <span className="text-[9px] font-mono font-bold text-[#FF9900] tracking-wider uppercase">
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

export default LogoMarquee;
