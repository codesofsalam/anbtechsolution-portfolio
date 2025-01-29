import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, X, ChevronLeft, ChevronRight } from "lucide-react";

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const modalRef = useRef(null);
  const timerRef = useRef(null);

  const projects = [
    {
      name: "C&S Limousine Service",
      category: "Web App",
      description:
        "C&S Limousine Services provides premium chauffeur services for any occasion. They have a fleet of luxury vehicles and employ professional, courteous drivers to ensure a comfortable and reliable transportation experience.",
      image: "/limousine.PNG",
      fullImages: [
        "/limousine1.png",
        "/limousine2.png",
        "/limousine3.png",
        "/limousine4.png",
      ],
    },
    {
      name: "OIB-Online Islamic Book App",
      category: "Mobile App",
      description:
        "Online Islamic Book is an e-commerce platform that sells a wide variety of Islamic books, including the Noble Quran, books on the life of Prophet Muhammad, and other educational and reference materials related to Islam. They offer fast shipping and a secure online ordering process.",
      image: "/oib.PNG",
      fullImages: [
        "/oib1.jpg",
        "/oib2.jpg",
        "/oib3.jpg",
        "/oib4.jpg",
        "/oib5.jpg",
        "/oib6.jpg",
        "/oib7.jpg",
        "/oib8.jpg",
        "/oib9.jpg",
        "/oib10.jpg",
      ],
    },
    {
      name: "Salah Tracker",
      category: "Mobile App",
      description:
        "The Salah Tracker is a mobile application that helps users track their daily prayers (salah) and other Islamic practices like learning the Quran, remembering Allah's '99' names, and counting tasbeeh. It provides prayer timing reminders and logs user's religious activities.",
      image: "/salahapp.PNG",
      fullImages: [
        "/salahtracker1.jpg",
        "/salahtracker2.jpg",
        "/salahtracker3.jpg",
        "/salahtracker4.jpg",
        "/salahtracker5.jpg",
        "/salahtracker6.jpg",
        "/salahtracker7.jpg",
        "/salahtracker8.jpg",
        "/salahtracker9.jpg",
        "/salahtracker10.jpg",
      ],
    },
  ];

  const categories = ["All", ...new Set(projects.map((p) => p.category))];

  useEffect(() => {
    if (selectedProject) {
      timerRef.current = setInterval(() => {
        setCurrentImageIndex((prev) =>
          prev === selectedProject.fullImages.length - 1 ? 0 : prev + 1
        );
      }, 5000);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [selectedProject]);

  useEffect(() => {
    let touchStartX = 0;
    let touchStartY = 0;

    const handleTouchStart = (e) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      if (!modalRef.current) return;

      const touchEndX = e.changedTouches[0].clientX;
      const touchEndY = e.changedTouches[0].clientY;
      const deltaX = touchEndX - touchStartX;
      const deltaY = touchEndY - touchStartY;

      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        if (Math.abs(deltaX) > 50) {
          if (deltaX > 0) {
            handlePrevImage();
          } else {
            handleNextImage();
          }
        }
      } else if (deltaY > 100) {
        setSelectedProject(null);
        setCurrentImageIndex(0);
      }
    };

    if (selectedProject) {
      document.addEventListener("touchstart", handleTouchStart);
      document.addEventListener("touchend", handleTouchEnd);
      return () => {
        document.removeEventListener("touchstart", handleTouchStart);
        document.removeEventListener("touchend", handleTouchEnd);
      };
    }
  }, [selectedProject]);

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === selectedProject.fullImages.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? selectedProject.fullImages.length - 1 : prev - 1
    );
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-[#1A1A1A] mt-20 min-h-screen py-6 md:py-10 lg:py-20"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
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

        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-6 md:mb-8 lg:mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
            Featured Projects
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-300 max-w-2xl mx-auto">
            Innovative solutions that push technological boundaries
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center flex-wrap gap-3 mb-8"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`
                px-6 py-3 rounded-full text-base font-medium transition-all
                ${
                  selectedCategory === category
                    ? "bg-purple-600 text-white shadow-lg shadow-purple-500/30"
                    : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white"
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
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
        >
          {projects
            .filter(
              (p) =>
                selectedCategory === "All" || p.category === selectedCategory
            )
            .map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => handleProjectClick(project)}
                className="bg-white/5 rounded-xl overflow-hidden cursor-pointer"
              >
                <div className="relative aspect-video">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="text-white w-8 md:w-10 lg:w-12 h-8 md:h-10 lg:h-12" />
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
            ))}
        </motion.div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 p-2 md:p-4 lg:p-8 overflow-y-auto"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                ref={modalRef}
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="bg-white/5 rounded-xl w-full max-w-5xl mx-auto my-4 md:my-8 flex flex-col lg:grid lg:grid-cols-2 overflow-hidden relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-2 right-2 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white z-50"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="relative flex items-center justify-center p-4 bg-black/50">
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white z-10 transform transition-transform hover:scale-110"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>

                  <img
                    src={selectedProject.fullImages[currentImageIndex]}
                    alt={`${selectedProject.name} - Image ${
                      currentImageIndex + 1
                    }`}
                    className="w-full h-48 md:h-64 lg:h-[60vh] object-contain"
                  />

                  <button
                    onClick={handleNextImage}
                    className="absolute right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white z-10 transform transition-transform hover:scale-110"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>

                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {selectedProject.fullImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          currentImageIndex === index
                            ? "bg-white scale-125"
                            : "bg-white/30"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="p-4 md:p-6 lg:p-8 text-white flex flex-col justify-between space-y-4 overflow-y-auto">
                  <div>
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 text-center lg:text-left">
                      {selectedProject.name}
                    </h2>
                    <p className="text-gray-300 mb-4 text-sm md:text-base leading-relaxed text-center lg:text-left">
                      {selectedProject.description}
                    </p>
                  </div>
                  <div className="bg-white/10 p-3 rounded-lg mx-auto lg:mx-0 w-full md:w-auto">
                    <span className="text-sm md:text-base text-gray-400 font-medium">
                      Category:
                    </span>
                    <span className="text-sm md:text-base text-white ml-2">
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
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gray-700 rounded-xl p-6 md:p-8 lg:p-12 mt-8 md:mt-12 lg:mt-16 text-center mx-2"
        >
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 lg:mb-6 text-white">
            Let&apos;s Discuss Your Project
          </h2>
          <p className="text-xs md:text-sm lg:text-base text-gray-300 mb-4 md:mb-6 lg:mb-8 max-w-2xl mx-auto">
            Ready to turn your innovative idea into reality? We&apos;re excited
            to hear about your project and discuss how ANB Tech Solution can
            help you achieve your goals.
          </p>
          <Link
            to="/contact"
            className="bg-purple-600 text-white px-4 md:px-6 lg:px-8 py-2 md:py-3 rounded-full text-sm md:text-base lg:text-lg font-semibold hover:bg-purple-700 transition-colors inline-block"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProjectsPage;
