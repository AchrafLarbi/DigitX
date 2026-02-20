import { Menu, X, Languages } from "lucide-react";
import logo from "../assets/logo.jpg";

interface NavbarProps {
  isArabic: boolean;
  setIsArabic: (value: boolean) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
  setCurrentPage?: (page: string) => void;
}

export function Navbar({
  isArabic,
  setIsArabic,
  isMenuOpen,
  setIsMenuOpen,
  setCurrentPage,
}: NavbarProps) {
  const handleNavigation = (page: string) => {
    if (setCurrentPage) {
      if (page === "home") {
        setCurrentPage("home");
      } else if (page === "whatsapp-policy") {
        setCurrentPage("whatsapp-policy");
      }
    }
    setIsMenuOpen(false);
  };

  const navItems = ["services", "projects", "team", "contact"];

  const getLabel = (item: string) => {
    if (isArabic) {
      switch (item) {
        case "services":
          return "خدماتنا";
        case "projects":
          return "أعمالنا";
        case "team":
          return "الفريق";
        case "contact":
          return "تواصل معنا";
        default:
          return item;
      }
    }
    return item.charAt(0).toUpperCase() + item.slice(1);
  };

  return (
    <nav className="fixed w-full z-50 transition-all duration-300 bg-white/80 backdrop-blur-md border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div
            className={`flex items-center hover:scale-105 transition-transform cursor-pointer ${
              isArabic ? "space-x-reverse space-x-3" : "space-x-3"
            }`}
            onClick={() => handleNavigation("home")}
          >
            <img
              src={logo}
              alt="DigitX Logo"
              className="h-9 w-9 rounded-full object-cover logo-hover"
            />
            <span className="text-lg font-bold text-slate-900 font-sans">
              <span className="md:hidden">X</span>
              <span className="hidden md:inline">DigitX</span>
            </span>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="nav-link-hover px-4 py-2 text-sm font-medium text-slate-600 rounded-lg"
                onClick={() => handleNavigation("home")}
              >
                {getLabel(item)}
              </a>
            ))}

            <button
              onClick={() => setIsArabic(!isArabic)}
              className="nav-link-hover flex items-center px-3 py-2 text-sm font-medium text-slate-600 rounded-lg mx-1"
            >
              <Languages className="w-4 h-4 mr-1.5" />
              {isArabic ? "EN" : "عربي"}
            </button>

            {/* CTA Button */}
            <a
              href="#contact"
              className="accent-pill-btn cta-pulse text-white text-sm font-semibold px-6 py-2.5 ml-2"
              onClick={() => handleNavigation("home")}
            >
              {isArabic ? "تواصل معنا" : "Get in Touch"}
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-700 hover:bg-blue-50 transition-colors duration-300"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 bg-white/95 backdrop-blur-lg ${
          isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="px-4 pt-2 pb-4 space-y-1">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="block px-4 py-3 rounded-lg text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-blue-50 transition-colors duration-300"
              onClick={() => handleNavigation("home")}
            >
              {getLabel(item)}
            </a>
          ))}

          <button
            onClick={() => {
              setIsArabic(!isArabic);
              setIsMenuOpen(false);
            }}
            className="flex items-center w-full px-4 py-3 rounded-lg text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-blue-50 transition-colors duration-300"
          >
            <Languages className="w-5 h-5 mr-2" />
            {isArabic ? "English" : "عربي"}
          </button>

          <a
            href="#contact"
            className="block text-center accent-pill-btn text-white text-sm font-semibold px-6 py-3 mt-2"
            onClick={() => handleNavigation("home")}
          >
            {isArabic ? "تواصل معنا" : "Let's Talk"}
          </a>
        </div>
      </div>
    </nav>
  );
}
