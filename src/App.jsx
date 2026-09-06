import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-scroll';
import anas from './assets/anas.png';
import resume from './assets/mohamedanasresume.pdf';
import student from './assets/ss.png';
import placement from './assets/pp.png';
import quiz from './assets/quiz.png';


// --- Data ---
const skills = [
  "HTML", "CSS", "JavaScript", "React.js", "MongoDB", 
  "Express.js", "Node.js", "Git", "GitHub", "Bootstrap"
];

const projects = [
  {
    title: "Online Quiz Management System",
    desc: "A comprehensive platform to conduct quizzes and analyze results efficiently. Features include timer, instant feedback, and score analytics.",
    tech: ["MongoDB", "Node.js","Express.js","React.js"],
    image: quiz
  },
  {
    title: "Student Task Management System",
    desc: "Designed to track student progress efficiently. Allows task assignment, status updates, and performance tracking for educators.",
    tech: ["React.js", "Node.js","Express.js", "MongoDB"],
    image: student
  },
  {
    title: "Placement Preparation App",
    desc: "An all-in-one app to help students prepare for placements. Includes resources, mock tests, and company-specific preparation guides.",
    tech: ["React.js", "Node.js", "Express.js","MongoDB"],
    image: placement
  }
];

// --- Sub-Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="logo">Mohamed Anas H</div>
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><Link to="home" smooth={true} duration={500} onClick={toggleMenu}>Home</Link></li>
          <li><Link to="about" smooth={true} duration={500} onClick={toggleMenu}>About & Skills</Link></li>
          <li><Link to="projects" smooth={true} duration={500} onClick={toggleMenu}>Projects</Link></li>
          <li><Link to="contact" smooth={true} duration={500} onClick={toggleMenu}>Contact</Link></li>
          <li>
            <a 
              href={resume} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={toggleMenu}
            >
              Resume
            </a>
          </li>
          <li><Link to="contact" className="btn" style={{padding: '8px 20px', marginLeft: '10px',color:'white'}} onClick={toggleMenu}>Hire Me</Link></li>
        </ul>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <span className="hero-subtitle">B.Tech IT Student</span>
          <h1 className="hero-title">Hi, I'm <span>Mohamed Anas H</span></h1>
          <p className="hero-desc">
            Passionate MERN Stack Developer skilled in building full-stack web applications. 
            I transform complex problems into elegant digital solutions.
          </p>
          <div className="hero-btns">
            <Link to="projects" className="btn" smooth={true} duration={500}>View My Work</Link>
            <Link to="contact" className="btn btn-outline" smooth={true} duration={500}>Contact Me</Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-blob"></div>
          <div className="hero-img-inner">
            <img src={anas} alt="Mohamed Anas H" />
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutSkills = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About & Skills</h2>
        <div className="about-grid">
          <div className="about-card">
            <h3>Who am I?</h3>
            <br />
            <p style={{color: 'var(--text-secondary)'}}>
              I am a B.Tech IT student with a deep passion for Web Development. 
              My journey started with curiosity about how websites work, which led me to master the MERN stack.
              I enjoy learning new technologies and applying them to solve real-world challenges.
            </p>
            <br />
            <h4>Education</h4>
            <p style={{color: 'var(--text-secondary)', marginTop: '10px'}}>
              <strong>Bachelor of Technology (IT)</strong><br />
              E.G.S Pillay Engineering College | 2027
            </p>
          </div>
          <div className="about-card">
            <h3>Tech Stack</h3>
            <p style={{color: 'var(--text-secondary)', fontSize: '0.9rem'}}>
              Technologies I've been working with recently:
            </p>
            <div className="skill-list">
              {skills.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
            <div style={{marginTop: '30px'}}>
              <h3>Soft Skills</h3>
              <div className="skill-list">
                <span className="skill-tag">Problem Solving</span>
                <span className="skill-tag">Team Work</span>
                <span className="skill-tag">Communication</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="section" style={{backgroundColor: '#162032'}}>
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-img">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-tech">
                  {project.tech.map((t, i) => <span key={i}>#{t}</span>)}
                </div>
                <p className="project-desc">{project.desc}</p>
                <div className="project-links">
                  <a href="#" className="project-link"><FaGithub /> Source Code</a>
                  <a href="#" className="project-link">Live Demo</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container contact-container">
       <h2 className="section-title" style={{ textAlign: 'center', display: 'block', width: '100%' }}>Get In Touch</h2>
        <p style={{color: 'var(--text-secondary)', maxWidth: '600px'}}>
          I am currently looking for internship opportunities or freelance projects. 
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <div className="contact-cards">
          <div className="contact-card">
            <FaEnvelope />
            <h4>Email</h4>
            <p style={{color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '5px'}}>anashajamydeen@gmail.com</p>
          </div>
          <div className="contact-card">
            <FaLinkedin />
            <h4>LinkedIn</h4>
            <p style={{color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '5px'}}><a href='https://www.linkedin.com/in/mohamedanash1409/'>mohamedanash1409</a></p>
          </div>
          <div className="contact-card">
            <FaMapMarkerAlt />
            <h4>Location</h4>
            <p style={{color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '5px'}}>Thiruvarur,Tamil Nadu, India</p>
          </div>
        </div>

        <a href="mailto:anashajamydeen@gmail.com" className="btn" style={{marginTop: '40px'}}>
          Say Hello
        </a>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="social-links">
          <a href="https://github.com/mohamedanas389" className="social-icon"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/mohamedanash1409/" className="social-icon"><FaLinkedin /></a>
          <a href="#" className="social-icon"><FaTwitter /></a>
          <a href="#" className="social-icon"><FaInstagram /></a>
        </div>
        <p style={{color: 'var(--text-secondary)', fontSize: '0.9rem'}}>
          © {new Date().getFullYear()} Mohamed Anas H. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

// --- Main App Component ---
function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <AboutSkills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;