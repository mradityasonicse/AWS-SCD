import React from 'react';
import { CosmicBackground } from './components/CosmicBackground';
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
import { Contests } from './components/Contests';
import { Sponsors } from './components/Sponsors';
import { Team } from './components/Team';
import { FAQ } from './components/FAQ';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const handleOpenContact = () => {
    const el = document.querySelector('#contact');
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#FAFAFA] text-[#171717] selection:bg-[#D946EF] selection:text-white font-sans antialiased overflow-x-clip">
      {/* Top Breaking News Ticker */}
      <Ticker />

      {/* Real-time Dynamic Cosmic Particles & Nebulae */}
      <CosmicBackground />

      {/* Floating Island Navigation Bar */}
      <Navbar />

      {/* Main Summit Experience Hierarchy */}
      <main className="relative z-10 flex flex-col">
        {/* Hero Section with Live Flip Countdown */}
        <Hero />

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

        {/* [ 05 ] Venue Spotlight & RISU Transit Guide */}
        <Venue />

        {/* [ 06 ] Live Kahoot Trivia & Hardware Prizes */}
        <Contests />

        {/* [ 07 ] Ecosystem Partners & Academic Host */}
        <Sponsors onOpenContact={handleOpenContact} />

        {/* [ 08 ] Core Organizing Team */}
        <Team />

        {/* [ 09 ] Frequently Asked Questions */}
        <FAQ />

        {/* [ 10 ] Direct Organizer Desk & Inquiries */}
        <ContactSection />
      </main>

      {/* Comprehensive Brand Footer */}
      <Footer />
    </div>
  );
};

export default App;
