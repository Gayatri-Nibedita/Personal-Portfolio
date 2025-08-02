import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaCode, FaLock, FaProjectDiagram } from "react-icons/fa";

const projectData = [
  {
    title: "Blockchain Supply Chain Transparency",
    description:
      "A solution using ICP to create transparent, tamper-proof supply chains for ethical sourcing, with real-time product tracking using Rust, JS, and Bootstrap.",
    technologies: ["Rust", "JavaScript", "Bootstrap", "SCSS"],
    icon: <FaLock />,
  },
  {
    title: "Web3 Crowdfunding Project",
    description:
      "Integrated MetaMask, Remix IDE, and smart contracts. Added events for fund withdrawals and deadline extension for project creators.",
    technologies: ["Solidity", "Web3.js", "MetaMask", "Remix"],
    icon: <FaProjectDiagram />,
  },
  {
    title: "Face-Clone Application",
    description:
      "Developed a Facebook clone using Django and SQL. Implemented core backend features and database management.",
    technologies: ["Django", "SQL", "Jupyter", "VS Code"],
    icon: <FaCode />,
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2 },
  }),
};

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <Container>
        <Col lg={12} className="text-center mb-5">
            <h2 className="section-title" data-aos="fade-up">
              Academic <span className="gradient-text">Projects</span>
            </h2>
        </Col>


        <Row className="mt-4">
          {projectData.map((project, index) => (
            <Col md={4} sm={12} key={index} className="mb-4">
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={index}
              >
                <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15}>
                  <Card className="project-card glass-effect">
                    <Card.Body>
                      <div className="project-icon">{project.icon}</div>
                      <Card.Title>{project.title}</Card.Title>
                      <Card.Text>{project.description}</Card.Text>
                      <div className="tech-stack">
                        {project.technologies.map((tech, i) => (
                          <span key={i} className="badge-tech">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </Card.Body>
                  </Card>
                </Tilt>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
