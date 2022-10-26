import { NextPage } from 'next'
import { Fragment } from 'react'
import CategorySection from '../components/home/category-section'
import CoursesSection from '../components/home/courses-section'
import CtaSection from '../components/home/cta-section'
import HeroSection from '../components/home/hero-section'

const Home: NextPage = () => {
  return (
    <Fragment>
      <HeroSection />
      <CategorySection />
      <CoursesSection />
      <CtaSection />
    </Fragment>
  )
}

export default Home
