import React, { useState } from 'react';
import './RegistrationSection.css';
import { Send } from 'lucide-react';

const RegistrationSection: React.FC = () => {
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
    // Placeholder for actual form submission logic (e.g., Formspree)
    alert("Thank you for registering! We will contact you via WhatsApp shortly.");
    setFormData({
      parentName: '',
      childName: '',
      age: '',
      phone: '',
      program: 'Toddlers (2-4 yrs)'
    });
  };

  return (
    <section className="registration-section" id="register">
      <div className="container">
        <div className="registration-wrapper">
          <div className="registration-content animate-fade-in delay-100">
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '20px' }}>Join the Academy</h2>
            <p className="registration-desc">
              Ready to dive in? Register your interest today and our team will get in touch with you to finalize your enrollment and schedule.
            </p>
            <ul className="registration-benefits">
              <li>🏊‍♂️ Expert-led coaching for all levels</li>
              <li>🛡️ Safe, indoor facilities</li>
              <li>🏆 Proven progression methodology</li>
            </ul>
          </div>
          
          <div className="registration-form-container animate-fade-in delay-200">
            <form className="registration-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="parentName">Parent's Name</label>
                <input 
                  type="text" 
                  id="parentName" 
                  name="parentName" 
                  required 
                  placeholder="e.g. Ahmad Faizal"
                  value={formData.parentName}
                  onChange={handleChange}
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="childName">Student's Name</label>
                  <input 
                    type="text" 
                    id="childName" 
                    name="childName" 
                    required 
                    placeholder="e.g. Danish"
                    value={formData.childName}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="age">Age</label>
                  <input 
                    type="number" 
                    id="age" 
                    name="age" 
                    required 
                    min="2" 
                    max="99" 
                    placeholder="e.g. 6"
                    value={formData.age}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number (WhatsApp)</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  required 
                  placeholder="e.g. 0123456789"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="program">Preferred Program</label>
                <select id="program" name="program" value={formData.program} onChange={handleChange}>
                  <option value="Toddlers (2-4 yrs)">Toddlers (2-4 yrs)</option>
                  <option value="Kids (5-12 yrs)">Kids (5-12 yrs)</option>
                  <option value="Teens & Adults">Teens & Adults</option>
                  <option value="Special Needs Therapy">Special Needs Therapy</option>
                  <option value="Competitive Training">Competitive Training</option>
                  <option value="Private Coaching">Private Coaching</option>
                </select>
              </div>

              <button type="submit" className="btn-primary form-submit">
                Submit Registration <Send size={18} style={{ marginLeft: '8px' }} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;
