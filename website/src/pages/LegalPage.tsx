import React, { useEffect } from 'react';
import './LegalPage.css';

interface LegalPageProps {
  type: 'privacy' | 'terms' | 'safety';
}

const LegalPage: React.FC<LegalPageProps> = ({ type }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [type]);

  const getContent = () => {
    switch (type) {
      case 'privacy':
        return {
          title: 'Privacy Policy',
          lastUpdated: 'July 1, 2026',
          content: (
            <>
              <h3>1. Information We Collect</h3>
              <p>At LumbaLoomba Swimming Academy, we collect personal information you provide directly to us, such as your name, contact details, and student information during registration. We also collect automated information when you interact with our website to improve user experience.</p>
              
              <h3>2. How We Use Your Information</h3>
              <p>The information we collect is used solely for the purpose of managing class schedules, communicating updates, processing registrations, and ensuring a safe environment for all our students. We do not sell your personal data to third parties.</p>
              
              <h3>3. Data Security</h3>
              <p>We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, or disclosure. However, no internet transmission is completely secure, and we cannot guarantee absolute security.</p>
              
              <h3>4. Contact Us</h3>
              <p>If you have questions about this Privacy Policy, please contact us via our official WhatsApp support line provided on the homepage.</p>
            </>
          )
        };
      case 'terms':
        return {
          title: 'Terms of Service',
          lastUpdated: 'July 1, 2026',
          content: (
            <>
              <h3>1. Acceptance of Terms</h3>
              <p>By accessing and using the LumbaLoomba Swimming Academy website and services, you accept and agree to be bound by the terms and provisions of this agreement.</p>
              
              <h3>2. Registration and Payment</h3>
              <p>All students must be formally registered prior to attending classes. Class slots are subject to availability and payment confirmation. Fees are non-refundable unless stated otherwise in specific promotional terms.</p>
              
              <h3>3. Cancellation Policy</h3>
              <p>If a student is unable to attend a scheduled class, a minimum of 24 hours notice must be given to arrange a makeup session. Missed classes without prior notice are generally forfeited.</p>
              
              <h3>4. Modifications</h3>
              <p>LumbaLoomba Swimming Academy reserves the right to revise these terms of service at any time without notice. By using this website, you agree to be bound by the current version of these Terms.</p>
            </>
          )
        };
      case 'safety':
        return {
          title: 'Safety Guidelines',
          lastUpdated: 'July 1, 2026',
          content: (
            <>
              <h3>1. General Pool Rules</h3>
              <p>Safety is our top priority. Running, diving in shallow areas, and horseplay are strictly prohibited around the pool deck. All students must wait for their instructor before entering the water.</p>
              
              <h3>2. Health and Hygiene</h3>
              <p>Students must shower before entering the pool. Proper swimming attire and caps are required. Individuals feeling unwell or experiencing contagious conditions should not attend class.</p>
              
              <h3>3. Supervision</h3>
              <p>Parents or guardians of children under 12 must remain on the premises during the lesson. While our instructors are highly trained in water safety, parents share the responsibility of monitoring their children before and after class.</p>
              
              <h3>4. Emergency Procedures</h3>
              <p>In the rare event of an emergency, please follow the immediate instructions of our coaching staff. All our instructors are trained in first aid and CPR.</p>
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
          <p>Last updated: {data.lastUpdated}</p>
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
