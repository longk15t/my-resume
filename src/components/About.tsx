import { motion } from 'framer-motion';
import { FiMapPin, FiAward, FiBriefcase, FiCode } from 'react-icons/fi';
import { personalInfo, certifications, education } from '../data/resumeData';
import './About.css';

const stats = [
  { icon: <FiBriefcase />, value: '7+', label: 'Years Experience' },
  { icon: <FiCode />, value: '200+', label: 'Test Suites Built' },
  { icon: <FiAward />, value: '95%', label: 'Coverage Achieved' },
  { icon: <FiMapPin />, value: '4', label: 'Companies' },
];

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">A passion for quality that goes beyond finding bugs</p>
        </motion.div>

        <div className="about__grid">
          <motion.div
            className="about__text"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="about__description">{personalInfo.summary}</p>

            <div className="about__info">
              <div className="about__info-item">
                <FiMapPin className="about__info-icon" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            <div className="about__education">
              <h3 className="about__subtitle">
                <FiAward /> Education
              </h3>
              <div className="about__edu-card">
                <h4>{education.degree}</h4>
                <p>{education.university}</p>
                <span className="about__edu-meta">{education.year} • GPA: {education.gpa}</span>
              </div>
            </div>

            <div className="about__certs">
              <h3 className="about__subtitle">
                <FiAward /> Certifications
              </h3>
              <ul className="about__cert-list">
                {certifications.map((cert, i) => (
                  <motion.li
                    key={i}
                    className="about__cert-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <span className="about__cert-bullet">▹</span>
                    {cert}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="about__stats"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                className="about__stat-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="about__stat-icon">{stat.icon}</div>
                <div className="about__stat-value">{stat.value}</div>
                <div className="about__stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
