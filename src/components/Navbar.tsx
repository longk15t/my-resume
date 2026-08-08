import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import './Navbar.css';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

interface NavbarProps {
  theme?: 'light' | 'dark';
  toggleTheme?: () => void;
}

export default function Navbar({ theme = 'light', toggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section
      const sections = navLinks.map(l => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 200) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="navbar__container container">
        <a href="#" className="navbar__logo">
          <span className="navbar__logo-bracket">&lt;</span>
          <span className="navbar__logo-text">Goldie</span>
          <span className="navbar__logo-slash">/</span>
          <span className="navbar__logo-bracket">&gt;</span>
        </a>

        <div className={`navbar__links ${mobileOpen ? 'navbar__links--open' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`navbar__link ${activeSection === link.href.slice(1) ? 'navbar__link--active' : ''}`}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          {toggleTheme && (
            <button
              onClick={toggleTheme}
              className="navbar__theme-toggle"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
          )}
        </div>

        <button
          className="navbar__toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
    </motion.nav>
  );
}
