import { GetStaticProps, NextPage } from 'next'
import { Fragment } from 'react'
import AboutSection from '../components/home/about-section'
import CategoriesSection, { QueryCategoriesVars } from '../components/home/categories-section'
import CoursesSection, { QueryCoursesVars } from '../components/home/courses-section'
import ContactSection from '../components/home/contact-section'
import CtaSection from '../components/home/cta-section'
import HeroSection from '../components/home/hero-section'
import TestimonialSection from '../components/home/testimonial-section'
import { addApolloState, initializeApollo } from '../lib/apolloClient'
import {
  CategoriesDocument,
  CoursesDocument,
  TestimonialsDocument,
} from '../graphql/generated/schema'

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

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: CategoriesDocument,
    variables: QueryCategoriesVars,
  })

  await apolloClient.query({
    query: CoursesDocument,
    variables: QueryCoursesVars,
  })

  await apolloClient.query({
    query: TestimonialsDocument,
  })

  return addApolloState(apolloClient, {
    props: {},
    revalidate: 60,
  })
}

export default Home
