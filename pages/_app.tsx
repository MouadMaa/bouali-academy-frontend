import { FC } from 'react'
import { AppProps } from 'next/app'
import Layout from '../components/layout/layout'
import { useApollo } from '../lib/apolloClient'
import { ApolloProvider } from '@apollo/client'
import { ToastContainer } from 'react-toastify'

import '../styles/globals.scss'
import 'react-toastify/dist/ReactToastify.min.css'

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps)

  return (
    <ApolloProvider client={apolloClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ToastContainer />
    </ApolloProvider>
  )
}

export default MyApp
