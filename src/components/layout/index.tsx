import { FC, Fragment, PropsWithChildren } from 'react'
import Head from 'next/head'
import Header from './header'

const Layout: FC<PropsWithChildren> = (props) => {
  const { children } = props

  return (
    <Fragment>
      <HtmlHead />
      <Header />
      {children}
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
