// src/components/sections/StatsSection.jsx
import React from 'react';
import { Shield, Users, Globe } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    { 
      icon: Shield,
      number: 5, 
      label: 'Epic Realms',
      description: 'Unique gaming universes to explore'
    },
    { 
      icon: Users,
      number: 10, 
      label: 'Million Heroes',
      description: 'Active players worldwide'
    },
    { 
      icon: Globe,
      number: 150, 
      label: 'Territories',
      description: 'Countries joined the quest'
    }
  ];

  return (
    <div className="relative bg-gray-800/50 py-20 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-5xl font-zentry gradient-text text-center mb-16 neon-glow">
          Legend Stats
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map(({ icon: Icon, number, label, description }) => (
            <div key={label} className="group p-8 rounded-2xl bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700/50 transition-all duration-500 card-hover">
              <div className="flex flex-col items-center text-center space-y-4">
                <Icon className="w-12 h-12 text-primary group-hover:scale-110 transition-transform duration-300" />
                <div className="stat-number text-5xl font-zentry gradient-text font-bold mb-2" data-target={number}>
                  0
                </div>
                <div className="text-xl font-zentry text-gray-300">{label}</div>
                <p className="text-gray-400">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;