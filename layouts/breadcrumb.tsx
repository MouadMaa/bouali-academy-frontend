import Link from 'next/link'
import { FC } from 'react'

interface BreadcrumbProps {
  title: string
}

const Breadcrumb: FC<BreadcrumbProps> = (props) => {
  const { title } = props

  return (
    <section
      className='page__title-area page__title-height page__title-overlay d-flex align-items-center'
      style={{ backgroundImage: `url(${'/img/about/testimonial-bg.jpg'})` }}
    >
      <div className='container'>
        <div className='row'>
          <div className='col-xxl-12'>
            <div className='page__title-wrapper mt-110'>
              <h3 className='page__title'>{title}</h3>
              <nav aria-label='breadcrumb'>
                <ol className='breadcrumb'>
                  <li className='breadcrumb-item'>
                    <Link href='/'>Home</Link>
                  </li>
                  <li className='breadcrumb-item active' aria-current='page'>
                    {title}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Breadcrumb
