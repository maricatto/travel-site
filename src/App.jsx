import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import OurBeginning from './components/OurBeginning/OurBeginning'
import Features from './components/Features/Features'
import Testimonials from './components/Testimonials/Testimonials'
import Footer from './components/Footer/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <OurBeginning />
        <Features />
        <Testimonials />
      </main>
      <Footer />
    </>
  )
}
