import React, { useState } from 'react';
import './NewSection.css';
import NewLecture from './NewLecture';
import CodingExerciseEditor from './CodingExcerciseEditor'; // Import the CodingExerciseEditor component
import { FaEdit, FaTrashAlt, FaTimes } from 'react-icons/fa'; // Import icons from Font Awesome

const NewSection = () => {
  const [sections, setSections] = useState([]);
  const [newSection, setNewSection] = useState({ name: '', milestone: '' });
  const [isAddingSection, setIsAddingSection] = useState(false);
  const [showLectureOptions, setShowLectureOptions] = useState(false);
  const [showCodingExerciseEditor, setShowCodingExerciseEditor] = useState(false); // Add state for showing the coding exercise editor

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewSection({ ...newSection, [name]: value });
  };

  const handleSaveSection = () => {
    if (newSection.name.trim() !== '' && newSection.milestone.trim() !== '') {
      setSections([...sections, { ...newSection, id: Date.now() }]);
      setNewSection({ name: '', milestone: '' });
      setIsAddingSection(false);
    } else {
      alert('Please enter both section name and milestone.');
    }
  };

  const handleDeleteSection = (id) => {
    setSections(sections.filter(section => section.id !== id));
  };

  const handleEditSection = (id) => {
    // Implement edit functionality if needed
  };

  const handleCancel = () => {
    setNewSection({ name: '', milestone: '' });
    setIsAddingSection(false);
  };

  const handleAddLecture = () => {
    setShowLectureOptions(true);
  };

  const handleCloseLectureOptions = () => {
    setShowLectureOptions(false);
  };

  const handleAddCodingExercise = () => {
    setShowCodingExerciseEditor(true); 
  };

  return (
    <div className="make-content">
      <div className='section-view'>
        {sections.map(section => (
          <div key={section.id}>
            <span>{section.name} - {section.milestone}</span>
            <FaTrashAlt onClick={() => handleDeleteSection(section.id)} /> {/* Delete icon */}
            <FaEdit onClick={() => handleEditSection(section.id)} /> {/* Edit icon */}
            <button onClick={() => handleAddLecture(section.id)}>+ Lecture</button>
          </div>
        ))}

        {showLectureOptions && (
          <NewLecture
            // handleAddUnit={handleAddUnit}
            // handleAddQuiz={handleAddQuiz}
            handleAddCodingExercise={handleAddCodingExercise}
            handleClose={handleCloseLectureOptions}
          />
        )}

        {showCodingExerciseEditor && (
          <CodingExerciseEditor language="javascript" /> 
        )}
      </div>

      <div className='new-section'>
        <button onClick={() => setIsAddingSection(true)}>+ Section</button>
        {isAddingSection && (
          <div className="new-section-form">
            <FaTimes onClick={handleCancel} /> 
            <div className='section-input'>
           <span> <h3>New Section :</h3>
            <input
              type="text"
              name="name"
              placeholder="Enter a Title"
              value={newSection.name}
              onChange={handleInputChange}
            /></span>
            <h4>What will students be able to do at the end of this section?</h4>
            <input
              type="text"
              name="milestone"
              placeholder="Enter a Learning Objective"
              value={newSection.milestone}
              onChange={handleInputChange}
            /></div>
            <button id='save' onClick={handleSaveSection}>Save</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewSection;
