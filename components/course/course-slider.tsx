import { FC } from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Course, useCoursesQuery } from '../../graphql/generated/schema'
import Loader from '../shared/loader'
import CourseCard from './course-card'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

interface CourseSliderProps {
  course: Course
}

const CourseSlider: FC<CourseSliderProps> = (props) => {
  const { course } = props

  const { data, loading } = useCoursesQuery({ variables: { pagination: { limit: 8 } } })

  const courses = data?.courses?.data.filter((c) => c.attributes?.slug !== course.slug)

  return (
    <section className='course__slider swiper-container'>
      <div className='swiper-wrapper pb-10'>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={30}
          slidesPerView={1}
          // autoplaydisableoninteraction={'false'}
          loop={true}
          breakpoints={{
            // when window width is >= 768px
            768: {
              slidesPerView: 2,
            },
            1200: {
              // when window width is >= 992px
              slidesPerView: 2,
            },
          }}
          pagination={{ clickable: true }}
        >
          {courses?.map((course) => (
            <SwiperSlide key={course.id}>
              <CourseCard
                course={course.attributes as any}
                classNames='course__item-3 swiper-slide mb-80'
              />
            </SwiperSlide>
          ))}
          {loading && (
            <SwiperSlide>
              <Loader />
            </SwiperSlide>
          )}
          {courses?.length === 0 && (
            <SwiperSlide>
              <div className='text-center mt-40 mb-40'>
                <h4>There is no courses 😥</h4>
              </div>
            </SwiperSlide>
          )}
        </Swiper>
      </div>
    </section>
  )
}

export default CourseSlider
