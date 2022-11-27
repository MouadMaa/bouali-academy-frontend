import { FC, useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Modal from 'react-responsive-modal'
import axios from 'axios'
import { toast } from 'react-toastify'
import { Course, useCoursesLazyQuery } from '../../graphql/generated/schema'
import Loader from '../shared/loader'
import { useMyCourses } from '../../hooks/useMyCourses'

interface CourseSidebarProps {
  courseId: string
  course: Course
}

const CourseSidebar: FC<CourseSidebarProps> = (props) => {
  const { courseId, course } = props

  const [getRelatedCourses, { data, loading }] = useCoursesLazyQuery()
  const { coursesId } = useMyCourses()

  const [showModel, setShowModel] = useState(false)
  const [loadingBuyCourse, setLoadingBuyCourse] = useState(false)

  useEffect(() => {
    const categoryId = course.category?.data?.id
    const variables = {
      filters: { category: { id: { eq: categoryId } } },
    }
    getRelatedCourses({ variables })
  }, [course, getRelatedCourses])

  const handleBuyCourse = async () => {
    setLoadingBuyCourse(true)
    try {
      const { data } = await axios.post(`/api/payments`, { courseId })
      if (data?.message === 'success' && Boolean(data?.paymentUrl)) {
        location.href = data.paymentUrl
      } else if (data?.message === 'success') {
        // push to lessons page
      }
    } catch (error: any) {
      toast.error(error.response.data.message)
    }
    setLoadingBuyCourse(false)
  }

  const relatedCourses = data?.courses?.data.filter((c) => c.attributes?.slug !== course.slug)
  const enrolled = !!coursesId.find((c) => c === courseId)

  return (
    <section className='col-xxl-4 col-xl-4 col-lg-4'>
      {showModel && (
        <Modal
          open={showModel}
          onClose={() => setShowModel(false)}
          styles={{
            modal: {
              width: '70%',
              minHeight: '50%',
              borderRadius: '10px',
              padding: '20px',
            },
            overlay: {
              background: 'rgba(0, 0, 0, 0.7)',
            },
          }}
          center
        >
          <p>No video !</p>
        </Modal>
      )}

      <div className='course__sidebar pl-70 p-relative'>
        <div className='course__shape'>
          <img className='course-dot' src='/img/course/course-dot.png' alt='img not found' />
        </div>
        <div className='course__sidebar-widget-2 white-bg mb-20'>
          <div className='course__video'>
            <div className='course__video-thumb w-img mb-25'>
              <Image
                src={course.cover?.data?.attributes?.formats.thumbnail.url as string}
                alt='img not found'
                width={250}
                height={140}
              />
              <div className='course__video-play'>
                <a className='play-btn' onClick={() => setShowModel(true)}>
                  <i className='fas fa-play'></i>
                </a>
              </div>
            </div>
            <div className='course__video-meta mb-25 d-flex align-items-center justify-content-between'>
              <div className='course__video-price'>
                <h5>{course.price ? `${course.price.toFixed(2)} DH` : 'For Free'}</h5>
                <h5 className='old-price'>
                  {course.price ? `${(course.price + 100).toFixed(2)} DH` : ''}
                </h5>
              </div>
            </div>
            <div className='course__video-content mb-35'>
              <ul>
                <li className='d-flex align-items-end'>
                  <div className='course__video-icon mr-10'>
                    <i className='fas fa-home'></i>
                  </div>
                  <div className='course__video-info'>
                    <h5>
                      <span>Instructor :</span> {`${course.instructor}`}
                    </h5>
                  </div>
                </li>
                <li className='d-flex align-items-end'>
                  <div className='course__video-icon mr-10'>
                    <i className='fas fa-book'></i>
                  </div>
                  <div className='course__video-info'>
                    <h5>
                      <span>Lectures :</span> {course.lessons?.length}
                    </h5>
                  </div>
                </li>
                <li className='d-flex align-items-end'>
                  <div className='course__video-icon mr-10'>
                    <i className='fas fa-clock'></i>
                  </div>
                  <div className='course__video-info'>
                    <h5>
                      <span>Duration :</span>12 Hours
                    </h5>
                  </div>
                </li>
                <li className='d-flex align-items-end'>
                  <div className='course__video-icon mr-10'>
                    <i className='fas fa-user'></i>
                  </div>
                  <div className='course__video-info'>
                    <h5>
                      <span>Enrolled :</span>20 students
                    </h5>
                  </div>
                </li>
                <li className='d-flex align-items-end'>
                  <div className='course__video-icon mr-10'>
                    <i className='fas fa-globe'></i>
                  </div>
                  <div className='course__video-info'>
                    <h5>
                      <span>Language :</span>Arabic
                    </h5>
                  </div>
                </li>
              </ul>
            </div>
            {enrolled ? (
              <div className='mb-20'>
                <h6>You already enrolled in this course</h6>
              </div>
            ) : (
              course.price && (
                <div className='course__payment mb-35'>
                  <h3>Payment:</h3>
                  <a>
                    <img src='/img/course/payment-1.png' alt='img not found' />
                  </a>
                </div>
              )
            )}

            <div className='course__enroll-btn'>
              <button
                className='e-btn e-btn-7 w-100'
                onClick={handleBuyCourse}
                disabled={loadingBuyCourse}
              >
                {loadingBuyCourse ? (
                  <span>Loading...</span>
                ) : (
                  <div>
                    {course.price && !enrolled ? (
                      <span>
                        Buy now <i className='fas fa-arrow-right'></i>
                      </span>
                    ) : (
                      <span>
                        Go to course <i className='fas fa-arrow-right'></i>
                      </span>
                    )}
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
        <div className='course__sidebar-widget-2 white-bg mb-20'>
          <div className='course__sidebar-course'>
            <h3 className='course__sidebar-title'>Related courses</h3>
            <ul>
              {loading && <Loader />}
              {relatedCourses?.map((course) => (
                <li key={course.id}>
                  <div className='course__sm d-flex align-items-center mb-30'>
                    <div className='course__sm-thumb mr-10'>
                      <Link href={`/courses/${course.attributes?.slug}`}>
                        <Image
                          src={course.attributes?.cover?.data?.attributes?.url as string}
                          alt={course.attributes?.cover?.data?.attributes?.name as string}
                          width={60}
                          height={60}
                        />
                      </Link>
                    </div>
                    <div className='course__sm-content'>
                      <h5>
                        <Link href={`/courses/${course.attributes?.slug}`}>
                          {course.attributes?.name}
                        </Link>
                      </h5>
                    </div>
                  </div>
                </li>
              ))}
              {relatedCourses?.length === 0 && (
                <div className='text-center mt-30 mb-10 pl-10 pr-10'>
                  <h5>There is no course yet with this category 😥</h5>
                </div>
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CourseSidebar
