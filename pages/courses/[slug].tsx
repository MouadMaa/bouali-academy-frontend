import { Markup } from 'interweave'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import CourseSidebar from '../../components/course/course-sidebar'
import CourseSlider from '../../components/course/course-slider'
import {
  CoursesBySlugDocument,
  CoursesDocument,
  CoursesQueryResult,
  useCoursesBySlugQuery,
} from '../../graphql/generated/schema'
import { addApolloState, initializeApollo } from '../../lib/apolloClient'

const Course: NextPage = () => {
  const router = useRouter()
  const slug = router.query.slug as string

  const variables = { filters: { slug: { eq: slug } } }
  const { data } = useCoursesBySlugQuery({ variables })

  const [content, setContent] = useState('')

  const course = data?.courses?.data[0]

  useEffect(() => {
    setContent(course?.attributes?.description as string)
  }, [course])

  const dateString = new Date(course?.attributes?.updatedAt).toDateString().split(' ')
  const dateUpdate = `${dateString[1]} ${dateString[2]}, ${dateString[3]}`

  return (
    <section className='page__title-area pt-120 pb-90 mt-50'>
      <div className='page__title-shape'>
        <Image
          className='page-title-shape-5 d-none d-sm-block'
          src='/img/course/shape-1.png'
          alt='img not found'
          width={55}
          height={190}
        />
        <Image
          className='page-title-shape-6'
          src='/img/course/shape-6.png'
          alt='img not found'
          width={60}
          height={60}
        />
        <Image
          className='page-title-shape-7'
          src='/img/course/shape-4.png'
          alt='img not found'
          width={50}
          height={170}
        />
      </div>

      <div className='container'>
        <div className='row'>
          <div className='col-xxl-8 col-xl-8 col-lg-8'>
            <div className='course__wrapper'>
              <div className='page__title-content mb-25'>
                <div className='page__title-breadcrumb'>
                  <nav aria-label='breadcrumb'>
                    <ol className='breadcrumb'>
                      <li className='breadcrumb-item'>
                        <Link href='/'>Home</Link>
                      </li>
                      <li className='breadcrumb-item'>
                        <Link href='/courses'>Courses</Link>
                      </li>
                      <li className='breadcrumb-item active' aria-current='page'>
                        {`${course?.attributes?.name}`}
                      </li>
                    </ol>
                  </nav>
                </div>
                <Link href={`/courses?categoryId=${course?.attributes?.category?.data?.id}`}>
                  <span className='page__title-pre'>{`${course?.attributes?.category?.data?.attributes?.title}`}</span>
                </Link>
                <h5 className='page__title-3'>{`${course?.attributes?.name}`}</h5>
              </div>
              <div className='course__meta-2 d-sm-flex mb-30'>
                <div className='course__teacher-3 d-flex align-items-center mr-70 mb-30'>
                  <div className='course__teacher-thumb-3 mr-15'>
                    <Image
                      src={
                        course?.attributes?.instructor_image.data?.attributes?.formats.thumbnail
                          .url as string
                      }
                      alt='img not found'
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className='course__teacher-info-3'>
                    <h5>Teacher</h5>
                    <p>
                      <Link href='/about'>{course?.attributes?.instructor}</Link>
                    </p>
                  </div>
                </div>
                <div className='course__update mr-80 mb-30'>
                  <h5>Last Update:</h5>
                  <p>{dateUpdate}</p>
                </div>
                <div className='course__rating-2 mb-30'>
                  <h5>Review:</h5>
                  <div className='course__rating-inner d-flex align-items-center'>
                    <ul>
                      <li>
                        <a href='#'>
                          <i className='fas fa-star'></i>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i className='fas fa-star'></i>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i className='fas fa-star'></i>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i className='fas fa-star'></i>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i className='fas fa-star'></i>
                        </a>
                      </li>
                    </ul>
                    <p>{course?.attributes?.review}</p>
                  </div>
                </div>
              </div>
              <div className='course__img w-img mb-30'>
                <Image
                  src={course?.attributes?.cover?.data?.attributes?.url as string}
                  alt='img not found'
                  width={750}
                  height={450}
                  priority
                />
              </div>
              <div className='course__tab-content mb-95'>
                <div className='tab-contents'>
                  <div className='course__description'>
                    <h3>Course Overview</h3>
                    <Markup content={content} />
                  </div>
                </div>
              </div>
              <div className='course__related'>
                <div className='row'>
                  <div className='col-xxl-12'>
                    <div className='section__title-wrapper mb-40'>
                      <h2 className='section__title'>
                        Related{' '}
                        <span className='yellow-bg yellow-bg-big'>
                          Course
                          <Image
                            src='/img/shape/yellow-bg.png'
                            alt='yellow bg shape'
                            width={150}
                            height={16}
                          />
                        </span>
                      </h2>
                      <p>You don`t have to struggle alone, you`ve got our assistance and help.</p>
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-xxl-12'>
                    <CourseSlider course={course?.attributes as any} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <CourseSidebar courseId={course?.id as any} course={course?.attributes as any} />
        </div>
      </div>
    </section>
  )
}

export default Course

export const getStaticPaths: GetStaticPaths = async () => {
  const apolloClient = initializeApollo()

  const { data } = (await apolloClient.query({
    query: CoursesDocument,
  })) as CoursesQueryResult

  const paths = data?.courses?.data.map((course) => ({
    params: { slug: course?.attributes?.slug },
  })) as any

  return {
    fallback: false,
    paths,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const apolloClient = initializeApollo()

  const variables = { filters: { slug: { eq: params?.slug } } }

  await apolloClient.query({
    query: CoursesBySlugDocument,
    variables,
  })

  return addApolloState(apolloClient, {
    props: {},
    revalidate: 60,
  })
}
