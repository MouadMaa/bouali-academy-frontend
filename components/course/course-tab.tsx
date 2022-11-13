import { FC } from 'react'
import { Pagination, useCategoriesQuery } from '../../graphql/generated/schema'

interface CourseTabProps {
  pagination: Pagination
  filterCoursesByCategory: (categoryId: string) => void
}

const CourseTab: FC<CourseTabProps> = (props) => {
  const { pagination, filterCoursesByCategory } = props
  const { pageSize, total } = pagination

  const { data } = useCategoriesQuery()

  const categories = data?.categories?.data

  return (
    <section className='course__tab-inner grey-bg-2 mb-50'>
      <div className='row align-items-center'>
        <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6'>
          <div className='course__tab-wrapper d-flex align-items-center'>
            <div className='course__view'>
              <h4>{`Showing ${total ? 1 : 0} - ${
                pageSize > total ? total : pageSize
              } of ${total}`}</h4>
            </div>
          </div>
        </div>
        <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6'>
          <div className='course__sort d-flex justify-content-sm-end'>
            <div className='course__sort-inner'>
              <select onChange={(e) => filterCoursesByCategory(e.target.value)}>
                <option value={'all'}>All Categories</option>
                {categories?.map((category) => (
                  <option key={category.id} value={category.id as string}>
                    {category.attributes?.title}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CourseTab
