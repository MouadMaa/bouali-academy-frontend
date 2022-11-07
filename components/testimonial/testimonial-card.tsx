import { FC, useEffect, useState } from 'react'
import Image from 'next/image'
import { Markup } from 'interweave'
import { ComponentHomeTestimonial } from '../../graphql/generated/schema'

interface TestimonialCardProps {
  testimonial: ComponentHomeTestimonial
}

const TestimonialCard: FC<TestimonialCardProps> = (props) => {
  const { testimonial } = props

  const [content, setContent] = useState('')

  const imageUrl = testimonial.image?.data?.attributes?.url

  useEffect(() => {
    setContent(testimonial.content)
  }, [testimonial.content])

  return (
    <div className='testimonial__item text-center swiper-slide'>
      <div className='testimonial__thumb'>
        {imageUrl && <Image src={imageUrl} alt={testimonial.name} width={80} height={80} />}
        {!imageUrl && (
          <div>{testimonial.name.split(' ').map((word) => word.charAt(0).toUpperCase())}</div>
        )}
      </div>
      <div className='testimonial__content'>
        <Markup content={content} />
        <div className='testimonial__info'>
          <h4>{testimonial.name}</h4>
          <span>{testimonial.function}</span>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
