import React from 'react';
import './InfoSection.css';
import { Clock, Calendar, AlertCircle } from 'lucide-react';

const InfoSection: React.FC = () => {
  const schedule = [
    { day: 'Tuesday - Sunday', time: '10:00 AM - 7:00 PM' },
    { day: 'Monday', time: 'Closed' }
  ];

  return (
    <section className="info-section" id="schedule">
      <div className="container">
        <h2 className="section-title">Schedule & Info</h2>
        
        <div className="info-grid">
          <div className="info-card animate-fade-in delay-100">
            <div className="card-icon-wrapper">
              <Clock className="card-icon" />
            </div>
            <h3>Operating Hours</h3>
            <p className="card-desc">Join us during our regular business hours for lessons and free swim sessions.</p>
            
            <ul className="schedule-list">
              {schedule.map((item, index) => (
                <li key={index} className={item.day === 'Monday' ? 'closed' : ''}>
                  <span className="day">{item.day}</span>
                  <span className="time">{item.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="info-card animate-fade-in delay-200">
            <div className="card-icon-wrapper">
              <Calendar className="card-icon" />
            </div>
            <h3>Programs & Classes</h3>
            <p className="card-desc">We offer tailored swimming programs for all age groups and skill levels.</p>
            <div className="programs-list">
              <span className="program-tag">Toddlers (2-4 yrs)</span>
              <span className="program-tag">Kids (5-12 yrs)</span>
              <span className="program-tag">Teens & Adults</span>
              <span className="program-tag">Competitive</span>
              <span className="program-tag">Private Coaching</span>
            </div>
          </div>

          <div className="info-card highlight-card animate-fade-in delay-300">
            <div className="card-icon-wrapper">
              <AlertCircle className="card-icon" />
            </div>
            <h3>Why Choose Us?</h3>
            <ul className="benefits-list">
              <li>Certified Professional Instructors</li>
              <li>State-of-the-Art Swimming Facilities</li>
              <li>Small Class Sizes for Personal Attention</li>
              <li>Proven Progression Methodology</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
