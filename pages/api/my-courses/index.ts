import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'
import { unstable_getServerSession } from 'next-auth'
import { LessonEntity } from '../../../graphql/generated/schema'
import { authOptions } from '../auth/[...nextauth]'

type ResponseData = {
  message?: string
  myCourses?: object[]
}

const handler = async (req: NextApiRequest, res: NextApiResponse<ResponseData>) => {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const session = (await unstable_getServerSession(req, res, authOptions)) as any
  if (!session) {
    return res.status(401).json({ message: 'You must be logged in' })
  }

  try {
    const { data: ordersData } = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/orders?populate=course`,
      {
        headers: {
          Authorization: `Bearer ${session.jwt}`,
        },
      },
    )

    const coursesId = ordersData.data.attributes.results.map((order: any) =>
      order.course.id.toString(),
    )

    const filters = coursesId
      .map((courseId: string) => `&filters[course][id][$eq]=${courseId}`)
      .join('')

    const { data: lessonsData } = await axios.get(
      `${process.env.BACKEND_API_URL}/lessons?populate=course${filters}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
        },
      },
    )

    const myCourses = lessonsData.data.map((lesson: LessonEntity) => ({
      courseId: lesson.attributes?.course?.data?.id,
      url: lesson.attributes?.url,
    }))

    return res.status(200).json({ myCourses })
  } catch (error) {
    return res.status(404).json({ message: 'Something went wrong!' })
  }
}

export default handler
