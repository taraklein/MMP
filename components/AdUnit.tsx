import styles from './AdUnit.module.css'

export default function AdUnit() {
  return (
    <div className={styles.adContainer}>
      <div className={styles.adUnit}>
        <div className={styles.adPlaceholder}>
          <span className={styles.adLabel}>Advertisement</span>
          <div className={styles.adContent}>768 x 90</div>
        </div>
      </div>
    </div>
  )
}



