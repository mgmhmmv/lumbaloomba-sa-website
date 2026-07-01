import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Navbar.css';

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ms' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className={`navbar ${scrolled || !isHome ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="nav-logo">
          <img src="/logo.jpg" alt="LumbaLoomba Swimming Academy" />
          <span className="nav-brand">LumbaLoomba</span>
        </Link>
        
        <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <a href="/#about" onClick={() => setMobileMenuOpen(false)}>{t('nav.about')}</a>
          <a href="/#schedule" onClick={() => setMobileMenuOpen(false)}>{t('nav.schedule')}</a>
          <a href="/#pricing" onClick={() => setMobileMenuOpen(false)}>{t('nav.pricing')}</a>
          <a href="/#reviews" onClick={() => setMobileMenuOpen(false)}>{t('nav.reviews')}</a>
          <a href="/#social" onClick={() => setMobileMenuOpen(false)}>{t('nav.community')}</a>
          <a href="/#contact" onClick={() => setMobileMenuOpen(false)} className="nav-contact">{t('nav.contact')}</a>
          <a href="/#register" onClick={() => setMobileMenuOpen(false)} className="nav-cta">{t('nav.register')}</a>
          
          <button onClick={toggleLanguage} className="lang-switcher">
            {i18n.language === 'en' ? 'BM' : 'EN'}
          </button>
        </div>

        <button 
          className="mobile-menu-btn" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation"
        >
          <div className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
