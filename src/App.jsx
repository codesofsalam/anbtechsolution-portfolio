// src/App.jsx
import { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import StatsSection from './components/sections/StatsSection';
import GamesSection from './components/sections/GamesSection';
import CommunitySection from './components/sections/CommunitySection';
import { initializeAnimations } from './components/utils/Animations'

const App = () => {
  useEffect(() => {
    initializeAnimations();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <GamesSection />
      <CommunitySection />
      <Footer />
    </div>
  );
};

export default App;