import styles from './PhotoGallery.module.css'

const galleryImages = [
  "http://localhost:3845/assets/bbae5ec1453414aaa03133d9dd9ab06c78c40ead.png",
  "http://localhost:3845/assets/bbae5ec1453414aaa03133d9dd9ab06c78c40ead.png",
  "http://localhost:3845/assets/bbae5ec1453414aaa03133d9dd9ab06c78c40ead.png",
]

export default function PhotoGallery() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Take a look around.</h2>
        <a href="#" className={styles.seeAllLink}>See All Photos</a>
      </div>
      
      <div className={styles.gallery}>
        {galleryImages.map((image, index) => (
          <div key={index} className={styles.imageContainer}>
            <img 
              src={image} 
              alt={`Kia Telluride view ${index + 1}`}
              className={styles.image}
            />
            <p className={styles.imageLabel}>
              {index === 0 ? 'Exterior' : index === 1 ? 'Interior' : 'Exterior'}
            </p>
          </div>
        ))}
        <div className={styles.viewMoreContainer}>
          <div className={styles.viewMoreOverlay}>
            <button className={styles.viewMoreButton}>
              View More photos
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                <path
                  d="M5 13H21M21 13L13 5M21 13L13 21"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}


