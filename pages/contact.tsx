import { FC, Fragment } from 'react'
import ContactSection from '../components/home/contact-section'
import Breadcrumb from '../components/layout/breadcrumb'

const Contact: FC = () => {
  return (
    <Fragment>
      <Breadcrumb title='Contact' />
      <ContactSection />
    </Fragment>
  )
}

export default Contact
