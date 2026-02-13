"use client";

import { motion } from "framer-motion";
import {
  ArrowUp,
  Send as TelegramIcon,
  Linkedin,
  Instagram,
  Youtube,
} from "lucide-react";
import logo from "../assets/logo.jpg";

interface FooterProps {
  isArabic: boolean;
}

export function Footer({ isArabic }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const serviceLinks = isArabic
    ? ["تطوير الويب", "تطوير الموبايل", "الحضور الرقمي", "تصميم UI/UX"]
    : [
        "Web Development",
        "Mobile Development",
        "Digital Presence",
        "UI/UX Design",
      ];

  const companyLinks = isArabic
    ? [
        { label: "من نحن", href: "#team" },
        { label: "أعمالنا", href: "#projects" },
        { label: "تواصل معنا", href: "#contact" },
      ]
    : [
        { label: "About Us", href: "#team" },
        { label: "Portfolio", href: "#projects" },
        { label: "Contact", href: "#contact" },
      ];

  const socialLinks = [
    {
      icon: TelegramIcon,
      href: "https://t.me/DIGITX",
      label: "Telegram",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/achraf-larbi/",
      label: "LinkedIn",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/digit_x__/?hl=fr",
      label: "Instagram",
    },
    {
      icon: Youtube,
      href: "https://youtube.com",
      label: "YouTube",
    },
  ];

  return (
    <footer className="relative">
      {/* Dashed border top */}
      <div className="dashed-border-top" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Logo + description + contact */}
          <div className="lg:col-span-2 space-y-5">
            {/* Logo */}
            <div
              className="flex items-center gap-3 cursor-pointer"
              onClick={scrollToTop}
            >
              <img
                src={logo}
                alt="DIGITX Logo"
                className="h-9 w-9 rounded-full object-cover"
              />
              <span className="text-xl font-bold text-white">DIGITX</span>
            </div>

            {/* Description */}
            <p className="text-white/70 text-sm leading-relaxed max-w-md">
              {isArabic
                ? "وكالة رقمية متخصصة في تطوير الويب والموبايل والحلول الرقمية. نساعدك في بناء حضور رقمي قوي ومستدام."
                : "A digital agency specializing in web and mobile development, and digital solutions. We help you build a strong and sustainable digital presence."}
            </p>

            {/* Contact details */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/60">
              <span>digitx.agency@gmail.com</span>
              <span>•</span>
              <span>Algeria</span>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-2 pt-1">
              <div className="flex items-center gap-1 glass-card rounded-full px-3 py-2">
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-8 h-8 flex items-center justify-center text-white/70 hover:text-blue-400 transition-colors"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5">
              {isArabic ? "خدماتنا" : "Services"}
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href="#services"
                    className="text-sm text-white/60 hover:text-blue-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5">
              {isArabic ? "الشركة" : "Company"}
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="dashed-border-top pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-xs text-white/50">
            <span>{isArabic ? "سياسة الخصوصية" : "Privacy Policy"}</span>
            <span>•</span>
            <span>{isArabic ? "إخلاء المسؤولية" : "Disclaimer"}</span>
          </div>

          <p className="text-xs text-white/50">
            {isArabic
              ? `حقوق الطبع والنشر © DIGITX جميع الحقوق محفوظة ${new Date().getFullYear()}`
              : `Copyright © DIGITX All right Reserved ${new Date().getFullYear()}`}
          </p>
        </div>
      </div>

      {/* Back to top button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-10 h-10 rounded-full accent-pill-btn text-white flex items-center justify-center z-50 shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
}
