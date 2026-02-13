import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Achievements } from "./components/Achievements";
import { Projects } from "./components/Projects";
import { Team } from "./components/Team";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { WhatsAppPolicy } from "./components/WhatsAppPolicy";
import "./styles/animations.css";

function App() {
  const [isArabic, setIsArabic] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");

  // Check for path in URL
  useEffect(() => {
    const path = window.location.pathname;
    if (path === "/policy") {
      setCurrentPage("whatsapp-policy");
    } else {
      setCurrentPage("home");
    }

    // Add popstate event listener to handle browser back/forward navigation
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === "/policy") {
        setCurrentPage("whatsapp-policy");
      } else {
        setCurrentPage("home");
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
        <WhatsAppPolicy isArabic={isArabic} />
      ) : (
        <>
          <Hero isArabic={isArabic} />
          <Services isArabic={isArabic} />
          <Achievements isArabic={isArabic} />
          <Projects isArabic={isArabic} />
          <Team isArabic={isArabic} />
          <Testimonials isArabic={isArabic} />
          <Contact isArabic={isArabic} />
        </>
      )}

      <Footer isArabic={isArabic} />
    </div>
  );
}

export default App;
