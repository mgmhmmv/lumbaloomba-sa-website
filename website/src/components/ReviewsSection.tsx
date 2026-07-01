import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './ReviewsSection.css';
import { Star } from 'lucide-react';

const ReviewsSection: React.FC = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const reviews = [
    {
      name: "nurulnadia jamaludin",
      time: "2 weeks ago",
      text: "We would like to express our sincere appreciation to Coach Afnan for being such an outstanding swimming teacher for Hussein. Coach Afnan is patient, encouraging, and highly skilled at working with children. His calm and positive approach has helped Hussein gain confidence in the water and improve his swimming abilities significantly.",
      rating: 5,
    },
    {
      name: "Michael",
      time: "a week ago",
      text: "We are extremely happy with our experience at this swimming center. Since joining the classes, my daughter has developed strong swimming skills and has become much more confident in the water. A special thank you to Coach Afnan, who has been incredibly patient, dedicated, and professional.",
      rating: 5,
    },
    {
      name: "Eika",
      time: "8 months ago",
      text: "My autistic son has made tremendous progress since learning with Coach Afnan. The coach is exceptionally detailed in his teaching approach, always ensuring my son feels comfortable, supported, and confident in the water. His skill, patience, and professionalism are truly outstanding.",
      rating: 5,
    },
    {
      name: "Ira Athirah",
      time: "7 months ago",
      text: "Raisya really enjoys her sessions with Teacher Aidil. She used to be very afraid of water, but Teacher Aidil helped her slowly build her confidence. Now she has changed from someone who was scared to even step into the pool to someone who truly enjoys being in the water.",
      rating: 5,
    },
    {
      name: "Hazel",
      time: "11 months ago",
      text: "The overall space is clean and well-maintained, making it a comfortable environment for kids to learn swimming and shower after the classes. I like that the pools have several raised platforms that allow children to stand confidently while waiting for their turn with the teacher’s guidance.",
      rating: 5,
    },
    {
      name: "Nadzir Roslan",
      time: "6 days ago",
      text: "We couldn’t be happier with the progress our son has made under Teacher Faten’s guidance. She is incredibly patient, dedicated, and knows exactly how to build a child’s confidence in the water. Every lesson was engaging and encouraging, and thanks to her commitment, our son can now swim confidently.",
      rating: 5,
    }
  ];

  return (
    <section className="reviews-section" id="reviews" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">{t('reviews.title', 'What Our Swimmers Say')}</h2>
        
        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <div className={`review-card ${isVisible ? 'animate-slide-up' : ''}`} key={index} style={{ animationDelay: `${(index % 3 + 1) * 100}ms` }}>
              <div className="review-header">
                <div className="reviewer-avatar">
                  {review.name.charAt(0).toUpperCase()}
                </div>
                <div className="reviewer-info">
                  <h4>{review.name}</h4>
                  <span>{t(`reviews.time.${index}`, review.time)}</span>
                </div>
                <div className="review-rating">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>
              </div>
              <p className="review-text">"{t(`reviews.text.${index}`, review.text)}"</p>
            </div>
          ))}
        </div>

        <div className="reviews-cta text-center">
          <a href="https://maps.app.goo.gl/BDm8q54Le9rth53g7" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Read More on Google Maps
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
