import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import './HeroSection.css';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 15 }
    }
  };

  return (
    <section className="hero" id="home">
      <motion.div 
        className="hero-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      ></motion.div>
      <div className="container hero-content">
        <motion.div 
          className="hero-text"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <span className="hero-badge">{t('hero.badge', 'PRO SWIMMING SCHOOL IN SETIA ALAM')}</span>
          </motion.div>
          
          <motion.h1 className="hero-title" variants={itemVariants}>
            {t('hero.title1', 'Dive into Excellence at')} <br/> 
            <span className="highlight">{t('hero.title2', 'LumbaLoomba')}</span>
          </motion.h1>
          
          <motion.p className="hero-subtitle" variants={itemVariants}>
            {t('hero.subtitle', 'Master the water with our professional swimming academy. Whether you\'re a beginner or looking to perfect your strokes, we have the right program for you.')}
          </motion.p>
          
          <motion.div className="hero-actions" variants={itemVariants}>
            <motion.a 
              href="#contact" 
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('hero.cta_primary', 'Start Swimming')} <ArrowRight size={20} style={{ marginLeft: '8px' }} />
            </motion.a>
            <motion.a 
              href="#pricing" 
              className="btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('hero.cta_secondary', 'View Pricing')}
            </motion.a>
          </motion.div>
        </motion.div>
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
