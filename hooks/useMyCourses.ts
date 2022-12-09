import axios from 'axios'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

export const useMyCourses = () => {
  const { status } = useSession()

  const [myCourses, setMyCourses] = useState<any[]>([])
  const [loadingMyCourses, setLoadingMyCourses] = useState(true)

  useEffect(() => {
    ;(async () => {
      setLoadingMyCourses(true)
      try {
        if (status === 'authenticated') {
          const { data } = await axios.get('/api/my-courses')
          setMyCourses(data.myCourses)
        }
      } catch (error: any) {
        toast.error(error.response?.data?.message)
      }
      setLoadingMyCourses(false)
    })()
  }, [status])

  const getCourseUrl = (courseId: string) => myCourses.find((c) => c.courseId == courseId)?.url
  const isMyCourse = (courseId: string) => Boolean(myCourses.find((c) => c.courseId == courseId))

  return { myCourses, loadingMyCourses, getCourseUrl, isMyCourse }
}
