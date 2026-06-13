import styles from './Testimonials.module.css'
import TestimonialCard from './TestimonialCard'
import commentIcon from '../../assets/images/icons/comment.svg'

import janePhoto from '../../assets/images/testimonial-jane.jpg'
import janeWebp from '../../assets/images/testimonial-jane.webp'
import janeHiDpi from '../../assets/images/testimonial-jane-hi-dpi.jpg'
import janeWebpHiDpi from '../../assets/images/testimonial-jane-hi-dpi.webp'

import johnPhoto from '../../assets/images/testimonial-john.jpg'
import johnWebp from '../../assets/images/testimonial-john.webp'
import johnHiDpi from '../../assets/images/testimonial-john-hi-dpi.jpg'
import johnWebpHiDpi from '../../assets/images/testimonial-john-hi-dpi.webp'

import catPhoto from '../../assets/images/testimonial-cat.jpg'
import catWebp from '../../assets/images/testimonial-cat.webp'
import catHiDpi from '../../assets/images/testimonial-cat-hi-dpi.jpg'
import catWebpHiDpi from '../../assets/images/testimonial-cat-hi-dpi.webp'

const TESTIMONIALS = [
  {
    name: 'Jane Doe',
    trips: 9,
    photo: janePhoto,
    photoWebp: janeWebp,
    photoHiDpi: janeHiDpi,
    photoWebpHiDpi: janeWebpHiDpi,
    quote:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    name: 'John Smith',
    trips: 4,
    photo: johnPhoto,
    photoWebp: johnWebp,
    photoHiDpi: johnHiDpi,
    photoWebpHiDpi: johnWebpHiDpi,
    quote:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    name: 'Cat McKitty',
    trips: 6,
    photo: catPhoto,
    photoWebp: catWebp,
    photoHiDpi: catHiDpi,
    photoWebpHiDpi: catWebpHiDpi,
    quote:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <img src={commentIcon} alt="" aria-hidden="true" className={styles.sectionIcon} />
          <h2 className={styles.heading}>Real Testimonials</h2>
        </div>
        <div className={styles.grid}>
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </div>
    </section>
  )
}
