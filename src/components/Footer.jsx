import React from 'react';
import { motion } from 'framer-motion';
import { 
  Linkedin, 
  Facebook, 
  Instagram
} from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { 
      icon: Linkedin, 
      href: "https://linkedin.com/company/orbmatrix",
      color: "hover:text-blue-600"
    },
    { 
      icon: Facebook, 
      href: "https://facebook.com/orbmatrix",
      color: "hover:text-blue-500"
    },
    { 
      icon: Instagram, 
      href: "https://instagram.com/orbmatrix",
      color: "hover:text-pink-500"
    }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="bg-gradient-to-br from-gray-900 to-black py-20"
    >
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Connect With Us
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Let&apos;s collaborate and bring your digital vision to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white/5 rounded-xl p-6"
          >
            <img 
              src="/logo.png" 
              alt="Company Logo" 
              className="h-12 mb-6" 
            />
            <p className="text-gray-300 mb-6">
              Innovative digital solutions at the intersection of technology and creativity.
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
              {['Home', 'Services', 'Projects', 'Contact'].map(link => (
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
              {['Web Dev', 'Mobile Apps', 'UI/UX', 'Marketing'].map(service => (
                <p key={service} className="text-gray-300 mb-2">
                  {service}
                </p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white/5 rounded-xl p-6"
          >
            <h4 className="text-white font-semibold mb-4 text-center">Contact Us</h4>
            <p className="text-gray-300 text-center mb-4">
              Email: contact@anbtechsolution.com<br />
              Phone: +1 (123) 456-7890
            </p>
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