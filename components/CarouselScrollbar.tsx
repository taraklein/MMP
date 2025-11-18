'use client'

import { useRef, useState } from 'react'
import styles from './CarouselScrollbar.module.css'

interface CarouselScrollbarProps {
  items: React.ReactNode[]
}

export default function CarouselScrollbar({ items }: CarouselScrollbarProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)

  const handleScroll = () => {
    if (!scrollContainerRef.current) return

    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
    setShowLeftArrow(scrollLeft > 0)
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10)
  }

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return

    const scrollAmount = 300
    const currentScroll = scrollContainerRef.current.scrollLeft
    const newScroll = direction === 'left' 
      ? currentScroll - scrollAmount 
      : currentScroll + scrollAmount

    scrollContainerRef.current.scrollTo({
      left: newScroll,
      behavior: 'smooth'
    })
  }

  return (
    <div className={styles.carousel}>
      {showLeftArrow && (
        <button 
          className={`${styles.arrow} ${styles.arrowLeft}`}
          onClick={() => scroll('left')}
          aria-label="Scroll left"
        >
          ‹
        </button>
      )}
      <div 
        className={styles.scrollContainer}
        ref={scrollContainerRef}
        onScroll={handleScroll}
      >
        <div className={styles.items}>
          {items.map((item, index) => (
            <div key={index} className={styles.item}>
              {item}
            </div>
          ))}
        </div>
      </div>
      {showRightArrow && (
        <button 
          className={`${styles.arrow} ${styles.arrowRight}`}
          onClick={() => scroll('right')}
          aria-label="Scroll right"
        >
          ›
        </button>
      )}
    </div>
  )
}
