import { Fragment } from 'react'
import { NextPage } from 'next'
import { Html, Head, Main, NextScript } from 'next/document'

const MyDocument: NextPage = () => {
  return (
    <Html lang='en'>
      <HeadMeta />
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default MyDocument

const HeadMeta = () => (
  <Fragment>
    <meta name='application-name' content='Bouali Academy' />
    <meta name='description' content='Bouali Academy' />
    <meta name='keywords' content='Bouali Academy' />
    <meta name='author' content='Bouali Academy' />

    <meta
      name='viewport'
      content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, maximum-scale=5, viewport-fit=cover'
    />
  </Fragment>
)
