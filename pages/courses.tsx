import { Fragment, useEffect, useState } from 'react'
import { GetStaticProps, NextPage } from 'next'
import Breadcrumb from '../components/layout/breadcrumb'
import {
  CategoriesDocument,
  CoursesDocument,
  QueryCoursesArgs,
  useCoursesLazyQuery,
  useCoursesQuery,
} from '../graphql/generated/schema'
import CourseCard from '../components/course/course-card'
import { addApolloState, initializeApollo } from '../lib/apolloClient'
import Pagination from '../components/shared/pagination'
import { useRouter } from 'next/router'

const Courses: NextPage = () => {
  const { data: initialData } = useCoursesQuery({ variables: CoursesVars })
  const [getCourses, { data: newData }] = useCoursesLazyQuery()

  const router = useRouter()
  const [courses, setCourses] = useState(initialData?.courses?.data)
  const [pagination, setPagination] = useState(initialData?.courses?.meta.pagination)

  useEffect(() => {
    if (newData?.courses?.data) {
      setCourses(newData.courses.data)
      setPagination(newData.courses.meta.pagination)
    }
  }, [newData, pagination])

  const handlePageClicked = (page: number) => {
    if (page !== pagination?.page) {
      getCourses({ variables: { pagination: { pageSize: pagination?.pageSize, page } } })
      router.push({ pathname: '/courses' })
    }
  }

  const handleNavigationClicked = (navigation: string) => {
    if (navigation === 'next') {
      if ((pagination?.page as number) < (pagination?.pageCount as number)) {
        getCourses({
          variables: {
            pagination: { pageSize: pagination?.pageSize, page: (pagination?.page as number) + 1 },
          },
        })
        router.push({ pathname: '/courses' })
      }
    } else if (navigation === 'prev') {
      if ((pagination?.page as number) > 1) {
        getCourses({
          variables: {
            pagination: { pageSize: pagination?.pageSize, page: (pagination?.page as number) - 1 },
          },
        })
        router.push({ pathname: '/courses' })
      }
    }
  }

  return (
    <Fragment>
      <Breadcrumb title='Courses' />
      <section className='course__area pt-120 pb-120'>
        <div className='container'>
          <section className='row'>
            {courses?.map((course) => (
              <CourseCard key={course.id} course={course.attributes as any} />
            ))}
          </section>
          <Pagination
            pagination={pagination as any}
            handlePageClicked={handlePageClicked}
            handleNavigationClicked={handleNavigationClicked}
          />
        </div>
      </section>
    </Fragment>
  )
}

export default Courses

export const CoursesVars: QueryCoursesArgs = {
  pagination: {
    page: 1,
    pageSize: 9,
  },
}

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: CategoriesDocument,
  })

  await apolloClient.query({
    query: CoursesDocument,
    variables: CoursesVars,
  })

  return addApolloState(apolloClient, {
    props: {},
    revalidate: 60,
  })
}
