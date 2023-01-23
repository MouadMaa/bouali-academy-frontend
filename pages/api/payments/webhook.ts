import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import Stripe from 'stripe'
import nodemailer from 'nodemailer'

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

      if (session.status !== 'complete' || session.payment_status !== 'paid') {
        return res.status(400).json({ message: 'Something went wrong!' })
      }

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
              Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
            },
          },
        )

        const transporter = nodemailer.createTransport({
          secure: false,
          port: process.env.MAIL_PORT,
          host: process.env.MAIL_HOST,
          auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS,
          },
        } as any)

        await transporter.sendMail({
          to: process.env.MAIL_USER,
          from: `"Bouali Academy" <${session.customer_email}>`,
          subject: 'Bouali Academy: 💵 A New Course Has Been Purchased',
          html: `
              <div>
                <p><strong>Name:</strong> ${session.metadata?.username}</p>
                <p><strong>Email:</strong> ${session.customer_email}</p>
                <p><strong>${`${session.metadata?.username} bought a ${session.metadata?.courseName}`}</strong></p>
              </div>
            `,
        })
      } catch (error) {
        return res.status(500).json({ message: 'Something went wrong!' })
      }
      break
  }

  return res.status(200).json({ message: 'success' })
}

export default handler
