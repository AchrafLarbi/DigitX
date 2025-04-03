"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronRight, ExternalLink, Github } from "lucide-react";
import { projects } from "../data";

interface ProjectsProps {
  isArabic: boolean;
}

// Define categories for filtering
const categories = ["All", "Web", "Mobile", "UI/UX"];

export function Projects({ isArabic }: ProjectsProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [expandedProjects, setExpandedProjects] = useState<
    Record<string, boolean>
  >({});

  // Filter projects based on selected category
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  useEffect(() => {
    // Simulate loading delay for animation purposes
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Smooth scroll to top of projects section when toggling view
    if (!showAllProjects) {
      document
        .getElementById("projects")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  }, [showAllProjects]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const toggleExpanded = (projectId: string) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [projectId]: !prev[projectId],
    }));
  };

  // Function to determine which links to show based on project ID
  const shouldShowExternalLink = (projectId: number) => {
    return projectId === 1 || projectId === 2;
  };

  const shouldShowGithubLink = (projectId: number) => {
    return projectId === 3 || projectId === 4 || projectId === 5;
  };

  return (
    <section
      id="projects"
      className="py-20 relative overflow-hidden bg-gradient-to-b from-blue-50 to-white"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-64 h-64 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-32 right-1/4 w-80 h-80 bg-cyan-200 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-blue-900 mb-10 relative inline-block">
            {isArabic ? "مشاريعنا" : "Our Projects"}
            <span className="absolute -bottom-3 left-0 right-0 h-1.5 bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500 rounded-full"></span>
          </h2>
          <p className="text-xl text-blue-700 max-w-2xl mx-auto">
            {isArabic
              ? "استكشف أحدث وأفضل المشاريع التي قمنا بتطويرها لعملائنا"
              : "Explore our latest and greatest projects we've developed for our clients"}
          </p>
        </motion.div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-300/50"
                  : "bg-white text-blue-700 border border-blue-200 hover:border-blue-300"
              }`}
            >
              {isArabic ? (category === "All" ? "الكل" : category) : category}
            </motion.button>
          ))}
        </div>

        {/* Project grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects
            .slice(0, showAllProjects ? filteredProjects.length : 6)
            .map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                onHoverStart={() => setHoveredProject(String(project.id))}
                onHoverEnd={() => setHoveredProject(null)}
                className="relative bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden h-56">
                  <img
                    src={
                      project.image || "/placeholder.svg?height=400&width=600"
                    }
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Hover overlay with buttons */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {shouldShowExternalLink(project.id) && (
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.link || "#"}
                        className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                    )}
                    {shouldShowGithubLink(project.id) && project.github && (
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.github}
                        className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-blue-900 group-hover:text-blue-600 transition-colors">
                      {isArabic ? project.titleAr : project.title}
                    </h3>
                    <span className="text-xs font-medium px-2 py-1 bg-blue-100 text-blue-700 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <p className={`text-blue-700 mb-4`}>
                    {isArabic ? project.descriptionAr : project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mt-auto mb-4">
                    {(expandedProjects[String(project.id)]
                      ? project.technologies
                      : project.technologies?.slice(0, 3)
                    )?.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 bg-blue-50 text-blue-600 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {!expandedProjects[String(project.id)] &&
                      (project.technologies?.length || 0) > 3 && (
                        <span className="text-xs px-2 py-1 bg-blue-50 text-blue-600 rounded-full">
                          +{(project.technologies?.length || 0) - 3}
                        </span>
                      )}
                  </div>

                  {/* Expand/Collapse button */}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      toggleExpanded(String(project.id));
                    }}
                    className="text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1 transition-colors"
                  >
                    {expandedProjects[String(project.id)]
                      ? isArabic
                        ? "عرض أقل"
                        : "Show Less"
                      : isArabic
                      ? "عرض المزيد"
                      : "Show More"}
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        expandedProjects[String(project.id)] ? "rotate-90" : ""
                      }`}
                    />
                  </button>
                </div>

                {/* Animated border on hover */}
                <div
                  className={`absolute inset-0 border-2 border-transparent rounded-xl transition-all duration-500 pointer-events-none ${
                    hoveredProject === String(project.id)
                      ? "border-blue-400"
                      : ""
                  }`}
                ></div>
              </motion.div>
            ))}
        </motion.div>

        {/* View more button */}
        {filteredProjects.length > 6 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-12 text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAllProjects(!showAllProjects)}
              className="inline-flex items-center gap-2 bg-white border border-blue-200 hover:border-blue-300 text-blue-700 px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-sm hover:shadow"
            >
              {isArabic
                ? showAllProjects
                  ? "عرض أقل"
                  : "عرض المزيد من المشاريع"
                : showAllProjects
                ? "Show Less"
                : "View More Projects"}
              <ChevronRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
