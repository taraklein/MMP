'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import styles from './HeroSection.module.css'
import heroImage from '../images/hero/2023-kia-telluride-x-line-101-1666960056.jpg'
const tenBestIcon = "/images/awards/ten-best.bcb6ac1.svg"
const editorsChoiceIcon = "/images/awards/editors-choice.7ecd596.svg"
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
        <Image 
          src={heroImage} 
          alt={`${selectedYear} Kia Telluride`} 
          className={styles.heroImage}
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: 'center 60%' }}
        />
      </div>

      <div className={styles.breadcrumb}>
        <div className={styles.breadcrumbLinks}>
          <a href="/" className={styles.breadcrumbLink}>Home</a>
          <span className={styles.breadcrumbSeparator}>/</span>
          <a href="/kia" className={styles.breadcrumbLink}>Kia</a>
          <span className={styles.breadcrumbSeparator}>/</span>
          <span className={styles.breadcrumbCurrent}>Telluride</span>
        </div>
        <button className={styles.favoriteButton}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.03L12 21.35Z" stroke="#1b5f8a" strokeWidth="2" fill="none"/>
          </svg>
          ADD TO FAVORITES
        </button>
      </div>

      <div className={styles.mainContent}>
        <div className={styles.titleSection}>
          <div className={styles.titleSectionTop}>
            <div className={styles.leftContent}>
              <div className={`${styles.yearDropdownContainer} ${isDropdownOpen ? styles.dropdownOpen : ''}`} ref={dropdownRef}>
                <button
                  className={styles.yearBadge}
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

              <div className={styles.badges}>
                <span className={styles.badge}>
                  <Image 
                    src={tenBestIcon} 
                    alt="10Best" 
                    width={16} 
                    height={16} 
                    className={styles.badgeIcon}
                  />
                  10BEST
                </span>
                <span className={styles.badge}>
                  <Image 
                    src={editorsChoiceIcon} 
                    alt="Editor's Choice" 
                    width={16} 
                    height={16} 
                    className={styles.badgeIcon}
                  />
                  EDITOR'S CHOICE
                </span>
                <span className={styles.badge}>FULL-SIZE SUV</span>
              </div>
            </div>
          </div>
          
          <h1 className={styles.title}>{selectedYear} Kia Telluride</h1>
          <p className={styles.subtitle}>#1 in Full-Size SUVs</p>
          <div className={styles.ratingBadge}>
            <div className={styles.ratingScore}>6.5</div>
            <div className={styles.ratingLabel}>C/D RATING</div>
          </div>
        </div>
      </div>

      <div className={styles.priceSection}>
        <div className={styles.priceRow}>
          <p className={styles.priceLabel}>MSRP RANGE</p>
          <p className={styles.price}>$37,885–$55,180</p>
          <button className={styles.shopButton}>SHOP LOCAL LISTINGS</button>
        </div>
        <a href="#" className={styles.priceLink}>
          See how this vehicle's price has changed ↑
        </a>
      </div>
    </section>
  )
}

