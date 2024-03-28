import React, { useState } from 'react';
import Input from '../../../../../Constants/Input/input';
import Button from '../../../../../Constants/button/button';
import './objectiveInput.css';

const ObjectiveInput = () => {
  const initialInputFields = [
    { value: '', placeholder: 'Example: Define the roles and responsibilities', name: '', maxLength: 50 },
    { value: '', placeholder: 'how to visualize it', name: '', maxLength: 30 },
    { value: '', placeholder: 'Example: identify project risk management', name: '', maxLength: 30 }
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
    <div className='objective'>
    <div className='obj'>
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
      {inputFields.length < maxInputs && <Button onClick={addInputField}>+ Add more to your response</Button>}
    </div>
    </div>
  );
};

export default ObjectiveInput;
