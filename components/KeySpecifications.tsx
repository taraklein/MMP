import styles from './KeySpecifications.module.css'

export default function KeySpecifications() {
  const specifications = [
    { label: 'Base Price', value: '$36,190' },
    { label: 'Engine', value: '3.8L V6' },
    { label: 'Horsepower', value: '291 hp' },
    { label: 'Torque', value: '262 lb-ft' },
    { label: 'Transmission', value: '8-Speed Automatic' },
    { label: 'Drivetrain', value: 'FWD/AWD' },
    { label: 'Seating', value: '7-8 passengers' },
    { label: 'Cargo Volume', value: '21.0 cu ft' },
    { label: 'Fuel Economy', value: '20/26 mpg' },
  ]

  return (
    <section id="specs" className={styles.section}>
      <h2 className={styles.title}>Key Specifications</h2>
      <div className={styles.grid}>
        {specifications.map((spec, index) => (
          <div key={index} className={styles.specItem}>
            <span className={styles.label}>{spec.label}</span>
            <span className={styles.value}>{spec.value}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
