import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import './SocialFeedSection.css';

const SocialFeedSection: React.FC = () => {
  const { t } = useTranslation();

  const posts = [
    {
      id: 1,
      platform: 'instagram',
      image: 'https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: 'https://www.instagram.com/lumbaloomba/',
      text: t('social.post1', 'Our toddlers mastering their first bubbles! 🫧')
    },
    {
      id: 2,
      platform: 'tiktok',
      image: 'https://images.unsplash.com/photo-1600965962361-9035dbfd1c50?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: 'https://www.tiktok.com/@lumbaloomba',
      text: t('social.post2', 'Quick tips on front crawl breathing technique. Watch now!')
    },
    {
      id: 3,
      platform: 'facebook',
      image: 'https://images.unsplash.com/photo-1560090995-01632a28895b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: 'https://www.facebook.com/lumbaloomba/',
      text: t('social.post3', 'Congratulations to our advanced squad on their latest milestone. 🏆')
    }
  ];

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
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
    <section className="social-feed-section" id="social">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title" style={{ marginBottom: '10px' }}>{t('social.title', 'Join Our Community')}</h2>
          <p className="section-subtitle">{t('social.subtitle', 'Follow us on social media for the latest updates, tips, and academy highlights.')}</p>
        </motion.div>
        
        <motion.div 
          className="social-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {posts.map((post) => (
            <motion.a 
              href={post.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-card" 
              key={post.id}
              variants={cardVariants}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}
            >
              <div className="social-img-wrapper">
                <motion.img 
                  src={post.image} 
                  alt={`Post from ${post.platform}`} 
                  className="social-img" 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="social-overlay">
                  <div className="social-icon">
                    {post.platform === 'instagram' && (
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    )}
                    {post.platform === 'facebook' && (
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                    )}
                    {post.platform === 'tiktok' && (
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5v3a3 3 0 0 1-3-3"></path></svg>
                    )}
                  </div>
                  <p>{post.text}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SocialFeedSection;
