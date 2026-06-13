import styles from './Testimonials.module.css'

export default function TestimonialCard({ photo, photoWebp, photoHiDpi, photoWebpHiDpi, name, trips, quote }) {
  return (
    <article className={styles.card}>
      <picture>
        <source type="image/webp" srcSet={`${photoWebp} 1x, ${photoWebpHiDpi} 2x`} />
        <img
          src={photo}
          srcSet={`${photo} 1x, ${photoHiDpi} 2x`}
          alt={name}
          className={styles.photo}
          loading="lazy"
        />
      </picture>
      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.trips}>{trips} Time Escaper</p>
      </div>
      <blockquote className={styles.quote}>&ldquo;{quote}&rdquo;</blockquote>
    </article>
  )
}
