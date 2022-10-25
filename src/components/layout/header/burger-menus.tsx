import React, { FC } from 'react'
import Link from 'next/link'

interface BurgerMenusProps {
  menuOpen: boolean
  setMenuOpen: (value: boolean) => void
}

const BurgerMenus: FC<BurgerMenusProps> = (props) => {
  const { menuOpen, setMenuOpen } = props

  return (
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
              <a>
                <img src='/img/logo/logo.png' alt='logo' />
              </a>
            </Link>
          </div>
          <div className='mm-menu'>
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
          </div>

          <div className='sidebar__search p-relative mt-40 '>
            <form action='#'>
              <input type='text' placeholder='Search...' />
              <button type='submit'>
                <i className='fas fa-search'></i>
              </button>
            </form>
          </div>

          {/* <div className='sidebar__cart mt-30'>
            <a href='#'>
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
            </a>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default BurgerMenus
