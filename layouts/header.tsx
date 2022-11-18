import React, { useState, useEffect, FC } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useCategoriesQuery } from '../graphql/generated/schema'
import { QueryCategoriesVars } from '../components/home/categories-section'
import { signIn, signOut, useSession } from 'next-auth/react'

const Header: FC = () => {
  const { status } = useSession()
  const { data } = useCategoriesQuery({ variables: QueryCategoriesVars })

  const router = useRouter()

  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', sticky)
    return () => {
      window.removeEventListener('scroll', sticky)
    }
  })

  const sticky = () => {
    const header = document.querySelector<HTMLHeadElement>('.header__area')
    if (router.pathname === '/courses/[slug]') {
      header?.classList.add('sticky')
    } else {
      const scrollTop = window.scrollY
      scrollTop >= 1 ? header?.classList.add('sticky') : header?.classList.remove('sticky')
    }
  }

  const categories = data?.categories?.data
  const isHeaderWhite =
    router.pathname !== '/' && router.pathname !== '/sign-in' && router.pathname !== '/sign-up'

  const Profile = (
    <div className='header__category'>
      <ul>
        <li>
          <button className='e-btn'>
            <svg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M7 8a5 5 0 1 1 10 0A5 5 0 0 1 7 8Zm5 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM6.343 16.343A8 8 0 0 0 4 22h2a6 6 0 1 1 12 0h2a8 8 0 0 0-13.657-5.657Z'
                fill='#fff'
              />
            </svg>
            <span>Profile</span>
          </button>
          <ul className='cat-submenu'>
            <li>
              <a
                onClick={() => {
                  console.log('My Account')
                }}
              >
                My Account
              </a>
            </li>
            <li>
              <Link href='/my-learning'>My Learning</Link>
            </li>
            <li>
              <a onClick={() => signOut()}>Sign Out</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  )

  return (
    <header>
      <div
        id='header-sticky'
        className={`header__area header__transparent header__padding ${
          isHeaderWhite && 'header__white'
        } ${router.pathname === '/courses/[slug]' && 'sticky'}`}
      >
        <div className='container-fluid'>
          <div className='row align-items-center'>
            <div className='col-xxl-3 col-xl-3 col-lg-4 col-md-2 col-sm-4 col-6'>
              <div className='header__left d-flex'>
                <div className='logo'>
                  <Link href='/'>
                    <img src='/img/logo/logo.png' alt='logo' />
                  </Link>
                </div>
                <div className='header__category d-none d-lg-block'>
                  <nav>
                    <ul>
                      <li>
                        <Link href='/categories' className='cat-menu d-flex align-items-center'>
                          <div className='cat-dot-icon d-inline-block'>
                            <CategorySvg />
                          </div>
                          <span>Categories</span>
                        </Link>
                        <ul className='cat-submenu'>
                          {categories?.map(({ id, attributes }) => (
                            <li key={id}>
                              <Link href={`courses/?categoryId=${id}`}>{attributes?.title}</Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <div className='col-xxl-9 col-xl-9 col-lg-8 col-md-10 col-sm-8 col-6'>
              <div className='header__right d-flex justify-content-end align-items-center'>
                <div className='main-menu d-none d-xl-block'>
                  <nav id='mobile-menu'>
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
                        <Link href='/contact'>Contact</Link>
                      </li>
                      <li>
                        <Link href='/about'>About</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className='header__search p-relative ml-80 mb-55 pb-1 d-none d-md-block'>
                  <div className='header__cart'>
                    <span
                      className='cart-toggle-btn'
                      onClick={() => {
                        setSearchOpen(true)
                        setMenuOpen(false)
                      }}
                    >
                      <div className='header__cart-icon'>
                        <svg fill='#0e1133' viewBox='0 0 50 50' width='50px' height='50px'>
                          <path d='M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z' />
                        </svg>
                      </div>
                    </span>
                  </div>
                </div>
                <div className='header__btn ml-20 mb-1 d-none d-sm-block'>
                  {status !== 'authenticated' ? (
                    <button
                      className='e-btn'
                      style={{ textTransform: 'capitalize' }}
                      onClick={() => signIn('google')}
                    >
                      <i className='fab fa-google mr-10'></i>Sign In With Google
                    </button>
                  ) : (
                    Profile
                  )}
                </div>
                <div className='sidebar__menu d-xl-none'>
                  <div
                    className='sidebar-toggle-btn ml-30'
                    id='sidebar-toggle'
                    onClick={() => {
                      setMenuOpen(!menuOpen)
                    }}
                  >
                    <span className='line'></span>
                    <span className='line'></span>
                    <span className='line'></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Header Menu */}
      <div className={menuOpen ? 'sidebar__area open' : 'sidebar__area'}>
        <div className='sidebar__wrapper'>
          <div className='sidebar__close'>
            <button
              className='sidebar__close-btn'
              id='sidebar__close-btn'
              onClick={() => setMenuOpen(false)}
            >
              <span>
                <i className='fas fa-times'></i>
              </span>
              <span>close</span>
            </button>
          </div>
          <div className='sidebar__content'>
            <div className='logo mb-40'>
              <Link href='/'>
                <img src='/img/logo/logo.png' alt='logo' />
              </Link>
            </div>
            <div className='mm-menu'>
              <ul>
                <li>
                  <Link href='/'>Home</Link>
                </li>
                <li>
                  <Link href='/courses'>Courses</Link>
                </li>
                <li>
                  <Link href='/contact'>Contact</Link>
                </li>
                <li>
                  <Link href='/about'>About</Link>
                </li>
              </ul>
            </div>

            <div className='header__btn mt-40'>{Profile}</div>

            <div className='header__search p-relative ml-80 mb-55 pb-1'>
              <div className='header__cart'>
                <span
                  className='cart-toggle-btn'
                  onClick={() => {
                    setSearchOpen(true)
                    setMenuOpen(false)
                  }}
                >
                  <div className='header__cart-icon'>
                    <svg fill='#0e1133' viewBox='0 0 50 50' width='50px' height='50px'>
                      <path d='M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z' />
                    </svg>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={() => {
          setMenuOpen(false)
          setSearchOpen(false)
        }}
        className={menuOpen || searchOpen ? 'body-overlay show' : 'body-overlay'}
      ></div>

      {/* Header Search */}
      <div className={searchOpen ? 'header__search-3 search-opened' : 'header__search-3'}>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-12'>
              <div className='header__search-3-inner text-center'>
                <form action='#'>
                  <div className='header__search-3-btn'>
                    <a
                      href='#!'
                      className='header__search-3-btn-close'
                      onClick={() => setSearchOpen(false)}
                    >
                      <i className='fas fa-times'></i>
                    </a>
                  </div>
                  <div className='header__search-3-header'>
                    <h3>Search</h3>
                  </div>
                  <div className='header__search-3-categories'>
                    <ul className='search-category'>
                      <li>
                        <Link href='/course-grid'>All Courses</Link>
                      </li>
                      <li>
                        <Link href='/instructor'>Instructor</Link>
                      </li>
                      <li>
                        <Link href='/event-details'>Event</Link>
                      </li>
                      <li>
                        <Link href='/cart'>My Cart</Link>
                      </li>
                      <li>
                        <Link href='/blog'>Blog</Link>
                      </li>
                      <li>
                        <Link href='/contact'>Contact</Link>
                      </li>
                    </ul>
                  </div>
                  <div className='header__search-3-input p-relative'>
                    <input type='text' placeholder='Search for products... ' />
                    <button type='submit'>
                      <i className='fas fa-search'></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

const CategorySvg = () => (
  <svg viewBox='0 0 276.2 276.2'>
    <g>
      <g>
        <path
          className='cat-dot'
          d='M33.1,2.5C15.3,2.5,0.9,17,0.9,34.8s14.5,32.3,32.3,32.3s32.3-14.5,32.3-32.3S51,2.5,33.1,2.5z'
        />
        <path
          className='cat-dot'
          d='M137.7,2.5c-17.8,0-32.3,14.5-32.3,32.3s14.5,32.3,32.3,32.3c17.8,0,32.3-14.5,32.3-32.3S155.5,2.5,137.7,2.5    z'
        />
        <path
          className='cat-dot'
          d='M243.9,67.1c17.8,0,32.3-14.5,32.3-32.3S261.7,2.5,243.9,2.5S211.6,17,211.6,34.8S226.1,67.1,243.9,67.1z'
        />
        <path
          className='cat-dot'
          d='M32.3,170.5c17.8,0,32.3-14.5,32.3-32.3c0-17.8-14.5-32.3-32.3-32.3S0,120.4,0,138.2S14.5,170.5,32.3,170.5z'
        />
        <path
          className='cat-dot'
          d='M136.8,170.5c17.8,0,32.3-14.5,32.3-32.3c0-17.8-14.5-32.3-32.3-32.3c-17.8,0-32.3,14.5-32.3,32.3    C104.5,156.1,119,170.5,136.8,170.5z'
        />
        <path
          className='cat-dot'
          d='M243,170.5c17.8,0,32.3-14.5,32.3-32.3c0-17.8-14.5-32.3-32.3-32.3s-32.3,14.5-32.3,32.3    C210.7,156.1,225.2,170.5,243,170.5z'
        />
        <path
          className='cat-dot'
          d='M33,209.1c-17.8,0-32.3,14.5-32.3,32.3c0,17.8,14.5,32.3,32.3,32.3s32.3-14.5,32.3-32.3S50.8,209.1,33,209.1z    '
        />
        <path
          className='cat-dot'
          d='M137.6,209.1c-17.8,0-32.3,14.5-32.3,32.3c0,17.8,14.5,32.3,32.3,32.3c17.8,0,32.3-14.5,32.3-32.3    S155.4,209.1,137.6,209.1z'
        />
        <path
          className='cat-dot'
          d='M243.8,209.1c-17.8,0-32.3,14.5-32.3,32.3c0,17.8,14.5,32.3,32.3,32.3c17.8,0,32.3-14.5,32.3-32.3    S261.6,209.1,243.8,209.1z'
        />
      </g>
    </g>
  </svg>
)