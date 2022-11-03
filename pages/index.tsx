import { NextPage } from 'next'
import { Fragment } from 'react'
import AboutSection from '../components/home/about-section'
import CategoriesSection, { CategoriesQueryVars } from '../components/home/categories-section'
import ContactSection from '../components/home/contact-section'
import CoursesSection, { CoursesQueryVars } from '../components/home/courses-section'
import CtaSection from '../components/home/cta-section'
import HeroSection from '../components/home/hero-section'
import TestimonialSection from '../components/home/testimonial-section'
import { addApolloState, initializeApollo } from '../lib/apolloClient'
import { CategoriesDocument, CoursesDocument } from '../graphql/generated/schema'

const Home: NextPage = () => {
  return (
    <Fragment>
      <HeroSection />
      <AboutSection />
      <CategoriesSection />
      <CoursesSection />
      <TestimonialSection />
      <ContactSection />
      <CtaSection />
    </Fragment>
  )
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: CategoriesDocument,
    variables: CategoriesQueryVars,
  })

  await apolloClient.query({
    query: CoursesDocument,
    variables: CoursesQueryVars,
  })

  return addApolloState(apolloClient, {
    props: {},
    revalidate: 60,
  })
}

export default Home
