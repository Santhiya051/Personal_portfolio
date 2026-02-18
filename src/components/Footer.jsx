import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  const socialLinks = [
    { icon: <FiGithub size={22} />, url: 'https://github.com/Santhiya051', label: 'GitHub' },
    { icon: <FiLinkedin size={22} />, url: 'https://www.linkedin.com/in/santhiya-k-a15257365/', label: 'LinkedIn' },
    { icon: <FiMail size={22} />, url: 'mailto:ksanthiya051@gmail.com', label: 'Email' }
  ];

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-top">
          <motion.div 
            className="footer-brand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="footer-logo">Santhiya</h3>
            <p className="footer-tagline">Building the web, one component at a time.</p>
          </motion.div>

          <motion.div 
            className="footer-links"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="footer-heading">Quick Links</h4>
            <div className="footer-nav">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>
          </motion.div>

          <motion.div 
            className="footer-social"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="footer-heading">Connect</h4>
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {new Date().getFullYear()} Santhiya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
