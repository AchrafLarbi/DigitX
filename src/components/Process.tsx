"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useState } from "react";
import {
  Compass,
  ClipboardList,
  PenTool,
  Terminal,
  Code2,
  Send,
  LifeBuoy,
} from "lucide-react";
import { FloatingElements } from "./ui/FloatingElements";

interface ProcessProps {
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

const steps = [
  {
    icon: Compass,
    title: "Discovery",
    titleAr: "الاكتشاف",
  },
  {
    icon: ClipboardList,
    title: "Strategy &\nPlanning",
    titleAr: "الاستراتيجية\nوالتخطيط",
  },
  {
    icon: PenTool,
    title: "Design",
    titleAr: "التصميم",
  },
  {
    icon: Terminal,
    title: "Architecture",
    titleAr: "البنية التقنية",
  },
  {
    icon: Code2,
    title: "Engineering",
    titleAr: "الهندسة",
  },
  {
    icon: Send,
    title: "Launch &\nOptimize",
    titleAr: "الإطلاق\nوالتحسين",
  },
  {
    icon: LifeBuoy,
    title: "Ongoing\nPartnership",
    titleAr: "شراكة\nمستمرة",
  },
];

export function Process({ isArabic }: ProcessProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeCount, setActiveCount] = useState(0);

  // Track scroll progress through the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.8", "center center"],
  });

  // Map scroll progress to number of visible steps (0 → 7)
  const visibleSteps = useTransform(scrollYProgress, [0, 1], [0, steps.length]);

  // Update the active count on scroll
  useMotionValueEvent(visibleSteps, "change", (latest) => {
    setActiveCount(Math.round(latest));
  });

  // Wavy path dash offset driven by scroll (draws itself)
  const waveDashOffset = useTransform(scrollYProgress, [0, 0.9], [2000, 0]);

  return (
    <section
      ref={sectionRef}
      id="process"
      className="py-20 md:py-28 relative overflow-hidden"
    >
      {/* Subtle background accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px]"></div>
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
          className={`mb-16 md:mb-20 ${isArabic ? "text-right" : "text-left"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5 flex items-center gap-3">
            {isArabic ? "منهجيتنا" : "Our Process"}
            <DotGrid className="text-blue-400/50" />
          </h2>
          <p className="text-base md:text-lg text-slate-500 max-w-2xl leading-relaxed">
            {isArabic
              ? "نتبع منهجية أجايل مجرّبة تضمن الشفافية والكفاءة والتسليم في الوقت المحدد — من الاكتشاف إلى الإطلاق وما بعده."
              : "A proven agile methodology that ensures transparency, efficiency, and on-time delivery — from discovery through launch and beyond."}
          </p>
        </motion.div>

        {/* === HORIZONTAL TIMELINE (Desktop) === */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Wavy connecting line — draws itself on scroll */}
            <div className="absolute top-1/2 left-[7%] right-[7%] -translate-y-1/2 z-0 pointer-events-none">
              <svg
                width="100%"
                height="40"
                viewBox="0 0 1000 40"
                preserveAspectRatio="none"
                className="overflow-visible"
                style={{ marginTop: "-20px" }}
              >
                <defs>
                  <linearGradient
                    id="waveGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="rgba(59, 130, 246, 0.15)" />
                    <stop offset="50%" stopColor="rgba(30, 64, 175, 0.35)" />
                    <stop offset="100%" stopColor="rgba(59, 130, 246, 0.15)" />
                  </linearGradient>
                </defs>
                {/* Background faint path (always visible) */}
                <path
                  d="M 0 20 Q 40 0, 80 20 Q 120 40, 160 20 Q 200 0, 240 20 Q 280 40, 320 20 Q 360 0, 400 20 Q 440 40, 480 20 Q 520 0, 560 20 Q 600 40, 640 20 Q 680 0, 720 20 Q 760 40, 800 20 Q 840 0, 880 20 Q 920 40, 960 20 Q 980 10, 1000 20"
                  fill="none"
                  stroke="rgba(30, 64, 175, 0.08)"
                  strokeWidth="3"
                  strokeDasharray="8 6"
                  vectorEffect="non-scaling-stroke"
                />
                {/* Scroll-driven drawing path */}
                <motion.path
                  d="M 0 20 Q 40 0, 80 20 Q 120 40, 160 20 Q 200 0, 240 20 Q 280 40, 320 20 Q 360 0, 400 20 Q 440 40, 480 20 Q 520 0, 560 20 Q 600 40, 640 20 Q 680 0, 720 20 Q 760 40, 800 20 Q 840 0, 880 20 Q 920 40, 960 20 Q 980 10, 1000 20"
                  fill="none"
                  stroke="url(#waveGradient)"
                  strokeWidth="3"
                  vectorEffect="non-scaling-stroke"
                  strokeDasharray="2000"
                  style={{ strokeDashoffset: waveDashOffset }}
                />
                {/* Animated traveling dots (only visible after line is partially drawn) */}
                {activeCount >= 2 && (
                  <>
                    <circle r="5" fill="#3b82f6">
                      <animateMotion
                        dur="6s"
                        repeatCount="indefinite"
                        path="M 0 20 Q 40 0, 80 20 Q 120 40, 160 20 Q 200 0, 240 20 Q 280 40, 320 20 Q 360 0, 400 20 Q 440 40, 480 20 Q 520 0, 560 20 Q 600 40, 640 20 Q 680 0, 720 20 Q 760 40, 800 20 Q 840 0, 880 20 Q 920 40, 960 20 Q 980 10, 1000 20"
                      />
                      <animate
                        attributeName="opacity"
                        values="0;0.8;0.8;0"
                        keyTimes="0;0.05;0.95;1"
                        dur="6s"
                        repeatCount="indefinite"
                      />
                    </circle>
                    <circle r="3" fill="#60a5fa">
                      <animateMotion
                        dur="6s"
                        repeatCount="indefinite"
                        begin="-3s"
                        path="M 0 20 Q 40 0, 80 20 Q 120 40, 160 20 Q 200 0, 240 20 Q 280 40, 320 20 Q 360 0, 400 20 Q 440 40, 480 20 Q 520 0, 560 20 Q 600 40, 640 20 Q 680 0, 720 20 Q 760 40, 800 20 Q 840 0, 880 20 Q 920 40, 960 20 Q 980 10, 1000 20"
                      />
                      <animate
                        attributeName="opacity"
                        values="0;0.5;0.5;0"
                        keyTimes="0;0.05;0.95;1"
                        dur="6s"
                        repeatCount="indefinite"
                        begin="-3s"
                      />
                    </circle>
                  </>
                )}
              </svg>
            </div>

            {/* Small connecting dots — appear progressively on scroll */}
            <div className="absolute top-1/2 left-[7%] right-[7%] -translate-y-1/2 flex justify-between z-[1] pointer-events-none">
              {Array.from({ length: 25 }).map((_, i) => {
                const dotProgress = (i / 25) * steps.length;
                const isVisible = activeCount > dotProgress;
                return (
                  <motion.div
                    key={i}
                    animate={{
                      opacity: isVisible ? 0.45 : 0,
                      scale: isVisible ? 1 : 0,
                    }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="w-1.5 h-1.5 rounded-full bg-blue-500/40"
                    style={
                      isVisible
                        ? {
                            animation: `pulse-dot ${1.5 + (i % 5) * 0.3}s ease-in-out ${i * 0.12}s infinite alternate`,
                          }
                        : undefined
                    }
                  />
                );
              })}
            </div>

            {/* Steps row — each step reveals on scroll */}
            <div className="flex justify-between items-center relative z-10">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isTop = index % 2 === 0;
                const isActive = activeCount > index;

                return (
                  <motion.div
                    key={index}
                    animate={{
                      opacity: isActive ? 1 : 0.15,
                      y: isActive ? 0 : isTop ? -25 : 25,
                      scale: isActive ? 1 : 0.85,
                    }}
                    transition={{
                      duration: 0.5,
                      type: "spring",
                      stiffness: 120,
                      damping: 14,
                    }}
                    className="flex flex-col items-center group"
                  >
                    {/* Top label */}
                    {isTop && (
                      <motion.p
                        animate={{
                          opacity: isActive ? 1 : 0,
                          y: isActive ? 0 : -10,
                        }}
                        transition={{
                          duration: 0.3,
                          delay: isActive ? 0.15 : 0,
                        }}
                        className="text-xs md:text-sm font-bold text-slate-700 uppercase tracking-wider text-center mb-4 whitespace-pre-line leading-tight min-h-[2.5rem] flex items-end justify-center"
                      >
                        {isArabic ? step.titleAr : step.title}
                      </motion.p>
                    )}
                    {!isTop && <div className="min-h-[2.5rem] mb-4" />}

                    {/* Circle icon — floats only when active */}
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      animate={{
                        y: isActive ? [0, index % 2 === 0 ? -6 : 6, 0] : 0,
                        filter: isActive ? "grayscale(0)" : "grayscale(0.8)",
                      }}
                      transition={{
                        y: {
                          duration: 2.5 + index * 0.3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                        filter: { duration: 0.4 },
                        scale: { type: "spring", stiffness: 300 },
                        rotate: { type: "spring", stiffness: 200 },
                      }}
                      className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center shadow-lg cursor-default relative"
                      style={{
                        background:
                          "linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)",
                      }}
                    >
                      <Icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                      {/* Pulsing glow ring — only when active */}
                      {isActive && (
                        <motion.div
                          animate={{
                            boxShadow: [
                              "0 0 0 0px rgba(59, 130, 246, 0.3)",
                              "0 0 0 12px rgba(59, 130, 246, 0)",
                            ],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.3,
                            ease: "easeOut",
                          }}
                          className="absolute inset-0 rounded-full"
                        />
                      )}
                      <div className="absolute inset-0 rounded-full ring-4 ring-blue-400/0 group-hover:ring-blue-400/30 transition-all duration-500" />
                    </motion.div>

                    {/* Bottom label */}
                    {!isTop && (
                      <motion.p
                        animate={{
                          opacity: isActive ? 1 : 0,
                          y: isActive ? 0 : 10,
                        }}
                        transition={{
                          duration: 0.3,
                          delay: isActive ? 0.15 : 0,
                        }}
                        className="text-xs md:text-sm font-bold text-slate-700 uppercase tracking-wider text-center mt-4 whitespace-pre-line leading-tight min-h-[2.5rem] flex items-start justify-center"
                      >
                        {isArabic ? step.titleAr : step.title}
                      </motion.p>
                    )}
                    {isTop && <div className="min-h-[2.5rem] mt-4" />}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* === VERTICAL TIMELINE (Mobile/Tablet) === */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Vertical dashed line */}
            <div className="absolute left-8 top-0 bottom-0 w-px border-l-2 border-dashed border-blue-300/30" />

            <div className="space-y-10">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isActive = activeCount > index;
                return (
                  <motion.div
                    key={index}
                    animate={{
                      opacity: isActive ? 1 : 0.2,
                      x: isActive ? 0 : -15,
                    }}
                    transition={{
                      duration: 0.45,
                      type: "spring",
                      stiffness: 100,
                    }}
                    className="flex items-center gap-5 group"
                  >
                    {/* Circle icon */}
                    <div
                      className="w-16 h-16 rounded-full flex-shrink-0 flex items-center justify-center shadow-lg relative z-10"
                      style={{
                        background:
                          "linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)",
                      }}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Label */}
                    <p className="text-sm font-bold text-slate-700 uppercase tracking-wider whitespace-pre-line leading-tight">
                      {isArabic ? step.titleAr : step.title}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
