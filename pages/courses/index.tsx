import { Fragment, useCallback, useEffect, useState } from 'react'
import { GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import Breadcrumb from '../../layouts/breadcrumb'
import {
  CategoriesDocument,
  CoursesDocument,
  QueryCoursesArgs,
  useCoursesLazyQuery,
  useCoursesQuery,
} from '../../graphql/generated/schema'
import CourseCard from '../../components/course/course-card'
import { addApolloState, initializeApollo } from '../../lib/apolloClient'
import Pagination from '../../components/shared/pagination'
import CourseTab from '../../components/course/course-tab'
import Loader from '../../components/shared/loader'

const Courses: NextPage = () => {
  const { data: initialData } = useCoursesQuery({ variables: QueryCoursesVars })
  const [getCourses, { data: newData, loading: loadingNewData }] = useCoursesLazyQuery()

  const router = useRouter()
  const [courses, setCourses] = useState(initialData?.courses?.data)
  const [pagination, setPagination] = useState(initialData?.courses?.meta.pagination)
  const [selectedCategoryId, setSelectedCategory] = useState('all')

  useEffect(() => {
    if (newData?.courses?.data) {
      setCourses(newData.courses.data)
      setPagination(newData.courses.meta.pagination)
    }
  }, [newData])

  const filterCoursesByCategory = useCallback(
    (categoryId: string) => {
      setSelectedCategory(categoryId)
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
          filters: { category: { id: { eq: categoryId } } },
        }
        getCourses({ variables })
      }
    },
    [getCourses, initialData],
  )

  useEffect(() => {
    const categoryId = router.query.categoryId
    if (categoryId) {
      filterCoursesByCategory(categoryId as string)
    }
  }, [filterCoursesByCategory, router])

  const handlePaginationClicked = (navigation: string) => {
    if (navigation === 'next') {
      if ((pagination?.page as number) < (pagination?.pageCount as number)) {
        const variables = {
          pagination: { pageSize: pagination?.pageSize, page: (pagination?.page as number) + 1 },
        }
        getCourses({ variables })
      }
    } else if (navigation === 'prev') {
      if ((pagination?.page as number) > 1) {
        const variables = {
          pagination: { pageSize: pagination?.pageSize, page: (pagination?.page as number) - 1 },
        }
        getCourses({ variables })
      }
    } else {
      const page = parseInt(navigation)
      if (page !== pagination?.page) {
        const variables: QueryCoursesArgs = { pagination: { pageSize: pagination?.pageSize, page } }
        if (selectedCategoryId !== 'all') {
          variables.filters = { category: { id: { eq: selectedCategoryId } } }
        }
        getCourses({ variables })
      }
    }
    router.push({ pathname: '/courses' })
  }

  return (
    <Fragment>
      <Breadcrumb title='Courses' />
      <section className='course__area pt-60 pb-80'>
        <div className='container'>
          <CourseTab
            pagination={pagination as any}
            selectedCategoryId={selectedCategoryId}
            filterCoursesByCategory={filterCoursesByCategory}
          />
          <section className='row'>
            {courses?.map((course) => (
              <div key={course.id} className='col-xxl-4 col-xl-4 col-lg-4 col-md-6'>
                <CourseCard course={course.attributes as any} />
              </div>
            ))}
            <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-6'>
              {loadingNewData && <Loader />}
            </div>
          </section>
          {courses?.length === 0 && (
            <div className='text-center mt-40 mb-40'>
              <h4>There is no course yet with this category 😥</h4>
              <div className='mt-30'>
                <button className='e-btn' onClick={() => filterCoursesByCategory('all')}>
                  Show all courses
                </button>
              </div>
            </div>
          )}
          <Pagination
            pagination={pagination as any}
            handlePaginationClicked={handlePaginationClicked}
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
