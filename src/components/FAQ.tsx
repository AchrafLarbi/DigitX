"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FloatingElements } from "./ui/FloatingElements";

interface FAQProps {
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

const faqs = [
  {
    question: "What does a typical project timeline look like?",
    questionAr: "كيف يبدو الجدول الزمني النموذجي للمشروع؟",
    answer:
      "Timelines are scoped to your project's complexity. A landing page or marketing site ships in 1–2 weeks. Full-stack web or mobile applications typically require 4–12 weeks. During our discovery phase, we deliver a detailed roadmap with milestones tailored to your goals.",
    answerAr:
      "تُحدد الجداول الزمنية حسب تعقيد مشروعك. يمكن تسليم صفحة هبوط في 1-2 أسبوع. التطبيقات المتكاملة تتطلب عادةً 4 إلى 12 أسبوعاً. خلال مرحلة الاكتشاف، نقدم خارطة طريق مفصلة بمراحل مصممة لأهدافك.",
  },
  {
    question: "What technologies power your solutions?",
    questionAr: "ما التقنيات التي تعتمدون عليها؟",
    answer:
      "We leverage industry-leading frameworks and tools including React, Next.js, Node.js, Django, Flutter, Tailwind CSS, PostgreSQL, Firebase, and more. We select the optimal tech stack for each project to ensure performance, scalability, and maintainability.",
    answerAr:
      "نستخدم أطر عمل وأدوات رائدة في الصناعة تشمل React و Next.js و Node.js و Django و Flutter و Tailwind CSS و PostgreSQL و Firebase وغيرها. نختار البنية التقنية المثلى لكل مشروع لضمان الأداء وقابلية التوسع وسهولة الصيانة.",
  },
  {
    question: "How is pricing structured?",
    questionAr: "كيف يتم تحديد الأسعار؟",
    answer:
      "Pricing is tailored to scope, features, and complexity. We offer transparent fixed-price engagements for well-defined projects and milestone-based billing for larger initiatives. Reach out for a complimentary consultation and detailed proposal.",
    answerAr:
      "يُحدد التسعير حسب النطاق والميزات والتعقيد. نقدم عقوداً بسعر ثابت شفافة للمشاريع المحددة وفوترة قائمة على المراحل للمبادرات الأكبر. تواصل معنا للحصول على استشارة مجانية وعرض مفصل.",
  },
  {
    question: "Do you provide post-launch support?",
    questionAr: "هل تقدمون دعماً بعد الإطلاق؟",
    answer:
      "Absolutely. We offer dedicated post-launch support and maintenance plans to keep your product secure, up-to-date, and performing at its best. This includes bug fixes, feature iterations, performance monitoring, and security updates.",
    answerAr:
      "بالتأكيد. نقدم خطط دعم وصيانة مخصصة بعد الإطلاق للحفاظ على منتجك آمناً ومحدثاً وبأفضل أداء. يشمل ذلك إصلاح الأخطاء وتحديث الميزات ومراقبة الأداء والتحديثات الأمنية.",
  },
  {
    question: "Can you integrate with our existing team?",
    questionAr: "هل يمكنكم التكامل مع فريقنا الحالي؟",
    answer:
      "Yes. We seamlessly embed with your in-house team as an extension of your organization. Whether you need engineering capacity, design leadership, or technical consulting, we adapt to your workflow, tools, and culture.",
    answerAr:
      "نعم. نندمج بسلاسة مع فريقك الداخلي كامتداد لمؤسستك. سواء كنت بحاجة إلى قدرات هندسية أو قيادة تصميم أو استشارات تقنية، نتكيف مع سير عملك وأدواتك وثقافتك.",
  },
  {
    question: "What does your development process look like?",
    questionAr: "كيف تبدو عملية التطوير لديكم؟",
    answer:
      "We run a structured agile workflow with iterative sprints. Our process spans Discovery, Strategy, Design, Architecture, Engineering, Launch, and Ongoing Partnership — keeping you fully involved and informed at every milestone.",
    answerAr:
      "نعتمد سير عمل أجايل منظم بدورات تطوير متكررة. تشمل عمليتنا الاكتشاف والاستراتيجية والتصميم والبنية التقنية والهندسة والإطلاق والشراكة المستمرة — مع إبقائك مشاركاً ومطلعاً عند كل مرحلة.",
  },
];

export function FAQ({ isArabic }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 relative overflow-hidden">
      {/* Subtle background accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[140px]"></div>
        <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-white/[0.02] rounded-full blur-[80px]"></div>
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
            {isArabic ? "أسئلة شائعة" : "Common Questions"}
            <DotGrid className="text-blue-400/50" />
          </h2>
          <p className="text-base md:text-lg text-slate-500 max-w-2xl leading-relaxed">
            {isArabic
              ? "كل ما تحتاج معرفته حول خدماتنا ومنهجيتنا وتسعيرنا — في مكان واحد."
              : "Everything you need to know about our services, process, and pricing — all in one place."}
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-3"
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="glass-card rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="text-base md:text-lg font-medium text-slate-800 pr-4">
                    {isArabic ? faq.questionAr : faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown
                      className={`w-5 h-5 transition-colors duration-300 ${
                        isOpen ? "text-blue-600" : "text-slate-400"
                      }`}
                    />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5">
                        <div className="divider !my-0 mb-4" />
                        <p className="text-sm md:text-base text-slate-500 leading-relaxed">
                          {isArabic ? faq.answerAr : faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
