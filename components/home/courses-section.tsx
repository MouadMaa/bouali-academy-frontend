import { FC } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { Tab, TabList, TabPanel } from 'react-tabs'

import 'react-tabs/style/react-tabs.css'
const Tabs = dynamic(
  import('react-tabs').then((mod) => mod.Tabs),
  { ssr: false },
) // disable ssr

const CoursesSection: FC = () => (
  <section className='course__area pt-115 pb-90 grey-bg'>
    <Tabs id='react-tabs-276'>
      <div className='container'>
        <div className='row align-items-end'>
          <div className='col-xxl-5 col-xl-6 col-lg-6'>
            <div className='section__title-wrapper mb-60'>
              <h2 className='section__title'>
                Find the Right
                <br />
                Online{' '}
                <span className='yellow-bg yellow-bg-big'>
                  Course
                  <img src='/img/shape/yellow-bg.png' alt='img not found' />
                </span>{' '}
                for you
              </h2>
              <p>You don't have to struggle alone, you've got our assistance and help.</p>
            </div>
          </div>
          <div className='col-xxl-7 col-xl-6 col-lg-6'>
            <div className='course__menu d-flex justify-content-lg-end mb-60'>
              <div className='masonary-menu filter-button-group'>
                <TabList>
                  <Tab>
                    <button>
                      See All <span className='tag'>new</span>
                    </button>
                  </Tab>
                  <Tab>
                    <button>Trending</button>
                  </Tab>
                  <Tab>
                    <button>Popularity</button>
                  </Tab>
                  <Tab>
                    <button>Featured</button>
                  </Tab>
                  <Tab>
                    <button>Art & Design</button>
                  </Tab>
                </TabList>
              </div>
            </div>
          </div>
        </div>
        <TabPanel>
          <div className='row'>
            <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-6'>
              <div className='course__item white-bg mb-30 fix'>
                <div className='course__thumb w-img p-relative fix'>
                  <Link href='/courses'>
                    <img src='/img/course/course-1.jpg' alt='img not found' />
                  </Link>
                  <div className='course__tag'>
                    <Link href='/courses'>Art & Design</Link>
                  </div>
                </div>
                <div className='course__content'>
                  <div className='course__meta d-flex align-items-center justify-content-between'>
                    <div className='course__lesson'>
                      <span>
                        <i className='fas fa-book'></i>43 Lesson
                      </span>
                    </div>
                    <div className='course__rating'>
                      <span>
                        <i className='fas fa-star'></i>4.5 (44)
                      </span>
                    </div>
                  </div>
                  <h3 className='course__title'>
                    <Link href='/courses'>Become a product Manager learn the skills & job.</Link>
                  </h3>
                  <div className='course__teacher d-flex align-items-center'>
                    <div className='course__teacher-thumb mr-15'>
                      <img src='/img/course/teacher/teacher-1.jpg' alt='img not found' />
                    </div>
                    <h6>
                      <Link href='/'>Jim Séchen</Link>
                    </h6>
                  </div>
                </div>
                <div className='course__more d-flex justify-content-between align-items-center'>
                  <div className='course__status'>
                    <span>Free</span>
                  </div>
                  <div className='course__btn'>
                    <Link href='/courses' className='link-btn'>
                      Know Details
                      <i className='fas fa-arrow-right'></i>
                      <i className='fas fa-arrow-right'></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-6'>
              <div className='course__item white-bg mb-30 fix'>
                <div className='course__thumb w-img p-relative fix'>
                  <Link href='/courses'>
                    <img src='/img/course/course-1.jpg' alt='img not found' />
                  </Link>
                  <div className='course__tag'>
                    <Link href='/courses' className='sky-blue'>
                      Art & Design
                    </Link>
                  </div>
                </div>
                <div className='course__content'>
                  <div className='course__meta d-flex align-items-center justify-content-between'>
                    <div className='course__lesson'>
                      <span>
                        <i className='fas fa-book'></i>72 Lesson
                      </span>
                    </div>
                    <div className='course__rating'>
                      <span>
                        <i className='fas fa-star'></i>4.5 (44)
                      </span>
                    </div>
                  </div>
                  <h3 className='course__title'>
                    <Link href='/courses'>Fundamentals of music theory Learn new</Link>
                  </h3>
                  <div className='course__teacher d-flex align-items-center'>
                    <div className='course__teacher-thumb mr-15'>
                      <img src='/img/course/teacher/teacher-1.jpg' alt='img not found' />
                    </div>
                    <h6>
                      <Link href='/'>Barry Tone</Link>
                    </h6>
                  </div>
                </div>
                <div className='course__more d-flex justify-content-between align-items-center'>
                  <div className='course__status d-flex align-items-center'>
                    <span className='sky-blue'>$32.00</span>
                    <span className='old-price'>$68.00</span>
                  </div>
                  <div className='course__btn'>
                    <Link href='/courses' className='link-btn'>
                      Know Details
                      <i className='fas fa-arrow-right'></i>
                      <i className='fas fa-arrow-right'></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-6'>
              <div className='course__item white-bg mb-30 fix'>
                <div className='course__thumb w-img p-relative fix'>
                  <Link href='/courses'>
                    <img src='/img/course/course-1.jpg' alt='img not found' />
                  </Link>
                  <div className='course__tag'>
                    <Link href='/courses' className='green'>
                      Development
                    </Link>
                  </div>
                </div>
                <div className='course__content'>
                  <div className='course__meta d-flex align-items-center justify-content-between'>
                    <div className='course__lesson'>
                      <span>
                        <i className='fas fa-book'></i>14 Lesson
                      </span>
                    </div>
                    <div className='course__rating'>
                      <span>
                        <i className='fas fa-star'></i>3.5 (55)
                      </span>
                    </div>
                  </div>
                  <h3 className='course__title'>
                    <Link href='/courses'>Strategy law and organization Foundation</Link>
                  </h3>
                  <div className='course__teacher d-flex align-items-center'>
                    <div className='course__teacher-thumb mr-15'>
                      <img src='/img/course/teacher/teacher-1.jpg' alt='img not found' />
                    </div>
                    <h6>
                      <Link href='/'>Elon Gated</Link>
                    </h6>
                  </div>
                </div>
                <div className='course__more d-flex justify-content-between align-items-center'>
                  <div className='course__status d-flex align-items-center'>
                    <span className='green'>$46.00</span>
                    <span className='old-price'>$68.00</span>
                  </div>
                  <div className='course__btn'>
                    <Link href='/courses' className='link-btn'>
                      Know Details
                      <i className='fas fa-arrow-right'></i>
                      <i className='fas fa-arrow-right'></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-6'>
              <div className='course__item white-bg mb-30 fix'>
                <div className='course__thumb w-img p-relative fix'>
                  <Link href='/courses'>
                    <img src='/img/course/course-1.jpg' alt='img not found' />
                  </Link>
                  <div className='course__tag'>
                    <Link href='/courses' className='blue'>
                      Marketing
                    </Link>
                  </div>
                </div>
                <div className='course__content'>
                  <div className='course__meta d-flex align-items-center justify-content-between'>
                    <div className='course__lesson'>
                      <span>
                        <i className='fas fa-book'></i>22 Lesson
                      </span>
                    </div>
                    <div className='course__rating'>
                      <span>
                        <i className='fas fa-star'></i>4.5 (42)
                      </span>
                    </div>
                  </div>
                  <h3 className='course__title'>
                    <Link href='/courses'>The business Intelligence analyst Course 2022</Link>
                  </h3>
                  <div className='course__teacher d-flex align-items-center'>
                    <div className='course__teacher-thumb mr-15'>
                      <img src='/img/course/teacher/teacher-1.jpg' alt='img not found' />
                    </div>
                    <h6>
                      <Link href='/'>Eleanor Fant</Link>
                    </h6>
                  </div>
                </div>
                <div className='course__more d-flex justify-content-between align-items-center'>
                  <div className='course__status d-flex align-items-center'>
                    <span className='blue'>$62.00</span>
                    <span className='old-price'>$97.00</span>
                  </div>
                  <div className='course__btn'>
                    <Link href='/courses' className='link-btn'>
                      Know Details
                      <i className='fas fa-arrow-right'></i>
                      <i className='fas fa-arrow-right'></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-6'>
              <div className='course__item white-bg mb-30 fix'>
                <div className='course__thumb w-img p-relative fix'>
                  <Link href='/courses'>
                    <img src='/img/course/course-1.jpg' alt='img not found' />
                  </Link>
                  <div className='course__tag'>
                    <Link href='/courses' className='orange'>
                      Audio & Music
                    </Link>
                  </div>
                </div>
                <div className='course__content'>
                  <div className='course__meta d-flex align-items-center justify-content-between'>
                    <div className='course__lesson'>
                      <span>
                        <i className='fas fa-book'></i>18 Lesson
                      </span>
                    </div>
                    <div className='course__rating'>
                      <span>
                        <i className='fas fa-star'></i>4.5 (37)
                      </span>
                    </div>
                  </div>
                  <h3 className='course__title'>
                    <Link href='/courses'>Build your media and Public presence</Link>
                  </h3>
                  <div className='course__teacher d-flex align-items-center'>
                    <div className='course__teacher-thumb mr-15'>
                      <img src='/img/course/teacher/teacher-1.jpg' alt='img not found' />
                    </div>
                    <h6>
                      <Link href='/'>Pelican Steve</Link>
                    </h6>
                  </div>
                </div>
                <div className='course__more d-flex justify-content-between align-items-center'>
                  <div className='course__status d-flex align-items-center'>
                    <span className='orange'>$62.00</span>
                    <span className='old-price'>$97.00</span>
                  </div>
                  <div className='course__btn'>
                    <Link href='/courses' className='link-btn'>
                      Know Details
                      <i className='fas fa-arrow-right'></i>
                      <i className='fas fa-arrow-right'></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-6'>
              <div className='course__item white-bg mb-30 fix'>
                <div className='course__thumb w-img p-relative fix'>
                  <Link href='/courses'>
                    <img src='/img/course/course-1.jpg' alt='img not found' />
                  </Link>
                  <div className='course__tag'>
                    <Link href='/courses' className='pink'>
                      UX Design
                    </Link>
                  </div>
                </div>
                <div className='course__content'>
                  <div className='course__meta d-flex align-items-center justify-content-between'>
                    <div className='course__lesson'>
                      <span>
                        <i className='fas fa-book'></i>13 Lesson
                      </span>
                    </div>
                    <div className='course__rating'>
                      <span>
                        <i className='fas fa-star'></i>4.5 (72)
                      </span>
                    </div>
                  </div>
                  <h3 className='course__title'>
                    <Link href='/courses'>Creative writing through Storytelling</Link>
                  </h3>
                  <div className='course__teacher d-flex align-items-center'>
                    <div className='course__teacher-thumb mr-15'>
                      <img src='/img/course/teacher/teacher-1.jpg' alt='img not found' />
                    </div>
                    <h6>
                      <Link href='/'>Shahnewaz Sakil</Link>
                    </h6>
                  </div>
                </div>
                <div className='course__more d-flex justify-content-between align-items-center'>
                  <div className='course__status d-flex align-items-center'>
                    <span className='pink'>$46.00</span>
                    <span className='old-price'>$72.00</span>
                  </div>
                  <div className='course__btn'>
                    <Link href='/courses' className='link-btn'>
                      Know Details
                      <i className='fas fa-arrow-right'></i>
                      <i className='fas fa-arrow-right'></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className='row'>
            <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-6'>
              <div className='course__item white-bg mb-30 fix'>
                <div className='course__thumb w-img p-relative fix'>
                  <Link href='/courses'>
                    <img src='/img/course/course-1.jpg' alt='img not found' />
                  </Link>
                  <div className='course__tag'>
                    <Link href='/courses' className='sky-blue'>
                      Art & Design
                    </Link>
                  </div>
                </div>
                <div className='course__content'>
                  <div className='course__meta d-flex align-items-center justify-content-between'>
                    <div className='course__lesson'>
                      <span>
                        <i className='fas fa-book'></i>72 Lesson
                      </span>
                    </div>
                    <div className='course__rating'>
                      <span>
                        <i className='fas fa-star'></i>4.5 (44)
                      </span>
                    </div>
                  </div>
                  <h3 className='course__title'>
                    <Link href='/courses'>Fundamentals of music theory Learn new</Link>
                  </h3>
                  <div className='course__teacher d-flex align-items-center'>
                    <div className='course__teacher-thumb mr-15'>
                      <img src='/img/course/teacher/teacher-1.jpg' alt='img not found' />
                    </div>
                    <h6>
                      <Link href='/'>Barry Tone</Link>
                    </h6>
                  </div>
                </div>
                <div className='course__more d-flex justify-content-between align-items-center'>
                  <div className='course__status d-flex align-items-center'>
                    <span className='sky-blue'>$32.00</span>
                    <span className='old-price'>$68.00</span>
                  </div>
                  <div className='course__btn'>
                    <Link href='/courses' className='link-btn'>
                      Know Details
                      <i className='fas fa-arrow-right'></i>
                      <i className='fas fa-arrow-right'></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-6'>
              <div className='course__item white-bg mb-30 fix'>
                <div className='course__thumb w-img p-relative fix'>
                  <Link href='/courses'>
                    <img src='/img/course/course-1.jpg' alt='img not found' />
                  </Link>
                  <div className='course__tag'>
                    <Link href='/courses' className='green'>
                      Development
                    </Link>
                  </div>
                </div>
                <div className='course__content'>
                  <div className='course__meta d-flex align-items-center justify-content-between'>
                    <div className='course__lesson'>
                      <span>
                        <i className='fas fa-book'></i>14 Lesson
                      </span>
                    </div>
                    <div className='course__rating'>
                      <span>
                        <i className='fas fa-star'></i>3.5 (55)
                      </span>
                    </div>
                  </div>
                  <h3 className='course__title'>
                    <Link href='/courses'>Strategy law and organization Foundation</Link>
                  </h3>
                  <div className='course__teacher d-flex align-items-center'>
                    <div className='course__teacher-thumb mr-15'>
                      <img src='/img/course/teacher/teacher-1.jpg' alt='img not found' />
                    </div>
                    <h6>
                      <Link href='/'>Elon Gated</Link>
                    </h6>
                  </div>
                </div>
                <div className='course__more d-flex justify-content-between align-items-center'>
                  <div className='course__status d-flex align-items-center'>
                    <span className='green'>$46.00</span>
                    <span className='old-price'>$68.00</span>
                  </div>
                  <div className='course__btn'>
                    <Link href='/courses' className='link-btn'>
                      Know Details
                      <i className='fas fa-arrow-right'></i>
                      <i className='fas fa-arrow-right'></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-6'>
              <div className='course__item white-bg mb-30 fix'>
                <div className='course__thumb w-img p-relative fix'>
                  <Link href='/courses'>
                    <img src='/img/course/course-1.jpg' alt='img not found' />
                  </Link>
                  <div className='course__tag'>
                    <Link href='/courses' className='blue'>
                      Marketing
                    </Link>
                  </div>
                </div>
                <div className='course__content'>
                  <div className='course__meta d-flex align-items-center justify-content-between'>
                    <div className='course__lesson'>
                      <span>
                        <i className='fas fa-book'></i>22 Lesson
                      </span>
                    </div>
                    <div className='course__rating'>
                      <span>
                        <i className='fas fa-star'></i>4.5 (42)
                      </span>
                    </div>
                  </div>
                  <h3 className='course__title'>
                    <Link href='/courses'>The business Intelligence analyst Course 2022</Link>
                  </h3>
                  <div className='course__teacher d-flex align-items-center'>
                    <div className='course__teacher-thumb mr-15'>
                      <img src='/img/course/teacher/teacher-1.jpg' alt='img not found' />
                    </div>
                    <h6>
                      <Link href='/'>Eleanor Fant</Link>
                    </h6>
                  </div>
                </div>
                <div className='course__more d-flex justify-content-between align-items-center'>
                  <div className='course__status d-flex align-items-center'>
                    <span className='blue'>$62.00</span>
                    <span className='old-price'>$97.00</span>
                  </div>
                  <div className='course__btn'>
                    <Link href='/courses' className='link-btn'>
                      Know Details
                      <i className='fas fa-arrow-right'></i>
                      <i className='fas fa-arrow-right'></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-6'>
              <div className='course__item white-bg mb-30 fix'>
                <div className='course__thumb w-img p-relative fix'>
                  <Link href='/courses'>
                    <img src='/img/course/course-1.jpg' alt='img not found' />
                  </Link>
                  <div className='course__tag'>
                    <Link href='/courses' className='orange'>
                      Audio & Music
                    </Link>
                  </div>
                </div>
                <div className='course__content'>
                  <div className='course__meta d-flex align-items-center justify-content-between'>
                    <div className='course__lesson'>
                      <span>
                        <i className='fas fa-book'></i>18 Lesson
                      </span>
                    </div>
                    <div className='course__rating'>
                      <span>
                        <i className='fas fa-star'></i>4.5 (37)
                      </span>
                    </div>
                  </div>
                  <h3 className='course__title'>
                    <Link href='/courses'>Build your media and Public presence</Link>
                  </h3>
                  <div className='course__teacher d-flex align-items-center'>
                    <div className='course__teacher-thumb mr-15'>
                      <img src='/img/course/teacher/teacher-1.jpg' alt='img not found' />
                    </div>
                    <h6>
                      <Link href='/'>Steve Smith</Link>
                    </h6>
                  </div>
                </div>
                <div className='course__more d-flex justify-content-between align-items-center'>
                  <div className='course__status d-flex align-items-center'>
                    <span className='orange'>$62.00</span>
                    <span className='old-price'>$97.00</span>
                  </div>
                  <div className='course__btn'>
                    <Link href='/courses' className='link-btn'>
                      Know Details
                      <i className='fas fa-arrow-right'></i>
                      <i className='fas fa-arrow-right'></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className='row'>
            <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-6'>
              <div className='course__item white-bg mb-30 fix'>
                <div className='course__thumb w-img p-relative fix'>
                  <Link href='/courses'>
                    <img src='/img/course/course-1.jpg' alt='img not found' />
                  </Link>
                  <div className='course__tag'>
                    <Link href='/courses' className='sky-blue'>
                      Art & Design
                    </Link>
                  </div>
                </div>
                <div className='course__content'>
                  <div className='course__meta d-flex align-items-center justify-content-between'>
                    <div className='course__lesson'>
                      <span>
                        <i className='fas fa-book'></i>72 Lesson
                      </span>
                    </div>
                    <div className='course__rating'>
                      <span>
                        <i className='fas fa-star'></i>4.5 (44)
                      </span>
                    </div>
                  </div>
                  <h3 className='course__title'>
                    <Link href='/courses'>Fundamentals of music theory Learn new</Link>
                  </h3>
                  <div className='course__teacher d-flex align-items-center'>
                    <div className='course__teacher-thumb mr-15'>
                      <img src='/img/course/teacher/teacher-1.jpg' alt='img not found' />
                    </div>
                    <h6>
                      <Link href='/'>Andrew Nihal</Link>
                    </h6>
                  </div>
                </div>
                <div className='course__more d-flex justify-content-between align-items-center'>
                  <div className='course__status d-flex align-items-center'>
                    <span className='sky-blue'>$32.00</span>
                    <span className='old-price'>$68.00</span>
                  </div>
                  <div className='course__btn'>
                    <Link href='/courses' className='link-btn'>
                      Know Details
                      <i className='fas fa-arrow-right'></i>
                      <i className='fas fa-arrow-right'></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-6'>
              <div className='course__item white-bg mb-30 fix'>
                <div className='course__thumb w-img p-relative fix'>
                  <Link href='/courses'>
                    <img src='/img/course/course-1.jpg' alt='img not found' />
                  </Link>
                  <div className='course__tag'>
                    <Link href='/courses' className='green'>
                      Development
                    </Link>
                  </div>
                </div>
                <div className='course__content'>
                  <div className='course__meta d-flex align-items-center justify-content-between'>
                    <div className='course__lesson'>
                      <span>
                        <i className='fas fa-book'></i>14 Lesson
                      </span>
                    </div>
                    <div className='course__rating'>
                      <span>
                        <i className='fas fa-star'></i>3.5 (55)
                      </span>
                    </div>
                  </div>
                  <h3 className='course__title'>
                    <Link href='/courses'>Strategy law and organization Foundation</Link>
                  </h3>
                  <div className='course__teacher d-flex align-items-center'>
                    <div className='course__teacher-thumb mr-15'>
                      <img src='/img/course/teacher/teacher-1.jpg' alt='img not found' />
                    </div>
                    <h6>
                      <Link href='/'>Jhon Saif</Link>
                    </h6>
                  </div>
                </div>
                <div className='course__more d-flex justify-content-between align-items-center'>
                  <div className='course__status d-flex align-items-center'>
                    <span className='green'>$46.00</span>
                    <span className='old-price'>$68.00</span>
                  </div>
                  <div className='course__btn'>
                    <Link href='/courses' className='link-btn'>
                      Know Details
                      <i className='fas fa-arrow-right'></i>
                      <i className='fas fa-arrow-right'></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-6'>
              <div className='course__item white-bg mb-30 fix'>
                <div className='course__thumb w-img p-relative fix'>
                  <Link href='/courses'>
                    <img src='/img/course/course-1.jpg' alt='img not found' />
                  </Link>
                  <div className='course__tag'>
                    <Link href='/courses' className='blue'>
                      Marketing
                    </Link>
                  </div>
                </div>
                <div className='course__content'>
                  <div className='course__meta d-flex align-items-center justify-content-between'>
                    <div className='course__lesson'>
                      <span>
                        <i className='fas fa-book'></i>22 Lesson
                      </span>
                    </div>
                    <div className='course__rating'>
                      <span>
                        <i className='fas fa-star'></i>4.5 (42)
                      </span>
                    </div>
                  </div>
                  <h3 className='course__title'>
                    <Link href='/courses'>The business Intelligence analyst Course 2022</Link>
                  </h3>
                  <div className='course__teacher d-flex align-items-center'>
                    <div className='course__teacher-thumb mr-15'>
                      <img src='/img/course/teacher/teacher-1.jpg' alt='img not found' />
                    </div>
                    <h6>
                      <Link href='/'>Kevin Peter</Link>
                    </h6>
                  </div>
                </div>
                <div className='course__more d-flex justify-content-between align-items-center'>
                  <div className='course__status d-flex align-items-center'>
                    <span className='blue'>$62.00</span>
                    <span className='old-price'>$97.00</span>
                  </div>
                  <div className='course__btn'>
                    <Link href='/courses' className='link-btn'>
                      Know Details
                      <i className='fas fa-arrow-right'></i>
                      <i className='fas fa-arrow-right'></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-6'>
              <div className='course__item white-bg mb-30 fix'>
                <div className='course__thumb w-img p-relative fix'>
                  <Link href='/courses'>
                    <img src='/img/course/course-1.jpg' alt='img not found' />
                  </Link>
                  <div className='course__tag'>
                    <Link href='/courses' className='orange'>
                      Audio & Music
                    </Link>
                  </div>
                </div>
                <div className='course__content'>
                  <div className='course__meta d-flex align-items-center justify-content-between'>
                    <div className='course__lesson'>
                      <span>
                        <i className='fas fa-book'></i>18 Lesson
                      </span>
                    </div>
                    <div className='course__rating'>
                      <span>
                        <i className='fas fa-star'></i>4.5 (37)
                      </span>
                    </div>
                  </div>
                  <h3 className='course__title'>
                    <Link href='/courses'>Build your media and Public presence</Link>
                  </h3>
                  <div className='course__teacher d-flex align-items-center'>
                    <div className='course__teacher-thumb mr-15'>
                      <img src='/img/course/teacher/teacher-1.jpg' alt='img not found' />
                    </div>
                    <h6>
                      <Link href='/'>Peter Parker</Link>
                    </h6>
                  </div>
                </div>
                <div className='course__more d-flex justify-content-between align-items-center'>
                  <div className='course__status d-flex align-items-center'>
                    <span className='orange'>$62.00</span>
                    <span className='old-price'>$97.00</span>
                  </div>
                  <div className='course__btn'>
                    <Link href='/courses' className='link-btn'>
                      Know Details
                      <i className='fas fa-arrow-right'></i>
                      <i className='fas fa-arrow-right'></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-6'>
              <div className='course__item white-bg mb-30 fix'>
                <div className='course__thumb w-img p-relative fix'>
                  <Link href='/courses'>
                    <img src='/img/course/course-1.jpg' alt='img not found' />
                  </Link>
                  <div className='course__tag'>
                    <Link href='/courses' className='pink'>
                      UX Design
                    </Link>
                  </div>
                </div>
                <div className='course__content'>
                  <div className='course__meta d-flex align-items-center justify-content-between'>
                    <div className='course__lesson'>
                      <span>
                        <i className='fas fa-book'></i>13 Lesson
                      </span>
                    </div>
                    <div className='course__rating'>
                      <span>
                        <i className='fas fa-star'></i>4.5 (72)
                      </span>
                    </div>
                  </div>
                  <h3 className='course__title'>
                    <Link href='/courses'>Creative writing through Storytelling</Link>
                  </h3>
                  <div className='course__teacher d-flex align-items-center'>
                    <div className='course__teacher-thumb mr-15'>
                      <img src='/img/course/teacher/teacher-1.jpg' alt='img not found' />
                    </div>
                    <h6>
                      <Link href='/'>Steve Long</Link>
                    </h6>
                  </div>
                </div>
                <div className='course__more d-flex justify-content-between align-items-center'>
                  <div className='course__status d-flex align-items-center'>
                    <span className='pink'>$46.00</span>
                    <span className='old-price'>$72.00</span>
                  </div>
                  <div className='course__btn'>
                    <Link href='/courses' className='link-btn'>
                      Know Details
                      <i className='fas fa-arrow-right'></i>
                      <i className='fas fa-arrow-right'></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className='row'>
            <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-6'>
              <div className='course__item white-bg mb-30 fix'>
                <div className='course__thumb w-img p-relative fix'>
                  <Link href='/courses'>
                    <img src='/img/course/course-1.jpg' alt='img not found' />
                  </Link>
                  <div className='course__tag'>
                    <Link href='/courses'>Art & Design</Link>
                  </div>
                </div>
                <div className='course__content'>
                  <div className='course__meta d-flex align-items-center justify-content-between'>
                    <div className='course__lesson'>
                      <span>
                        <i className='fas fa-book'></i>43 Lesson
                      </span>
                    </div>
                    <div className='course__rating'>
                      <span>
                        <i className='fas fa-star'></i>4.5 (44)
                      </span>
                    </div>
                  </div>
                  <h3 className='course__title'>
                    <Link href='/courses'>Become a product Manager learn the skills & job.</Link>
                  </h3>
                  <div className='course__teacher d-flex align-items-center'>
                    <div className='course__teacher-thumb mr-15'>
                      <img src='/img/course/teacher/teacher-1.jpg' alt='img not found' />
                    </div>
                    <h6>
                      <Link href='/'>Peterson</Link>
                    </h6>
                  </div>
                </div>
                <div className='course__more d-flex justify-content-between align-items-center'>
                  <div className='course__status'>
                    <span>Free</span>
                  </div>
                  <div className='course__btn'>
                    <Link href='/courses' className='link-btn'>
                      Know Details
                      <i className='fas fa-arrow-right'></i>
                      <i className='fas fa-arrow-right'></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-6'>
              <div className='course__item white-bg mb-30 fix'>
                <div className='course__thumb w-img p-relative fix'>
                  <Link href='/courses'>
                    <img src='/img/course/course-1.jpg' alt='img not found' />
                  </Link>
                  <div className='course__tag'>
                    <Link href='/courses' className='sky-blue'>
                      Art & Design
                    </Link>
                  </div>
                </div>
                <div className='course__content'>
                  <div className='course__meta d-flex align-items-center justify-content-between'>
                    <div className='course__lesson'>
                      <span>
                        <i className='fas fa-book'></i>72 Lesson
                      </span>
                    </div>
                    <div className='course__rating'>
                      <span>
                        <i className='fas fa-star'></i>4.5 (44)
                      </span>
                    </div>
                  </div>
                  <h3 className='course__title'>
                    <Link href='/courses'>Fundamentals of music theory Learn new</Link>
                  </h3>
                  <div className='course__teacher d-flex align-items-center'>
                    <div className='course__teacher-thumb mr-15'>
                      <img src='/img/course/teacher/teacher-1.jpg' alt='img not found' />
                    </div>
                    <h6>
                      <Link href='/'>Willamson</Link>
                    </h6>
                  </div>
                </div>
                <div className='course__more d-flex justify-content-between align-items-center'>
                  <div className='course__status d-flex align-items-center'>
                    <span className='sky-blue'>$32.00</span>
                    <span className='old-price'>$68.00</span>
                  </div>
                  <div className='course__btn'>
                    <Link href='/courses' className='link-btn'>
                      Know Details
                      <i className='fas fa-arrow-right'></i>
                      <i className='fas fa-arrow-right'></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-6'>
              <div className='course__item white-bg mb-30 fix'>
                <div className='course__thumb w-img p-relative fix'>
                  <Link href='/courses'>
                    <img src='/img/course/course-1.jpg' alt='img not found' />
                  </Link>
                  <div className='course__tag'>
                    <Link href='/courses' className='green'>
                      Development
                    </Link>
                  </div>
                </div>
                <div className='course__content'>
                  <div className='course__meta d-flex align-items-center justify-content-between'>
                    <div className='course__lesson'>
                      <span>
                        <i className='fas fa-book'></i>14 Lesson
                      </span>
                    </div>
                    <div className='course__rating'>
                      <span>
                        <i className='fas fa-star'></i>3.5 (55)
                      </span>
                    </div>
                  </div>
                  <h3 className='course__title'>
                    <Link href='/courses'>Strategy law and organization Foundation</Link>
                  </h3>
                  <div className='course__teacher d-flex align-items-center'>
                    <div className='course__teacher-thumb mr-15'>
                      <img src='/img/course/teacher/teacher-1.jpg' alt='img not found' />
                    </div>
                    <h6>
                      <Link href='/'>Martin</Link>
                    </h6>
                  </div>
                </div>
                <div className='course__more d-flex justify-content-between align-items-center'>
                  <div className='course__status d-flex align-items-center'>
                    <span className='green'>$46.00</span>
                    <span className='old-price'>$68.00</span>
                  </div>
                  <div className='course__btn'>
                    <Link href='/courses' className='link-btn'>
                      Know Details
                      <i className='fas fa-arrow-right'></i>
                      <i className='fas fa-arrow-right'></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className='row'>
            <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-6'>
              <div className='course__item white-bg mb-30 fix'>
                <div className='course__thumb w-img p-relative fix'>
                  <Link href='/courses'>
                    <img src='/img/course/course-1.jpg' alt='img not found' />
                  </Link>
                  <div className='course__tag'>
                    <Link href='/courses' className='sky-blue'>
                      Art & Design
                    </Link>
                  </div>
                </div>
                <div className='course__content'>
                  <div className='course__meta d-flex align-items-center justify-content-between'>
                    <div className='course__lesson'>
                      <span>
                        <i className='fas fa-book'></i>72 Lesson
                      </span>
                    </div>
                    <div className='course__rating'>
                      <span>
                        <i className='fas fa-star'></i>4.5 (44)
                      </span>
                    </div>
                  </div>
                  <h3 className='course__title'>
                    <Link href='/courses'>Fundamentals of music theory Learn new</Link>
                  </h3>
                  <div className='course__teacher d-flex align-items-center'>
                    <div className='course__teacher-thumb mr-15'>
                      <img src='/img/course/teacher/teacher-1.jpg' alt='img not found' />
                    </div>
                    <h6>
                      <Link href='/'>Jhon Doe</Link>
                    </h6>
                  </div>
                </div>
                <div className='course__more d-flex justify-content-between align-items-center'>
                  <div className='course__status d-flex align-items-center'>
                    <span className='sky-blue'>$32.00</span>
                    <span className='old-price'>$68.00</span>
                  </div>
                  <div className='course__btn'>
                    <Link href='/courses' className='link-btn'>
                      Know Details
                      <i className='fas fa-arrow-right'></i>
                      <i className='fas fa-arrow-right'></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-6'>
              <div className='course__item white-bg mb-30 fix'>
                <div className='course__thumb w-img p-relative fix'>
                  <Link href='/courses'>
                    <img src='/img/course/course-1.jpg' alt='img not found' />
                  </Link>
                  <div className='course__tag'>
                    <Link href='/courses' className='green'>
                      Development
                    </Link>
                  </div>
                </div>
                <div className='course__content'>
                  <div className='course__meta d-flex align-items-center justify-content-between'>
                    <div className='course__lesson'>
                      <span>
                        <i className='fas fa-book'></i>14 Lesson
                      </span>
                    </div>
                    <div className='course__rating'>
                      <span>
                        <i className='fas fa-star'></i>3.5 (55)
                      </span>
                    </div>
                  </div>
                  <h3 className='course__title'>
                    <Link href='/courses'>Strategy law and organization Foundation</Link>
                  </h3>
                  <div className='course__teacher d-flex align-items-center'>
                    <div className='course__teacher-thumb mr-15'>
                      <img src='/img/course/teacher/teacher-1.jpg' alt='img not found' />
                    </div>
                    <h6>
                      <Link href='/'>Spider</Link>
                    </h6>
                  </div>
                </div>
                <div className='course__more d-flex justify-content-between align-items-center'>
                  <div className='course__status d-flex align-items-center'>
                    <span className='green'>$46.00</span>
                    <span className='old-price'>$68.00</span>
                  </div>
                  <div className='course__btn'>
                    <Link href='/courses' className='link-btn'>
                      Know Details
                      <i className='fas fa-arrow-right'></i>
                      <i className='fas fa-arrow-right'></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-6'>
              <div className='course__item white-bg mb-30 fix'>
                <div className='course__thumb w-img p-relative fix'>
                  <Link href='/courses'>
                    <img src='/img/course/course-1.jpg' alt='img not found' />
                  </Link>
                  <div className='course__tag'>
                    <Link href='/courses' className='blue'>
                      Marketing
                    </Link>
                  </div>
                </div>
                <div className='course__content'>
                  <div className='course__meta d-flex align-items-center justify-content-between'>
                    <div className='course__lesson'>
                      <span>
                        <i className='fas fa-book'></i>22 Lesson
                      </span>
                    </div>
                    <div className='course__rating'>
                      <span>
                        <i className='fas fa-star'></i>4.5 (42)
                      </span>
                    </div>
                  </div>
                  <h3 className='course__title'>
                    <Link href='/courses'>The business Intelligence analyst Course 2022</Link>
                  </h3>
                  <div className='course__teacher d-flex align-items-center'>
                    <div className='course__teacher-thumb mr-15'>
                      <img src='/img/course/teacher/teacher-1.jpg' alt='img not found' />
                    </div>
                    <h6>
                      <Link href='/'>Ross Taylor</Link>
                    </h6>
                  </div>
                </div>
                <div className='course__more d-flex justify-content-between align-items-center'>
                  <div className='course__status d-flex align-items-center'>
                    <span className='blue'>$62.00</span>
                    <span className='old-price'>$97.00</span>
                  </div>
                  <div className='course__btn'>
                    <Link href='/courses' className='link-btn'>
                      Know Details
                      <i className='fas fa-arrow-right'></i>
                      <i className='fas fa-arrow-right'></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-6'>
              <div className='course__item white-bg mb-30 fix'>
                <div className='course__thumb w-img p-relative fix'>
                  <Link href='/courses'>
                    <img src='/img/course/course-1.jpg' alt='img not found' />
                  </Link>
                  <div className='course__tag'>
                    <Link href='/courses' className='orange'>
                      Audio & Music
                    </Link>
                  </div>
                </div>
                <div className='course__content'>
                  <div className='course__meta d-flex align-items-center justify-content-between'>
                    <div className='course__lesson'>
                      <span>
                        <i className='fas fa-book'></i>18 Lesson
                      </span>
                    </div>
                    <div className='course__rating'>
                      <span>
                        <i className='fas fa-star'></i>4.5 (37)
                      </span>
                    </div>
                  </div>
                  <h3 className='course__title'>
                    <Link href='/courses'>Build your media and Public presence</Link>
                  </h3>
                  <div className='course__teacher d-flex align-items-center'>
                    <div className='course__teacher-thumb mr-15'>
                      <img src='/img/course/teacher/teacher-1.jpg' alt='img not found' />
                    </div>
                    <h6>
                      <Link href='/'>Mitchel Stark</Link>
                    </h6>
                  </div>
                </div>
                <div className='course__more d-flex justify-content-between align-items-center'>
                  <div className='course__status d-flex align-items-center'>
                    <span className='orange'>$62.00</span>
                    <span className='old-price'>$97.00</span>
                  </div>
                  <div className='course__btn'>
                    <Link href='/courses' className='link-btn'>
                      Know Details
                      <i className='fas fa-arrow-right'></i>
                      <i className='fas fa-arrow-right'></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
      </div>
    </Tabs>
    <div id='category__more'>
      <div className='category__more float-md-end fix'>
        <Link href='/courses' className='link-btn'>
          View all Courses
          <i className='fas fa-arrow-right'></i>
          <i className='fas fa-arrow-right'></i>
        </Link>
      </div>
    </div>
  </section>
)

export default CoursesSection
