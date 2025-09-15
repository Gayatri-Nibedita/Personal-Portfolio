import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import CountUp from 'react-countup';

const About = () => {
  const highlights = [
    {
      icon: 'fas fa-user-tie',
      title: '1+',
      description: 'Year of Experience',
      color: 'info'
    },
    {
      icon: 'fas fa-code',
      title: '3+',
      description: 'Projects Completed',
      color: 'danger'
    },
    {
      icon: 'fas fa-award',
      title: '5+',
      description: 'Certifications',
      color: 'success'
    },
    {
      icon: 'fas fa-briefcase',
      title: '3+',
      description: 'Internships',
      color: 'warning'
    }, 
  ];

  const journey = [
    {
      year: '2022 | Ongoing',
      title: 'Bachelor of Technology in Computer Science and Engineering',
      description: 'At Gandhi Institute of Excellent Technocrats, Bhubaneswar',
      icon: 'fas fa-rocket'
    },
    {
      year: '2022 | Completed',
      title: 'Higher Secondary (+2 Science)',
      description: 'At Sri Aurobindo Institute of Higher Studies and Research, Cuttack',
      icon: 'fas fa-infinity'
    },
    {
      year: '2020 | Completed',
      title: 'Secondary Education (10th)',
      description: 'At Sri Aurobindo Institute of Higher Studies and Research, Cuttack ',
      icon: 'fas fa-cube'
    }
  ];

  return (
    <section id="about" className="about-section">
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <h2 className="section-title" data-aos="fade-up">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="section-subtitle" data-aos="fade-up" data-aos-delay="200">
              I'm a passionate blockchain developer with a deep fascination for decentralized technologies
            </p>
          </Col>
        </Row>

        {/* Highlights */}
        <Row className="mb-5 justify-content-center">
          {highlights.map((highlight, index) => (
            <Col lg={3} md={6} key={index} className="mb-4">
              <Card 
                className={`highlight-card text-center h-100 border-${highlight.color}`}
                data-aos="zoom-in" 
                data-aos-delay={index * 100}
              >
                <Card.Body>
                  <div className={`highlight-icon text-${highlight.color} mb-3`}>
                    <i className={highlight.icon}></i>
                  </div>
                  <h3 className="highlight-number">
                    {highlight.title.includes('.') ? (
                      highlight.title
                    ) : (
                      <CountUp end={parseInt(highlight.title.replace('+', ''))} duration={2} suffix={highlight.title.includes('+') ? '+' : ''} />
                    )}
                  </h3>
                  <p className="highlight-description">{highlight.description}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row>
          <Col lg={6} className="mb-5">
            <div data-aos="fade-right">
              <h3 className="mb-4">My Story</h3>
              <div className="story-content">
                <p className="mb-4">
                  My journey into blockchain began during my computer science studies when I discovered 
                  the revolutionary potential of decentralized systems. What started as curiosity about 
                  Bitcoin evolved into a passion for building the infrastructure of Web3.
                </p>
                <p className="mb-4">
                  I specialize in Rust and Solidity development, with extensive experience in the Internet 
                  Computer Protocol (ICP) ecosystem. My work focuses on creating secure, scalable smart 
                  contracts and user-friendly decentralized applications.
                </p>
                <p>
                  When I'm not coding, you'll find me contributing to open-source projects, writing about 
                  blockchain innovation, or exploring the latest developments in DeFi and NFT ecosystems.
                </p>
              </div>
            </div>
          </Col>
          
          <Col lg={6}>
            <div data-aos="fade-left">
              <h3 className="mb-4">Educational Journey</h3>
              <div className="journey-timeline">
                {journey.map((item, index) => (
                  <div key={index} className="timeline-item" data-aos="fade-up" data-aos-delay={index * 200}>
                    <div className="timeline-marker">
                      <i className={item.icon}></i>
                    </div>
                    <div className="timeline-content">
                      <div className="timeline-year">{item.year}</div>
                      <h5 className="timeline-title">{item.title}</h5>
                      <p className="timeline-description">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;