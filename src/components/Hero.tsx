interface HeroProps {
  isArabic: boolean;
}

export function Hero({ isArabic = true }: HeroProps) {
  return (
    <div className="bg-[#1e3a8a] min-h-[100vh] relative overflow-hidden flex items-center">
      {/* Background circles/gradients */}
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-blue-800/30 -translate-x-1/3 translate-y-1/3"></div>
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-blue-800/30 translate-x-1/3 -translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full">
        <div className="flex flex-col  gap-8 items-center">
          {/* Left image */}
          {/* <div className="hidden md:block">
            <div className="bg-blue-700/30 rounded-lg p-4">
              <img
                src="/placeholder.svg?height=300&width=300"
                alt="Desktop workspace"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div> */}

          {/* Center content */}
          <div className="text-center md:text-left flex flex-col items-center">
            <h3 className=" text-3xl mb-4 text-blue-400 font-bold">DIGITX</h3>

            <h1
              className={`font-bold text-white mb-6 leading-tight ${
                isArabic ? "text-6xl" : "text-5xl"
              }`}
            >
              {isArabic
                ? "تحول أفكارك إلى واقع رقمي"
                : "Transform Your Ideas Into Digital Reality"}
            </h1>

            <p className="text-xl text-white/90 mb-10">
              {isArabic
                ? "وكالة رقمية متخصصة في تطوير الويب والموبايل في الجزائر"
                : "A digital agency specialized in web and mobile development in Algeria"}
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              {/* Contact Us Button */}
              <a
                href="#contact"
                className="bg-white text-blue-400 px-8 py-3 rounded-full font-medium border border-blue-400 transition-all duration-300 hover:bg-blue-400 hover:text-white"
              >
                {isArabic ? "تواصل معنا" : "Contact Us"}
              </a>

              {/* Our Projects Button */}
              <a
                href="#projects"
                className="border border-white text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:bg-white bg-blue-400 hover:text-blue-400"
              >
                {isArabic ? "مشاريعنا" : "Our Projects"}
              </a>
            </div>
          </div>

          {/* Right image */}
          {/* <div className="hidden md:block">
            <div className="bg-blue-700/30 rounded-lg p-4">
              <img
                src="/placeholder.svg?height=300&width=300"
                alt="Mobile devices"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
