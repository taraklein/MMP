import Header from '@/components/Header'
import HeroSectionMMP2 from '@/components/HeroSectionMMP2'
import StickyNavMMP2 from '@/components/StickyNavMMP2'
import KeySpecifications from '@/components/KeySpecifications'
import ProsConsMMP2 from '@/components/ProsConsMMP2'
import EditorialQuote from '@/components/EditorialQuote'
import RightSidebar from '@/components/RightSidebar'
import PhotoGallery from '@/components/PhotoGallery'
import ReviewSection from '@/components/ReviewSection'
import styles from './page.module.css'

export default function MMP2Page() {
  return (
    <main className={styles.main}>
      <Header />
      <HeroSectionMMP2 />
      <div className={styles.contentWrapper}>
        <div className={styles.mainContent}>
          <StickyNavMMP2 />
          <KeySpecifications />
          <ProsConsMMP2 />
          <EditorialQuote />
          <PhotoGallery />
          <ReviewSection />
        </div>
        <RightSidebar />
      </div>
    </main>
  )
}

