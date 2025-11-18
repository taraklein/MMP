'use client'

import { useState, useEffect } from 'react'
import styles from './StickyNavMMP2.module.css'

const navItems = [
  { id: 'specs', label: 'Specs' },
  { id: 'pros-cons', label: 'Pros & Cons' },
  { id: 'quote', label: 'Editorial Quote' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'review', label: 'Review' },
]

export default function StickyNavMMP2() {
  const [activeSection, setActiveSection] = useState('specs')

  useEffect(() => {
    const handleScroll = () => {
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
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <nav className={styles.stickyNav}>
      <div className={styles.navContainer}>
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
    </nav>
  )
}
