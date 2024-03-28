import React, { useState } from 'react';
import Input from '../../../../../Constants/Input/input';
import Button from '../../../../../Constants/button/button';
import './courseExpectInput.css';

const CourseExpectInput = () => {
  const initialInputFields = [
    { value: '', placeholder: 'Example: Curious about DataScience', name: '', maxLength: 50 },
    { value: '', placeholder: 'Example: Build real-world projects', name: '', maxLength: 50 },
  ];

  const [inputFields, setInputFields] = useState([...initialInputFields]);
  const maxInputs = 4;

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
    <div className='course-expect'>
      <div className='expect'>
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
        {inputFields.length < maxInputs && <Button onClick={addInputField}>+ Add more expectations</Button>}
      </div>
    </div>
  );
};

export default CourseExpectInput;
