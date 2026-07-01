import React from 'react';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import ReviewsSection from '../components/ReviewsSection';
import SocialFeedSection from '../components/SocialFeedSection';
import ContactSection from '../components/ContactSection';
import RegistrationSection from '../components/RegistrationSection';

const Home: React.FC = () => {
  return (
    <main>
      <HeroSection />
      <InfoSection />
      <ReviewsSection />
      <SocialFeedSection />
      <ContactSection />
      <RegistrationSection />
    </main>
  );
};

export default Home;
