import React from 'react'
import Heading from '../../../../Constants/Heading/heading';
import RichTextEditor from './RichTextEditor';
import "./courseMessage.css";


function courseMessage() {
  return (
    <div>
    <Heading text="Course Messages" />

<div className='para-head'>
    <p>Write messages to your students (optional) that will be sent automatically when they join or complete your course to encourage students to engage with course content. If you do not wish to send a welcome or congratulations message, leave the text box blank.</p>
    <h3>Welcome Message</h3>
</div>

    <RichTextEditor />

<div className='para-head'>
  <h3>Congratulations Message</h3>
</div>

    <RichTextEditor />


</div>
  )
}

export default courseMessage