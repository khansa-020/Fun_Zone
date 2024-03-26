import React, { useState } from 'react';
import Logo from '../../../Constants/Logo/logo'; // Import the Logo component
import './CreateCourse.css'; // Import the CSS file for styling

function CourseCreationForm() {
  const [step, setStep] = useState(1); // Initialize step state to 1
  const [courseName, setCourseName] = useState('');
  const [courseDescription, setCourseDescription] = useState('');
  const [courseDuration, setCourseDuration] = useState(1); // Default duration
  const [courseType, setCourseType] = useState('free');
  const [courseCategory, setCourseCategory] = useState('');
  const [payment, setPayment] = useState('');

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (step === 4) {
      // Handle form submission on the last step
      console.log('Form submitted:', {
        courseName,
        courseDescription,
        courseDuration,
        courseType,
        courseCategory,
        payment
      });
      // Reset form fields after submission
      setCourseName('');
      setCourseDescription('');
      setCourseDuration(1); // Reset duration to default
      setCourseType('free');
      setCourseCategory('');
      setPayment('');
    } else {
      nextStep();
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className='step-content'>
            <h1>How about a working title?</h1>
            <label>It's ok if you can't think of a good title now. You can change it later.</label>
            <input type="text" value={courseName} maxLength={20} placeholder="e.g. Learn React from Scratch" onChange={(e) => setCourseName(e.target.value)} required />
          </div>
        );
      case 2:
        return (
          <div className='step-content'>
            <h1>What is description fits the knowledge you'll share?</h1>
              <label>Add course description of 50- 100 words you can change it later</label>
            <input type="text" value={courseDescription} maxLength={60} placeholder='Lets write Description' onChange={(e) => setCourseDescription(e.target.value)} required />
          </div>
        );
        case 3:
          return (
            <div className='step-content'>
              <h1>How much time can you spend creating your course per week?</h1>
              <label>It just tells the duration of your course to complete</label>
              <select value={courseDuration} onChange={(e) => setCourseDuration(parseInt(e.target.value))} required>
                <option value="" disabled selected>Select Duration</option>
                {[...Array(5).keys()].map((index) => (
                  <option key={index * 2 + 2} value={index * 2 + 2}>{index * 2 + 2} hours</option>
                ))}
              </select>
            </div>
          );
        case 4:
          return (
            <div className='step-content'>
              <h1>What category best fits the knowledge you'll share?</h1>
              <label>If you're not sure about the right category, you can change it later.</label>
              <select value={courseCategory} onChange={(e) => setCourseCategory(e.target.value)} required>
                <option value="" disabled selected>Choose Course Category</option>
                <option value="game">Game</option>
                <option value="development">Development</option>
              </select>
            </div>
          );

      // case 6:
      //   return (
      //     <div>
      //       <label>Payment:</label>
      //       <input type="text" value={payment} onChange={(e) => setPayment(e.target.value)} required />
      //     </div>
      //   );
      default:
        return null;
    }
  };

  return (
    <div className='form-container'>
      <Logo step={step} /> {/* Pass the step prop to the Logo component */}
      <form onSubmit={handleSubmit}>
        {renderStep()}
        <div className='footer-button'>
        <button type="button" onClick={prevStep} disabled={step === 1}>Back</button>
        <button type="submit">{step === 4 ? 'Submit' : 'Next'}</button>
        </div>
      </form>
    </div>
  );
}

export default CourseCreationForm;
