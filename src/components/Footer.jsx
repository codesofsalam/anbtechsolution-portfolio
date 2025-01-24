import React from "react";
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
      className="bg-[#1A1A1A] py-20"
    >
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white/5 rounded-xl p-6"
          >
            <img src="/logo.png" alt="Company Logo" className="h-12 mb-6" />
            <p className="text-gray-300 mb-6">
              Innovative digital solutions at the intersection of technology and
              creativity — your trusted partner in crafting solutions for the
              digital age.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/5 rounded-xl p-6 grid grid-cols-2 gap-8"
          >
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              {["Home", "Services", "Projects", "Contact"].map((link) => (
                <motion.a
                  key={link}
                  href={`/${link.toLowerCase()}`}
                  whileHover={{ x: 5 }}
                  className="block text-gray-300 mb-2 hover:text-white transition-colors"
                >
                  {link}
                </motion.a>
              ))}
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              {["Web Dev", "Mobile Apps", "UI/UX", "Marketing"].map(
                (service) => (
                  <p key={service} className="text-gray-300 mb-2">
                    {service}
                  </p>
                )
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white/5 rounded-xl p-6"
          >
            <h4 className="text-white font-semibold mb-4 text-center">
              Contact Us
            </h4>
            <div className="flex flex-col items-center mb-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#9333EA] text-white px-6 py-3 rounded-full 
             hover:bg-purple-700 transition-colors 
             font-semibold text-lg shadow-md"
              >
                <Link to="/contact" className="block w-full h-full text-white">
                  Let&apos;s Discuss
                </Link>
              </motion.button>
            </div>
            <div className="flex justify-center space-x-4">
              {socialLinks.map(({ icon: Icon, href, color }) => (
                <motion.a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  className={`text-gray-400 ${color} transition-colors`}
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center text-gray-400 mt-12 pt-8 border-t border-white/10"
        >
          © {new Date().getFullYear()} ANB Tech Solution. All rights reserved.
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Footer;
