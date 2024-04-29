/* eslint-disable react/no-unescaped-entities */
import './About.css';
import PersonIcon from '/src/assets/svg/about.svg';
const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">  
        <div className="about-description">
          <h2>About Me</h2>
          <p>Hey there! I'm Armando, a final year college student currently diving into web development through an internship. I'm passionate about front-end development, particularly in frameworks like React and Angular.</p>
          <p>With a background in Computer Science, I've honed my skills in HTML, CSS, and JavaScript to create dynamic and engaging web experiences. I'm driven by a desire to push boundaries and exceed expectations, always seeking to innovate and elevate the user experience.</p>
          <p>Let's connect and create something extraordinary together!</p>
        </div>
        <img className="about-svg" src={PersonIcon} alt="Person Icon" />
      </div>
    </section>
  );
};

export default About;
