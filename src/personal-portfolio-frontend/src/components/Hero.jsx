import React, { useEffect, useRef } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Typed from 'typed.js';

const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        'Blockchain Developer',
        'Smart Contract Expert',
        'Web3 Innovator',
        'DeFi Architect',
        'Rust Programmer',
        'Solidity Developer'
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    // Replace with actual resume URL
    window.open('/resume.pdf', '_blank');
  };

  return (
    <section id="hero" className="hero-section">
      <Container>
        <Row className="min-vh-100 align-items-center">
          <Col lg={6} className="hero-content">
            <div data-aos="fade-right" data-aos-delay="200">
              
            </div>
            
            <div data-aos="fade-right" data-aos-delay="400">
              <h1 className="hero-title">
                <span className="name-primary">S. Gayatri Nibedita </span>
                
                
              </h1>
            </div>
            
            <div data-aos="fade-right" data-aos-delay="600">
              <h2 className="hero-subtitle">
                I'm a <span ref={typedRef} className="typed-text"></span>
              </h2>
            </div>
            
            <div data-aos="fade-right" data-aos-delay="800">
              
            </div>
            
            <div className="hero-buttons" data-aos="fade-right" data-aos-delay="1000">
              <Button 
                className="btn-primary-custom me-3 mb-3"
                onClick={downloadResume}
              >
                <i className="fas fa-download me-2"></i>
                Download Resume
              </Button>
              <Button 
                variant="outline-light" 
                className="btn-outline-custom mb-3"
                
              >
                View My Work
              
              </Button>
            </div>
            
            <div className="social-links" data-aos="fade-right" data-aos-delay="1200">
              <a href="https://github.com/gayatrinibedita" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com/in/gayatrinibedita" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="mailto:gayatri.nibedita@email.com" className="social-link">
                <i className="fas fa-envelope"></i>
              </a>
              <a href="https://twitter.com/gayatrinibedita" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </Col>
          
          <Col lg={6} className="hero-image">
            <div className="profile-container" data-aos="fade-left" data-aos-delay="600">
              <div className="profile-glow"></div>
              <div className="profile-placeholder">
                <div className="profile-avatar">
                  <span className="avatar-initials">GN</span>
                </div>
                <p className="upload-image">Upload professional photo here</p>
              </div>
              <div className="floating-elements">
                <div className="floating-icon" style={{animationDelay: '0s'}}>
                  <i className="fab fa-ethereum"></i>
                </div>
                <div className="floating-icon" style={{animationDelay: '1s'}}>
                  <i className="fab fa-bitcoin"></i>
                </div>
                <div className="floating-icon" style={{animationDelay: '2s'}}>
                  <i className="fas fa-cube"></i>
                </div>
                <div className="floating-icon" style={{animationDelay: '3s'}}>
                  <i className="fas fa-link"></i>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      
      <div className="scroll-indicator" data-aos="fade-up" data-aos-delay="1500">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <span>explore more</span>
      </div>
    </section>
  );
};

export default Hero;