import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import './ReviewsSection.css';
import { Star } from 'lucide-react';

const ReviewsSection: React.FC = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);

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

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 60, damping: 15 } 
    }
  };

  return (
    <section className="reviews-section" id="reviews" ref={sectionRef}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          {t('reviews.title', 'What Our Swimmers Say')}
        </motion.h2>
        
        <motion.div 
          className="reviews-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {reviews.map((review, index) => (
            <motion.div 
              className="review-card" 
              key={index} 
              variants={cardVariants}
              whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}
            >
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
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="reviews-cta text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <a href="https://maps.app.goo.gl/BDm8q54Le9rth53g7" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Read More on Google Maps
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewsSection;
