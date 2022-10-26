import type { NextPage } from 'next'
import { Fragment } from 'react'
import Category from '../components/home/category'
import Hero from '../components/home/hero'

const Home: NextPage = () => {
  return (
    <Fragment>
      <Hero />
      <Category />
    </Fragment>
  )
}

export default Home
