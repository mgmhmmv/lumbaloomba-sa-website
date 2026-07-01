import React from 'react';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import PricingSection from '../components/PricingSection';
import ReviewsSection from '../components/ReviewsSection';
import SocialFeedSection from '../components/SocialFeedSection';
import ContactSection from '../components/ContactSection';
import RegistrationSection from '../components/RegistrationSection';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

const Home: React.FC = () => {
  return (
    <main>
      <HeroSection />
      <InfoSection />
      <PricingSection />
      <ReviewsSection />
      <SocialFeedSection />
      <ContactSection />
      <RegistrationSection />
      <FloatingWhatsApp />
    </main>
  );
};

export default Home;
