import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills, tools } from '../data/resumeData';
import './Skills.css';

const categories = [...new Set(skills.map(s => s.category))];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const filteredSkills = skills.filter(s => s.category === activeCategory);

  return (
    <section className="skills section" id="skills">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Skills & Tools</h2>
          <p className="section-subtitle">Technologies and tools I use to deliver quality</p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="skills__tabs"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              className={`skills__tab ${activeCategory === cat ? 'skills__tab--active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Skills Bars */}
        <div className="skills__bars">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              className="skills__bars-grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {filteredSkills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  className={`skills__bar-item ${hoveredSkill === skill.name ? 'skills__bar-item--hovered' : ''}`}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <div className="skills__bar-header">
                    <span className="skills__bar-name">{skill.name}</span>
                    <span className="skills__bar-level">{skill.level}%</span>
                  </div>
                  <div className="skills__bar-track">
                    <motion.div
                      className="skills__bar-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.1, ease: 'easeOut' }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Tools Grid */}
        <motion.div
          className="skills__tools-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="skills__tools-title">Tools & Platforms</h3>
          <div className="skills__tools-grid">
            {tools.map((tool, i) => (
              <motion.div
                key={tool.name}
                className="skills__tool-card"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                whileHover={{ scale: 1.08, y: -4 }}
              >
                <span className="skills__tool-icon">{tool.icon}</span>
                <span className="skills__tool-name">{tool.name}</span>
                <span className="skills__tool-category">{tool.category}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
