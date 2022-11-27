import axios from 'axios'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'

export const useMyCourses = () => {
  const { status, data: session } = useSession()

  const [coursesId, setCoursesId] = useState<string[]>([])

  useEffect(() => {
    ;(async () => {
      if (status === 'authenticated') {
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/orders?populate=course`,
          {
            headers: {
              Authorization: `Bearer ${(session as any).jwt}`,
            },
          },
        )

        const coursesId = data.data.attributes.results.map((order: any) =>
          order.course.id.toString(),
        )
        setCoursesId(coursesId)
      }
    })()
  }, [status, session])

  return { coursesId }
}
