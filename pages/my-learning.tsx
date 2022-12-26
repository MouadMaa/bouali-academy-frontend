import { Fragment } from 'react'
import { GetServerSideProps, NextPage } from 'next'
import Link from 'next/link'
import axios from 'axios'
import { unstable_getServerSession } from 'next-auth'
import Breadcrumb from '../layouts/breadcrumb'
import { authOptions } from './api/auth/[...nextauth]'
import { CoursesDocument, useCoursesQuery } from '../graphql/generated/schema'
import { initializeApollo, addApolloState } from '../lib/apolloClient'
import MyLearningCard from '../components/course/my-learning-card'

interface MyLearningProps {
  variables: any
}

const MyLearning: NextPage<MyLearningProps> = (props) => {
  const { variables } = props

  const { data } = useCoursesQuery({ variables })

  const courses = data?.courses?.data

  return (
    <Fragment>
      <Breadcrumb title='My Learning' />
      <section className='container mb-80 mt-60'>
        <div className='section__title-wrapper mb-40'>
          <h2 className='section__title'>My Learning</h2>
        </div>
        <section className='row'>
          {courses?.map((course) => (
            <div key={course.id} className='col-xxl-4 col-xl-4 col-lg-4 col-md-6'>
              <MyLearningCard course={course.attributes as any} />
            </div>
          ))}
        </section>
        {courses?.length === 0 && (
          <div className='text-center mt-40 mb-100'>
            <h4>You do not have any courses viewed or purchased</h4>
            <div className='mt-30'>
              <Link href='/courses' className='e-btn'>
                Go to courses page
              </Link>
            </div>
          </div>
        )}
      </section>
    </Fragment>
  )
}

export default MyLearning

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const apolloClient = initializeApollo()
  const session = (await unstable_getServerSession(req, res, authOptions)) as any

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/orders?populate=course`,
    {
      headers: {
        Authorization: `Bearer ${session.jwt}`,
      },
    },
  )

  const coursesId = data.data.attributes.results.map((order: any) => order.course.id.toString())
  const variables = { filters: { id: { in: coursesId } } }

  await apolloClient.query({
    query: CoursesDocument,
    variables,
  })

  return addApolloState(apolloClient, {
    props: {
      variables,
    },
  })
}
