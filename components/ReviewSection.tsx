import styles from './ReviewSection.module.css'

export default function ReviewSection() {
  const whatsNew = [
    'Ample seating space across all three rows',
    'Comprehensive standard features included',
    'Refined interior design and comfort',
    'More luxurious feel than most competitors',
  ]

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>2025 Kia Telluride Review</h2>
        
        <div className={styles.authorInfo}>
          <p className={styles.author}>
            By <span className={styles.authorName}>Mark Takahashi</span>
          </p>
          <p className={styles.authorTitle}>C/D Contributing Editor</p>
        </div>
        
        <div className={styles.whatsNew}>
          <div className={styles.whatsNewHeader}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={styles.checkIcon}>
              <path
                d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.7088 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999"
                stroke="#26870D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22 4L12 14.01L9 11.01"
                stroke="#26870D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h3 className={styles.whatsNewTitle}>What's New</h3>
          </div>
          <ul className={styles.whatsNewList}>
            {whatsNew.map((item, index) => (
              <li key={index} className={styles.whatsNewItem}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className={styles.checkSmall}>
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="#26870D"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className={styles.reviewContent}>
          <p className={styles.reviewText}>
            The 2025 Kia Telluride continues to set the standard for full-size SUVs, combining 
            exceptional space, premium features, and refined comfort in a package that feels 
            more luxurious than most competitors. With seating for up to eight passengers across 
            three rows, the Telluride offers ample room for families and cargo alike.
          </p>
          <p className={styles.reviewText}>
            The interior design showcases Kia's attention to detail, with high-quality materials 
            and thoughtful touches throughout. Standard features are comprehensive, making even 
            the base model feel well-equipped. The Telluride's cabin approaches luxury standards, 
            providing a comfortable and sophisticated environment for all occupants.
          </p>
          <p className={styles.reviewText}>
            While the Telluride excels in many areas, it's worth noting that some competitors 
            may offer better handling dynamics. Additionally, the driver-assist systems can be 
            overly sensitive at times. However, these minor drawbacks don't detract from the 
            overall excellence of this three-row SUV.
          </p>
          <p className={styles.reviewText}>
            The Telluride remains at the top of its class, delivering on its promise of space, 
            comfort, and value. Whether you're navigating city streets or embarking on long road 
            trips, the 2025 Kia Telluride provides a compelling option for those seeking a 
            premium full-size SUV experience.
          </p>
        </div>
      </div>
    </section>
  )
}


