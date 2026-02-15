"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { teamMembers } from "../data";
import { FloatingElements } from "./ui/FloatingElements";

interface TeamProps {
  isArabic: boolean;
}

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

export function Team({ isArabic }: TeamProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeMember = teamMembers[activeIndex];

  return (
    <section id="team" className="py-20 md:py-28 relative overflow-hidden">
      {/* Subtle background accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-60 h-60 bg-purple-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-20 w-60 h-60 bg-blue-600/5 rounded-full blur-3xl"></div>
        {/* White glow elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/[0.015] rounded-full blur-[100px]"></div>
      </div>

      {/* Floating elements */}
      <FloatingElements variant="sparse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`mb-14 ${isArabic ? "text-right" : "text-left"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2 flex items-center gap-3">
            {isArabic ? "فريقنا" : "Meet the Team"}
            <DotGrid className="text-blue-400/50" />
          </h2>
        </motion.div>

        {/* Main content: left list + right role text */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
          {/* Left column — member list */}
          <div className="flex-shrink-0 w-full lg:w-auto space-y-5">
            {teamMembers.map((member, index) => (
              <motion.button
                key={member.id}
                onClick={() => setActiveIndex(index)}
                className={`flex items-center gap-4 w-full lg:w-80 p-3 rounded-xl transition-all duration-300 group ${
                  activeIndex === index
                    ? "glass-card border-blue-400/30 team-btn-active"
                    : "hover:bg-blue-50/50"
                }`}
                whileHover={{ x: isArabic ? -4 : 4 }}
              >
                {/* Avatar */}
                <div
                  className={`w-14 h-14 rounded-full overflow-hidden flex-shrink-0 ring-2 transition-all duration-300 ${
                    activeIndex === index
                      ? "ring-blue-400/60"
                      : "ring-slate-300 group-hover:ring-blue-300"
                  }`}
                >
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Name */}
                <span
                  className={`text-base font-medium transition-colors duration-300 ${
                    activeIndex === index
                      ? "text-slate-900"
                      : "text-slate-500 group-hover:text-slate-700"
                  }`}
                >
                  {isArabic ? member.nameAr : member.name}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Right column — large role title + bio + socials */}
          <motion.div
            key={activeMember.id}
            initial={{ opacity: 0, x: isArabic ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="flex-1 flex flex-col justify-center min-h-[300px]"
          >
            {/* Large role text display */}
            <div className="space-y-2 mb-8">
              {teamMembers.map((member, index) => (
                <h3
                  key={member.id}
                  className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-wide transition-all duration-500 ${
                    activeIndex === index
                      ? "text-slate-900"
                      : "text-outline opacity-60"
                  }`}
                >
                  {isArabic ? member.roleAr : member.role}
                </h3>
              ))}
            </div>

            {/* Bio */}
            <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-lg mb-6">
              {isArabic ? activeMember.bioAr : activeMember.bio}
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {activeMember.github && (
                <a
                  href={
                    activeMember.name === "Ourred Islem Charaf Eddine"
                      ? undefined
                      : activeMember.github
                  }
                  target={
                    activeMember.name === "Ourred Islem Charaf Eddine"
                      ? undefined
                      : "_blank"
                  }
                  rel={
                    activeMember.name === "Ourred Islem Charaf Eddine"
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className={`social-icon-hover w-9 h-9 rounded-full glass-card flex items-center justify-center text-slate-500 ${
                    activeMember.name === "Ourred Islem Charaf Eddine"
                      ? "cursor-not-allowed opacity-40"
                      : ""
                  }`}
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
              {activeMember.linkedin && (
                <a
                  href={activeMember.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-hover w-9 h-9 rounded-full glass-card flex items-center justify-center text-slate-500"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
              {activeMember.email && (
                <a
                  href={`mailto:${activeMember.email}`}
                  className="social-icon-hover w-9 h-9 rounded-full glass-card flex items-center justify-center text-slate-500"
                >
                  <Mail className="w-4 h-4" />
                </a>
              )}
            </div>
          </motion.div>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center gap-3 mt-10">
          {teamMembers.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "bg-blue-500 w-6"
                  : "bg-slate-300 w-2 hover:bg-blue-300"
              }`}
              aria-label={`Go to member ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
