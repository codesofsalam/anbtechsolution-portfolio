import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      image: '/mobapp.jpg',
      title: 'Mobile App Development',
      description: 'Custom mobile app development for iOS and Android platforms, creating innovative and user-friendly mobile solutions.'
    },
    {
      image: '/web.jpg',
      title: 'Web Development',
      description: 'Responsive and dynamic web development using modern technologies to create engaging and functional websites.'
    },
    {
      image: '/seo.jpg',
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to boost online visibility, traffic, and conversion rates.'
    },
    {
      image: '/E-commerce.jpg',
      title: 'E-Commerce',
      description: 'Full-featured e-commerce solutions with secure payment integration and seamless user experience.'
    },
    {
      image: '/UIUX.png',
      title: 'UI/UX Design',
      description: 'Intuitive and aesthetically pleasing user interface and user experience design to enhance user satisfaction.'
    },
    {
      image: '/apsol.jpg',
      title: 'Application Solutions',
      description: 'Tailored software solutions to streamline business processes and improve operational efficiency.'
    },
  ];

  const [hoveredService, setHoveredService] = useState(null);

  return (
    <section className="bg-[#282828] text-white py-20 flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Added heading and subheading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Our Services</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We provide comprehensive digital solutions tailored to meet your business needs and drive growth.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.2,
                duration: 0.5
              }}
              className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all relative"
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="relative h-80">
                <img
                  src={service.image}
                  alt={service.title}
                  className={`w-full h-full object-cover transition-opacity duration-300 ${
                    hoveredService === index ? 'opacity-50' : 'opacity-100'
                  }`}
                />
                {hoveredService === index && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
                    <p className="text-white text-center text-sm">{service.description}</p>
                  </div>
                )}
              </div>
              <div className="p-4 text-center bg-purple-600">
                <h3 className="text-lg font-semibold">{service.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;