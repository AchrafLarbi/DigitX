import React, { useState, useEffect, Suspense } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import "./styles/animations.css";

// Lazy-load below-fold sections for faster initial page load
const Services = React.lazy(() => import("./components/Services").then(m => ({ default: m.Services })));
const Achievements = React.lazy(() => import("./components/Achievements").then(m => ({ default: m.Achievements })));
const Projects = React.lazy(() => import("./components/Projects").then(m => ({ default: m.Projects })));
const Testimonials = React.lazy(() => import("./components/Testimonials").then(m => ({ default: m.Testimonials })));
const Process = React.lazy(() => import("./components/Process").then(m => ({ default: m.Process })));
const Contact = React.lazy(() => import("./components/Contact").then(m => ({ default: m.Contact })));
const Footer = React.lazy(() => import("./components/Footer").then(m => ({ default: m.Footer })));
const WhatsAppPolicy = React.lazy(() => import("./components/WhatsAppPolicy").then(m => ({ default: m.WhatsAppPolicy })));

function App() {
  const [isArabic, setIsArabic] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");

  // Check for path in URL
  useEffect(() => {
    const path = window.location.pathname;
    if (path === "/policy") {
      setCurrentPage("whatsapp-policy");
    } else {
      setCurrentPage("home");
      // Scroll to top when home page loads
      window.scrollTo(0, 0);
    }

    // Add popstate event listener to handle browser back/forward navigation
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === "/policy") {
        setCurrentPage("whatsapp-policy");
      } else {
        setCurrentPage("home");
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  // Handle navigation to update both URL and state
  const navigateTo = (page: string) => {
    if (page === "whatsapp-policy") {
      window.history.pushState({}, "", "/policy");
      setCurrentPage("whatsapp-policy");
    } else {
      window.history.pushState({}, "", "/");
      setCurrentPage("home");
    }
  };

  return (
    <div
      className={`min-h-screen bg-background ${isArabic ? "font-arabic" : ""}`}
      dir={isArabic ? "rtl" : "ltr"}
    >
      <Navbar
        isArabic={isArabic}
        setIsArabic={setIsArabic}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        setCurrentPage={navigateTo}
      />

      {currentPage === "whatsapp-policy" ? (
        <Suspense fallback={<div className="min-h-screen" />}>
          <WhatsAppPolicy isArabic={isArabic} />
        </Suspense>
      ) : (
        <>
          <Hero isArabic={isArabic} />
          <Suspense fallback={<div className="min-h-[200px]" />}>
            <Services isArabic={isArabic} />
            <Achievements isArabic={isArabic} />
            <Projects isArabic={isArabic} />
            <Testimonials isArabic={isArabic} />
            <Process isArabic={isArabic} />
            <Contact isArabic={isArabic} />
          </Suspense>
        </>
      )}

      <Suspense fallback={null}>
        <Footer isArabic={isArabic} />
      </Suspense>
    </div>
  );
}

export default App;
