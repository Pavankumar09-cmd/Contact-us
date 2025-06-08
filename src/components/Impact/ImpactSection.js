import React from "react";
import { FaUserPlus, FaMoneyBillAlt, FaHeadset, FaBell } from "react-icons/fa";
import "./ImpactSection.css";

const impactData = [
  {
    number: "12,000+",
    label: "Candidates placed",
  },
  {
    number: "1000+",
    label: "Hiring Companies",
  },
  {
    number: "100%",
    label: "Fresher-Specific Openings",
  },
];

const steps = [
  { number: "01", label: "Register", icon: <FaUserPlus /> },
  { number: "02", label: "Registration Fee", icon: <FaMoneyBillAlt /> },
  { number: "03", label: "Career Support", icon: <FaHeadset /> },
  { number: "04", label: "Job Alerts", icon: <FaBell /> },
];

const ImpactSection = () => {
  return (
    <div className="impact-section">
      <div className="impact-intro">
        <p className="impact-subtitle">MAKING A DIFFERENCE</p>
        <h2 className="impact-title">Our Impact So Far</h2>
        <p className="impact-description">
          We’re proud of the difference we’ve made in the lives of freshers and the value we’ve added to businesses.
        </p>
      </div>

      <div className="impact-stats">
        {impactData.map((item, idx) => (
          <div className="impact-card" key={idx}>
            <h3 className="impact-number">{item.number}</h3>
            <p className="impact-label">{item.label}</p>
          </div>
        ))}
      </div>

      <div className="how-it-works">
        <h2 className="how-title">How It Works</h2>
        <div className="steps-container">
          {steps.map((step, idx) => (
            <div className="step-box" key={idx}>
              <div className="step-content">
                <div className="step-number">{step.number}</div>
                <div className="step-icon">{step.icon}</div>
              </div>
              <div className="step-label">{step.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImpactSection;
