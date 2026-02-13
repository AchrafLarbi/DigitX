"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface TestimonialsProps {
  isArabic: boolean;
}

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Ahmed Benali",
    nameAr: "أحمد بن علي",
    role: "CEO, TechStart",
    roleAr: "المدير التنفيذي، تيك ستارت",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    daysAgo: 2,
    text: "DigitX transformed our business with their exceptional web development. The team delivered beyond expectations with innovative solutions and outstanding support.",
    textAr:
      "قامت DigitX بتحويل أعمالنا من خلال تطوير الويب الاستثنائي. قدم الفريق أكثر من التوقعات بحلول مبتكرة ودعم متميز.",
  },
  {
    id: 2,
    name: "Sarah Mitchell",
    nameAr: "سارة ميتشل",
    role: "Marketing Director",
    roleAr: "مديرة التسويق",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    daysAgo: 5,
    text: "Working with DigitX was a game-changer for our mobile app. Their attention to detail and user experience expertise helped us achieve a 200% increase in engagement.",
    textAr:
      "كان العمل مع DigitX نقطة تحول لتطبيقنا المحمول. ساعدنا اهتمامهم بالتفاصيل وخبرتهم في تجربة المستخدم على تحقيق زيادة بنسبة 200% في التفاعل.",
  },
  {
    id: 3,
    name: "Karim Hadj",
    nameAr: "كريم حاج",
    role: "Startup Founder",
    roleAr: "مؤسس شركة ناشئة",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    daysAgo: 1,
    text: "The AI solutions developed by DigitX automated 70% of our manual processes. Their technical expertise and professional approach made all the difference.",
    textAr:
      "أتمتت حلول الذكاء الاصطناعي التي طورتها DigitX 70% من عملياتنا اليدوية. خبرتهم التقنية ونهجهم المهني أحدثا كل الفرق.",
  },
  {
    id: 4,
    name: "Lina Bouaziz",
    nameAr: "لينا بوعزيز",
    role: "Product Manager",
    roleAr: "مديرة المنتجات",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    daysAgo: 7,
    text: "Exceptional quality and reliability. DigitX delivered our e-commerce platform on time and the results exceeded our expectations. Highly recommended!",
    textAr:
      "جودة وموثوقية استثنائية. قدمت DigitX منصة التجارة الإلكترونية الخاصة بنا في الوقت المحدد وتجاوزت النتائج توقعاتنا. موصى بهم بشدة!",
  },
  {
    id: 5,
    name: "Omar Tayeb",
    nameAr: "عمر طيب",
    role: "Business Owner",
    roleAr: "صاحب عمل",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    daysAgo: 3,
    text: "From concept to launch, DigitX provided outstanding service. Their team's creativity and technical skills brought our vision to life perfectly.",
    textAr:
      "من الفكرة إلى الإطلاق، قدمت DigitX خدمة متميزة. إبداع فريقهم ومهاراتهم التقنية جسدت رؤيتنا بشكل مثالي.",
  },
  {
    id: 6,
    name: "Nadia Ferhat",
    nameAr: "نادية فرحات",
    role: "Tech Lead",
    roleAr: "قائدة التقنية",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    daysAgo: 4,
    text: "The team at DigitX understands modern development. Their code quality and architecture decisions have set us up for long-term success.",
    textAr:
      "يفهم فريق DigitX التطوير الحديث. جودة الكود الخاص بهم وقرارات الهندسة المعمارية أعدتنا للنجاح على المدى الطويل.",
  },
  {
    id: 7,
    name: "Yassine Khelifi",
    nameAr: "ياسين خليفي",
    role: "Operations Manager",
    roleAr: "مدير العمليات",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    daysAgo: 6,
    text: "DigitX's automation solutions saved us countless hours. Professional, responsive, and truly experts in their field. A pleasure to work with!",
    textAr:
      "وفرت حلول الأتمتة من DigitX ساعات لا حصر لها. محترفون ومتجاوبون وخبراء حقيقيون في مجالهم. سعادة العمل معهم!",
  },
  {
    id: 8,
    name: "Amira Slimani",
    nameAr: "أميرة سليماني",
    role: "Design Director",
    roleAr: "مديرة التصميم",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    daysAgo: 2,
    text: "The UI/UX design from DigitX is stunning. They perfectly captured our brand identity and created an intuitive experience for our users.",
    textAr:
      "تصميم UI/UX من DigitX مذهل. لقد التقطوا هوية علامتنا التجارية بشكل مثالي وأنشأوا تجربة بديهية لمستخدمينا.",
  },
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

  // Auto-play functionality with useCallback for better performance
  const startAutoPlay = useCallback(() => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    autoPlayRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
  }, []);

  useEffect(() => {
    if (isAutoPlaying) {
      startAutoPlay();
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
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

  const handleAvatarClick = (index: number) => {
    setIsAutoPlaying(false);
    setActiveIndex(index);
  };

  const activeTestimonial = testimonials[activeIndex];

  // Get visible range of avatars (show 7-9 avatars at a time)
  const getVisibleAvatars = () => {
    const total = testimonials.length;
    const visibleCount = 7;
    const half = Math.floor(visibleCount / 2);
    const indices: number[] = [];

    for (let i = -half; i <= half; i++) {
      indices.push((activeIndex + i + total) % total);
    }

    return indices;
  };

  return (
    <section
      id="testimonials"
      className="py-20 md:py-28 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[100px]"></div>
        {/* Subtle white glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-white/[0.03] rounded-full blur-[80px]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`mb-12 ${isArabic ? "text-right" : "text-left"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2 flex items-center gap-3">
            {isArabic ? "تجارب ملهمة" : "Experiences That Inspire"}
            <DotGrid className="text-blue-400/50" />
          </h2>
        </motion.div>

        {/* Avatar row */}
        <div className="flex justify-center items-center gap-2 sm:gap-3 md:gap-4 mb-10">
          {getVisibleAvatars().map((index, i) => {
            const testimonial = testimonials[index];
            const isActive = index === activeIndex;
            const distanceFromCenter = Math.abs(i - 3);
            const scale = isActive ? 1.15 : 1 - distanceFromCenter * 0.05;
            const opacity = isActive ? 1 : 0.5 - distanceFromCenter * 0.08;

            return (
              <button
                key={testimonial.id}
                onClick={() => handleAvatarClick(index)}
                className="relative focus:outline-none transition-all duration-300"
                style={{
                  transform: `scale(${scale})`,
                  opacity: Math.max(opacity, 0.3),
                }}
              >
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full overflow-hidden transition-all duration-300 ${
                    isActive
                      ? "ring-2 ring-blue-500 ring-offset-2 ring-offset-white"
                      : "ring-1 ring-slate-300 hover:ring-blue-300"
                  }`}
                >
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* Testimonial card */}
        <div className="relative flex justify-center items-center">
          {/* Previous card preview (left) */}
          <div className="hidden lg:block absolute left-0 w-[300px] opacity-30 blur-[1px] transform -translate-x-8">
            <div className="testimonial-card-preview bg-white/60 rounded-2xl p-6 border border-slate-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-slate-600 text-sm font-medium">
                  {
                    testimonials[
                      (activeIndex - 1 + testimonials.length) %
                        testimonials.length
                    ].name
                  }
                </span>
              </div>
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
                <span className="text-slate-500 text-sm ml-2">5.0</span>
              </div>
              <p className="text-slate-400 text-sm line-clamp-3">
                {
                  testimonials[
                    (activeIndex - 1 + testimonials.length) %
                      testimonials.length
                  ].text
                }
              </p>
            </div>
          </div>

          {/* Main active card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial.id}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="w-full max-w-2xl"
            >
              <div className="testimonial-card relative bg-white/70 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-blue-200/50 shadow-xl shadow-blue-500/5">
                {/* Corner decorations */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-blue-400/40 rounded-tl-lg"></div>
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-blue-400/40 rounded-tr-lg"></div>
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-blue-400/40 rounded-bl-lg"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-blue-400/40 rounded-br-lg"></div>

                {/* Header */}
                <div
                  className={`flex items-center justify-between mb-4 ${isArabic ? "flex-row-reverse" : ""}`}
                >
                  <div
                    className={`flex items-center gap-2 ${isArabic ? "flex-row-reverse" : ""}`}
                  >
                    <span className="text-slate-900 text-lg sm:text-xl font-semibold">
                      {isArabic
                        ? activeTestimonial.nameAr
                        : activeTestimonial.name}
                    </span>
                    <span className="text-slate-400 text-xs sm:text-sm">
                      {activeTestimonial.daysAgo}{" "}
                      {isArabic ? "أيام مضت" : "Days ago"}
                    </span>
                  </div>
                </div>

                {/* Rating */}
                <div
                  className={`flex items-center gap-2 mb-4 ${isArabic ? "flex-row-reverse" : ""}`}
                >
                  <div className="flex items-center gap-0.5">
                    {[...Array(activeTestimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <span className="text-slate-800 font-medium">
                    {activeTestimonial.rating}.0
                  </span>
                </div>

                {/* Testimonial text */}
                <p
                  className={`text-slate-600 text-sm sm:text-base leading-relaxed ${isArabic ? "text-right" : "text-left"}`}
                >
                  {isArabic ? activeTestimonial.textAr : activeTestimonial.text}
                </p>

                {/* Role badge */}
                <div
                  className={`mt-4 ${isArabic ? "text-right" : "text-left"}`}
                >
                  <span className="text-blue-500 text-xs sm:text-sm">
                    {isArabic
                      ? activeTestimonial.roleAr
                      : activeTestimonial.role}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Next card preview (right) */}
          <div className="hidden lg:block absolute right-0 w-[300px] opacity-30 blur-[1px] transform translate-x-8">
            <div className="testimonial-card-preview bg-white/60 rounded-2xl p-6 border border-slate-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-slate-600 text-sm font-medium">
                  {testimonials[(activeIndex + 1) % testimonials.length].name}
                </span>
              </div>
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
                <span className="text-slate-500 text-sm ml-2">5.0</span>
              </div>
              <p className="text-slate-400 text-sm line-clamp-3">
                {testimonials[(activeIndex + 1) % testimonials.length].text}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-center items-center gap-4 mt-10">
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full bg-white/50 flex items-center justify-center text-slate-500 hover:bg-white/70 transition-all duration-300 group border border-slate-200"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
          </button>
          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-500 transition-all duration-300 group shadow-lg shadow-blue-500/25"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Progress indicators */}
        <div className="flex justify-center items-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleAvatarClick(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-8 bg-blue-500"
                  : "w-1.5 bg-slate-300 hover:bg-blue-300"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
