import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'
import { unstable_getServerSession } from 'next-auth'
import { Stripe } from 'stripe'
import { authOptions } from '../auth/[...nextauth]'
import { CourseEntity } from '../../../graphql/generated/schema'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2022-11-15',
})

type ResponseData = {
  message?: string
  paymentUrl?: string
}

const handler = async (req: NextApiRequest, res: NextApiResponse<ResponseData>) => {
  const { courseId } = req.body

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const session = (await unstable_getServerSession(req, res, authOptions)) as any
  if (!session) {
    return res.status(401).json({ message: 'You must be logged in' })
  }

  let course: CourseEntity
  try {
    const res = await axios.get(`${process.env.BACKEND_API_URL}/courses/${courseId}?populate=cover`)
    course = res.data.data
  } catch (error) {
    return res.status(404).json({ message: 'Course not found' })
  }

  try {
    if (!course.attributes?.price) {
      await axios.post(
        `${process.env.BACKEND_API_URL}/orders`,
        {
          data: {
            users_permissions_user: session.user.id,
            course: courseId,
            publishedAt: new Date().toISOString(),
          },
        },
        {
          headers: {
            Authorization: `Bearer ${session.jwt}`,
          },
        },
      )
      return res.status(200).json({ message: 'success' })
    }
  } catch (error) {
    return res.status(404).json({ message: 'Something went wrong!' })
  }

  const stripeSession = await stripe.checkout.sessions.create({
    mode: 'payment',
    payment_method_types: ['card'],
    billing_address_collection: 'auto',
    client_reference_id: session.user.id,
    customer_email: session.user?.email as string,
    line_items: [
      {
        price_data: {
          currency: 'mad',
          unit_amount: course.attributes?.price * 100,
          product_data: {
            name: `${course.attributes?.name} Course`,
            images: [course.attributes?.cover?.data?.attributes?.formats.small.url],
          },
        },
        quantity: 1,
      },
    ],
    success_url: `${process.env.FRONTEND_URL}/my-learning/?success=true`,
    cancel_url: `${process.env.FRONTEND_URL}/courses/${course.attributes?.slug}`,
    metadata: {
      courseId: course.id as string,
      jwt: session.jwt,
    },
  })

  return res.status(200).json({ message: 'success', paymentUrl: stripeSession.url as string })
}

export default handler
