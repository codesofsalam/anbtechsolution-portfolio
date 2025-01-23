import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-[#282828] py-4 px-6 flex justify-between items-center">
      <div className="flex items-center">
        <img src="/logo.png" alt="ANB Tech Solution" className="h-8 mr-4" />
     
      </div>
      <div>
        <ul className="flex space-x-6 text-white">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">Services</Link></li>
          <li><Link to="/projects">Project</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          
          <li>
            <Link 
              to="/contact" 
              className="bg-purple-500 py-2 px-4 rounded-full hover:bg-purple-600 transition-colors"
            >
              Discuss Project
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;