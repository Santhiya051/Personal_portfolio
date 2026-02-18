import { motion } from 'framer-motion';
import { FiBriefcase } from 'react-icons/fi';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      company: 'Hoood Private Limited',
      role: 'Frontend Developer',
      duration: 'Feb 2026 – Present',
      description: 'Leading frontend development utilizing React, JavaScript, HTML, and CSS to create responsive and user-friendly interfaces. Collaborating with cross-functional teams to implement new features, optimize performance, and enhance user experience. Contributing to the design and architecture of the frontend codebase while adhering to best practices in web development.'
    },
    {
      company: 'Immortal Future Infotech India Private Limited',
      role: 'Full-Stack Developer Intern',
      duration: 'Jun 2025 – August 2025',
      description: 'Developed and integrated key modules for a real-time Employee Management System using React, JavaScript, HTML, and CSS, with seamless backend API integration. Implemented production-ready features including CSV export, email notifications, and form validations, strengthening expertise in full-stack development, API handling, and React state management.'
    },
    {
      company: 'Inspire Softech Solutions',
      role: 'Web Development Intern',
      duration: 'Dec 2024 – Jan 2025',
      description: 'Contributed to frontend development of client websites using HTML, CSS, and JavaScript. Assisted in building responsive layouts and implementing interactive features. Collaborated with senior developers to learn best practices in web design and development.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Experience Timeline</h2>
          <div className="divider"></div>
          <p className="section-description">
            My journey in web development and software engineering
          </p>
        </motion.div>

        <motion.div
          className="timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              variants={itemVariants}
            >
              <div className="timeline-marker">
                <div className="timeline-icon">
                  <FiBriefcase size={20} />
                </div>
                {index < experiences.length - 1 && <div className="timeline-line"></div>}
              </div>

              <motion.div
                className="timeline-content"
                whileHover={{ y: -5, boxShadow: "var(--shadow-lg)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-company">{exp.company}</h3>
                    <h4 className="timeline-role">{exp.role}</h4>
                  </div>
                  <span className="timeline-duration">{exp.duration}</span>
                </div>
                <p className="timeline-description">{exp.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;