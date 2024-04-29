/* eslint-disable react/no-unescaped-entities */
import { faAngular, faReact, faJava, faPhp, faJs, faPython, faHtml5, faCss3Alt, faGit } from '@fortawesome/free-brands-svg-icons';
import Marquee from 'react-fast-marquee';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import pobucaLogo from '/src/assets/photos/pobuca_logo.svg';
import uniLogo from '/src/assets/photos/uni_logo.png';
import './Resume.css';

function Resume() {
  const skills = [
    { name: "Angular", icon: faAngular, color: '#DD0031' },
    { name: "React.js", icon: faReact, color: '#61DBFB' },
    { name: "HTML", icon: faHtml5, color: '#E44D26' },
    { name: "CSS", icon: faCss3Alt, color: '#264DE4' },
    { name: "JavaScript", icon: faJs, color: '#F0DB4F' },
    { name: "Java", icon: faJava, color: '#007396' },
    { name: "PHP", icon: faPhp, color: '#8892BF' },
    { name: "Python", icon: faPython, color: '#3776AB' },
    { name: "Git", icon: faGit, color: '#F05032' },
  ];

  return (
    <div className="resume-section" id="resume">
      <h1 className="resume-title">Resume</h1>
      <div className="education">
        <h3>Education</h3>
        <div className="education-item">
          <img src={uniLogo} alt="Department of Digital Systems Logo" />
          <div>
            <h4>Department of Digital Systems</h4>
            <p>Bachelor's degree, Computer Science</p>
            <p>2020 - Sept 2024</p>
          </div>
        </div>
      </div>
      <div className="experience">
        <h3>Experience</h3>
        <div className="experience-item">
          <img src={pobucaLogo} alt="Pobuca Logo" />
          <div>
            <h4>Frontend Developer</h4>
            <p>Pobuca · Internship</p>
            <p>Mar 2024 - Present</p>
          </div>
        </div>
      </div>
      <div className="skills">
        <h2>Skills</h2> 
        <div className="skillsContainer">
          <Marquee
            speed={80}
            direction="left"
            gradient={false}
            play={true}
            pauseOnHover={true}
            pauseOnClick={false}
            loop={0}
            onFinish={() => {}}
            onCycleComplete={() => {}}
          >
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="skill--box" style={{ backgroundColor: skill.color }}>
                  <FontAwesomeIcon icon={skill.icon} size="1x" color="#fff" />
                  <h3>{skill.name}</h3>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}

export default Resume;
