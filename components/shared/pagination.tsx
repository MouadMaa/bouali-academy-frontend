import { FC } from 'react'
import { Pagination } from '../../graphql/generated/schema'

interface PaginationProps {
  pagination: Pagination
  handlePageClicked: (page: number) => void
  handleNavigationClicked: (navigation: string) => void
}

const Pagination: FC<PaginationProps> = (props) => {
  const { pagination, handlePageClicked, handleNavigationClicked } = props
  const { page, pageCount, total } = pagination

  if (!total) return null

  return (
    <section className='row'>
      <div className='col-xxl-12'>
        <div className='basic-pagination wow fadeInUp mt-30' data-wow-delay='.2s'>
          <ul className='d-flex align-items-center'>
            <li className='prev'>
              <a className='link-btn link-prev' onClick={() => handleNavigationClicked('prev')}>
                Prev
                <i className='fas fa-arrow-left'></i>
                <i className='fas fa-arrow-left'></i>
              </a>
            </li>
            {Array.from({ length: pageCount }).map((_, index) => (
              <li key={index} className={`${page === index + 1 ? 'active' : ''}`}>
                <a className='link-btn-page' onClick={() => handlePageClicked(index + 1)}>
                  <span>{index + 1}</span>
                </a>
              </li>
            ))}
            <li className='next'>
              <a className='link-btn link-next' onClick={() => handleNavigationClicked('next')}>
                Next
                <i className='fas fa-arrow-right'></i>
                <i className='fas fa-arrow-right'></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Pagination
