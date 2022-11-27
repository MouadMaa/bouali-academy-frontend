import { FC } from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import TestimonialCard from './testimonial-card'
import { useAboutQuery } from '../../graphql/generated/schema'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const TestimonialSection: FC = () => {
  const { data } = useAboutQuery()

  const testimonials = data?.about?.data?.attributes?.testimonials

  return (
    <section
      className='testimonial__area testimonial__overlay pt-100 pb-100'
      style={{ backgroundImage: `url(${'/img/about/testimonial-bg.jpg'})` }}
    >
      <div className='container'>
        <div className='col-xxl-12'>
          <div className='testimonial__slider swiper-container'>
            <div className='testimonial__slider-inner swiper-wrapper'>
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={30}
                slidesPerView={1}
                autoplay={true}
                loop={true}
                navigation
              >
                {testimonials?.map((testimonial: any) => (
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
