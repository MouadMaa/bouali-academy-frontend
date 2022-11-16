import { NextPage } from 'next'
import { Fragment } from 'react'
import ContactSection from '../components/home/contact-section'
import Breadcrumb from '../layouts/breadcrumb'

const Contact: NextPage = () => {
  return (
    <Fragment>
      <Breadcrumb title='Contact' />
      <ContactSection />
    </Fragment>
  )
}

export default Contact
