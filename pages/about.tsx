import { GetStaticProps, NextPage } from 'next'
import { Fragment } from 'react'
import AboutSection from '../components/home/about-section'
import TestimonialSection from '../components/home/testimonial-section'
import Breadcrumb from '../layouts/breadcrumb'
import { TestimonialsDocument } from '../graphql/generated/schema'
import { addApolloState, initializeApollo } from '../lib/apolloClient'

const About: NextPage = () => {
  return (
    <Fragment>
      <Breadcrumb title='About' />
      <AboutSection />
      <div style={{ margin: '50px' }} />
      <TestimonialSection />
    </Fragment>
  )
}

export default About

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: TestimonialsDocument,
  })

  return addApolloState(apolloClient, {
    props: {},
    revalidate: 60,
  })
}
