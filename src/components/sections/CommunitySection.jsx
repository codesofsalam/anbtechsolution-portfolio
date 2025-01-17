// src/components/sections/CommunitySection.jsx
import React from 'react';
import { Twitter, Twitch, Discord, Youtube, Star, Trophy, Users } from 'lucide-react';

const CommunitySection = () => {
  const communities = [
    {
      icon: Discord,
      title: 'Discord Realm',
      description: 'Join our Discord server to connect with fellow adventurers',
      members: '50K+',
      highlight: 'Most Active'
    },
    {
      icon: Twitch,
      title: 'Twitch Arena',
      description: 'Watch epic battles and legendary gameplay streams',
      members: '100K+',
      highlight: 'Live Now'
    },
    {
      icon: Twitter,
      title: 'Twitter Scroll',
      description: 'Stay updated with the latest quest announcements',
      members: '75K+',
      highlight: 'Trending'
    }
  ];

  return (
    <div className="community-section relative bg-gray-800/50 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-5xl font-zentry gradient-text text-center mb-6 neon-glow">
          Join The Legend
        </h2>
        <p className="text-center text-gray-300 max-w-2xl mx-auto mb-16">
          Unite with fellow heroes from across the realms. Your epic adventure awaits!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {communities.map(({ icon: Icon, title, description, members, highlight }) => (
            <div 
              key={title}
              className="community-item group relative bg-gray-800/80 backdrop-blur-sm rounded-xl overflow-hidden card-hover"
            >
              <div className="absolute top-2 right-2 px-3 py-1 bg-primary/20 rounded-full text-xs font-semibold text-primary">
                {highlight}
              </div>
              
              <div className="p-8">
                <div className="mb-6 relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-full filter blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <Icon className="w-12 h-12 text-primary relative z-10" />
                </div>
                
                <h3 className="text-xl font-zentry mb-2">{title}</h3>
                <p className="text-gray-400 mb-4">{description}</p>
                
                <div className="flex items-center text-sm text-gray-400">
                  <Users size={16} className="mr-2" />
                  {members} Members
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          ))}
        </div>

        {/* Stats Banner */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Star, label: 'Average Rating', value: '4.9/5' },
            { icon: Trophy, label: 'Tournaments', value: '150+' },
            { icon: Youtube, label: 'Content Creators', value: '1000+' },
            { icon: Users, label: 'Community Events', value: 'Daily' }
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="bg-gray-800/50 rounded-lg p-4 text-center">
              <Icon className="w-6 h-6 text-primary mx-auto mb-2" />
              <div className="text-sm text-gray-400">{label}</div>
              <div className="font-zentry text-lg">{value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommunitySection;