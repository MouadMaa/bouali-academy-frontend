import { FC, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import axios from 'axios'
import { toast } from 'react-toastify'
import Image from 'next/image'
import Social from '../shared/social'
import { useAboutQuery } from '../../graphql/generated/schema'

type FormInputs = {
  name: string
  email: string
  subject?: string
  message: string
}

const ContactSection: FC = () => {
  const { data } = useAboutQuery()
  const { register, handleSubmit, reset } = useForm()

  const [loading, setLoading] = useState(false)

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    setLoading(true)
    const res = await axios.post(`/api/contact`, data)
    if (res.data.message === 'success') {
      toast.success('Yor message sent successfully', { theme: 'colored' })
      reset()
    }
    setLoading(false)
  }

  const contact = data?.about?.data?.attributes?.contact
  const phone =
    `+(${contact?.phone?.substring(0, 3)}) ${contact?.phone?.substring(3, 4)} ` +
    `${contact?.phone?.substring(4, 6)} ${contact?.phone?.substring(6, 8)} ` +
    `${contact?.phone?.substring(8, 10)} ${contact?.phone?.substring(10, 12)}`

  return (
    <section className='contact__area pt-115 pb-150'>
      <div className='container'>
        <div className='row'>
          <div className='col-xxl-7 col-xl-7 col-lg-6'>
            <div className='contact__wrapper'>
              <div className='section__title-wrapper mb-40'>
                <h2 className='section__title'>
                  Get in
                  <span className='yellow-bg yellow-bg-big'>
                    touch
                    <Image
                      src='/img/shape/yellow-bg.png'
                      alt='yellow bg shape'
                      width={150}
                      height={16}
                    />
                  </span>
                </h2>
                <p>Have a question or just want to say hi? We`d love to hear from you.</p>
              </div>
              <div className='contact__form'>
                <form onSubmit={handleSubmit(onSubmit as any)}>
                  <div className='row'>
                    <div className='col-xxl-6 col-xl-6 col-md-6'>
                      <div className='contact__form-input'>
                        <input
                          type='text'
                          placeholder='Your Name'
                          {...register('name', { required: true })}
                        />
                      </div>
                    </div>
                    <div className='col-xxl-6 col-xl-6 col-md-6'>
                      <div className='contact__form-input'>
                        <input
                          type='email'
                          placeholder='Your Email'
                          {...register('email', { required: true })}
                        />
                      </div>
                    </div>
                    <div className='col-xxl-12'>
                      <div className='contact__form-input'>
                        <input type='text' placeholder='Subject' {...register('subject')} />
                      </div>
                    </div>
                    <div className='col-xxl-12'>
                      <div className='contact__form-input'>
                        <textarea
                          placeholder='Enter Your Message'
                          {...register('message', {
                            required: true,
                            minLength: 5,
                          })}
                        ></textarea>
                      </div>
                    </div>
                    <div className='col-xxl-12'>
                      <div className='contact__btn'>
                        <button type='submit' className='e-btn' disabled={loading}>
                          {loading ? 'Sending...' : 'Send Your Message'}
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className='col-xxl-4 offset-xxl-1 col-xl-4 offset-xl-1 col-lg-5 offset-lg-1'>
            <div className='contact__info white-bg p-relative z-index-1'>
              <div className='contact__shape'>
                <Image
                  className='contact-shape-1'
                  src='/img/contact/contact-shape-1.png'
                  alt='img not found'
                  width={90}
                  height={90}
                />
                <Image
                  className='contact-shape-2'
                  src='/img/contact/contact-shape-2.png'
                  alt='img not found'
                  width={70}
                  height={110}
                />
                <Image
                  className='contact-shape-3'
                  src='/img/contact/contact-shape-3.png'
                  alt='img not found'
                  width={60}
                  height={60}
                />
              </div>
              <div className='contact__info-inner white-bg'>
                <ul>
                  <li>
                    <div className='contact__info-item d-flex align-items-start mb-35'>
                      <div className='contact__info-icon mr-15'>
                        <svg className='map' viewBox='0 0 24 24'>
                          <path
                            className='st0'
                            d='M21,10c0,7-9,13-9,13s-9-6-9-13c0-5,4-9,9-9S21,5,21,10z'
                          />
                          <circle className='st0' cx='12' cy='10' r='3' />
                        </svg>
                      </div>
                      <div className='contact__info-text'>
                        <h4>My Work Office</h4>
                        <p>
                          <a
                            target='_blank'
                            rel='noreferrer'
                            href={contact?.office_map as string}
                            style={{ textTransform: 'capitalize' }}
                          >
                            {contact?.office}
                          </a>
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className='contact__info-item d-flex align-items-start mb-35'>
                      <div className='contact__info-icon mr-15'>
                        <svg className='mail' viewBox='0 0 24 24'>
                          <path
                            className='st0'
                            d='M4,4h16c1.1,0,2,0.9,2,2v12c0,1.1-0.9,2-2,2H4c-1.1,0-2-0.9-2-2V6C2,4.9,2.9,4,4,4z'
                          />
                          <polyline className='st0' points='22,6 12,13 2,6 ' />
                        </svg>
                      </div>
                      <div className='contact__info-text'>
                        <h4>Email us directly</h4>
                        <p>
                          <a
                            href={`mailto:${contact?.email}`}
                            style={{ textTransform: 'lowercase' }}
                          >
                            {contact?.email}
                          </a>
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className='contact__info-item d-flex align-items-start mb-35'>
                      <div className='contact__info-icon mr-15'>
                        <svg className='call' viewBox='0 0 24 24'>
                          <path
                            className='st0'
                            d='M22,16.9v3c0,1.1-0.9,2-2,2c-0.1,0-0.1,0-0.2,0c-3.1-0.3-6-1.4-8.6-3.1c-2.4-1.5-4.5-3.6-6-6  c-1.7-2.6-2.7-5.6-3.1-8.7C2,3.1,2.8,2.1,3.9,2C4,2,4.1,2,4.1,2h3c1,0,1.9,0.7,2,1.7c0.1,1,0.4,1.9,0.7,2.8c0.3,0.7,0.1,1.6-0.4,2.1  L8.1,9.9c1.4,2.5,3.5,4.6,6,6l1.3-1.3c0.6-0.5,1.4-0.7,2.1-0.4c0.9,0.3,1.8,0.6,2.8,0.7C21.3,15,22,15.9,22,16.9z'
                          />
                        </svg>
                      </div>
                      <div className='contact__info-text'>
                        <h4>Phone</h4>
                        <p>
                          <a href={`tel:${phone.replaceAll(' ', '-')}`}>{phone}</a>
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className='contact__social pl-30'>
                  <h4>Follow Us</h4>
                  <Social />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
