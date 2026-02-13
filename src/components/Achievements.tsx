"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { FloatingElements } from "./ui/FloatingElements";

interface AchievementsProps {
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

// Animated counter component
function AnimatedCounter({
  from,
  to,
  duration = 2,
  className = "",
}: {
  from: number;
  to: number;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [current, setCurrent] = useState(from);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.round(from + (to - from) * eased));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [isInView, from, to, duration]);

  return (
    <span ref={ref} className={className}>
      {current}
    </span>
  );
}

const achievements = [
  {
    id: 1,
    title: "Best Digital Agency",
    titleAr: "أفضل وكالة رقمية",
  },
  {
    id: 2,
    title: "Innovation Design",
    titleAr: "تصميم مبتكر",
  },
  {
    id: 3,
    title: "Client Satisfaction Leader",
    titleAr: "رائد رضا العملاء",
  },
  {
    id: 4,
    title: "Growth Company of the Year",
    titleAr: "شركة النمو لهذا العام",
    description:
      "We offer a comprehensive suite of digital services to meet your business needs.",
    descriptionAr:
      "نقدم مجموعة متكاملة من الخدمات الرقمية لتلبية احتياجات عملك.",
  },
];

export function Achievements({ isArabic }: AchievementsProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { x: 30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 80 },
    },
  };

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px]"></div>
        {/* White glow elements */}
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-white/[0.02] rounded-full blur-[100px]"></div>
      </div>

      {/* Floating elements */}
      <FloatingElements variant="default" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left side – Title + big year */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Section title */}
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              {isArabic ? "إنجازاتنا" : "Our Achievements"}
              <DotGrid className="text-blue-400/50" />
            </h2>

            {/* Big year display with animated counter */}
            <div className="relative mt-10">
              {/* "20" */}
              <div className="flex items-center gap-3">
                <span
                  className="text-[120px] md:text-[160px] font-bold leading-none tracking-tighter select-none"
                  style={{ color: "rgba(30, 64, 175, 0.25)" }}
                >
                  <AnimatedCounter from={18} to={20} duration={1.5} />
                </span>
                <DotGrid className="text-blue-400/40 w-10 h-10 mt-8" />
              </div>
              {/* "26" */}
              <div className="flex items-center gap-3 -mt-4 md:-mt-8 ml-10 md:ml-14">
                <DotGrid className="text-blue-400/40 w-10 h-10 mb-4" />
                <span className="text-[120px] md:text-[160px] font-bold leading-none text-blue-900/10 tracking-tighter select-none">
                  <AnimatedCounter from={23} to={26} duration={2} />
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right side – Description + achievement list */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Description text */}
            <p className="text-base text-slate-500 mb-12 max-w-md leading-relaxed">
              {isArabic
                ? "نقدم مجموعة متكاملة من الخدمات الرقمية لتلبية احتياجات عملك. خبرتنا تمتد عبر تطوير الويب والجوال والذكاء الاصطناعي."
                : "We offer a comprehensive suite of digital services to meet your business needs. Our expertise spans web development, mobile apps, and AI solutions."}
            </p>

            {/* Achievement items */}
            <div className="space-y-8">
              {achievements.map((item, index) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="achievement-hover flex items-start gap-5 group cursor-default"
                >
                  {/* Number box */}
                  <motion.div
                    className={`flex-shrink-0 flex items-center justify-center relative ${
                      index === achievements.length - 1
                        ? "achievement-number-box-filled"
                        : "achievement-number-box"
                    }`}
                    style={{ width: "52px", height: "52px" }}
                    whileHover={{ scale: 1.1, rotate: -3 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {/* Corner dots for first 3 */}
                    {index < achievements.length - 1 && (
                      <>
                        <span className="absolute -top-[2px] -left-[2px] w-[6px] h-[6px] rounded-full bg-blue-400/30"></span>
                        <span className="absolute -top-[2px] -right-[2px] w-[6px] h-[6px] rounded-full bg-blue-400/30"></span>
                        <span className="absolute -bottom-[2px] -left-[2px] w-[6px] h-[6px] rounded-full bg-blue-400/30"></span>
                        <span className="absolute -bottom-[2px] -right-[2px] w-[6px] h-[6px] rounded-full bg-blue-400/30"></span>
                      </>
                    )}
                    {index < achievements.length - 1 && (
                      <>
                        <span className="absolute -top-[3px] -left-[3px] w-3 h-3 border-t border-l border-blue-400/20 rounded-tl-sm"></span>
                        <span className="absolute -top-[3px] -right-[3px] w-3 h-3 border-t border-r border-blue-400/20 rounded-tr-sm"></span>
                        <span className="absolute -bottom-[3px] -left-[3px] w-3 h-3 border-b border-l border-blue-400/20 rounded-bl-sm"></span>
                        <span className="absolute -bottom-[3px] -right-[3px] w-3 h-3 border-b border-r border-blue-400/20 rounded-br-sm"></span>
                      </>
                    )}
                    <span className="text-lg font-bold gradient-text">
                      {item.id}
                    </span>
                  </motion.div>

                  {/* Content */}
                  <div className="pt-1">
                    <h3 className="text-lg md:text-xl font-semibold text-slate-700 group-hover:text-slate-900 group-hover:translate-x-1 transition-all duration-300">
                      {isArabic ? item.titleAr : item.title}
                    </h3>
                    {item.description && (
                      <p className="text-sm text-slate-500 mt-2 leading-relaxed max-w-sm group-hover:text-slate-600 transition-colors duration-300">
                        {isArabic ? item.descriptionAr : item.description}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
