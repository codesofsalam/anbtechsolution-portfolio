import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, ChevronLeft, ChevronRight } from "lucide-react";

const Projects = () => {
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
      image: "/limousine.jpg",
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
  }, [selectedProject, currentImageIndex]);

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
      className="bg-[#1A1A1A] py-6 md:py-8 lg:py-16 min-h-screen"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
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
          className="flex justify-center gap-4 mb-8"
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
              className="fixed inset-0 bg-black/90 z-50 p-1 sm:p-2 md:p-4 lg:p-8 overflow-y-auto"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                ref={modalRef}
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="bg-black/90 rounded-xl w-full max-w-4xl mx-auto my-2 sm:my-4 md:my-8 overflow-hidden relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-2 sm:top-4 right-2 sm:right-4 p-1 sm:p-2 bg-white/10 hover:bg-white/20 rounded-full text-white z-50"
                >
                  <X className="w-6 sm:w-8 h-6 sm:h-8" />
                </button>

                <div className="relative h-[60vh] sm:h-[70vh] w-full bg-black">
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-1 sm:p-2 bg-white/10 hover:bg-white/20 rounded-full text-white z-10 transform transition-transform hover:scale-110"
                  >
                    <ChevronLeft className="w-6 sm:w-8 h-6 sm:h-8" />
                  </button>

                  <img
                    src={selectedProject.fullImages[currentImageIndex]}
                    alt={`${selectedProject.name} - Image ${
                      currentImageIndex + 1
                    }`}
                    className="w-full h-full object-contain p-2 sm:p-4"
                  />

                  <button
                    onClick={handleNextImage}
                    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-1 sm:p-2 bg-white/10 hover:bg-white/20 rounded-full text-white z-10 transform transition-transform hover:scale-110"
                  >
                    <ChevronRight className="w-6 sm:w-8 h-6 sm:h-8" />
                  </button>

                  <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1 sm:gap-2">
                    {selectedProject.fullImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                          currentImageIndex === index
                            ? "bg-white scale-125"
                            : "bg-white/30"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="p-4 sm:p-6 md:p-8 space-y-2 sm:space-y-4 bg-black/80">
                  <div className="text-center">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 sm:mb-2">
                      {selectedProject.name}
                    </h2>
                    <p className="text-xs sm:text-sm md:text-base text-purple-400 font-medium">
                      {selectedProject.category}
                    </p>
                  </div>
                  <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed text-center max-w-2xl mx-auto">
                    {selectedProject.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default Projects;