import React, { FC } from 'react'
import Link from 'next/link'
import { Category, QueryCategoriesArgs, useCategoriesQuery } from '../../graphql/generated/schema'
import CategoryCard from '../category/category-card'

const CategoriesSection: FC = () => {
  const { data } = useCategoriesQuery()

  const categories = data?.categories?.data

  return (
    <section className='category__area pt-120 pb-70'>
      <div className='container'>
        <div className='row align-items-end'>
          <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-8'>
            <div className='section__title-wrapper mb-45'>
              <h2 className='section__title'>
                Explore <br />
                Our{' '}
                <span className='yellow-bg'>
                  Popular <img src='/img/shape/yellow-bg-2.png' alt='img not found' />{' '}
                </span>
                Courses
              </h2>
            </div>
          </div>
          <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-4'>
            <div className='category__more mb-50 float-md-end fix'>
              <Link href='/courses' className='link-btn'>
                View all Category
                <i className='fas fa-arrow-right'></i>
                <i className='fas fa-arrow-right'></i>
              </Link>
            </div>
          </div>
        </div>
        <div className='row'>
          {categories?.map(({ id, attributes }, index) => (
            <CategoryCard key={id} index={index} category={attributes as Category} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategoriesSection

export const CategoriesQueryVars: QueryCategoriesArgs = {
  pagination: { page: 1, pageSize: 6 },
}
