import { GetServerSideProps, NextPage } from 'next'
import { Fragment } from 'react'
import Breadcrumb from '../layouts/breadcrumb'
import { addApolloState, initializeApollo } from '../lib/apolloClient'

const MyLearning: NextPage = () => {
  return (
    <Fragment>
      <Breadcrumb title='My Learning' />
      <h1>My Learning</h1>
    </Fragment>
  )
}

export default MyLearning

export const getServerSideProps: GetServerSideProps = async () => {
  const apolloClient = initializeApollo()

  const variables = {}

  // await apolloClient.query({
  //   query: CoursesDocument,
  //   variables,
  // })

  return addApolloState(apolloClient, {
    props: {},
  })
}
