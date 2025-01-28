import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Linkedin, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/anb-tech-solutions/",
      color: "hover:text-blue-600",
    },
    {
      icon: Facebook,
      href: "https://www.facebook.com/share/18GBjciTFb/",
      color: "hover:text-blue-500",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/anb.techsolutions?utm_source=qr&igsh=dGJ4eTFtZmFsbHFk",
      color: "hover:text-pink-500",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="bg-[#1A1A1A] py-8 sm:py-12 md:py-16 lg:py-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white/5 rounded-xl p-4 sm:p-5 lg:p-6"
          >
            <div className="flex flex-col items-center lg:items-start">
              <img
                src="/logo.png"
                alt="Company Logo"
                className="h-8 sm:h-10 lg:h-12 mb-4 lg:mb-6"
              />
              <p className="text-sm sm:text-base text-gray-300 mb-4 lg:mb-6 text-center lg:text-left">
                Innovative digital solutions at the intersection of technology
                and creativity — your trusted partner in crafting solutions for
                the digital age.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/5 rounded-xl p-4 sm:p-5 lg:p-6"
          >
            <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              <div>
                <h4 className="text-white font-semibold mb-3 text-base sm:text-lg">
                  Quick Links
                </h4>
                {["Home", "Services", "Projects", "Contact"].map((link) => (
                  <motion.a
                    key={link}
                    href={`/${link.toLowerCase()}`}
                    whileHover={{ x: 5 }}
                    className="block text-sm sm:text-base text-gray-300 mb-2 hover:text-white transition-colors"
                  >
                    {link}
                  </motion.a>
                ))}
              </div>
              <div>
                <h4 className="text-white font-semibold mb-3 text-base sm:text-lg">
                  Services
                </h4>
                {["Web Dev", "Mobile Apps", "UI/UX", "Marketing"].map(
                  (service) => (
                    <p
                      key={service}
                      className="text-sm sm:text-base text-gray-300 mb-2"
                    >
                      {service}
                    </p>
                  )
                )}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white/5 rounded-xl p-4 sm:p-5 lg:p-6 sm:col-span-2 lg:col-span-1"
          >
            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-center text-base sm:text-lg">
              Contact Us
            </h4>
            <div className="flex flex-col items-center mb-4 sm:mb-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#9333EA] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full 
                hover:bg-purple-700 transition-colors 
                font-semibold text-sm sm:text-base lg:text-lg shadow-md w-full sm:w-auto"
              >
                <Link to="/contact" className="block w-full h-full text-white">
                  Let&apos;s Discuss
                </Link>
              </motion.button>
            </div>
            <div className="flex justify-center space-x-4 sm:space-x-6">
              {socialLinks.map(({ icon: Icon, href, color }) => (
                <motion.a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  className={`text-gray-400 ${color} transition-colors`}
                >
                  <Icon className="w-5 sm:w-6 lg:w-7 h-5 sm:h-6 lg:h-7" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center text-xs sm:text-sm lg:text-base text-gray-400 mt-6 sm:mt-8 lg:mt-12 pt-4 sm:pt-6 lg:pt-8 border-t border-white/10"
        >
          © {new Date().getFullYear()} ANB Tech Solution. All rights reserved.
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Footer;
