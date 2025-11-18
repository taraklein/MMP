import styles from './CarListings.module.css'

const listings = [
  {
    image: "/images/listings/simari-telluride-comparo.png",
    year: "2025",
    model: "2025 Kia Telluride",
    package: "SX Prestige Package",
    price: "$45,890",
    dealer: "Simari Kia",
    distance: "3 miles away",
    badge: "GOOD PRICE"
  },
  {
    image: "/images/listings/simari-telluride-comparo2.png",
    year: "2025",
    model: "2025 Kia Telluride",
    package: "EX Package",
    price: "$42,500",
    dealer: "Simari Kia",
    distance: "3 miles away",
    badge: "GOOD PRICE"
  },
  {
    image: "/images/listings/urbano-telluride.png",
    year: "2025",
    model: "2025 Kia Telluride",
    package: "SX Package",
    price: "$44,200",
    dealer: "Urbano Kia",
    distance: "5 miles away",
    badge: "GOOD PRICE"
  },
  {
    image: "/images/listings/urbano-telluride2.png",
    year: "2025",
    model: "2025 Kia Telluride",
    package: "LX Package",
    price: "$38,900",
    dealer: "Urbano Kia",
    distance: "5 miles away",
    badge: "GOOD PRICE"
  },
  {
    image: "/images/listings/simari-telluride-comparo.png",
    year: "2025",
    model: "2025 Kia Telluride",
    package: "SX Prestige Package",
    price: "$46,100",
    dealer: "Simari Kia",
    distance: "3 miles away",
    badge: "GOOD PRICE"
  },
]

export default function CarListings() {
  return (
    <section id="listings" className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>For Sale Near You</h2>
        <div className={styles.subtitleContainer}>
          <p className={styles.subtitle}>
            See all results for{' '}
            <a href="#" className={styles.subtitleLink}>
              2025 Kia Tellurides for sale
            </a>
            {' '}near Detroit, MI
          </p>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={styles.arrow}>
            <path
              d="M5 12H19M19 12L12 5M19 12L12 19"
              stroke="#000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      
      <div className={styles.listings}>
        {listings.map((listing, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.imageContainer}>
              <img 
                src={listing.image} 
                alt={listing.model}
                className={styles.image}
              />
              {listing.badge && (
                <div className={styles.badge}>{listing.badge}</div>
              )}
            </div>
            
            <div className={styles.content}>
              <div className={styles.headerInfo}>
                <p className={styles.year}>Certified {listing.year}</p>
                <h3 className={styles.model}>{listing.model}</h3>
                <p className={styles.package}>{listing.package}</p>
              </div>
              
              <div className={styles.footer}>
                <p className={styles.price}>{listing.price}</p>
                <div className={styles.divider} />
                <div className={styles.dealerInfo}>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className={styles.pinIcon}>
                    <path
                      d="M5 0C2.24 0 0 2.24 0 5C0 7.76 5 10 5 10C5 10 10 7.76 10 5C10 2.24 7.76 0 5 0ZM5 6.5C3.62 6.5 2.5 5.38 2.5 4C2.5 2.62 3.62 1.5 5 1.5C6.38 1.5 7.5 2.62 7.5 4C7.5 5.38 6.38 6.5 5 6.5Z"
                      fill="#000"
                    />
                  </svg>
                  <div>
                    <p className={styles.dealer}>{listing.dealer}</p>
                    <p className={styles.distance}>({listing.distance})</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        <button className={styles.scrollButton}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 18L15 12L9 6"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </section>
  )
}


