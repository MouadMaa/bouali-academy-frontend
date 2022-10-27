import { FC } from 'react'
import Link from 'next/link'
import FooterBottom from './footer-bottom'

const Footer: FC = () => {
  return (
    <footer>
      <div className='footer__area footer-bg'>
        <div className='footer__top pt-190 pb-40'>
          <div className='container'>
            <div className='row'>
              <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6'>
                <div className='footer__widget mb-50'>
                  <div className='footer__widget-head mb-22'>
                    <div className='footer__logo'>
                      <Link href='/'>
                        <a>
                          <img src='/img/logo/logo-2.png' alt='img not found' />
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className='footer__widget-body'>
                    <p>
                      Great lesson ideas and lesson plans for ESL teachers! Educators can customize
                      lesson plans to best.
                    </p>

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
              </div>
              <div className='col-xxl-2 offset-xxl-1 col-xl-2 offset-xl-1 col-lg-3 offset-lg-0 col-md-2 offset-md-1 col-sm-5 offset-sm-1'>
                <div className='footer__widget mb-50'>
                  <div className='footer__widget-head mb-22'>
                    <h3 className='footer__widget-title'>Categories</h3>
                  </div>
                  <div className='footer__widget-body'>
                    <div className='footer__link'>
                      <ul>
                        <li>
                          <Link href='/courses'>
                            <a>English Learning</a>
                          </Link>
                        </li>
                        <li>
                          <Link href='/courses'>
                            <a>Web Development</a>
                          </Link>
                        </li>
                        <li>
                          <Link href='/courses'>
                            <a>Logo Design</a>
                          </Link>
                        </li>
                        <li>
                          <Link href='/courses'>
                            <a>Motion Graphics</a>
                          </Link>
                        </li>
                        <li>
                          <Link href='/courses'>
                            <a>Video Edition</a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-xxl-2 col-xl-2 col-lg-2 offset-lg-0 col-md-3 offset-md-1 col-sm-6'>
                <div className='footer__widget mb-50'>
                  <div className='footer__widget-head mb-22'>
                    <h3 className='footer__widget-title'>Menu</h3>
                  </div>
                  <div className='footer__widget-body'>
                    <div className='footer__link'>
                      <ul>
                        <li>
                          <Link href='/'>
                            <a>Home</a>
                          </Link>
                        </li>
                        <li>
                          <Link href='/courses'>
                            <a>Courses</a>
                          </Link>
                        </li>
                        <li>
                          <Link href='/blogs'>
                            <a>Blogs</a>
                          </Link>
                        </li>
                        <li>
                          <Link href='/contact'>
                            <a>Contact</a>
                          </Link>
                        </li>
                        <li>
                          <Link href='/about'>
                            <a>About</a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-5 col-sm-6'>
                <div className='footer__widget footer__pl-70 mb-50'>
                  <div className='footer__widget-head mb-22'>
                    <h3 className='footer__widget-title'>Subscribe</h3>
                  </div>
                  <div className='footer__widget-body'>
                    <div className='footer__subscribe'>
                      <form action='#'>
                        <div className='footer__subscribe-input mb-15'>
                          <input type='email' placeholder='Your email address' />
                          <button type='submit'>
                            <i className='fas fa-arrow-right'></i>
                            <i className='fas fa-arrow-right'></i>
                          </button>
                        </div>
                      </form>
                      <p>Get the latest news and updates right at your inbox.</p>
                    </div>
                  </div>
                </div>
              </div>
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
                    <Link href='/'>
                      <a>Mouad Maaroufi</a>
                    </Link>
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
