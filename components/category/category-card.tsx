import Image from 'next/image'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { Category } from '../../graphql/generated/schema'

interface CategoryCardProps {
  categoryId: string
  category: Category
}

const CategoryCard: FC<CategoryCardProps> = (props) => {
  const { categoryId, category } = props

  const router = useRouter()

  const handleClick = () => {
    router.push(`courses?categoryId=${categoryId}`)
  }

  return (
    <div
      className='col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6'
      role='button'
      onClick={handleClick}
    >
      <div className='category__item mb-30 transition-3 d-flex align-items-center'>
        <div className='category__icon mr-30'>
          <Image
            src={category.icon?.data?.attributes?.url as string}
            alt={category.icon?.data?.attributes?.name as string}
            width={40}
            height={40}
          />
        </div>
        <div className='category__content'>
          <h4 className='category__title'>
            <a>{category.title}</a>
          </h4>
          {category.description && <p>{category.description.substring(0, 20) + `...`}</p>}
        </div>
      </div>
    </div>
  )
}

export default CategoryCard
