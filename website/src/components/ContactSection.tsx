import React from 'react';
import './ContactSection.css';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <h2 className="section-title">Visit Us</h2>
        
        <div className="contact-wrapper">
          <div className="contact-info animate-fade-in delay-100">
            <div className="contact-card">
              <h3>Get in Touch</h3>
              <p>We're here to answer any questions you have about our swimming programs.</p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4>Location</h4>
                    <p>Sunsuria Seventh Avenue, Seksyen U13, 12, Jln Setia Dagang AK U13/AK, Setia Alam, 40170 Shah Alam, Selangor</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon" style={{ backgroundColor: 'rgba(37, 211, 102, 0.1)', color: '#25D366' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                  </div>
                  <div>
                    <h4>WhatsApp / Phone</h4>
                    <p><a href="https://wa.me/60173446365" target="_blank" rel="noopener noreferrer" className="contact-link">0173446365</a></p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4>Email</h4>
                    <p><a href="mailto:info@lumbaloomba.com" className="contact-link">info@lumbaloomba.com</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-map animate-fade-in delay-200">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
