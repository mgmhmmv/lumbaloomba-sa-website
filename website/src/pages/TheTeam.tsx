import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import './TheTeam.css';

const TheTeam: React.FC = () => {
  const { t } = useTranslation();

  const teamMembers = [
    {
      id: 1,
      name: "Coach Sarah",
      role: "Head Coach & Founder",
      bio: "With over 15 years of competitive swimming experience, Sarah leads our academy with passion. She specializes in advanced stroke correction and toddler water confidence.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      name: "Coach Daniel",
      role: "Senior Instructor",
      bio: "Daniel is a certified lifeguard and expert in children's swimming psychology. His fun, game-based approach makes learning to swim an exciting adventure.",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      name: "Coach Aisha",
      role: "Special Needs Specialist",
      bio: "Aisha holds specialized certifications in aquatic therapy. She works closely with children of all abilities to ensure a safe, inclusive, and therapeutic environment.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      name: "Coach Kamal",
      role: "Competitive Training Lead",
      bio: "A former national swimmer, Kamal pushes our teenage and adult athletes to their limits, focusing on speed, endurance, and tournament preparation.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    }
  ];

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 50, damping: 20 } 
    }
  };

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: -30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <div className="team-page">
      <div className="team-hero">
        <div className="team-hero-overlay"></div>
        <motion.div 
          className="container team-hero-content"
          initial="hidden"
          animate="visible"
          variants={headerVariants}
        >
          <h1>{t('team.title', 'Meet Our Expert Team')}</h1>
          <p>{t('team.subtitle', 'Dedicated professionals committed to making you a confident swimmer.')}</p>
        </motion.div>
      </div>

      <section className="team-section">
        <div className="container">
          <motion.div 
            className="team-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {teamMembers.map((member) => (
              <motion.div key={member.id} className="team-card" variants={cardVariants}>
                <div className="team-image-container">
                  <img src={member.image} alt={member.name} className="team-image" />
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <span className="team-role">{member.role}</span>
                  <p className="team-bio">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TheTeam;
