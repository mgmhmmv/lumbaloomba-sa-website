import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './LegalPage.css';

interface LegalPageProps {
  type: 'privacy' | 'terms' | 'safety';
}

const LegalPage: React.FC<LegalPageProps> = ({ type }) => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [type]);

  const getContent = () => {
    switch (type) {
      case 'privacy':
        return {
          title: t('legal.privacy_title', 'Privacy Policy'),
          lastUpdated: t('legal.privacy_date', 'July 1, 2026'),
          content: (
            <>
              <h3>1. {t('legal.priv_h1', 'Information We Collect')}</h3>
              <p>{t('legal.priv_p1', 'At LumbaLoomba Swimming Academy, we collect personal information you provide directly to us, such as your name, contact details, and student information during registration. We also collect automated information when you interact with our website to improve user experience.')}</p>
              
              <h3>2. {t('legal.priv_h2', 'How We Use Your Information')}</h3>
              <p>{t('legal.priv_p2', 'The information we collect is used solely for the purpose of managing class schedules, communicating updates, processing registrations, and ensuring a safe environment for all our students. We do not sell your personal data to third parties.')}</p>
              
              <h3>3. {t('legal.priv_h3', 'Data Security')}</h3>
              <p>{t('legal.priv_p3', 'We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, or disclosure. However, no internet transmission is completely secure, and we cannot guarantee absolute security.')}</p>
              
              <h3>4. {t('legal.priv_h4', 'Contact Us')}</h3>
              <p>{t('legal.priv_p4', 'If you have questions about this Privacy Policy, please contact us via our official WhatsApp support line provided on the homepage.')}</p>
            </>
          )
        };
      case 'terms':
        return {
          title: t('legal.terms_title', 'Terms of Service'),
          lastUpdated: t('legal.terms_date', 'July 1, 2026'),
          content: (
            <>
              <h3>1. {t('legal.terms_h1', 'Acceptance of Terms')}</h3>
              <p>{t('legal.terms_p1', 'By accessing and using the LumbaLoomba Swimming Academy website and services, you accept and agree to be bound by the terms and provisions of this agreement.')}</p>
              
              <h3>2. {t('legal.terms_h2', 'Registration and Payment')}</h3>
              <p>{t('legal.terms_p2', 'All students must be formally registered prior to attending classes. Class slots are subject to availability and payment confirmation. Fees are non-refundable unless stated otherwise in specific promotional terms.')}</p>
              
              <h3>3. {t('legal.terms_h3', 'Cancellation Policy')}</h3>
              <p>{t('legal.terms_p3', 'If a student is unable to attend a scheduled class, a minimum of 24 hours notice must be given to arrange a makeup session. Missed classes without prior notice are generally forfeited.')}</p>
              
              <h3>4. {t('legal.terms_h4', 'Modifications')}</h3>
              <p>{t('legal.terms_p4', 'LumbaLoomba Swimming Academy reserves the right to revise these terms of service at any time without notice. By using this website, you agree to be bound by the current version of these Terms.')}</p>
            </>
          )
        };
      case 'safety':
        return {
          title: t('legal.safety_title', 'Safety Guidelines'),
          lastUpdated: t('legal.safety_date', 'July 1, 2026'),
          content: (
            <>
              <h3>1. {t('legal.safe_h1', 'General Pool Rules')}</h3>
              <p>{t('legal.safe_p1', 'Safety is our top priority. Running, diving in shallow areas, and horseplay are strictly prohibited around the pool deck. All students must wait for their instructor before entering the water.')}</p>
              
              <h3>2. {t('legal.safe_h2', 'Health and Hygiene')}</h3>
              <p>{t('legal.safe_p2', 'Students must shower before entering the pool. Proper swimming attire and caps are required. Individuals feeling unwell or experiencing contagious conditions should not attend class.')}</p>
              
              <h3>3. {t('legal.safe_h3', 'Supervision')}</h3>
              <p>{t('legal.safe_p3', 'Parents or guardians of children under 12 must remain on the premises during the lesson. While our instructors are highly trained in water safety, parents share the responsibility of monitoring their children before and after class.')}</p>
              
              <h3>4. {t('legal.safe_h4', 'Emergency Procedures')}</h3>
              <p>{t('legal.safe_p4', 'In the rare event of an emergency, please follow the immediate instructions of our coaching staff. All our instructors are trained in first aid and CPR.')}</p>
            </>
          )
        };
    }
  };

  const data = getContent();

  return (
    <div className="legal-page">
      <div className="legal-hero">
        <div className="container">
          <h1>{data.title}</h1>
          <p>{t('legal.last_updated', 'Last updated:')} {data.lastUpdated}</p>
        </div>
      </div>
      <div className="container">
        <div className="legal-content">
          {data.content}
        </div>
      </div>
    </div>
  );
};

export default LegalPage;
