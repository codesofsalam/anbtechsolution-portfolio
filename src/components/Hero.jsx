import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="bg-[#1A1A1A] text-white py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center space-x-12">
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-1/2 pr-12"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl font-bold mb-6 leading-tight"
          >
            Your Partner for Trusted Solutions in the Digital Age
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg mb-10 opacity-90"
          >
            As a leading digital services provider, we specialize in crafting custom mobile apps for iOS and Android, along with tailored marketing strategies, e-commerce solutions, and innovative UI/UX design. Our expertise ensures your digital projects stand out, driving growth and engagement across platforms.
          </motion.p>
          
          <motion.a
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            href="/projects"
            className="inline-block bg-purple-600 text-white px-8 py-4 rounded-md hover:bg-purple-700 transition-colors duration-300 shadow-lg"
          >
            See Our Work {'>'}
          </motion.a>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-1/2"
        >
          <motion.img
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            src="/Hero.png"
            alt="Hero Image"
            className="w-full h-auto object-cover rounded-lg shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;