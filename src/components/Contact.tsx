"use client";

import type React from "react";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  CheckCircle,
  AlertCircle,
  Mail,
  User,
  MessageSquare,
  FileText,
  ArrowRight,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { FloatingElements } from "./ui/FloatingElements";

import heroChar from "../assets/hero/girl-Photoroom.png";

interface ContactProps {
  isArabic: boolean;
}

export function Contact({ isArabic }: ContactProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [showFullForm, setShowFullForm] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formState.name.trim()) {
      newErrors.name = isArabic ? "الاسم مطلوب" : "Name is required";
    }

    if (!formState.email.trim()) {
      newErrors.email = isArabic
        ? "البريد الإلكتروني مطلوب"
        : "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formState.email)) {
      newErrors.email = isArabic
        ? "البريد الإلكتروني غير صالح"
        : "Invalid email address";
    }

    if (!formState.message.trim()) {
      newErrors.message = isArabic ? "الرسالة مطلوبة" : "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const serviceId = import.meta.env.VITE_EMAIL_SERVICE_ID!;
      const templateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID!;
      const publicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY!;

      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current!,
        publicKey,
      );

      console.log("Email sent successfully:", result.text);
      setSubmitStatus("success");

      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setShowFullForm(false);
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);

      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    }
  };

  return (
    <section
      id="contact"
      dir={isArabic ? "rtl" : "ltr"}
      className="py-20 md:py-28 relative overflow-hidden"
    >
      {/* Subtle background accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3"></div>
        {/* White glow elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-white/[0.02] rounded-full blur-[100px]"></div>
      </div>

      {/* Floating elements */}
      <FloatingElements variant="sparse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* CTA glass card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="cta-glass p-8 md:p-12 lg:p-16 relative overflow-hidden"
        >
          {/* Side decorative — character on top of outlined text */}
          <div
            className={`absolute top-0 ${isArabic ? "left-0" : "right-0"} w-1/2 h-full hidden lg:flex items-center justify-center pointer-events-none`}
          >
            <div className="relative inline-flex items-center justify-center">
              <img
                src={heroChar}
                alt="3D Character"
                className="w-40 xl:w-52 h-auto object-contain drop-shadow-xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
              />
              <span
                className="leading-none select-none"
                style={{
                  fontFamily: "'SN Pro', sans-serif",
                  fontSize: "clamp(10rem, 18vw, 22rem)",
                  fontWeight: 200,
                  color: "transparent",
                  WebkitTextStroke: "2px rgba(30, 64, 175, 0.12)",
                  letterSpacing: "-0.02em",
                }}
              >
                DX
              </span>
            </div>
          </div>

          <div
            className={`relative max-w-xl ${isArabic ? "text-right" : "text-left"}`}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-2 leading-tight">
              {isArabic ? (
                <>
                  لنبنِ شيئًا
                  <br />
                  <span className="gradient-text">مذهلاً</span>
                </>
              ) : (
                <>
                  Let's Build
                  <br />
                  Something <span className="gradient-text">Amazing</span>
                </>
              )}
            </h2>

            <p className="text-slate-500 text-sm md:text-base mb-8 max-w-md leading-relaxed">
              {isArabic
                ? "نحن هنا للإجابة على أسئلتك ومساعدتك في تحقيق رؤيتك الرقمية"
                : "We're here to answer your questions and help you achieve your digital vision"}
            </p>

            {/* Status messages */}
            <AnimatePresence>
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mb-6 p-4 glass-card rounded-xl flex items-center gap-3 text-green-600"
                >
                  <CheckCircle className="w-5 h-5" />
                  <p className="text-sm font-medium">
                    {isArabic
                      ? "تم إرسال رسالتك بنجاح! سنتواصل معك قريبًا."
                      : "Your message has been sent successfully! We'll get back to you soon."}
                  </p>
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mb-6 p-4 glass-card rounded-xl flex items-center gap-3 text-red-500"
                >
                  <AlertCircle className="w-5 h-5" />
                  <p className="text-sm font-medium">
                    {isArabic
                      ? "حدث خطأ أثناء إرسال رسالتك. يرجى المحاولة مرة أخرى."
                      : "An error occurred while sending your message. Please try again."}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Form */}
            <form ref={formRef} onSubmit={handleSubmit}>
              {!showFullForm ? (
                /* Compact: email input + send button */
                <div className="flex items-center gap-3">
                  <div className="flex-1 relative">
                    <input
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      onClick={() => setShowFullForm(true)}
                      className="input-focus-glow w-full px-5 py-4 rounded-full bg-white/60 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-300/30 transition-all text-sm"
                      placeholder={isArabic ? "بريدك الإلكتروني" : "Email"}
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowFullForm(true)}
                    className="accent-pill-btn cta-pulse text-white w-12 h-12 flex items-center justify-center flex-shrink-0"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              ) : (
                /* Expanded full form */
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-slate-600 text-xs font-medium mb-1.5 flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {isArabic ? "الاسم" : "Name"}*
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        className={`input-focus-glow w-full px-4 py-3 rounded-xl bg-white/60 border text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:ring-1 transition-all ${
                          errors.name
                            ? "border-red-400/50 focus:border-red-400 focus:ring-red-400/20"
                            : "border-slate-200 focus:border-blue-400 focus:ring-blue-300/30"
                        }`}
                        placeholder={isArabic ? "أدخل اسمك" : "Your name"}
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="text-slate-600 text-xs font-medium mb-1.5 flex items-center gap-1">
                        <Mail className="w-3 h-3" />
                        {isArabic ? "البريد الإلكتروني" : "Email"}*
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        className={`input-focus-glow w-full px-4 py-3 rounded-xl bg-white/60 border text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:ring-1 transition-all ${
                          errors.email
                            ? "border-red-400/50 focus:border-red-400 focus:ring-red-400/20"
                            : "border-slate-200 focus:border-blue-400 focus:ring-blue-300/30"
                        }`}
                        placeholder={
                          isArabic ? "بريدك الإلكتروني" : "Your email"
                        }
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="text-slate-600 text-xs font-medium mb-1.5 flex items-center gap-1">
                      <FileText className="w-3 h-3" />
                      {isArabic ? "الموضوع" : "Subject"}
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      className="input-focus-glow w-full px-4 py-3 rounded-xl bg-white/60 border border-slate-200 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-300/30 transition-all"
                      placeholder={isArabic ? "موضوع رسالتك" : "Subject"}
                    />
                  </div>

                  <div>
                    <label className="text-slate-600 text-xs font-medium mb-1.5 flex items-center gap-1">
                      <MessageSquare className="w-3 h-3" />
                      {isArabic ? "الرسالة" : "Message"}*
                    </label>
                    <textarea
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      className={`input-focus-glow w-full px-4 py-3 rounded-xl bg-white/60 border text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:ring-1 transition-all min-h-[120px] resize-y ${
                        errors.message
                          ? "border-red-400/50 focus:border-red-400 focus:ring-red-400/20"
                          : "border-slate-200 focus:border-blue-400 focus:ring-blue-300/30"
                      }`}
                      placeholder={
                        isArabic ? "اكتب رسالتك هنا" : "Your message"
                      }
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full accent-pill-btn cta-pulse text-white px-6 py-3.5 flex items-center justify-center gap-2 font-medium text-sm ${
                      isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>
                          {isArabic ? "جاري الإرسال..." : "Sending..."}
                        </span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>
                          {isArabic ? "إرسال الرسالة" : "Send Message"}
                        </span>
                      </>
                    )}
                  </motion.button>
                </motion.div>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
