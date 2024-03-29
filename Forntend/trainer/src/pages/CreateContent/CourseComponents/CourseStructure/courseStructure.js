import React from 'react';
import './coursestructure.css';
import Heading from '../../../../Constants/Heading/heading';

function CourseStructure() {
  return (
    <div>
      <Heading text="Course Structure" />

<div className='box-card'>
    <div className='big-card'>
            <h2>There's a course in you. Plan it out.</h2>
            <p>Planning your course carefully will create a clear learning path for students and help you once you film. Think down to the details of each lecture including the skill you’ll teach, estimated video length, practical activities to include, and how you’ll create introductions and summaries.</p>
        </div>

        {/* Small card with image and button */}
        <div className='small-card'>
        <img src='https://images.vexels.com/media/users/3/157272/isolated/preview/e6d8b2a22f0f860af01343af96e94a8a-books-stacked-vector-by-vexels.png' alt='book' />
          {/* <img src='https://www.adazing.com/wp-content/uploads/2019/02/stacked-book-clipart-11.png' alt='book' /> */}
          {/* <img src='https://ask-education.org/wp-content/uploads/2018/02/learning-tree-colour-low-res.jpg' /> */}
         <h2>Our Resources and Tips</h2>
         <p>Tips and guides to structuring a course students love</p>
          <button>Learn Teaching</button>
        </div>



</div>


      <div className='head-para'>
        <h2>Tips</h2>
        <h3>Start with your goals.</h3>
        <p>Setting goals for what learners will accomplish in your course (also known as learning objectives) at the beginning will help you determine
           what content to include in your course and how you will teach the content to help your learners achieve the goals.
        </p>
        <h3>Create an outline.</h3>
        <p>Decide what skills you’ll teach and how you’ll teach them. Group related lectures into sections. Each section should have at least 3 lectures, and include at least one assignment or practical activity. Learn more.</p>
       
        <h3>Introduce yourself and create momentum.</h3>
        <p>People online want to start learning quickly. Make an introduction section that gives learners something to be excited about in the first 10 minutes.</p>

        <h3>Sections have a clear learning objective.</h3>
        <p>Introduce each section by describing the section's goal and why it’s important. Give lectures and sections titles that reflect their content and have a logical flow.</p>

        <h3>Lectures cover one concept.</h3>
        <p>A good lecture length is 2-7 minutes to keep students interested and help them study in short bursts. Cover a single topic in each lecture so learners can easily find and re-watch them later.</p>

        <h3>Mix and match your lecture types.</h3>
        <p>Alternate between filming yourself, your screen, and slides or other visuals. Showing yourself can help learners feel connected.</p>

        <h3>Practice activities create hands-on learning.</h3>
        <p>Help learners apply your lessons to their real world with projects, assignments, coding exercises, or worksheets.</p>

        <h2>Requirements</h2>
        <ul className='structure'>
          <li>See the complete list of course quality requirements</li>
          <li>Your course must have at least five lectures</li>
          <li>All lectures must add up to at least 30+ minutes of total video</li>
          <li>Your course is composed of valuable educational content and free of promotional or distracting materials</li>

        </ul>
      </div>
    </div>
  );
}

export default CourseStructure;
