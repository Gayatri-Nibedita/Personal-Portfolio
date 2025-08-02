import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import ParticleBackground from './components/ParticleBackground';
import ThemeToggle from './components/ThemeToggle';
import Projects from './components/Projects';
import Experience from './components/Experience';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
    
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === "light") {
      setIsDarkMode(false);
    }
  }, []);

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark-theme' : 'light-theme';
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  

  return (
    <div className={`app ${isLoaded ? 'loaded' : ''}
${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
      <Navigation isDark={isDarkMode} />
      <ThemeToggle isDark={isDarkMode} toggleTheme={toggleTheme} />
      <ParticleBackground />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />

      {/* Footer */}
      <footer className="footer-section">
        <Container>
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="mb-0 text-muted">© 2025 S. Gayatri Nibedita. All rights reserved.</p>
            </div>
            <div className="col-md-6 text-md-end">
              <div className="tech-badges">
                <span className="tech-badge react">React</span>
                <span className="tech-badge js">JavaScript</span>
                <span className="tech-badge bootstrap">Bootstrap</span>
                <span className="tech-badge aos">AOS</span>
              </div>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}

export default App;