import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';
import { personalInfo } from '../data/resumeData';
import './Contact.css';

export default function Contact() {
  const contactMethods = [
    {
      icon: <FiMail />,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: 'var(--accent-primary)',
    },
    {
      icon: <FiPhone />,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      color: 'var(--emerald)',
    },
    {
      icon: <FiMapPin />,
      label: 'Location',
      value: personalInfo.location,
      href: '#',
      color: 'var(--cyan)',
    },
    {
      icon: <FiGithub />,
      label: 'GitHub',
      value: 'github.com/longk15t',
      href: personalInfo.github,
      color: 'var(--violet)',
    },
    {
      icon: <FiLinkedin />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/longk15t',
      href: personalInfo.linkedin,
      color: 'var(--cyan)',
    },
  ];

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">Let's discuss how I can help ensure quality in your next project</p>
        </motion.div>

        <div className="contact__grid">
          {/* Contact Methods */}
          <motion.div
            className="contact__methods"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="contact__methods-title">Contact Information</h3>
            <p className="contact__methods-subtitle">
              Feel free to reach out through any of these channels. I typically respond within 24 hours.
            </p>

            <div className="contact__methods-list">
              {contactMethods.map((method, i) => (
                <motion.a
                  key={method.label}
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="contact__method"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 8 }}
                >
                  <div className="contact__method-icon" style={{ color: method.color }}>
                    {method.icon}
                  </div>
                  <div className="contact__method-info">
                    <span className="contact__method-label">{method.label}</span>
                    <span className="contact__method-value">{method.value}</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            className="contact__form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="contact__form-title">Send a Message</h3>

            <div className="contact__form-group">
              <label htmlFor="contact-name" className="contact__label">Name</label>
              <input
                id="contact-name"
                type="text"
                className="contact__input"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div className="contact__form-group">
              <label htmlFor="contact-email" className="contact__label">Email</label>
              <input
                id="contact-email"
                type="email"
                className="contact__input"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div className="contact__form-group">
              <label htmlFor="contact-message" className="contact__label">Message</label>
              <textarea
                id="contact-message"
                className="contact__textarea"
                placeholder="Tell me about your project..."
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              ></textarea>
            </div>

            <motion.button
              type="submit"
              className={`contact__submit ${submitted ? 'contact__submit--success' : ''}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={submitted}
            >
              {submitted ? (
                <><span>✓</span> Message Sent!</>
              ) : (
                <><FiSend /> Send Message</>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
