'use client'

import { useState } from 'react'
import styles from './PhotoGallery.module.css'

const galleryImages = {
  exterior: [
    "/images/exterior/2023-kia-telluride-x-line-101-1666960056.jpg",
    "/images/exterior/2023-kia-telluride-x-line-102-1666960057.jpg",
    "/images/exterior/2023-kia-telluride-x-line-103-1666960055.jpg",
    "/images/exterior/2023-kia-telluride-x-line-105-1666960056.jpg",
  ],
  interior: [
    "/images/interior/2023-kia-telluride-x-line-110-1666960065.jpg",
    "/images/interior/2023-kia-telluride-x-line-111-1666960066.jpg",
    "/images/interior/2023-kia-telluride-x-line-112-1666960065.jpg",
    "/images/interior/2023-kia-telluride-x-line-113-1666960074.jpg",
  ],
}

export default function PhotoGallery() {
  const [activeTab, setActiveTab] = useState<'exterior' | 'interior'>('exterior')
  const currentImages = galleryImages[activeTab]

  return (
    <section id="gallery" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Take a look around.</h2>
          <a href="#" className={styles.seeAllLink}>
            See All Photos
          </a>
        </div>
        
        <div className={styles.galleryWrapper}>
          <div className={styles.gallery}>
            {currentImages.map((image, index) => (
              <div key={index} className={styles.galleryItem}>
                <img 
                  src={image} 
                  alt={`Kia Telluride ${activeTab} ${index + 1}`}
                  className={styles.image}
                />
              </div>
            ))}
            <div className={styles.galleryItem}>
              <div className={styles.viewMoreSlide}>
                <img 
                  src={currentImages[currentImages.length - 1]} 
                  alt={`Kia Telluride ${activeTab}`}
                  className={styles.viewMoreImage}
                />
                <div className={styles.viewMoreOverlay}>
                  <a href="#" className={styles.viewMoreLink}>
                    VIEW MORE PHOTOS
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={styles.viewMoreArrow}>
                      <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.tabs}>
          <button
            type="button"
            className={`${styles.tab} ${activeTab === 'exterior' ? styles.tabActive : ''}`}
            onClick={() => setActiveTab('exterior')}
          >
            Exterior
          </button>
          <button
            type="button"
            className={`${styles.tab} ${activeTab === 'interior' ? styles.tabActive : ''}`}
            onClick={() => setActiveTab('interior')}
          >
            Interior
          </button>
        </div>
      </div>
    </section>
  )
}


