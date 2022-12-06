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

    <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
    <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
    <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
    <link rel='manifest' href='/site.webmanifest' />

    <meta
      name='viewport'
      content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, maximum-scale=5, viewport-fit=cover'
    />
  </Fragment>
)
