import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import './ContactSection.css';
import { Mail, MapPin } from 'lucide-react';

const ContactSection: React.FC = () => {
  const { t } = useTranslation();

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { type: "spring", stiffness: 50, damping: 20 } 
    }
  };

  const mapVariants: Variants = {
    hidden: { opacity: 0, x: 30 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { type: "spring", stiffness: 50, damping: 20 } 
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          {t('contact.title', 'Visit Us')}
        </motion.h2>
        
        <motion.div 
          className="contact-wrapper"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div className="contact-info" variants={itemVariants}>
            <div className="contact-card">
              <h3>{t('contact.get_in_touch', 'Get in Touch')}</h3>
              <p>{t('contact.subtitle', 'We\'re here to answer any questions you have about our swimming programs.')}</p>
              
              <div className="contact-details">
                <motion.div className="contact-item" whileHover={{ x: 5, backgroundColor: 'rgba(14, 165, 233, 0.05)' }} style={{ padding: '10px', borderRadius: '12px', transition: 'background-color 0.3s' }}>
                  <div className="contact-icon">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4>{t('contact.location_title', 'Location')}</h4>
                    <p>Sunsuria Seventh Avenue, Seksyen U13, 12, Jln Setia Dagang AK U13/AK, Setia Alam, 40170 Shah Alam, Selangor</p>
                  </div>
                </motion.div>
                
                <motion.div className="contact-item" whileHover={{ x: 5, backgroundColor: 'rgba(37, 211, 102, 0.05)' }} style={{ padding: '10px', borderRadius: '12px', transition: 'background-color 0.3s' }}>
                  <div className="contact-icon" style={{ backgroundColor: 'rgba(37, 211, 102, 0.1)', color: '#25D366' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                  </div>
                  <div>
                    <h4>{t('contact.whatsapp_title', 'WhatsApp / Phone')}</h4>
                    <p><a href="https://wa.me/60173446365" target="_blank" rel="noopener noreferrer" className="contact-link">0173446365</a></p>
                  </div>
                </motion.div>
                
                <motion.div className="contact-item" whileHover={{ x: 5, backgroundColor: 'rgba(14, 165, 233, 0.05)' }} style={{ padding: '10px', borderRadius: '12px', transition: 'background-color 0.3s' }}>
                  <div className="contact-icon">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4>{t('contact.email_title', 'Email')}</h4>
                    <p><a href="mailto:info@lumbaloomba.com" className="contact-link">info@lumbaloomba.com</a></p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
          
          <motion.div className="contact-map" variants={mapVariants}>
            <div className="map-container">
              <iframe 
                src="https://maps.google.com/maps?q=LumbaLoomba+Swimming+Academy+Setia+Alam&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="LumbaLoomba Location"
              ></iframe>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
