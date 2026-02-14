"use client";

import { motion } from "framer-motion";
import { services as serviceData } from "../data";
import { FloatingElements } from "./ui/FloatingElements";

interface ServicesProps {
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

export function Services({ isArabic }: ServicesProps) {
  const journeySteps = serviceData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  // Positions for the white dot trail (percentage-based for responsive)
  // These sit between the steps to visually connect them
  const dotTrails = [
    // Trail from step 1 → step 2 (arc across the top)
    { cx: "34%", cy: "10%" },
    { cx: "40%", cy: "6%" },
    { cx: "46%", cy: "4%" },
    { cx: "52%", cy: "4%" },
    { cx: "58%", cy: "6%" },
    { cx: "64%", cy: "10%" },
    // Trail from step 2 → step 3 (sweeping down-left)
    { cx: "68%", cy: "22%" },
    { cx: "66%", cy: "27%" },
    { cx: "62%", cy: "31%" },
    { cx: "57%", cy: "34%" },
    { cx: "52%", cy: "37%" },
    // Trail from step 3 → step 4 (curving down-right)
    { cx: "38%", cy: "44%" },
    { cx: "33%", cy: "47%" },
    { cx: "30%", cy: "50%" },
    { cx: "30%", cy: "53%" },
    { cx: "32%", cy: "56%" },
    // Trail from step 4 → step 5 (arc across)
    { cx: "42%", cy: "60%" },
    { cx: "48%", cy: "58%" },
    { cx: "54%", cy: "57%" },
    { cx: "60%", cy: "58%" },
    { cx: "66%", cy: "60%" },
    // Trail from step 5 → step 6 (curving down-left)
    { cx: "68%", cy: "72%" },
    { cx: "66%", cy: "76%" },
    { cx: "62%", cy: "80%" },
    { cx: "57%", cy: "83%" },
    { cx: "52%", cy: "86%" },
    // Trail from step 6 trailing off
    { cx: "38%", cy: "90%" },
    { cx: "32%", cy: "92%" },
    { cx: "26%", cy: "93%" },
  ];

  return (
    <section id="services" className="py-20 md:py-28 relative overflow-hidden">
      {/* Subtle background accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px]"></div>
        {/* White glow elements */}
        <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-white/[0.02] rounded-full blur-[80px]"></div>
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
          className={`mb-20 ${isArabic ? "text-right" : "text-left"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5 flex items-center gap-3">
            {isArabic ? "مسارنا" : "Our Journey"}
            <DotGrid className="text-blue-400/50" />
          </h2>
          <p className="text-base md:text-lg text-slate-500 max-w-2xl leading-relaxed">
            {isArabic
              ? "نقدم مجموعة متكاملة من الخدمات الرقمية لتلبية احتياجات عملك. خبرتنا تمتد عبر تطوير الويب والجوال والذكاء الاصطناعي."
              : "We offer a comprehensive suite of digital services to meet your business needs. Our expertise spans web development, mobile apps, and AI solutions."}
          </p>
        </motion.div>

        {/* Journey steps with dashed connectors */}
        <div className="relative">
          {/* SVG dashed connectors + white dots (desktop only) */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block"
            preserveAspectRatio="none"
          >
            {/* Dashed path curves */}
            <path
              d="M 28% 12% Q 50% -2%, 72% 12%"
              className="journey-dashed-path"
              vectorEffect="non-scaling-stroke"
            />
            <path
              d="M 68% 20% Q 78% 36%, 52% 40%"
              className="journey-dashed-path"
              vectorEffect="non-scaling-stroke"
            />
            <path
              d="M 40% 42% Q 18% 40%, 28% 56%"
              className="journey-dashed-path"
              vectorEffect="non-scaling-stroke"
            />
            <path
              d="M 38% 58% Q 55% 54%, 72% 62%"
              className="journey-dashed-path"
              vectorEffect="non-scaling-stroke"
            />
            <path
              d="M 68% 70% Q 78% 84%, 52% 88%"
              className="journey-dashed-path"
              vectorEffect="non-scaling-stroke"
            />
            <path
              d="M 40% 90% Q 20% 96%, 18% 98%"
              className="journey-dashed-path"
              vectorEffect="non-scaling-stroke"
            />

            {/* White dot trail along the path */}
            {dotTrails.map((dot, i) => (
              <motion.circle
                key={i}
                cx={dot.cx}
                cy={dot.cy}
                r="2.5"
                fill="#1e40af"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: [0, 0.4, 0.2], scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.8 + i * 0.06,
                  duration: 0.5,
                  opacity: { duration: 1.2 },
                }}
              />
            ))}
          </svg>

          {/* Steps grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-32 gap-y-20 md:gap-y-28"
          >
            {journeySteps.map((step, index) => (
              <motion.div
                key={step.id}
                variants={itemVariants}
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`service-step-hover flex items-start gap-6 group cursor-default ${
                  index % 2 === 1 ? "md:mt-12" : ""
                } ${index >= 2 ? "md:mt-8" : ""}`}
              >
                {/* Step number box */}
                <motion.div
                  className="journey-number-box w-16 h-16 flex-shrink-0 flex items-center justify-center relative"
                  whileHover={{ scale: 1.1, rotate: 3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Corner accents */}
                  <span className="absolute -top-[3px] -left-[3px] w-3 h-3 border-t-2 border-l-2 border-blue-400/30 rounded-tl-sm"></span>
                  <span className="absolute -bottom-[3px] -right-[3px] w-3 h-3 border-b-2 border-r-2 border-blue-400/30 rounded-br-sm"></span>
                  <span className="text-xl font-bold gradient-text">
                    {index + 1}
                  </span>
                </motion.div>

                {/* Step content */}
                <div className="pt-1">
                  <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300">
                    {isArabic ? step.titleAr : step.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed max-w-sm group-hover:text-slate-600 transition-colors duration-300">
                    {isArabic ? step.descriptionAr : step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
