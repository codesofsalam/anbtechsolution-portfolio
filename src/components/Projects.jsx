import { useState } from 'react';
import { motion } from 'framer-motion';

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

  return (
    <section className="bg-[#282828] py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Innovative Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Showcasing groundbreaking solutions that push the boundaries of technology.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center mb-12 space-x-4">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`
                px-4 py-2 rounded-md transition-colors 
                ${activeFilter === category 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-[#111827] text-gray-300 hover:bg-gray-600'
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                delay: index * 0.2, 
                duration: 0.5 
              }}
              className="bg-gray-900 rounded-lg overflow-hidden transform hover:scale-105 transition-all"
            >
              <div 
                className="relative cursor-pointer" 
                onClick={() => setSelectedProject(project)}
              >
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-48 object-cover" 
                />
              </div>
              <div className="p-6 bg-purple-600">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
  <div 
    className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-8"
    onClick={() => setSelectedProject(null)}
  >
    <div 
      className="max-w-6xl w-full bg-gray-900 rounded-lg overflow-hidden flex"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="w-2/3 flex items-center justify-center">
        <img 
          src={selectedProject.fullImage} 
          alt={selectedProject.name} 
          className="max-w-full max-h-[90vh] object-contain" 
        />
      </div>
      <div className="w-1/3 p-8">
        <h3 className="text-2xl font-bold text-white mb-4">
          {selectedProject.name}
        </h3>
        <p className="text-gray-400 mb-4">
          {selectedProject.description}
        </p>
        
        
      </div>
    </div>
  </div>
)}
      </div>
    </section>
  );
};

export default Projects;