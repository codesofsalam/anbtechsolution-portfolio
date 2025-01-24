import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, X } from "lucide-react";

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const modalRef = useRef(null);

  const projects = [
    {
      name: "C&S Limousine Service",
      category: "Web App",
      description:
        "C&S Limousine Services provides premium chauffeur services for any occasion. They have a fleet of luxury vehicles and employ professional, courteous drivers to ensure a comfortable and reliable transportation experience.",
      image: "/limousine.PNG",
      fullImage: "/limousine-full.png",
    },
    {
      name: "OIB-Online Islamic Book App",
      category: "Mobile App",
      description:
        "Online Islamic Book is an e-commerce platform that sells a wide variety of Islamic books, including the Noble Quran, books on the life of Prophet Muhammad, and other educational and reference materials related to Islam. They offer fast shipping and a secure online ordering process.",
      image: "/oib.PNG",
      fullImage: "/oib2.jpg",
    },
    {
      name: "Salah Tracker",
      category: "Mobile App",
      description:
        "The Salah Tracker is a mobile application that helps users track their daily prayers (salah) and other Islamic practices like learning the Quran, remembering Allah's '99' names, and counting tasbeeh. It provides prayer timing reminders and logs user's religious activities.",
      image: "/salahapp.PNG",
      fullImage: "/salahtracker.jpg",
    },
  ];

  const categories = ["All", ...new Set(projects.map((p) => p.category))];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="bg-[#1A1A1A] py-10 sm:py-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Company Description Section */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white">
            ANB Tech Solution
          </h1>
          <p className="max-w-4xl mx-auto text-gray-300 text-base sm:text-lg leading-relaxed">
            At ANB Tech Solution, we are passionate about transforming
            innovative ideas into cutting-edge digital solutions. Our team of
            expert developers, designers, and blockchain specialists are
            dedicated to creating revolutionary software that pushes the
            boundaries of technology. We believe in leveraging the latest
            technologies to solve complex problems and deliver exceptional value
            to our clients.
          </p>
        </motion.div>

        {/* Projects Section */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-4">
            Our Featured Projects
          </h2>
          <p className="text-base sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Innovative solutions that push technological boundaries
          </p>
        </div>

        {/* Category Filters */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="flex justify-center space-x-2 sm:space-x-4 mb-8 sm:mb-12 flex-wrap"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`
                px-3 sm:px-6 py-1 sm:py-2 rounded-full transition-all text-sm sm:text-base
                mb-2
                ${
                  activeFilter === category
                    ? "bg-purple-600 text-white"
                    : "bg-white/10 text-gray-300 hover:bg-white/20"
                }
              `}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
        >
          {filteredProjects.map((project, index) => (
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
                  className="w-full h-36 sm:h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="text-white w-8 sm:w-12 h-8 sm:h-12" />
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-base sm:text-xl font-semibold text-white mb-1 sm:mb-2">
                  {project.name}
                </h3>
                <p className="text-sm sm:text-base text-gray-400">
                  {project.category}
                </p>
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
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-2 md:p-8 overflow-y-auto"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                ref={modalRef}
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="bg-white/10 rounded-xl w-full max-w-4xl flex flex-col md:grid md:grid-cols-2 overflow-hidden relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-2 right-2 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white z-50 w-10 h-10 flex items-center justify-center"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="flex items-center justify-center p-4 md:p-6 w-full relative">
                  <img
                    src={selectedProject.fullImage}
                    alt={selectedProject.name}
                    className="w-full max-h-[70vh] object-contain"
                  />
                </div>
                <div className="p-4 md:p-8 text-white flex flex-col justify-between space-y-4 overflow-y-auto">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-3 text-center md:text-left">
                      {selectedProject.name}
                    </h2>
                    <p className="text-gray-300 mb-4 text-sm md:text-base leading-relaxed text-center md:text-left">
                      {selectedProject.description}
                    </p>
                  </div>
                  <div className="bg-white/10 p-3 rounded-lg mx-auto md:self-start">
                    <span className="text-xs md:text-sm text-gray-400 font-medium">
                      Category: 
                    </span>
                    <span className="text-xs md:text-sm text-white ml-2">
                      {selectedProject.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Let's Discuss Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-700 rounded-xl p-8 sm:p-12 mt-10 sm:mt-16 text-center"
        >
          <h2 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6 text-white">
            Let&apos;s Discuss Your Project
          </h2>
          <p className="text-sm sm:text-base text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Ready to turn your innovative idea into reality? We&apos;re excited
            to hear about your project and discuss how OrbiMatrix can help you
            achieve your goals.
          </p>
          <Link
            to="/contact"
            className="bg-purple-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-base sm:text-lg font-semibold
                       hover:bg-purple-700 transition-colors inline-block"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProjectsPage;
