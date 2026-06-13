import styles from './Hero.module.css'
import heroSmaller from '../../assets/images/hero--smaller.webp'
import heroSmallerFb from '../../assets/images/hero--smaller.jpg'
import heroSmall from '../../assets/images/hero--small.webp'
import heroSmallFb from '../../assets/images/hero--small.jpg'
import heroMedium from '../../assets/images/hero--medium.webp'
import heroMediumFb from '../../assets/images/hero--medium.jpg'
import heroLarge from '../../assets/images/hero--large.webp'
import heroLargeFb from '../../assets/images/hero--large.jpg'
import heroSmallerHiDpi from '../../assets/images/hero--smaller-hi-dpi.webp'
import heroSmallHiDpi from '../../assets/images/hero--small-hi-dpi.webp'
import heroMediumHiDpi from '../../assets/images/hero--medium-hi-dpi.webp'
import heroLargeHiDpi from '../../assets/images/hero--large-hi-dpi.webp'

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Hero">
      <picture className={styles.picture}>
        <source
          type="image/webp"
          media="(min-width: 1025px)"
          srcSet={`${heroLarge} 1x, ${heroLargeHiDpi} 2x`}
        />
        <source
          type="image/jpeg"
          media="(min-width: 1025px)"
          srcSet={`${heroLargeFb} 1x`}
        />
        <source
          type="image/webp"
          media="(min-width: 641px)"
          srcSet={`${heroMedium} 1x, ${heroMediumHiDpi} 2x`}
        />
        <source
          type="image/jpeg"
          media="(min-width: 641px)"
          srcSet={`${heroMediumFb} 1x`}
        />
        <source
          type="image/webp"
          media="(min-width: 401px)"
          srcSet={`${heroSmall} 1x, ${heroSmallHiDpi} 2x`}
        />
        <source
          type="image/jpeg"
          media="(min-width: 401px)"
          srcSet={`${heroSmallFb} 1x`}
        />
        <source
          type="image/webp"
          srcSet={`${heroSmaller} 1x, ${heroSmallerHiDpi} 2x`}
        />
        <img
          src={heroSmallerFb}
          alt="Scenic mountain landscape with a crystal-clear lake"
          className={styles.image}
        />
      </picture>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h1 className={styles.title}>Your clarity.</h1>
        <h2 className={styles.subtitle}>One trip away.</h2>
        <p className={styles.description}>
          We create soul restoring journeys that inspire you to be you.
        </p>
        <a href="#our-beginning" className={styles.cta}>
          Get Started Today
        </a>
      </div>
    </section>
  )
}
