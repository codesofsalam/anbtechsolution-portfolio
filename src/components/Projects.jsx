import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
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

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.3,
        staggerChildren: 0.1 
      }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5 }
    },
    hover: { 
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section className="bg-[#1A1A1A] py-20 text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Our Innovative Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Showcasing groundbreaking solutions that push the boundaries of technology.
          </p>
        </motion.div>

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={categoryVariants}
          className="flex justify-center mb-12 space-x-4"
        >
          {categories.map(category => (
            <motion.button
              key={category}
              variants={categoryVariants}
              onClick={() => setActiveFilter(category)}
              className={`
                px-4 py-2 rounded-md transition-colors 
                ${activeFilter === category 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-[#2C2C2C] text-gray-300 hover:bg-gray-700'
                }
              `}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={categoryVariants}
          className="grid md:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.name}
              variants={projectVariants}
              whileHover="hover"
              className="bg-[#2C2C2C] rounded-xl overflow-hidden shadow-xl"
            >
              <motion.div 
                className="relative cursor-pointer overflow-hidden"
                onClick={() => setSelectedProject(project)}
              >
                <motion.img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-48 object-cover" 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
              <div className="p-6 bg-purple-600">
                <h3 className="text-xl font-bold">
                  {project.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-8"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="max-w-6xl w-full bg-[#2C2C2C] rounded-xl overflow-hidden flex"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="w-2/3 flex items-center justify-center">
                  <motion.img 
                    src={selectedProject.fullImage} 
                    alt={selectedProject.name} 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="max-w-full max-h-[90vh] object-contain" 
                  />
                </div>
                <div className="w-1/3 p-8">
                  <motion.h3 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-2xl font-bold mb-4"
                  >
                    {selectedProject.name}
                  </motion.h3>
                  <motion.p 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-400"
                  >
                    {selectedProject.description}
                  </motion.p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;