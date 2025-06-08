import React from 'react';
import './Header.css';
// import logo from '../assets/Logos/73f58b96-4ae6-47d3-bbbe-408d6752e9c6-converted 1@2x.png'; 

function Header() {
    return (
        <header className="header">
      <div className="logo-container">
        <img src="./Logo.png" alt="CRTD Technologies" className="logo" />
        <div className="logo-text">
          <span className="company-name">CRTD Technologies</span>
          <span className="tagline">Connecting Freshers</span>
        </div>
      </div>
      <nav className="navigation">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="/" className="nav-link active">Home</a>
          </li>
          <li className="nav-item">
            <a href="/fresher-jobs" className="nav-link">Fresher Jobs</a>
          </li>
          <li className="nav-item">
            <a href="/services" className="nav-link">Services</a>
          </li>
            <li className="nav-item">
              <a href="/services" className="nav-link">Pricing</a>
            </li>
            <li className="nav-item">
              <a href="/services" className="nav-link">Contact Us</a>
            </li>
        </ul>
      </nav>
      <div className="auth-buttons">
        <button className="login-button">LOGIN</button>
        <button className="register-button button-15">Register Now</button> {/* Added class here */}
      </div>
    </header>
    );
}

export default Header;