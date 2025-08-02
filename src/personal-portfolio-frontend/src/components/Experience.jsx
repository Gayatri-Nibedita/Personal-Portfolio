import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaEthereum, FaPython, FaProjectDiagram } from "react-icons/fa";
import { BsFillTerminalFill } from "react-icons/bs";

const experienceData = [
  {
    title: "Blockchain Intern",
    company: "Nullclass EDT. PVT. LMT, Tamil Nadu",
    date: "Jun’25–Jul’25",
    description:
      "Upgraded with Web-3 technologies like Solidity, Ethereum, Remix IDE, Alchemy, MetaMask, Sepolia Testnet, GitHub.",
    icon: <FaEthereum className="text-light" />,
  },
  {
    title: "Blockchain Development Intern",
    company: "BlockseBlock, Punjab",
    date: "Jun’25–Jul’25",
    description:
      "Worked on Smart Contract Development, Decentralized Applications (dApps), Exploring Blockchain Technologies - ICP Canisters, ICP Mainnet.",
    icon: <FaProjectDiagram className="text-light" />,
  },
  {
    title: "Trainee",
    company: "Nullclass, Tamil Nadu",
    date: "May’25",
    description:
      "Learned to build a Real-Time Blockchain Crowdfunding Application using MetaMask Wallet, Solidity, Ethereum, and Remix IDE.",
    icon: <BsFillTerminalFill className="text-light" />,
  },
  {
    title: "Python Intern",
    company: "Central Tool Room & Training Centre, Bhubaneswar",
    date: "May’24–Jun’24",
    description:
      "Developed skills in Python, OOP, GUI programming, database interaction, and Django framework with hands-on projects.",
    icon: <FaPython className="text-light" />,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-5 experience-section text-light">
      <Container>
        <h2 className="text-center mb-5 display-5 fw-bold text-gradient">Experience</h2>
        <Row className="g-4 justify-content-center">
          {experienceData.map((exp, index) => (
            <Col lg={6} md={10} key={index}>
              <motion.div
                whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Card className="bg-dark border-gradient p-4 shadow-lg glass-card">
                  <div className="d-flex align-items-start mb-3">
                    <div className="me-3 fs-3">{exp.icon}</div>
                    <div>
                      <h4 className="fw-bold mb-0">{exp.title}</h4>
                      <p className="text-secondary mb-1">{exp.company}</p>
                      <small className="text-muted fst-italic">{exp.date}</small>
                    </div>
                  </div>
                  <p className="text-light">{exp.description}</p>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Experience;
