import { FC, useEffect, useState } from 'react'
import Image from 'next/image'
import { Markup } from 'interweave'
import { ComponentAboutTestimonial } from '../../graphql/generated/schema'

interface TestimonialCardProps {
  testimonial: ComponentAboutTestimonial
}

const TestimonialCard: FC<TestimonialCardProps> = (props) => {
  const { testimonial } = props

  const [content, setContent] = useState('')

  useEffect(() => {
    setContent(testimonial.content)
  }, [testimonial])

  const imageUrl = testimonial.image?.data?.attributes?.formats.thumbnail.url

  return (
    <div className='testimonial__item text-center swiper-slide'>
      <div className='testimonial__head'>
        <div className='testimonial__thumb'>
          {imageUrl && <Image src={imageUrl} alt={testimonial.name} width={60} height={60} />}
          {!imageUrl && (
            <div>{testimonial.name.split(' ').map((word) => word.charAt(0).toUpperCase())}</div>
          )}
        </div>
        <div className='testimonial__info'>
          <h5>{testimonial.name}</h5>
          <span>{testimonial.function}</span>
        </div>
      </div>
      <div className='testimonial__content'>
        <Markup content={content} />
      </div>
    </div>
  )
}

export default TestimonialCard
