import { GetStaticProps, NextPage } from 'next'
import { Fragment } from 'react'
import CategoryCard from '../components/category/category-card'
import Breadcrumb from '../components/layout/breadcrumb'
import { CategoriesDocument, useCategoriesQuery } from '../graphql/generated/schema'
import { addApolloState, initializeApollo } from '../lib/apolloClient'

const Categories: NextPage = () => {
  const { data } = useCategoriesQuery()

  const categories = data?.categories?.data

  return (
    <Fragment>
      <Breadcrumb title='Categories' />
      <section className='category__area pt-120 pb-70'>
        <div className='container'>
          <div className='section__title-wrapper mb-45'>
            <h2 className='section__title'>
              Explore Our{' '}
              <span className='yellow-bg'>
                Popular
                <img src='/img/shape/yellow-bg-2.png' alt='yellow bg shape' />{' '}
              </span>
              Courses
            </h2>
          </div>
          <div className='row'>
            {categories?.map((category, index) => (
              <CategoryCard
                key={category.id}
                index={index}
                categoryId={category.id as string}
                category={category.attributes as any}
              />
            ))}
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default Categories

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: CategoriesDocument,
  })

  return addApolloState(apolloClient, {
    props: {},
    revalidate: 60,
  })
}
