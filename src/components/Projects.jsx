import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight} from 'lucide-react';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      name: 'C&S Limousine Service',
      category: 'Web App',
      description: 'C&S Limousine Services provides premium chauffeur services for any occasion. They have a fleet of luxury vehicles and employ professional, courteous drivers to ensure a comfortable and reliable transportation experience.',
      image: '/limousine.PNG',
      fullImage: '/limousine-full.png',
    },
    {
      name: 'OIB-Online Islamic Book App',
      category: 'Mobile App',
      description: 'Online Islamic Book is an e-commerce platform that sells a wide variety of Islamic books, including the Noble Quran, books on the life of Prophet Muhammad, and other educational and reference materials related to Islam. They offer fast shipping and a secure online ordering process.',
      image: '/oib.PNG',
      fullImage: '/oib2.jpg',
    },
    {
      name: 'Salah Tracker',
      category: 'Mobile App',
      description: 'The Salah Tracker is a mobile application that helps users track their daily prayers (salah) and other Islamic practices like learning the Quran, remembering Allah\'s \'99\' names, and counting tasbeeh. It provides prayer timing reminders and logs user\'s religious activities.',
      image: '/salahapp.PNG',
      fullImage: '/salahtracker.jpg',
    }
  ];

  const categories = ['All', ...new Set(projects.map(p => p.category))];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="bg-[#1A1A1A] py-12 md:py-20"
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto">
            Innovative solutions that push technological boundaries
          </p>
        </motion.div>

        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="flex justify-center space-x-2 md:space-x-4 mb-8 md:mb-12 flex-wrap"
        >
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`
                px-4 md:px-6 py-1 md:py-2 rounded-full transition-all m-1
                ${selectedCategory === category 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'}
              `}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {projects
            .filter(p => selectedCategory === 'All' || p.category === selectedCategory)
            .map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedProject(project)}
                className="bg-white/5 rounded-xl overflow-hidden cursor-pointer"
              >
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="text-white w-12 h-12" />
                  </div>
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                    {project.name}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base">
                    {project.category}
                  </p>
                </div>
              </motion.div>
            ))
          }
        </motion.div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 md:p-8 overflow-y-auto"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div 
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="bg-white/10 rounded-xl max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden relative max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-center p-4">
                  <img 
                    src={selectedProject.fullImage} 
                    alt={selectedProject.name} 
                    className="w-full max-h-[600px] object-contain"
                  />
                </div>
                <div className="p-4 md:p-8 text-white flex flex-col">
                  <h2 className="text-2xl md:text-3xl mt-5 font-bold mb-4 flex items-center justify-between">
                    {selectedProject.name}
                  </h2>
                  <p className="text-gray-300 mb-6 flex-grow overflow-y-auto text-sm md:text-base">
                    {selectedProject.description}
                  </p>
                  <div className="text-xs md:text-sm text-gray-400">
                    Category: {selectedProject.category}
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-2 right-4 text-white hover:text-red-500 transition-colors text-sm"
                >
                  Close (X)
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default Projects;