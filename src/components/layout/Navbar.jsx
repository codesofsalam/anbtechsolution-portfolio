// src/components/layout/Navbar.jsx
import { useState } from 'react';
import { Menu, X} from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ['NEXUS', 'VAULT', 'PROLOGUE', 'ABOUT', 'CONTACT'];
  
  return (
    <nav className="fixed w-full z-50 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src="/api/placeholder/40/40" alt="Logo" className="w-10 h-10" />
            <div className="ml-4">
              <button className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-md backdrop-blur-md">
                PRODUCTS ▼
              </button>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white/80 hover:text-white transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>
          
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full bg-black/90 backdrop-blur-md transition-all duration-300 ${
          isMenuOpen ? 'max-h-screen py-4' : 'max-h-0 overflow-hidden'
        }`}
      >
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="block px-6 py-2 text-white/80 hover:text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
};




export default Navbar;