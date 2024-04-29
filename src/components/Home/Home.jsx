/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link } from 'react-scroll';
import photo from '/src/assets/photos/profile.jpg';
import githubIcon from '/src/assets/svg/github.svg';
import linkedinIcon from '/src/assets/svg/linkedin.svg';
import './Home.css';

const Home = () => {
  const handleDownloadCV = () => {
    const cvFilePath = '/src/assets/pdf/cv_armando_kostas.pdf';
    const link = document.createElement('a');
    link.href = cvFilePath;
    link.download = 'cv_armando_kostas.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="home-section">
      <div className="top-left">
        <h1 className="name">Armando Kostas</h1>
      </div>
      <div className="left-half">
        <div className="icons">
          <a href="https://github.com/armandok0" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" className="icon" />
          </a>
          <a href="https://linkedin.com/in/armandok0" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" className="icon" />
          </a>
        </div>
      </div>
      <div className="right-half">
        <img src={photo} alt="Profile Photo" className="profile-photo" />
        <div className="text-container">
          <p className="animated-text">
            {"Web Developer".split("").map((char, index) => (
              <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </p>
          <h1>Armando Kostas</h1>
          <p>
           Follow my journey as a Computer Science student embarking on the path of web development and dive into my projects below to discover the power of code in action.
          </p>
          <div className="buttons">
            <button className="button" onClick={handleDownloadCV}>Download CV</button>
            <div className="contact-button">
              <Link to="contact" smooth={true} duration={600} className="button">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
