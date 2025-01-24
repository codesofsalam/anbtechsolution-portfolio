import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-[#1A1A1A] flex items-center"
    >
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-5xl font-bold text-white leading-tight"
          >
            Your Partner for Trusted Solutions in the Digital Age
          </motion.h1>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl text-gray-300"
          >
            As a leading digital services provider, we specialize in crafting
            custom mobile apps for iOS and Android, along with tailored
            marketing strategies, e-commerce solutions, and innovative UI/UX
            design. Our expertise ensures your digital projects stand out,
            driving growth and engagement across platforms.
          </motion.p>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex space-x-4"
          >
            <a
              href="/projects"
              className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-colors"
            >
              See Our Work
            </a>
            <button className="border border-white/30 text-white px-8 py-3 rounded-full hover:bg-white/10 transition-colors">
              Contact Us
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <motion.div
            animate={{
              y: [0, -20, 0],
              transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            <img
              src="/Hero.png"
              alt="Hero Image"
              className="w-full h-auto rounded-xl shadow-2xl"
            />
          </motion.div>
        </motion.div>
      </div>
      
    </motion.section>
  );
};

export default Hero;
