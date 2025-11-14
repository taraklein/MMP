import styles from './ProsConsSpecs.module.css'

export default function ProsConsSpecs() {
  const pros = [
    'Ample seating space across all three rows',
    'Comprehensive standard features included',
    'Refined interior design and comfort',
    'More luxurious feel than most competitors',
  ]

  const cons = [
    'No hybrid or four-cylinder options',
    'Some competitors handle better',
    'Overly sensitive driver-assist systems',
  ]

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className={styles.checkIcon}>
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
            <h3 className={styles.cardTitle}>Pros</h3>
          </div>
          <ul className={styles.list}>
            {pros.map((pro, index) => (
              <li key={index} className={styles.listItem}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className={styles.checkSmall}>
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="#26870D"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>{pro}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className={styles.xIcon}>
              <circle cx="12" cy="12" r="10" stroke="#D2232A" strokeWidth="2" />
              <path d="M15 9L9 15M9 9L15 15" stroke="#D2232A" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <h3 className={styles.cardTitle}>Cons</h3>
          </div>
          <ul className={styles.list}>
            {cons.map((con, index) => (
              <li key={index} className={styles.listItem}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className={styles.xSmall}>
                  <circle cx="12" cy="12" r="10" stroke="#D2232A" strokeWidth="2" />
                  <path d="M15 9L9 15M9 9L15 15" stroke="#D2232A" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <span>{con}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h3 className={styles.cardTitle}>Key Specifications</h3>
            <a href="#" className={styles.specsLink}>
              See all Specs
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M1 11L11 1M11 1H1M11 1V11"
                  stroke="#1b5f8a"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
          <div className={styles.specsGrid}>
            <div className={styles.specItem}>
              <div className={styles.specIcon}>⛽</div>
              <div className={styles.specText}>
                <p className={styles.specLabel}>EPA MPG</p>
                <p className={styles.specValue}>20–22 Combined</p>
              </div>
            </div>
            <div className={styles.specItem}>
              <div className={styles.specIcon}>🪑</div>
              <div className={styles.specText}>
                <p className={styles.specLabel}>Seating</p>
                <p className={styles.specValue}>7-8 Seats</p>
              </div>
            </div>
            <div className={styles.specItem}>
              <div className={styles.specIcon}>⚙️</div>
              <div className={styles.specText}>
                <p className={styles.specLabel}>Powertrain</p>
                <p className={styles.specValue}>Gas</p>
              </div>
            </div>
            <div className={styles.specItem}>
              <div className={styles.specIcon}>🚗</div>
              <div className={styles.specText}>
                <p className={styles.specLabel}>Drivetrain</p>
                <p className={styles.specValue}>All-Wheel Drive</p>
              </div>
            </div>
          </div>
          <div className={styles.warranty}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke="#1b5f8a"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 12L11 14L15 10"
                stroke="#1b5f8a"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div>
              <p className={styles.warrantyLabel}>Limited Warranty</p>
              <p className={styles.warrantyValue}>5 Years/60,000 Miles</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.actionButtons}>
        <button className={styles.actionButton}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="14" stroke="#1b5f8a" strokeWidth="2" />
            <text x="16" y="20" textAnchor="middle" fontSize="11" fill="#1b5f8a" fontWeight="700">VS</text>
          </svg>
          <span>Compare with Top Competitors</span>
        </button>
        <button className={`${styles.actionButton} ${styles.actionButtonGreen}`}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path
              d="M16 8V24M8 16H24"
              stroke="#26870d"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <span>Get Your Trade-in Value</span>
        </button>
        <button className={styles.actionButton}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path
              d="M16 4L20 12H28L22 18L24 26L16 22L8 26L10 18L4 12H12L16 4Z"
              stroke="#1b5f8a"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>See Pricing Breakdown</span>
        </button>
        <button className={styles.actionButton}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path
              d="M8 12H24M8 16H24M8 20H16"
              stroke="#1b5f8a"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <span>See All Specifications</span>
        </button>
      </div>
    </section>
  )
}


