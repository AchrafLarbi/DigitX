import heroChar from "../assets/hero/girl-Photoroom.png";

interface HeroProps {
  isArabic: boolean;
}

// Dot grid decorator (matching template's red dot pattern)
const DotGrid = ({ className = "" }: { className?: string }) => (
  <svg width="28" height="28" viewBox="0 0 28 28" className={className}>
    {[0, 1, 2, 3].map((row) =>
      [0, 1, 2, 3].map((col) => (
        <circle
          key={`${row}-${col}`}
          cx={4 + col * 7}
          cy={4 + row * 7}
          r="2.2"
          className="fill-current"
        />
      )),
    )}
  </svg>
);

const stats = [
  { value: "10+", labelEn: "Project\nCompleted", labelAr: "مشروع\nمكتمل" },
  { value: "98%", labelEn: "Client\nSatisfaction", labelAr: "رضا\nالعملاء" },
  { value: "3+", labelEn: "Years of\nExperience", labelAr: "سنوات\nالخبرة" },
  { value: "24/7", labelEn: "Support\nAvailable", labelAr: "الدعم\nمتاح" },
];

export function Hero({ isArabic = true }: HeroProps) {
  return (
    <section
      id="home"
      className="min-h-[100vh] relative overflow-hidden flex flex-col"
    >
      {/* Main hero content */}
      <div className="flex-1 flex items-center relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16">
            {/* Left content */}
            <div
              className={`flex-1 ${
                isArabic ? "text-right" : "text-left"
              } max-w-2xl`}
            >
              <h1
                className={`font-bold text-slate-900 leading-[1.1] mb-6 ${
                  isArabic
                    ? "text-4xl sm:text-5xl md:text-6xl"
                    : "text-4xl sm:text-5xl md:text-[3.5rem] lg:text-[4rem]"
                }`}
              >
                {isArabic ? (
                  <>
                    تحوّل <span className="gradient-text">أفكارك</span> إلى
                    <br />
                    واقع رقمي
                  </>
                ) : (
                  <>
                    Turning <span className="gradient-text">Ideas</span> Into
                    <br />
                    Digital Reality
                  </>
                )}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
                {isArabic
                  ? "وكالة رقمية متخصصة في تطوير الويب والموبايل والحلول الذكية والأتمتة بالذكاء الاصطناعي في الجزائر"
                  : "A digital agency specialized in web, mobile development, AI automation and AI solutions in Algeria"}
              </p>

              <div
                className={`flex items-center gap-6 ${
                  isArabic ? "flex-row-reverse" : ""
                }`}
              >
                {/* Primary CTA */}
                <a
                  href="#contact"
                  className="accent-pill-btn cta-pulse text-white px-8 py-3.5 font-semibold text-sm"
                >
                  {isArabic ? "ابدأ مشروعك" : "Start a Project"}
                </a>

                {/* Secondary link */}
                <a
                  href="#projects"
                  className="text-slate-500 hover:text-slate-800 font-medium text-sm flex items-center gap-2 transition-colors group"
                >
                  {isArabic ? "شاهد أعمالنا" : "See Our Work"}
                  <span className="inline-block transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </div>

            {/* Right decorative area — character on top of outlined brand text */}
            <div className="hidden md:flex flex-1 items-center justify-center relative">
              <div className="relative inline-flex items-center justify-center">
                <img
                  src={heroChar}
                  alt="3D Character"
                  className="w-48 lg:w-64 xl:w-72 h-auto object-contain drop-shadow-2xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                />
                <div
                  className="leading-none select-none tracking-tight"
                  style={{
                    fontFamily: "'SN Pro', sans-serif",
                    fontSize: "clamp(5rem, 10vw, 14rem)",
                    fontWeight: 200,
                    color: "transparent",
                    WebkitTextStroke: "1.5px rgba(30, 64, 175, 0.12)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  DIGITX
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar at bottom */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12">
          <div className="stats-bar rounded-2xl px-4 sm:px-8 py-5 sm:py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className={`stat-item flex items-center gap-3 sm:gap-4 ${
                    i === 0
                      ? isArabic
                        ? "justify-end"
                        : "justify-start"
                      : i === stats.length - 1
                        ? isArabic
                          ? "justify-start"
                          : "justify-end"
                        : "justify-center"
                  }`}
                >
                  {i === 0 && !isArabic && (
                    <DotGrid className="text-blue-400/50 hidden sm:block" />
                  )}
                  <span className="stat-value text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-sm text-slate-500 whitespace-pre-line leading-tight">
                    {isArabic ? stat.labelAr : stat.labelEn}
                  </span>
                  {i === stats.length - 1 && !isArabic && (
                    <DotGrid className="text-blue-400/50 hidden sm:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
