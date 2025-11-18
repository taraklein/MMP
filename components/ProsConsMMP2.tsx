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
      <h2 className={styles.title}>Pros & Cons</h2>
      <div className={styles.container}>
        <div className={styles.pros}>
          <h3 className={styles.subtitle}>Pros</h3>
          <ul className={styles.list}>
            {pros.map((pro, index) => (
              <li key={index} className={styles.listItem}>
                <span className={styles.checkmark}>✓</span>
                {pro}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.cons}>
          <h3 className={styles.subtitle}>Cons</h3>
          <ul className={styles.list}>
            {cons.map((con, index) => (
              <li key={index} className={styles.listItem}>
                <span className={styles.xmark}>✗</span>
                {con}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
