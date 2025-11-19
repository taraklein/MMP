import styles from './ProsConsMMP2.module.css'

export default function ProsConsMMP2() {
  const pros = [
    'Spacious and comfortable interior',
    'Strong V6 engine performance',
    'Excellent build quality',
    'Comprehensive standard features',
    'Smooth ride quality',
  ]

  const cons = [
    'Third-row access could be easier',
    'Fuel economy could be better',
    'Higher trim levels get expensive',
    'Infotainment system can be complex',
  ]

  return (
    <section id="pros-cons" className={styles.section}>
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
      </div>
    </section>
  )
}
