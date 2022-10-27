import { NextPage } from 'next'
import { Fragment } from 'react'
import AboutSection from '../components/home/about-section'
import CategorySection from '../components/home/category-section'
import ContactSection from '../components/home/contact-section'
import CoursesSection from '../components/home/courses-section'
import CtaSection from '../components/home/cta-section'
import HeroSection from '../components/home/hero-section'
import PricingSection from '../components/home/pricing-section'
import TestimonialSection from '../components/home/testimonial-section'

const Home: NextPage = () => {
  return (
    <Fragment>
      <HeroSection />
      <AboutSection />
      <CategorySection />
      <CoursesSection />
      <TestimonialSection />
      <PricingSection />
      <ContactSection />
      <CtaSection />
    </Fragment>
  )
}

export default Home
