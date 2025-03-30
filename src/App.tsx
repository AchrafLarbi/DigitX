import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Team } from './components/Team';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import './styles/animations.css';

function App() {
  const [isArabic, setIsArabic] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={`min-h-screen bg-white ${isArabic ? 'font-arabic' : ''}`} dir={isArabic ? 'rtl' : 'ltr'}>
      <Navbar
        isArabic={isArabic}
        setIsArabic={setIsArabic}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <Hero isArabic={isArabic} />
      <Services isArabic={isArabic} />
      <Projects isArabic={isArabic} />
      <Team isArabic={isArabic} />
      <Contact isArabic={isArabic} />
      <Footer isArabic={isArabic} />
    </div>
  );
}

export default App;