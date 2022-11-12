import { unstable_getServerSession } from 'next-auth/next'
import { useSession, signIn, signOut } from 'next-auth/react'
import { authOptions } from './api/auth/[...nextauth]'

const Test = () => {
  const { data: session, status } = useSession()

  // console.log(session, status)

  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }

  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}

export default Test

export const getServerSideProps = async ({ req, res }) => {
  const session = await unstable_getServerSession(req, res, authOptions)

  return {
    props: {
      session,
    },
  }
}
