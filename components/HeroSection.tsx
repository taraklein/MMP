'use client'

import { useState, useRef, useEffect } from 'react'
import styles from './HeroSection.module.css'

const heroImage = "http://localhost:3845/assets/bbae5ec1453414aaa03133d9dd9ab06c78c40ead.png"
const modelYears = ['2025', '2024', '2023', '2022', '2021']

export default function HeroSection() {
  const [selectedYear, setSelectedYear] = useState('2025')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isDropdownOpen])

  const handleYearSelect = (year: string) => {
    setSelectedYear(year)
    setIsDropdownOpen(false)
  }

  return (
    <section className={styles.hero}>
      <div className={styles.heroImageContainer}>
        <img 
          src={heroImage} 
          alt={`${selectedYear} Kia Telluride`} 
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay} />
      </div>
      
      <div className={styles.heroContent}>
        <div className={styles.titleContainer}>
          <div className={styles.titleBackground} />
          <div className={styles.titleContent}>
            <div className={styles.badges}>
              <div className={`${styles.yearDropdownContainer} ${isDropdownOpen ? styles.dropdownOpen : ''}`} ref={dropdownRef}>
                <button
                  className={`${styles.badge} ${styles.yearBadge}`}
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  aria-expanded={isDropdownOpen}
                  aria-haspopup="listbox"
                >
                  {selectedYear}
                  <span className={styles.dropdownArrow}>▼</span>
                </button>
                {isDropdownOpen && (
                  <div className={styles.dropdownMenu}>
                    {modelYears.map((year) => (
                      <button
                        key={year}
                        className={`${styles.dropdownItem} ${selectedYear === year ? styles.dropdownItemActive : ''}`}
                        onClick={() => handleYearSelect(year)}
                      >
                        {year}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <span className={styles.badge}>10Best</span>
              <span className={styles.badge}>Editor's Choice</span>
              <span className={styles.badge}>Full-Size SUV</span>
            </div>
            
            <h1 className={styles.title}>{selectedYear} Kia Telluride</h1>
            <p className={styles.subtitle}>#1 in Full-Size SUVs</p>
          </div>
          <div className={styles.ratingBadge}>
            <div className={styles.ratingScore}>6.5</div>
            <div className={styles.ratingLabel}>C/D RATING</div>
          </div>
        </div>
        
        <div className={styles.priceSection}>
          <p className={styles.priceLabel}>MSRP RANGE</p>
          <p className={styles.price}>$37,885–$55,180</p>
          <button className={styles.shopButton}>SHOP LOCAL LISTINGS</button>
          <p className={styles.priceNote}>
            See how this vehicle's price has changed
          </p>
        </div>
      </div>
      
      <div className={styles.quoteSection}>
        <p className={styles.quoteLabel}>Car and Driver says:</p>
        <p className={styles.quote}>
          "The Telluride remains at the top of the class,{' '}
          <strong>delivering plenty of space and a handsomely-trimmed cabin that approaches luxury standards</strong>."
        </p>
      </div>
    </section>
  )
}

