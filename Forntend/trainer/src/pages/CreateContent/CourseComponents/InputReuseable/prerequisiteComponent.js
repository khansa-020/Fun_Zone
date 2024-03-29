import React from 'react';

function PrerequisiteComponent({ prerequisites, handlePrerequisiteChange }) {
  return (
    <div className='prerequisite'>
      {prerequisites.map((prerequisite, index) => (
        <div key={index}>
          <input
            type="text"
            value={prerequisite}
            placeholder={`Prerequisite ${index + 1}`}
            onChange={(e) => handlePrerequisiteChange(index, e.target.value)}
            required
          />
        </div>
      ))}
    </div>
  );
}

export default PrerequisiteComponent;
