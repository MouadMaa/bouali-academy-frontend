import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const HeroSection: FC = () => {
  return (
    <section className='hero__area hero__height d-flex align-items-center grey-bg-2 p-relative'>
      <div className='hero__shape'>
        <Image
          className='hero-1-circle'
          src='/img/shape/hero/hero-1-circle.png'
          alt='img not found'
          width={60}
          height={60}
        />
        <Image
          className='hero-1-circle-2'
          src='/img/shape/hero/hero-1-circle-2.png'
          alt='img not found'
          width={60}
          height={200}
        />
        <Image
          className='hero-1-dot-2'
          src='/img/shape/hero/hero-1-dot-2.png'
          alt='img not found'
          width={50}
          height={75}
        />
      </div>
      <div className='container'>
        <div className='hero__content-wrapper mt-90'>
          <div className='row align-items-center'>
            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6'>
              <div className='hero__content p-relative z-index-1'>
                <h3 className='hero__title'>
                  <span>LE SEUL SITE AU MAROC</span>
                  <span className='yellow-shape'>
                    {' '}
                    <Image
                      src='/img/shape/yellow-bg.png'
                      alt='yellow-shape'
                      width={150}
                      height={16}
                    />{' '}
                  </span>
                  POUR MIEUX SE PRÉPARER AUX CONCOURS POST-BAC
                </h3>
                <p>Regoingez nous et donnez le cap vrai à votre préparation.</p>
                <Link href='/courses' className='e-btn'>
                  view all course
                </Link>
              </div>
            </div>
            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6'>
              <div className='hero__thumb d-flex p-relative'>
                <div className='hero__thumb-shape'>
                  <Image
                    className='hero-1-dot'
                    src='/img/shape/hero/hero-1-dot.png'
                    alt='img not found'
                    width={70}
                    height={110}
                  />
                  <Image
                    className='hero-1-circle-3'
                    src='/img/shape/hero/hero-1-circle-3.png'
                    alt='img not found'
                    width={330}
                    height={330}
                  />
                  <Image
                    className='hero-1-circle-4'
                    src='/img/shape/hero/hero-1-circle-4.png'
                    alt='img not found'
                    width={170}
                    height={170}
                  />
                </div>
                <div className='hero__thumb-big mr-30'>
                  <Image src='/img/hero/hero-1.jpg' alt='img not found' width={400} height={460} />
                  <div className='hero__quote hero__quote-animation'>
                    <span>BOUALI ACADEMY</span>
                    <h4>“la pièce clé de ta réussite ” !</h4>
                  </div>
                </div>
                <div className='hero__thumb-sm mt-50 d-none d-lg-block'>
                  <Image
                    src='/img/hero/hero-sm-1.jpg'
                    alt='img not found'
                    width={400}
                    height={460}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
