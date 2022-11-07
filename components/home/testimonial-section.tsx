import { FC } from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import TestimonialCard from '../testimonial/testimonial-card'
import { useTestimonialsQuery } from '../../graphql/generated/schema'

const TestimonialSection: FC = () => {
  const { data } = useTestimonialsQuery()

  const testimonials = data?.testimonial?.data?.attributes?.testimonials

  return (
    <section
      className='testimonial__area testimonial__overlay pt-120 pb-120'
      style={{ backgroundImage: `url(${'/img/testimonial/testimonial-bg.jpg'})` }}
    >
      <div className='container'>
        <div className='col-xxl-12'>
          <div className='testimonial__slider swiper-container'>
            <div className='testimonial__slider-inner swiper-wrapper'>
              <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={30}
                slidesPerView={1}
                // autoplaydisableoninteraction={"false"}
                loop={true}
                breakpoints={{
                  // when window width is >= 768px
                  768: {
                    slidesPerView: 1,
                  },
                  1200: {
                    // when window width is >= 992px
                    slidesPerView: 1,
                  },
                }}
                navigation
                // pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                // onSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={() => console.log('slide change')}
              >
                {testimonials?.map((testimonial) => (
                  <SwiperSlide key={testimonial?.id}>
                    <TestimonialCard testimonial={testimonial as any} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection
