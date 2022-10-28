import Head from 'next/head'
import Header from '../components/layout/header/header'
import Footer from '../components/layout/footer'

import '../styles/globals.scss'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <HtmlHead />
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

const HtmlHead = () => (
  <Head>
    <meta name='application-name' content='Bouali Academy' />
    <meta name='description' content='Bouali Academy' />
    <meta name='keywords' content='Bouali Academy' />
    <meta name='author' content='Bouali Academy' />

    <meta
      name='viewport'
      content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, maximum-scale=5, viewport-fit=cover'
    />

    {/* Favicon */}
    <link rel='shortcut icon' href='/favicon.ico' />

    {/* Title */}
    <title>Bouali Academy | Online Course and Education</title>
  </Head>
)
