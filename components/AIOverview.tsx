'use client'

import { useState, useEffect } from 'react'
import styles from './AIOverview.module.css'

export default function AIOverview() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isTyping, setIsTyping] = useState(false)
  const [typedText, setTypedText] = useState<{ [key: string]: string }>({})

  const fullTexts = {
    keyDifferences: "The Pilot is a <strong>three-row SUV that seats up to eight passengers</strong>, while the Passport is a <strong>two-row SUV that seats five</strong>. The Pilot is larger at <strong>200.2 inches long</strong>, compared to the Passport's <strong>191.5 inches</strong>. The Pilot offers more total cargo volume with <strong>87 cubic feet</strong> behind the first row, versus the Passport's <strong>83 cubic feet</strong>. In performance testing, the 2023 Pilot TrailSport reached 60 mph in <strong>6.9 seconds</strong>, while the 2026 Passport TrailSport took <strong>7.3 seconds</strong>. Both share the same 285-hp 3.5-liter V-6 engine and 10-speed automatic transmission. The Passport comes <strong>standard with all-wheel drive</strong>, while the Pilot offers it as an option with <strong>front-wheel drive as standard</strong>.",
    passport: "The redesigned Passport gets buff for 2026 with rugged styling and a significantly improved all-wheel-drive system. This <strong>two-row SUV seats 5 passengers</strong> and starts at <strong>$46,245</strong>. It uses the same 285-hp 3.5-liter V-6 and 10-speed automatic as the Pilot, but features Honda's new <strong>i-VTM4 torque-vectoring all-wheel-drive system</strong>. The TrailSport trim emphasizes <strong>off-road capability</strong> with all-terrain tires and skid plates. The new Passport backs up its burly design with improved rock-crawling skills while maintaining practicality and comfort. EPA ratings are <strong>21 mpg combined</strong>, though testing of the TrailSport showed <strong>25 mpg on the highway</strong>.",
    pilot: "The Pilot is a sensible <strong>three-row family hauler that seats up to eight passengers</strong>. Starting at <strong>$43,690</strong>, it uses the same 285-hp V-6 as the Passport but offers <strong>front-wheel drive as standard</strong>. The interior is spacious but lacks the wow factor of some rivals. Testing of a 2023 Pilot Elite showed <strong>disappointing braking performance</strong>. Despite this, the Pilot remains a practical choice for families needing <strong>maximum seating capacity and cargo space</strong>.",
    disclaimer: "We are committed to transparency in our usage of artificial intelligence (AI). These vehicle summaries are generated using AI trained on content previously published on CarandDriver.com. In other words, the information you will read here is based on our editorial staff's rigorous testing, comprehensive reviews, and expertise."
  }

  useEffect(() => {
    // Initial loading sequence
    const loadingTimer = setTimeout(() => {
      setIsLoading(false)
      setIsTyping(true)
    }, 2000) // 2 seconds of thinking

    return () => clearTimeout(loadingTimer)
  }, [])

  useEffect(() => {
    if (!isTyping || isLoading) return

    const textKeys: Array<'keyDifferences' | 'passport'> = ['keyDifferences', 'passport']
    let currentKeyIndex = 0
    let currentCharIndex = 0
    let timeoutId: NodeJS.Timeout | null = null

    const typeText = () => {
      if (currentKeyIndex >= textKeys.length) {
        setIsTyping(false)
        // Ensure full text is set
        setTypedText(prev => ({
          ...prev,
          keyDifferences: fullTexts.keyDifferences,
          passport: fullTexts.passport
        }))
        return
      }

      const currentKey = textKeys[currentKeyIndex]
      const currentText = fullTexts[currentKey]

      if (currentCharIndex < currentText.length) {
        setTypedText(prev => ({
          ...prev,
          [currentKey]: currentText.substring(0, currentCharIndex + 1)
        }))
        currentCharIndex++
        timeoutId = setTimeout(typeText, 3) // Typing speed - ChatGPT-like
      } else {
        currentKeyIndex++
        currentCharIndex = 0
        timeoutId = setTimeout(typeText, 100) // Pause between sections
      }
    }

    typeText()

    return () => {
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [isTyping, isLoading])

  const toggleExpand = () => {
    const willExpand = !isExpanded
    setIsExpanded(willExpand)
    
    // Set all expanded content immediately (no typing animation)
    if (willExpand) {
      setTypedText(prev => ({
        ...prev,
        pilot: fullTexts.pilot,
        disclaimer: fullTexts.disclaimer
      }))
    }
  }

  return (
    <section id="ai-overview" className={styles.section}>
      <div className={`${styles.container} ${isExpanded ? styles.expanded : styles.collapsed}`}>
        <div className={styles.headerCard}>
          <h2 className={styles.title}>AI Overview</h2>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={styles.sparkle}>
            <path
              d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z"
              fill="#fff"
            />
          </svg>
        </div>
        
        <div className={`${styles.contentCard} ${isLoading ? styles.loading : ''}`}>
          {isLoading && (
            <div className={styles.loadingOverlay}>
              <div className={styles.thinkingAnimation}>
                <div className={styles.thinkingDot}></div>
                <div className={styles.thinkingDot}></div>
                <div className={styles.thinkingDot}></div>
              </div>
            </div>
          )}
          <h3 className={styles.subtitle}>Key Differences</h3>
          <p className={styles.description} dangerouslySetInnerHTML={{
            __html: (typedText.keyDifferences || fullTexts.keyDifferences) + (isTyping && typedText.keyDifferences && typedText.keyDifferences.length < fullTexts.keyDifferences.length ? '<span class="' + styles.cursor + '">|</span>' : '')
          }} />
        </div>

        <div className={`${styles.contentCard} ${isLoading ? styles.loading : ''}`}>
          {isLoading && (
            <div className={styles.loadingOverlay}>
              <div className={styles.thinkingAnimation}>
                <div className={styles.thinkingDot}></div>
                <div className={styles.thinkingDot}></div>
                <div className={styles.thinkingDot}></div>
              </div>
            </div>
          )}
          <h3 className={styles.subtitle}>What You Need to Know</h3>
          <div className={styles.textContent}>
            <div>
              <h4 className={styles.carName}>2026 Honda Passport</h4>
              <p className={styles.description} dangerouslySetInnerHTML={{
                __html: (typedText.passport || fullTexts.passport) + (isTyping && typedText.passport && typedText.passport.length < fullTexts.passport.length ? '<span class="' + styles.cursor + '">|</span>' : '')
              }} />
            </div>
            <div className={`${styles.expandableContent} ${isExpanded ? styles.expanded : styles.collapsed}`}>
              <div>
                <h4 className={styles.carName}>2026 Honda Pilot</h4>
                <p className={styles.description} dangerouslySetInnerHTML={{
                  __html: (typedText.pilot || fullTexts.pilot) + (isTyping && typedText.pilot && typedText.pilot.length < fullTexts.pilot.length ? '<span class="' + styles.cursor + '">|</span>' : '')
                }} />
              </div>
            </div>
          </div>
        </div>
        
            <div className={`${styles.expandableContent} ${isExpanded ? styles.expanded : styles.collapsed}`}>
              <div className={styles.disclaimerCard}>
                <p className={styles.disclaimerText}>
                  {typedText.disclaimer || fullTexts.disclaimer}
                </p>
              </div>
            </div>

        {!isExpanded && <div className={styles.fadeOverlay}></div>}
        {!isExpanded && (
          <button 
            className={styles.readMoreButton} 
            onClick={toggleExpand}
            aria-expanded={isExpanded}
            disabled={isLoading}
            style={{ opacity: isLoading ? 0 : 1, pointerEvents: isLoading ? 'none' : 'auto' }}
          >
            {isExpanded ? 'Read less' : 'Read more'}
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 16 16" 
              fill="none" 
              className={`${styles.chevron} ${isExpanded ? styles.chevronExpanded : ''}`}
            >
              <path
                d="M4 6L8 10L12 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}
      </div>
      {isExpanded && (
        <button 
          className={`${styles.readMoreButton} ${styles.readMoreButtonExpanded}`} 
          onClick={toggleExpand}
          aria-expanded={isExpanded}
        >
          {isExpanded ? 'Read less' : 'Read more'}
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 16 16" 
            fill="none" 
            className={`${styles.chevron} ${isExpanded ? styles.chevronExpanded : ''}`}
          >
            <path
              d="M4 6L8 10L12 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}
    </section>
  )
}


