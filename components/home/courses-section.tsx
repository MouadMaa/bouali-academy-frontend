import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CourseCard from '../course/course-card'
import { Course, QueryCoursesArgs, useCoursesQuery } from '../../graphql/generated/schema'

const CoursesSection: FC = () => {
  const { data } = useCoursesQuery({ variables: QueryCoursesVars })

  const courses = data?.courses?.data

  return (
    <section className='course__area pt-115 pb-90 grey-bg'>
      <div className='container'>
        <div className='row align-items-end'>
          <div className='col-xxl-5 col-xl-6 col-lg-6'>
            <div className='section__title-wrapper mb-60'>
              <h2 className='section__title'>
                Find the Right
                <br />
                Online{' '}
                <span className='yellow-bg yellow-bg-big'>
                  Course
                  <Image
                    src='/img/shape/yellow-bg.png'
                    alt='yellow bg shape'
                    width={150}
                    height={16}
                  />
                </span>{' '}
                for you
              </h2>
              <p>You don't have to struggle alone, you've got our assistance and help.</p>
            </div>
          </div>
          <div className='col-xxl-7 col-xl-6 col-lg-6'>
            <div className='course__menu d-flex justify-content-lg-end mb-60'>
              <div className='masonary-menu filter-button-group'>
                <button>
                  See All <span className='tag'>new</span>
                </button>
                <button>Trending</button>
                <button>Popularity</button>
                <button>Featured</button>
              </div>
            </div>
          </div>
        </div>
        <section className='row'>
          {courses?.map((course) => (
            <CourseCard key={course.id} course={course.attributes as Course} />
          ))}
        </section>
      </div>
      <div id='category__more'>
        <div className='category__more float-md-end fix'>
          <Link href='/courses' className='link-btn'>
            View all Courses
            <i className='fas fa-arrow-right'></i>
            <i className='fas fa-arrow-right'></i>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CoursesSection

export const QueryCoursesVars: QueryCoursesArgs = {
  pagination: { limit: 6 },
}
