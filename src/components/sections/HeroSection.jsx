// src/components/sections/HeroSection.jsx
import { PlayIcon } from 'lucide-react';


const HeroSection = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Video */}
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
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6">
        <div className="max-w-4xl">
          <h1 className="text-8xl md:text-[6rem] font-bold leading-none tracking-tighter mb-4">
            HORIZONQUEST
          </h1>
          <h1 className="text-8xl md:text-[6rem] font-bold leading-none tracking-tighter text-white/80">
            GAMING
          </h1>
          <div className="mt-8 space-y-4">
            <p className="text-xl text-white/80">Enter the Metagame Layer</p>
            <p className="text-xl text-white/80">Unleash the Play Economy</p>
            <button className="mt-6 bg-yellow-300 text-black px-6 py-3 rounded-full flex items-center space-x-2 hover:bg-yellow-400 transition-colors duration-300">
              <PlayIcon size={20} />
              <span>WATCH TRAILER</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};



export default HeroSection;