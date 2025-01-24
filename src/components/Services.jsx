import { useState } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const Services = () => {
  const services = [
    {
      image: "/mobapp.jpg",
      title: "Mobile App Development",
      description:
        "Custom mobile app development for iOS and Android platforms, creating innovative and user-friendly mobile solutions.",
    },
    {
      image: "/web.jpg",
      title: "Web Development",
      description:
        "Responsive and dynamic web development using modern technologies to create engaging and functional websites.",
    },
    {
      image: "/seo.jpg",
      title: "Digital Marketing",
      description:
        "Comprehensive digital marketing strategies to boost online visibility, traffic, and conversion rates.",
    },
    {
      image: "/E-commerce.jpg",
      title: "E-Commerce",
      description:
        "Full-featured e-commerce solutions with secure payment integration and seamless user experience.",
    },
    {
      image: "/UIUX.png",
      title: "UI/UX Design",
      description:
        "Intuitive and aesthetically pleasing user interface and user experience design to enhance user satisfaction.",
    },
    {
      image: "/apsol.jpg",
      title: "Application Solutions",
      description:
        "Tailored software solutions to streamline business processes and improve operational efficiency.",
    },
  ];

  const [hoveredService, setHoveredService] = useState(null);

  return (
    <section className="bg-[#1A1A1A] text-white py-12 md:py-20" id="services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Services
          </h2>
          <p className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto">
            We provide comprehensive digital solutions tailored to meet your
            business needs and drive growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.2,
                duration: 0.5,
              }}
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-xl shadow-lg"
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="relative h-56 md:h-80 overflow-hidden">
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className={`w-full h-full object-cover transition-all duration-300 ${
                    hoveredService === index
                      ? "scale-110 blur-sm"
                      : "scale-100 blur-none"
                  }`}
                  initial={{ scale: 1 }}
                  animate={{
                    scale: hoveredService === index ? 1.1 : 1,
                    filter:
                      hoveredService === index ? "blur(4px)" : "blur(0px)",
                  }}
                  transition={{ duration: 0.3 }}
                />
                <AnimatedOverlay
                  isHovered={hoveredService === index}
                  description={service.description}
                />
              </div>
              <motion.div
                className="p-4 text-center bg-purple-600"
                initial={{ height: "auto" }}
                animate={{
                  backgroundColor:
                    hoveredService === index ? "#7E22CE" : "#9333EA",
                }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-base md:text-lg font-semibold">
                  {service.title}
                </h3>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AnimatedOverlay = ({ isHovered, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{
        opacity: isHovered ? 1 : 0,
        y: isHovered ? 0 : 50,
      }}
      transition={{ duration: 0.3 }}
      className={`absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 md:p-6 ${
        isHovered ? "visible" : "invisible"
      }`}
    >
      <p className="text-white text-center text-xs md:text-sm">{description}</p>
    </motion.div>
  );
};

AnimatedOverlay.propTypes = {
  isHovered: PropTypes.bool.isRequired,
  description: PropTypes.string.isRequired,
};

export default Services;
