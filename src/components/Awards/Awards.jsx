import React from "react";
import "./Awards.css";

const awardsList = [
  {
    title: "Recruitment Impact Excellence Award",
    description:
      "Awarded for consistently delivering successful placement outcomes and empowering student careers across India.",
    icon: "/trophy.svg", 
  },
  {
    title: "Top Campus Hiring Innovator",
    description:
      "Recognized for introducing next-gen digital solutions that simplify campus hiring and onboarding fresh talent.",
    icon: "/Graduation.svg",
  },
  {
    title: "Best Platform for Fresher’s Job Placement",
    description:
      "Honored for high placement success rates and commitment to helping fresh graduates kickstart their careers.",
    icon: "/Arrow.svg",
  },
  {
    title: "Excellence in Candidate Support & Experience",
    description:
      "Acknowledged for creating a user-centric hiring journey that supports students from registration to job offer.",
    icon: "/Handshake.svg",
  },
  {
    title: "Leader in Early Talent Discovery & Engagement",
    description:
      "Awarded for enabling companies to connect with top student talent from Tier 2 and Tier 3 colleges.",
    icon: "/Medal.svg",
  },
];

const Awards = () => {
  return (
    <div className="awards-container">
      <h2 className="awards-heading">Awards & Recognition</h2>
      <div className="awards-list">
        {awardsList.map((award, index) => (
          <div key={index} className="award-item">
            <img src={award.icon} alt="Award Icon" className="award-icon" />
            <div className="award-content">
              <h3 className="award-title">{award.title}</h3>
              <p className="award-description">{award.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Awards;
