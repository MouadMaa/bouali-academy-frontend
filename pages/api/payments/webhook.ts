import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe'

type ResponseData = {
  message?: string
}

// stripe listen --forward-to localhost:3000/api/payments/webhook
const handler = async (req: NextApiRequest, res: NextApiResponse<ResponseData>) => {
  // if (req.method !== 'POST') {
  //   return res.status(405).json({ message: 'Method not allowed' })
  // }

  // let event
  // const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET as string
  // const signature = req.headers['stripe-signature'] as string

  // try {
  //   event = stripe.webhooks.constructEvent(
  //     (req as any).rawBody || req.body,
  //     signature,
  //     webhookSecret,
  //   )
  // } catch (error: any) {
  //   console.log(`Webhook Error: ${error.message}`)
  //   return res.status(400).send({ message: `Webhook Error: ${error.message}` })
  // }

  // Handle the event
  let event = req.body
  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object as Stripe.Checkout.Session

      try {
        await axios.post(
          `${process.env.BACKEND_API_URL}/orders`,
          {
            data: {
              users_permissions_user: session.client_reference_id,
              course: session.metadata?.courseId,
              price: Number(session.amount_total) / 100,
              publishedAt: new Date().toISOString(),
            },
          },
          {
            headers: {
              Authorization: `Bearer ${process.env.ORDER_API_TOKEN}`,
            },
          },
        )
      } catch (error) {
        return res.status(404).json({ message: 'Something went wrong!' })
      }
      break
    // ... handle other event types
    default:
      return res.status(200).json({ message: `Unhandled event type ${event.type}` })
  }

  return res.status(200).json({ message: 'success' })
}

export default handler
