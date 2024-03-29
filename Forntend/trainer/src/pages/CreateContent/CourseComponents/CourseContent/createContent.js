import React from 'react'
import './createContent.css';
import Heading from '../../../../Constants/Heading/heading';
import NewSection from '../../../../CreateCourseContent/NewSection';


function createContent() {
  return (
    <div>
    <Heading text="Create Course Content" />
    
    <div className='content-creator'>
    <div className='h3-p'>
    <p>Start putting together your course by creating sections, lectures and practice activities (quizzes, coding exercises and assignments). Use your course outline to structure your content and label your sections and lectures clearly. If you’re intending to offer your course for free, the total length of video content must be less than 2 hours.</p>
  </div>

  <div>
    <NewSection/>
  </div>
  

  </div>
  </div>
    )
}

export default createContent