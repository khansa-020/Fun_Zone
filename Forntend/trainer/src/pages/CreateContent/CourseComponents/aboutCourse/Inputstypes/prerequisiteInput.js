import React, { useState } from 'react';
import Input from '../../../../../Constants/Input/input';
import Button from '../../../../../Constants/button/button';
import './prerequisiteInput.css';

const PrerequisiteInput = () => {
  const initialInputFields = [
    { value: '', placeholder: 'Example: Programming fundamentals', name: '', maxLength: 50 },
    { value: '', placeholder: 'Example: Basic knowledge of JavaScript', name: '', maxLength: 50 },
    { value: '', placeholder: 'Example: Familiarity with HTML and CSS', name: '', maxLength: 50 }
  ];

  const [inputFields, setInputFields] = useState([...initialInputFields]);
  const maxInputs = 8;

  const addInputField = () => {
    if (inputFields.length < maxInputs) {
      const nextIndex = inputFields.length % initialInputFields.length;
      setInputFields([...inputFields, initialInputFields[nextIndex]]);
    }
  };

  const handleInputChange = (index, event) => {
    const values = [...inputFields];
    values[index].value = event.target.value;
    setInputFields(values);
  };

  return (
    <div className='prerequisite'>
      <div className='prereq'>
        {inputFields.map((inputField, index) => (
          <div key={index}>
            <Input
              type="text"
              placeholder={inputField.placeholder}
              name={inputField.name}
              value={inputField.value}
              onChange={(e) => handleInputChange(index, e)}
              maxLength={inputField.maxLength}
            />
          </div>
        ))}
        {inputFields.length < maxInputs && <Button onClick={addInputField}>+ Add more prerequisite</Button>}
      </div>
    </div>
  );
};

export default PrerequisiteInput;
