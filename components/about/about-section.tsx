import React from 'react'

const AboutSection = () => {
  return (
    <section className='teacher__area pt-100 pb-50'>
      <div className='container'>
        <div className='row'>
          <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-6'>
            <div className='teacher__details-thumb p-relative w-img pr-30'>
              <img src='/img/teacher/teacher.jpg' alt='img not found' />
              <div className='teacher__details-shape'>
                <img
                  className='teacher-details-shape-1'
                  src='/img/shape/shape-1.png'
                  alt='img not found'
                />
                <img
                  className='teacher-details-shape-2'
                  src='/img/shape/shape-2.png'
                  alt='img not found'
                />
              </div>
            </div>
          </div>
          <div className='col-xxl-8 col-xl-8 col-lg-8'>
            <div className='teacher__wrapper'>
              <div className='teacher__top d-md-flex align-items-end justify-content-between'>
                <div className='teacher__info'>
                  <h4>Bouali Zakaria</h4>
                  <span>Teaches Interior Markater</span>
                </div>
                <div>
                  <div className='teacher__social-2'>
                    <h4>Follow Me:</h4>
                  </div>
                  <div className='teacher__follow mt-5'>
                    <div className='contact__social'>
                      {/* <h4>Follow Me</h4> */}
                      <ul>
                        <li>
                          <a href='#' className='pin'>
                            <i className='fab fa-youtube'></i>
                          </a>
                        </li>
                        <li>
                          <a href='#' className='fb'>
                            <i className='fab fa-facebook-f'></i>
                          </a>
                        </li>
                        <li>
                          <a href='#' className='tw'>
                            <i className='fab fa-twitter'></i>
                          </a>
                        </li>
                        <li>
                          <a href='#' className='ins'>
                            <i className='fab fa-instagram'></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className='teacher__bio'>
                <h3>Short Bio</h3>
                <p>
                  Only a quid me old mucker squiffy tomfoolery grub cheers ruddy cor blimey guvnor
                  in my flat, up the duff Eaton car boot up the kyver pardon you A bit of how's your
                  father David skive off sloshed, don't get shirty with me chip shop vagabond crikey
                  bugger Queen's English chap. Matie boy nancy boy bite your arm off up the kyver
                  old no biggie fantastic boot, David have it show off show off pick your nose and
                  blow off lost the plot porkies bits and bobs only a quid bugger all mate,
                  absolutely bladdered bamboozled it's your round don't get shirty with me down the
                  pub well.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
