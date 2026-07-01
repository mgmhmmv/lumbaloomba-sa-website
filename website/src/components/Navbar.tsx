import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';
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

  const closeMenu = () => setMobileMenuOpen(false);

  const menuVariants: Variants = {
    closed: {
      opacity: 0,
      clipPath: "circle(0px at calc(100% - 40px) 40px)",
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
    },
    open: {
      opacity: 1,
      clipPath: "circle(150vh at calc(100% - 40px) 40px)",
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1], staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    closed: { opacity: 0, y: 30 },
    open: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 20 } }
  };

  return (
    <nav className={`navbar ${scrolled || !isHome ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          <img src="/logo.jpg" alt="LumbaLoomba Swimming Academy" />
          <span className="nav-brand">LumbaLoomba</span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="nav-links desktop-only">
          <a href="/#about">{t('nav.about', 'About')}</a>
          <a href="/#pricing">{t('nav.pricing', 'Pricing')}</a>
          <Link to="/team">{t('nav.team', 'The Team')}</Link>
          <a href="/#reviews">{t('nav.reviews', 'Reviews')}</a>
          <a href="/#social">{t('nav.community', 'Community')}</a>
          <a href="/#contact" className="nav-contact">{t('nav.contact', 'Contact')}</a>
          <a href="/#register" className="nav-cta">{t('nav.register', 'Register')}</a>
          
          <button onClick={toggleLanguage} className="lang-switcher">
            {i18n.language === 'en' ? 'BM' : 'EN'}
          </button>
        </div>

        {/* Mobile Menu Button */}
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

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              className="mobile-menu-overlay"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              <div className="mobile-menu-content">
                <motion.a variants={itemVariants} href="/#about" onClick={closeMenu}>{t('nav.about', 'About')}</motion.a>
                <motion.a variants={itemVariants} href="/#pricing" onClick={closeMenu}>{t('nav.pricing', 'Pricing')}</motion.a>
                <motion.div variants={itemVariants}>
                  <Link to="/team" onClick={closeMenu} style={{ textDecoration: 'none' }}>{t('nav.team', 'The Team')}</Link>
                </motion.div>
                <motion.a variants={itemVariants} href="/#reviews" onClick={closeMenu}>{t('nav.reviews', 'Reviews')}</motion.a>
                <motion.a variants={itemVariants} href="/#social" onClick={closeMenu}>{t('nav.community', 'Community')}</motion.a>
                <motion.a variants={itemVariants} href="/#contact" onClick={closeMenu}>{t('nav.contact', 'Contact')}</motion.a>
                <motion.a variants={itemVariants} href="/#register" onClick={closeMenu} className="nav-cta">{t('nav.register', 'Register')}</motion.a>
                
                <motion.div variants={itemVariants}>
                  <button onClick={toggleLanguage} className="lang-switcher mobile-lang">
                    {i18n.language === 'en' ? 'Switch to BM' : 'Switch to EN'}
                  </button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
