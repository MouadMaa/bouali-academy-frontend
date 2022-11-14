import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { Course } from '../../graphql/generated/schema'

interface CourseCardProps {
  course: Course
}

const CourseCard: FC<CourseCardProps> = (props) => {
  const { course } = props

  return (
    <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-6'>
      <div className='course__item white-bg mb-30 fix'>
        <div className='course__thumb w-img p-relative fix'>
          <Link href={`/courses/${course.slug}`}>
            <Image
              src={course.cover?.data?.attributes?.url as string}
              alt={course.cover?.data?.attributes?.name as string}
              width={400}
              height={300}
            />
          </Link>
          <div className='course__tag'>
            <Link href={`/courses/${course.category?.data?.attributes?.slug}`} className='blue'>
              {course.category?.data?.attributes?.title}
            </Link>
          </div>
        </div>
        <div className='course__content'>
          <div className='course__meta d-flex align-items-center justify-content-between'>
            <div className='course__lesson'>
              <span>
                <i className='fas fa-book'></i>
                {course.lessons?.length} Lesson
              </span>
            </div>
            <div className='course__rating'>
              <span>
                <i className='fas fa-star'></i>4.5 (72)
              </span>
            </div>
          </div>
          <h3 className='course__title'>
            <Link href={`/courses/${course.slug}`}>{course.name}</Link>
          </h3>
          <div className='course__teacher d-flex align-items-center'>
            <div className='course__teacher-thumb mr-15'>
              <Image
                src={course.instructor_image.data?.attributes?.url as string}
                alt={course.instructor}
                width={50}
                height={50}
              />
            </div>
            <h6>
              <Link href='/about'>{course.instructor}</Link>
            </h6>
          </div>
        </div>
        <div className='course__more d-flex justify-content-between align-items-center'>
          <div className='course__status d-flex align-items-center'>
            <span className='blue'>{course.price ? `${course.price.toFixed(2)} DH` : 'Free'}</span>
            <span className='old-price'>
              {course.price ? `${(course.price + 100).toFixed(2)} DH` : ''}
            </span>
          </div>
          <div className='course__btn'>
            <Link href={`/courses/${course.slug}`} className='link-btn'>
              Know Details
              <i className='fas fa-arrow-right'></i>
              <i className='fas fa-arrow-right'></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseCard
