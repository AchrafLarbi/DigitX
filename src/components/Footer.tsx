"use client";
import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  Globe,
} from "lucide-react";

interface FooterProps {
  isArabic: boolean;
}

export function Footer({ isArabic }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-400 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-purple-400 blur-3xl"></div>
      </div>

      {/* Back to top button */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="absolute right-4 -top-7 sm:right-6 lg:right-8">
          <button
            onClick={scrollToTop}
            className="bg-gradient-to-r from-teal-500 to-blue-600 p-3 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            aria-label={isArabic ? "العودة إلى الأعلى" : "Back to top"}
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="relative pt-16 pb-12" dir={isArabic ? "rtl" : "ltr"}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
            {/* Company Info */}
            <div className={isArabic ? "text-right" : "text-left"}>
              <div
                className={`flex items-center gap-2 mb-4 ${
                  isArabic ? "justify-start" : "justify-start"
                }`}
              >
                <h3 className="text-xl font-bold bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                  {isArabic ? "شركتنا" : "Digitx"}
                </h3>
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <Globe className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <p
                className={`text-gray-300 mb-6 ${
                  isArabic ? "ml-auto" : "mr-auto"
                } max-w-xs`}
              >
                {isArabic
                  ? "نحن شركة ناشئة مبتكرة تهدف إلى تغيير العالم من خلال التكنولوجيا المتطورة والأفكار الإبداعية."
                  : "We're an innovative startup aiming to change the world through cutting-edge technology and creative ideas."}
              </p>
              <div
                className={`flex gap-3 ${
                  isArabic ? "justify-start" : "justify-start"
                }`}
              >
                <a
                  href="#"
                  className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className={isArabic ? "text-right" : "text-left"}>
              <h3 className="text-lg font-semibold mb-6 w-full">
                {isArabic ? "روابط سريعة" : "Quick Links"}
              </h3>
              <ul className="space-y-3 w-full">
                <li>
                  <a
                    href="#home"
                    className="text-gray-300 hover:text-white transition-colors duration-300 block"
                  >
                    {isArabic ? "الرئيسية" : "Home"}
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-gray-300 hover:text-white transition-colors duration-300 block"
                  >
                    {isArabic ? "خدماتنا" : "Services"}
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="text-gray-300 hover:text-white transition-colors duration-300 block"
                  >
                    {isArabic ? "المشاريع" : "Projects"}
                  </a>
                </li>
                <li>
                  <a
                    href="#team"
                    className="text-gray-300 hover:text-white transition-colors duration-300 block"
                  >
                    {isArabic ? "فريقنا" : "Teams"}
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-300 hover:text-white transition-colors duration-300 block"
                  >
                    {isArabic ? "اتصل بنا" : "Contact Us"}
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className={isArabic ? "text-right" : "text-left"}>
              <h3 className="text-lg font-semibold mb-6 w-full">
                {isArabic ? "خدماتنا" : "Our Services"}
              </h3>
              <ul className="space-y-3 w-full">
                <li>
                  <p className="text-gray-300 hover:text-white transition-colors duration-300 block">
                    {isArabic ? "تطوير الويب" : "Web Development"}
                  </p>
                </li>
                <li>
                  <p className="text-gray-300 hover:text-white transition-colors duration-300 block">
                    {isArabic ? "تطوير التطبيقات" : "App Development"}
                  </p>
                </li>
                <li>
                  <p className="text-gray-300 hover:text-white transition-colors duration-300 block">
                    {isArabic ? "تصميم واجهة المستخدم" : "UI/UX Design"}
                  </p>
                </li>
                <li>
                  <p className="text-gray-300 hover:text-white transition-colors duration-300 block">
                    {isArabic ? "التسويق الرقمي" : "Digital Marketing"}
                  </p>
                </li>
                <li>
                  <p className="text-gray-300 hover:text-white transition-colors duration-300 block">
                    {isArabic ? "تقنية تحرير الفيديو" : "Video Editing"}
                  </p>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className={isArabic ? "text-right" : "text-left"}>
              <h3 className="text-lg font-semibold mb-6 w-full">
                {isArabic ? "معلومات الاتصال" : "Contact Info"}
              </h3>
              <ul className="space-y-4 w-full">
                <li>
                  <a
                    href="mailto:digitxcontact22@gmail.com"
                    className={`text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-3 ${
                      isArabic ? "flex-row-reverse justify-start" : ""
                    }`}
                  >
                    <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span>digitxcontact22@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+1234567890"
                    className={`text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-3 ${
                      isArabic ? "flex-row-reverse justify-start" : ""
                    }`}
                  >
                    <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                      <Phone className="w-4 h-4" />
                    </div>
                    <span>+213 542 5274 08</span>
                  </a>
                </li>
                <li
                  className={`flex items-center gap-3 text-gray-300 ${
                    isArabic ? "flex-row-reverse justify-start" : ""
                  }`}
                >
                  <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span>
                    Sidi Bel Abbés 22000
                    <br />
                    Université Djillali Liabés de Sidi Bel Abbés
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/10 pt-8 mt-8 text-center">
            <div
              className={`flex flex-col md:flex-row ${
                isArabic ? "md:flex-row-reverse" : ""
              } justify-between items-center gap-4`}
            >
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()}{" "}
                {isArabic
                  ? "فريق Digitx. جميع الحقوق محفوظة"
                  : "Digitx Team. All rights reserved."}
              </p>
              <div
                className={`flex gap-6 ${isArabic ? "flex-row-reverse" : ""}`}
              >
                <p className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                  {isArabic ? "سياسة الخصوصية" : "Privacy Policy"}
                </p>
                <p className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                  {isArabic ? "شروط الاستخدام" : "Terms of Service"}
                </p>
                <p className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                  {isArabic ? "سياسة ملفات تعريف الارتباط" : "Cookie Policy"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
