import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import ProsConsSpecs from '@/components/ProsConsSpecs'
import AIOverview from '@/components/AIOverview'
import PhotoGallery from '@/components/PhotoGallery'
import CarListings from '@/components/CarListings'
import ReviewSection from '@/components/ReviewSection'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <HeroSection />
      <ProsConsSpecs />
      <AIOverview />
      <PhotoGallery />
      <CarListings />
      <ReviewSection />
    </main>
  )
}


