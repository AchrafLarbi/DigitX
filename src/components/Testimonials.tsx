"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

interface TestimonialsProps {
  isArabic: boolean;
}

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Yagoub",
    nameAr: "Yagoub",
    role: "CEO, Perenza",
    roleAr: "المدير التنفيذي، Perenza",
    rating: 5,
    text: "DigitX delivered a complete digital transformation for our business. Their strategic approach, technical precision, and commitment to excellence set them apart from any agency we've worked with.",
    textAr:
      "قدمت DigitX تحولاً رقمياً شاملاً لأعمالنا. نهجهم الاستراتيجي ودقتهم التقنية والتزامهم بالتميز يميزهم عن أي وكالة تعاملنا معها.",
  },
  {
    id: 2,
    name: "Persy Man",
    nameAr: "Persy Man",
    role: "Professional Gamer",
    roleAr: "لاعب محترف",
    rating: 4.5,
    text: "Working with DigitX was a game-changer. They built a platform that increased our user engagement by 200%. Their attention to UX detail and performance optimization is world-class.",
    textAr:
      "كان العمل مع DigitX نقطة تحول حقيقية. بنوا منصة زادت تفاعل مستخدمينا بنسبة 200%. اهتمامهم بتفاصيل تجربة المستخدم وتحسين الأداء في مستوى عالمي.",
  },
  {
    id: 3,
    name: "Reda",
    nameAr: "Reda",
    role: "Startup Founder",
    roleAr: "مؤسس شركة ناشئة",
    rating: 5,
    text: "DigitX's AI solutions automated 70% of our manual workflows. Their deep technical expertise and structured delivery process saved us months of development time.",
    textAr:
      "أتمتت حلول الذكاء الاصطناعي من DigitX نسبة 70% من سير عملنا اليدوي. خبرتهم التقنية العميقة وعملية التسليم المنظمة وفرت لنا أشهراً من وقت التطوير.",
  },
  {
    id: 4,
    name: "Studio Houari",
    nameAr: "Studio Houari",
    role: "Professional Photographer",
    roleAr: "مصور احترافي",
    rating: 5,
    text: "Exceptional craftsmanship and reliability. DigitX delivered our platform on time with results that exceeded every expectation. They don't just build — they partner with you for success.",
    textAr:
      "حرفية استثنائية وموثوقية عالية. سلّمت DigitX منصتنا في الوقت المحدد بنتائج تجاوزت كل توقعاتنا. لا يكتفون بالبناء — بل يشاركونك في النجاح.",
  },
  {
    id: 7,
    name: "Kader",
    nameAr: "Kader",
    role: "Co-founder, Perenza",
    roleAr: "شريك مؤسس، Perenza",
    rating: 4,
    text: "DigitX's automation solutions saved us countless hours and transformed our operations. Professional, responsive, and truly experts in their craft. A world-class team to work with.",
    textAr:
      "وفرت حلول الأتمتة من DigitX ساعات لا حصر لها وحولت عملياتنا. محترفون ومتجاوبون وخبراء حقيقيون في مجالهم. فريق عالمي المستوى.",
  },
];

// Accent colors for initials
const accentColors = [
  "from-blue-500 to-blue-700",
  "from-indigo-500 to-indigo-700",
  "from-sky-500 to-sky-700",
  "from-cyan-500 to-cyan-700",
  "from-blue-600 to-indigo-600",
];

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

export function Testimonials({ isArabic }: TestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoPlay = useCallback(() => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
  }, []);

  useEffect(() => {
    if (isAutoPlaying) startAutoPlay();
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlaying, startAutoPlay]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goTo = (index: number) => {
    setIsAutoPlaying(false);
    setActiveIndex(index);
  };

  const active = testimonials[activeIndex];
  const prevT =
    testimonials[(activeIndex - 1 + testimonials.length) % testimonials.length];
  const nextT = testimonials[(activeIndex + 1) % testimonials.length];

  const renderStars = (rating: number) =>
    [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 sm:w-[18px] sm:h-[18px] ${
          i < Math.floor(rating)
            ? "fill-yellow-400 text-yellow-400"
            : i < rating
              ? "fill-yellow-400/50 text-yellow-400"
              : "fill-slate-200 text-slate-200"
        }`}
      />
    ));

  const getInitials = (name: string) =>
    name
      .split(" ")
      .map((w) => w[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);

  return (
    <section
      id="testimonials"
      className="py-20 md:py-28 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-white/[0.03] rounded-full blur-[80px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`mb-14 ${isArabic ? "text-right" : "text-left"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2 flex items-center gap-3">
            {isArabic ? "ماذا يقول عملاؤنا" : "Client Testimonials"}
            <DotGrid className="text-blue-400/50" />
          </h2>
        </motion.div>

        {/* Carousel area */}
        <div className="relative flex justify-center items-stretch gap-5">
          {/* Previous card preview */}
          <div className="hidden lg:flex w-[260px] flex-shrink-0 opacity-25 blur-[1px] items-center">
            <div className="w-full bg-white/60 rounded-2xl p-5 border border-slate-200">
              <p className="text-slate-400 text-sm line-clamp-3 mb-3">
                {isArabic ? prevT.textAr : prevT.text}
              </p>
              <span className="text-slate-500 text-xs font-medium">
                — {prevT.name}
              </span>
            </div>
          </div>

          {/* Active card */}
          <div className="flex-1 max-w-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 24, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -24, scale: 0.96 }}
                transition={{ duration: 0.4 }}
              >
                <div className="relative bg-white/70 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-blue-200/50 shadow-xl shadow-blue-500/5">
                  {/* Corner decorations */}
                  <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-blue-400/40 rounded-tl-lg" />
                  <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-blue-400/40 rounded-tr-lg" />
                  <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-blue-400/40 rounded-bl-lg" />
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-blue-400/40 rounded-br-lg" />

                  {/* Big quote decoration */}
                  <Quote className="absolute top-4 right-4 w-10 h-10 text-blue-200/40 rotate-180" />

                  {/* Rating row */}
                  <div
                    className={`flex items-center gap-2 mb-5 ${isArabic ? "flex-row-reverse" : ""}`}
                  >
                    <div className="flex items-center gap-0.5">
                      {renderStars(active.rating)}
                    </div>
                    <span className="text-slate-700 text-sm font-semibold">
                      {active.rating % 1 === 0
                        ? `${active.rating}.0`
                        : active.rating}
                    </span>
                  </div>

                  {/* Testimonial text */}
                  <p
                    className={`text-slate-600 text-sm sm:text-base leading-relaxed mb-6 ${isArabic ? "text-right" : "text-left"}`}
                  >
                    "{isArabic ? active.textAr : active.text}"
                  </p>

                  {/* Author info */}
                  <div
                    className={`flex items-center gap-3 pt-4 border-t border-slate-100 ${isArabic ? "flex-row-reverse" : ""}`}
                  >
                    {/* Initials badge */}
                    <div
                      className={`w-11 h-11 rounded-full bg-gradient-to-br ${accentColors[activeIndex % accentColors.length]} flex items-center justify-center text-white text-sm font-bold shadow-md`}
                    >
                      {getInitials(active.name)}
                    </div>
                    <div className={isArabic ? "text-right" : ""}>
                      <p className="text-slate-900 text-sm font-semibold leading-tight">
                        {isArabic ? active.nameAr : active.name}
                      </p>
                      <p className="text-blue-500 text-xs">
                        {isArabic ? active.roleAr : active.role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next card preview */}
          <div className="hidden lg:flex w-[260px] flex-shrink-0 opacity-25 blur-[1px] items-center">
            <div className="w-full bg-white/60 rounded-2xl p-5 border border-slate-200">
              <p className="text-slate-400 text-sm line-clamp-3 mb-3">
                {isArabic ? nextT.textAr : nextT.text}
              </p>
              <span className="text-slate-500 text-xs font-medium">
                — {nextT.name}
              </span>
            </div>
          </div>
        </div>

        {/* Navigation + progress */}
        <div className="flex justify-center items-center gap-6 mt-10">
          <button
            onClick={handlePrev}
            className="w-11 h-11 rounded-full bg-white/50 flex items-center justify-center text-slate-500 hover:bg-white/80 transition-all duration-300 group border border-slate-200"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
          </button>

          {/* Progress dots */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                className={`rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "w-8 h-2 bg-blue-500"
                    : "w-2 h-2 bg-slate-300 hover:bg-blue-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-11 h-11 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-500 transition-all duration-300 group shadow-lg shadow-blue-500/25"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
