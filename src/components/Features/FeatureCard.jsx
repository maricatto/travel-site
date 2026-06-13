import styles from './Features.module.css'

export default function FeatureCard({ icon, title, description }) {
  return (
    <article className={styles.card}>
      <img src={icon} alt="" aria-hidden="true" className={styles.icon} />
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardText}>{description}</p>
    </article>
  )
}
