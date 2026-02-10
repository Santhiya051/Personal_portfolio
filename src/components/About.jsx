import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiServer } from 'react-icons/fi';
import './About.css';

const About = () => {
  const highlights = [
    {
      icon: <FiCode size={28} />,
      title: 'Frontend Development',
      description: 'Building responsive UIs with React'
    },
    {
      icon: <FiServer size={28} />,
      title: 'Backend Development',
      description: 'Creating robust APIs with Node.js'
    },
    {
      icon: <FiDatabase size={28} />,
      title: 'Database Design',
      description: 'Architecting efficient data models'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
          <div className="divider"></div>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="about-intro">
              My journey into web development began with a curiosity about how websites work. 
              What started with simple HTML and CSS quickly evolved into a deep passion for 
              building complete web applications.
            </p>

            <p>
              I've progressed from understanding the fundamentals of JavaScript to mastering 
              modern frameworks like <strong>React</strong>, and from basic server concepts to 
              building full-featured backend systems with <strong>Node.js</strong> and 
              <strong> Express</strong>. Along the way, I've developed a strong foundation in 
              database design using <strong>PostgreSQL</strong> and <strong>MySQL</strong>.
            </p>

            <p>
              What drives me is the challenge of solving real-world problems through code. 
              Whether it's automating a complex scheduling system, implementing secure 
              authentication, or building an intuitive user interface, I'm passionate about 
              creating solutions that make a difference.
            </p>

            <p>
              I've built several projects that showcase my ability to work across the full stack, 
              from designing databases and APIs to creating responsive frontends. Each project 
              has taught me something new about software architecture, user experience, and 
              the importance of writing clean, maintainable code.
            </p>

            <p className="about-goal">
              <strong>My Goal:</strong> I'm actively seeking internship and entry-level 
              developer opportunities where I can contribute my skills, learn from experienced 
              developers, and grow as a professional software engineer.
            </p>
          </motion.div>

          <motion.div
            className="about-highlights"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                className="highlight-card"
                whileHover={{ y: -5, boxShadow: "var(--shadow-md)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="highlight-icon">{item.icon}</div>
                <h4 className="highlight-title">{item.title}</h4>
                <p className="highlight-description">{item.description}</p>
              </motion.div>
            ))}

            <div className="stats-container">
              <div className="stat">
                <h3 className="stat-number">10+</h3>
                <p className="stat-label">Technologies</p>
              </div>
              <div className="stat">
                <h3 className="stat-number">5+</h3>
                <p className="stat-label">Projects Built</p>
              </div>
              <div className="stat">
                <h3 className="stat-number">100%</h3>
                <p className="stat-label">Dedication</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
