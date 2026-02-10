import { motion } from 'framer-motion';
import { 
  FiCode, 
  FiServer, 
  FiDatabase, 
  FiTool,
  FiPackage 
} from 'react-icons/fi';
import { 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiGithub,
  SiVisualstudiocode,
  SiPostman,
  SiNpm
} from 'react-icons/si';
import { skillsData } from '../data/projectsData';
import './Skills.css';

const Skills = () => {
  const categories = [
    {
      title: 'Frontend',
      icon: <FiCode size={24} />,
      skills: skillsData.frontend,
      icons: [SiHtml5, SiCss3, SiJavascript, SiReact]
    },
    {
      title: 'Backend',
      icon: <FiServer size={24} />,
      skills: skillsData.backend,
      icons: [SiNodedotjs, SiExpress]
    },
    {
      title: 'Database',
      icon: <FiDatabase size={24} />,
      skills: skillsData.database,
      icons: [SiPostgresql, SiMysql]
    },
    {
      title: 'Tools & Others',
      icon: <FiTool size={24} />,
      skills: [...skillsData.tools, ...skillsData.other],
      icons: [SiGit, SiGithub, SiVisualstudiocode, SiPostman, SiNpm]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="divider"></div>
          <p className="section-description">
            A comprehensive overview of the technologies I work with
          </p>
        </motion.div>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              className="skill-category"
              variants={itemVariants}
            >
              <div className="category-header">
                <div className="category-icon">{category.icon}</div>
                <h3 className="category-title">{category.title}</h3>
              </div>

              <div className="category-icons">
                {category.icons.map((Icon, i) => (
                  <motion.div
                    key={i}
                    className="tech-icon"
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon size={28} />
                  </motion.div>
                ))}
              </div>

              <div className="skills-list">
                {category.skills.map((skill, i) => (
                  <div key={i} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="features-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="features-title">Key Features I've Implemented</h3>
          <div className="features-grid">
            <div className="feature-card">
              <FiPackage className="feature-icon" size={32} />
              <h4>Authentication Systems</h4>
              <p>JWT-based auth, bcrypt hashing, password recovery</p>
            </div>
            <div className="feature-card">
              <FiDatabase className="feature-icon" size={32} />
              <h4>Database Design</h4>
              <p>Normalized schemas, efficient queries, relationships</p>
            </div>
            <div className="feature-card">
              <FiServer className="feature-icon" size={32} />
              <h4>RESTful APIs</h4>
              <p>CRUD operations, middleware, error handling</p>
            </div>
            <div className="feature-card">
              <FiCode className="feature-icon" size={32} />
              <h4>File Operations</h4>
              <p>Upload validation, PDF generation, storage</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
