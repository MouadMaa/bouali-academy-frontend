import { NextPage } from 'next'
import Link from 'next/link'
import { useEffect } from 'react'

const NotFound: NextPage = () => {
  useEffect(() => {
    scrollTo(0, 1)

    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const onScroll = () => {
    const scrollTop = window.scrollY
    if (scrollTop < 1) {
      scrollTo(0, 1)
    }
  }

  return (
    <section className='error__area pt-200 pb-200'>
      <div className='container'>
        <div className='row'>
          <div className='col-xxl-8 offset-xxl-2 col-xl-8 offset-xl-2 col-lg-10 offset-lg-1'>
            <div className='error__item text-center'>
              <div className='error__thumb mb-45'>
                <img src='/img/error/error.png' alt='img not found' />
              </div>
              <div className='error__content'>
                <h3 className='error__title'>Page Not Found!</h3>
                <p>Please try searching for some other page.</p>
                <Link href='/' className='e-btn e-btn-3 e-btn-4'>
                  Back To Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NotFound
