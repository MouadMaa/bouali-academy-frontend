import React, { useState, FC } from 'react'
import Link from 'next/link'

interface ShoppingCartProps {
  shopOpen: boolean
  setShopOpen: (value: boolean) => void
}

const ShoppingCart: FC<ShoppingCartProps> = (props) => {
  const { shopOpen, setShopOpen } = props

  const [counter, setCounter] = useState(0)

  //increase counter
  const increase = () => {
    setCounter((count) => count + 1)
  }

  //decrease counter
  const decrease = () => {
    setCounter((count) => count - 1)
  }

  return (
    <div className={shopOpen ? 'sidebar__areas open' : 'sidebar__areas'}>
      <div className='cartmini__area'>
        <div className='cartmini__wrapper'>
          <div className='cartmini__title'>
            <h4>Shopping cart</h4>
          </div>
          <div className='cartmini__close'>
            <button
              type='button'
              className='cartmini__close-btn'
              onClick={() => setShopOpen(false)}
            >
              <i className='fas fa-times'></i>
            </button>
          </div>
          <div className='cartmini__widget'>
            <div className='cartmini__inner'>
              <ul>
                <li>
                  <div className='cartmini__thumb'>
                    <a href='#'>
                      <img src='/img/course/cart/cart-1.jpg' alt='img not found' />
                    </a>
                  </div>
                  <div className='cartmini__content'>
                    <h5>
                      <a href='#'>Strategy law and organization Foundation</a>
                    </h5>
                    <div className='product-quantity mt-10 mb-10'>
                      <span className='cart-minus' onClick={decrease}>
                        -
                      </span>
                      <span className='cart-input'>{counter}</span>
                      <span className='cart-plus' onClick={increase}>
                        +
                      </span>
                    </div>
                    <div className='product__sm-price-wrapper'>
                      <span className='product__sm-price'>$46.00</span>
                    </div>
                  </div>
                  <a href='#' className='cartmini__del'>
                    <i className='fas fa-times'></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className='cartmini__checkout'>
              <div className='cartmini__checkout-title mb-30'>
                <h4>Subtotal:</h4>
                <span>$113.00</span>
              </div>
              <div className='cartmini__checkout-btn'>
                <Link href='/checkout' className='e-btn w-100 mb-10'>
                  <span></span> checkout
                </Link>
                <Link href='/cart' className='e-btn e-btn-border w-100'>
                  <span></span> view cart
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShoppingCart
