"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Github,
  Instagram,
  Linkedin,
  Mail,
} from "lucide-react";
import { teamMembers } from "../data";

interface TeamProps {
  isArabic: boolean;
}

export function Team({ isArabic }: TeamProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);
  const [visibleMembers, setVisibleMembers] = useState(3);
  const containerRef = useRef<HTMLDivElement>(null);

  // Update visible members based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleMembers(1); // Mobile: 1 member at a time
      }
      if (window.innerWidth < 1024) {
        setVisibleMembers(2); // Tablet: 2 members at a time
      } else {
        setVisibleMembers(3); // Desktop: 3 members at a time
      }
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = teamMembers.length - visibleMembers + 1;

  const scrollPrev = () => {
    setActiveIndex((prev) => Math.max(prev - 1, 0));
  };

  const scrollNext = () => {
    setActiveIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case "github":
        return <Github className="w-4 h-4" />;
      case "instagram":
        return <Instagram className="w-4 h-4" />;
      case "linkedin":
        return <Linkedin className="w-4 h-4" />;
      case "email":
        return <Mail className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <section
      id="team"
      className="py-8 md:py-24 relative overflow-hidden bg-gradient-to-b from-white bg-black to-blue-50"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-40 h-40 rounded-full bg-blue-100 opacity-50"></div>
        <div className="absolute bottom-1/4 -left-20 w-40 h-40 rounded-full bg-purple-100 opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-2 md:mb-4 relative inline-block">
            {isArabic ? "فريقنا" : "Our Team"}
            <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></span>
          </h2>
          <p className="text-base md:text-xl text-blue-700 max-w-2xl mx-auto">
            {isArabic
              ? "تعرف على الخبراء المتخصصين الذين يجعلون الأمور تحدث"
              : "Meet the talented specialists who make things happen"}
          </p>
        </motion.div>

        <div className="relative">
          {/* Navigation buttons - mobile-friendly positioning */}
          <div
            className={`absolute top-1/2 ${
              isArabic ? "-right-1 sm:-right-4" : "-left-1 sm:-left-4"
            } -translate-y-1/2 z-10`}
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={isArabic ? scrollNext : scrollPrev}
              disabled={isArabic ? activeIndex === maxIndex : activeIndex === 0}
              className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center shadow-md ${
                (isArabic ? activeIndex === maxIndex : activeIndex === 0)
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-white text-blue-600 hover:bg-blue-50"
              }`}
            >
              <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
            </motion.button>
          </div>

          <div
            className={`absolute top-1/2 ${
              isArabic ? "-left-1 sm:-left-4" : "-right-1 sm:-right-4"
            } -translate-y-1/2 z-10`}
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={isArabic ? scrollPrev : scrollNext}
              disabled={isArabic ? activeIndex === 0 : activeIndex === maxIndex}
              className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center shadow-md ${
                (isArabic ? activeIndex === 0 : activeIndex === maxIndex)
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-white text-blue-600 hover:bg-blue-50"
              }`}
            >
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
            </motion.button>
          </div>

          {/* Team members carousel */}
          <div className="overflow-hidden mx-2 md:mx-4" ref={containerRef}>
            <motion.div
              className="flex md:gap-8"
              initial={false}
              animate={{
                x: isArabic
                  ? `${activeIndex * (100 / visibleMembers)}%`
                  : `-${activeIndex * (100 / visibleMembers)}%`,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{
                width: `${(teamMembers.length / visibleMembers) * 100}%`,
                flexDirection: isArabic ? "row" : "row",
              }}
            >
              {teamMembers.map((member) => (
                <motion.div
                  key={member.id}
                  className="w-full"
                  style={{ flex: `0 0 ${100 / visibleMembers}%` }}
                  onHoverStart={() => setHoveredMember(member.id)}
                  onHoverEnd={() => setHoveredMember(null)}
                >
                  <motion.div
                    className="bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col"
                    whileHover={{ y: -5 }}
                  >
                    {/* Image container - made to match second example */}
                    <div className="flex justify-center items-center py-4 px-2">
                      <div className="relative overflow-hidden w-32 h-48 md:w-full md:h-64">
                        <img
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          className="w-full h-full mx-auto object-contain"
                        />
                      </div>
                    </div>

                    <div className="p-4 md:p-6 flex-grow flex flex-col">
                      <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-1">
                        {isArabic ? member.nameAr : member.name}
                      </h3>
                      <p className="text-sm md:text-base text-blue-600 font-medium mb-2 md:mb-3">
                        {isArabic ? member.roleAr : member.role}
                      </p>
                      <p className="text-xs md:text-base text-gray-600 mb-4 line-clamp-3">
                        {isArabic ? member.bioAr : member.bio}
                      </p>

                      {/* Social links - positioned at bottom with proper spacing */}
                      <div className="flex items-center gap-2 md:gap-3 mt-auto">
                        {Object.entries(member)
                          .filter(([key]) =>
                            ["github", "linkedin"].includes(key)
                          )
                          .map(([platform, url]) => (
                            <motion.a
                              key={platform}
                              href={url as string}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ y: -2 }}
                              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                hoveredMember === member.id
                                  ? "bg-blue-600 text-white"
                                  : "bg-blue-100 text-blue-600"
                              } transition-colors duration-300`}
                            >
                              {getSocialIcon(platform)}
                            </motion.a>
                          ))}
                        {Object.entries(member)
                          .filter(([key]) => ["email"].includes(key))
                          .map(([platform, email]) => (
                            <motion.div
                              key={platform}
                              className="flex items-center gap-2"
                            >
                              <motion.button
                                whileHover={{ y: -2 }}
                                onClick={() =>
                                  setHoveredMember((prev) =>
                                    prev === email ? null : email
                                  )
                                }
                                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                  hoveredMember === email
                                    ? "bg-blue-600 text-white"
                                    : "bg-blue-100 text-blue-600"
                                } transition-colors duration-300`}
                              >
                                {getSocialIcon(platform)}
                              </motion.button>
                              {hoveredMember === email && (
                                <span className="text-sm md:text-base text-blue-600">
                                  {email}
                                </span>
                              )}
                            </motion.div>
                          ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Pagination indicators - Matching second example style */}
          <div
            className="flex justify-center gap-3 mt-4 md:mt-8"
            style={{ flexDirection: isArabic ? "row-reverse" : "row" }}
          >
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-blue-600"
                    : "bg-blue-200 hover:bg-blue-300"
                }`}
                style={{
                  width: activeIndex === index ? "24px" : "8px",
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
