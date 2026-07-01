import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#" className="nav-logo">
          <img src="/logo.jpg" alt="LumbaLoomba Swimming Academy" />
          <span className="nav-brand">LumbaLoomba</span>
        </a>
        
        <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <a href="/#about" onClick={() => setMobileMenuOpen(false)}>About</a>
          <a href="/#schedule" onClick={() => setMobileMenuOpen(false)}>Schedule</a>
          <a href="/#reviews" onClick={() => setMobileMenuOpen(false)}>Reviews</a>
          <a href="/#social" onClick={() => setMobileMenuOpen(false)}>Community</a>
          <a href="/#contact" onClick={() => setMobileMenuOpen(false)} className="nav-contact">Contact</a>
          <a href="/#register" onClick={() => setMobileMenuOpen(false)} className="nav-cta">Register Now</a>
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
