"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ExternalLink,
  CheckCircle2,
  Clock,
  Users,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Project } from "../types";

interface ProjectDialogProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  isArabic: boolean;
}

export function ProjectDialog({
  project,
  isOpen,
  onClose,
  isArabic,
}: ProjectDialogProps) {
  const [activeSection, setActiveSection] = useState<
    "story" | "solution" | "results"
  >("story");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Use gallery images if available, otherwise use the main image
  const displayImages =
    project?.galleryImages && project.galleryImages.length > 0
      ? project.galleryImages
      : [project?.image || ""];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % displayImages.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? displayImages.length - 1 : prev - 1,
    );
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setActiveSection("story");
      setCurrentImageIndex(0);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Keyboard navigation for image carousel
  useEffect(() => {
    if (!isOpen || displayImages.length <= 1) return;

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setCurrentImageIndex((prev) =>
          prev === 0 ? displayImages.length - 1 : prev - 1,
        );
      } else if (e.key === "ArrowRight") {
        setCurrentImageIndex((prev) => (prev + 1) % displayImages.length);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [isOpen, displayImages.length]);

  if (!project) return null;

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const dialogVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", damping: 25, stiffness: 300 },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: isArabic ? 20 : -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Dialog */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              variants={dialogVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="bg-white rounded-3xl shadow-2xl max-w-5xl w-full max-h-[85vh] overflow-hidden pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header with Image Carousel */}
              <div className="relative h-48 md:h-56 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    src={displayImages[currentImageIndex]}
                    alt={`${project.title} - ${currentImageIndex + 1}`}
                    className="w-full h-full object-contain object-center bg-slate-100"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.3 }}
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* Navigation arrows - only show if there are multiple images */}
                {displayImages.length > 1 && (
                  <>
                    <button
                      onClick={previousImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/30 transition-all duration-300 border border-white/30 shadow-lg hover:shadow-xl z-10"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/30 transition-all duration-300 border border-white/30 shadow-lg hover:shadow-xl z-10"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>

                    {/* Image indicators */}
                    <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                      {displayImages.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            index === currentImageIndex
                              ? "bg-white w-8"
                              : "bg-white/50 hover:bg-white/75"
                          }`}
                          aria-label={`Go to image ${index + 1}`}
                        />
                      ))}
                    </div>

                    {/* Image counter */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-black/40 backdrop-blur-md text-white text-sm font-medium border border-white/20">
                      {currentImageIndex + 1} / {displayImages.length}
                    </div>
                  </>
                )}

                {/* Close button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2.5 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 hover:rotate-90 transition-all duration-300 border border-white/20 shadow-lg hover:shadow-xl z-10"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Title overlay */}
                <div
                  className={`absolute bottom-6 ${isArabic ? "right-6" : "left-6"} max-w-2xl`}
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 drop-shadow-lg">
                    {isArabic ? project.titleAr : project.title}
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500/90 to-blue-600/90 backdrop-blur-md text-white text-xs font-semibold shadow-lg border border-white/20">
                      {project.category}
                    </span>
                    {project.clientIndustry && (
                      <span className="px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-white text-xs font-medium border border-white/30 shadow-lg">
                        {isArabic
                          ? project.clientIndustryAr
                          : project.clientIndustry}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="overflow-y-auto max-h-[calc(85vh-14rem)]">
                {/* Navigation tabs */}
                <div className="sticky top-0 z-10 bg-gradient-to-b from-white via-white to-white/95 backdrop-blur-sm border-b border-slate-200/80 px-6 pt-6 shadow-sm">
                  <div className="flex gap-2 overflow-x-auto pb-0.5">
                    <button
                      onClick={() => setActiveSection("story")}
                      className={`relative px-5 py-2.5 rounded-lg text-sm font-semibold transition-all whitespace-nowrap ${
                        activeSection === "story"
                          ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md shadow-blue-500/30"
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                      }`}
                    >
                      {activeSection === "story" && (
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400/20 to-blue-600/20 blur-sm"></div>
                      )}
                      <span className="relative">
                        {isArabic ? "القصة" : "The Story"}
                      </span>
                    </button>
                    <button
                      onClick={() => setActiveSection("solution")}
                      className={`relative px-5 py-2.5 rounded-lg text-sm font-semibold transition-all whitespace-nowrap ${
                        activeSection === "solution"
                          ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/30"
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                      }`}
                    >
                      {activeSection === "solution" && (
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/20 to-indigo-600/20 blur-sm"></div>
                      )}
                      <span className="relative">
                        {isArabic ? "الحل" : "The Solution"}
                      </span>
                    </button>
                    <button
                      onClick={() => setActiveSection("results")}
                      className={`relative px-5 py-2.5 rounded-lg text-sm font-semibold transition-all whitespace-nowrap ${
                        activeSection === "results"
                          ? "bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-md shadow-indigo-600/30"
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                      }`}
                    >
                      {activeSection === "results" && (
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500/20 to-blue-600/20 blur-sm"></div>
                      )}
                      <span className="relative">
                        {isArabic ? "النتائج" : "The Results"}
                      </span>
                    </button>
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <AnimatePresence mode="wait">
                    {/* Story Section */}
                    {activeSection === "story" && (
                      <motion.div
                        key="story"
                        variants={contentVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className={isArabic ? "text-right" : "text-left"}
                      >
                        {/* Client info */}
                        {project.clientName && (
                          <div className="mb-6 p-5 rounded-2xl relative overflow-hidden bg-gradient-to-br from-blue-50/80 via-indigo-50/60 to-blue-50/80 border border-blue-200/50 backdrop-blur-sm">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl"></div>
                            <div className="relative flex items-start gap-3">
                              <div className="p-2 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg shadow-blue-500/20">
                                <Users className="w-5 h-5 text-white flex-shrink-0" />
                              </div>
                              <div>
                                <h3 className="font-bold text-slate-900 mb-1.5 text-sm uppercase tracking-wide">
                                  {isArabic ? "العميل" : "Client"}
                                </h3>
                                <p className="text-slate-700 font-medium text-base">
                                  {project.clientName}
                                </p>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Client Story */}
                        {(project.clientStory || project.clientStoryAr) && (
                          <div className="mb-8">
                            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg shadow-blue-500/20">
                                <div className="w-1.5 h-5 bg-white rounded-full" />
                              </div>
                              {isArabic ? "كيف بدأت القصة" : "How It Started"}
                            </h3>
                            <p className="text-slate-600 leading-relaxed text-base">
                              {isArabic
                                ? project.clientStoryAr
                                : project.clientStory}
                            </p>
                          </div>
                        )}

                        {/* Challenge */}
                        {(project.challenge || project.challengeAr) && (
                          <div className="mb-8 p-6 rounded-2xl relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50/30 border border-slate-200/60 shadow-sm">
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-400/5 rounded-full blur-2xl"></div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3 relative">
                              <div className="p-2 rounded-xl bg-gradient-to-br from-blue-400 to-blue-500 shadow-md shadow-blue-400/20">
                                <Clock className="w-5 h-5 text-white" />
                              </div>
                              {isArabic ? "التحدي" : "The Challenge"}
                            </h3>
                            <p className="text-slate-700 leading-relaxed relative">
                              {isArabic
                                ? project.challengeAr
                                : project.challenge}
                            </p>
                          </div>
                        )}

                        {/* Timeline */}
                        {project.timeline && (
                          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gradient-to-r from-slate-100 to-blue-50 border border-slate-200/60 text-sm shadow-sm">
                            <div className="p-1 rounded-full bg-gradient-to-br from-blue-400 to-blue-500">
                              <Clock className="w-3.5 h-3.5 text-white" />
                            </div>
                            <span className="text-slate-600 font-medium">
                              {isArabic ? "المدة: " : "Timeline: "}
                            </span>
                            <span className="font-bold text-slate-900">
                              {isArabic ? project.timelineAr : project.timeline}
                            </span>
                          </div>
                        )}
                      </motion.div>
                    )}

                    {/* Solution Section */}
                    {activeSection === "solution" && (
                      <motion.div
                        key="solution"
                        variants={contentVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className={isArabic ? "text-right" : "text-left"}
                      >
                        {/* Solution description */}
                        {(project.solution || project.solutionAr) && (
                          <div className="mb-8">
                            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg shadow-blue-600/25">
                                <div className="w-1.5 h-5 bg-white rounded-full" />
                              </div>
                              {isArabic ? "الحل الذي قدمناه" : "Our Solution"}
                            </h3>
                            <p className="text-slate-600 leading-relaxed text-base mb-6">
                              {isArabic ? project.solutionAr : project.solution}
                            </p>
                          </div>
                        )}

                        {/* Technologies */}
                        <div className="mb-6">
                          <h4 className="text-sm font-bold text-slate-800 mb-3 uppercase tracking-wide">
                            {isArabic
                              ? "التقنيات المستخدمة"
                              : "Technologies Used"}
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, index) => (
                              <motion.span
                                key={tech}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.05 }}
                                className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/40 text-slate-700 text-sm font-medium hover:border-blue-300 hover:shadow-sm transition-all"
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </div>

                        {/* Description */}
                        <div className="p-5 rounded-2xl relative overflow-hidden bg-gradient-to-br from-blue-50/70 via-indigo-50/50 to-blue-50/70 border border-blue-200/40 backdrop-blur-sm">
                          <div className="absolute top-0 left-0 w-24 h-24 bg-blue-400/10 rounded-full blur-2xl"></div>
                          <p className="text-slate-700 leading-relaxed relative">
                            {isArabic
                              ? project.descriptionAr
                              : project.description}
                          </p>
                        </div>
                      </motion.div>
                    )}

                    {/* Results Section */}
                    {activeSection === "results" && (
                      <motion.div
                        key="results"
                        variants={contentVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className={isArabic ? "text-right" : "text-left"}
                      >
                        <div className="mb-6">
                          <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                            <div className="p-2 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg shadow-blue-600/25">
                              <TrendingUp className="w-5 h-5 text-white" />
                            </div>
                            {isArabic ? "النتائج والتأثير" : "Results & Impact"}
                          </h3>
                        </div>

                        {project.results && project.results.length > 0 ? (
                          <div className="space-y-3">
                            {project.results.map((result, index) => (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0, x: isArabic ? 20 : -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-start gap-3 p-4 rounded-xl relative overflow-hidden bg-gradient-to-r from-blue-50/80 via-indigo-50/60 to-blue-50/80 border border-blue-200/50 hover:border-blue-300/60 transition-all hover:shadow-sm"
                              >
                                <div className="absolute top-0 right-0 w-20 h-20 bg-blue-400/5 rounded-full blur-xl"></div>
                                <div className="p-1.5 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 shadow-md shadow-blue-500/20 flex-shrink-0 relative">
                                  <CheckCircle2 className="w-4 h-4 text-white" />
                                </div>
                                <p className="text-slate-700 leading-relaxed relative font-medium">
                                  {isArabic && project.resultsAr
                                    ? project.resultsAr[index]
                                    : result}
                                </p>
                              </motion.div>
                            ))}
                          </div>
                        ) : (
                          <div className="p-8 text-center">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/50">
                              <CheckCircle2 className="w-5 h-5 text-blue-600" />
                              <p className="text-slate-600 font-medium">
                                {isArabic
                                  ? "تم تسليم المشروع بنجاح وفقاً لمتطلبات العميل"
                                  : "Project successfully delivered according to client requirements"}
                              </p>
                            </div>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Footer CTA */}
                {project.github && (
                  <div className="px-6 md:px-8 pb-6 md:pb-8">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/40 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <ExternalLink className="w-4 h-4" />
                      {isArabic ? "زيارة الموقع" : "Visit Live Site"}
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
