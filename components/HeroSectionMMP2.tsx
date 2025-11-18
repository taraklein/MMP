'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import styles from './HeroSectionMMP2.module.css'

const heroImage = "/images/hero/2023-kia-telluride-x-line-101-1666960056.jpg"
const exteriorImages = [
  "/images/exterior/2023-kia-telluride-x-line-102-1666960057.jpg",
  "/images/exterior/2023-kia-telluride-x-line-103-1666960055.jpg",
  "/images/exterior/2023-kia-telluride-x-line-104-1666960056.jpg",
]
const tenBestIcon = "/images/awards/ten-best.bcb6ac1.svg"
const editorsChoiceIcon = "/images/awards/editors-choice.7ecd596.svg"
const modelYears = ['2025', '2024', '2023', '2022', '2021']

export default function HeroSectionMMP2() {
  const [selectedYear, setSelectedYear] = useState('2025')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(heroImage)
  const [isFavorited, setIsFavorited] = useState(false)
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

  const allImages = [heroImage, ...exteriorImages]

  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.topBar}>
          <div className={styles.breadcrumbContainer}>
            <a href="#" className={styles.breadcrumbLink}>Home</a>
            <span className={styles.breadcrumbSeparator}>/</span>
            <a href="#" className={styles.breadcrumbLink}>Kia</a>
            <span className={styles.breadcrumbSeparator}>/</span>
            <span className={styles.breadcrumbActive}>Telluride</span>
          </div>
          <button 
            className={styles.favoritesButton}
            onClick={() => setIsFavorited(!isFavorited)}
          >
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill={isFavorited ? "#0061af" : "none"} 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            {isFavorited ? 'REMOVE FROM FAVORITES' : 'ADD TO FAVORITES'}
          </button>
        </div>

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
          <span className={styles.badge}>
            <Image 
              src={tenBestIcon} 
              alt="10Best" 
              width={16} 
              height={16} 
              className={styles.badgeIcon}
            />
            10Best
          </span>
          <span className={styles.badge}>
            <Image 
              src={editorsChoiceIcon} 
              alt="Editor's Choice" 
              width={16} 
              height={16} 
              className={styles.badgeIcon}
            />
            Editor's Choice
          </span>
          <span className={styles.badge}>Full-Size SUV</span>
        </div>

        <h1 className={styles.title}>{selectedYear} Kia Telluride</h1>
        <p className={styles.tagline}>#1 in Full-Size SUVs</p>
        <p className={styles.intro}>
          The Telluride remains at the top of the class, delivering plenty of space and a handsomely-trimmed cabin that approaches luxury standards.
        </p>

        <div className={styles.imageSection}>
          <div className={styles.mainImageContainer}>
            <img 
              src={selectedImage} 
              alt={`${selectedYear} Kia Telluride`} 
              className={styles.mainImage}
            />
          </div>
          <div className={styles.thumbnails}>
            {allImages.slice(0, 2).map((image, index) => (
              <button
                key={index}
                className={`${styles.thumbnail} ${selectedImage === image ? styles.thumbnailActive : ''}`}
                onClick={() => setSelectedImage(image)}
              >
                <img 
                  src={image} 
                  alt={`View ${index + 1}`}
                  className={styles.thumbnailImage}
                />
              </button>
            ))}
            <button className={styles.viewMoreButton}>
              VIEW MORE PHOTOS →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
