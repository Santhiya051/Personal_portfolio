import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav 
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container navbar-content">
        <Link to="/" className="logo">
          <motion.span 
            className="logo-text"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            Santhiya
          </motion.span>
        </Link>

        <div className="nav-links desktop">
          <a onClick={() => scrollToSection('home')} className="nav-link">Home</a>
          <a onClick={() => scrollToSection('about')} className="nav-link">About</a>
          <a onClick={() => scrollToSection('skills')} className="nav-link">Skills</a>
          <a onClick={() => scrollToSection('projects')} className="nav-link">Projects</a>
          <a onClick={() => scrollToSection('contact')} className="nav-link">Contact</a>
        </div>

        <div className="nav-actions">
          <motion.button 
            className="theme-toggle"
            onClick={toggleTheme}
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.95 }}
          >
            {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
          </motion.button>

          <button 
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <a onClick={() => scrollToSection('home')} className="mobile-nav-link">Home</a>
            <a onClick={() => scrollToSection('about')} className="mobile-nav-link">About</a>
            <a onClick={() => scrollToSection('skills')} className="mobile-nav-link">Skills</a>
            <a onClick={() => scrollToSection('projects')} className="mobile-nav-link">Projects</a>
            <a onClick={() => scrollToSection('contact')} className="mobile-nav-link">Contact</a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
