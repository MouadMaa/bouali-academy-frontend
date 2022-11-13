import { Fragment, useEffect, useState } from 'react'
import { GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
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
import CourseTab from '../components/course/course-tab'
import Loader from '../components/shared/loader'

const Courses: NextPage = () => {
  const { data: initialData } = useCoursesQuery({ variables: QueryCoursesVars })
  const [getCourses, { data: newData, loading }] = useCoursesLazyQuery()

  const router = useRouter()
  const [courses, setCourses] = useState(initialData?.courses?.data)
  const [pagination, setPagination] = useState(initialData?.courses?.meta.pagination)

  useEffect(() => {
    if (newData?.courses?.data) {
      setCourses(newData.courses.data)
      setPagination(newData.courses.meta.pagination)
    }
  }, [newData])

  const filterCoursesByCategory = (categoryId: string) => {
    if (categoryId === 'all') {
      setCourses(initialData?.courses?.data)
      setPagination(initialData?.courses?.meta.pagination)
    } else {
      const newCourses = initialData?.courses?.data?.filter(
        (course) => course.attributes?.category?.data?.id === categoryId,
      )
      setCourses(newCourses)
      const variables = {
        ...QueryCoursesVars,
        filters: {
          category: {
            id: {
              eq: categoryId,
            },
          },
        },
      }
      getCourses({ variables })
    }
  }

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
          <CourseTab
            pagination={pagination as any}
            filterCoursesByCategory={filterCoursesByCategory}
          />
          <section className='row'>
            {courses?.map((course) => (
              <CourseCard key={course.id} course={course.attributes as any} />
            ))}
            <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-6'>{loading && <Loader />}</div>
          </section>
          {courses?.length === 0 && (
            <div className='text-center mt-40 mb-40'>
              <h4>There is no course yet with this category 😥</h4>
            </div>
          )}
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

export const QueryCoursesVars: QueryCoursesArgs = {
  pagination: {
    page: 1,
    pageSize: 9,
  },
  filters: {
    category: {
      id: {},
    },
  },
}

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: CategoriesDocument,
  })

  await apolloClient.query({
    query: CoursesDocument,
    variables: QueryCoursesVars,
  })

  return addApolloState(apolloClient, {
    props: {},
    revalidate: 60,
  })
}
