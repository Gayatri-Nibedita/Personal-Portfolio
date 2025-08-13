import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showAlert, setShowAlert] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
    .send(
      "service_vwnvcs8",    // from EmailJS dashboard
      "template_lkpy779",   // from EmailJS template
      formData,             // your state object
      "uWoZqEeJopATvQ5wd"     // from EmailJS account
    )
    .then(
      (result) => {
        setIsSubmitting(false);
        setShowAlert(true);
        setFormData({ name: '', email: '', message: '' });

        setTimeout(() => {
          setShowAlert(false);
        }, 5000);
      },
      (error) => {
        setIsSubmitting(false);
        alert("Failed to send message. Please try again later.");
      }
    );
};
  const contactInfo = [
    {
      icon: 'fas fa-envelope',
      label: 'Email',
      value: 'nibedita2004s@gmail.com',
      href: 'mailto:nibedita2004s@gmail.com',
      color: ''
    },
    
    
    {
      icon: 'fas fa-map-marker-alt',
      label: 'Location',
      value: 'Bhubaneswar, India',
      href: '#',
      color: 'warning'
    }
  ];

  const socialLinks = [
    {
      icon: 'fab fa-github',
      label: 'GitHub',
      href: 'https://github.com/Gayatri-Nibedita',
      color: 'dark'
    },
    {
      icon: 'fab fa-linkedin',
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/s-gayatri-nibedita-0299a22ba/',
      color: 'primary'
    },
    {
      icon: 'fab fa-twitter',
      label: 'Twitter',
      href: 'https://x.com/GayatriNibedita',
      color: 'info'
    },
    {
      icon: 'fab fa-discord',
      label: 'Discord',
      href: 's.gayatrinibedita',
      color: 'secondary'
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <h2 className="section-title" data-aos="fade-up">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="section-subtitle" data-aos="fade-up" data-aos-delay="200">
              Ready to discuss next project? Let's bring your vision to life.
            </p>
          </Col>
        </Row>

        <Row>
          {/* Contact Information */}
          <Col lg={5} className="mb-5">
            <div data-aos="fade-right">
              <h3 className="mb-4">Get in Touch</h3>
              <p className="mb-4">
                I'm always excited to collaborate on innovative projects and discuss 
                the latest developments. Feel free to reach out through any of the channels below.
              </p>

              {/* Contact Cards */}
              <div className="contact-info mb-4">
                {contactInfo.map((contact, index) => (
                  <Card 
                    key={index} 
                    className="contact-card mb-3"
                    data-aos="fade-right" 
                    data-aos-delay={index * 100}
                  >
                    <Card.Body className="d-flex align-items-center">
                      <div className={`contact-icon text-${contact.color} me-3`}>
                        <i className={contact.icon}></i>
                      </div>
                      <div>
                        <h6 className="mb-1">{contact.label}</h6>
                        <a href={contact.href} className="contact-link">
                          {contact.value}
                        </a>
                      </div>
                    </Card.Body>
                  </Card>
                ))}
              </div>

              {/* Social Links */}
              <div className="social-section">
                <h5 className="mb-3">Follow Me</h5>
                <div className="social-links-grid">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`social-link-card text-${social.color}`}
                      data-aos="zoom-in"
                      data-aos-delay={index * 100}
                    >
                      <i className={social.icon}></i>
                      <span>{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>
              
            </div>
          </Col>

          {/* Contact Form */}
          <Col lg={7}>
            <Card className="contact-form-card" data-aos="fade-left">
              <Card.Header>
                <h4 className="mb-0">
                  <i className="fas fa-paper-plane me-2"></i>
                  Send a Message
                </h4>
              </Card.Header>
              <Card.Body>
                {showAlert && (
                  <Alert variant="success" className="animated-alert">
                    <i className="fas fa-check-circle me-2"></i>
                    Message sent successfully! I'll get back to you soon.
                  </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="John Doe"
                          required
                          className="form-control-custom"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="john@example.com"
                          required
                          className="form-control-custom"
                        />
                      </Form.Group>
                    </Col>
                  </Row>


                  <Form.Group className="mb-4">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={6}
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me ..."
                      required
                      className="form-control-custom"
                    />
                  </Form.Group>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    className="submit-btn w-100"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                        Sending...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane me-2"></i>
                        Send Message
                      </>
                    )}
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;