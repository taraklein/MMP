'use client'

import { useState, useEffect, useRef } from 'react'
import styles from './PricingSection.module.css'

interface Trim {
  name: string
  price: number
  recommended?: boolean
  features: [string, string]
  fuelEconomy: string
}

const trims: Trim[] = [
  { name: 'LX', price: 37885, features: ['291 hp 3.8L V6 Engine', '8-Inch Touchscreen Display'], fuelEconomy: '20/26 mpg' },
  { name: 'S', price: 40885, features: ['Forward Collision-Avoidance Assist', 'Wireless Apple CarPlay®'], fuelEconomy: '20/26 mpg' },
  { name: 'EX', price: 43585, features: ['Blind-Spot Collision-Avoidance Assist', '10.25-Inch Touchscreen'], fuelEconomy: '20/26 mpg' },
  { name: 'SX', price: 47685, recommended: true, features: ['Harman/Kardon Premium Audio', 'Dual Sunroofs'], fuelEconomy: '20/26 mpg' },
  { name: 'EX X-Line', price: 47980, features: ['All-Wheel Drive', 'X-Line Exterior Styling'], fuelEconomy: '19/24 mpg' },
  { name: 'EX X-Pro', price: 48880, features: ['All-Wheel Drive', 'X-Pro Off-Road Package'], fuelEconomy: '19/24 mpg' },
  { name: 'SX X-Line', price: 51380, features: ['Harman/Kardon Premium Audio', 'X-Line Exterior Styling'], fuelEconomy: '19/24 mpg' },
  { name: 'SX Prestige', price: 52885, features: ['Nappa Leather Seating', 'Surround View Monitor'], fuelEconomy: '19/24 mpg' },
  { name: 'SX Prestige X-Line', price: 54280, features: ['Nappa Leather Seating', 'X-Line Exterior Styling'], fuelEconomy: '19/24 mpg' },
  { name: 'SX Prestige X-Pro', price: 55180, features: ['Nappa Leather Seating', 'X-Pro Off-Road Package'], fuelEconomy: '19/24 mpg' },
]

const basePrice = 37885
const maxPrice = 55180
const priceRange = maxPrice - basePrice

export default function PricingSection() {
  const [hoveredTrim, setHoveredTrim] = useState<string | null>(null)
  const [selectedTrims, setSelectedTrims] = useState<Set<string>>(new Set())
  const [isExpanded, setIsExpanded] = useState(false)
  const [carouselIndex, setCarouselIndex] = useState(0)
  const [cardWidth, setCardWidth] = useState<string>('')
  const carouselContainerRef = useRef<HTMLDivElement>(null)
  
  const maxSelections = 5
  const initialTrimCount = 4
  
  // Find the recommended trim
  const recommendedTrim = trims.find(trim => trim.recommended)
  const recommendedIndex = recommendedTrim ? trims.indexOf(recommendedTrim) : -1
  
  // If not expanded, show first 4 trims, but always include recommended trim if it exists
  const getDisplayedTrims = () => {
    if (isExpanded) {
      return trims
    }
    
    const firstFour = trims.slice(0, initialTrimCount)
    
    // If recommended trim is already in first four, return first four
    if (recommendedIndex >= 0 && recommendedIndex < initialTrimCount) {
      return firstFour
    }
    
    // If recommended trim exists but is not in first four, include it
    if (recommendedTrim) {
      // Get first 3, then add recommended trim
      const firstThree = trims.slice(0, initialTrimCount - 1)
      return [...firstThree, recommendedTrim]
    }
    
    return firstFour
  }
  
  const displayedTrims = getDisplayedTrims()
  
  // Separate recommended trim from others for carousel
  // Use all trims for the carousel, not just displayed ones
  const getCarouselTrims = () => {
    if (!recommendedTrim) return trims

    const others = trims.filter(t => !t.recommended)

    return others
  }

  const carouselTrims = getCarouselTrims()
  
  // Reset carousel index when expanded state changes
  useEffect(() => {
    setCarouselIndex(0)
  }, [isExpanded])

  // Calculate consistent card width
  useEffect(() => {
    const calculateCardWidth = () => {
      if (!carouselContainerRef.current) return
      
      const container = carouselContainerRef.current
      const containerWidth = container.offsetWidth
      const buttons = 2 * 28 // 2 buttons at 28px each (smaller arrows)
      const gaps = 3 * 10 // 3 gaps at 10px each (reduced gap)
      const cardWidthPx = (containerWidth - buttons - gaps) / 3
      
      setCardWidth(`${cardWidthPx}px`)
    }

    calculateCardWidth()
    window.addEventListener('resize', calculateCardWidth)
    return () => window.removeEventListener('resize', calculateCardWidth)
  }, [])
  
  const toggleTrimSelection = (trimName: string) => {
    setSelectedTrims(prev => {
      const newSet = new Set(prev)
      if (newSet.has(trimName)) {
        newSet.delete(trimName)
      } else {
        if (newSet.size < maxSelections) {
          newSet.add(trimName)
        }
      }
      return newSet
    })
  }
  
  const isTrimSelected = (trimName: string) => selectedTrims.has(trimName)
  const canSelectMore = selectedTrims.size < maxSelections

  const handleShopTrim = (trimName: string) => {
    // In a real implementation, this would navigate to a shop page filtered by trim
    console.log(`Shopping for ${trimName} trim`)
    // Example: window.location.href = `/shop/kia-telluride?trim=${encodeURIComponent(trimName)}`
  }

  const handleShopNow = () => {
    if (selectedTrims.size > 0) {
      // Shop for selected trims
      const trimList = Array.from(selectedTrims).join(', ')
      console.log(`Shopping for selected trims: ${trimList}`)
      // Example: window.location.href = `/shop/kia-telluride?trims=${encodeURIComponent(trimList)}`
    } else {
      // Shop for all trims
      console.log('Shopping for all Kia Telluride trims')
      // Example: window.location.href = '/shop/kia-telluride'
    }
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  const getPriceDifference = (price: number) => {
    const diff = price - basePrice
    if (diff === 0) return null
    return diff > 0 ? `+${formatPrice(diff)}` : formatPrice(diff)
  }


  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Pricing and Which One to Buy</h2>
        
        <p className={styles.intro}>
          The price of the 2025 Kia Telluride starts at $37,885 and goes up to $55,180 depending on the trim and options.
        </p>

        <div className={styles.recommendation}>
          <p className={styles.recommendationText}>
            We can&apos;t resist recommending the <strong>SX trim</strong>. It delivers a near-luxury experience with all of the important options at a still-reasonable price. The SX comes standard with high-end features including a 10-way power driver&apos;s seat, black-painted 20-inch rims, a Harman/Kardon stereo, front and rear sunroofs, and second-row captain&apos;s chairs. Those who want the added sense of security that comes with all-wheel drive can have it for an extra $2000.
          </p>
        </div>

                {/* Card-Based Layout */}
                <div className={styles.cardsSection}>
                  <div className={styles.cardsTitleRow}>
                    <h3 className={styles.cardsTitle}>Compare Trims</h3>
                    <div className={styles.titleActions}>
                      <span className={styles.selectionIndicator}>
                        {selectedTrims.size} of {maxSelections} selected
                      </span>
                      <button
                        className={styles.compareTrimsButton}
                        disabled={selectedTrims.size === 0}
                        onClick={() => {
                          // Handle compare action
                          console.log(`Comparing ${selectedTrims.size} trims:`, Array.from(selectedTrims))
                        }}
                      >
                        COMPARE {selectedTrims.size > 0 ? `${selectedTrims.size} ` : ''}TRIM{selectedTrims.size !== 1 ? 'S' : ''}
                      </button>
                    </div>
                  </div>
                  <p className={styles.cardsSubtitle}>Select up to 5 trims to compare features, specs, prices, and performance.</p>
                  <div className={styles.carouselContainer} ref={carouselContainerRef}>
                    {/* Fixed Recommended Trim Card */}
                    {recommendedTrim && (
                      <div 
                        className={styles.fixedRecommendedCard}
                        style={cardWidth ? { width: cardWidth, flex: `0 0 ${cardWidth}`, maxWidth: cardWidth } : {}}
                      >
                        {(() => {
                          const trim = recommendedTrim
                          const isHovered = hoveredTrim === trim.name
                          const isSelected = isTrimSelected(trim.name)
                          const canSelect = canSelectMore || isSelected

                          return (
                            <div
                              className={`${styles.trimCard} ${styles.recommendedCard} ${isHovered ? styles.hoveredCard : ''} ${isSelected ? styles.selectedCard : ''}`}
                              onMouseEnter={() => setHoveredTrim(trim.name)}
                              onMouseLeave={() => setHoveredTrim(null)}
                            >
                              <div className={styles.cardHeader}>
                                <div className={styles.cardTrimInfo}>
                                  <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    className={styles.cardCheckmark}
                                  >
                                    <path
                                      d="M13.3333 4L6 11.3333L2.66667 8"
                                      stroke="#26870D"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                  <h4 className={styles.cardRecommendedTrim}>
                                    {trim.name}
                                  </h4>
                                  <span className={styles.cardRecommendedBadge}>Recommended</span>
                                </div>
                                <button
                                  className={`${styles.cardSelectButton} ${isSelected ? styles.cardSelectedButton : ''} ${!canSelect ? styles.cardDisabledButton : ''}`}
                                  onClick={() => toggleTrimSelection(trim.name)}
                                  disabled={!canSelect}
                                  aria-label={isSelected ? `Deselect ${trim.name}` : `Select ${trim.name} for comparison`}
                                >
                                  {isSelected ? (
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      className={styles.cardCheckIcon}
                                    >
                                      <path
                                        d="M13.3333 4L6 11.3333L2.66667 8"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  ) : (
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      className={styles.cardPlusIcon}
                                    >
                                      <path
                                        d="M8 3V13M3 8H13"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                      />
                                    </svg>
                                  )}
                                </button>
                              </div>

                              <div className={styles.cardPriceSection}>
                                <div className={styles.cardPrice}>{formatPrice(trim.price)}</div>
                                <div className={styles.cardFuelEconomy}>{trim.fuelEconomy}</div>
                              </div>

                              <div className={styles.cardFeatures}>
                                <ul className={styles.cardFeaturesList}>
                                  <li className={styles.cardFeatureItem}>{trim.features[0]}</li>
                                  <li className={styles.cardFeatureItem}>{trim.features[1]}</li>
                                </ul>
                              </div>

                              <div className={styles.cardActions}>
                                <button 
                                  className={styles.cardShopButton}
                                  onClick={() => handleShopTrim(trim.name)}
                                  aria-label={`Shop for ${trim.name} trim`}
                                >
                                  Shop
                                  <svg
                                    width="10"
                                    height="10"
                                    viewBox="0 0 12 12"
                                    fill="none"
                                    className={styles.cardShopIcon}
                                  >
                                    <path
                                      d="M4.5 9L7.5 6L4.5 3"
                                      stroke="currentColor"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </button>
                              </div>
                            </div>
                          )
                        })()}
                      </div>
                    )}
                    <button
                      className={styles.carouselButton}
                      onClick={() => {
                        setCarouselIndex(prev => Math.max(0, prev - 1))
                      }}
                      disabled={carouselIndex === 0}
                      aria-label="Previous trims"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 16 16"
                        fill="none"
                        className={styles.carouselArrow}
                      >
                        <path
                          d="M10 12L6 8L10 4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    <div className={styles.carouselWrapper}>
                      <div 
                        className={styles.cardsGrid}
                        style={{ 
                          transform: cardWidth 
                            ? `translateX(-${carouselIndex * (parseFloat(cardWidth.replace('px', '')) + 10)}px)`
                            : `translateX(-${carouselIndex * (100 / 2)}%)`,
                          '--card-width': cardWidth
                        } as React.CSSProperties}
                      >
                        {carouselTrims.map((trim) => {
                          const isHovered = hoveredTrim === trim.name
                          const isSelected = isTrimSelected(trim.name)
                          const canSelect = canSelectMore || isSelected

                          return (
                            <div
                              key={trim.name}
                              className={`${styles.trimCard} ${isHovered ? styles.hoveredCard : ''} ${isSelected ? styles.selectedCard : ''}`}
                              onMouseEnter={() => setHoveredTrim(trim.name)}
                              onMouseLeave={() => setHoveredTrim(null)}
                              style={cardWidth ? { width: cardWidth, flex: `0 0 ${cardWidth}`, maxWidth: cardWidth } : {}}
                            >
                              <div className={styles.cardHeader}>
                                <div className={styles.cardTrimInfo}>
                                  <h4 className={styles.cardTrimName}>
                                    {trim.name}
                                  </h4>
                                </div>
                                <button
                                  className={`${styles.cardSelectButton} ${isSelected ? styles.cardSelectedButton : ''} ${!canSelect ? styles.cardDisabledButton : ''}`}
                                  onClick={() => toggleTrimSelection(trim.name)}
                                  disabled={!canSelect}
                                  aria-label={isSelected ? `Deselect ${trim.name}` : `Select ${trim.name} for comparison`}
                                >
                                  {isSelected ? (
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      className={styles.cardCheckIcon}
                                    >
                                      <path
                                        d="M13.3333 4L6 11.3333L2.66667 8"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  ) : (
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      className={styles.cardPlusIcon}
                                    >
                                      <path
                                        d="M8 3V13M3 8H13"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                      />
                                    </svg>
                                  )}
                                </button>
                              </div>

                              <div className={styles.cardPriceSection}>
                                <div className={styles.cardPrice}>{formatPrice(trim.price)}</div>
                                <div className={styles.cardFuelEconomy}>{trim.fuelEconomy}</div>
                              </div>

                              <div className={styles.cardFeatures}>
                                <ul className={styles.cardFeaturesList}>
                                  <li className={styles.cardFeatureItem}>{trim.features[0]}</li>
                                  <li className={styles.cardFeatureItem}>{trim.features[1]}</li>
                                </ul>
                              </div>

                              <div className={styles.cardActions}>
                                <button 
                                  className={styles.cardShopButton}
                                  onClick={() => handleShopTrim(trim.name)}
                                  aria-label={`Shop for ${trim.name} trim`}
                                >
                                  Shop
                                  <svg
                                    width="10"
                                    height="10"
                                    viewBox="0 0 12 12"
                                    fill="none"
                                    className={styles.cardShopIcon}
                                  >
                                    <path
                                      d="M4.5 9L7.5 6L4.5 3"
                                      stroke="currentColor"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </button>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                    <button
                      className={styles.carouselButton}
                      onClick={() => {
                        const numVisibleCardsInCarousel = 2 // Number of scrolling cards visible at once
                        const maxIndex = Math.max(0, carouselTrims.length - numVisibleCardsInCarousel)
                        setCarouselIndex(prev => Math.min(maxIndex, prev + 1))
                      }}
                      disabled={carouselIndex >= Math.max(0, carouselTrims.length - 2)}
                      aria-label="Next trims"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 16 16"
                        fill="none"
                        className={styles.carouselArrow}
                      >
                        <path
                          d="M6 12L10 8L6 4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

        {/* Table Layout */}
        <div className={styles.tableSection}>
          <h3 className={styles.tableTitle}>Detailed Comparison</h3>
          <div className={styles.tableWrapper}>
          <table className={styles.pricingTable}>
            <thead>
              <tr>
                <th className={styles.trimHeader}>Trim</th>
                <th className={styles.featuresHeader}>Key Features</th>
                <th className={styles.fuelEconomyHeader}>Fuel Economy</th>
                <th className={styles.priceHeader}>Price</th>
                <th className={styles.selectHeader}>
                  <div className={styles.compareHeaderContent}>
                    <span>Compare</span>
                  </div>
                </th>
              </tr>
              <tr className={styles.selectionInfoRow}>
                <th className={styles.trimHeader}></th>
                <th className={styles.featuresHeader}></th>
                <th className={styles.fuelEconomyHeader}></th>
                <th className={styles.priceHeader}></th>
                <th className={styles.selectHeader}>
                  <div className={styles.selectionInfo}>
                    <span className={styles.selectionText}>
                      Select up to {maxSelections}
                    </span>
                    {selectedTrims.size > 0 && (
                      <span className={styles.selectionCount}>
                        {selectedTrims.size} selected
                      </span>
                    )}
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {displayedTrims.map((trim) => {
                const isHovered = hoveredTrim === trim.name
                const isRecommended = trim.recommended
                const isSelected = isTrimSelected(trim.name)
                const canSelect = canSelectMore || isSelected

                return (
                  <tr
                    key={trim.name}
                    className={`${styles.tableRow} ${isRecommended ? styles.recommendedRow : ''} ${isHovered ? styles.hoveredRow : ''} ${isSelected ? styles.selectedRow : ''}`}
                    onMouseEnter={() => setHoveredTrim(trim.name)}
                    onMouseLeave={() => setHoveredTrim(null)}
                  >
                    <td className={styles.trimCell}>
                      <div className={styles.trimCellContent}>
                        {isRecommended && (
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            className={styles.checkmark}
                          >
                            <path
                              d="M13.3333 4L6 11.3333L2.66667 8"
                              stroke="#26870D"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                        <span className={isRecommended ? styles.recommendedTrim : styles.trimName}>
                          {trim.name}
                        </span>
                        {isRecommended && (
                          <span className={styles.recommendedBadge}>Recommended</span>
                        )}
                      </div>
                    </td>
                    <td className={styles.featuresCell}>
                      <ul className={styles.featuresList}>
                        <li className={styles.featureItem}>{trim.features[0]}</li>
                        <li className={styles.featureItem}>{trim.features[1]}</li>
                      </ul>
                    </td>
                    <td className={styles.fuelEconomyCell}>
                      <span className={styles.fuelEconomyText}>{trim.fuelEconomy}</span>
                    </td>
                    <td className={styles.priceCell}>
                      <div className={styles.priceCellContent}>
                        <div className={styles.priceRow}>
                          <span className={isRecommended ? styles.recommendedPrice : styles.price}>
                            {formatPrice(trim.price)}
                          </span>
                          <button 
                            className={styles.shopLink}
                            onClick={() => handleShopTrim(trim.name)}
                            aria-label={`Shop for ${trim.name} trim`}
                          >
                            Shop
                            <svg
                              width="10"
                              height="10"
                              viewBox="0 0 12 12"
                              fill="none"
                              className={styles.shopLinkIcon}
                            >
                              <path
                                d="M4.5 9L7.5 6L4.5 3"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </td>
                    <td className={styles.selectCell}>
                      <button
                        className={`${styles.selectButton} ${isSelected ? styles.selectedButton : ''} ${!canSelect ? styles.disabledButton : ''}`}
                        onClick={() => toggleTrimSelection(trim.name)}
                        disabled={!canSelect}
                        aria-label={isSelected ? `Deselect ${trim.name}` : `Select ${trim.name} for comparison`}
                      >
                        {isSelected ? (
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            className={styles.checkIcon}
                          >
                            <path
                              d="M13.3333 4L6 11.3333L2.66667 8"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        ) : (
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            className={styles.plusIcon}
                          >
                            <path
                              d="M8 3V13M3 8H13"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                          </svg>
                        )}
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          
          {(() => {
            // Calculate how many trims are hidden
            const hiddenCount = trims.length - displayedTrims.length
            // Always show button if expanded, or if there are hidden trims
            if (isExpanded || hiddenCount > 0) {
              return (
                <div className={styles.showMoreContainer}>
                  <button 
                    className={styles.showMoreButton}
                    onClick={() => setIsExpanded(!isExpanded)}
                  >
                    {isExpanded ? 'Show Less' : `Show ${hiddenCount} More Trim${hiddenCount !== 1 ? 's' : ''}`}
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 16 16"
                      fill="none"
                      className={`${styles.showMoreIcon} ${isExpanded ? styles.rotated : ''}`}
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
                </div>
              )
            }
            return null
          })()}
        </div>
        </div>

        <div className={styles.buttons}>
          <button 
            className={styles.shopButton}
            onClick={handleShopNow}
          >
            SHOP KIA TELLURIDES
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              className={styles.arrowIcon}
            >
              <path
                d="M6 12L10 8L6 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button 
            className={styles.compareButton}
            disabled={selectedTrims.size === 0}
          >
            COMPARE SELECTED TRIMS
          </button>
        </div>
      </div>
    </section>
  )
}
