import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiDownload } from 'react-icons/fi';
import { personalInfo } from '../data/resumeData';
import './Hero.css';

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const fullText = personalInfo.tagline;

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i <= fullText.length) {
        setTypedText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, [fullText]);

  const handleDownloadPDF = () => {
    import('../utils/pdfGenerator').then(mod => mod.generatePDF());
  };

  return (
    <section className="hero" id="hero">
      <div className="hero__container container">
        <motion.div
          className="hero__content"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.div
            className="hero__greeting"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <span className="hero__wave">👋</span>
            <span className="hero__greeting-text">Hello, I'm</span>
          </motion.div>

          <motion.h1
            className="hero__name"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {personalInfo.name}
          </motion.h1>

          <motion.h2
            className="hero__title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            {personalInfo.title}
          </motion.h2>

          <motion.p
            className="hero__tagline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
          >
            {typedText}
            <span className="hero__cursor">|</span>
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <a href="#contact" className="hero__btn hero__btn--primary">
              <FiMail /> Get in Touch
            </a>
            <button onClick={handleDownloadPDF} className="hero__btn hero__btn--secondary">
              <FiDownload /> Download CV
            </button>
          </motion.div>

          <motion.div
            className="hero__socials"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
          >
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hero__social-link" aria-label="GitHub">
              <FiGithub />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hero__social-link" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="hero__social-link" aria-label="Email">
              <FiMail />
            </a>
            <a href={`tel:${personalInfo.phone}`} className="hero__social-link" aria-label="Phone">
              <FiPhone />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__image-section"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="hero__avatar-wrapper">
            <div className="hero__avatar-glow"></div>
            <div className="hero__avatar">
              <img src="/profile-picture.jpg" alt="Profile" className="hero__avatar-img" />
            </div>
          </div>

          {/* Floating badges */}
          <motion.div
            className="hero__badge hero__badge--1"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            🧪 10+ Years QA
          </motion.div>
          <motion.div
            className="hero__badge hero__badge--2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          >
            🚀 95% Coverage
          </motion.div>
          <motion.div
            className="hero__badge hero__badge--3"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          >
            ⚡ CI/CD Expert
          </motion.div>
          <motion.div
            className="hero__badge hero__badge--4"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: 1.3 }}
          >
            🛠️ Automation Frameworks
          </motion.div>
          <motion.div
            className="hero__badge hero__badge--5"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut', delay: 1.6 }}
          >
            📊 Test Strategy
          </motion.div>
          <motion.div
            className="hero__badge hero__badge--6"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.9, repeat: Infinity, ease: 'easeInOut', delay: 1.9 }}
          >
            🤖 AI Workflow
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <a href="#about" className="hero__scroll-link">
          <span>Scroll Down</span>
          <motion.div
            className="hero__scroll-indicator"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <div className="hero__scroll-dot"></div>
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
