import styles from './EditorialQuote.module.css'

export default function EditorialQuote() {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <p className={styles.label}>Car and Driver says:</p>
        <p className={styles.quote}>
          "The Telluride remains at the top of the class, <strong>delivering plenty of space and a handsomely-trimmed cabin that approaches luxury standards</strong>."
        </p>
      </div>
    </section>
  )
}

