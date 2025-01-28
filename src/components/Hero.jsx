import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-[#1A1A1A] flex items-center py-16 sm:py-20 lg:py-24"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6 md:space-y-8 text-center lg:text-left order-2 lg:order-1"
        >
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight"
          >
            Your Partner for Trusted Solutions in the Digital Age
          </motion.h1>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0"
          >
            As a leading digital services provider, we specialize in crafting
            custom mobile apps, tailored marketing strategies, e-commerce
            solutions, and innovative UI/UX design. Our expertise ensures your
            digital projects stand out, driving growth and engagement.
          </motion.p>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start"
          >
            <Link
              to="/projects"
              className="inline-block bg-purple-600 text-white px-6 sm:px-8 py-3 rounded-full hover:bg-purple-700 transition-all duration-300 text-sm sm:text-base md:text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              See Our Work
            </Link>
            <Link
              to="/contact"
              className="inline-block border border-white/30 text-white px-6 sm:px-8 py-3 rounded-full hover:bg-white/10 transition-all duration-300 text-sm sm:text-base md:text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Contact Us
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative order-1 lg:order-2"
        >
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex justify-center lg:justify-end"
          >
            <img
              src="/Hero.png"
              alt="Hero Image"
              className="w-full -ml-16 max-w-[280px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-[520px] xl:max-w-[600px] h-auto object-contain"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
