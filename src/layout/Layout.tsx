import { FC, Fragment, PropsWithChildren } from 'react'
import Head from 'next/head'

const Layout: FC<PropsWithChildren> = (props) => {
  const { children } = props

  return (
    <Fragment>
      <HtmlHead />
      {children}
    </Fragment>
  )
}

export default Layout

const HtmlHead = () => (
  <Head>
    {/* <!-- Favicon --> */}
    <link rel='shortcut icon' href='/favicon.ico' />

    <title>Bouali Academy</title>
  </Head>
)
