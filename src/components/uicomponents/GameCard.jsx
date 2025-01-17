// src/components/ui/GameCard.jsx
import { useState } from 'react';
import PropTypes from 'prop-types';
import { ChevronRight } from 'lucide-react';

const GameCard = ({ game }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="game-card group relative bg-gradient-to-br from-purple-900 to-purple-600 rounded-xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{game.title}</h3>
        <p className="text-gray-300">{game.description}</p>
      </div>
      <img 
        src="/api/placeholder/400/250" 
        alt={game.title}
        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
      />
      
      {/* Game Details Overlay */}
      <div className={`absolute inset-0 bg-black/80 flex flex-col justify-center items-center p-6 transition-opacity duration-300 ${
        isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}>
        <h4 className="text-xl font-bold mb-4">{game.title}</h4>
        <div className="space-y-2 text-sm">
          <p>Genre: {game.genre}</p>
          <p>Players: {game.players}</p>
          <p>Release: {game.releaseDate}</p>
        </div>
        <button className="mt-6 px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-full flex items-center">
          Learn More <ChevronRight className="ml-2" size={16} />
        </button>
      </div>
    </div>
  );
};
GameCard.propTypes = {
  game: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    players: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number,
};

export default GameCard;