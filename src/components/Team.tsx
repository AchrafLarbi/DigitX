"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Github,
  Instagram,
  Linkedin,
  Twitter,
  Mail,
  // ArrowRight,
} from "lucide-react";
import { teamMembers } from "../data";

interface TeamProps {
  isArabic: boolean;
}

// Extended team members data with social links

export function Team({ isArabic }: TeamProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const visibleMembers = 3; // Number of visible members at once
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
      case "twitter":
        return <Twitter className="w-4 h-4" />;
      case "email":
        return <Mail className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <section
      id="team"
      className="py-24 relative overflow-hidden bg-gradient-to-b from-white bg-black to-blue-50"
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
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-blue-900 mb-4 relative inline-block">
            {isArabic ? "فريقنا" : "Our Team"}
            <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></span>
          </h2>
          <p className="text-xl text-blue-700 max-w-2xl mx-auto">
            {isArabic
              ? "تعرف على الخبراء المتخصصين الذين يجعلون الأمور تحدث"
              : "Meet the talented specialists who make things happen"}
          </p>
        </motion.div>

        <div className="relative">
          {/* Navigation buttons */}
          <div className="absolute top-1/2 -left-4 -translate-y-1/2 z-10">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollPrev}
              disabled={activeIndex === 0}
              className={`w-10 h-10 rounded-full flex items-center justify-center shadow-md ${
                activeIndex === 0
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-white text-blue-600 hover:bg-blue-50"
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
          </div>

          <div className="absolute top-1/2 -right-4 -translate-y-1/2 z-10">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollNext}
              disabled={activeIndex === maxIndex}
              className={`w-10 h-10 rounded-full flex items-center justify-center shadow-md ${
                activeIndex === maxIndex
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-white text-blue-600 hover:bg-blue-50"
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Team members carousel */}
          <div className="overflow-hidden" ref={containerRef}>
            <motion.div
              className="flex gap-8"
              initial={false}
              animate={{ x: `-${activeIndex * (100 / visibleMembers)}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{
                width: `${(teamMembers.length / visibleMembers) * 100}%`,
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
                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full"
                    whileHover={{ y: -10 }}
                  >
                    <div className="relative overflow-hidden h-64">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-1/2 h-full mx-auto object-cover "
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-blue-900 mb-1">
                        {isArabic ? member.nameAr : member.name}
                      </h3>
                      <p className="text-blue-600 font-medium mb-4">
                        {isArabic ? member.roleAr : member.role}
                      </p>
                      <p className="text-gray-600 mb-6 line-clamp-3">
                        {isArabic ? member.bioAr : member.bio}
                      </p>

                      {/* Social links */}
                      <div className="flex justify-center gap-3 mt-auto">
                        {Object.entries(member)
                          .filter(([key]) =>
                            [
                              "github",
                              "instagram",
                              "linkedin",
                              "twitter",
                            ].includes(key)
                          )
                          .map(([platform, url]) => (
                            <motion.a
                              key={platform}
                              href={url as string}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ y: -3 }}
                              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                hoveredMember === member.id
                                  ? "bg-blue-600 text-white"
                                  : "bg-blue-100 text-blue-600"
                              } transition-colors duration-300`}
                            >
                              {getSocialIcon(platform)}
                            </motion.a>
                          ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Pagination indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-blue-600 w-6"
                    : "bg-blue-200 hover:bg-blue-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
