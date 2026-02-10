import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FiArrowLeft, 
  FiGithub, 
  FiExternalLink, 
  FiCheckCircle,
  FiAlertCircle,
  FiZap,
  FiLayers
} from 'react-icons/fi';
import { projectsData } from '../data/projectsData';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === id);

  if (!project) {
    return (
      <div className="not-found">
        <div className="container">
          <h2>Project not found</h2>
          <Link to="/" className="back-link">
            <FiArrowLeft /> Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="project-detail">
      {/* Hero Section */}
      <section className="project-hero">
        <div className="container">
          <Link to="/" className="back-link">
            <FiArrowLeft /> Back to Portfolio
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="project-category-badge">{project.category}</span>
            <h1 className="project-detail-title">{project.title}</h1>
            <p className="project-detail-subtitle">{project.shortDescription}</p>

            <div className="project-meta">
              <div className="tech-stack">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-badge">{tech}</span>
                ))}
              </div>
              <div className="project-actions">
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-btn"
                  >
                    <FiGithub size={20} /> View Code
                  </a>
                )}
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-btn action-btn-primary"
                  >
                    <FiExternalLink size={20} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Image */}
      <section className="project-showcase">
        <div className="container">
          <motion.div 
            className="showcase-image"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img src={project.image} alt={project.title} />
          </motion.div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="project-overview">
        <div className="container">
          <div className="overview-grid">
            <motion.div
              className="overview-card problem-card"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="card-icon problem-icon">
                <FiAlertCircle size={28} />
              </div>
              <h3>The Problem</h3>
              <p>{project.problem}</p>
            </motion.div>

            <motion.div
              className="overview-card solution-card"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="card-icon solution-icon">
                <FiZap size={28} />
              </div>
              <h3>The Solution</h3>
              <p>{project.solution}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="project-features">
        <div className="container">
          <h2 className="section-heading">Key Features</h2>
          <motion.div 
            className="features-list"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {project.features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <FiCheckCircle className="feature-check" size={22} />
                <span>{feature}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Architecture */}
      {project.architecture && (
        <section className="project-architecture">
          <div className="container">
            <h2 className="section-heading">
              <FiLayers className="heading-icon" />
              System Architecture
            </h2>
            <motion.div 
              className="architecture-grid"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {Object.entries(project.architecture).map(([key, value], index) => (
                <div key={index} className="architecture-card">
                  <h4>{key.charAt(0).toUpperCase() + key.slice(1)}</h4>
                  <p>{value}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Challenges */}
      {project.challenges && (
        <section className="project-challenges">
          <div className="container">
            <h2 className="section-heading">Challenges & Solutions</h2>
            <div className="challenges-list">
              {project.challenges.map((challenge, index) => (
                <motion.div
                  key={index}
                  className="challenge-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="challenge-header">
                    <span className="challenge-number">Challenge {index + 1}</span>
                  </div>
                  <div className="challenge-content">
                    <div className="challenge-problem">
                      <h4>Problem</h4>
                      <p>{challenge.problem}</p>
                    </div>
                    <div className="challenge-solution">
                      <h4>Solution</h4>
                      <p>{challenge.solution}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Learnings */}
      {project.learnings && (
        <section className="project-learnings">
          <div className="container">
            <h2 className="section-heading">What I Learned</h2>
            <motion.div 
              className="learnings-grid"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {project.learnings.map((learning, index) => (
                <div key={index} className="learning-card">
                  <div className="learning-number">{index + 1}</div>
                  <p>{learning}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="project-cta">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Interested in this project?</h2>
            <p>Check out the code on GitHub or view more projects</p>
            <div className="cta-actions">
              {project.githubUrl && (
                <a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-btn cta-btn-primary"
                >
                  <FiGithub size={20} /> View on GitHub
                </a>
              )}
              <Link to="/#projects" className="cta-btn">
                View More Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
