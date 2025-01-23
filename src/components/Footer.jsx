import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    { 
      icon: <Twitter className="w-6 h-6 hover:text-blue-400" />, 
      href: "https://twitter.com/orbmatrix" 
    },
    { 
      icon: <Linkedin className="w-6 h-6 hover:text-blue-600" />, 
      href: "https://linkedin.com/company/orbmatrix" 
    },
    { 
      icon: <Github className="w-6 h-6 hover:text-gray-200" />, 
      href: "https://github.com/orbmatrix" 
    }
  ];

  return (
    <footer className="bg-gray-900 py-12">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center mb-4">
            <img src="/logo.png" alt="OrbiMatrix" className="h-10 mr-4" />
            <span className="text-white font-bold text-xl">OrbiMatrix</span>
          </div>
          <p className="text-gray-400">
            Innovative digital solutions at the intersection of Web3, AI, and mobile technologies.
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link to="/#services" className="text-gray-400 hover:text-white">Services</Link></li>
              <li><Link to="/#projects" className="text-gray-400 hover:text-white">Projects</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">Web Development</li>
              <li className="text-gray-400">AI Solutions</li>
              <li className="text-gray-400">Web3 Gaming</li>
            </ul>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Connect With Us</h4>
          <div className="flex space-x-4 mb-4">
            {socialLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white"
              >
                {link.icon}
              </a>
            ))}
          </div>
          <p className="text-gray-400">
            © {currentYear} OrbiMatrix. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;