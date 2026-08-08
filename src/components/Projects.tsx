import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub, FiFilter } from 'react-icons/fi';
import { projects } from '../data/resumeData';
import './Projects.css';

const allCategories = ['All', ...new Set(projects.map(p => p.category))];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section className="projects section" id="projects">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">Open-source tools and frameworks I've built</p>
        </motion.div>

        {/* Filter */}
        <motion.div
          className="projects__filters"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <FiFilter className="projects__filter-icon" />
          {allCategories.map((cat) => (
            <button
              key={cat}
              className={`projects__filter-btn ${activeFilter === cat ? 'projects__filter-btn--active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div className="projects__grid" layout>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="projects__card"
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -8 }}
              >
                <div className="projects__card-header">
                  <span className="projects__card-category">{project.category}</span>
                  <div className="projects__card-links">
                    <a href="#" className="projects__card-link" aria-label="View code">
                      <FiGithub />
                    </a>
                    <a href="#" className="projects__card-link" aria-label="Live demo">
                      <FiExternalLink />
                    </a>
                  </div>
                </div>

                <h3 className="projects__card-title">{project.title}</h3>
                <p className="projects__card-description">{project.description}</p>

                <ul className="projects__card-highlights">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="projects__card-highlight">
                      <span className="projects__highlight-dot"></span>
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="projects__card-tech">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="projects__tech-tag">{tech}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
