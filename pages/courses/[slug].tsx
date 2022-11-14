import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import {
  CoursesBySlugDocument,
  CoursesDocument,
  CoursesQueryResult,
  useCoursesBySlugQuery,
} from '../../graphql/generated/schema'
import { addApolloState, initializeApollo } from '../../lib/apolloClient'

const Course: NextPage = () => {
  const router = useRouter()
  const slug = router.query.slug as string

  const variables = { filters: { slug: { eq: slug } } }
  const { data } = useCoursesBySlugQuery({ variables })

  const course = data?.courses?.data[0]

  return <div>Course {`${course?.attributes?.name}`}</div>
}

export default Course

export const getStaticPaths: GetStaticPaths = async () => {
  const apolloClient = initializeApollo()

  const { data } = (await apolloClient.query({
    query: CoursesDocument,
  })) as CoursesQueryResult

  const paths = data?.courses?.data.map((course) => ({
    params: { slug: course?.attributes?.slug },
  })) as any

  return {
    fallback: false,
    paths,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const apolloClient = initializeApollo()

  const variables = { filters: { slug: { eq: params?.slug } } }

  await apolloClient.query({
    query: CoursesBySlugDocument,
    variables,
  })

  return addApolloState(apolloClient, {
    props: {},
    revalidate: 60,
  })
}
