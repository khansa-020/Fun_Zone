import React, { useState } from 'react';
import './NewSection.css';
import NewLecture from './NewLecture';
import CodingExerciseEditor from './CodingExcerciseEditor'; // Import the CodingExerciseEditor component
import { FaEdit, FaTrashAlt, FaTimes ,FaPlus, FaFile} from 'react-icons/fa'; // Import icons from Font Awesome

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
            <h3>Unpublished Section: </h3>
            <span><FaFile id='icn'/>{section.name} - {section.milestone}</span>
            <FaTrashAlt id='icn' onClick={() => handleDeleteSection(section.id)} /> 
            <FaEdit id='icn' onClick={() => handleEditSection(section.id)} /> 
            <button className='new-btn' onClick={() => handleAddLecture(section.id)}> <FaPlus id='icon' onClick={() => handleAddLecture(section.id)} /> Lecture</button>
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
        <button className='new-btn' onClick={() => setIsAddingSection(true)}><FaPlus id='icon' onClick={() => setIsAddingSection(true)} /> Section</button>
        {isAddingSection && (
          <div className="new-section-form">
            <FaTimes id='icn' onClick={handleCancel} /> 
           <div className='section-input'>
           <div className="input-container">
          <h3>New Section :</h3>
          <input
            type="text"
            name="name"
            placeholder="Enter a Title"
            value={newSection.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-right">
            <h4>What will students be able to do at the end of this section?</h4>
            <input
              type="text"
              name="milestone"
              placeholder="Enter a Learning Objective"
              value={newSection.milestone}
              onChange={handleInputChange}
            /></div>
            </div>
            <button  id='save' onClick={handleSaveSection}>Save</button>
            <button  id='save' onClick={handleCancel}>Cancel</button>
         </div>
        )}
      </div>
    </div>
  );
};

export default NewSection;
