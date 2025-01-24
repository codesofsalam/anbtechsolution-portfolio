import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-[#1A1A1A] text-white shadow-lg">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="/logo.png"
            alt="ANB Tech Solution"
            className="h-10 w-auto mr-8 hover:scale-105 transition-transform"
          />
        </div>
        <div>
          <ul className="flex items-center space-x-8">
            {[
              { label: "Home", path: "/" },
              { label: "Services" },
              { label: "Project", path: "/projects" },
              { label: "Contact", path: "/contact" },
            ].map(({ label, path }) => (
              <li key={label}>
                <Link
                  to={path}
                  className="text-lg font-medium text-gray-300 hover:text-white transition-colors relative group"
                >
                  {label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/contact"
                className="bg-purple-600 text-white text-lg px-6 py-2 rounded-full hover:bg-purple-700 transition-colors shadow-md hover:shadow-lg"
              >
                Discuss Project
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <hr className="border-t border-gray-700 w-full" />
    </div>
  );
};

export default Navbar;
