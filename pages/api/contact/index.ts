import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

type ResponseData = {
  message: string
}

const handler = async (req: NextApiRequest, res: NextApiResponse<ResponseData>) => {
  const { name, email, subject, message } = req.body

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const transporter = nodemailer.createTransport({
    secure: false,
    port: process.env.MAIL_PORT,
    host: process.env.MAIL_HOST,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  } as any)

  try {
    await transporter.sendMail({
      to: process.env.MAIL_USER,
      from: `"Bouali Academy" <${email}>`,
      subject: 'Bouali Academy: Contact Form',
      html: `
        <div>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${subject && `<p><strong>Subject:</strong> ${subject}</p>`}
          <p><strong>Message:</strong> ${message}</p>
        </div>
      `,
    })

    res.status(200).json({ message: 'success' })
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' })
  }
}

export default handler
