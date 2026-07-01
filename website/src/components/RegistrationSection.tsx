import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import './RegistrationSection.css';
import { Send } from 'lucide-react';

const RegistrationSection: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    age: '',
    phone: '',
    program: 'Toddlers (2-4 yrs)'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(t('register.alert_success', 'Thank you for registering! We will contact you via WhatsApp shortly.'));
    setFormData({
      parentName: '',
      childName: '',
      age: '',
      phone: '',
      program: 'Toddlers (2-4 yrs)'
    });
  };

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { type: "spring", stiffness: 50, damping: 20 } 
    }
  };

  const formVariants: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { type: "spring", stiffness: 50, damping: 20 } 
    }
  };

  return (
    <section className="registration-section" id="register">
      <div className="container">
        <motion.div 
          className="registration-wrapper"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div className="registration-content" variants={textVariants}>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '20px' }}>{t('register.title', 'Join the Academy')}</h2>
            <p className="registration-desc">
              {t('register.description', 'Ready to dive in? Register your interest today and our team will get in touch with you to finalize your enrollment and schedule.')}
            </p>
            <ul className="registration-benefits">
              <li>🏊‍♂️ {t('register.benefit1', 'Expert-led coaching for all levels')}</li>
              <li>🛡️ {t('register.benefit2', 'Safe, indoor facilities')}</li>
              <li>🏆 {t('register.benefit3', 'Proven progression methodology')}</li>
            </ul>
          </motion.div>
          
          <motion.div className="registration-form-container" variants={formVariants}>
            <form className="registration-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="parentName">{t('register.parent_name', "Parent's Name")}</label>
                <input 
                  type="text" 
                  id="parentName" 
                  name="parentName" 
                  required 
                  placeholder={t('register.parent_placeholder', 'e.g. Ahmad Faizal')}
                  value={formData.parentName}
                  onChange={handleChange}
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="childName">{t('register.child_name', "Student's Name")}</label>
                  <input 
                    type="text" 
                    id="childName" 
                    name="childName" 
                    required 
                    placeholder={t('register.child_placeholder', 'e.g. Danish')}
                    value={formData.childName}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="age">{t('register.age', 'Age')}</label>
                  <input 
                    type="number" 
                    id="age" 
                    name="age" 
                    required 
                    min="2" 
                    max="99" 
                    placeholder={t('register.age_placeholder', 'e.g. 6')}
                    value={formData.age}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="phone">{t('register.phone_label', 'Phone Number (WhatsApp)')}</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  required 
                  placeholder={t('register.phone_placeholder', 'e.g. 0123456789')}
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="program">{t('register.program_label', 'Preferred Program')}</label>
                <select id="program" name="program" value={formData.program} onChange={handleChange}>
                  <option value="Toddlers (2-4 yrs)">{t('info.prog_1', 'Toddlers (2-4 yrs)')}</option>
                  <option value="Kids (5-12 yrs)">{t('info.prog_2', 'Kids (5-12 yrs)')}</option>
                  <option value="Teens & Adults">{t('info.prog_3', 'Teens & Adults')}</option>
                  <option value="Special Needs Therapy">{t('register.prog_special', 'Special Needs Therapy')}</option>
                  <option value="Competitive Training">{t('info.prog_4', 'Competitive Training')}</option>
                  <option value="Private Coaching">{t('info.prog_5', 'Private Coaching')}</option>
                </select>
              </div>

              <motion.button 
                type="submit" 
                className="btn-primary form-submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('register.submit', 'Submit Registration')} <Send size={18} style={{ marginLeft: '8px' }} />
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default RegistrationSection;
