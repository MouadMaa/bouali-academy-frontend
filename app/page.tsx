'use client'

import { NextPage } from 'next'
import { Fragment } from 'react'
import AboutSection from '../components/home/about'
import CategorySection from '../components/home/category'
import ContactSection from '../components/home/contact'
import CoursesSection from '../components/home/courses'
import CtaSection from '../components/home/cta'
import HeroSection from '../components/home/hero'
import PricingSection from '../components/home/pricing'
import TestimonialSection from '../components/home/testimonial'

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
