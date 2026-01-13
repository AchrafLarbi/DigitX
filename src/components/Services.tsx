"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Smartphone,
  Globe,
  Palette,
  Video,
  TrendingUp,
  ChevronRight,
  CheckCircle,
  Brain,
  Search,
} from "lucide-react";
import { services as serviceData } from "../data";

interface ServicesProps {
  isArabic: boolean;
}

// Extended services data with video editing and marketing

export function Services({ isArabic }: ServicesProps) {
  const [activeService, setActiveService] = useState<string | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Code2":
        return Code2;
      case "Smartphone":
        return Smartphone;
      case "Globe":
        return Globe;
      case "Palette":
        return Palette;
      case "Video":
        return Video;
      case "TrendingUp":
        return TrendingUp;
      case "Brain":
        return Brain;
      case "Search":
        return Search;
      default:
        return Code2;
    }
  };

  const getBgColor = (color: string, isActive: boolean) => {
    const colorMap: Record<string, { light: string; gradient: string }> = {
      blue: {
        light: "bg-blue-50",
        gradient: "bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200",
      },
      green: {
        light: "bg-emerald-50",
        gradient:
          "bg-gradient-to-br from-emerald-50 to-emerald-100 border-emerald-200",
      },
      purple: {
        light: "bg-purple-50",
        gradient:
          "bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200",
      },
      pink: {
        light: "bg-pink-50",
        gradient: "bg-gradient-to-br from-pink-50 to-pink-100 border-pink-200",
      },
      orange: {
        light: "bg-orange-50",
        gradient:
          "bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200",
      },
      cyan: {
        light: "bg-cyan-50",
        gradient: "bg-gradient-to-br from-cyan-50 to-cyan-100 border-cyan-200",
      },
      indigo: {
        light: "bg-indigo-50",
        gradient:
          "bg-gradient-to-br from-indigo-50 to-indigo-100 border-indigo-200",
      },
    };

    return isActive
      ? colorMap[color]?.gradient || colorMap.blue.gradient
      : colorMap[color]?.light || colorMap.blue.light;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-white">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-blue-50 to-transparent"></div>
        <div className="absolute -top-64 -right-64 w-[500px] h-[500px] rounded-full bg-blue-50 opacity-70"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-purple-50 opacity-70"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold text-blue-900 mb-4 relative inline-block">
            {isArabic ? "خدماتنا" : "Our Services"}
            <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></span>
          </h2>
          <p className="text-xl text-blue-700 max-w-2xl mx-auto">
            {isArabic
              ? "نقدم مجموعة متكاملة من الخدمات الرقمية لتلبية احتياجات عملك"
              : "We offer a comprehensive suite of digital services to meet your business needs"}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        ></motion.div>

        {/* Original grid view for feature details */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {serviceData.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              onHoverStart={() => setActiveService(service.id)}
              onHoverEnd={() => setActiveService(null)}
              className={`relative p-8 rounded-2xl border transition-all duration-500 shadow-sm hover:shadow-xl ${getBgColor(
                service.color,
                activeService === service.id
              )}`}
            >
              <div className="absolute top-0 right-0 w-24 h-24 opacity-10 rounded-bl-full overflow-hidden">
                <div className={`w-full h-full bg-${service.color}-500`}></div>
              </div>

              <div className="mb-6 flex justify-center items-center">
                <motion.div
                  whileHover={{ rotate: 12, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className={`p-4 rounded-2xl bg-white shadow-sm`}
                >
                  {(() => {
                    const IconComponent = getIcon(service.icon);
                    return (
                      <IconComponent
                        className={`w-12 h-12 text-${service.color}-500`}
                      />
                    );
                  })()}
                </motion.div>
              </div>

              <h3
                className={`text-2xl font-bold mb-4 text-center text-${service.color}-700`}
              >
                {isArabic ? service.titleAr : service.title}
              </h3>

              <p className="text-gray-600 mb-6 text-center">
                {isArabic ? service.descriptionAr : service.description}
              </p>

              <div className="space-y-2 mb-6">
                {(isArabic ? service.featuresAr : service.features).map(
                  (feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle
                        className={`w-4 h-4 text-${service.color}-500`}
                      />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  )
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-10 shadow-xl">
            <h3 className="text-3xl font-bold text-white mb-4">
              {isArabic ? "هل تحتاج إلى حل مخصص؟" : "Need a custom solution?"}
            </h3>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              {isArabic
                ? "نحن نقدم حلولًا مخصصة تناسب احتياجاتك الفريدة. دعنا نناقش مشروعك ونجد الحل المثالي لك."
                : "We offer tailored solutions to fit your unique needs. Let's discuss your project and find the perfect solution for you."}
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors shadow-lg"
            >
              {isArabic ? "تحدث إلى خبير" : "Talk to an Expert"}
              <ChevronRight className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
