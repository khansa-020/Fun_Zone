import React from 'react';

function ObjectiveComponent({ objectives, handleObjectiveChange }) {
  return (
    <div className='objective'>
      {objectives.map((objective, index) => (
        <div key={index}>
          <input
            type="text"
            value={objective}
            placeholder={`Learning Objective ${index + 1}`}
            onChange={(e) => handleObjectiveChange(index, e.target.value)}
            required
          />
        </div>
      ))}
    </div>
  );
}

export default ObjectiveComponent;
