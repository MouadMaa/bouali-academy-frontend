import { FC } from 'react'
import { Category } from '../../graphql/generated/schema'

interface CategoryCardProps {
  category: Category
}

const CategoryCard: FC<CategoryCardProps> = (props) => {
  const { category } = props

  const handleClick = () => {
    console.log('Category card clicked', category)
  }

  return (
    <div
      className='col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6'
      role='button'
      onClick={handleClick}
    >
      <div className='category__item mb-30 transition-3 d-flex align-items-center'>
        <div className='category__icon mr-30'>
          <img
            src={category.icon?.data?.attributes?.url}
            alt={category.icon?.data?.attributes?.name}
          />
        </div>
        <div className='category__content'>
          <h4 className='category__title'>
            <a>{category.title}</a>
          </h4>
          <p>{category.sub_title}</p>
        </div>
      </div>
    </div>
  )
}

export default CategoryCard
