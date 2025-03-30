import { Menu, X, Languages } from "lucide-react";

interface NavbarProps {
  isArabic: boolean;
  setIsArabic: (value: boolean) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
}

export function Navbar({
  isArabic,
  setIsArabic,
  isMenuOpen,
  setIsMenuOpen,
}: NavbarProps) {
  return (
    <nav className="bg-blue-600 text-white fixed w-full z-50 transition-all duration-300 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold hover:scale-105 transition-transform cursor-pointer">
              {isArabic ? "ديجيت اكس" : "DIGITX"}
            </span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {["services", "projects", "team", "contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-500 transition-colors duration-300 hover:scale-105 transform"
                >
                  {isArabic
                    ? item === "services"
                      ? "خدماتنا"
                      : item === "projects"
                      ? "المشاريع"
                      : item === "team"
                      ? "الفريق"
                      : "اتصل بنا"
                    : item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              ))}
              <button
                onClick={() => setIsArabic(!isArabic)}
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-500 transition-all duration-300 hover:scale-105 transform"
              >
                <Languages className="w-5 h-5 mr-1" />
                {isArabic ? "English" : "عربي"}
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-blue-500 focus:outline-none transition-colors duration-300"
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
        className={`md:hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {["services", "projects", "team", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-500 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {isArabic
                ? item === "services"
                  ? "خدماتنا"
                  : item === "projects"
                  ? "المشاريع"
                  : item === "team"
                  ? "الفريق"
                  : "اتصل بنا"
                : item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
          <button
            onClick={() => {
              setIsArabic(!isArabic);
              setIsMenuOpen(false);
            }}
            className="flex items-center w-full px-3 py-2 rounded-md text-base font-medium hover:bg-blue-500 transition-colors duration-300"
          >
            <Languages className="w-5 h-5 mr-1" />
            {isArabic ? "English" : "عربي"}
          </button>
        </div>
      </div>
    </nav>
  );
}
