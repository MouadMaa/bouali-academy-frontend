import { FC } from 'react'
import { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { SessionProvider } from 'next-auth/react'
import { ToastContainer } from 'react-toastify'
import Layout from '../layouts/layout'
import { useApollo } from '../lib/apolloClient'

import '../styles/globals.scss'
import 'react-toastify/dist/ReactToastify.min.css'
import 'react-responsive-modal/styles.css'

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps)

  return (
    <ApolloProvider client={apolloClient}>
      <SessionProvider session={pageProps.session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
      <ToastContainer />
    </ApolloProvider>
  )
}

export default MyApp
