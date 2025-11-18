'use client'

import { useState, useEffect } from 'react'
import styles from './StickyNavHero.module.css'

const navItems = [
  { id: 'pros-cons', label: 'Summary' },
  { id: 'gallery', label: 'Photos' },
  { id: 'ai-overview', label: 'Overview' },
  { id: 'listings', label: 'For Sale Near You' },
  { id: 'review', label: 'Review' },
]

interface StickyNavHeroProps {
  vehicleName?: string
  price?: string
}

export default function StickyNavHero({ vehicleName = '2025 Kia Telluride', price = '$37,885–$55,180' }: StickyNavHeroProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isFavorited, setIsFavorited] = useState(false)
  const [activeSection, setActiveSection] = useState('pros-cons')

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky nav after scrolling past hero section (approximately 805px)
      const scrollY = window.scrollY
      setIsVisible(scrollY > 600)

      // Update active section
      const sections = navItems.map(item => {
        const element = document.getElementById(item.id)
        return { id: item.id, element, top: element?.getBoundingClientRect().top || 0 }
      })

      const currentSection = sections.find(
        (section, index) => 
          section.top <= 100 && 
          (index === sections.length - 1 || sections[index + 1].top > 100)
      )

      if (currentSection) {
        setActiveSection(currentSection.id)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  const handleFavorite = () => {
    setIsFavorited(!isFavorited)
  }

  if (!isVisible) return null

  return (
    <nav className={styles.stickyNav}>
      <div className={styles.navContainer}>
        <div className={styles.leftSection}>
          <div className={styles.vehicleInfo}>
            <h3 className={styles.vehicleName}>{vehicleName}</h3>
            <p className={styles.price}>{price}</p>
          </div>
          <div className={styles.navLinks}>
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`${styles.navItem} ${activeSection === item.id ? styles.active : ''}`}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
        <div className={styles.rightSection}>
          <button 
            className={styles.favoriteButton}
            onClick={handleFavorite}
            aria-label="Add to favorites"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path 
                d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.03L12 21.35Z" 
                stroke={isFavorited ? "#D2232A" : "#1b5f8a"} 
                strokeWidth="2" 
                fill={isFavorited ? "#D2232A" : "none"}
              />
            </svg>
          </button>
          <button 
            className={styles.shopButton}
            onClick={() => scrollToSection('listings')}
          >
            SHOP LOCAL LISTINGS
          </button>
        </div>
      </div>
    </nav>
  )
}

