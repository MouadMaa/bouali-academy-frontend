import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'
import { unstable_getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth]'

type ResponseData = {
  message?: string
  coursesId?: string[]
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

    return res.status(200).json({ coursesId })
  } catch (error) {
    return res.status(404).json({ message: 'Something went wrong!' })
  }
}

export default handler
