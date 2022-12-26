import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import Social from '../components/shared/social'

const Footer: FC = () => {
  const { status } = useSession()

  return (
    <footer>
      <div className='footer__area footer-bg'>
        <div className='footer__top pt-50 pb-50'>
          <div className='container footer__container'>
            <div className='footer__logo'>
              <Link href='/'>
                <Image src='/img/logo/logo-4.png' alt='img not found' width={160} height={80} />
              </Link>
            </div>
            <div className='footer__link'>
              <ul>
                <li>
                  <Link href='/'>Home</Link>
                </li>
                {status === 'authenticated' && (
                  <li>
                    <Link href='/my-learning'>My Learning</Link>
                  </li>
                )}
                <li>
                  <Link href='/courses'>Courses</Link>
                </li>
                <li>
                  <Link href='/categories'>Categories</Link>
                </li>
                <li>
                  <Link href='/contact'>Contact</Link>
                </li>
                <li>
                  <Link href='/about'>About</Link>
                </li>
              </ul>
            </div>
            <div className='footer__social'>
              <Social />
            </div>
          </div>
        </div>
        <div className='footer__bottom'>
          <div className='container'>
            <div className='row'>
              <div className='col-xxl-12'>
                <div className='footer__copyright text-center'>
                  <p>
                    © {new Date().getFullYear()} Bouali Academy, Created By{' '}
                    <a href='https://github.com/mouadmaa' target='_blank' rel='noreferrer'>
                      Mouad Maaroufi
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
