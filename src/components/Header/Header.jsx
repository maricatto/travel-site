import styles from './Header.module.css'
import logo from '../../assets/images/icons/clear-view-escapes.svg'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="/" className={styles.logo}>
          <img src={logo} alt="Clear View Escapes" />
        </a>
        <nav className={styles.nav} aria-label="Main navigation">
          <ul className={styles.navList}>
            <li><a href="#our-beginning" className={styles.navLink}>Our Beginning</a></li>
            <li><a href="#features" className={styles.navLink}>Features</a></li>
            <li><a href="#testimonials" className={styles.navLink}>Testimonials</a></li>
          </ul>
        </nav>
        <a href="#contact" className={styles.cta}>Get in Touch</a>
      </div>
    </header>
  )
}
