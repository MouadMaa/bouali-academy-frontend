import { FC, Fragment, PropsWithChildren } from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import Header from './header'
import Footer from './footer'

const Layout: FC<PropsWithChildren> = (props) => {
  const { children } = props

  return (
    <Fragment>
      <HtmlHead />
      <ProgressBar />
      <Header />
      <main>{children}</main>
      <Footer />
    </Fragment>
  )
}

export default Layout

const HtmlHead = () => (
  <Head>
    {/* <!-- Favicon --> */}
    <link rel='shortcut icon' href='/favicon.ico' />

    <title>Bouali Academy | Online Course and Education</title>
  </Head>
)

const ProgressBar = dynamic(
  () => {
    return import('./progress-bar')
  },
  { ssr: false },
)
