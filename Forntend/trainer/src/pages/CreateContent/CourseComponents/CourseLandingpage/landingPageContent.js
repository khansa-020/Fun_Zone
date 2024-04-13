import React, { useState } from 'react';
import Heading from '../../../../Constants/Heading/heading';
import RichTextEditor from '../courseMessage/RichTextEditor';
import ImageUpload from './imageUpload';
import UploadVideo from './UploadVedio';
// import Dropdown from './Dropdown';
import './landingPageCourse.css'; 

function LandingPageContent() { 
  const [courseName, setCourseName] = useState('');
  const [courseSubtitle, setCourseSubtitle] = useState('');
  const [courseCategory, setCourseCategory] = useState('');
  const [courseLevel, setCourseLevel] = useState('');
  const [courseSkill, setCourseSkill] = useState('');

  return (
    <div> 
      <Heading text="Course Landing Page" />
      <div className="landing-page-content"> 
        <div className='p-h2'>
          <p>Your course landing page is crucial to your success on Udemy. If it’s done right, it can also help you gain visibility in search engines like Google. As you complete this section, think about creating a compelling Course Landing Page that demonstrates why someone would want to enroll in your course. Learn more about creating your course landing page and course title standards.</p>
          <h2>Course Title:</h2>      
        </div>
        <div className="fetch-input"> 
          <input type="text" value={courseName} maxLength={20} placeholder="e.g. Learn React from Scratch" onChange={(e) => setCourseName(e.target.value)} required />
          <h6>Use 1 or 2 related keywords, and mention 3-4 of the most important areas that you've covered during your course.</h6>
        </div>

        <div className='p-h2'>
          <h2>Course Subtitle:</h2>      
        </div>
        <div className="fetch-input"> 
          <input type="text" value={courseSubtitle} maxLength={20} placeholder="Insert your course Subtitle." onChange={(e) => setCourseSubtitle(e.target.value)} required />
          <h6>Your title should be a mix of attention-grabbing, informative, and optimized for search</h6>
        </div>
      
        <div className='p-h2'>
          <h2>Course Description:</h2>      
        </div>

        <div > <RichTextEditor/></div>

        <div className="fetch-input"> 
          <h6>Description should have minimum 200 words.</h6>
        </div>

        <div className='p-h2'>
          <h2>Basic Info:</h2>      
        </div>
        
       
        
        <div className='DropDown'>
        <select
        value={courseLevel}
        onChange={(e) => setCourseLevel(e.target.value)}
        required
      >
        <option value="" disabled selected>
          --Select Level--
        </option>
        <option value="basic">Basic</option>
        <option value="intermediate">Intermediate</option>
        <option value="advanced">Advanced</option>
      </select>
    
      <select
        value={courseCategory}
        onChange={(e) => setCourseCategory(e.target.value)}
        required
      >
        <option value="" disabled selected>
          --Select Category--
        </option>
        <option value="webDevelopment">Web Development</option>
        <option value="gameDevelopment">Game Development</option>
        <option value="dataScience">Data Science</option>
        <option value="machineLearning">Machine Learning</option>
        <option value="artificialIntelligence">Artificial Intelligence</option>
        <option value="dataEngineering">Data Engineering</option>
        <option value="database">Database</option>
      </select>

    
      <select
        value={courseSkill}
        onChange={(e) => setCourseSkill(e.target.value)}
        required
      >
        <option value="" disabled selected>
          --Select Skill--
        </option>
        <option value="html">HTML</option>
        <option value="css">CSS</option>
        <option value="javascript">JavaScript</option>
        <option value="react">React</option>
        <option value="unity">Unity</option>
        <option value="cSharpProgramming">C# Programming</option>
        <option value="python">Python</option>
        <option value="numpy">NumPy</option>
        <option value="pandas">Pandas</option>
        <option value="tensorflow">TensorFlow</option>
        <option value="keras">Keras</option>
        <option value="neuralNetworks">Neural Networks</option>
        <option value="naturalLanguageProcessing">Natural Language Processing (NLP)</option>
        <option value="computerVision">Computer Vision</option>
        <option value="reinforcementLearning">Reinforcement Learning</option>
        <option value="etlProcesses">ETL (Extract, Transform, Load) Processes</option>
        <option value="bigDataTechnologies">Big Data Technologies (e.g., Hadoop, Spark)</option>
        <option value="dataPipelines">Data Pipelines</option>
        <option value="dataWarehousingConcepts">Data Warehousing Concepts</option>
        <option value="sql">SQL (Structured Query Language)</option>
        <option value="rdbms">Relational Database Management Systems (RDBMS)</option>
        <option value="nosqlDatabases">NoSQL Databases</option>
        <option value="databaseDesignPrinciples">Database Design Principles</option>
      </select>
    </div>




        


        <div className='p-h2'>
          <h2>Course Image:</h2>      
        </div>

        {/* image code here */}
        <ImageUpload/>

        <div className='p-h2'>
          <h2>Course Promotion Vedio:</h2>      
        </div>

        <UploadVideo/>

        
        <div className='p-h2'>
          <h2>Instructor profile(s)</h2>      
        </div>

          <div className='profile-link'>
          <a href="/InstructorProfile">Complete Instructor Profile</a>
          </div>

      </div>
    </div>
  );
}

export default LandingPageContent;
