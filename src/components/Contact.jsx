import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiSend, FiDownload } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Thank you for your message! This is a demo form.');
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <FiMail size={24} />,
      label: 'Email',
      value: 'ksanthiya051@gmail.com',
      link: 'mailto:ksanthiya051@gmail.com'
    },
    {
      icon: <FiGithub size={24} />,
      label: 'GitHub',
      value: 'github.com/Santhiya051',
      link: 'https://github.com/Santhiya051'
    },
    {
      icon: <FiLinkedin size={24} />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/santhiya-k-a15257365',
      link: 'https://www.linkedin.com/in/santhiya-k-a15257365/'
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Get In Touch</h2>
          <div className="divider"></div>
          <p className="section-description">
            I'm actively seeking internship and entry-level opportunities. Let's connect!
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info-section"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="contact-subtitle">Let's Talk</h3>
            <p className="contact-text">
              I'm always excited to discuss new opportunities, collaborate on projects, 
              or just chat about web development. Feel free to reach out through any of 
              these channels.
            </p>

            <div className="contact-methods">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-method"
                >
                  <div className="contact-icon">{item.icon}</div>
                  <div className="contact-details">
                    <span className="contact-label">{item.label}</span>
                    <span className="contact-value">{item.value}</span>
                  </div>
                </a>
              ))}
            </div>

            <div className="resume-download">
              <a href="/resume.pdf" download className="download-btn">
                <FiDownload size={20} />
                Download Resume
              </a>
            </div>
          </motion.div>

          <motion.div
            className="contact-form-section"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  placeholder="Your message..."
                  rows="6"
                  required
                />
              </div>

              <button type="submit" className="form-submit">
                Send Message
                <FiSend className="btn-icon" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
