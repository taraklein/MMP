import styles from './RightSidebar.module.css'

export default function RightSidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sticky}>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Quick Facts</h3>
          <div className={styles.facts}>
            <div className={styles.factItem}>
              <span className={styles.factLabel}>Starting Price</span>
              <span className={styles.factValue}>$36,190</span>
            </div>
            <div className={styles.factItem}>
              <span className={styles.factLabel}>MPG</span>
              <span className={styles.factValue}>20/26</span>
            </div>
            <div className={styles.factItem}>
              <span className={styles.factLabel}>Seating</span>
              <span className={styles.factValue}>7-8</span>
            </div>
          </div>
        </div>
        
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Find a Dealer</h3>
          <button className={styles.dealerButton}>
            Search Dealers Near You
          </button>
        </div>

        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Compare</h3>
          <button className={styles.compareButton}>
            Compare with Similar Vehicles
          </button>
        </div>
      </div>
    </aside>
  )
}
