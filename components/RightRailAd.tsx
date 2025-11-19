import styles from './RightRailAd.module.css'

export default function RightRailAd() {
  return (
    <div className={styles.adContainer}>
      <div className={styles.adUnit}>
        <div className={styles.adPlaceholder}>
          <span className={styles.adLabel}>Advertisement</span>
          <div className={styles.adContent}>300 x 600</div>
        </div>
      </div>
    </div>
  )
}

