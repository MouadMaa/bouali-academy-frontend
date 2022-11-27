import { GetStaticProps, NextPage } from 'next'
import { Fragment } from 'react'
import AboutSection from '../components/about/about-section'
import CategoriesSection, { QueryCategoriesVars } from '../components/category/categories-section'
import CoursesSection, { QueryCoursesVars } from '../components/course/courses-section'
import ContactSection from '../components/contact/contact-section'
import HeroSection from '../components/home/hero-section'
import TestimonialSection from '../components/about/testimonial-section'
import { addApolloState, initializeApollo } from '../lib/apolloClient'
import { AboutDocument, CategoriesDocument, CoursesDocument } from '../graphql/generated/schema'

const Home: NextPage = () => {
  return (
    <Fragment>
      <HeroSection />
      <AboutSection />
      <CategoriesSection />
      <CoursesSection />
      <TestimonialSection />
      <ContactSection />
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
    query: AboutDocument,
  })

  return addApolloState(apolloClient, {
    props: {},
    revalidate: 60,
  })
}

export default Home
