import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronRight, FiMapPin, FiCalendar } from 'react-icons/fi';
import { experiences } from '../data/resumeData';
import './Experience.css';

export default function Experience() {
  const [activeExp, setActiveExp] = useState(0);

  const exp = experiences[activeExp];

  return (
    <section className="experience section" id="experience">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">My professional journey in quality assurance</p>
        </motion.div>

        <div className="experience__layout">
          {/* Timeline sidebar */}
          <motion.div
            className="experience__timeline"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {experiences.map((item, i) => (
              <button
                key={item.id}
                className={`experience__timeline-item ${activeExp === i ? 'experience__timeline-item--active' : ''}`}
                onClick={() => setActiveExp(i)}
              >
                <div className="experience__timeline-dot"></div>
                <div className="experience__timeline-content">
                  <span className="experience__timeline-company">{item.company}</span>
                  <span className="experience__timeline-duration">{item.duration}</span>
                </div>
              </button>
            ))}
          </motion.div>

          {/* Detail panel */}
          <div className="experience__detail">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeExp}
                className="experience__detail-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="experience__detail-header">
                  <h3 className="experience__detail-role">{exp.role}</h3>
                  <h4 className="experience__detail-company">{exp.company}</h4>
                  <div className="experience__detail-meta">
                    <span className="experience__detail-meta-item">
                      <FiCalendar /> {exp.duration}
                    </span>
                    <span className="experience__detail-meta-item">
                      <FiMapPin /> {exp.location}
                    </span>
                  </div>
                </div>

                <p className="experience__detail-description">{exp.description}</p>

                <ul className="experience__detail-highlights">
                  {exp.highlights.map((h, i) => (
                    <motion.li
                      key={i}
                      className="experience__detail-highlight"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <FiChevronRight className="experience__highlight-icon" />
                      {h}
                    </motion.li>
                  ))}
                </ul>

                <div className="experience__detail-tech">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="experience__tech-tag">{tech}</span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
