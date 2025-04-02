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
} from "lucide-react";
import emailjs from "@emailjs/browser";

interface ContactProps {
  isArabic: boolean;
}

export function Contact({ isArabic }: ContactProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
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

    if (!formState.user_name.trim()) {
      newErrors.user_name = isArabic ? "الاسم مطلوب" : "Name is required";
    }

    if (!formState.user_email.trim()) {
      newErrors.user_email = isArabic
        ? "البريد الإلكتروني مطلوب"
        : "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formState.user_email)) {
      newErrors.user_email = isArabic
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
      // EmailJS configuration
      // Replace these with your actual EmailJS credentials
      const serviceId = "YOUR_SERVICE_ID";
      const templateId = "YOUR_TEMPLATE_ID";
      const publicKey = "YOUR_PUBLIC_KEY";

      // Send email using EmailJS
      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current!,
        publicKey
      );

      console.log("Email sent successfully:", result.text);
      setSubmitStatus("success");

      // Reset form
      setFormState({
        user_name: "",
        user_email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);

      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #f5f7ff 0%, #ffffff 100%)",
      }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-100 to-purple-50 rounded-full opacity-60 blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-teal-100 to-teal-50 rounded-full opacity-60 blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-pink-100 to-pink-50 rounded-full opacity-40 blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-blue-900 mb-6 relative inline-block">
            {isArabic ? "اتصل بنا" : "Contact Us"}
            <span className="absolute -bottom-3 left-0 right-0 h-1.5 bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500 rounded-full"></span>
          </h2>
          <p className="text-xl text-blue-700 max-w-2xl mx-auto">
            {isArabic
              ? "نحن هنا للإجابة على أسئلتك ومساعدتك في تحقيق رؤيتك الرقمية"
              : "We're here to answer your questions and help you achieve your digital vision"}
          </p>
        </motion.div>

        <div className="flex flex-col items-center w-full max-w-3xl mx-auto">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full"
          >
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl w-full shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-blue-700 mb-6 flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  <Mail className="w-5 h-5" />
                </span>
                {isArabic ? "أرسل لنا رسالة" : "Send Us a Message"}
              </h3>

              <AnimatePresence>
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mb-6 p-4 bg-gradient-to-r from-teal-50 to-green-50 border border-teal-200 rounded-xl flex items-center gap-3 text-teal-700"
                  >
                    <div className="bg-teal-100 rounded-full p-1.5">
                      <CheckCircle className="w-5 h-5 text-teal-600" />
                    </div>
                    <p className="font-medium">
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
                    transition={{ duration: 0.3 }}
                    className="mb-6 p-4 bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 rounded-xl flex items-center gap-3 text-red-700"
                  >
                    <div className="bg-red-100 rounded-full p-1.5">
                      <AlertCircle className="w-5 h-5 text-red-600" />
                    </div>
                    <p className="font-medium">
                      {isArabic
                        ? "حدث خطأ أثناء إرسال رسالتك. يرجى المحاولة مرة أخرى."
                        : "An error occurred while sending your message. Please try again."}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label className=" text-gray-700 text-sm font-medium mb-2 flex items-center gap-1.5">
                      <User className="w-4 h-4 text-gray-500" />
                      {isArabic ? "الاسم" : "Name"}*
                    </label>
                    <input
                      type="text"
                      name="user_name"
                      value={formState.user_name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3.5 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 ${
                        errors.user_name
                          ? "border-red-300 focus:border-red-500 focus:ring-red-200 bg-red-50"
                          : "border-gray-200 focus:border-teal-500 focus:ring-teal-200 bg-white/80"
                      }`}
                      placeholder={isArabic ? "أدخل اسمك" : "Enter your name"}
                    />
                    <AnimatePresence>
                      {errors.user_name && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="mt-1.5 text-sm text-red-600 flex items-center gap-1"
                        >
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.user_name}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="relative">
                    <label className=" text-gray-700 text-sm font-medium mb-2 flex items-center gap-1.5">
                      <Mail className="w-4 h-4 text-gray-500" />
                      {isArabic ? "البريد الإلكتروني" : "Email"}*
                    </label>
                    <input
                      type="email"
                      name="user_email"
                      value={formState.user_email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3.5 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 ${
                        errors.user_email
                          ? "border-red-300 focus:border-red-500 focus:ring-red-200 bg-red-50"
                          : "border-gray-200 focus:border-teal-500 focus:ring-teal-200 bg-white/80"
                      }`}
                      placeholder={
                        isArabic ? "أدخل بريدك الإلكتروني" : "Enter your email"
                      }
                    />
                    <AnimatePresence>
                      {errors.user_email && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="mt-1.5 text-sm text-red-600 flex items-center gap-1"
                        >
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.user_email}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                <div className="relative">
                  <label className=" text-gray-700 text-sm font-medium mb-2 flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-gray-500" />
                    {isArabic ? "الموضوع" : "Subject"}
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 border border-gray-200 rounded-xl focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all duration-300 bg-white/80"
                    placeholder={
                      isArabic ? "موضوع رسالتك" : "Subject of your message"
                    }
                  />
                </div>

                <div className="relative">
                  <label className=" text-gray-700 text-sm font-medium mb-2 flex items-center gap-1.5">
                    <MessageSquare className="w-4 h-4 text-gray-500" />
                    {isArabic ? "الرسالة" : "Message"}*
                  </label>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3.5 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 min-h-[180px] resize-y ${
                      errors.message
                        ? "border-red-300 focus:border-red-500 focus:ring-red-200 bg-red-50"
                        : "border-gray-200 focus:border-teal-500 focus:ring-teal-200 bg-white/80"
                    }`}
                    placeholder={
                      isArabic ? "اكتب رسالتك هنا" : "Write your message here"
                    }
                  ></textarea>
                  <AnimatePresence>
                    {errors.message && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="mt-1.5 text-sm text-red-600 flex items-center gap-1"
                      >
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.message}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 10px 25px -5px rgba(79, 70, 229, 0.2)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 font-medium text-base ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>{isArabic ? "جاري الإرسال..." : "Sending..."}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>{isArabic ? "إرسال الرسالة" : "Send Message"}</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
