import React, { FC } from 'react'
import Link from 'next/link'
import CategoryCard from './category-card'
import { Category, QueryCategoriesArgs, useCategoriesQuery } from '../../graphql/generated/schema'
import Image from 'next/image'

const CategoriesSection: FC = () => {
  const { data } = useCategoriesQuery({ variables: QueryCategoriesVars })

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
                  Popular
                  <Image
                    src='/img/shape/yellow-bg-2.png'
                    alt='yellow bg shape'
                    width={150}
                    height={16}
                  />{' '}
                </span>
                Courses
              </h2>
            </div>
          </div>
          <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-4'>
            <div className='category__more mb-50 float-md-end fix'>
              <Link href='/categories' className='link-btn'>
                View all Categories
                <i className='fas fa-arrow-right'></i>
                <i className='fas fa-arrow-right'></i>
              </Link>
            </div>
          </div>
        </div>
        <div className='row'>
          {categories?.map(({ id, attributes }, index) => (
            <CategoryCard
              key={id}
              index={index}
              categoryId={id as string}
              category={attributes as Category}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategoriesSection

export const QueryCategoriesVars: QueryCategoriesArgs = {
  pagination: { limit: 6 },
}
