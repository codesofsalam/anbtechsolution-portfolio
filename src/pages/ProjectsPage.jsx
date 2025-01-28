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
      className="bg-[#1A1A1A] mt-20 min-h-screen py-6 md:py-10 lg:py-20"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="text-center mb-8 md:mb-12 lg:mb-16"
        >
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-6 text-white">
            ANB Tech Solution
          </h1>
          <p className="max-w-4xl mx-auto text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed px-2">
            At ANB Tech Solution, we are passionate about transforming
            innovative ideas into cutting-edge digital solutions. Our team of
            expert developers, designers, and blockchain specialists are
            dedicated to creating revolutionary software that pushes the
            boundaries of technology.
          </p>
        </motion.div>

        <div className="text-center mb-6 md:mb-8 lg:mb-12">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-white mb-2 md:mb-4">
            Our Featured Projects
          </h2>
          <p className="text-sm md:text-base lg:text-xl text-gray-300 max-w-2xl mx-auto px-2">
            Innovative solutions that push technological boundaries
          </p>
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="flex justify-center flex-wrap gap-2 mb-6 md:mb-8 lg:mb-12 px-2"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`
                px-3 md:px-6 py-1 md:py-2 rounded-full transition-all text-xs md:text-sm lg:text-base
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 px-2"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedProject(project)}
              className="bg-white/5 rounded-xl overflow-hidden cursor-pointer"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-32 md:h-40 lg:h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="text-white w-6 md:w-8 lg:w-12 h-6 md:h-8 lg:h-12" />
                </div>
              </div>
              <div className="p-3 md:p-4 lg:p-6">
                <h3 className="text-sm md:text-base lg:text-xl font-semibold text-white mb-1 md:mb-2">
                  {project.name}
                </h3>
                <p className="text-xs md:text-sm text-gray-400">
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
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-2 md:p-4 lg:p-8 overflow-y-auto"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                ref={modalRef}
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="bg-white/10 rounded-xl w-full max-w-4xl overflow-hidden relative flex flex-col lg:grid lg:grid-cols-2"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-2 right-2 p-1 md:p-2 bg-white/10 hover:bg-white/20 rounded-full text-white z-50 w-6 h-6 md:w-8 md:h-8 flex items-center justify-center"
                >
                  <X className="w-4 h-4 md:w-5 md:h-5" />
                </button>

                <div className="flex items-center justify-center p-2 md:p-4 lg:p-6 w-full">
                  <img
                    src={selectedProject.fullImage}
                    alt={selectedProject.name}
                    className="w-full h-40 md:h-48 lg:h-[60vh] object-contain"
                  />
                </div>
                <div className="p-3 md:p-4 lg:p-8 text-white flex flex-col justify-between space-y-3 md:space-y-4">
                  <div>
                    <h2 className="text-base md:text-xl lg:text-3xl font-bold mb-2 md:mb-3 text-center lg:text-left">
                      {selectedProject.name}
                    </h2>
                    <p className="text-gray-300 mb-2 md:mb-4 text-xs md:text-sm lg:text-base leading-relaxed text-center lg:text-left">
                      {selectedProject.description}
                    </p>
                  </div>
                  <div className="bg-white/10 p-2 md:p-3 rounded-lg mx-auto lg:mx-0">
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

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-700 rounded-xl p-6 md:p-8 lg:p-12 mt-8 md:mt-12 lg:mt-16 text-center mx-2"
        >
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 lg:mb-6 text-white">
            Let&apos;s Discuss Your Project
          </h2>
          <p className="text-xs md:text-sm lg:text-base text-gray-300 mb-4 md:mb-6 lg:mb-8 max-w-2xl mx-auto">
            Ready to turn your innovative idea into reality? We&apos;re excited
            to hear about your project and discuss how OrbiMatrix can help you
            achieve your goals.
          </p>
          <Link
            to="/contact"
            className="bg-purple-600 text-white px-4 md:px-6 lg:px-8 py-2 md:py-3 rounded-full text-sm md:text-base lg:text-lg font-semibold
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
