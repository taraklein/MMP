import Image from 'next/image'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div className={styles.topContent}>
          <div className={styles.logo}>
            <Image
              src="https://www.caranddriver.com/_assets/design-tokens/caranddriver/static/images/logos/logo.68b8e69.svg"
              alt="Car and Driver"
              width={136}
              height={26}
              priority
            />
          </div>
          <div className={styles.searchSection}>
            <div className={styles.searchBar}>
              <input
                type="text"
                placeholder="e.g. 2025 Toyota RAV4"
                className={styles.searchInput}
              />
              <button className={styles.searchButton}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                    stroke="#595959"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className={styles.actionButtons}>
            <button className={styles.subscribeBtn}>SUBSCRIBE</button>
            <a href="#" className={styles.signInLink}>SIGN IN</a>
          </div>
        </div>
      </div>
      <nav className={styles.nav}>
        <a href="#" className={styles.navLink}>SHOP NEW CARS</a>
        <a href="#" className={styles.navLink}>SHOP USED CARS</a>
        <a href="#" className={styles.navLink}>RESEARCH CARS</a>
        <a href="#" className={styles.navLink}>EXPERT REVIEWS</a>
        <a href="#" className={styles.navLink}>WHAT&apos;S MY CAR WORTH?</a>
        <a href="#" className={styles.navLink}>EXPERT-TESTED GEAR</a>
        <a href="#" className={styles.navLink}>NEWS + STORIES</a>
      </nav>
    </header>
  )
}

