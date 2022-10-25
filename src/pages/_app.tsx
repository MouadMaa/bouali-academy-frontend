import { FC } from 'react'
import { AppProps } from 'next/app'
import Layout from '../layout/Layout'

import '../styles/globals.css'

const MyApp: FC<AppProps> = (props) => {
  const { Component, pageProps } = props

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
