import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useSession } from 'next-auth/react'

const Footer: FC = () => {
  const { status } = useSession()

  return (
    <footer>
      <div className='footer__area footer-bg'>
        <div className='footer__top pt-50 pb-50'>
          <div className='container footer__container'>
            <div className='footer__logo'>
              <Link href='/'>
                <Image src='/img/logo/logo-3.png' alt='img not found' width={160} height={80} />
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
              <ul>
                <li>
                  <a href='#' className='pin'>
                    <i className='fab fa-youtube'></i>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <i className='fab fa-facebook-f'></i>
                  </a>
                </li>
                <li>
                  <a href='#' className='tw'>
                    <i className='fab fa-twitter'></i>
                  </a>
                </li>
                <li>
                  <a href='#' className='ins'>
                    <i className='fab fa-instagram'></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='footer__bottom'>
          <div className='container'>
            <div className='row'>
              <div className='col-xxl-12'>
                <div className='footer__copyright text-center'>
                  <p>
                    © 2022 Bouali Academy, All Rights Reserved. Design By{' '}
                    <Link href='/'>Mouad Maaroufi</Link>
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
