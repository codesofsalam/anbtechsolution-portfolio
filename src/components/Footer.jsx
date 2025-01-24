import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: Twitter,
      href: "https://twitter.com/orbmatrix",
      hoverColor: "text-blue-400"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/company/orbmatrix",
      hoverColor: "text-blue-600"
    },
    {
      icon: Github,
      href: "https://github.com/orbmatrix",
      hoverColor: "text-gray-200"
    }
  ];

  const linkVariants = {
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-[#1A1A1A] py-12 text-white"
    >
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
        {/* Logo and Description */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center mb-4">
            <img 
              src="/logo.png" 
              alt="ANB Tech Solution" 
              className="h-10 mr-4 hover:scale-110 transition-transform" 
            />
          </div>
          <p className="text-gray-400">
            Innovative digital solutions at the intersection of Web3, AI, and mobile technologies.
          </p>
        </motion.div>

        {/* Quick Links and Services */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 gap-4"
        >
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Services', 'Project', 'Contact'].map((link) => (
                <motion.li 
                  key={link}
                  variants={linkVariants}
                  whileHover="hover"
                >
                  <Link 
                    to={link === 'Home' ? '/' : `/${link.toLowerCase()}`} 
                    className="text-gray-400 hover:text-white"
                  >
                    {link}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                'Mobile App Development', 
                'Web Development', 
                'Digital Marketing', 
                'E-Commerce', 
                'UI/UX Design', 
                'Application Solutions'
              ].map((service) => (
                <li key={service} className="text-gray-400">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h4 className="text-white font-semibold mb-4">Connect With Us</h4>
          <div className="flex space-x-4 mb-4">
            {socialLinks.map(({ icon: Icon, href, hoverColor }) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.2,
                  color: hoverColor
                }}
                transition={{ duration: 0.2 }}
                className="text-gray-400 hover:text-white"
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
          <p className="text-gray-400">
            © {currentYear} ANB Tech Solution. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;