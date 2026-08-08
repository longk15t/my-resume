import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import { personalInfo } from '../data/resumeData';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__brand">
            <span className="footer__logo">
              <span className="footer__logo-bracket">&lt;</span>
              Goldie
              <span className="footer__logo-slash">/</span>
              <span className="footer__logo-bracket">&gt;</span>
            </span>
            <p className="footer__tagline">Building quality, one test at a time.</p>
          </div>

          <div className="footer__socials">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="footer__social" aria-label="GitHub">
              <FiGithub />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="footer__social" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="footer__social" aria-label="Email">
              <FiMail />
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            Made with <FiHeart className="footer__heart" /> by Long (Goldie) Tran
          </p>
          <p className="footer__copyright">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
