import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiSend, FiDownload } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (formStatus.error) {
      setFormStatus(prev => ({ ...prev, error: null }));
    }
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      return 'Please enter your name';
    }
    if (!formData.email.trim()) {
      return 'Please enter your email';
    }
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return 'Please enter a valid email address';
    }
    if (!formData.message.trim()) {
      return 'Please enter a message';
    }
    if (formData.message.trim().length < 10) {
      return 'Message must be at least 10 characters long';
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    const validationError = validateForm();
    if (validationError) {
      setFormStatus({
        submitting: false,
        submitted: false,
        error: validationError
      });
      return;
    }

    // Set submitting state
    setFormStatus({
      submitting: true,
      submitted: false,
      error: null
    });

    try {
      // EmailJS Configuration
      // Replace these with your actual EmailJS credentials
      const serviceID = 'service_trj4oti';      // Get from EmailJS dashboard
      const templateID = 'template_jx8d0ge';    // Get from EmailJS dashboard
      const publicKey = 'xbDA8mrC5QCcEeX9e';      // Get from EmailJS dashboard

      // Template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'ksanthiya051@gmail.com',       // Your email address
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        serviceID,
        templateID,
        templateParams,
        publicKey
      );

      console.log('Email sent successfully:', response);

      // Set success state
      setFormStatus({
        submitting: false,
        submitted: true,
        error: null
      });

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setFormStatus({
          submitting: false,
          submitted: false,
          error: null
        });
      }, 3000);

    } catch (error) {
      setFormStatus({
        submitting: false,
        submitted: false,
        error: 'Failed to send message. Please try again or email directly.'
      });
    }
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
                  disabled={formStatus.submitting || formStatus.submitted}
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
                  disabled={formStatus.submitting || formStatus.submitted}
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
                  disabled={formStatus.submitting || formStatus.submitted}
                  required
                />
              </div>

              {formStatus.error && (
                <div className="form-error">
                  {formStatus.error}
                </div>
              )}

              {formStatus.submitted && (
                <div className="form-success">
                  ✓ Message sent successfully! Thank you for reaching out.
                </div>
              )}

              <button 
                type="submit" 
                className="form-submit"
                disabled={formStatus.submitting || formStatus.submitted}
              >
                {formStatus.submitting ? 'Sending...' : formStatus.submitted ? 'Sent!' : 'Send Message'}
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
