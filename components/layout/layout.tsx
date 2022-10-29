import { FC, Fragment, PropsWithChildren } from 'react'
import Head from 'next/head'
import Header from './header'
import Footer from './footer'

const Layout: FC<PropsWithChildren> = (props) => {
  const { children } = props

  return (
    <Fragment>
      <HtmlHead />
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
