import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useEffect } from 'react'
import { Course } from '../../graphql/generated/schema'

interface CourseCardProps {
  course: Course
  className?: string
}

const MyLearningCard: FC<CourseCardProps> = (props) => {
  const { course, className = '' } = props

  const router = useRouter()

  const handleClick = () => {
    window.open(course.url as string, '_blank')
  }

  return (
    <section className={`course__item white-bg mb-30 fix ${className}`} onClick={handleClick}>
      <div className='course__thumb w-img p-relative fix'>
        <Link href={router.pathname}>
          <Image
            src={course.cover?.data?.attributes?.formats.medium.url as string}
            alt={course.cover?.data?.attributes?.name as string}
            width={400}
            height={300}
          />
        </Link>
        <div className='course__tag'>
          <Link href={`/courses?categoryId=${course.category?.data?.id}`} className='blue'>
            {course.category?.data?.attributes?.title}
          </Link>
        </div>
      </div>
      <div className='course__content'>
        <h3 className='course__title' style={{ margin: 0 }}>
          <Link href={router.pathname}>{course.name}</Link>
        </h3>
      </div>
    </section>
  )
}

export default MyLearningCard
