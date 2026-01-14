import Hero from '@/components/home/Hero'
import BackgroundVideo from '@/components/home/BackgroundVideo'
import PartnersBar from '@/components/home/PartnersBar'
import ServicesPreview from '@/components/home/ServicesPreview'
import ContactSection from '@/components/home/ContactSection'
import ReviewsSection from '@/components/home/ReviewsSection'
import MapSection from '@/components/home/MapSection'

export default function Home() {
  return (
    <>
      <BackgroundVideo />
      <Hero />
      <PartnersBar />
      <ServicesPreview />
      <ReviewsSection />
      <ContactSection />
      <MapSection />
    </>
  )
}
