import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>
          Copyright &copy; {new Date().getFullYear()} Clear View Escapes. All rights reserved.{' '}
          <a href="mailto:hello@clearviewescapes.com" className={styles.link}>
            Get in Touch
          </a>
        </p>
      </div>
    </footer>
  )
}
