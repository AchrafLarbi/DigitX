interface ContactProps {
  isArabic: boolean;
}

export function Contact({ isArabic }: ContactProps) {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-blue-50 to-white"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-16 animate-fade-in">
          {isArabic ? "اتصل بنا" : "Contact Us"}
        </h2>
        <form className="bg-white rounded-xl shadow-lg p-8 transform hover:shadow-2xl transition-all duration-300">
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              {isArabic ? "الاسم" : "Name"}
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
              placeholder={isArabic ? "أدخل اسمك" : "Enter your name"}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              {isArabic ? "البريد الإلكتروني" : "Email"}
            </label>
            <input
              type="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
              placeholder={
                isArabic ? "أدخل بريدك الإلكتروني" : "Enter your email"
              }
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              {isArabic ? "الرسالة" : "Message"}
            </label>
            <textarea
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
              rows={4}
              placeholder={
                isArabic ? "اكتب رسالتك هنا" : "Write your message here"
              }
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            {isArabic ? "إرسال" : "Send"}
          </button>
        </form>
      </div>
    </section>
  );
}
