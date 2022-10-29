import { FC } from 'react'
import { AppProps } from 'next/app'
import Layout from '../components/layout/layout'
import { useApollo } from '../lib/apolloClient'

import '../styles/globals.scss'
import { ApolloProvider } from '@apollo/client'

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps)

  return (
    <ApolloProvider client={apolloClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  )
}

export default MyApp
