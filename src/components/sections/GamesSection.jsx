// src/components/sections/GamesSection.jsx
import React, { useState } from 'react';
import GameCard from '../ui/GameCard';
import { Search, Filter } from 'lucide-react';

const GamesSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const games = [
    {
      title: 'RADIANT',
      description: 'A revolutionary open-world experience with dynamic environments',
      genre: 'Open World RPG',
      players: 'Single/Multiplayer',
      releaseDate: 'Coming Soon',
      category: 'rpg'
    },
    {
      title: 'ZIGMA',
      description: 'Master the art of combat in this fast-paced action game',
      genre: 'Action',
      players: 'Multiplayer',
      releaseDate: 'Available Now',
      category: 'action'
    },
    {
      title: 'NEXUS',
      description: 'Connect and compete in this strategic battle arena',
      genre: 'Strategy',
      players: 'Multiplayer',
      releaseDate: 'Beta Access',
      category: 'strategy'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Quests' },
    { id: 'rpg', label: 'RPG' },
    { id: 'action', label: 'Action' },
    { id: 'strategy', label: 'Strategy' }
  ];

  const filteredGames = activeFilter === 'all' 
    ? games 
    : games.filter(game => game.category === activeFilter);

  return (
    <div className="container mx-auto px-4 py-20">
      <h2 className="text-5xl font-zentry gradient-text text-center mb-6 neon-glow">
        Featured Quests
      </h2>
      
      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {filters.map(filter => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`px-6 py-2 rounded-full font-zentry transition-all duration-300
              ${activeFilter === filter.id 
                ? 'bg-primary text-white' 
                : 'bg-gray-800 hover:bg-gray-700 text-gray-300'}`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredGames.map((game, index) => (
          <GameCard key={game.title} game={game} index={index} />
        ))}
      </div>
    </div>
  );
};

export default GamesSection;