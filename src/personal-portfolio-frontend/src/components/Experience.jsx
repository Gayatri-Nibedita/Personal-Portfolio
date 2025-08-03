import React from "react";
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
    icon: <FaEthereum />,
  },
  {
    title: "Blockchain Development Intern",
    company: "BlockseBlock, Punjab",
    date: "Jun’25–Jul’25",
    description:
      "Worked on Smart Contract Development, Decentralized Applications (dApps), Exploring Blockchain Technologies - ICP Canisters, ICP Mainnet.",
    icon: <FaProjectDiagram />,
  },
  {
    title: "Trainee",
    company: "Nullclass, Tamil Nadu",
    date: "May’25",
    description:
      "Learned to build a Real-Time Blockchain Crowdfunding Application using MetaMask Wallet, Solidity, Ethereum, and Remix IDE.",
    icon: <BsFillTerminalFill />,
  },
  {
    title: "Python Intern",
    company: "CTTC, Bhubaneswar",
    date: "May’24–Jun’24",
    description:
      "Developed skills in Python, OOP, GUI programming, database interaction, and Django framework with hands-on projects.",
    icon: <FaPython />,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title">Experience</h2>
      <div className="timeline">
        {experienceData.map((exp, index) => (
          <motion.div
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="timeline-icon">{exp.icon}</div>
            <div className="timeline-content glassmorphic-card">
              <h4>{exp.title}</h4>
              <p className="company">{exp.company}</p>
              <small className="date">{exp.date}</small>
              <p>{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
