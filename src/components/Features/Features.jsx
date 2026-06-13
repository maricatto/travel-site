import styles from './Features.module.css'
import FeatureCard from './FeatureCard'
import starIcon from '../../assets/images/icons/star.svg'
import rainIcon from '../../assets/images/icons/rain.svg'
import globeIcon from '../../assets/images/icons/globe.svg'
import wifiIcon from '../../assets/images/icons/wifi.svg'
import fireIcon from '../../assets/images/icons/fire.svg'

const FEATURES = [
  {
    icon: rainIcon,
    title: "We'll Watch the Weather",
    description:
      "Download our app and we'll send you a notice if it's about to rain in the next 20 minutes around your current location. A good rain can be refreshing, but sometimes you just want to stay dry.",
  },
  {
    icon: globeIcon,
    title: 'Global Guides',
    description:
      "We've scoured the entire planet for the best retreats and beautiful vistas. If there's a corner of the world you want to escape to we know the most scenic and inspiring locations.",
  },
  {
    icon: wifiIcon,
    title: 'Wi-Fi Waypoints',
    description:
      "We only send you on trips to places we can personally vouch for as being amazing. Which means we've mapped out where local wi-fi spots are and marked them in our app's map view.",
  },
  {
    icon: fireIcon,
    title: 'Survival Kit',
    description:
      'Everytime you book an escape with us we send you a survival kit with the finest materials. The kit will allow you to setup a tent, start a fire, scratch your own back and lower your taxes.',
  },
]

export default function Features() {
  return (
    <section id="features" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <img src={starIcon} alt="" aria-hidden="true" className={styles.sectionIcon} />
          <h2 className={styles.heading}>Our Features</h2>
        </div>
        <div className={styles.grid}>
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}
