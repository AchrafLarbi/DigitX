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
    question: "How long does a project take?",
    questionAr: "كم يستغرق المشروع من وقت؟",
    answer:
      "Project timelines vary based on scope and complexity. A simple landing page can be delivered in 1–2 weeks, while a full web or mobile application typically takes 4–12 weeks. During the discovery phase, we'll provide a detailed timeline tailored to your project.",
    answerAr:
      "تختلف الجداول الزمنية للمشاريع حسب النطاق والتعقيد. يمكن تسليم صفحة هبوط بسيطة في 1-2 أسبوع، بينما يستغرق تطبيق ويب أو هاتف كامل عادةً من 4 إلى 12 أسبوعًا. خلال مرحلة الاكتشاف، سنقدم جدولًا زمنيًا مفصلًا مخصصًا لمشروعك.",
  },
  {
    question: "What technologies do you use?",
    questionAr: "ما هي التقنيات التي تستخدمونها؟",
    answer:
      "We work with modern, industry-leading technologies including React, Next.js, Node.js, Django, Flutter, Tailwind CSS, PostgreSQL, Firebase, and more. We choose the tech stack that best fits your project's requirements and ensures scalability.",
    answerAr:
      "نعمل بأحدث التقنيات الرائدة في الصناعة بما في ذلك React و Next.js و Node.js و Django و Flutter و Tailwind CSS و PostgreSQL و Firebase وغيرها. نختار مجموعة التقنيات الأنسب لمتطلبات مشروعك لضمان قابلية التوسع.",
  },
  {
    question: "How much does it cost?",
    questionAr: "كم تكلفة المشروع؟",
    answer:
      "Costs depend on the project's scope, features, and complexity. We offer flexible pricing models — fixed-price for well-defined projects and milestone-based billing for larger ones. Contact us for a free consultation and custom quote.",
    answerAr:
      "تعتمد التكاليف على نطاق المشروع وميزاته وتعقيده. نقدم نماذج تسعير مرنة — سعر ثابت للمشاريع المحددة جيدًا وفوترة قائمة على المراحل للمشاريع الأكبر. تواصل معنا للحصول على استشارة مجانية وعرض أسعار مخصص.",
  },
  {
    question: "Do you provide ongoing support?",
    questionAr: "هل تقدمون دعمًا مستمرًا؟",
    answer:
      "Absolutely! We provide post-launch support and maintenance packages to ensure your product stays up-to-date, secure, and running smoothly. We're here for bug fixes, feature updates, and performance optimization.",
    answerAr:
      "بالتأكيد! نقدم حزم دعم وصيانة بعد الإطلاق لضمان بقاء منتجك محدثًا وآمنًا ويعمل بسلاسة. نحن هنا لإصلاح الأخطاء وتحديث الميزات وتحسين الأداء.",
  },
  {
    question: "Can you work with our existing team?",
    questionAr: "هل يمكنكم العمل مع فريقنا الحالي؟",
    answer:
      "Yes! We seamlessly integrate with your in-house team. Whether you need extra hands for development, design expertise, or technical guidance, we adapt to your workflow and tools.",
    answerAr:
      "نعم! نندمج بسلاسة مع فريقك الداخلي. سواء كنت بحاجة إلى أيادٍ إضافية للتطوير أو خبرة في التصميم أو إرشاد تقني، نتكيف مع سير عملك وأدواتك.",
  },
  {
    question: "What is your development process?",
    questionAr: "ما هي عملية التطوير لديكم؟",
    answer:
      "We follow an agile methodology with iterative sprints. Our process includes Discovery, Planning, Design, Development, Testing, Launch, and ongoing Support — keeping you involved and informed at every stage.",
    answerAr:
      "نتبع منهجية أجايل مع دورات تطوير متكررة. تشمل عمليتنا الاكتشاف والتخطيط والتصميم والتطوير والاختبار والإطلاق والدعم المستمر — مع إبقائك مشاركًا ومطّلعًا في كل مرحلة.",
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
            {isArabic ? "أسئلة متكررة" : "Frequently Asked Questions"}
            <DotGrid className="text-blue-400/50" />
          </h2>
          <p className="text-base md:text-lg text-slate-500 max-w-2xl leading-relaxed">
            {isArabic
              ? "إجابات على الأسئلة الأكثر شيوعًا حول خدماتنا وطريقة عملنا."
              : "Answers to the most common questions about our services and how we work."}
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
