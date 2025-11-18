import styles from './AIOverview.module.css'

export default function AIOverview() {
  return (
    <section id="ai-overview" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.headerCard}>
          <h2 className={styles.title}>AI Overview</h2>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={styles.sparkle}>
            <path
              d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z"
              fill="#fff"
            />
          </svg>
        </div>
        
        <div className={styles.contentCard}>
          <h3 className={styles.subtitle}>What You Need to Know</h3>
          <div className={styles.textContent}>
            <h4 className={styles.carName}>2025 Kia Telluride</h4>
            <p className={styles.description}>
              The redesigned Passport gets buff for 2026 with rugged styling and a significantly improved all-wheel-drive system. This two-row SUV seats 5 passengers and starts at $46,245. It uses the same 285-hp 3.5-liter V-6 and 10-speed automatic as the Pilot, but features Honda's new i-VTM4 torque-vectoring all-wheel-drive system. The TrailSport trim emphasizes off-road capability with all-terrain tires and skid plates. The new Passport backs up its burly design with improved rock-crawling skills while maintaining practicality and comfort.
            </p>
            <a href="#" className={styles.readMore}>Read Full Review</a>
          </div>
        </div>
        
        <div className={styles.disclaimerCard}>
          <p className={styles.disclaimerText}>
            We are committed to transparency in our usage of artificial intelligence (AI). These vehicle summaries are generated using AI trained on content previously published on CarandDriver.com. In other words, the information you will read here is based on our editorial staff's rigorous testing, comprehensive reviews, and expertise.
          </p>
        </div>
      </div>
    </section>
  )
}


