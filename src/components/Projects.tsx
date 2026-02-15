"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projects } from "../data";
import { FloatingElements } from "./ui/FloatingElements";

interface ProjectsProps {
  isArabic: boolean;
}

export function Projects({ isArabic }: ProjectsProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);

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
              {isArabic ? "أعمالنا" : "Featured Work"}
              <DotGrid className="text-blue-400/50" />
            </h2>
            <p className="text-base md:text-lg text-slate-500 max-w-xl leading-relaxed">
              {isArabic
                ? "مشاريع مختارة تعكس التزامنا بالجودة والابتكار والتأثير الحقيقي على أعمال عملائنا"
                : "Selected projects that reflect our commitment to quality, innovation, and real business impact"}
            </p>
          </div>
        </motion.div>

        {/* Project grid — 2 columns */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects
            .slice(0, showAllProjects ? projects.length : 4)
            .map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="project-card-hover relative group rounded-2xl overflow-hidden bg-surface cursor-pointer"
              >
                {/* Wrap entire card in a link if github exists */}
                <a
                  href={project.github || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
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
                    {/* Default gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-400 group-hover:opacity-0"></div>

                    {/* Hover description overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/40 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-all duration-400">
                      <p className="text-sm text-white/90 leading-relaxed mb-3 line-clamp-3">
                        {isArabic ? project.descriptionAr : project.description}
                      </p>
                      {/* Tech tags */}
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-white/15 text-white/80 backdrop-blur-sm"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-white/15 text-white/80">
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>
                      {/* View link */}
                      <div className="flex items-center gap-1.5 text-blue-300 text-xs font-medium">
                        <ExternalLink className="w-3.5 h-3.5" />
                        {isArabic ? "عرض المشروع" : "View Project"}
                      </div>
                    </div>

                    {/* Title overlay at bottom (visible by default, hides on hover) */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 transition-opacity duration-400 group-hover:opacity-0">
                      <h3 className="text-xl font-bold text-white mb-1">
                        {isArabic ? project.titleAr : project.title}
                      </h3>
                      <span className="text-xs font-medium text-white/60">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
        </motion.div>

        {/* View more / Show less button */}
        {projects.length > 4 && (
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
                  : "عرض المزيد"
                : showAllProjects
                  ? "Show Less"
                  : "View All Projects"}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
