import styles from './OurBeginning.module.css'
import firstTrip from '../../assets/images/first-trip.webp'
import firstTripFb from '../../assets/images/first-trip.jpg'
import firstTripHiDpi from '../../assets/images/first-trip-hi-dpi.webp'
import ourStartPortrait from '../../assets/images/our-start-portrait.webp'
import ourStartPortraitFb from '../../assets/images/our-start-portrait.jpg'
import ourStartPortraitHiDpi from '../../assets/images/our-start-portrait-hi-dpi.webp'
import ourStartLandscapeSmall from '../../assets/images/our-start-landscape-small.webp'
import ourStartLandscape from '../../assets/images/our-start-landscape.webp'
import ourStartLandscapeHiDpi from '../../assets/images/our-start-landscape-hi-dpi.webp'

export default function OurBeginning() {
  return (
    <section id="our-beginning" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.intro}>
          <h2 className={styles.heading}>The first trip we planned was our own.</h2>
          <h3 className={styles.subheading}>
            Ever since, we&rsquo;ve been working to make travel better for everyone.
          </h3>
        </div>

        <div className={styles.images}>
          <picture>
            <source type="image/webp" srcSet={`${firstTrip} 1x, ${firstTripHiDpi} 2x`} />
            <img
              src={firstTripFb}
              alt="Couple walking down a street."
              className={styles.image}
              loading="lazy"
            />
          </picture>

          <picture>
            <source
              type="image/webp"
              media="(min-width: 1025px)"
              srcSet={`${ourStartLandscape} 1x, ${ourStartLandscapeHiDpi} 2x`}
            />
            <source
              type="image/webp"
              media="(min-width: 640px)"
              srcSet={`${ourStartLandscapeSmall} 1x, ${ourStartLandscapeHiDpi} 2x`}
            />
            <source type="image/webp" srcSet={`${ourStartPortrait} 1x, ${ourStartPortraitHiDpi} 2x`} />
            <img
              src={ourStartPortraitFb}
              alt="Our founder, Jane Doe"
              className={styles.image}
              loading="lazy"
            />
          </picture>
        </div>

        <div className={styles.story}>
          <h2 className={styles.storyHeading}>Here&rsquo;s how we got started&hellip;</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, <a href="#" className={styles.link}>quis nostrud exercitation</a> ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p>Duis aute irure dolor in <strong>reprehenderit in</strong> voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum velit esse cillum <strong>dolore eu fugiat.</strong></p>
        </div>
      </div>
    </section>
  )
}
