import Header from '@/components/Header'
import HeroSectionMMP2 from '@/components/HeroSectionMMP2'
import StickyNavHero from '@/components/StickyNavHero'
import AdUnit from '@/components/AdUnit'
import RightRailAd from '@/components/RightRailAd'
import CarListings from '@/components/CarListings'
import KeySpecifications from '@/components/KeySpecifications'
import AIOverview from '@/components/AIOverview'
import ReviewSection from '@/components/ReviewSection'
import PricingSection from '@/components/PricingSection'
import RightSidebar from '@/components/RightSidebar'
import styles from './page.module.css'

export default function MMP2Page() {
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.heroGradientWrapper}>
        <div className={styles.heroWrapper}>
          <HeroSectionMMP2 />
          <div className={styles.heroSidebar}>
            <RightSidebar />
          </div>
        </div>
      </div>
      <StickyNavHero 
        navItems={[
          { id: 'specs', label: 'Specs' },
          { id: 'listings', label: 'For Sale Near You' },
          { id: 'ai-overview', label: 'Overview' },
          { id: 'review', label: 'Review' },
        ]}
      />
      <AdUnit />
      <div className={styles.contentWrapper}>
        <div className={styles.listingsWithAd}>
          <div className={styles.mainContent}>
            <CarListings />
          </div>
          <RightRailAd />
        </div>
        <div className={styles.mainContent}>
          <KeySpecifications />
          <AIOverview />
          <ReviewSection />
          <PricingSection />
        </div>
      </div>
    </main>
  )
}

