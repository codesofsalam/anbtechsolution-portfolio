import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const handleScrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Services", onClick: handleScrollToServices },
    { label: "Projects", path: "/projects" },
    { label: "Contact", path: "/contact" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <div className="bg-[#1A1A1A] text-white py-2 sm:py-3 lg:py-4 fixed w-full top-0 left-0 z-50">
      <nav className="container mx-auto px-4 md:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center z-50">
          <img
            src="/logo.png"
            alt="ANB Tech Solution"
            className="h-6 sm:h-8 md:h-10 w-auto cursor-pointer transition-transform duration-300 hover:scale-110"
          />
        </div>

        <button
          onClick={toggleMobileMenu}
          className="z-50 lg:hidden p-2 hover:bg-gray-800 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className="hidden lg:block">
          <ul className="flex items-center space-x-8 xl:space-x-12">
            {navItems.map(({ label, path, onClick }) => (
              <li key={label} className="relative group">
                <Link
                  to={path || "#"}
                  onClick={onClick}
                  className="text-base xl:text-lg font-medium text-gray-300 hover:text-white transition-colors duration-300"
                >
                  {label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/contact"
                className="bg-purple-600 text-white text-base xl:text-lg px-6 py-2 rounded-full hover:bg-purple-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Discuss Project
              </Link>
            </li>
          </ul>
        </div>

        <div
          className={`fixed inset-0 bg-[#1A1A1A] z-40 transition-transform duration-300 lg:hidden ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          } overflow-y-auto`}
          aria-hidden={!isMobileMenuOpen}
        >
          <div className="flex flex-col items-center justify-center min-h-screen px-4 py-20">
            <ul className="space-y-6 text-center w-full max-w-md mx-auto">
              {navItems.map(({ label, path, onClick }) => (
                <li key={label} className="w-full">
                  <Link
                    to={path || "#"}
                    onClick={onClick}
                    className="block text-lg sm:text-xl font-medium text-gray-300 hover:text-white transition-colors duration-300 py-3 px-4 rounded-lg hover:bg-gray-800"
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li className="pt-8">
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-block bg-purple-600 text-white text-lg sm:text-xl px-8 py-3 rounded-full hover:bg-purple-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 w-full sm:w-auto"
                >
                  Discuss Project
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <hr className="border-t border-white/20 w-full mt-5" />
      </div>
    </div>
  );
};

export default Navbar;
