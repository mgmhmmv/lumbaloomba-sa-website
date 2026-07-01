import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import './InfoSection.css';
import { Clock, Calendar, AlertCircle } from 'lucide-react';

const InfoSection: React.FC = () => {
  const { t } = useTranslation();

  const schedule = [
    { day: t('info.schedule_days', 'Tuesday - Sunday'), time: t('info.schedule_time', '10:00 AM - 7:00 PM') },
    { day: t('info.schedule_closed_day', 'Monday'), time: t('info.schedule_closed', 'Closed') }
  ];

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 60, damping: 15 } 
    }
  };

  return (
    <section className="info-section" id="schedule">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          {t('info.title', 'Schedule & Info')}
        </motion.h2>
        
        <motion.div 
          className="info-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div className="info-card" variants={cardVariants} whileHover={{ y: -8, boxShadow: '0 15px 30px rgba(0,0,0,0.1)' }}>
            <div className="card-icon-wrapper">
              <Clock className="card-icon" />
            </div>
            <h3>{t('info.hours_title', 'Operating Hours')}</h3>
            <p className="card-desc">{t('info.hours_desc', 'Join us during our regular business hours for lessons and free swim sessions.')}</p>
            
            <ul className="schedule-list">
              {schedule.map((item, index) => (
                <li key={index} className={item.day === t('info.schedule_closed_day', 'Monday') ? 'closed' : ''}>
                  <span className="day">{item.day}</span>
                  <span className="time">{item.time}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div className="info-card" variants={cardVariants} whileHover={{ y: -8, boxShadow: '0 15px 30px rgba(0,0,0,0.1)' }}>
            <div className="card-icon-wrapper">
              <Calendar className="card-icon" />
            </div>
            <h3>{t('info.programs_title', 'Programs & Classes')}</h3>
            <p className="card-desc">{t('info.programs_desc', 'We offer tailored swimming programs for all age groups and skill levels.')}</p>
            <div className="programs-list">
              <span className="program-tag">{t('info.prog_1', 'Toddlers (2-4 yrs)')}</span>
              <span className="program-tag">{t('info.prog_2', 'Kids (5-12 yrs)')}</span>
              <span className="program-tag">{t('info.prog_3', 'Teens & Adults')}</span>
              <span className="program-tag">{t('info.prog_4', 'Competitive')}</span>
              <span className="program-tag">{t('info.prog_5', 'Private Coaching')}</span>
            </div>
          </motion.div>

          <motion.div className="info-card highlight-card" variants={cardVariants} whileHover={{ y: -8, boxShadow: '0 15px 30px rgba(0,0,0,0.1)' }}>
            <div className="card-icon-wrapper">
              <AlertCircle className="card-icon" />
            </div>
            <h3>{t('info.why_choose_us', 'Why Choose Us?')}</h3>
            <ul className="benefits-list">
              <li>{t('info.benefit_1', 'Certified Professional Instructors')}</li>
              <li>{t('info.benefit_2', 'State-of-the-Art Swimming Facilities')}</li>
              <li>{t('info.benefit_3', 'Small Class Sizes for Personal Attention')}</li>
              <li>{t('info.benefit_4', 'Proven Progression Methodology')}</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default InfoSection;
