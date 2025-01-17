// src/components/sections/HeroSection.jsx

import { ChevronRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
          poster="/api/placeholder/1920/1080"
        >
          <source src="/api/placeholder/video" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-gray-900/50 to-gray-900" />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-center items-center px-4">
        <div className="text-center space-y-6">
          <h1 className="hero-title font-zentry text-7xl md:text-9xl font-bold mb-6 gradient-text neon-glow animate-pulse-slow">
            HORIZONQUEST
          </h1>
          <p className="hero-title text-xl md:text-2xl max-w-2xl mb-8 text-gray-300">
            Where Legends Rise and Adventures Never End
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="hero-title px-8 py-3 bg-primary hover:bg-primary/80 rounded-full transition-all duration-300 text-lg font-zentry flex items-center group">
              Begin Your Quest 
              <ChevronRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="hero-title px-8 py-3 border-2 border-primary/50 hover:border-primary rounded-full transition-all duration-300 text-lg font-zentry">
              Watch Trailer
            </button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-4">
          <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
          <div className="w-3 h-3 bg-secondary rounded-full animate-pulse delay-100" />
          <div className="w-3 h-3 bg-accent rounded-full animate-pulse delay-200" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;