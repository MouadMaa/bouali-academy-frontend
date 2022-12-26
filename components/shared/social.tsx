import { FC } from 'react'
import { useAboutQuery } from '../../graphql/generated/schema'

const Social: FC = () => {
  const { data } = useAboutQuery()

  const social = data?.about?.data?.attributes?.social

  return (
    <ul>
      <li>
        <a href={social?.youtube as string} target={'_blank'} rel='noreferrer' className='pin'>
          <i className='fab fa-youtube'></i>
        </a>
      </li>
      <li>
        <a href={social?.facebook as string} target={'_blank'} rel='noreferrer' className='fb'>
          <i className='fab fa-facebook-f'></i>
        </a>
      </li>
      <li>
        <a href={social?.instagram as string} target={'_blank'} rel='noreferrer' className='ins'>
          <i className='fab fa-instagram'></i>
        </a>
      </li>
      <li>
        <a href={social?.linkedin as string} target={'_blank'} rel='noreferrer' className='tw'>
          <i className='fab fa-linkedin'></i>
        </a>
      </li>
    </ul>
  )
}

export default Social
