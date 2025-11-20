'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './RightSidebar.module.css'
import Image from 'next/image'

const tenBestIcon = "/images/awards/ten-best.bcb6ac1.svg"
const editorsChoiceIcon = "/images/awards/editors-choice.7ecd596.svg"

export default function RightSidebar() {
  const stickyRef = useRef<HTMLDivElement>(null)
  const readReviewButtonRef = useRef<HTMLButtonElement>(null)
  const [bottomConstraint, setBottomConstraint] = useState<number | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!stickyRef.current || !readReviewButtonRef.current) return

      // Find the Pros and Cons section
      const prosConsSection = document.getElementById('pros-cons')
      if (!prosConsSection) return

      // Get the sidebar container (aside element)
      const sidebarElement = stickyRef.current.closest('aside')
      if (!sidebarElement) return

      // Get positions relative to viewport
      const prosConsRect = prosConsSection.getBoundingClientRect()
      const prosConsBottomViewport = prosConsRect.bottom
      
      const stickyRect = stickyRef.current.getBoundingClientRect()
      const buttonRect = readReviewButtonRef.current.getBoundingClientRect()
      
      // Calculate the distance from sticky top to button bottom
      const buttonOffsetFromStickyTop = buttonRect.bottom - stickyRect.top
      
      // When sticky, the sidebar top is at 24px from viewport top
      // We want the button bottom to align with Pros and Cons bottom
      // So: 24px + buttonOffsetFromStickyTop should equal prosConsBottomViewport
      // If button bottom is already at or past Pros and Cons bottom, apply bottom constraint
      // The bottom constraint = viewport height - prosConsBottomViewport
      // This ensures the sticky element's bottom edge is at prosConsBottomViewport
      if (buttonRect.bottom >= prosConsBottomViewport) {
        const calculatedBottom = window.innerHeight - prosConsBottomViewport
        setBottomConstraint(calculatedBottom)
      } else {
        setBottomConstraint(null)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })
    
    // Initial check after a small delay to ensure DOM is ready
    const timeoutId = setTimeout(handleScroll, 100)

    return () => {
      clearTimeout(timeoutId)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  return (
    <aside className={styles.sidebar}>
      <div 
        ref={stickyRef} 
        className={styles.sticky}
        style={bottomConstraint !== null ? { bottom: `${bottomConstraint}px` } : undefined}
      >
        <div className={`${styles.card} ${styles.ratingCard}`}>
          <div className={styles.ratingBox}>
            <div className={styles.ratingLeft}>
              <div className={styles.ratingHeader}>
                <span className={styles.ratingLabel}>C/D RATING</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 2L12.09 7.26L18 8.27L14 12.14L14.91 18.02L10 15.77L5.09 18.02L6 12.14L2 8.27L7.91 7.26L10 2Z" fill="#fff"/>
                </svg>
              </div>
            </div>
            <div className={styles.ratingRight}>
              <div className={styles.ratingScore}>10/10</div>
              <div className={styles.ratingText}>Exceptional</div>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Pricing</h3>
          <div className={styles.priceRange}>MSRP RANGE</div>
          <div className={styles.priceValue}>$37,885–$55,180</div>
          <div className={styles.priceLink}>
            &gt; See how this vehicle&apos;s price has changed
          </div>
          <div className={styles.priceButtons}>
            <button className={styles.primaryButton}>SHOP LOCAL LISTINGS</button>
            <button className={styles.secondaryButton}>GET YOUR TRADE-IN VALUE</button>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.awardsHeader}>
            <h3 className={styles.cardTitle}>C/D Awards</h3>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={styles.infoIcon}>
              <circle cx="8" cy="8" r="7" stroke="#999" strokeWidth="1.5"/>
              <path d="M8 5V8M8 11H8.01" stroke="#999" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <div className={styles.awards}>
            <div className={styles.awardBadge}>
              <Image src={tenBestIcon} alt="10Best" width={32} height={32} />
              <span>10Best 2025 Winner</span>
            </div>
            <div className={styles.awardBadge}>
              <Image src={editorsChoiceIcon} alt="Editor's Choice" width={32} height={32} />
              <span>Editor&apos;s Choice 2025 Winner</span>
            </div>
          </div>
        </div>

        <div className={`${styles.card} ${styles.shoppingCard}`}>
          <h3 className={styles.cardTitle}>Shopping for this Car? Here are some next steps:</h3>
          <div className={styles.nextSteps}>
            <button className={styles.nextStepButton}>
              COMPARE WITH TOP COMPETITORS →
            </button>
            <button className={styles.nextStepButton}>
              SEE ALL SPECIFICATIONS →
            </button>
            <button ref={readReviewButtonRef} className={styles.nextStepButton}>
              READ FULL REVIEW →
            </button>
          </div>
        </div>
      </div>
    </aside>
  )
}
