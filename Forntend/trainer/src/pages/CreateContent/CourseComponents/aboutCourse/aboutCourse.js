import React from 'react';
import './aboutCourse.css';
import Heading from '../../../../Constants/Heading/heading';
import ObjectiveInput from './Inputstypes/objectiveInput';
import PrerequisiteInput from './Inputstypes/prerequisiteInput';
import CourseExpectInput from './Inputstypes/courseExpectInput';


function AboutCourse() {
  
  return (
    <div>
      <Heading text="About Course" />
    
      <div className='h2-p'>
        <p>The following descriptions will be publicly visible on your Course Landing Page and will have a direct impact on your course performance. These descriptions will help learners decide if your course is right for them.</p>
        <h2>What will students learn in your course?</h2>
        <p>You must enter at least 4 learning objectives or outcomes that learners can expect to achieve after completing your course.</p>
      </div>

      {/* Add ObjectiveInput here */}
      <ObjectiveInput />

      <div className='h2-p'>
        <h2>What are the requirements or prerequisites for taking your course?</h2>
        <p>List the required skills, experience, tools, or equipment learners should have prior to taking your course.
        If there are no requirements, use this space as an opportunity to lower the barrier for beginners.</p>
      </div>

      <PrerequisiteInput/>

      <div className='h2-p'>
        <h2>Who is this course for?</h2>
        <p>Write a clear description of the intended learners for your course who will find your course content valuable.
This will help you attract the right learners to your course.</p>
      </div>

      <CourseExpectInput/>

    </div>
  );
}

export default AboutCourse;
