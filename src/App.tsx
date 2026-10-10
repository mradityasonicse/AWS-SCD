import React, { useState } from 'react';
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
import { BadgeGenerator } from './components/BadgeGenerator';
import { Tickets } from './components/Tickets';
import { Team } from './components/Team';
import { FAQ } from './components/FAQ';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingCta } from './components/FloatingCta';
import { RegisterModal } from './components/RegisterModal';

export const App: React.FC = () => {
  const [registerModalOpen, setRegisterModalOpen] = useState(false);
  const [selectedTierId, setSelectedTierId] = useState<string>('early-bird');

  const handleOpenRegister = (tierId: string = 'early-bird') => {
    setSelectedTierId(tierId);
    setRegisterModalOpen(true);
  };

  const handleOpenContact = () => {
    const el = document.querySelector('#contact');
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#070a10] text-slate-100 selection:bg-[#ff9900] selection:text-black font-sans antialiased overflow-x-hidden">
      {/* Top Breaking News Ticker */}
      <Ticker />

      {/* Real-time Dynamic Cosmic Particles & Nebulae */}
      <CosmicBackground />

      {/* Floating Island Navigation Bar */}
      <Navbar onRegisterClick={() => handleOpenRegister('early-bird')} />

      {/* Main Summit Experience Hierarchy */}
      <main className="relative z-10 flex flex-col">
        {/* Hero Section with Live Flip Countdown */}
        <Hero onRegisterClick={() => handleOpenRegister('early-bird')} />

        {/* Infinite Kinetic Phrase & Partner Marquee */}
        <LogoMarquee />

        {/* [ 01 ] What is SCD & Conference Pillars */}
        <About onRegisterClick={() => handleOpenRegister('early-bird')} />

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

        {/* [ 08 ] Participation Badge Generator */}
        <BadgeGenerator />

        {/* [ 09 ] Ticket Passes & Seat Capacity */}
        <Tickets onSelectTier={(tierId) => handleOpenRegister(tierId)} />

        {/* [ 10 ] Core Organizing Team */}
        <Team />

        {/* [ 11 ] Frequently Asked Questions */}
        <FAQ />

        {/* [ 13 ] Direct Organizer Desk & Inquiries */}
        <ContactSection />
      </main>

      {/* Comprehensive Brand Footer */}
      <Footer />

      {/* Floating Sticky Registration Dock */}
      <FloatingCta onRegisterClick={() => handleOpenRegister('early-bird')} />

      {/* Multi-tier Two-step Interactive Registration Modal */}
      <RegisterModal
        isOpen={registerModalOpen}
        onClose={() => setRegisterModalOpen(false)}
        initialTierId={selectedTierId}
      />
    </div>
  );
};

export default App;
