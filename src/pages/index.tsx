import { NextPage } from 'next'
import { Fragment } from 'react'
import AboutSection from '../components/home/about-section'
import CategorySection from '../components/home/category-section'
import ContactSection from '../components/home/contact-section'
import CoursesSection from '../components/home/courses-section'
import CtaSection from '../components/home/cta-section'
import HeroSection from '../components/home/hero-section'

const Home: NextPage = () => {
  return (
    <Fragment>
      <HeroSection />
      <AboutSection />
      <CategorySection />
      <CoursesSection />
      <ContactSection />
      <CtaSection />
    </Fragment>
  )
}

export default Home
