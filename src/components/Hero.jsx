import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowRight } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      <div className="container hero-content">
        <motion.div
          className="hero-text"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-greeting" variants={itemVariants}>
            <span className="greeting-line"></span>
            <span className="greeting-text">Hello, I'm</span>
          </motion.div>

          <motion.h1 className="hero-name" variants={itemVariants}>
            Santhiya
          </motion.h1>

          <motion.h2 className="hero-title" variants={itemVariants}>
            <span className="title-gradient">Web Developer</span>
            <span className="title-separator"> | </span>
            <span>React & Full-Stack Enthusiast</span>
          </motion.h2>

          <motion.p className="hero-description" variants={itemVariants}>
            I build scalable and user-friendly web applications using modern web technologies.
            Passionate about creating elegant solutions to complex problems.
          </motion.p>

          <motion.div className="hero-buttons" variants={itemVariants}>
            <button 
              className="btn btn-primary"
              onClick={() => scrollToSection('projects')}
            >
              View Projects
              <FiArrowRight className="btn-icon" />
            </button>
            <a 
              href="/resume.pdf" 
              download
              className="btn btn-secondary"
            >
              <FiDownload className="btn-icon" />
              Download Resume
            </a>
          </motion.div>

          <motion.div className="hero-social" variants={itemVariants}>
            <a 
              href="https://github.com/Santhiya051" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="GitHub"
            >
              <FiGithub size={22} />
            </a>
            <a 
              href="https://www.linkedin.com/in/santhiya-k-a15257365/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={22} />
            </a>
            <a 
              href="mailto:ksanthiya051@gmail.com"
              className="social-icon"
              aria-label="Email"
            >
              <FiMail size={22} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="visual-container">
            <div className="code-window">
              <div className="window-header">
                <div className="window-dots">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                </div>
                <span className="window-title">Portfolio.jsx</span>
              </div>
              <div className="code-content">
                <pre>
{`const developer = {
  name: "Santhiya",
  skills: ["React", "Node.js"],
  passion: "Building the web",
  status: "Open to opportunities"
};

export default developer;`}
                </pre>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="scroll-indicator">
        <motion.div
          className="scroll-arrow"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          ↓
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
