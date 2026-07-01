
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import InfoSection from './components/InfoSection'
import ReviewsSection from './components/ReviewsSection'
import SocialFeedSection from './components/SocialFeedSection'
import ContactSection from './components/ContactSection'
import RegistrationSection from './components/RegistrationSection'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <InfoSection />
        <ReviewsSection />
        <SocialFeedSection />
        <ContactSection />
        <RegistrationSection />
      </main>
      <Footer />
    </>
  )
}

export default App
