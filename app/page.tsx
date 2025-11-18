import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import StickyNavHero from '@/components/StickyNavHero'
import ProsConsSpecs from '@/components/ProsConsSpecs'
import EditorialQuote from '@/components/EditorialQuote'
import PhotoGallery from '@/components/PhotoGallery'
import AIOverview from '@/components/AIOverview'
import CarListings from '@/components/CarListings'
import ReviewSection from '@/components/ReviewSection'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <HeroSection />
      <StickyNavHero />
      <div className={styles.gradientSection}>
        <EditorialQuote />
        <ProsConsSpecs />
        <PhotoGallery />
      </div>
      <div className={styles.contentWithAd}>
        <div className={styles.mainContent}>
          <AIOverview />
          <CarListings />
          <ReviewSection />
        </div>
        <div className={styles.rightRail}>
          <div className={styles.adUnit}>
            <div className={styles.adPlaceholder}>
              <span className={styles.adLabel}>Advertisement</span>
              <div className={styles.adContent}>300 x 600</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}


