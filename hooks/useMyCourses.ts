import axios from 'axios'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

export const useMyCourses = () => {
  const { status } = useSession()

  const [coursesId, setCoursesId] = useState<any[]>([])
  const [loadingCoursesId, setLoadingMyCoursesId] = useState(true)

  useEffect(() => {
    ;(async () => {
      setLoadingMyCoursesId(true)
      try {
        if (status === 'authenticated') {
          const { data } = await axios.get('/api/my-courses')
          setCoursesId(data.coursesId)
        }
      } catch (error: any) {
        toast.error(error.response?.data?.message)
      }
      setLoadingMyCoursesId(false)
    })()
  }, [status])

  const isMyCourse = (id: string) => Boolean(coursesId.find((courseId) => courseId === id))

  return { coursesId, loadingCoursesId, isMyCourse }
}
