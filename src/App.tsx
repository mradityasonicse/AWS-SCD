import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { ArchitecturalGridBackground } from './components/ArchitecturalGridBackground';
import { Ticker } from './components/Ticker';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LogoMarquee } from './components/LogoMarquee';
import { About } from './components/About';
import { ImpactStats } from './components/ImpactStats';
import { Tracks } from './components/Tracks';
import { Speakers } from './components/Speakers';
import { Agenda } from './components/Agenda';
import { Venue } from './components/Venue';
import { Team } from './components/Team';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { QuickRegisterModal } from './components/QuickRegisterModal';
import { MobileRegisterBar } from './components/MobileRegisterBar';
import { NamasteSplashScreen } from './components/NamasteSplashScreen';

export const App: React.FC = () => {
  const [registerModalOpen, setRegisterModalOpen] = useState(false);

  return (
    <ThemeProvider>
      <div
        className="relative min-h-screen text-[#F8FAFC] font-sans antialiased overflow-x-clip transition-colors duration-300 pb-16 sm:pb-0"
        style={{
          backgroundColor: 'var(--theme-bg, #0A0D14)',
          backgroundImage: 'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(173, 92, 255, 0.08) 0%, transparent 70%)',
          color: 'var(--theme-text, #F8FAFC)',
        }}
      >
        {/* Cultural Namaste Welcome Splash Screen (Intro on page start) */}
        <NamasteSplashScreen />

        {/* Skip to Main Content for Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-3 focus:z-[200] focus:px-4 focus:py-2 focus:bg-[var(--theme-accent,#AD5CFF)] focus:text-white focus:font-bold focus:text-xs focus:rounded-full focus:shadow-2xl focus:outline-none focus:ring-2 focus:ring-white"
        >
          Skip to main content
        </a>

        {/* Top Breaking News Ticker */}
        <Ticker />

        {/* Precision Architectural Grid Background (Zero AI Slop) */}
        <ArchitecturalGridBackground />

        {/* Floating Island Navigation Bar */}
        <Navbar onOpenRegister={() => setRegisterModalOpen(true)} />

        {/* Main Summit Experience Hierarchy */}
        <main id="main-content" className="relative z-10 flex flex-col">
        {/* Hero Section with Live Flip Countdown */}
        <Hero onOpenRegister={() => setRegisterModalOpen(true)} />

        {/* Infinite Kinetic Phrase & Partner Marquee */}
        <LogoMarquee />

        {/* [ 01 ] What is SCD & Conference Pillars */}
        <About />

        {/* High-Impact Statistics Strip */}
        <ImpactStats />

        {/* [ 02 ] Specialized Learning Tracks */}
        <Tracks />

        {/* [ 03 ] Keynote & Technical Speakers Roster */}
        <Speakers />

        {/* [ 04 ] Timetable & Filterable Agenda */}
        <Agenda />

        {/* [ 05 ] Venue Spotlight & Rungta International Skills University Transit Guide */}
        <Venue />

        {/* [ 06 ] Core Organizing Leadership & Sub Crew */}
        <Team />

        {/* [ 07 ] Frequently Asked Questions */}
        <FAQ />
      </main>

      {/* Comprehensive Brand Footer */}
      <Footer />

      {/* Mobile Easy Register Floating Action Bar */}
      <MobileRegisterBar onOpenRegister={() => setRegisterModalOpen(true)} />

      {/* God-level Smooth Quick Register & Pass Generator Modal */}
      <QuickRegisterModal
        isOpen={registerModalOpen}
        onClose={() => setRegisterModalOpen(false)}
      />
    </div>
    </ThemeProvider>
  );
};

export default App;
