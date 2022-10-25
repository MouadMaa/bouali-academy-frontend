import React, { useState, useEffect, FC } from 'react'
import Link from 'next/link'
import BurgerMenus from './burger-menus'
import ShoppingCart from './shopping-cart'
import { CategorySvg } from './header.svg'

const Header: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [shopOpen, setShopOpen] = useState(false)

  // Sticky Menu Area start
  useEffect(() => {
    window.addEventListener('scroll', sticky)
    return () => {
      window.removeEventListener('scroll', sticky)
    }
  })

  const sticky = () => {
    const header = document.querySelector<HTMLHeadElement>('.header__area')
    const scrollTop = window.scrollY
    scrollTop >= 1 ? header?.classList.add('sticky') : header?.classList.remove('sticky')
  }
  // Sticky Menu Area End

  return (
    <header>
      <div id='header-sticky' className='header__area header__transparent header__padding'>
        <div className='container-fluid'>
          <div className='row align-items-center'>
            <div className='col-xxl-3 col-xl-3 col-lg-4 col-md-2 col-sm-4 col-6'>
              <div className='header__left d-flex'>
                <div className='logo'>
                  <Link href='/'>
                    <a>
                      <img src='/img/logo/logo.png' alt='logo' />
                    </a>
                  </Link>
                </div>
                <div className='header__category d-none d-lg-block'>
                  <nav>
                    <ul>
                      <li>
                        <Link href='/courses'>
                          <a className='cat-menu d-flex align-items-center'>
                            <div className='cat-dot-icon d-inline-block'>
                              <CategorySvg />
                            </div>
                            <span>Category</span>
                          </a>
                        </Link>
                        <ul className='cat-submenu'>
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
                    </ul>
                  </nav>
                </div>
                <div className='header__search p-relative ml-50 d-none d-md-block'>
                  <form action='#'>
                    <input type='text' placeholder='Search...' />
                    <button type='submit'>
                      <i className='fas fa-search'></i>
                    </button>
                  </form>
                  <div className='header__cart'>
                    <span
                      className='cart-toggle-btn'
                      onClick={() => {
                        setShopOpen(!shopOpen)
                      }}
                    >
                      <div className='header__cart-icon'>
                        <svg viewBox='0 0 24 24'>
                          <circle className='st0' cx='9' cy='21' r='1' />
                          <circle className='st0' cx='20' cy='21' r='1' />
                          <path
                            className='st0'
                            d='M1,1h4l2.7,13.4c0.2,1,1,1.6,2,1.6h9.7c1,0,1.8-0.7,2-1.6L23,6H6'
                          />
                        </svg>
                      </div>
                      <span className='cart-item'>2</span>
                    </span>
                  </div>
                </div>
                <div className='header__cart header__cart--responsive'>
                  <span
                    className='cart-toggle-btn'
                    onClick={() => {
                      setShopOpen(!shopOpen)
                    }}
                  >
                    <div className='header__cart-icon'>
                      <svg viewBox='0 0 24 24'>
                        <circle className='st0' cx='9' cy='21' r='1' />
                        <circle className='st0' cx='20' cy='21' r='1' />
                        <path
                          className='st0'
                          d='M1,1h4l2.7,13.4c0.2,1,1,1.6,2,1.6h9.7c1,0,1.8-0.7,2-1.6L23,6H6'
                        />
                      </svg>
                    </div>
                    <span className='cart-item'>2</span>
                  </span>
                </div>
                <div className='header__btn ml-20 d-none d-sm-block'>
                  <Link href='/contact'>
                    <a className='e-btn'>Try for free</a>
                  </Link>
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

      <BurgerMenus menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div
        onClick={() => setMenuOpen(false)}
        className={menuOpen ? 'body-overlay show' : 'body-overlay'}
      ></div>

      <ShoppingCart shopOpen={shopOpen} setShopOpen={setShopOpen} />
      <div
        onClick={() => setShopOpen(false)}
        className={shopOpen ? 'body-overlay show' : 'body-overlay'}
      ></div>
    </header>
  )
}

export default Header
