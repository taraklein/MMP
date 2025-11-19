import styles from './KeySpecifications.module.css'

export default function KeySpecifications() {
  const specifications = [
    { 
      label: 'EPA MPG', 
      value: '20-22 Combined',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 7h4l2-4h4l2 4h4v2H3V7z"/>
          <path d="M3 9v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9"/>
          <path d="M7 13h10"/>
        </svg>
      )
    },
    { 
      label: 'Seating', 
      value: '7-8 Seats',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="6" width="16" height="12" rx="2"/>
          <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
          <path d="M6 12h12"/>
          <circle cx="9" cy="15" r="1"/>
          <circle cx="15" cy="15" r="1"/>
        </svg>
      )
    },
    { 
      label: 'Powertrain', 
      value: 'Gas',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="8"/>
          <path d="M12 2v4M12 18v4M22 12h-4M6 12H2"/>
          <circle cx="12" cy="12" r="3"/>
        </svg>
      )
    },
    { 
      label: 'Drivetrain', 
      value: 'All-Wheel Drive, Front Wheel Drive',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="5" cy="19" r="2.5"/>
          <circle cx="19" cy="19" r="2.5"/>
          <path d="M5 19v-6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6"/>
          <path d="M12 11V7"/>
          <path d="M5 13h14"/>
        </svg>
      )
    },
  ]

  return (
    <section id="specs" className={styles.section}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h2 className={styles.title}>Key Specifications</h2>
          <a href="#" className={styles.seeAllLink}>
            SEE ALL SPECS
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={styles.arrow}>
              <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
        
        <div className={styles.specsSection}>
          {specifications.map((spec, index) => (
            <div key={index} className={styles.specItem}>
              <div className={styles.iconContainer}>
                {spec.icon}
              </div>
              <div className={styles.specContent}>
                <span className={styles.label}>{spec.label}</span>
                <span className={styles.value}>{spec.value}</span>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.divider}></div>

        <div className={styles.warrantySection}>
          <div className={styles.specItem}>
            <div className={styles.iconContainer}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <path d="M9 12l2 2 4-4"/>
              </svg>
            </div>
            <div className={styles.specContent}>
              <span className={styles.label}>Limited Warranty</span>
              <span className={styles.value}>5 Years/60,000 Miles</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
