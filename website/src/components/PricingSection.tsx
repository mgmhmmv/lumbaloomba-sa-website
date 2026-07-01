import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Check } from 'lucide-react';
import './PricingSection.css';

const PricingSection: React.FC = () => {
  const { t } = useTranslation();

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 50, damping: 20 } 
    }
  };

  return (
    <section id="pricing" className="pricing-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2>{t('pricing.title_start', 'Investment in')} <span className="highlight">{t('pricing.title_highlight', 'Safety')}</span></h2>
          <p>{t('pricing.subtitle', 'Transparent fee structures designed for every swimmer\'s journey. Choose the plan that fits your goals.')}</p>
        </motion.div>

        <motion.div 
          className="pricing-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Kids Plan */}
          <motion.div className="pricing-card" variants={cardVariants} whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
            <div className="pricing-header">
              <h3>{t('pricing.plan_kids_title', 'Kids & Toddlers')}</h3>
              <p>{t('pricing.plan_kids_desc', 'Perfect for building early water confidence and basic strokes.')}</p>
            </div>
            <div className="pricing-price">
              <span className="currency">RM</span>
              <span className="amount">150</span>
              <span className="period">{t('pricing.month', '/ month')}</span>
            </div>
            <ul className="pricing-features">
              <li><Check className="feature-icon" /> {t('pricing.feat_sessions', '4 sessions per month')}</li>
              <li><Check className="feature-icon" /> {t('pricing.feat_small_group', 'Small group focus (max 5)')}</li>
              <li><Check className="feature-icon" /> {t('pricing.feat_progress', 'Progress tracking booklet')}</li>
              <li><Check className="feature-icon" /> {t('pricing.feat_certificate', 'Certificate upon level completion')}</li>
            </ul>
            <a href="#register" className="pricing-cta secondary">{t('pricing.cta_enroll', 'Enroll Now')}</a>
          </motion.div>

          {/* Adults Plan */}
          <motion.div className="pricing-card popular" variants={cardVariants} whileHover={{ y: -15, scale: 1.02, boxShadow: '0 25px 50px rgba(0, 119, 182, 0.15)' }}>
            <div className="popular-badge">{t('pricing.most_popular', 'Most Popular')}</div>
            <div className="pricing-header">
              <h3>{t('pricing.plan_adults_title', 'Adult Classes')}</h3>
              <p>{t('pricing.plan_adults_desc', 'Overcome fear and master swimming at your own pace.')}</p>
            </div>
            <div className="pricing-price">
              <span className="currency">RM</span>
              <span className="amount">200</span>
              <span className="period">{t('pricing.month', '/ month')}</span>
            </div>
            <ul className="pricing-features">
              <li><Check className="feature-icon" /> {t('pricing.feat_sessions', '4 sessions per month')}</li>
              <li><Check className="feature-icon" /> {t('pricing.feat_breath', 'Breath control techniques')}</li>
              <li><Check className="feature-icon" /> {t('pricing.feat_stroke', 'Stroke correction & stamina')}</li>
              <li><Check className="feature-icon" /> {t('pricing.feat_flexible', 'Flexible evening schedules')}</li>
            </ul>
            <a href="#register" className="pricing-cta primary">{t('pricing.cta_enroll', 'Enroll Now')}</a>
          </motion.div>

          {/* Private / Special Needs */}
          <motion.div className="pricing-card" variants={cardVariants} whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
            <div className="pricing-header">
              <h3>{t('pricing.plan_special_title', 'Private / Therapy')}</h3>
              <p>{t('pricing.plan_special_desc', '1-on-1 personalized attention for rapid progress or special needs.')}</p>
            </div>
            <div className="pricing-price">
              <span className="currency">RM</span>
              <span className="amount">350</span>
              <span className="period">{t('pricing.month', '/ month')}</span>
            </div>
            <ul className="pricing-features">
              <li><Check className="feature-icon" /> {t('pricing.feat_sessions', '4 sessions per month')}</li>
              <li><Check className="feature-icon" /> {t('pricing.feat_exclusive', 'Exclusive 1-on-1 coaching')}</li>
              <li><Check className="feature-icon" /> {t('pricing.feat_customized', 'Customized lesson plans')}</li>
              <li><Check className="feature-icon" /> {t('pricing.feat_therapy', 'Specialized therapy techniques')}</li>
            </ul>
            <a href="#register" className="pricing-cta secondary">{t('pricing.cta_contact', 'Contact Coach')}</a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="pricing-note"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <p>{t('pricing.note', '* One-time registration fee of RM 50 applies for all new enrollments. Family discounts available.')}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
