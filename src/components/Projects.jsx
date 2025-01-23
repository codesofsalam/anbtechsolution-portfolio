import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, ExternalLink } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      name: 'C&S Limousine Service',
      category: 'Web Deve',
      description: 'Blockchain-powered trivia game with play-to-earn mechanics',
      image: '/limousine.PNG',
      technologies: ['Solidity', 'React', 'Web3.js'],
      githubLink: '#',
      liveLink: '#'
    },
   
    {
      name: 'OIB-Online Islamic Book App',
      category: 'Mobile App',
      description: 'Agricultural staking game with NFT farming mechanics',
      image: '/oib.PNG',
      technologies: ['Solidity', 'Unity', 'Web3.js'],
      githubLink: '#',
      liveLink: '#'
    },
    {
      name: 'Salah Tracker',
      category: 'Mobile App',
      description: 'Decentralized platform for community-driven wish fulfillment',
      image: '/salahapp.PNG',
      technologies: ['Next.js', 'Ethereum', 'IPFS'],
      githubLink: '#',
      liveLink: '#'
    }
  ];

  const categories = ['All', ...new Set(projects.map(p => p.category))];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section className="bg-gray-800 py-20">
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
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
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
              <div className="p-6">
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
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            onClick={() => setSelectedProject(null)}
          >
            <div 
              className="bg-gray-900 max-w-2xl w-full rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedProject.image} 
                alt={selectedProject.name} 
                className="w-full h-96 object-cover" 
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {selectedProject.name}
                </h3>
                <p className="text-gray-400 mb-4">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.technologies.map(tech => (
                    <span 
                      key={tech} 
                      className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-md text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a 
                    href={selectedProject.githubLink} 
                    className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700"
                  >
                    GitHub
                  </a>
                  <a 
                    href={selectedProject.liveLink} 
                    className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600"
                  >
                    Live Site
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;