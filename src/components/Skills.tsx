import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { skills, tools } from '../data/resumeData';
import './Skills.css';

const categoryOrder = ['All', 'Test Automation', 'Programming', 'API & Performance', 'CI/CD & DevOps'];

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const tabs = useMemo(() => categoryOrder.filter((category) => category === 'All' || skills.some((skill) => skill.category === category)), []);

  const visibleSkills = useMemo(() => {
    const filtered = skills.filter((skill) => activeCategory === 'All' || skill.category === activeCategory);

    return [...filtered].sort((a, b) => {
      const categoryIndex = (category: string) => categoryOrder.indexOf(category);
      const categoryDiff = categoryIndex(a.category) - categoryIndex(b.category);

      if (categoryDiff !== 0) {
        return categoryDiff;
      }

      return (b.level ?? 0) - (a.level ?? 0);
    });
  }, [activeCategory]);

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

        {/* Skills Tabs */}
        <motion.div
          className="skills__tabs"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          {tabs.map((category) => (
            <button
              key={category}
              type="button"
              className={`skills__tab ${activeCategory === category ? 'skills__tab--active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Skills Chips */}
        <motion.div
          className="skills__chips"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          <div className="skills__chips-grid">
            {visibleSkills.map((skill, i) => (
              <motion.div
                key={skill.name}
                className={`skills__chip ${hoveredSkill === skill.name ? 'skills__chip--hovered' : ''}`}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.03 }}
              >
                <span className="skills__chip-name">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

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
