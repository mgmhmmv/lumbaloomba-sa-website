import React from 'react';
import './HeroSection.css';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <div className="hero-text animate-fade-in">
          <span className="hero-badge">Professional Swimming School in Setia Alam</span>
          <h1 className="hero-title">Dive into Excellence at <br/> <span className="highlight">LumbaLoomba</span></h1>
          <p className="hero-subtitle">
            Master the water with our professional swimming academy. Whether you're a beginner or looking to perfect your strokes, we have the right program for you.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn-primary">
              Start Swimming <ArrowRight size={20} style={{ marginLeft: '8px' }} />
            </a>
            <a href="#schedule" className="btn-secondary">View Schedule</a>
          </div>
        </div>
      </div>
      <div className="wave-divider">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
