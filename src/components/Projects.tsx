"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "../data";
import { FloatingElements } from "./ui/FloatingElements";

interface ProjectsProps {
  isArabic: boolean;
}

// Define categories for filtering
const categories = ["All", "Web", "Mobile", "UI/UX", "AI"];

export function Projects({ isArabic }: ProjectsProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isLoaded, setIsLoaded] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);

  // Filter projects based on selected category
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
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
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  // Function to determine which links to show based on project ID
  const shouldShowExternalLink = (projectId: number) => {
    return projectId === 1 || projectId === 2 || projectId === 6;
  };

  const shouldShowGithubLink = (projectId: number) => {
    return projectId === 3 || projectId === 4 || projectId === 5;
  };

  // Dot grid decorator
  const DotGrid = ({ className = "" }: { className?: string }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" className={className}>
      {[0, 1, 2, 3].map((row) =>
        [0, 1, 2, 3].map((col) => (
          <circle
            key={`${row}-${col}`}
            cx={3 + col * 6}
            cy={3 + row * 6}
            r="2"
            className="fill-current"
          />
        )),
      )}
    </svg>
  );

  return (
    <section id="projects" className="py-20 md:py-28 relative overflow-hidden">
      {/* Subtle background accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl"></div>
        {/* White glow elements */}
        <div className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] bg-white/[0.02] rounded-full blur-[90px]"></div>
      </div>

      {/* Floating elements */}
      <FloatingElements variant="default" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header row */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6`}
        >
          <div className={isArabic ? "text-right" : "text-left"}>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              {isArabic ? "مشاريعنا" : "Our Projects"}
              <DotGrid className="text-blue-400/50" />
            </h2>
            <p className="text-base md:text-lg text-slate-500 max-w-xl leading-relaxed">
              {isArabic
                ? "استكشف أحدث وأفضل المشاريع التي قمنا بتطويرها لعملائنا"
                : "Explore our latest and greatest projects we've developed for our clients"}
            </p>
          </div>

          {/* Category filters as pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border filter-pill ${
                  selectedCategory === category
                    ? "accent-pill-btn border-transparent filter-pill-active"
                    : "text-slate-500 border-slate-200"
                }`}
              >
                {isArabic ? (category === "All" ? "الكل" : category) : category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Project grid — 2 columns */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {filteredProjects
            .slice(0, showAllProjects ? filteredProjects.length : 4)
            .map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="project-card-hover relative group rounded-2xl overflow-hidden bg-surface cursor-pointer"
              >
                {/* Project image */}
                <div className="relative overflow-hidden aspect-[16/10]">
                  {/* Shimmer overlay */}
                  <div className="project-shimmer"></div>
                  <img
                    src={
                      project.image || "/placeholder.svg?height=400&width=600"
                    }
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  {/* Hover action overlay */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-400 bg-black/30">
                    {shouldShowExternalLink(project.id) && (
                      <a
                        href={project.link || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-11 h-11 rounded-full bg-white/90 flex items-center justify-center text-background hover:bg-white transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                    {shouldShowGithubLink(project.id) && project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-11 h-11 rounded-full bg-white/90 flex items-center justify-center text-background hover:bg-white transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                  </div>

                  {/* Title overlay at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {isArabic ? project.titleAr : project.title}
                    </h3>
                    <span className="text-xs font-medium text-white/60">
                      {project.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
        </motion.div>

        {/* View more / Show less button */}
        {filteredProjects.length > 4 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-10 text-center"
          >
            <button
              onClick={() => setShowAllProjects(!showAllProjects)}
              className="px-8 py-3 rounded-full text-sm font-medium text-slate-600 border border-slate-200 filter-pill transition-all duration-300"
            >
              {isArabic
                ? showAllProjects
                  ? "عرض أقل"
                  : "عرض الكل"
                : showAllProjects
                  ? "Show Less"
                  : "Show All"}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
