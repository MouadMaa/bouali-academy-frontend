import { Fragment } from 'react'
import { GetServerSideProps, NextPage } from 'next'
import Breadcrumb from '../layouts/breadcrumb'

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
  // const { data } = await axios.get('http://localhost:4000/api/orders')
  // console.log(data)

  return {
    props: {},
  }
}
