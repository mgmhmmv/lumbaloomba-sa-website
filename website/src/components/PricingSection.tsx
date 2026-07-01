import React from 'react';
import { Check } from 'lucide-react';
import './PricingSection.css';

const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="pricing-section">
      <div className="container">
        <div className="section-header">
          <h2>Investment in <span className="highlight">Safety</span></h2>
          <p>Transparent fee structures designed for every swimmer's journey. Choose the plan that fits your goals.</p>
        </div>

        <div className="pricing-grid">
          {/* Kids Plan */}
          <div className="pricing-card">
            <div className="pricing-header">
              <h3>Kids & Toddlers</h3>
              <p>Perfect for building early water confidence and basic strokes.</p>
            </div>
            <div className="pricing-price">
              <span className="currency">RM</span>
              <span className="amount">150</span>
              <span className="period">/ month</span>
            </div>
            <ul className="pricing-features">
              <li><Check className="feature-icon" /> 4 sessions per month</li>
              <li><Check className="feature-icon" /> Small group focus (max 5)</li>
              <li><Check className="feature-icon" /> Progress tracking booklet</li>
              <li><Check className="feature-icon" /> Certificate upon level completion</li>
            </ul>
            <a href="#register" className="pricing-cta secondary">Enroll Now</a>
          </div>

          {/* Adults Plan */}
          <div className="pricing-card popular">
            <div className="popular-badge">Most Popular</div>
            <div className="pricing-header">
              <h3>Adult Classes</h3>
              <p>Overcome fear and master swimming at your own pace.</p>
            </div>
            <div className="pricing-price">
              <span className="currency">RM</span>
              <span className="amount">200</span>
              <span className="period">/ month</span>
            </div>
            <ul className="pricing-features">
              <li><Check className="feature-icon" /> 4 sessions per month</li>
              <li><Check className="feature-icon" /> Breath control techniques</li>
              <li><Check className="feature-icon" /> Stroke correction & stamina</li>
              <li><Check className="feature-icon" /> Flexible evening schedules</li>
            </ul>
            <a href="#register" className="pricing-cta primary">Enroll Now</a>
          </div>

          {/* Private / Special Needs */}
          <div className="pricing-card">
            <div className="pricing-header">
              <h3>Private / Therapy</h3>
              <p>1-on-1 personalized attention for rapid progress or special needs.</p>
            </div>
            <div className="pricing-price">
              <span className="currency">RM</span>
              <span className="amount">350</span>
              <span className="period">/ month</span>
            </div>
            <ul className="pricing-features">
              <li><Check className="feature-icon" /> 4 sessions per month</li>
              <li><Check className="feature-icon" /> Exclusive 1-on-1 coaching</li>
              <li><Check className="feature-icon" /> Customized lesson plans</li>
              <li><Check className="feature-icon" /> Specialized therapy techniques</li>
            </ul>
            <a href="#register" className="pricing-cta secondary">Contact Coach</a>
          </div>
        </div>
        
        <div className="pricing-note">
          <p>* One-time registration fee of RM 50 applies for all new enrollments. Family discounts available.</p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
