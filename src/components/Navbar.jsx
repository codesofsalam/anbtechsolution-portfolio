import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    { label: "Project", path: "/projects" },
    { label: "Contact", path: "/contact" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-[#1A1A1A] text-white py-4 md:py-8"
    >
      <nav className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <motion.img
            src="/logo.png"
            alt="ANB Tech Solution"
            initial={{ scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="h-8 md:h-10 w-auto mr-4 md:mr-8 cursor-pointer"
          />
        </motion.div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggleMobileMenu}
            className="z-50 relative"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Desktop Navigation */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="hidden md:block"
        >
          <ul className="flex items-center space-x-16">
            {navItems.map(({ label, path, onClick }) => (
              <motion.li
                key={label}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  to={path || "#"}
                  onClick={onClick}
                  className="text-lg font-medium text-gray-300 hover:text-white transition-colors relative group"
                >
                  {label}
                  <motion.span
                    layoutId={`underline-${label}`}
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"
                  />
                </Link>
              </motion.li>
            ))}
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="bg-[#9333EA] text-white text-lg px-6 py-2 rounded-full hover:bg-purple-700 transition-colors shadow-md hover:shadow-lg"
              >
                Discuss Project
              </Link>
            </motion.li>
          </ul>
        </motion.div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.3 }}
              className="md:hidden fixed inset-0 bg-[#1A1A1A] z-40 flex flex-col items-center justify-center"
            >
              <ul className="space-y-8 text-center">
                {navItems.map(({ label, path, onClick }) => (
                  <motion.li
                    key={label}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link
                      to={path || "#"}
                      onClick={onClick}
                      className="text-2xl font-medium text-gray-300 hover:text-white transition-colors"
                    >
                      {label}
                    </Link>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <Link
                    to="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="bg-[#9333EA] text-white text-xl px-8 py-3 rounded-full hover:bg-purple-700 transition-colors"
                  >
                    Discuss Project
                  </Link>
                </motion.li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="container mx-auto px-4 md:px-6"
      >
        <hr className="border-t border-white/20 w-full mt-5" />
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
