import React from 'react';
import { FaTimes } from 'react-icons/fa';

const NewLecture = ({ handleAddUnit, handleAddQuiz, handleAddCodingExercise, handleClose }) => {
  return (
    <div className='lecture'>      
        <FaTimes onClick={handleClose}/>
    <div className="lecture-options">
      <button onClick={handleAddUnit}>+ Unit</button>
      <button onClick={handleAddQuiz}>+ Quiz</button>
      <button onClick={handleAddCodingExercise}>+ Coding Exercise</button>
    </div>
    </div>

  );
};

export default NewLecture;
