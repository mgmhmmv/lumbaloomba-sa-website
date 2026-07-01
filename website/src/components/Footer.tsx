import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Footer.css';


const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/logo.jpg" alt="LumbaLoomba Swimming Academy" />
              <span>LumbaLoomba</span>
            </div>
            <p className="footer-desc">
              {t('footer.desc', 'Empowering swimmers of all ages to conquer the water with confidence, skill, and safety. Dive into excellence with us.')}
            </p>
            <div className="social-links">
              <a href="https://www.facebook.com/lumbaloomba/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="https://www.instagram.com/lumbaloomba/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://www.tiktok.com/@lumbaloomba" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5v3a3 3 0 0 1-3-3"></path></svg>
              </a>
            </div>
          </div>
          
          <div className="footer-links">
            <div className="link-group">
              <h4>{t('footer.quick_links', 'Quick Links')}</h4>
              <ul>
                <li><a href="/#home">{t('nav.home', 'Home')}</a></li>
                <li><a href="/#about">{t('nav.about', 'About Us')}</a></li>
                <li><a href="/#schedule">{t('nav.schedule', 'Programs & Schedule')}</a></li>
                <li><a href="/#reviews">{t('nav.reviews', 'Reviews')}</a></li>
              </ul>
            </div>
            
            <div className="link-group">
              <h4>{t('footer.legal', 'Legal')}</h4>
              <ul>
                <li><Link to="/privacy">{t('footer.privacy', 'Privacy Policy')}</Link></li>
                <li><Link to="/terms">{t('footer.terms', 'Terms of Service')}</Link></li>
                <li><Link to="/safety">{t('footer.safety', 'Safety Guidelines')}</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} LumbaLoomba Swimming Academy. {t('footer.rights', 'All rights reserved.')}</p>
        </div>
        
        <div className="footer-picad" style={{ textAlign: 'center', marginTop: '20px', fontSize: '0.85rem', color: 'var(--text-tertiary)', borderTop: '1px solid var(--surface-border)', paddingTop: '20px' }}>
          <p>{t('footer.picad', 'Template designed by PICAD and not endorsed by LumbaLoomba.')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
