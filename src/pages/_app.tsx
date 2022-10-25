import { FC } from 'react'
import { AppProps } from 'next/app'
import Layout from '../components/layout/Layout'

import '../styles/globals.scss'

const MyApp: FC<AppProps> = (props) => {
  const { Component, pageProps } = props

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
