import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-[#282828] py-4 px-6 flex justify-between items-center">
      <div className="flex items-center">
        <img src="/logo.png" alt="OrbiMatrix" className="h-8 mr-4" />
        <span className="text-white font-bold">OrbiMatrix</span>
      </div>
      <div>
        <ul className="flex space-x-6 text-white">
          <li><a href="#">Home</a></li>
          <li><a href="#">Team</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Project</a></li>
          <li><a href="#" className="bg-purple-500 py-2 px-4 rounded">Discuss Project</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;