import { FC, Fragment } from 'react'
import AboutSection from '../components/home/about-section'
import TestimonialSection from '../components/home/testimonial-section'
import Breadcrumb from '../components/layout/breadcrumb'

const About: FC = () => {
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
